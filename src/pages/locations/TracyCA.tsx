import { Header } from "@/components/layout/Header";
import tracyHero from "@/assets/tracy-hero.webp";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Phone, Shield, CheckCircle, Search, Target, Zap, Globe, Star, Users, Home, Heart, Building2, UtensilsCrossed, BarChart3, Brain, TrendingUp, MessageSquare } from "lucide-react";
import { CampaignResultsCards } from "@/components/locations/CampaignResultsCards";
import { tracyCards } from "@/components/locations/campaignCardData";
import { LocationJsonLd } from "@/components/seo/LocationJsonLd";
import { PersonCTA } from "@/components/services";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { useUtm } from "@/hooks/use-utm";
import { baseContactCTA } from "@/config/contactCTA";

const TracyCA = () => {
  const { buildUrl } = useUtm();
  const strategyCallUrl = buildUrl("https://lp.growsmallbiz.io/digital-growth-strategy-session", "schedule-strategy-call");

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Digital Marketing Services in Tracy, CA | GrowSmallBiz</title>
        <meta name="description" content="Digital Marketing in Tracy, CA: Grow your business with AI Local SEO, AI optimized Google Ads, and 24x7 AI marketing automation." />
        <meta name="keywords" content="digital marketing Tracy, local SEO Tracy, Google Ads management, reputation management Tracy, AI marketing automation, lead generation services, small business marketing, integrated marketing solutions" />
        <link rel="canonical" href="https://growsmallbiz.io/locations/tracy-ca/" />
      </Head>
      <LocationJsonLd
        cityName="Tracy"
        stateCode="CA"
        description="GrowSmallBiz serves Tracy CA local service businesses with integrated digital marketing — Local SEO, Google Ads, AI automation, reputation management."
        url="/locations/tracy-ca/"
        latitude={37.7397}
        longitude={-121.4252}
        breadcrumbs={[
          { name: "Locations We Serve", url: "/locations/locations-we-serve/" },
          { name: "Tracy, CA", url: "/locations/tracy-ca/" },
        ]}
      />

      <Header />

      <main id="main-content">

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <img src={tracyHero} alt="GrowSmallBiz digital marketing agency serving Tracy CA San Joaquin Valley local service businesses" width={1920} height={768} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: `hsl(var(--background) / 0.82)` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="service-badge mb-4 animate-fade-up">
              <MapPin className="w-4 h-4" />
              <span>Tracy, CA — Local Service Business Marketing | San Joaquin Valley Gateway City</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 animate-fade-up leading-tight bg-gradient-heading bg-clip-text text-transparent">
              Stop Losing Tracy Leads to Competitors — Full-Service Digital Marketing Built for Local Service Businesses
            </h1>

            <p className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up mt-6" style={{ animationDelay: "0.1s" }}>
              Tracy is not a Bay Area suburb. It is San Joaquin County's fastest-growing gateway city — the first major Central Valley community on the I-205/I-580 corridor heading east from the Bay Area. It carries a large professional commuter population that works in the Bay Area and comes home to Tracy each evening, a steady wave of Bay Area families relocating for affordable homeownership, and a growing residential base that creates consistent demand for every local service category. The businesses that establish digital authority here now become the default choice for the households still arriving.
            </p>

            <p className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up mt-4" style={{ animationDelay: "0.15s" }}>
              GrowSmallBiz is a digital marketing agency based in Danville — approximately 40 miles from Tracy via I-205/I-580. We build integrated marketing systems for local service businesses across Tracy and San Joaquin County. Contractors, dentists, restaurants, real estate professionals — if you serve Tracy clients, we are built for you.
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
            <p className="text-primary text-sm font-medium mt-3 animate-fade-up" style={{ animationDelay: "0.25s" }}>No commitment. No pressure. Just a clear path forward for your business.</p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              What Makes GrowSmallBiz Different — And Why It Matters for Your Tracy Bottom Line
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Tracy's SERP landscape is occupied by thin local pages and out-of-state template agencies ranking on domain authority alone. No agency currently offers Tracy service businesses an integrated marketing system — local SEO, paid ads, AI automation, and retention — under one coordinated strategy.</p>
            <p className="text-base text-muted-foreground mt-3 max-w-3xl mx-auto">Subrata Guha, GrowSmallBiz founder, brings 30+ years of Fortune 500 sales, marketing, and growth strategy experience to the specific challenges of Tracy's commuter city market.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "Closest integrated agency:", body: "Based in Danville, 40 miles from Tracy via I-205/I-580. The agencies currently ranking for Tracy keywords are either out-of-state template agencies or local single-channel providers. GrowSmallBiz is the nearest full-service integrated marketing agency serving Tracy's local service businesses." },
              { label: "Integrated system:", body: "One system covering awareness, lead capture, AI follow-up, nurture, and retention. No separate vendors pointing fingers. One team accountable for your results across every channel." },
              { label: "Central Valley market knowledge:", body: "Tracy's commuter timing pattern, affordability migration wave, and San Joaquin Valley summer heat create demand dynamics that Bay Area agency pages built from Tri-Valley templates completely miss." },
              { label: "AI-powered execution:", body: "AI Receptionist, AI QuadBots, SMART nurture sequences, and VIP Club systems capture Tracy's commuter-hour inquiries — the 6am emergency call and the 9pm homeowner search that manual teams miss every day." },
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

      {/* ===== WHY TRACY IS A MARKET WORTH WINNING ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" /> LOCAL MARKET
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              Your Competitors Are Winning in Tracy Search Results. Here's Exactly Why — and How to Take It Back.
            </h2>
          </div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {[
              { title: "Tracy's Distinct Market Structure: Commuter City, Migration Wave, and Valley Economics", body: "Tracy's local service market is at an inflection point. The city's population has grown significantly over the past decade, driven by Bay Area families relocating for affordable homeownership and new residential development across the I-205 corridor. Each wave of new arrivals creates a wave of first-time local service provider decisions — which HVAC company, which dentist, which real estate agent, which restaurant becomes the household default. The businesses that establish visible digital authority now capture those relationships before competitors even know the household exists." },
              { title: "The Bay Area commuter dynamic", body: "A substantial portion of Tracy's working population commutes to Bay Area employment via Highway 580 to Livermore, the ACE commuter train to San Jose, or I-205 toward the East Bay. These are professional households earning Bay Area salaries and living in Tracy for affordability. They search for local services on evenings, weekends, and during commute windows — a specific timing pattern that standard business-hours marketing campaigns miss entirely. The homeowner who needs an HVAC tune-up or a dental appointment searches on their phone during the BART ride home, not during your office hours." },
              { title: "The affordability migration wave", body: "Tracy has absorbed a steady flow of Bay Area families priced out of the Tri-Valley and East Bay. These are first-time homeowners in an unfamiliar city who are actively forming their service provider relationships — choosing an HVAC contractor, a family dentist, a neighborhood restaurant, and a real estate agent for the first time. The business that appears first in Google Maps when that household searches becomes the default choice, often for years. This first-mover opportunity is the same dynamic that drove the Dublin city page strategy — and it is more acute in Tracy because the migration is ongoing and accelerating." },
              { title: "San Joaquin Valley summer heat", body: "Tracy regularly exceeds 100°F in July and August — inland heat that is significantly more extreme than the Bay Area cities where most of the agencies currently ranking for Tracy keywords are based. Summer HVAC emergency demand is intense and time-critical. The homeowner whose air conditioning fails at 4pm on a Friday in August calls the first contractor who answers. AI Receptionist is not optional for home service contractors in Tracy's summer market — it is the capability that determines whether you get that call or your competitor does." },
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
              The Local Search Gap Costing Most Tracy Service Businesses 10–15 Leads Every Month
            </h2>
          </div>
          <div className="prose prose-lg prose-invert max-w-none space-y-6">
            <p className="text-foreground/90 leading-relaxed">According to <a href="https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/local-search-conversion-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Think with Google</a>, 76% of consumers who perform a local search on their smartphone visit or contact a business within 24 hours. In Tracy, where many of those searches arrive during evening and weekend commuter windows, map pack visibility at exactly the right hour determines whether that consumer becomes your client or your competitor's. <a href="https://www.brightlocal.com/research/local-consumer-review-survey-2024/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BrightLocal research</a> shows 81% of consumers use Google to evaluate local businesses — and <a href="https://www.brightlocal.com/resources/local-seo-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">56% of businesses have still not fully optimized their Google Business Profile</a>. In a market growing as fast as Tracy, that optimization gap means real monthly revenue going to whoever shows up first.</p>
          </div>

          <div className="mt-10 bg-primary/5 border-l-4 border-primary rounded-r-xl px-6 py-5">
            <p className="text-lg md:text-xl font-semibold italic text-foreground/90">"Tracy is the first major city where Bay Area families land when they leave. Every household that arrives is choosing a new HVAC contractor, dentist, restaurant, and real estate agent. The business that appears first in local search becomes the default choice — often for years."</p>
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
              The Integrated Marketing System Built for Tracy Service Businesses — Fills Your Calendar, Not Just Your Dashboard
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Tracy's market rewards businesses that are visible at the right moment, responsive at the right speed, and trusted before first contact. An integrated system delivers all three — not as separate channel investments, but as a coordinated engine that compounds over time as Tracy's population continues to grow.</p>
          </div>

          {/* Services Overview Table — Desktop */}
          <div className="hidden md:block overflow-x-auto mb-16">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">Service</th>
                  <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">What We Do for You</th>
                  <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">Tracy Business Impact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { service: "Local SEO & Google Business Profile", whatWeDo: "GBP optimization, San Joaquin County citation building, review velocity management, commuter-search keyword targeting, local link building", impact: "Rank in Google Maps 3-pack for Tracy ZIP codes 95376 and 95377; capture homeowner searches that arrive evenings and weekends when Bay Area commuters are home" },
                  { service: "Managed Google Ads / PPC", whatWeDo: "Call-only campaigns, evening and weekend scheduling emphasis for commuter demographic, conversion tracking, bid optimization", impact: "Immediate top-of-page visibility for Tracy searches; ad scheduling aligned with when Tracy commuters are actually home and searching for local services" },
                  { service: "Google Local Service Ads (LSA)", whatWeDo: "Background check coordination, license verification, budget management, Google Guaranteed badge setup", impact: "Appear above out-of-state and template agency listings with a Google-verified trust badge — critical for home service contractors competing in Tracy's fast-growing residential market" },
                  { service: "Social Media & Meta Ads", whatWeDo: "Geo-targeted Facebook and Instagram campaigns for Tracy ZIP codes; Bay Area relocation audience targeting; retargeting sequences", impact: "Reach Tracy's professional household demographic on evenings and weekends; target Bay Area families actively researching Tracy neighborhoods for relocation" },
                  { service: "Conversion-Focused Website Design", whatWeDo: "Mobile-first design, click-to-call integration, online booking, trust elements, page speed optimization", impact: "Tracy's commuter population searches on mobile during BART and ACE train rides — a desktop-first website misses the highest-intent search window for this demographic" },
                  { service: "Reputation Management", whatWeDo: "Automated review request campaigns, Google/Yelp monitoring, professional response guidance", impact: "Tracy's growing community is actively choosing new service providers — first-mover businesses with strong review profiles become the default choice for the wave of families still arriving from the Bay Area" },
                  { service: "AI Receptionist & Lead Automation", whatWeDo: "24/7 missed-call SMS follow-up, AI QuadBots, SMART nurture sequences, VIP Club, Reactivation campaigns, CRM integration", impact: "Tracy's commuter population calls before and after work hours — AI Receptionist captures the 6am HVAC emergency call and the 9pm plumbing inquiry that manual teams miss every day" },
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
              { service: "Local SEO & Google Business Profile", whatWeDo: "GBP optimization, San Joaquin County citation building, review velocity management, commuter-search keyword targeting, local link building", impact: "Rank in Google Maps 3-pack for Tracy ZIP codes 95376 and 95377; capture homeowner searches that arrive evenings and weekends when Bay Area commuters are home" },
              { service: "Managed Google Ads / PPC", whatWeDo: "Call-only campaigns, evening and weekend scheduling emphasis for commuter demographic, conversion tracking, bid optimization", impact: "Immediate top-of-page visibility for Tracy searches; ad scheduling aligned with when Tracy commuters are actually home and searching for local services" },
              { service: "Google Local Service Ads (LSA)", whatWeDo: "Background check coordination, license verification, budget management, Google Guaranteed badge setup", impact: "Appear above out-of-state and template agency listings with a Google-verified trust badge — critical for home service contractors competing in Tracy's fast-growing residential market" },
              { service: "Social Media & Meta Ads", whatWeDo: "Geo-targeted Facebook and Instagram campaigns for Tracy ZIP codes; Bay Area relocation audience targeting; retargeting sequences", impact: "Reach Tracy's professional household demographic on evenings and weekends; target Bay Area families actively researching Tracy neighborhoods for relocation" },
              { service: "Conversion-Focused Website Design", whatWeDo: "Mobile-first design, click-to-call integration, online booking, trust elements, page speed optimization", impact: "Tracy's commuter population searches on mobile during BART and ACE train rides — a desktop-first website misses the highest-intent search window for this demographic" },
              { service: "Reputation Management", whatWeDo: "Automated review request campaigns, Google/Yelp monitoring, professional response guidance", impact: "Tracy's growing community is actively choosing new service providers — first-mover businesses with strong review profiles become the default choice for the wave of families still arriving from the Bay Area" },
              { service: "AI Receptionist & Lead Automation", whatWeDo: "24/7 missed-call SMS follow-up, AI QuadBots, SMART nurture sequences, VIP Club, Reactivation campaigns, CRM integration", impact: "Tracy's commuter population calls before and after work hours — AI Receptionist captures the 6am HVAC emergency call and the 9pm plumbing inquiry that manual teams miss every day" },
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
              Get Found First When Tracy Customers Search for Your Services —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Local SEO & Google Maps Domination</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">Local SEO in Tracy requires keyword architecture that reflects two distinct search audiences: the long-time Tracy resident searching from home, and the Bay Area commuter searching on a smartphone during a transit window. Both audiences are valuable. Both need to find you at the top of Google Maps. And neither is well-served by the thin, generic pages currently occupying Tracy's local search results.</p>
            <ul className="space-y-3 mb-6">
              {[
                "Google Business Profile optimization calibrated for Tracy's growth market — category selection, service area configuration covering 95304, 95376, 95377, and 95378, photo cadence, Q&A management, and posting frequency aligned with Google's local ranking signals",
                "Neighborhood-level keyword targeting: 'HVAC repair Tracy CA,' 'dentist 95376,' 'plumber West Valley Tracy,' 'restaurant downtown Tracy' — hyper-local terms that out-of-state template agencies never build for this specific market",
                "San Joaquin County citation building — structured citations across local directories, Tracy Chamber resources, and regional business associations that tell Google you serve this specific community",
                "Review velocity management — systematic review request campaigns that generate consistent new review activity, building the recency signal that Tracy's growing population relies on when choosing service providers in a city they are still learning",
                "First-mover SEO strategy for businesses targeting newly arrived households — content and keywords calibrated for the search behavior of Bay Area transplants forming their first Tracy service provider relationships",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Optimize Your Local SEO for Tracy — Schedule Strategy Call
            </a>
          </div>

          {/* 2. Google Ads */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Need Leads This Week, Not This Quarter?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Google Ads That Deliver Tracy Customers on Day One.</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">Google Ads in Tracy require audience-aware scheduling. Campaigns running standard 9-to-5 business hours miss Tracy's primary search window — the evenings and weekends when Bay Area commuters are home and making decisions about their households. The same homeowner who ignores a 2pm ad on a Tuesday will act on a 7pm ad on a Thursday because that is when they are actually thinking about home maintenance and service needs.</p>
            <ul className="space-y-3 mb-6">
              {[
                "Evening and weekend scheduling emphasis for campaigns targeting Tracy's commuter household demographic — aligning ad delivery with when Bay Area commuters are actually home and searching",
                "Call-only campaigns for emergency home service categories — HVAC, plumbing, electrical — capturing the urgent inquiry at the exact moment of highest intent",
                "Summer seasonal campaign amplification for HVAC emergency and maintenance categories — July and August heat events drive significant call volume spikes that properly scheduled campaigns capture and competitors miss",
                "Location targeting calibrated for Tracy ZIP codes with bid adjustments reflecting the density of Bay Area relocation households in specific neighborhoods and new developments",
                "Complete conversion tracking — every dollar of ad spend accountable to phone calls, form submissions, and booked appointments across all devices",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Launch Google Ads for Your Tracy Business — Start Generating Leads This Week
            </a>
          </div>

          {/* 3. Google LSA */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Show Up Above Every Competitor With a Google Trust Badge —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">More Tracy Leads, Pre-Qualified Before They Call</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">For licensed home service contractors in Tracy, Google Local Service Ads place your business above all standard search results — above out-of-state template agencies, above generic directory listings, and above every other competitor without a Google Guaranteed verification. In a market where new residents are choosing service providers they have never heard of before, the Google Guaranteed badge is the most efficient trust signal available: Google has verified your license, insurance, and background check before you ever speak to the customer.</p>
            <ul className="space-y-3 mb-6">
              {[
                "Full LSA setup and verification — background checks, license documentation, insurance confirmation, and ongoing compliance management handled on your behalf",
                "Pay-per-verified-lead model — you pay only when a prospective customer contacts you directly through the ad, not for clicks to your website",
                "Budget management calibrated for Tracy's home services market — maximizing verified lead volume within your service territory across Tracy's ZIP codes",
                "Dispute management for invalid leads — protecting your investment and keeping cost-per-lead efficient in Tracy's growing but competitive home service market",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Set Up Google LSA for Your Tracy Business — Get Verified Leads
            </a>
          </div>

          {/* 4. Social Media & Meta Ads */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Reach Tracy Homeowners Before They Need You —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">And Be the First Call When They Do</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">Meta advertising in Tracy requires audience intelligence that reflects the city's demographic reality. Bay Area transplant households respond to messaging that acknowledges their transition — finding trusted local providers in a new community is a real concern for recently relocated families. Long-time Tracy residents respond to community connection and local familiarity. Both segments are on Facebook and Instagram. Both require different creative approaches and different delivery timing.</p>
            <ul className="space-y-3 mb-6">
              {[
                "Geo-targeted campaigns covering Tracy ZIP codes 95304, 95376, 95377, and 95378 with demographic filters calibrated for the professional household and Bay Area transplant profiles that make up Tracy's primary service-consuming demographic",
                "Bay Area relocation audience targeting — households that have recently moved from Alameda County, Contra Costa County, and the South Bay who are actively building their Tracy service provider network",
                "Evening and weekend delivery emphasis — reaching Tracy's commuter population during the hours they are home and making household decisions",
                "Retargeting sequences for website visitors who did not convert — keeping your business visible during the 2 to 4 week decision window that characterizes home service and healthcare purchases in a new community",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Launch Social Media Advertising for Your Tracy Business — Get Started
            </a>
          </div>

          {/* 5. Reputation Management */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              A 3-Star Rating Is Silently Killing Your Tracy Business.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Here's How We Fix It in 90 Days.</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">In a market where a significant portion of the customer base is still choosing local service providers for the first time, online reviews carry more weight than in established markets where word-of-mouth has had years to build. A Tracy homeowner who relocated from Fremont six months ago does not have a neighbor to ask for a plumber recommendation — they have Google. Your star rating and review volume are the first and often only trust signal they evaluate before calling.</p>
            <p className="text-foreground/80 italic mb-6"><a href="https://www.brightlocal.com/research/local-consumer-review-survey-2024/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BrightLocal's 2024 survey</a> found that 88% of consumers would use a business that responds to all of its reviews, compared to 47% for businesses that do not respond at all. In Tracy's growing market, a professional response to every review — positive and negative — is visible to every new resident reading reviews while deciding who to call.</p>
            <ul className="space-y-3 mb-6">
              {[
                "Automated review request campaigns timed immediately after service completion — capturing authentic feedback while the experience is fresh, using the frictionless request format that busy Tracy households actually respond to",
                "Multi-platform monitoring across Google, Yelp, Houzz, Healthgrades, and Zocdoc — covering every platform Tracy's diverse residential population uses to evaluate local businesses",
                "Professional negative review response guidance — in a growing market where your reviewers and prospective customers often live in the same new developments, every response is a public statement visible to your next potential client",
                "Healthcare-compliant reputation management for dental practices and wellness professionals serving Tracy's growing family population",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Build a 4.5+ Star Reputation in Tracy — Start Your Review Campaign
            </a>
          </div>

          {/* 6. Website Design */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Your Website Should Be Your Best Salesperson.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">If It's Not Generating Tracy Leads Daily, It's Costing You Money.</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">Tracy's commuter population searches on mobile during transit windows — BART rides, ACE train commutes, and lunch breaks away from the Bay Area office. A desktop-first website is a conversion disadvantage for this demographic before they ever read a word of your content. Page speed, above-the-fold CTAs, and click-to-call functionality are not nice-to-haves in Tracy's market — they are the difference between a lead captured and a lead lost to whoever loads faster.</p>
            <ul className="space-y-3 mb-6">
              {[
                "Mobile-first, fast-loading design — critical for Tracy's commuter demographic searching on transit and required by Google's mobile-first indexing algorithm",
                "Above-the-fold click-to-call and tap-to-text — immediate contact options for the commuter searching on a phone during a narrow decision window",
                "Trust architecture calibrated for new residents — licensing credentials, local service area maps, Tracy-specific neighborhood references, and review widgets that speak to households still learning the community",
                "Tracy-specific landing pages for service categories with high seasonal demand — summer HVAC, spring pest control, year-round plumbing and electrical — capturing seasonal search intent that generic agency pages never address",
                "Online booking integration for appointment-driven businesses — dental practices, wellness providers, and restaurants — streamlining the conversion from mobile visitor to confirmed booking",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Get a Conversion-Focused Website Built for Tracy — See Our Work
            </a>
          </div>

          {/* 7. AI Receptionist & Lead Automation */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Every Missed Call Is a Lost Tracy Job.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Our AI Receptionist Follows Up in Seconds — So You Never Lose Another Lead to a Faster Competitor.</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">Research from <a href="https://www.insidesales.com/response-time-matters/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">MIT and InsideSales.com</a> confirms that leads contacted within 5 minutes are 21 times more likely to convert than those reached after 30 minutes. In Tracy, the commuter timing pattern makes this stat particularly consequential. A Bay Area commuter searching for an HVAC contractor at 7:30pm on a Thursday after arriving home from work is making that decision tonight — not tomorrow morning. The contractor who responds in five minutes gets the appointment. The contractor whose phone rings to voicemail loses the job to whoever answers next.</p>
            <ul className="space-y-3 mb-6">
              {[
                "AI Receptionist: answers missed calls 24/7, captures caller information, responds to common questions, and books appointments automatically — capturing the evening commuter inquiry, the weekend homeowner call, and the summer emergency HVAC request with equal capability regardless of when it arrives",
                "AI QuadBots: conversational AI managing web chat, voice interactions, and lead qualification simultaneously — the evening website visitor from a BART commuter receives an intelligent response, qualifies their need, and routes directly into the CRM pipeline",
                "SMART nurture sequences: automated CRM workflows sending the right message at the right time — appointment reminders, seasonal maintenance campaigns, renewal notices, and review requests running continuously for Tracy's growing client base",
                "VIP Club and reactivation campaigns: for restaurants, dental practices, and repeat-visit businesses, structured loyalty and reactivation systems that convert Tracy's community-building new residents into loyal, referring regulars",
                "CRM integration and lead tracking — every inquiry tracked from first contact to closed job, giving you complete visibility into your Tracy marketing ROI across all channels and all hours",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground/80 italic mb-6">Retention is the fastest path to revenue growth for established Tracy service businesses. In a market where word-of-mouth takes years to build and new residents are still choosing providers, a systematic retention infrastructure converts first-time clients into the neighborhood referrers that sustain long-term growth.</p>
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
              Built for Your Industry, Not Adapted From Someone Else's Playbook — See If We're the Right Fit for Tracy
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">GrowSmallBiz works exclusively with local service businesses in Tracy and the surrounding San Joaquin Valley. We do not work with eCommerce stores, national retailers, or product-based businesses. Our systems are purpose-built for the verticals below — with genuine knowledge of Tracy's commuter timing pattern, affordability migration wave, and Central Valley seasonal demand.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Home Service Contractors — HVAC, Roofing, Plumbing & Electrical: Fill Your Tracy Calendar Year-Round</h3>
              <p className="text-muted-foreground leading-relaxed">Tracy's combination of rapid residential growth, extreme summer heat, and a large commuter household base creates consistent, year-round demand for home service contractors across every trade category. New construction throughout the I-205 corridor generates ongoing work for contractors who establish early relationships with developers and homeowners. Existing residential neighborhoods create steady replacement and maintenance demand. And Tracy's summer temperatures — regularly exceeding 100°F in July and August — create an emergency HVAC demand pattern that is more intense than any Bay Area city in GrowSmallBiz's service territory. We build the systems that make Tracy home service contractors visible when demand spikes, responsive when emergencies arrive, and trusted when new households are choosing their first local providers.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Dentists, Med Spas & Wellness Professionals: Attract Tracy Patients Who Book and Stay</h3>
              <p className="text-muted-foreground leading-relaxed">Tracy's growing population brings growing demand for dental care, chiropractic care, wellness services, and specialty health practices — and a population that is actively choosing new healthcare providers for the first time. Bay Area transplants are looking for a new family dentist, a new chiropractor, a new med spa or wellness practice in their new community. Chiropractic care is a high-consideration service: patients research before they commit, making Google Maps visibility and review depth the primary conversion levers. We build the complete digital presence — optimized Google Business Profile, review velocity campaigns, and AI booking follow-up — that positions Tracy practices to be the first and most trusted choice when a new household searches for care in their ZIP code.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <UtensilsCrossed className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Restaurants & Hospitality: Fill More Tables, Build Loyal Regulars, Own Tracy's Dining Scene</h3>
              <p className="text-muted-foreground leading-relaxed">Tracy's restaurant market is growing alongside its population, with a dining community that ranges from established local institutions to new concepts opening to serve the expanding residential base. Google Maps visibility and review recency are the primary discovery channels for Tracy's dining audience — particularly for households that are still exploring what the city has to offer. We build the full digital system — Local SEO, Google Maps optimization, social media, and VIP Club retention — that fills tables consistently, not just during peaks and weekends.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Real Estate Agents & Brokers: Own the Tracy Market, Multiply Your Listing Inquiries, Build a Referral Engine</h3>
              <p className="text-muted-foreground leading-relaxed">Tracy is one of the most active real estate markets in the Central Valley, driven by Bay Area buyers relocating for affordability and Tracy residents moving within the city as it grows. The agent who captures first-page visibility for Tracy real estate searches and builds a reputation as the market's trusted local expert generates a self-sustaining referral engine — each relocated family knows other Bay Area families considering the same move. We build the local SEO, targeted paid campaigns, and personal branding systems that establish lasting Tracy market authority and generate qualified listing inquiries from buyers and sellers at every stage of the market cycle.</p>
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

          <CampaignResultsCards cards={tracyCards} />

          <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">Single-Channel Marketing Doesn't Win in Tracy's Growing Market. Here's What Actually Moves the Needle.</h3>
          <p className="text-foreground/80 leading-relaxed mb-6">The agencies currently ranking for Tracy digital marketing keywords are running thin pages or domain-authority plays with no genuine Tracy market knowledge. Outperforming them requires not just better content — it requires an integrated system aligned with Tracy's specific commuter timing, first-mover opportunity, and seasonal demand patterns.</p>
        </div>
      </section>

      {/* ===== DIFFERENTIATORS ===== */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" /> WHY WE WIN
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              No Templates. No Generalists. No Excuses. Why GrowSmallBiz Outperforms Every Agency That's Failed Your Tracy Business Before
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Tracy's SERPs are occupied by a thin local competitor and out-of-state agencies ranking on domain authority with no Central Valley market knowledge. Here is what makes the system GrowSmallBiz builds consistently outperform them in San Joaquin County's fastest-growing city:</p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              { title: "Vertical Specialist", description: "We only serve contractors, health & wellness professionals, restaurants, and real estate pros — purpose-built systems for local service businesses." },
              { title: "Integrated System", description: "Every channel — SEO, Ads, Reputation, AI Automation — connects and feeds one goal: more booked appointments and service calls in Tracy." },
              { title: "AI-Powered Speed", description: "AI Receptionist captures the 6am emergency call and the 9pm commuter inquiry that manual teams miss every day — critical for Tracy's off-hours search pattern." },
              { title: "Closest Agency", description: "Based in Danville, 40 miles from Tracy via I-205/I-580 — the nearest full-service integrated marketing agency serving Tracy's local service businesses." },
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
        title="Your Questions Answered — No Jargon, No Sales Pitch, Just Straight Answers About Digital Marketing in Tracy"
        faqs={[
          { question: "What types of businesses does GrowSmallBiz work with in Tracy?", answer: "We work exclusively with local service businesses in Tracy and the surrounding San Joaquin Valley — including HVAC contractors, plumbers, electricians, roofers, dental practices, med spas, real estate professionals, restaurants, and other local service providers. We do not work with eCommerce stores, national retailers, product-based businesses, or law firms. Our systems are purpose-built for businesses that serve local Tracy clients directly." },
          { question: "How far is GrowSmallBiz from Tracy?", answer: "GrowSmallBiz is based in Danville, California — approximately 40 miles from Tracy via I-205 and I-580. We are the nearest full-service integrated digital marketing agency serving Tracy's local service businesses. Our team regularly serves clients across the I-580 corridor from the Tri-Valley through the San Joaquin Valley gateway cities." },
          { question: "How long does SEO take in Tracy?", answer: "Google Business Profile optimizations show measurable movement — increased views, calls, and direction requests — within 30 to 60 days. Organic rankings shift within 60 to 90 days for less competitive terms and 3 to 6 months for primary category keywords. Tracy's primary keyword 'digital marketing agency tracy ca' carries a KD of 42, while 'seo services tracy ca' carries a KD of 28 — meaning the SEO keyword cluster is the fastest path to organic ranking. Current SERP leaders are thin pages and domain-authority plays with no genuine Tracy market content. A properly structured integrated system page outperforms them within 6 to 12 months for the keyword clusters they are not addressing." },
          { question: "Why does Tracy require different marketing than Bay Area cities?", answer: "Three structural differences shape Tracy's market. First, the commuter timing pattern: a large share of Tracy's professional households commute to Bay Area employment, meaning local service searches cluster in evenings and weekends rather than business hours. Second, the affordability migration dynamic: a steady wave of Bay Area families relocating to Tracy for homeownership are actively forming first-time service provider relationships. Third, the Central Valley summer heat: Tracy regularly exceeds 100°F in July and August, creating emergency HVAC demand patterns that are more intense and more time-critical than any Bay Area city." },
          { question: "Can GrowSmallBiz help with both getting new leads and keeping existing clients?", answer: "Yes — and for established Tracy service businesses, retention is often the faster path to meaningful revenue growth. Acquiring a new customer costs five to seven times more than retaining an existing one. In a growing market where referrals compound — one satisfied Bay Area transplant refers the three other Bay Area families on the same street who are also looking for local service providers — a loyal client base is not just revenue, it is your most cost-effective marketing channel. Our retention infrastructure includes VIP Club membership systems, SMART nurture sequences that keep past clients engaged, reactivation campaigns that bring dormant customers back, and automated review programs that compound your reputation over time." },
          { question: "How does the AI Receptionist work for a Tracy service business?", answer: "The AI Receptionist is a 24/7 automated system that handles leads across every channel — after-hours calls, web forms, chat, and texts. For Tracy's commuter household demographic, this means capturing the 7pm HVAC inquiry from a homeowner who just arrived from a Bay Area workday, the 6am emergency plumbing call before the morning commute, and the Saturday afternoon dental inquiry from a family still building their local provider network. The AI Receptionist answers immediately, captures their information, responds to common questions, and books appointments directly into your scheduling system." },
          { question: "Do Google Local Service Ads work for Tracy contractors?", answer: "LSA is a top-performing paid channel for Tracy home service contractors. The pay-per-verified-lead model means you pay only when a consumer contacts you directly through the ad. The Google Guaranteed badge appears above all standard search results — making it the most visible position available for Tracy homeowners searching for licensed contractors. For HVAC, plumbing, and electrical contractors serving Tracy's growing residential base, LSA combined with strong evening and weekend scheduling typically delivers the lowest cost per qualified lead of any paid channel we manage." },
          { question: "What common SEO mistakes are Tracy businesses making right now?", answer: "Based on our market audits, the most common and costly mistakes are: ignoring mobile optimization despite Tracy's commuter population searching primarily on smartphones; running Google Ads campaigns with standard business-hours scheduling that miss Tracy's evening and weekend search window; claiming a Google Business Profile but never actively managing it; using generic Bay Area keyword strategies that miss Tracy's specific search terms and neighborhood references; and failing to solicit reviews consistently, leaving new residents with no local reputation signal when they search for your category for the first time." },
        ]}
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about marketing in Tracy?",
          description: "We're here to help. Reach out to us for a personalized consultation.",
          tagline: "Let's grow your Tracy business together.",
        }}
      />

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight mb-6 bg-gradient-heading bg-clip-text text-transparent">
              Every Day You Wait, Your Competitors Book Another Tracy Customer That Should Have Been Yours
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Tracy's growth means new households are choosing local service providers right now — today. The HVAC contractor, dentist, restaurant, and real estate agent they find first in Google becomes their default choice, often for years. The businesses that establish digital authority in Tracy's local search results now build a compounding advantage as each new wave of Bay Area relocations arrives and searches for exactly what you offer.</p>
            <p className="text-foreground/80 leading-relaxed mb-4">GrowSmallBiz gives Tracy service businesses the integrated marketing system that wins in a fast-growing market: one connected platform spanning awareness to retention, powered by AI, and managed by a team based 40 miles away in Danville. Subrata Guha, our founder, brings 30+ years of Fortune 500 sales, marketing, and growth strategy experience to the specific challenges of Tracy's commuter city market — the timing dynamics, the first-mover opportunity, and the seasonal demand patterns that agencies running Bay Area templates simply do not understand.</p>
            <p className="text-foreground/70 font-semibold mt-6">No long-term contracts. No templates. No excuses. Just one integrated system built specifically for your Tracy business.</p>
          </div>
        </div>
      </section>

      {/* ===== PRE-FORM PERSON CTA ===== */}
      <PersonCTA
        title="Schedule Strategy Call"
        description="Receive a personalized strategy session — Tracy local SEO audit, commuter timing analysis, and a clear growth roadmap built specifically for your San Joaquin Valley service business."
        buttonText="Schedule Strategy Call"
        buttonHref={strategyCallUrl}
        sectionClassName="py-16"
      />

      {/* ===== CONSULTATION FORM ===== */}
      <ConsultationFormSection utmCampaign="tracy-consultation" utmMedium="tracy-ca" />

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
              { label: "Livermore", to: "/locations/livermore-ca/" },
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

export default TracyCA;
