import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import sanRamonHero from "@/assets/san-ramon-hero.webp";

import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { MapPin, TrendingUp, AlertTriangle, Briefcase, Globe, Search, Target, Zap, Home, Heart, Building2, UtensilsCrossed, Brain, Eye, BarChart3, Users, Star, ArrowRight, Phone, Shield, MessageSquare, Award, CheckCircle } from "lucide-react";
import { CampaignResultsCards } from "@/components/locations/CampaignResultsCards";
import { sanRamonCards } from "@/components/locations/campaignCardData";
import { LocationJsonLd } from "@/components/seo/LocationJsonLd";
import { CardCTA } from "@/components/services";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { useUtm } from "@/hooks/use-utm";
import { baseContactCTA } from "@/config/contactCTA";

const SanRamonCA = () => {
  const { buildUrl } = useUtm();
  const strategyCallUrl = buildUrl("https://lp.growsmallbiz.io/digital-growth-strategy-session", "schedule-strategy-call");
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Digital Marketing Agency in San Ramon, CA | GrowSmallBiz</title>
        <meta name="description" content="GrowSmallBiz is San Ramon's local digital marketing agency for service businesses. One integrated system: Local SEO, Google Ads, AI automation, reputation management. Get your free strategy session." />
        <link rel="canonical" href="https://growsmallbiz.io/locations/san-ramon-ca/" />
      </Head>
      <LocationJsonLd
        cityName="San Ramon"
        stateCode="CA"
        description="GrowSmallBiz is San Ramon's local digital marketing agency for service businesses. One integrated system: Local SEO, Google Ads, AI automation, reputation management."
        url="/locations/san-ramon-ca/"
        latitude={37.7799}
        longitude={-121.9780}
        breadcrumbs={[
          { name: "Locations We Serve", url: "/locations/locations-we-serve/" },
          { name: "San Ramon, CA", url: "/locations/san-ramon-ca/" },
        ]}
      />

      <Header />

      <main id="main-content">

      {/* Hero Section */}
      <section className="hero-section">
        <img src={sanRamonHero} alt="Bishop Ranch business park in San Ramon California at golden hour" width={1920} height={768} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: `hsl(var(--background) / 0.82)` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="service-badge mb-4 animate-fade-up">
              <MapPin className="w-4 h-4" />
              <span>San Ramon, CA — Local Service Business Marketing | Tri-Valley's Integrated Growth Partner</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 animate-fade-up leading-tight">
              Stop Losing San Ramon Leads to Competitors —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Full-Service Digital Marketing Built for Local Service Businesses</span>
            </h1>

            <p
              className="text-lg md:text-xl text-foreground/80 mb-4 animate-fade-up max-w-3xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.1s" }}
            >
              You are running a local service business in San Ramon. You have probably tried SEO, experimented with Google Ads, maybe hired someone to manage your social media. But your pipeline is still inconsistent, leads go cold before anyone follows up, and you are not sure which marketing effort is actually moving the needle. The problem is not effort. It is fragmentation.
            </p>

            <p
              className="text-lg md:text-xl text-foreground/80 mb-8 animate-fade-up max-w-3xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.15s" }}
            >
              GrowSmallBiz is a local digital marketing agency based in Danville — five minutes away, San Ramon Chamber member, built exclusively for local service businesses. Contractors, dentists, restaurants, real estate professionals — if you serve San Ramon clients, we're built for you.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button variant="hero" size="lg" asChild>
                <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
                  Schedule Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+19258863724">
                  <Phone className="w-5 h-5 mr-2" /> (925) 886-3724
                </a>
              </Button>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-6 animate-fade-up text-sm text-foreground/60" style={{ animationDelay: "0.25s" }}>
              <a href="https://members.sanramon.org/list/member/growsmallbiz-digital-marketing-4986" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">✓ San Ramon Chamber</a>
              <span>|</span>
              <a href="https://business.danvilleareachamber.com/list/member/growsmallbiz-digital-marketing-10687" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">✓ Danville Chamber</a>
              <span>|</span>
              <a href="https://members.walnut-creek.com/list/Details/growsmallbiz-digital-marketing-4248068" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">✓ Walnut Creek Chamber</a>
              <span>|</span>
              <span>Certified Strategists</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="py-4" style={{ backgroundColor: 'hsl(var(--accent))' }}>
        <div className="container mx-auto px-4">
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
              <Star className="w-4 h-4" /> WHY DIFFERENT
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              What Makes GrowSmallBiz Different — And Why It Matters for Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">San Ramon Bottom Line</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Every agency says they are different. Here is what it actually means for GrowSmallBiz — and why it matters specifically for San Ramon service businesses competing in one of the East Bay's most active local markets.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { label: "We are local:", body: "GrowSmallBiz is headquartered in Danville — five minutes from San Ramon. We know the Tri-Valley competitive landscape, the Bishop Ranch business corridor, and what local service business owners face daily. We are not a national agency managing accounts they have never seen." },
              { label: "One integrated system:", body: "When you hire separate vendors, each one optimizes for their own deliverable — not your revenue. Our integrated system connects every stage: traffic, conversion, CRM capture, AI follow-up, and automated nurture. One team, one outcome." },
              { label: "Conversion-first reporting:", body: "We do not report on traffic, impressions, or follower growth unless those metrics connect directly to leads and revenue. Every metric we track has a line drawn to your bottom line." },
              { label: "AI-powered execution:", body: "AI is built into how our systems operate — from the AI Receptionist answering missed calls to AI QuadBots qualifying website leads to SMART nurture sequences keeping prospects warm. Faster, smarter, more consistent than any manually managed approach." },
              { label: "Specialized verticals:", body: "We work exclusively with local service businesses, licensed healthcare and wellness professionals, realtors, and brick-and-mortar restaurants. Our systems are purpose-built for businesses that serve local customers directly." },
              { label: "No long-term contracts:", body: "Month-to-month agreements keep us accountable to your results. We earn your business every single month." },
            ].map((item, i) => (
              <div key={i} className="bg-card/50 border border-border/60 rounded-xl p-5 border-l-4 border-l-primary">
                <p className="text-base text-foreground/90 leading-relaxed">
                  <span className="font-bold text-foreground">{item.label}</span> {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Why San Ramon Is a High-Value Market */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" /> LOCAL MARKET
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Your Competitors Are Winning in San Ramon Search Results.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Here's Exactly Why — and How to Take It Back.</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Market Position</p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">San Ramon sits at the center of one of the most economically active corridors in the entire East Bay — bordered by Danville to the south, Dublin to the north, and Pleasanton to the west. Household incomes are high, the population is growing, and local residents have real choices when selecting a service provider. That competitive environment makes local search visibility a business-critical asset — not a nice-to-have.</p>
            </div>

            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Why San Ramon Is a High-Value — and High-Competition — Market</p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4"><span className="font-bold">Bishop Ranch Business Park:</span> San Ramon is home to Bishop Ranch, one of the largest suburban office parks in the United States. Corporate tenants including Chevron and AT&T bring tens of thousands of professionals to San Ramon daily — creating a unique dual market: business-to-business service demand from the corporate corridor, and residential service demand from the dual-income households those professionals return to in Dougherty Valley, Gale Ranch, and surrounding neighborhoods.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">B2C Residential Market</p>
                <p className="text-base text-foreground/90 leading-relaxed">San Ramon's residential neighborhoods — particularly Dougherty Valley, Gale Ranch, and the communities lining Bollinger Canyon Road — are among the highest-income, highest-growth planned developments in Contra Costa County. These are dual-income professional households, newer homeowners building their service provider relationships for the first time, and tech-savvy residents who research and decide entirely online. High homeownership rates drive consistent demand for home services year-round. Affluent demographics create a strong market for premium dental care, med spa treatments, and wellness services. A growing population of young families generates sustained demand across every service category GrowSmallBiz serves.</p>
              </div>
              <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">B2B Commercial Market</p>
                <p className="text-base text-foreground/90 leading-relaxed">Bishop Ranch and San Ramon's broader commercial corridors create service demand that goes beyond individual homeowners. HVAC contractors maintain climate systems for office buildings and retail spaces. Cleaning and maintenance services hold commercial contracts across the business park. Restaurants and caterers serve corporate events. Real estate professionals handle commercial leasing alongside residential transactions. For GrowSmallBiz clients that serve both residential and commercial accounts, San Ramon's dual-market structure means campaigns need to capture both homeowner intent searches and commercial property searches simultaneously — and our integrated system is built to do exactly that.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Tri-Valley Market Position</p>
                <p className="text-base text-foreground/90 leading-relaxed">San Ramon businesses do not just compete with each other — they compete with Danville, Dublin, Pleasanton, and Livermore providers for the same high-intent local searches. Visibility in the Google local pack for 'HVAC repair San Ramon,' 'dentist near Bishop Ranch,' or 'restaurant Bollinger Canyon Road' means capturing demand from across the entire Tri-Valley corridor.</p>
              </div>
              <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">The Fragmentation Cost</p>
                <p className="text-base text-foreground/90 leading-relaxed">According to <a href="https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-search-trends-local-business/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Think with Google</a>, 76% of people who search for a local service on their smartphone visit or contact a business within 24 hours — and 28% of those searches result in a purchase. In San Ramon's competitive market, most businesses are losing those leads within minutes due to slow or absent follow-up. Every unconverted lead is revenue your competitors are collecting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: The Local Search Gap */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Search className="w-4 h-4" /> SEARCH GAP
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              The Local Search Gap Costing Most San Ramon Service Businesses{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">10–15 Leads Every Month</span>
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">According to BrightLocal's Local Consumer Review Survey, <a href="https://www.brightlocal.com/research/local-consumer-review-survey-2024/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">81% of consumers use Google to evaluate local businesses</a> and <a href="https://www.brightlocal.com/resources/local-seo-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">80% of US consumers search for local businesses on a weekly basis</a>. Yet BrightLocal research shows that <a href="https://www.brightlocal.com/resources/local-seo-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">56% of businesses have not fully optimized their Google Business Profile</a>. In San Ramon's active market, that optimization gap translates directly to missed calls, missed bookings, and missed revenue — month after month.</p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">San Ramon's SERP landscape reinforces this opportunity. The top-ranking competitor for 'digital marketing san ramon ca' has a content score of 89 with 1,781 words. Most other visible competitors are thin pages under 1,200 words with minimal local specificity. A properly integrated, content-rich presence built specifically for San Ramon's market beats generic agency pages in both relevance and trust signals.</p>
            </div>
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8 border-l-4 border-l-primary">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed italic">"The San Ramon Chamber of Commerce ranks organically for local marketing keywords — being a verified chamber member is a direct local authority signal that generic agencies cannot replicate."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: The Integrated Marketing System */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" /> SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              The Integrated Marketing System Built for San Ramon Service Businesses —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Fills Your Calendar, Not Just Your Dashboard</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">This is not a menu of services you mix and match. It is a system. Every component is engineered to work with every other component. That integration is what makes the difference between marketing that costs money and marketing that makes money.</p>
          </div>

          {/* Services Overview Table (rendered as cards on mobile) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {[
              { service: "Local SEO & Google Business Profile", whatWeDo: "GBP optimization, NAP citation building, neighborhood keyword targeting, review management, local link building", impact: "Rank in Google Maps & local 3-pack; capture high-intent searches from Bishop Ranch corridor, Dougherty Valley, and Gale Ranch neighborhoods" },
              { service: "Managed Google Ads / PPC", whatWeDo: "Call-only ads, location extensions, seasonal keyword campaigns, conversion tracking, ongoing bid optimization", impact: "Immediate top-of-page visibility; qualified leads from day one; efficient ad spend with real-time performance data" },
              { service: "Google Local Service Ads (LSA)", whatWeDo: "Background check coordination, license verification, budget management, Google Guaranteed badge setup", impact: "Appear above standard search ads with a Google trust badge that turns clicks into verified phone leads" },
              { service: "Social Media & Meta Ads", whatWeDo: "Geo-targeted Facebook & Instagram campaigns for ZIP codes 94582 and 94583; retargeting sequences; creative development", impact: "Build brand awareness and re-engage warm prospects from San Ramon's corporate and residential communities" },
              { service: "Conversion-Focused Website Design", whatWeDo: "Mobile-first design, click-to-call integration, online booking, trust elements, page speed optimization", impact: "Turn website visitors into booked appointments; fast load times reduce bounce and improve Google rankings" },
              { service: "Reputation Management", whatWeDo: "Automated review request campaigns, Google/Yelp/Houzz monitoring, professional response guidance", impact: "Grow from 3-star averages to 4.5+ stars; build the trust signals San Ramon's discerning residents require" },
              { service: "AI Receptionist & Lead Automation", whatWeDo: "24/7 missed-call SMS follow-up, AI QuadBots, appointment scheduling automation, SMART nurture sequences, CRM integration", impact: "Never lose a lead to a competitor who responds faster; capture and convert every inquiry automatically" },
            ].map((s, i) => (
              <div key={i} className="bg-card/50 border border-border/60 rounded-xl p-5">
                <h3 className="text-base font-display font-bold text-primary mb-2">{s.service}</h3>
                <p className="text-sm text-foreground/80 leading-relaxed mb-2">{s.whatWeDo}</p>
                <p className="text-xs text-muted-foreground leading-relaxed italic">{s.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Deep-Dive: Local SEO */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Search className="w-4 h-4" /> LOCAL SEO
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Get Found First When San Ramon Customers Search for Your Services —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Local SEO & Google Maps Domination</span>
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">Local SEO is the foundation of every other marketing investment a San Ramon service business makes. According to <a href="https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-search-trends-local-business/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Think with Google</a>, 76% of consumers who perform a local search on their smartphone visit or contact a business within 24 hours. In San Ramon, where residents routinely choose between multiple competing providers for the same service, top-three local pack placement is the difference between capturing demand and being invisible at the most critical moment.</p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-3">Our <Link to="/services/seo-agency/local-seo/" className="text-primary hover:underline">local SEO</Link> approach for San Ramon businesses includes:</p>
              <ul className="list-disc list-inside text-foreground/90 space-y-2">
                <li>Complete Google Business Profile audit, optimization, and ongoing management — accurate NAP consistency, category selection, and service listings calibrated for San Ramon ZIP codes 94582 and 94583</li>
                <li>Neighborhood-level keyword targeting: 'HVAC repair Bishop Ranch,' 'dentist Dougherty Valley,' 'plumber Gale Ranch,' 'restaurant Bollinger Canyon Road' — capturing hyper-local search intent that generic pages never address</li>
                <li>Local citation building including the <a href="https://members.sanramon.org/list/member/growsmallbiz-digital-marketing-4986" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">San Ramon Chamber of Commerce</a> directory — a high-authority local citation that also ranks organically for San Ramon marketing keywords, amplifying your visibility directly</li>
                <li>Structured review generation campaigns calibrated to turn San Ramon's active, review-savvy consumer base into a compounding reputation asset</li>
                <li>Monthly performance reporting: rankings, impressions, calls, direction requests, and website clicks from Google Business Profile — clear attribution from optimization to revenue</li>
              </ul>
            </div>
            <div className="text-center">
              <Button variant="hero" size="lg" asChild>
                <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
                  Optimize Your Local SEO for San Ramon <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Deep-Dive: Google Ads */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Target className="w-4 h-4" /> GOOGLE ADS
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Need Leads This Week, Not This Quarter?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Google Ads That Deliver San Ramon Customers on Day One</span>
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">San Ramon's competitive service market rewards the businesses that show up first and respond fastest. For service businesses that need to fill their calendars now, a properly managed <Link to="/services/google-ads/" className="text-primary hover:underline">Google Ads</Link> campaign is the fastest path from invisible to fully booked. In a market where several well-resourced agencies are actively running ads for San Ramon service keywords, the quality of your campaign management determines whether your ad spend wins or wastes.</p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-3">Our San Ramon Google Ads management includes:</p>
              <ul className="list-disc list-inside text-foreground/90 space-y-2">
                <li>Call-only campaigns for home service contractors — capturing emergency HVAC calls, urgent plumbing service requests, and electrical work inquiries from San Ramon homeowners at the exact moment of highest intent</li>
                <li>Location-targeted campaigns covering ZIP codes 94582 and 94583 plus adjacent Tri-Valley service areas including Danville, Dublin, and Pleasanton — ensuring your budget captures the full demand corridor</li>
                <li>Seasonal campaign alignment: 'AC tune-up San Ramon' in spring, 'heating repair Dougherty Valley' in fall, 'emergency plumber near me' year-round — campaigns that match San Ramon's inland valley seasonal demand cycles</li>
                <li>Comprehensive conversion tracking for phone calls, form submissions, and appointment bookings — every dollar of ad spend accountable to a measurable business outcome</li>
                <li>Continuous campaign optimization: bid strategy refinement, ad copy testing, negative keyword management, and landing page conversion improvements — performance that compounds over time</li>
              </ul>
            </div>
            <div className="text-center">
              <Button variant="hero" size="lg" asChild>
                <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
                  Launch Google Ads for Your San Ramon Business <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Deep-Dive: LSA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" /> GOOGLE LSA
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Show Up Above Every Competitor With a Google Trust Badge —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">More San Ramon Leads, Pre-Qualified Before They Call</span>
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">Google Local Service Ads give licensed San Ramon home service contractors a placement above all standard search ads, combined with the Google Guaranteed badge — the most powerful trust signal available in local search. In a market where Dougherty Valley and Gale Ranch homeowners are actively selecting service providers based on visible credibility signals, appearing at the very top with a Google-verified endorsement converts browsers into verified phone leads at a higher rate than any other channel.</p>
              <ul className="list-disc list-inside text-foreground/90 space-y-2">
                <li>Background check coordination and professional license verification for all applicable San Ramon trade categories</li>
                <li>Budget optimization focused on maximizing verified, high-intent lead volume in your specific San Ramon service area</li>
                <li>Dispute management for invalid leads to protect your advertising investment</li>
                <li>Compliance maintenance to preserve your Google Guaranteed status</li>
              </ul>
            </div>
            <div className="text-center">
              <Button variant="hero" size="lg" asChild>
                <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
                  Set Up Google LSA for Your San Ramon Business <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Deep-Dive: Social Media & Meta Ads */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" /> SOCIAL & META ADS
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Reach San Ramon Homeowners Before They Need You —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">And Be the First Call When They Do</span>
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">Facebook and Instagram give San Ramon service businesses a direct channel to reach homeowners in Dougherty Valley, Gale Ranch, and the Bishop Ranch residential corridors — before a need becomes an emergency, before a decision is made. Our geo-targeted <Link to="/services/paid-advertising/facebook-ads/" className="text-primary hover:underline">Meta Ads</Link> campaigns are built around the specific ZIP codes and demographics where San Ramon's highest-value clients live and spend.</p>
              <ul className="list-disc list-inside text-foreground/90 space-y-2">
                <li>Geo-targeted campaigns covering ZIP codes 94582 and 94583 — ensuring your budget reaches San Ramon's professional households, not the broader Bay Area market</li>
                <li>Before-and-after visual campaigns for home service contractors showcasing real work completed in San Ramon neighborhoods — the social proof that resonates with homeowners in planned communities where neighbor referrals carry significant weight</li>
                <li>Restaurant promotion campaigns for Bollinger Canyon Road and Crow Canyon corridor establishments — driving reservation and walk-in traffic with event promotions, seasonal features, and loyalty campaigns</li>
                <li>Retargeting sequences that re-engage website visitors who did not convert — keeping your business top of mind through the multi-touchpoint decision cycle common among San Ramon's research-oriented professional demographic</li>
              </ul>
            </div>
            <div className="text-center">
              <Button variant="hero" size="lg" asChild>
                <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
                  Launch Social Media Advertising <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Deep-Dive: Reputation Management */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4" /> REPUTATION
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              A 3-Star Rating Is Silently Killing Your San Ramon Business.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Here's How We Fix It in 90 Days.</span>
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">In San Ramon's market — where dual-income professional households research every significant purchasing decision online — your Google review rating is not a supporting factor in their choice. For most service categories, it is the primary filter. A 3.7-star rating in a market where your competitor is at 4.6 stars means a significant portion of high-intent prospects never contact you. That is not a perception problem. It is a revenue problem.</p>
              <ul className="list-disc list-inside text-foreground/90 space-y-2">
                <li>Automated review request campaigns sent to satisfied clients immediately after service completion — capturing feedback while the experience is fresh and the motivation to share is highest</li>
                <li>Multi-platform monitoring across Google, Yelp, Houzz, Healthgrades, Zocdoc, OpenTable, and Yelp — ensuring no review goes unnoticed across any platform San Ramon residents use</li>
                <li>Professional response guidance for negative reviews — in San Ramon's tight-knit neighborhood communities, a well-crafted professional response to a negative review is visible to every prospect who reads it afterward</li>
                <li>Healthcare-compliant reputation strategies for dental practices, med spas, and wellness professionals — HIPAA-aware review management that builds credibility without compromising compliance</li>
              </ul>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mt-4 italic">BrightLocal's 2024 Local Consumer Review Survey found that <a href="https://www.brightlocal.com/research/local-consumer-review-survey-2024/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">88% of consumers say they would use a business that responds to all of its reviews</a> — compared to just 47% who would consider a business that does not respond at all.</p>
            </div>
            <div className="text-center">
              <Button variant="hero" size="lg" asChild>
                <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
                  Build a 4.5+ Star Reputation in San Ramon <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Deep-Dive: Website Design / CRO */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Globe className="w-4 h-4" /> WEBSITE DESIGN
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Your Website Should Be Your Best Salesperson.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">If It's Not Generating San Ramon Leads Daily, It's Costing You Money.</span>
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">Most San Ramon service business websites are doing passive damage — loading slowly, burying contact information, failing to convert mobile visitors, and signaling the wrong quality level to a professional demographic that judges credibility by first impressions. Your <Link to="/services/website-design/" className="text-primary hover:underline">website</Link> works for you or against you around the clock. If it is not generating daily inquiries, it is not neutral — it is actively costing you clients.</p>
              <ul className="list-disc list-inside text-foreground/90 space-y-2">
                <li>Fast-loading, mobile-first design — the majority of San Ramon's tech-savvy professional households search for local services on smartphones, and Google penalizes slow sites with lower rankings</li>
                <li>Click-to-call and tap-to-text functionality prominently above the fold — for San Ramon's busy dual-income households, frictionless immediate contact is the difference between a booked call and a closed tab</li>
                <li>Online booking integrations for dentists, med spas, chiropractors, and restaurants — Dougherty Valley and Gale Ranch residents expect the same booking convenience from local service providers that they get from the enterprise tools they use at Bishop Ranch offices</li>
                <li>San Ramon-specific landing pages for each service and neighborhood — capturing hyper-local search intent for Bishop Ranch, Dougherty Valley, Gale Ranch, and the Crow Canyon and Bollinger Canyon commercial corridors</li>
                <li>Trust architecture: licensing credentials, Google review widgets, before-and-after galleries, and service area maps that speak directly to the research habits of San Ramon's professional demographic</li>
              </ul>
            </div>
            <div className="text-center">
              <Button variant="hero" size="lg" asChild>
                <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
                  Get a Conversion-Focused Website for San Ramon <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Deep-Dive: AI Receptionist & Automation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Brain className="w-4 h-4" /> AI AUTOMATION
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Every Missed Call Is a Lost Job.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Our AI Receptionist Follows Up in Seconds — So You Never Lose Another San Ramon Lead to a Faster Competitor.</span>
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">According to research by MIT and InsideSales.com, <a href="https://www.insidesales.com/response-time-matters/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">leads contacted within 5 minutes are 21 times more likely to convert</a> than those reached after just 30 minutes. In San Ramon's competitive Tri-Valley market, where multiple businesses receive the same emergency HVAC inquiry or dental appointment request simultaneously, the first business to respond wins — consistently. Manual teams cannot achieve five-minute response times around the clock. AI systems can.</p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-3">Our San Ramon <Link to="/services/marketing-automation-for-small-business/" className="text-primary hover:underline">AI automation</Link> platform includes:</p>
              <ul className="list-disc list-inside text-foreground/90 space-y-2">
                <li><span className="font-bold">AI Receptionist:</span> answers missed calls 24 hours a day, captures caller information, responds to common questions, and books appointments automatically — even at 2am on a Sunday when a Gale Ranch homeowner's furnace fails</li>
                <li><span className="font-bold">AI QuadBots:</span> conversational AI managing web chat, voice interactions, and lead qualification simultaneously — when a visitor lands on your website after hours and starts a chat, they receive an intelligent response, not an auto-reply, and qualified leads route directly to your CRM</li>
                <li><span className="font-bold">Instant lead follow-up:</span> every new lead receives an automated response within seconds via SMS, email, or call — based on what converts best for your business type — keeping you first in the prospect's mind at the moment of highest intent</li>
                <li><span className="font-bold">SMART nurture sequences:</span> automated CRM workflows send the right message at the right time — appointment reminders, follow-up sequences, seasonal promotions, renewal notices, review requests — without anyone on your team needing to remember to act</li>
                <li><span className="font-bold">VIP Club and reactivation campaigns:</span> for restaurants, dental practices, med spas, and other repeat-visit businesses, structured loyalty and reactivation systems bring dormant clients back at a fraction of the cost of acquiring new ones — turning your existing customer list into a compounding revenue asset</li>
              </ul>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mt-4">Retention is the fastest path to meaningful revenue growth for established San Ramon service businesses. Acquiring a new customer costs five to seven times more than retaining an existing one. Our retention infrastructure — VIP Club systems, SMART nurture campaigns, and automated review programs — keeps your best clients engaged and your pipeline warm without adding headcount.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <CardCTA
        title="Schedule Strategy Call"
        description="See how GrowSmallBiz can help your San Ramon business connect visibility, lead capture, follow-up, and conversion into one practical system."
        buttonText="Schedule Strategy Call"
        buttonHref={strategyCallUrl}
      />

      {/* Section: Who We Serve — Industry Verticals */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" /> WHO WE SERVE
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Built for Your Industry, Not Adapted From Someone Else's Playbook —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">See If We're the Right Fit for San Ramon</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">GrowSmallBiz works exclusively with local service businesses that serve San Ramon and the Tri-Valley community directly. We do not work with eCommerce stores, online retailers, or product-based businesses. Our systems are purpose-built for the verticals below — which means faster results, deeper playbooks, and strategies built on real market knowledge rather than generic agency frameworks.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Home Service Contractors — HVAC, Roofing, Plumbing & Electrical: Fill Your San Ramon Calendar Year-Round</h3>
              <p className="text-muted-foreground leading-relaxed">When a Dougherty Valley homeowner's AC fails in August or a Gale Ranch pipe bursts at midnight, they search Google and call the first credible result they find. If you are not in the top three on Google Maps for your service area, you do not exist at the highest-intent moment in the entire buying journey. We build the systems that put San Ramon home service contractors at the top of local search, capture leads the instant they arrive, and respond faster than any manual team can — including the AI Receptionist that handles calls around the clock while your crew is on the job.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Dentists, Med Spas & Wellness Professionals: Attract High-Value San Ramon Patients Who Book and Stay</h3>
              <p className="text-muted-foreground leading-relaxed">San Ramon's professional demographic represents one of the Bay Area's strongest markets for premium dental care, cosmetic procedures, and wellness services. Patients in Dougherty Valley and Gale Ranch do not choose their dentist or med spa on price. They choose based on visible trust signals — star ratings, professional website quality, review volume, and response speed. We build the complete digital presence that earns that trust: a fast, professional website, a strong and fully optimized Google Business Profile, automated review generation, and the AI booking follow-up that keeps your schedule full without administrative overhead.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <UtensilsCrossed className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Restaurants & Hospitality: Fill More Tables, Build Loyal Regulars, Own San Ramon's Dining Scene</h3>
              <p className="text-muted-foreground leading-relaxed">San Ramon's Bollinger Canyon Road and Crow Canyon commercial corridors host a competitive restaurant scene serving the Tri-Valley's high-income professional households and the corporate dining demand from Bishop Ranch. Success requires more than great food: it requires a Google rating above 4.5, visibility on search and maps, a consistent review flow, and the retention systems that turn a first-time visitor into a regular. Our VIP Club membership systems reward loyalty and increase visit frequency. Reactivation campaigns bring dormant customers back. Automated review requests build your reputation while the dining experience is still fresh.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Real Estate Agents & Brokers: Own the Tri-Valley Market, Multiply Your Listing Inquiries, and Build a Referral Engine</h3>
              <p className="text-muted-foreground leading-relaxed">In the East Bay real estate market, a lead who does not hear back within minutes moves to the next agent. San Ramon's active Tri-Valley market — where corporate relocations from Bishop Ranch and Dougherty Valley new construction create consistent buyer and seller demand — rewards agents who are visible, responsive, and systematically follow up. We build lead generation systems combining targeted paid campaigns, high-converting listing pages, and CRM pipelines that automate follow-up across SMS, email, and phone — keeping your database warm and your pipeline moving without manual intervention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Real Results */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" /> RESULTS
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Real Client Results Across Our Service Areas
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto italic">See what's possible when marketing runs as a complete, integrated system.</p>
          </div>

          <CampaignResultsCards cards={sanRamonCards} />

          {/* Channel Compare Table */}
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-4">
              Single-Channel Marketing Doesn't Win in San Ramon Anymore.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Here's What Actually Moves the Needle.</span>
            </h3>
            <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">San Ramon's professional consumer base researches before deciding. They check your Google ranking, read your reviews, visit your website, and may encounter you on social media — all before making contact. A single-channel approach captures only one touchpoint. An integrated system captures all of them.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="text-left p-4 text-sm font-semibold text-primary">Channel</th>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Best For</th>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Time to Results</th>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Long-Term Value</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { channel: "Local SEO", bestFor: "Sustainable organic rankings & trust signals", time: "3–6 months for full impact", value: "High — compounds over time" },
                    { channel: "Google Ads / PPC", bestFor: "Immediate lead flow & seasonal peaks", time: "Day 1", value: "Medium — requires ongoing investment" },
                    { channel: "Google LSA", bestFor: "Pay-per-verified-lead with Google trust badge", time: "2–4 weeks setup", value: "High — top search placement" },
                    { channel: "Meta / Social Ads", bestFor: "Retargeting & brand awareness", time: "1–2 weeks", value: "Medium — audience building" },
                    { channel: "Reputation Mgmt", bestFor: "Conversion lift & local ranking signals", time: "30–90 days for rating lift", value: "High — trust drives decisions" },
                    { channel: "AI & Automation", bestFor: "Lead capture speed, nurture & retention", time: "Immediate after setup", value: "High — multiplies every channel" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border/30">
                      <td className="p-4 text-sm font-medium text-foreground">{row.channel}</td>
                      <td className="p-4 text-sm text-foreground/80">{row.bestFor}</td>
                      <td className="p-4 text-sm text-muted-foreground">{row.time}</td>
                      <td className="p-4 text-sm text-muted-foreground">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Differentiators — Why GrowSmallBiz Outperforms */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Award className="w-4 h-4" /> WHY US
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              No Templates. No Generalists. No Excuses.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Why GrowSmallBiz Outperforms Every Agency That's Failed Your San Ramon Business Before.</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">San Ramon is served by several active digital marketing agencies — all visible in local search results. Here is what makes the system GrowSmallBiz builds consistently outperform the competition in our own backyard:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { title: "We're Local", desc: "GrowSmallBiz is based in Danville — five minutes from San Ramon. We know the East Bay market, the Tri-Valley competitive landscape, and what local business owners face daily. We are not a national agency managing accounts they have never seen." },
              { title: "Integrated System", desc: "One system, one strategy, one team accountable for your outcomes. When something is not performing, you do not have three vendors pointing fingers at each other. You have one partner who owns the full picture and fixes it." },
              { title: "Conversion-First", desc: "We do not report on traffic, impressions, or follower growth unless those metrics connect directly to leads and revenue. Every metric we track has a direct line to your bottom line." },
              { title: "AI-Powered", desc: "AI is built into how our systems operate — from lead response and AI QuadBots to SMART nurture sequences and campaign optimization. It makes our execution faster, smarter, and more consistent than any manually managed approach." },
            ].map((item, i) => (
              <div key={i} className="feature-card-teal rounded-2xl p-6">
                <h3 className="text-lg font-display font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">We do not use templates. We do not assign a junior account manager to your campaign and move on to the next client. Every strategy is built from your specific competitive landscape, your San Ramon service area, your vertical, and your revenue goals. Our certified marketing strategists carry your account from day one through sustained growth — and because we are based five minutes away in Danville, our reputation in this community is on the line alongside yours.</p>
          </div>
        </div>
      </section>

      {/* Section: Serving San Ramon and the Wider Tri-Valley */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" /> COMMUNITY
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Serving San Ramon and the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Wider Tri-Valley</span>
            </h2>
          </div>
          <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8 max-w-4xl mx-auto mb-8">
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">GrowSmallBiz is a <a href="https://sanramon.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">San Ramon Chamber</a> member, and that local connection helps us stay close to the business community while serving San Ramon and the wider Tri-Valley.</p>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">GrowSmallBiz supports businesses in San Ramon as well as nearby communities including Danville, Dublin, Pleasanton, Livermore, and surrounding East Bay service areas. That overlap matters because buyers often compare across city lines even when local trust still drives the final choice.</p>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">If your business also serves nearby communities, explore our pages for:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Martinez", to: "/locations/martinez-ca/" },
                { label: "Concord", to: "/locations/concord-ca/" },
                { label: "Pleasant Hill", to: "/locations/pleasant-hill-ca/" },
                { label: "Walnut Creek", to: "/locations/walnut-creek-ca/" },
                { label: "Danville", to: "/locations/danville-ca/" },
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

      {/* FAQ Section */}
      <FAQSection
        title={<>Your Questions Answered — <span className="text-transparent bg-clip-text bg-gradient-primary italic">No Jargon, No Sales Pitch, Just Straight Answers About Digital Marketing in San Ramon</span></>}
        subtitle="The questions below reflect what San Ramon service business owners ask most commonly before starting a marketing engagement."
        faqs={[
          { question: "What types of businesses does GrowSmallBiz work with?", answer: "We work exclusively with local service businesses and brick-and-mortar establishments — including HVAC contractors, plumbers, electricians, roofers, dental practices, med spas, real estate professionals, and restaurants. We do not work with eCommerce stores, online retailers, or product-based businesses. Our systems are purpose-built for businesses that serve local San Ramon and Tri-Valley customers directly." },
          { question: "How is working with GrowSmallBiz different from hiring separate vendors for SEO, ads, and a website?", answer: "When you hire separate vendors, each one optimizes for their own deliverable — not your revenue. An SEO agency drives traffic. A web designer builds a site. An ads manager runs campaigns. But no one is accountable for what happens when the lead arrives. Our integrated system connects every stage: the traffic that brings the lead, the website that converts it, the CRM that captures it, the AI that follows up instantly, and the automation that nurtures it until it closes. One strategy, one team, one outcome." },
          { question: "How long before I start seeing results from digital marketing in San Ramon?", answer: "Paid advertising and AI lead-handling systems typically show measurable impact within the first 30 to 60 days. SEO and reputation building are longer-term investments — most clients see significant organic traction within 3 to 6 months. Google Business Profile optimizations frequently show movement within 4 to 8 weeks. We provide transparent reporting from day one so you always know where things stand and what each channel is contributing." },
          { question: "What does AI actually do for my San Ramon business on a day-to-day basis?", answer: "AI handles the work that typically falls through the cracks: answering missed calls around the clock, responding to website visitors immediately through AI QuadBots, qualifying incoming leads, sending follow-up messages on schedule via SMART nurture sequences, requesting reviews after completed jobs, and continuously optimizing your campaigns. Your team focuses on delivering your service and closing deals. AI handles the gaps — which in San Ramon's fast-moving Tri-Valley market, are where most of the revenue gets lost." },
          { question: "Do I need to rebuild my website or switch my current tools to work with GrowSmallBiz?", answer: "Not necessarily. We start by assessing what you already have and build around it wherever practical. In some cases, we will recommend a website upgrade or platform migration — but we will always explain the reason and show you the expected return before suggesting any major change. Our goal is to maximize what is working and fix what is not — not to sell you a rebuild you do not need." },
          { question: "How much does digital marketing cost for a San Ramon local service business?", answer: "Investment levels vary based on your business size, growth goals, competitive landscape, and the combination of services your business needs. We build custom packages aligned to your specific objectives and service area — the right investment is the one that delivers a clear, measurable return. Contact us for a no-obligation strategy session and we will recommend exactly what makes sense for your business." },
          { question: "Why does the San Ramon Chamber of Commerce rank in Google for marketing keywords?", answer: "The San Ramon Chamber of Commerce maintains a high-authority local domain that ranks organically for several San Ramon marketing and advertising keywords. Being a verified member — with an active, linked directory listing — provides a direct local citation signal that generic agencies cannot replicate. GrowSmallBiz is a verified San Ramon Chamber member, which means our clients benefit from the chamber's local authority as part of their overall citation profile. It is one of the most undervalued E-E-A-T signals available to San Ramon service businesses." },
          { question: "Can GrowSmallBiz help my San Ramon business with both lead generation and customer retention?", answer: "Yes — and for established San Ramon service businesses, retention is often the faster, cheaper path to meaningful revenue growth. Acquiring a new customer costs five to seven times more than retaining an existing one. Our retention infrastructure includes VIP Club membership systems for restaurants and repeat-visit businesses, SMART nurture sequences that keep past clients engaged, reactivation campaigns that bring dormant customers back, and automated review programs that compound your reputation over time. Retention and acquisition work together in the integrated system — one does not replace the other." },
        ]}
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have questions about marketing in San Ramon?",
          description: "We're here to help you find the right strategy.",
          tagline: "Let's grow your San Ramon business together.",
        }}
      />

      {/* Final CTA */}
      <section id="final-cta" className="py-16" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <p className="text-primary font-medium mb-4">THE NEXT STEP</p>
            <h2 className="section-title">
              Every Day You Wait, Your Competitors Book Another San Ramon Customer{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">That Should Have Been Yours.</span>
            </h2>
            <p className="section-description mt-4 mb-4">
              San Ramon's most competitive local businesses are not winning because they have bigger budgets. They are winning because they have better systems — faster follow-up, stronger visibility, smarter retention, and one integrated strategy that works across every channel simultaneously.
            </p>
            <p className="section-description mb-4">
              GrowSmallBiz gives your San Ramon service business that same infrastructure: one connected system spanning awareness to retention, powered by AI, and managed by a team based five minutes away in Danville. We bring 30+ years of Fortune 500 sales, marketing, and growth strategy experience to the specific challenges of Tri-Valley local service business marketing — and as San Ramon Chamber, Danville Chamber, and Walnut Creek Chamber members, our commitment to this community is verifiable, not just claimed.
            </p>
            <p className="section-description mb-8 font-semibold">
              No long-term contracts. No templates. No excuses. Just one integrated system built specifically for your San Ramon business.
            </p>
          </div>
          <CardCTA
            title="Schedule Strategy Call"
            description="Receive a personalized strategy session — local SEO audit, competitive analysis, and a clear growth roadmap built specifically for your San Ramon service business."
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

export default SanRamonCA;
