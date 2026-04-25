import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import walnutCreekHero from "@/assets/walnut-creek-hero.webp";

import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { MapPin, TrendingUp, AlertTriangle, Briefcase, Globe, Search, Target, Zap, Brain, Eye, BarChart3, Users, Star, Home, Heart, Building2, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { CampaignResultsCards } from "@/components/locations/CampaignResultsCards";
import { walnutCreekCards } from "@/components/locations/campaignCardData";
import { LocationJsonLd } from "@/components/seo/LocationJsonLd";
import { CardCTA } from "@/components/services";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { useUtm } from "@/hooks/use-utm";
import { baseContactCTA } from "@/config/contactCTA";

const WalnutCreekCA = () => {
  const { buildUrl } = useUtm();
  const strategyCallUrl = buildUrl("https://lp.growsmallbiz.io/digital-growth-strategy-session", "schedule-strategy-call");
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Digital Marketing Services in Walnut Creek, CA | GrowSmallBiz</title>
        <meta name="description" content="Walnut Creek digital marketing services: AI SEO, AI optimized Google Ads, and 24x7 marketing automation powered by AI for your business." />
        <meta name="keywords" content="local SEO, digital marketing Walnut Creek, Google Ads services, reputation management, lead generation, AI-powered marketing, local business growth, marketing strategy Walnut Creek" />
        <link rel="canonical" href="https://growsmallbiz.io/locations/walnut-creek-ca/" />
      </Head>
      <LocationJsonLd
        cityName="Walnut Creek"
        stateCode="CA"
        description="GrowSmallBiz is Walnut Creek's specialized digital marketing agency for local service businesses. Local SEO, Google Ads, reputation management & AI automation."
        url="/locations/walnut-creek-ca/"
        latitude={37.9101}
        longitude={-122.0652}
        breadcrumbs={[
          { name: "Locations We Serve", url: "/locations/locations-we-serve/" },
          { name: "Walnut Creek, CA", url: "/locations/walnut-creek-ca/" },
        ]}
      />

      <Header />

      <main id="main-content">

      {/* Hero Section */}
      <section className="hero-section">
        <img src={walnutCreekHero} alt="Walnut Creek California aerial view with BART station and downtown" width={1920} height={768} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: `hsl(var(--background) / 0.82)` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* City pill */}
            <div className="service-badge mb-4 animate-fade-up">
              <MapPin className="w-4 h-4" />
              <span>Walnut Creek, CA</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 animate-fade-up leading-tight bg-gradient-heading bg-clip-text text-transparent">
              Stop Losing Walnut Creek Leads to Competitors — Full-Service Digital Marketing Built for Local Service Businesses
            </h1>

            {/* H2 */}
            <h2
              className="text-2xl md:text-3xl font-display font-semibold text-foreground/90 mb-6 animate-fade-up bg-gradient-heading bg-clip-text text-transparent"
              style={{ animationDelay: "0.1s" }}
            >
              Turns Visibility Into Calls, Leads, and Revenue
            </h2>

            <p className="max-w-3xl mx-auto text-base md:text-lg text-foreground/80 leading-relaxed mb-4 animate-fade-up" style={{ animationDelay: "0.13s" }}>
              Every day your competitors are capturing the leads that should belong to your business. In Walnut Creek's competitive East Bay market, the difference between a full appointment calendar and an empty phone isn't the quality of your work — it's your visibility online.
            </p>

            <p className="max-w-3xl mx-auto text-base md:text-lg text-foreground/80 leading-relaxed mb-6 animate-fade-up" style={{ animationDelay: "0.16s" }}>
              GrowSmallBiz is a specialized East Bay digital marketing agency built exclusively for local service businesses. Contractors, dentists, med spas, real estate professionals — if you serve Walnut Creek clients, we're built for you.
            </p>

            {/* Trust line */}
            <p className="max-w-3xl mx-auto text-sm md:text-base text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "0.18s" }}>
              Walnut Creek · Danville · San Ramon Chamber Member | Certified Strategists
            </p>

            {/* CTA row */}
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
                <Link to="/services/">View Our Services</Link>
              </Button>
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

      {/* Section: What Makes GrowSmallBiz Different */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4" /> WHY US
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              What Makes GrowSmallBiz Different — And Why It Matters for Your Bottom Line
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Choosing the right digital marketing partner is one of the most important decisions you'll make for your business. Here's what sets GrowSmallBiz apart from general-purpose agencies:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { label: "Exclusive vertical focus:", body: "We only serve contractors, health & wellness professionals, and real estate pros — not one of dozens of industries." },
              { label: "Deep East Bay market knowledge:", body: "We understand Walnut Creek's competitive landscape, seasonal demand cycles, and neighborhood-level search behavior." },
              { label: "Proven local results:", body: "HVAC clients rank in the Google local 3-pack within 90 days; dental practices average 30+ new patient inquiries per month." },
              { label: "Integrated, not siloed:", body: "Every channel — SEO, Ads, Reputation, AI — feeds one coordinated goal: your growth." },
              { label: "No long-term contracts:", body: "Month-to-month agreements keep us accountable to results. We earn your business every single month." },
              { label: "AI-powered speed:", body: "Our AI Receptionist technology responds to missed leads within minutes — because in competitive trades, the first responder wins the job." },
            ].map((item, i) => (
              <div key={i} className="bg-card/50 border border-border/60 rounded-xl p-5 border-l-4 border-l-primary">
                <p className="text-foreground/90 leading-relaxed"><span className="font-bold text-foreground">{item.label}</span> {item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Why Walnut Creek Is a Market Worth Winning */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" /> LOCAL MARKET
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              Your Competitors Are Winning in Walnut Creek Search Results. Here's Exactly Why — and How to Take It Back.
            </h2>
          </div>

          {/* Market Snapshot Stat Band */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {[
              { line: "50%+ homeownership rate" },
              { line: "Highest median household incomes in Contra Costa County" },
              { line: "Active real estate market" },
              { line: "Distinct seasonal demand cycles" },
            ].map((signal, i) => (
              <div key={i} className="bg-card/50 border border-border/60 rounded-xl p-5 text-center">
                <p className="text-sm md:text-base font-display font-semibold text-primary leading-snug">{signal.line}</p>
              </div>
            ))}
          </div>

          {/* Body Copy */}
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Market Overview</p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">Walnut Creek and the surrounding Contra Costa County region represent one of the most attractive markets for local service businesses in the entire Bay Area — and one of the most competitive. Understanding what makes this market unique is the foundation of every marketing strategy we build.</p>
            </div>

            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Why Walnut Creek Is One of the Best — and Most Competitive — Markets</p>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong className="text-foreground">High homeownership rate:</strong> With over 50% of Walnut Creek residents owning their homes, demand for HVAC maintenance, roofing, plumbing, and electrical services is consistent and year-round — not seasonal spikes.</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong className="text-foreground">Affluent consumer base:</strong> Walnut Creek has one of the highest median household incomes in Contra Costa County, making it an ideal market for premium dental care, med spa treatments, cosmetic procedures, and home improvement services. Price-sensitive leads are less of a challenge here — quality and credibility win.</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong className="text-foreground">Active real estate market:</strong> Contra Costa County's real estate market drives steady demand for agents, brokers, and mortgage professionals. Listing visibility and lead generation are mission-critical for professionals competing in this market.</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong className="text-foreground">Distinct seasonal demand cycles:</strong> Walnut Creek's inland East Bay climate creates predictable HVAC peaks — AC emergency calls spike in summer heat waves, heating system tune-ups surge in fall and winter. Marketing campaigns built around these cycles dramatically outperform generic, always-on approaches.</span></li>
              </ul>
            </div>

            {/* Local Search Gap */}
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">The Local Search Gap</p>
              <p className="text-base text-foreground/90 leading-relaxed mb-4">Here's a number that should concern every Walnut Creek service business: according to BrightLocal's Local Consumer Review Survey, <a href="https://www.brightlocal.com/research/local-consumer-review-survey-2024/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">81% of consumers use Google to evaluate local businesses</a> — and <a href="https://www.brightlocal.com/resources/local-seo-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">80% of US consumers search for local businesses on a weekly basis</a>. Yet BrightLocal research also shows that <a href="https://www.brightlocal.com/resources/local-seo-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">56% of businesses still haven't fully optimized their Google Business Profile</a>. That gap represents a significant competitive advantage for the businesses willing to claim it.</p>
              <p className="text-base text-foreground/90 leading-relaxed">Generic marketing agencies miss this opportunity because they lack the industry-specific knowledge to navigate Walnut Creek's dynamics. Local SEO for an HVAC company is not the same as local SEO for a dental practice — the keyword strategies, review management tactics, and conversion pages are entirely different. GrowSmallBiz is built to execute on both with equal precision.</p>
            </div>

            {/* Pull Quote */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-6 py-5">
              <p className="text-lg md:text-xl font-semibold italic text-foreground/90 text-center md:text-left">"81% of consumers use Google to evaluate local businesses — yet 56% of businesses still haven't fully optimized their Google Business Profile. That gap is your competitive advantage." — BrightLocal Local Consumer Review Survey, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Services Overview Table */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" /> SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              Our Integrated Marketing System — Just Your Dashboard
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Our services are not sold as isolated tactics. They are delivered as an integrated system, designed so that each channel amplifies the others. Here is what's included and what it means for your business:</p>
          </div>

          <div className="grid gap-4">
            {[
              { title: "Local SEO & Google Business Profile", whatWeDo: "GBP optimization, NAP citation building, neighborhood keyword targeting, review management, local link building", impact: "Rank in Google Maps & local 3-pack; attract customers searching in Rossmoor, Northgate, Saranap, and surrounding neighborhoods" },
              { title: "Managed Google Ads / PPC", whatWeDo: "Call-only ads, location extensions, seasonal keyword campaigns, conversion tracking, ongoing bid optimization", impact: "Immediate top-of-page visibility; qualified leads from day one; efficient ad spend with real-time performance data" },
              { title: "Google Local Service Ads (LSA)", whatWeDo: "Background check coordination, license verification, budget management, Google Guaranteed badge setup", impact: "Appear above standard search ads with a trust badge that turns clicks into verified phone leads" },
              { title: "Social Media & Meta Ads", whatWeDo: "Geo-targeted Facebook & Instagram campaigns for 94596, 94597, 94598 ZIP codes; retargeting sequences; creative development", impact: "Build brand awareness and re-engage warm prospects who visited your site but did not convert" },
              { title: "Conversion-Focused Website Design", whatWeDo: "Mobile-first design, click-to-call integration, online booking, trust elements, page speed optimization", impact: "Turn website visitors into booked appointments; fast load times reduce bounce and improve rankings" },
              { title: "Reputation Management", whatWeDo: "Automated review request campaigns, Google/Yelp/Houzz monitoring, professional response guidance", impact: "Grow from 3-star averages to 4.5+ stars, build trust, and improve your local search ranking signals" },
              { title: "AI Receptionist & Lead Automation", whatWeDo: "24/7 missed-call SMS follow-up, appointment scheduling automation, lead routing, CRM integration", impact: "Never lose a lead to a competitor who answers faster; capture and nurture every inquiry automatically" },
            ].map((service, i) => (
              <div key={i} className="feature-card-teal rounded-2xl p-5 md:p-6">
                <h3 className="text-lg font-display font-bold text-foreground mb-3">{service.title}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">What We Do</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.whatWeDo}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Walnut Creek Impact</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Local SEO */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Search className="w-4 h-4" /> LOCAL SEO
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              Get Found First When Walnut Creek Customers Search for Your Services — Local SEO & Google Maps Domination
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">Local SEO is the single most powerful long-term investment a Walnut Creek service business can make. According to <a href="https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/local-search-conversion-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Think with Google</a>, 76% of consumers who perform a local search on their smartphone visit or contact a business within 24 hours — making first-page Google visibility a direct revenue driver, not a vanity metric.</p>
            </div>

            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Our Local SEO Approach for Walnut Creek</p>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Complete Google Business Profile (GBP) audit, optimization, and ongoing management — including accurate NAP consistency across all citations</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Category and service area selection tailored to Walnut Creek neighborhoods: Rossmoor, Saranap, Northgate, Lakewood, and surrounding East Bay communities</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>High-conversion service and geo-targeted landing pages that match how Walnut Creek residents actually search — terms like 'AC repair Walnut Creek,' 'dentist accepting new patients 94596,' and 'roofer near Rossmoor'</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Local citation building across authoritative directories to strengthen domain authority and local search ranking signals</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Structured review generation and management campaigns that improve your star rating and send powerful local relevance signals to Google</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Monthly performance reporting — rankings, impressions, calls, and direction requests — so you always know exactly what your investment is producing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Google Ads */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Target className="w-4 h-4" /> GOOGLE ADS
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              Need Leads This Week, Not This Quarter? Google Ads That Deliver Walnut Creek Customers on Day One.
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">Organic search rankings take time to build. Google Ads deliver qualified leads from day one. For Walnut Creek service businesses that need to fill their calendars now — not in three months — a well-managed PPC campaign is the fastest path to inbound calls and booked appointments.</p>
            </div>

            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Our Walnut Creek Google Ads Management</p>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Call-only campaigns designed for home service contractors where phone calls are the primary conversion — critical for emergency HVAC repairs, plumbing calls, and urgent electrical service requests</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Location-targeted campaigns covering Walnut Creek's ZIP codes (94596, 94597, 94598) and adjacent service areas including Pleasant Hill, Concord, Lafayette, and Danville</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Seasonal keyword campaigns aligned to Walnut Creek's demand cycles — 'AC tune-up Walnut Creek' in spring, 'heating repair near me' in fall, 'emergency plumber Walnut Creek' year-round</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Comprehensive conversion tracking for phone calls, form submissions, and appointment bookings — so every dollar of ad spend is accountable to a measurable outcome</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Continuous campaign optimization: A/B testing ad copy, refining bid strategies, adding negative keywords, and improving landing page conversion rates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Google LSA */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" /> GOOGLE LSA
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              Show Up Above Every Competitor With a Google Trust Badge — More Walnut Creek Leads, Pre-Qualified Before They Call
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">Google Local Service Ads (LSA) represent one of the most powerful lead generation tools available to licensed home service contractors. These pay-per-lead ads appear above traditional Google Ads in search results and carry the Google Guaranteed badge — a trust signal that significantly increases the likelihood a prospect picks up the phone.</p>
              <p className="text-base text-foreground/90 leading-relaxed mt-4">For Walnut Creek HVAC companies, plumbers, electricians, roofers, and similar contractors, LSA can be the difference between a phone that rings consistently and one that doesn't. GrowSmallBiz manages the entire LSA process:</p>
            </div>

            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Background check coordination and professional license verification for all relevant trade categories</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Budget optimization to maximize verified lead volume while controlling cost-per-lead</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Dispute management for invalid or low-quality leads to protect your advertising investment</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Compliance maintenance with Google's ongoing requirements to preserve your Google Guaranteed status</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Social Media & Meta Ads */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" /> SOCIAL MEDIA
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              Reach Walnut Creek Homeowners Before They Need You — And Be the First Call When They Do
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">Facebook and Instagram give Walnut Creek service businesses a direct channel to reach their exact target audience — homeowners in specific ZIP codes, residents in particular age and income brackets, and users who have already visited your website but didn't convert. Our geo-targeted Meta Ads campaigns are built around the neighborhoods and ZIP codes where your ideal customers live.</p>
            </div>

            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Our Social Media Marketing Approach</p>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Geo-targeted Facebook and Instagram campaigns covering Walnut Creek ZIP codes 94596, 94597, and 94598 — ensuring your budget reaches residents in your actual service area, not the broader Bay Area</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Before-and-after visual campaigns for roofers, HVAC companies, and home improvement contractors that demonstrate real service quality and drive engagement</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Patient transformation stories and testimonial campaigns for dentists, med spa owners, and wellness professionals that build credibility and appointment bookings</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Retargeting sequences that re-engage website visitors who did not convert on their first visit — keeping your business top of mind through the decision cycle</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Seasonal and promotional campaign calendars aligned to your peak service periods and slow-season fill-up goals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Reputation Management */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4" /> REPUTATION
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              A 3-Star Rating Is Silently Killing Your Walnut Creek Business. Here's How We Fix It in 90 Days.
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">In Walnut Creek's high-income, high-discernment market, your online reputation is as important as the quality of your work. Consumers considering premium home improvement, dental care, or wellness services routinely read a dozen or more reviews before making contact. A 3.8-star rating in a market where competitors are at 4.7 stars can cost you more leads per month than any advertising gap. GrowSmallBiz's reputation management system is built to systematically improve your rating and protect your brand:</p>
            </div>

            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Automated review request campaigns sent to satisfied customers immediately after service completion — capturing feedback while the experience is fresh</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Multi-platform monitoring across Google, Yelp, Houzz, Healthgrades, Zocdoc, and Realtor.com — ensuring no review goes unnoticed</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Professional response guidance and templates for negative reviews — turning difficult situations into trust-building demonstrations of your commitment to customer service</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Reputation reporting showing your rating trajectory, review velocity, and competitive position in the Walnut Creek market</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Custom strategies for healthcare and wellness professionals that comply with HIPAA guidelines while still building a compelling, authentic review profile</li>
              </ul>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-6 py-5">
              <p className="text-base text-foreground/90 leading-relaxed">The stakes are high: <a href="https://www.brightlocal.com/research/local-consumer-review-survey-2024/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BrightLocal's 2024 Local Consumer Review Survey</a> found that 88% of consumers say they would use a business that responds to all of its reviews — compared to just 47% who would consider a business that does not respond at all. Active reputation management is not optional for Walnut Creek service businesses competing for high-value clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Website Design */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Globe className="w-4 h-4" /> WEBSITE DESIGN
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              Your Website Should Be Your Best Salesperson. If It's Not Generating Walnut Creek Leads Daily, It's Costing You Money.
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">Your website is working — or it isn't. For most local service businesses in Walnut Creek, it isn't. Generic websites built on templates fail on three dimensions simultaneously: they load too slowly to retain mobile visitors, they lack the trust elements that convert skeptical prospects, and they bury the actions you want visitors to take. GrowSmallBiz builds mobile-first, conversion-optimized websites specifically for local service businesses:</p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-card/50 border border-border/60 rounded-xl p-5">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Performance & Mobile</p>
                <ul className="space-y-2 text-foreground/80 text-sm">
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Fast-loading, mobile-first design — because the majority of local searches happen on smartphones and Google penalizes slow sites with lower rankings</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Click-to-call buttons and tap-to-text functionality prominently placed above the fold for immediate customer contact</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Online booking integrations for appointment-driven businesses — dentists, med spas, chiropractors, and physical therapists benefit immediately from reduced friction in the scheduling process</li>
                </ul>
              </div>
              <div className="bg-card/50 border border-border/60 rounded-xl p-5">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Trust Architecture</p>
                <ul className="space-y-2 text-foreground/80 text-sm">
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Professional headshots, licensing credentials, Google review widgets, before-and-after galleries, and transparent pricing information that eliminate objections before they arise</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Walnut Creek-specific landing pages for each service and neighborhood, capturing hyper-local search intent with geo-targeted content that generic agency websites never build</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Conversion rate optimization — ongoing testing of headlines, CTAs, form design, and page layout to improve the percentage of visitors who become leads</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: AI Receptionist & Automation */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" /> AI AUTOMATION
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              Every Missed Call Is a Lost Job. Our AI Receptionist Follows Up in Seconds.
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">Here is a fact that most Walnut Creek service businesses don't want to think about: according to research by <a href="https://www.insidesales.com/response-time-matters/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">MIT and InsideSales.com published in the Harvard Business Review</a>, leads contacted within 5 minutes are 21 times more likely to convert than those reached after just 30 minutes. Wait an hour and the odds drop by 10 times. In competitive trades where multiple businesses receive the same inquiry, the first to respond wins — almost every time. Speed-to-lead is one of the most powerful conversion factors in local service business marketing, and it's one that AI automation solves completely.</p>
            </div>

            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">GrowSmallBiz AI Receptionist & Automation</p>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><strong className="text-foreground">Missed-call text-back:</strong> When a lead calls and you can't answer, an automated SMS is sent within seconds — acknowledging the inquiry and asking how you can help, keeping the conversation alive</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><strong className="text-foreground">Conversational AI for lead qualification:</strong> Your AI Receptionist can answer FAQs, collect service details, and schedule appointments without human intervention — around the clock</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><strong className="text-foreground">Automated appointment reminders:</strong> Confirmation sequences that reduce no-shows for dentists, med spas, and other appointment-based businesses</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><strong className="text-foreground">CRM integration and lead tracking:</strong> Every inquiry is captured, tagged, and tracked from first contact through closed job, giving you complete visibility into your marketing ROI</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><strong className="text-foreground">Lead routing:</strong> High-priority or emergency inquiries are escalated immediately to the right team member, ensuring urgent service requests are never lost in a queue</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-16" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4">
          <CardCTA
            title="Get Your Free Marketing Assessment"
            description="Receive a personalized strategy session — local SEO audit, competitive analysis, and a clear growth roadmap built specifically for your Walnut Creek service business."
            buttonText="Schedule Strategy Call"
            buttonHref={strategyCallUrl}
            sectionClassName="pt-0 pb-0"
          />
        </div>
      </section>

      {/* Section: Who We Serve */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" /> INDUSTRIES
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              Built for Your Industry, Not Adapted From Someone Else's Playbook
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">GrowSmallBiz serves a focused set of local service business verticals in Walnut Creek and surrounding East Bay communities. Our specialization means deeper expertise, faster results, and strategies that reflect real market knowledge — not generic agency assumptions.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Home Service Contractors</h3>
              <p className="text-sm font-semibold text-primary mb-2">HVAC, Roofing, Plumbing & Electrical</p>
              <p className="text-muted-foreground leading-relaxed text-sm">HVAC companies, roofing contractors, plumbers, electricians, landscapers, pest control services, window and door companies. We build marketing systems around seasonal demand cycles, emergency search behavior, and neighborhood-level lead generation — delivering booked jobs, not just website traffic.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Dentists, Med Spas & Wellness</h3>
              <p className="text-sm font-semibold text-primary mb-2">Attract High-Value Patients Who Book and Stay</p>
              <p className="text-muted-foreground leading-relaxed text-sm">Dentists and dental practices, med spa owners, cosmetic surgeons, chiropractors, and physical therapists. We specialize in appointment-driven conversion funnels, HIPAA-aware reputation management, and attracting the high-value patients that Walnut Creek's affluent demographic represents.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Real Estate Agents & Brokers</h3>
              <p className="text-sm font-semibold text-primary mb-2">Own Your Local Market & Build a Referral Engine</p>
              <p className="text-muted-foreground leading-relaxed text-sm">Real estate brokers, agents, and mortgage brokers competing in Contra Costa County's active market. We build visibility for listings, generate qualified buyer and seller leads through local SEO and paid advertising, and establish lasting local authority through content and reputation marketing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Real Results */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" /> RESULTS
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              Real Client Results Across Our Service Areas
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">See what's possible when marketing runs as a complete, integrated system.</p>
          </div>

          <CampaignResultsCards cards={walnutCreekCards} />

          {/* Channel Comparison */}
          <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Channel Comparison</p>
            <h3 className="text-xl font-display font-bold text-foreground mb-4">Single-Channel Marketing Doesn't Win in Walnut Creek Anymore.</h3>
            <p className="text-muted-foreground mb-6">The most effective Walnut Creek service business marketing strategies combine multiple channels — each one amplifying the others. Here's how the primary channels compare:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Channel</th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Best For</th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Time to Results</th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Long-Term Value</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Local SEO", "Sustainable organic rankings & trust signals", "3–6 months for full impact", "High — compounds over time"],
                    ["Google Ads / PPC", "Immediate lead flow & seasonal peaks", "Day 1", "Medium — requires ongoing investment"],
                    ["Google LSA", "Pay-per-verified-lead with Google trust badge", "2–4 weeks setup", "High — top search placement"],
                    ["Meta / Social Ads", "Retargeting & brand awareness", "1–2 weeks", "Medium — audience building"],
                    ["Reputation Mgmt", "Conversion lift & local ranking signals", "30–90 days for rating lift", "High — trust drives decisions"],
                    ["AI Automation", "Lead capture speed & follow-up consistency", "Immediate after setup", "High — multiplies every other channel"],
                  ].map(([channel, bestFor, time, value], i) => (
                    <tr key={i} className="border-b border-border/30">
                      <td className="py-3 px-4 text-primary font-semibold">{channel}</td>
                      <td className="py-3 px-4 text-foreground/90">{bestFor}</td>
                      <td className="py-3 px-4 text-muted-foreground">{time}</td>
                      <td className="py-3 px-4 text-muted-foreground">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Why GrowSmallBiz Outperforms */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4" /> DIFFERENTIATORS
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              No Templates. No Generalists. No Excuses. Why GrowSmallBiz Outperforms Every Agency That's Failed You Before.
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">There is no shortage of digital marketing agencies in the East Bay. Most will promise similar results with similar services. Here is why the marketing system GrowSmallBiz builds for Walnut Creek service businesses consistently outperforms what general-purpose agencies deliver:</p>
            </div>
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base text-foreground/90 leading-relaxed">We don't use templates. We don't assign junior account managers to your campaign and move on. Every strategy is built from your specific competitive landscape, your service area, your verticals, and your revenue goals. Our certified marketing strategists carry your account from day one through sustained growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-links + Serving */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              Serving Walnut Creek and the Surrounding East Bay
            </h2>
          </div>
          <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8 mb-10">
            <p className="text-base text-foreground/90 leading-relaxed text-center">GrowSmallBiz specializes exclusively in digital marketing for local service businesses in Walnut Creek, CA, and the surrounding East Bay. Service Area: Walnut Creek, Danville, San Ramon, Pleasant Hill, Concord, Lafayette, Alamo, and Greater East Bay.</p>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">If your business also serves nearby communities, explore our pages for:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Martinez", to: "/locations/martinez-ca/" },
                { label: "Concord", to: "/locations/concord-ca/" },
                { label: "Pleasant Hill", to: "/locations/pleasant-hill-ca/" },
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
        </div>
      </section>

      <FAQSection
        title="Your Questions Answered — Digital Marketing in Walnut Creek"
        faqs={[
          { question: "How much does digital marketing cost for a Walnut Creek local service business?", answer: "Investment levels vary based on your business size, revenue goals, competitive landscape, and the combination of services you need. Most Walnut Creek service businesses in our client portfolio invest between $1,000 and $5,000 per month across SEO, Google Ads, reputation management, and AI automation — with our core AI Client Growth System starting at $797 per month plus a one-time setup fee. We build custom packages aligned to your goals and service area to ensure maximum return on marketing investment." },
          { question: "How long does it take to see results from local SEO in Walnut Creek?", answer: "Google Business Profile optimizations typically show measurable movement within 4 to 8 weeks. Full local 3-pack rankings for competitive Walnut Creek search terms are usually achieved within 3 to 6 months, depending on your industry and starting position. Google Ads campaigns generate qualified leads from day one. A combined SEO and Ads strategy delivers both immediate lead flow and sustainable long-term organic growth." },
          { question: "Do I need both SEO and Google Ads, or can I choose just one?", answer: "Both channels serve different objectives. Google Ads delivers immediate, controllable lead flow — ideal when you need to fill your calendar now, launch into a new service area, or capitalize on seasonal demand spikes. SEO builds sustainable organic visibility that doesn't disappear when you stop paying per click. Used together, they create a full-funnel approach: Ads capture demand immediately, while SEO compounds your visibility and reduces your cost-per-lead over time. We help you determine the right balance based on your budget and growth stage." },
          { question: "What makes a good digital marketing agency for a Walnut Creek service business?", answer: "The single most important factor is vertical specialization. A good agency for your business understands your industry's buyer psychology, seasonal patterns, competitive dynamics, and conversion drivers — not just the technical mechanics of SEO or PPC. Beyond specialization, look for certified strategists with verified local results, transparent reporting, integrated strategy across channels, and accountability through month-to-month agreements. If an agency primarily serves eCommerce brands or national clients, their frameworks will not translate well to local service business marketing." },
          { question: "How can I measure the ROI of my digital marketing investment?", answer: "ROI measurement starts with proper conversion tracking — phone calls, form submissions, appointment bookings, and ultimately jobs booked and revenue generated. GrowSmallBiz implements comprehensive tracking across every channel and provides transparent monthly reports that connect marketing activity to business outcomes. Our clients know exactly how many leads each channel generated, what those leads cost, and how they translate to revenue. If a campaign is not performing, we know immediately and adjust — you are never in the dark about your investment." },
          { question: "Why do Walnut Creek businesses specifically benefit from local digital marketing?", answer: "Walnut Creek's combination of affluent homeowners, a high homeownership rate above 50%, active real estate market, and intense local competition creates an environment where local digital marketing delivers outsized returns. BrightLocal research shows that 81% of consumers use Google to evaluate local businesses and 80% search for local businesses every week. Businesses that rank prominently in local search capture a disproportionate share of high-quality, high-intent leads. The opportunity gap — 56% of businesses haven't fully optimized their Google Business Profile (BrightLocal) — means the businesses that invest are not just competing; they are dominating." },
          { question: "Can digital marketing help my seasonal service business in Walnut Creek?", answer: "Seasonal demand cycles are one of GrowSmallBiz's core specializations. We build campaigns that anticipate and capitalize on Walnut Creek's predictable seasonal patterns — HVAC marketing that ramps up before summer heat waves and fall heating season, dental and wellness promotional campaigns designed to fill slower winter months, and real estate lead generation aligned to the spring and fall transaction peaks. Data-driven campaign timing and seasonal keyword targeting ensure your marketing spend works hardest exactly when demand is highest." },
          { question: "How does AI automation help my Walnut Creek service business compete?", answer: "Speed is the most underappreciated competitive advantage in local service business marketing. Studies consistently show that leads contacted within 5 minutes of inquiry convert at dramatically higher rates than those contacted after an hour or more. For busy Walnut Creek contractors and professionals who cannot answer every call, AI Receptionist technology closes the response gap — automatically following up with missed calls via SMS within seconds, answering common questions, and scheduling appointments without human intervention. The result is that your business effectively competes 24 hours a day, 7 days a week — even when you're on a job site." },
        ]}
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have questions about marketing in Walnut Creek?",
          description: "We're here to help you find the right strategy.",
          tagline: "Let's grow your Walnut Creek business together.",
        }}
      />

      <section id="final-cta" className="py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <p className="text-primary font-medium mb-4">THE NEXT STEP</p>
            <h2 className="section-title bg-gradient-heading bg-clip-text text-transparent">
              Every Day You Wait, Your Competitors Book Another Walnut Creek Customer That Should Have Been Yours.
            </h2>
            <p className="section-description mt-4 mb-8">
              Every day without a comprehensive marketing strategy is another day your competitors capture the leads that should belong to you. Walnut Creek's local service market rewards the businesses with the strongest digital presence — and penalizes those who remain invisible online. No long-term contracts. No cookie-cutter templates. No generalist agency assumptions. Just a focused team that builds the marketing system your Walnut Creek business deserves.
            </p>
          </div>
          <CardCTA
            title="Get Your Free Marketing Assessment"
            description="Receive a personalized strategy session — local SEO audit, competitive analysis, and a clear growth roadmap built specifically for your Walnut Creek service business."
            buttonText="Schedule Strategy Call"
            buttonHref={strategyCallUrl}
            sectionClassName="pt-0 pb-0"
          />
        </div>
      </section>

      <ConsultationFormSection />
    </main>

    <Footer />
  </div>
  );
};

export default WalnutCreekCA;
