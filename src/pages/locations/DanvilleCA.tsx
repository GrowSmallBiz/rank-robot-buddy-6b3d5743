import { Header } from "@/components/layout/Header";
import danvilleHero from "@/assets/danville-hero.jpg";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Phone, Shield, CheckCircle, Search, Target, Zap, Globe, Star, Users, Home, Heart, Building2, UtensilsCrossed, BarChart3, Brain, TrendingUp, MessageSquare } from "lucide-react";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { PersonCTA } from "@/components/services";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { useUtm } from "@/hooks/use-utm";
import { baseContactCTA } from "@/config/contactCTA";

const DanvilleCA = () => {
  const { buildUrl } = useUtm();
  const strategyCallUrl = buildUrl("https://lp.growsmallbiz.io/digital-growth-strategy-session", "schedule-strategy-call");

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Digital Marketing Agency in Danville, CA | GrowSmallBiz</title>
        <meta name="description" content="GrowSmallBiz is Danville's hometown digital marketing agency. Local SEO, Google Ads, website design, and AI automation for contractors, dentists, med spas, and realtors in Danville, Blackhawk, and Alamo." />
        <meta
          name="description"
          content="GrowSmallBiz is Danville's hometown digital marketing agency for local service businesses. Local SEO, Google Ads, reputation management & AI automation. Get your free strategy session."
        />
        <link rel="canonical" href="https://growsmallbiz.io/locations/danville-ca/" />
      </Head>
      <ServiceJsonLd
        serviceName="Digital Marketing Agency in Danville, CA"
        serviceType="Digital Marketing"
        description="GrowSmallBiz is Danville's hometown digital marketing agency for local service businesses. Local SEO, Google Ads, reputation management & AI automation."
        url="/locations/danville-ca/"
        breadcrumbs={[
          { name: "Locations We Serve", url: "/locations/locations-we-serve/" },
          { name: "Danville, CA", url: "/locations/danville-ca/" },
        ]}
      />

      <Header />

      <main id="main-content">

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <img src={danvilleHero} alt="GrowSmallBiz digital marketing agency serving Danville CA local service businesses" width={1920} height={768} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: `hsl(var(--background) / 0.82)` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="service-badge mb-4 animate-fade-up">
              <MapPin className="w-4 h-4" />
              <span>Danville, CA — Local Service Business Marketing | GrowSmallBiz Hometown Market</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 animate-fade-up leading-tight">
              Stop Losing Danville Leads to Competitors —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Full-Service Digital Marketing Built for Local Service Businesses</span>
            </h1>

            <p className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up mt-6" style={{ animationDelay: "0.1s" }}>
              Every day your competitors are capturing the clients that should belong to your Danville business. In San Ramon Valley's most affluent market, the difference between a fully booked calendar and a quiet phone isn't the quality of your work — it's whether high-value clients can find you online before they find your competition.
            </p>

            <p className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up mt-4" style={{ animationDelay: "0.15s" }}>
              GrowSmallBiz is Danville's hometown digital marketing agency — headquartered here, Danville Area Chamber member, built exclusively for local service businesses. Contractors, dentists, med spas, restaurants, real estate professionals — if you serve Danville clients, we're built for you.
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

      {/* ===== TRUST BAR ===== */}
      <section className="py-4" style={{ backgroundColor: 'hsl(var(--accent))' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-accent-foreground">
            <a href="https://business.danvilleareachamber.com/list/member/growsmallbiz-digital-marketing-10687" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" /> Danville Area Chamber of Commerce
            </a>
            <span className="text-accent-foreground/40">|</span>
            <a href="https://members.walnut-creek.com/list/Details/growsmallbiz-digital-marketing-4248068" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" /> Walnut Creek Chamber of Commerce
            </a>
            <span className="text-accent-foreground/40">|</span>
            <a href="https://members.sanramon.org/list/member/growsmallbiz-digital-marketing-4986" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" /> San Ramon Chamber of Commerce
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
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Danville Bottom Line</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Choosing the right digital marketing partner is one of the most consequential decisions you will make for your Danville business. Here is what sets GrowSmallBiz apart from every general-purpose agency competing for your attention:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "Hometown market authority:", body: "We are headquartered in Danville and are Danville Area Chamber members. We understand Blackhawk, Alamo, Downtown Hartz Avenue, and the premium client expectations unique to San Ramon Valley." },
              { label: "Exclusive vertical focus:", body: "We only serve contractors, health & wellness professionals, restaurants, and real estate pros — not one of dozens of industries on a rotating client roster." },
              { label: "Proven local results:", body: "HVAC clients rank in the Google local 3-pack within 90 days; dental practices average 30+ new patient inquiries per month; restaurants see measurable reservation growth within 60 days." },
              { label: "Integrated, not siloed:", body: "Every channel — SEO, Ads, Reputation, AI — feeds one coordinated goal: your revenue growth." },
              { label: "No long-term contracts:", body: "Month-to-month agreements keep us accountable to results. We earn your business every single month." },
              { label: "AI-powered response speed:", body: "Our AI Receptionist follows up with missed leads within minutes — because in Danville's premium market, the first business to respond sets the quality expectation and wins the client." },
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

      {/* ===== WHY DANVILLE IS THE MOST VALUABLE MARKET ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" /> LOCAL MARKET
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Why Danville Is the San Ramon Valley's Most Valuable — and Most Competitive — Market for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Local Service Businesses</span>
            </h2>
          </div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {[
              { title: "Highest income demographics in Contra Costa County", body: "Danville consistently ranks among the most affluent communities in California. Neighborhoods like Blackhawk — a prestigious gated community with median home values well above $1.5M — and the Diablo Country Club corridor represent clients who choose service providers based on reputation and credibility, not lowest price. This is your market. Premium positioning and a strong online reputation are not nice-to-haves here — they are the table stakes." },
              { title: "Large-lot and luxury property demand", body: "Danville's prevalence of large residential lots, equestrian properties, and high-end homes creates specific service demand that differs significantly from denser suburban markets. HVAC systems are larger and more complex. Landscaping and exterior maintenance commands premium pricing. Roofing and remodeling projects are higher average ticket. For home service contractors, Danville clients are worth more per job — which makes winning them in local search even more valuable." },
              { title: "Downtown Hartz Avenue restaurant and retail corridor", body: "Danville's charming Downtown — centered on Hartz Avenue — is one of San Ramon Valley's most active dining and retail destinations. Restaurants compete intensely for weekend diners, event bookings, and weekday lunch traffic from the surrounding professional community. Social media presence, Google review ratings, and online reservation visibility are mission-critical for any food and beverage business operating in this corridor." },
              { title: "Active San Ramon Valley real estate market", body: "Danville's real estate market drives consistent demand for agents, brokers, and mortgage professionals serving one of the Bay Area's most desirable communities. Listing visibility, lead generation, and personal brand authority are decisive competitive factors for professionals competing in this market." },
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              The Local Search Gap Costing Most Danville Service Businesses{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">10–15 Leads Every Month</span>
            </h2>
          </div>
          <div className="prose prose-lg prose-invert max-w-none space-y-6">
            <p className="text-foreground/90 leading-relaxed">Here is the number that should concern every Danville service business owner: according to BrightLocal's Local Consumer Review Survey, <a href="https://www.brightlocal.com/research/local-consumer-review-survey-2024/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">81% of consumers use Google to evaluate local businesses</a> — and <a href="https://www.brightlocal.com/resources/local-seo-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">80% of US consumers search for local businesses on a weekly basis</a>. Yet BrightLocal research shows that <a href="https://www.brightlocal.com/resources/local-seo-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">56% of businesses still haven't fully optimized their Google Business Profile</a>. In a premium market like Danville, where a single new client relationship can be worth thousands of dollars over a lifetime, that optimization gap translates directly to measurable monthly revenue loss.</p>

            <p className="text-foreground/90 leading-relaxed">Generic marketing agencies fail Danville service businesses because they cannot differentiate between Blackhawk's luxury client expectations and the broader Bay Area market. Neighborhood-level keyword targeting, premium service positioning, and reputation management calibrated for a discerning clientele require a focused approach. GrowSmallBiz builds strategies that reflect Danville's specific competitive dynamics — not templates copied from markets with different demographics, different price points, and different buyer psychology.</p>
          </div>

          {/* Pull Quote */}
          <div className="mt-10 bg-primary/5 border-l-4 border-primary rounded-r-xl px-6 py-5">
            <p className="text-lg md:text-xl font-semibold italic text-foreground/90">"81% of consumers use Google to evaluate local businesses — but 56% of businesses haven't fully optimized their Google Business Profile. In Danville's premium market, that gap represents thousands in lost monthly revenue."</p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              The Integrated Marketing System Built for Danville Service Businesses —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Fills Your Calendar, Not Just Your Dashboard</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Our services are not sold as isolated tactics. They are delivered as an integrated system, designed so that each channel amplifies the others. Here is what is included and what it means for your Danville business:</p>
          </div>

          {/* Services Overview Table — Desktop */}
          <div className="hidden md:block overflow-x-auto mb-16">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">Service</th>
                  <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">What We Do for You</th>
                  <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">Danville Business Impact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { service: "Local SEO & Google Business Profile", whatWeDo: "GBP optimization, NAP citation building, neighborhood keyword targeting, review management, local link building", impact: "Rank in Google Maps & local 3-pack; attract customers searching in Blackhawk, Alamo, Diablo, Downtown Danville, and Green Valley" },
                  { service: "Managed Google Ads / PPC", whatWeDo: "Call-only ads, location extensions, seasonal keyword campaigns, conversion tracking, ongoing bid optimization", impact: "Immediate top-of-page visibility; qualified leads from day one; efficient ad spend with real-time performance data" },
                  { service: "Google Local Service Ads (LSA)", whatWeDo: "Background check coordination, license verification, budget management, Google Guaranteed badge setup", impact: "Appear above standard search ads with a trust badge that turns clicks into verified phone leads" },
                  { service: "Social Media & Meta Ads", whatWeDo: "Geo-targeted Facebook & Instagram campaigns for 94506 and 94526 ZIP codes; retargeting sequences; creative development", impact: "Build brand awareness and re-engage warm prospects who visited your site but did not convert" },
                  { service: "Conversion-Focused Website Design", whatWeDo: "Mobile-first design, click-to-call integration, online booking, trust elements, page speed optimization", impact: "Turn website visitors into booked appointments; fast load times reduce bounce and improve rankings" },
                  { service: "Reputation Management", whatWeDo: "Automated review request campaigns, Google/Yelp/Houzz monitoring, professional response guidance", impact: "Grow from 3-star averages to 4.5+ stars, build trust, and improve your local search ranking signals" },
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
              { service: "Local SEO & Google Business Profile", whatWeDo: "GBP optimization, NAP citation building, neighborhood keyword targeting, review management, local link building", impact: "Rank in Google Maps & local 3-pack; attract customers searching in Blackhawk, Alamo, Diablo, Downtown Danville, and Green Valley" },
              { service: "Managed Google Ads / PPC", whatWeDo: "Call-only ads, location extensions, seasonal keyword campaigns, conversion tracking, ongoing bid optimization", impact: "Immediate top-of-page visibility; qualified leads from day one; efficient ad spend with real-time performance data" },
              { service: "Google Local Service Ads (LSA)", whatWeDo: "Background check coordination, license verification, budget management, Google Guaranteed badge setup", impact: "Appear above standard search ads with a trust badge that turns clicks into verified phone leads" },
              { service: "Social Media & Meta Ads", whatWeDo: "Geo-targeted Facebook & Instagram campaigns for 94506 and 94526 ZIP codes; retargeting sequences; creative development", impact: "Build brand awareness and re-engage warm prospects who visited your site but did not convert" },
              { service: "Conversion-Focused Website Design", whatWeDo: "Mobile-first design, click-to-call integration, online booking, trust elements, page speed optimization", impact: "Turn website visitors into booked appointments; fast load times reduce bounce and improve rankings" },
              { service: "Reputation Management", whatWeDo: "Automated review request campaigns, Google/Yelp/Houzz monitoring, professional response guidance", impact: "Grow from 3-star averages to 4.5+ stars, build trust, and improve your local search ranking signals" },
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
              Get Found First When Danville Customers Search for Your Services —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Local SEO & Google Maps Domination</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">Local SEO is the highest long-term return on investment available to any Danville service business. According to <a href="https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/local-search-conversion-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Think with Google</a>, 76% of consumers who perform a local search on their smartphone visit or contact a business within 24 hours. In Danville's premium market, those aren't just any leads — they are high-intent, high-value clients actively choosing between you and your competitors right now.</p>
            <p className="text-foreground/80 mb-4">Our local SEO approach for Danville businesses includes:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Complete Google Business Profile (GBP) audit, optimization, and ongoing management — accurate NAP consistency across all citations, with particular attention to Blackhawk, Alamo, and Diablo neighborhood targeting",
                "Category and service area selection calibrated for Danville ZIP codes 94506 and 94526, plus adjacent San Ramon Valley communities including Alamo, Diablo, and the San Ramon border corridor",
                "Geo-targeted landing pages built for how Danville clients actually search — 'HVAC repair Blackhawk,' 'dentist Danville CA,' 'best restaurant downtown Danville,' and 'roofer San Ramon Valley'",
                "Local citation building across authoritative directories to strengthen domain authority and local ranking signals — including Danville Area Chamber of Commerce, which provides a verified, high-authority backlink",
                "Structured review generation and management campaigns calibrated for Danville's discerning clientele — where a 4.7-star rating is table stakes and anything below 4.5 actively costs you clients",
                "Monthly performance reporting: rankings, impressions, calls, direction requests, and website clicks — with clear attribution so you always know what your investment is producing",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Optimize Your Local SEO for Danville — Schedule Your Free Strategy Call
            </a>
          </div>

          {/* 2. Google Ads */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Need Leads This Week, Not This Quarter?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Google Ads That Deliver Danville Customers on Day One</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">Organic rankings take months to build. For Danville service businesses that need to fill their calendars now — not next quarter — a well-managed Google Ads campaign is the fastest path to qualified inbound calls and booked appointments. In a high-value market like Danville, where the average job ticket is significantly above typical Bay Area averages, the ROI on a properly managed PPC campaign is compelling from month one.</p>
            <p className="text-foreground/80 mb-4">Our Danville Google Ads management includes:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Call-only campaigns built for home service contractors — critical for emergency HVAC repairs, plumbing calls, and urgent electrical service requests where immediate phone contact determines who gets the job",
                "Location-targeted campaigns covering Danville ZIP codes 94506 and 94526 and adjacent service areas including Alamo, Diablo, San Ramon, and Blackhawk — ensuring your budget is not wasted on out-of-area traffic",
                "Seasonal keyword campaigns aligned to Danville's demand cycles — 'AC tune-up Danville' in spring, 'heating repair Blackhawk' in fall, 'emergency plumber Danville CA' year-round, 'restaurant delivery near me' for food and beverage",
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
              → Launch Google Ads for Your Danville Business — Start Generating Leads This Week
            </a>
          </div>

          {/* 3. Google LSA */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Show Up Above Every Competitor With a Google Trust Badge —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">More Danville Leads, Pre-Qualified Before They Call</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">In Danville's high-expectation market, trust signals matter more than in almost any other Bay Area community. Clients in Blackhawk and Alamo are not selecting a service provider based on the lowest ad. They are selecting based on credibility, accountability, and visible endorsement. Google Local Service Ads with the Google Guaranteed badge deliver exactly that — appearing above all standard search results with a government-verified trust credential.</p>
            <p className="text-foreground/80 mb-4">GrowSmallBiz manages the entire LSA process for Danville contractors:</p>
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
              → Set Up Google LSA for Your Danville Business — Get Verified Leads
            </a>
          </div>

          {/* 4. Social Media & Meta Ads */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Reach Danville Homeowners Before They Need You —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">And Be the First Call When They Do</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">Facebook and Instagram give Danville service businesses a direct channel to reach their exact target audience — homeowners in Blackhawk, families on the Iron Horse Trail corridor, professionals commuting from the 680 corridor, and diners who frequent the Hartz Avenue restaurant scene. Our geo-targeted Meta Ads campaigns are built around the neighborhoods and ZIP codes where Danville's highest-value clients live.</p>
            <p className="text-foreground/80 mb-4">Our Danville social media marketing approach includes:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Geo-targeted Facebook and Instagram campaigns covering ZIP codes 94506 and 94526 — ensuring your budget reaches Danville's premium demographic, not the broader Bay Area market",
                "Before-and-after visual campaigns for roofers, HVAC companies, and home improvement contractors showcasing work done at Blackhawk, Alamo, and Green Valley properties — the visual context that resonates with luxury homeowners",
                "Restaurant promotion campaigns for Downtown Hartz Avenue businesses — weekend dining features, special event announcements, and seasonal menu promotions that drive reservation and walk-in traffic",
                "Patient transformation stories and testimonial campaigns for dentists, med spa owners, and wellness professionals that build the credibility required to attract Danville's discerning health and wellness clients",
                "Retargeting sequences that re-engage website visitors who did not convert on their first visit — keeping your business top of mind through Danville's longer premium service decision cycle",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Launch Social Media Advertising for Your Danville Business — Get Started
            </a>
          </div>

          {/* 5. Reputation Management */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              A 3-Star Rating Is Silently Killing Your Danville Business.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Here's How We Fix It in 90 Days.</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">In Danville's premium market, your online reputation is not a supporting factor in a client's decision — it is often the deciding factor. Blackhawk homeowners researching a roofing contractor will read eight to twelve reviews before making contact. A Danville family choosing a dentist will filter by minimum star rating before considering anyone. A 3.6-star rating in a community where competitors are at 4.7 stars is not just a credibility gap — it is an active revenue drain.</p>
            <p className="text-foreground/80 mb-4">GrowSmallBiz's reputation management system is built to systematically improve your rating and protect your brand in Danville's high-expectation environment:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Automated review request campaigns sent to satisfied clients immediately after service completion — capturing authentic feedback while the experience is fresh and the client is most motivated to share it",
                "Multi-platform monitoring across Google, Yelp, Houzz, Healthgrades, Zocdoc, OpenTable, and TripAdvisor — ensuring no review goes unnoticed across any platform Danville clients use",
                "Professional response guidance for negative reviews — Danville's community is small and tight-knit; a well-crafted, professional response to a negative review often matters more to prospective clients than the negative review itself",
                "Healthcare-compliant reputation strategies for dentists, med spas, and wellness professionals — protecting HIPAA compliance while still building a compelling, trustworthy review profile",
                "Reputation reporting showing your rating trajectory, review velocity, and competitive position relative to other Danville service providers in your category",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground/80 italic mb-6"><a href="https://www.brightlocal.com/research/local-consumer-review-survey-2024/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BrightLocal's 2024 Local Consumer Review Survey</a> found that 88% of consumers say they would use a business that responds to all of its reviews — compared to just 47% who would consider a business that does not respond at all. In Danville's word-of-mouth community, how you respond to every review shapes your reputation as much as the review itself.</p>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Build a 4.5+ Star Reputation in Danville — Start Your Review Campaign
            </a>
          </div>

          {/* 6. Website Design */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Your Website Should Be Your Best Salesperson —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">If It's Not Generating Danville Leads Daily, It's Costing You Money</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">In Danville's premium market, your website does more than generate leads — it sets the quality expectation before a client ever contacts you. A slow, outdated, or generic website signals the wrong things to Blackhawk homeowners and Hartz Avenue diners who expect the level of quality their investment reflects. Your website is working for you or against you, every hour of every day.</p>
            <p className="text-foreground/80 mb-4">GrowSmallBiz builds mobile-first, conversion-optimized websites for Danville service businesses:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Fast-loading, mobile-first design — the majority of local searches happen on smartphones, and Google penalizes slow sites with lower rankings that cost you visibility in the premium local market you are competing for",
                "Click-to-call and tap-to-text functionality prominently placed above the fold — because Danville clients making a premium purchasing decision want immediate, friction-free access to your team",
                "Online booking integrations for appointment-driven businesses — dentists, med spas, chiropractors, physical therapists, and restaurants all benefit immediately from reduced scheduling friction, leading to more completed bookings",
                "Premium trust architecture: professional photography of your team and work, licensing credentials, Google review widgets, before-and-after galleries, and transparent service descriptions that meet the quality expectations of Danville's discerning clientele",
                "Danville-specific landing pages for each service and neighborhood — capturing hyper-local search intent with geo-targeted content for Blackhawk, Alamo, Diablo, Downtown Danville, and surrounding communities",
                "Ongoing conversion rate optimization — testing headlines, CTAs, form design, and page layout to continuously improve the percentage of visitors who become booked appointments",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Get a Premium Website Built for Danville's Market — See Our Work
            </a>
          </div>

          {/* 7. AI Receptionist & Lead Automation */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Every Missed Call Is a Lost Job —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Our AI Receptionist Follows Up in Seconds</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">According to research by <a href="https://www.insidesales.com/response-time-matters/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">MIT and InsideSales.com published in the Harvard Business Review</a>, leads contacted within 5 minutes are 21 times more likely to convert than those reached after just 30 minutes. In Danville's competitive service market — where a single HVAC emergency call or new dental patient relationship can represent thousands of dollars in lifetime value — every missed lead has a measurable cost. And in a premium market, a missed call does not just lose the job. It loses the relationship, the referral, and every future engagement that relationship would have generated.</p>
            <p className="text-foreground/80 mb-4">GrowSmallBiz's AI Receptionist and marketing automation platform gives your Danville business a 24/7 lead capture and follow-up system:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Missed-call text-back: When a lead calls and you cannot answer, an automated SMS is sent within seconds — acknowledging the inquiry and opening the conversation before the prospect considers calling your competitor",
                "Conversational AI for lead qualification: Your AI Receptionist can answer FAQs, collect service details, qualify leads, and schedule appointments without human intervention — including evenings, weekends, and holidays when Danville's busy professional households are most likely to search for services",
                "Automated appointment reminders and confirmation sequences that reduce no-shows — particularly valuable for dental practices, med spas, and wellness professionals where no-shows represent direct revenue loss",
                "CRM integration and lead tracking — every inquiry captured, tagged, and tracked from first contact through closed job, giving you complete visibility into which marketing channels are generating your highest-value Danville clients",
                "Emergency lead escalation — high-priority service requests (emergency HVAC, urgent plumbing, immediate electrical) are flagged and escalated immediately to ensure your fastest response for your highest-converting inquiry types",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">●</span>
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground/80 italic mb-6">Industry research shows that businesses implementing AI marketing tools reported an average 11% increase in sales and a 28% reduction in marketing costs within six months of adoption. For Danville service businesses investing in growth, AI automation is not a future consideration — it is the operational foundation that makes every other marketing channel more effective.</p>
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
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">See If We're the Right Fit for Danville</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">GrowSmallBiz serves a focused set of local service business verticals in Danville and the San Ramon Valley. Our specialization means deeper industry expertise, faster results, and strategies built on real market knowledge — not frameworks adapted from markets with different demographics and different buyer expectations.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Home Service Contractors — HVAC, Roofing, Plumbing & Electrical</h3>
              <p className="text-muted-foreground leading-relaxed">Danville's combination of large residential lots, luxury homes, aging housing stock in established neighborhoods, and new construction in Blackhawk creates year-round demand for quality home service contractors. We build marketing systems around Danville's seasonal demand cycles — hot inland valley summers driving HVAC emergency calls, winter heating system tune-ups, and spring exterior maintenance — delivering booked jobs at premium Danville price points, not just website traffic.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Dentists, Med Spas & Wellness Professionals</h3>
              <p className="text-muted-foreground leading-relaxed">Danville's affluent, health-conscious demographic represents one of the Bay Area's strongest markets for premium dental care, cosmetic procedures, wellness treatments, and chiropractic care. We specialize in appointment-driven conversion funnels, HIPAA-aware reputation management, and attracting the high-value patients that Danville's income demographics represent. The focus is not just acquisition — it is building the long-term patient relationships that generate referrals in a tight-knit community.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <UtensilsCrossed className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Restaurants & Hospitality</h3>
              <p className="text-muted-foreground leading-relaxed">Downtown Danville's Hartz Avenue restaurant corridor is one of San Ramon Valley's most active dining destinations — and one of its most competitive. Success requires more than great food: it requires a Google rating above 4.5, a visible social media presence, active management of OpenTable and Yelp profiles, and a consistent flow of reviews that reflect the dining experience you deliver. We build the full digital reputation and visibility system that puts your restaurant top of mind when Danville residents and San Ramon Valley visitors decide where to go.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Real Estate Agents & Brokers</h3>
              <p className="text-muted-foreground leading-relaxed">San Ramon Valley real estate professionals compete in one of the Bay Area's most desirable and highest-value markets. Listing visibility, lead generation, and personal brand authority are the decisive competitive factors between agents who dominate their market and those who remain invisible. We build SEO, paid advertising, and content strategies that establish lasting local authority — turning your digital presence into a referral engine that generates qualified buyer and seller leads consistently.</p>
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
              Real Results for Danville Service Businesses:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">More Calls, More Bookings, More Revenue</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">The following results were achieved by GrowSmallBiz clients operating in Danville and the San Ramon Valley. Individual results vary based on industry, competition, and starting conditions — but these outcomes represent what a properly integrated marketing system delivers when all channels work together for a premium local market.</p>
          </div>

          {/* Case Study Cards */}
          <div className="space-y-6 mb-14">
            <div className="bg-primary/5 border border-primary/30 rounded-xl p-6">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">CLIENT RESULT | San Ramon Valley HVAC Company — Danville Service Area</p>
              <p className="text-2xl md:text-3xl font-display font-bold text-primary mb-3">Page 3–4 → Local 3-Pack in 9 Weeks</p>
              <p className="text-foreground/80 leading-relaxed">After a comprehensive Google Business Profile optimization and Danville-specific local citation cleanup campaign, this HVAC contractor moved to a top-3 local map pack position — capturing significantly more emergency HVAC calls from Blackhawk and Alamo homeowners during peak summer season. Inbound calls increased 87% month-over-month within 90 days.</p>
            </div>

            <div className="bg-primary/5 border border-primary/30 rounded-xl p-6">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">CLIENT RESULT | Danville Dental Practice</p>
              <p className="text-2xl md:text-3xl font-display font-bold text-primary mb-3">+31 New Patient Leads in Month 1</p>
              <p className="text-foreground/80 leading-relaxed">Combining a targeted Google Ads launch calibrated to Danville demographics with a proactive review management campaign, this dental practice generated 31 qualified new patient inquiries in its first full month — more than double its previous monthly average. The practice improved from a 3.6-star to a 4.6-star Google rating within 90 days, crossing the threshold at which Danville patients consistently select a new provider.</p>
            </div>

            <div className="bg-primary/5 border border-primary/30 rounded-xl p-6">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">CLIENT RESULT | Downtown Danville Restaurant — Hartz Avenue</p>
              <p className="text-2xl md:text-3xl font-display font-bold text-primary mb-3">+131% Online Reservation Growth in 90 Days</p>
              <p className="text-foreground/80 leading-relaxed">A coordinated local SEO, Google Business Profile optimization, and Meta Ads strategy transformed this Hartz Avenue restaurant's online visibility. Online table reservations grew from 45 per month to 104 per month — a 131% increase — while Google review volume tripled and average rating climbed to 4.7 stars, establishing the restaurant as the top-ranked dining option in its category for Danville searches.</p>
            </div>
          </div>

          {/* Before/After Table */}
          <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-6">What Happens to Danville Service Businesses After 90 Days with GrowSmallBiz</h3>
          <div className="overflow-x-auto mb-14">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">Performance Metric</th>
                  <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">Before GrowSmallBiz</th>
                  <th className="p-3 text-left font-bold text-primary bg-card/80 border border-border/60">After 90 Days</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: "Google Local 3-Pack Ranking", before: "Page 3–4", after: "Top 3 — Local Map Pack" },
                  { metric: "Monthly Inbound Calls", before: "90 calls / mo", after: "168 calls / mo (+87%)" },
                  { metric: "New Patient Leads (Dental)", before: "12 leads / mo", after: "31 leads / mo (+158%)" },
                  { metric: "Restaurant Table Reservations (Online)", before: "45 bookings / mo", after: "104 bookings / mo (+131%)" },
                  { metric: "Avg. Google Review Rating", before: "3.6 stars", after: "4.6 stars (+1.0 stars)" },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-3 border border-border/60 font-semibold text-foreground bg-card/30">{row.metric}</td>
                    <td className="p-3 border border-border/60 text-foreground/70">{row.before}</td>
                    <td className="p-3 border border-border/60 text-primary font-bold">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Channel Compare */}
          <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">Single-Channel Marketing Doesn't Win in Danville Anymore. Here's What Actually Moves the Needle.</h3>
          <p className="text-foreground/80 leading-relaxed mb-6">Danville's premium clients research before they commit. They check your Google ranking, read your reviews, visit your website, and may encounter you on social media — all before making contact. A single-channel approach captures only one of those touchpoints. An integrated system captures all of them, which is why our clients consistently outperform competitors who rely on SEO alone or ads alone.</p>
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
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Danville Business Before</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">There is no shortage of digital marketing agencies claiming to serve Danville businesses. Most will promise similar results with similar services. Here is why what GrowSmallBiz builds consistently outperforms what general-purpose agencies deliver in our hometown market:</p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              { title: "Vertical Specialist", description: "We only serve contractors, health & wellness professionals, restaurants, and real estate pros. We know your buyer psychology, your seasonal cycles, and your Danville competitive landscape inside and out." },
              { title: "Integrated System", description: "Every channel — SEO, Ads, Reputation, AI Automation — connects and feeds one goal: more booked appointments and service calls. Nothing runs in a silo." },
              { title: "AI-Powered Speed", description: "Our AI Receptionist follows up with missed leads within minutes via SMS and email. In Danville's premium market, the first business to respond wins the client — every time." },
              { title: "Hometown Advantage", description: "GrowSmallBiz is headquartered in Danville. We are Danville Area Chamber members. We know the neighborhoods, the client expectations, and the local competitive dynamics — because this is our market too." },
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

          <p className="text-foreground/80 leading-relaxed mt-10 max-w-3xl">We do not use templates. We do not run your campaign from a checklist designed for a plumber in Phoenix. Every strategy is built from your specific competitive landscape, your Danville service area, your vertical, and your revenue goals. Our certified marketing strategists carry your account from day one through sustained growth — and because we live and work in this community, our reputation is on the line alongside yours.</p>
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
        title={<>Your Questions Answered — No Jargon, No Sales Pitch, Just Straight Answers About <span className="text-transparent bg-clip-text bg-gradient-primary italic">Digital Marketing in Danville</span></>}
        faqs={[
          { question: "What types of businesses does GrowSmallBiz work with in Danville, CA?", answer: "GrowSmallBiz primarily works with local service businesses and repeat-visit local businesses, including home services, dentists, med spas, realtors, restaurants, and other Danville-area companies that depend on visibility, lead flow, follow-up, and retention." },
          { question: "How much does digital marketing cost for a Danville local service business?", answer: "Investment levels vary based on your business size, revenue goals, competitive landscape, and the combination of services you need. Most Danville service businesses in our portfolio invest between $1,000 and $5,000 per month across SEO, Google Ads, reputation management, and AI automation — with our core AI Client Growth System starting at $797 per month plus a one-time setup fee. Given Danville's premium market dynamics — where a single new client relationship can represent several thousand dollars in lifetime value — the ROI threshold is typically reached faster here than in lower-value markets. We build custom packages aligned to your specific goals and service area." },
          { question: "How long does it take to see results from local SEO in Danville?", answer: "Google Business Profile optimizations show measurable movement within 4 to 8 weeks. Full local 3-pack rankings for competitive Danville search terms are typically achieved within 3 to 6 months, depending on your industry and starting position. Google Ads campaigns generate qualified leads from day one. In Danville's market, the combination of immediate paid visibility with compounding organic SEO growth is the most effective approach — ads capture high-intent clients now while SEO builds the long-term authority that reduces your cost-per-lead over time." },
          { question: "Does my Danville business need to be on social media?", answer: "For most Danville service businesses, yes — but the strategy differs significantly by vertical. Restaurants benefit enormously from Instagram and Facebook visibility given how Danville residents discover and choose dining experiences. Home service contractors benefit most from retargeting campaigns that re-engage website visitors and lookalike audience campaigns targeting homeowners in Blackhawk, Alamo, and Green Valley ZIP codes. Health and wellness professionals benefit from reputation-building content and before-and-after campaigns. We build social strategies calibrated to your specific vertical and Danville's audience, not generic social media management." },
          { question: "How important are online reviews for Danville businesses specifically?", answer: "More important than in most other markets. Danville's affluent, research-oriented clientele reads reviews more thoroughly and weighs them more heavily in their decision-making than the average Bay Area consumer. A business with fewer than 4.5 stars is frequently filtered out before a Blackhawk homeowner ever visits the website. Our reputation management system is specifically designed for Danville's high-expectation environment — proactively building your review volume, protecting your rating during difficult situations, and ensuring your Google profile reflects the quality of service you actually deliver." },
          { question: "Do I need Google Local Service Ads if I'm already running Google Ads?", answer: "For licensed home service contractors in Danville — HVAC, plumbing, electrical, roofing — LSA is a meaningful complement to traditional Google Ads, not a replacement. LSA ads appear above standard search ads and carry the Google Guaranteed badge, which sends a distinct trust signal to Danville's premium homeowners. The pay-per-verified-lead model also protects budget efficiency. For trades where LSA is available, running both simultaneously typically maximizes your total share of the Danville local search results page." },
          { question: "Can digital marketing help my seasonal business in Danville?", answer: "Seasonal demand management is one of GrowSmallBiz's core specializations for Danville. We build campaigns that anticipate and capitalize on Danville's predictable seasonal patterns — HVAC marketing that ramps before summer heat waves and fall heating season, restaurant promotional campaigns for Danville's active holiday event calendar, and real estate lead generation aligned to the spring and fall transaction peaks that drive San Ramon Valley's market. Data-driven campaign timing and seasonal keyword targeting ensure your marketing investment works hardest exactly when demand is highest." },
          { question: "How does AI automation specifically benefit Danville service businesses?", answer: "In Danville's premium market, the cost of a missed lead is higher than in most Bay Area markets — because each lead represents a higher average job value and a higher-value client relationship. Our AI Receptionist ensures that every inquiry is acknowledged and followed up within seconds, regardless of when it arrives. For a Blackhawk homeowner calling about emergency AC repair at 10 PM, an instant SMS follow-up from your business versus a voicemail from everyone else is frequently the difference between winning and losing a job that could represent $5,000 to $15,000 or more. Research from MIT and InsideSales.com confirms that leads contacted within 5 minutes are 21 times more likely to convert — AI automation makes that response window achievable for every single lead, around the clock." },
        ]}
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about marketing in Danville?",
          description: "We're here to help. Reach out to us for a personalized consultation.",
          tagline: "Let's grow your Danville business together.",
        }}
      />

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight mb-6">
              Every Day You Wait, Your Competitors Book Another Danville Customer That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Should Have Been Yours</span>
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Danville's premium market rewards the businesses with the strongest digital presence — and moves quickly past those without one. While you are reading this, Danville homeowners are searching Google for services you offer. If you are not in the top three local results, you are invisible to them. If your reviews are below 4.5 stars, they are filtering you out before they see your website. If your phone goes to voicemail and you do not follow up within minutes, they have already called your competitor.</p>
            <p className="text-foreground/80 leading-relaxed mb-4">GrowSmallBiz is the digital marketing agency that Danville local service businesses trust to dominate local search, generate qualified leads, and build the integrated marketing systems that produce sustainable revenue growth. We bring 30+ years of Fortune 500 sales, marketing, and growth strategy experience to the specific challenges of premium local service business marketing — and as a Danville-headquartered business and Danville Area Chamber member, our commitment to this community's businesses is personal, not transactional.</p>
            <p className="text-foreground/70 font-semibold mt-6">No long-term contracts. No cookie-cutter templates. No excuses. Just a hometown team that builds the marketing system your Danville business deserves.</p>
          </div>
        </div>
      </section>

      {/* ===== PRE-FORM PERSON CTA ===== */}
      <PersonCTA
        title="Schedule Your Free Strategy Call"
        description="Receive a personalized strategy session — local SEO audit, competitive analysis, and a clear growth roadmap built specifically for your Danville service business."
        buttonText="Schedule Strategy Call"
        buttonHref={strategyCallUrl}
        sectionClassName="py-16"
      />

      {/* ===== CONSULTATION FORM ===== */}
      <ConsultationFormSection utmCampaign="danville-consultation" utmMedium="danville-ca" />

      {/* ===== CROSS-LINK PILLS ===== */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-6">If your business also serves nearby communities, explore our pages for:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "San Ramon", to: "/locations/san-ramon-ca/" },
              { label: "Dublin", to: "/locations/dublin-ca/" },
              { label: "Pleasanton", to: "/locations/pleasanton-ca/" },
              { label: "Walnut Creek", to: "/locations/walnut-creek-ca/" },
              { label: "Livermore", to: "/locations/livermore-ca/" },
              { label: "Concord", to: "/locations/concord-ca/" },
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

export default DanvilleCA;
