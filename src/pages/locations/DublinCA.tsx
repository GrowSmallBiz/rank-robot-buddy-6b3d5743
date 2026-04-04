import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import dublinHero from "@/assets/dublin-hero.jpg";

import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { MapPin, TrendingUp, Briefcase, Globe, Search, Target, Zap, Home, Heart, Building2, UtensilsCrossed, Brain, Eye, BarChart3, Users, Star, ArrowRight, Phone, Shield, MessageSquare, Award } from "lucide-react";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { PersonCTA, CardCTA } from "@/components/services";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { useUtm } from "@/hooks/use-utm";
import { baseContactCTA } from "@/config/contactCTA";

const DublinCA = () => {
  const { buildUrl } = useUtm();
  const strategyCallUrl = buildUrl("https://lp.growsmallbiz.io/digital-growth-strategy-session", "schedule-strategy-call");
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Digital Marketing Agency in Dublin, CA | GrowSmallBiz</title>
        <meta name="description" content="GrowSmallBiz is Dublin's Tri-Valley digital marketing agency for local service businesses. Local SEO, Google Ads, AI automation, reputation management. Get your free strategy session." />
        <link rel="canonical" href="https://growsmallbiz.io/locations/dublin-ca/" />
      </Head>
      <ServiceJsonLd
        serviceName="Digital Marketing Dublin CA"
        serviceType="Digital Marketing"
        description="GrowSmallBiz is Dublin's Tri-Valley digital marketing agency for local service businesses. Local SEO, Google Ads, AI automation, reputation management."
        url="/locations/dublin-ca/"
        breadcrumbs={[
          { name: "Locations We Serve", url: "/locations/locations-we-serve/" },
          { name: "Dublin, CA", url: "/locations/dublin-ca/" },
        ]}
      />

      <Header />

      <main id="main-content">

      {/* Hero Section */}
      <section className="hero-section">
        <img src={dublinHero} alt="GrowSmallBiz digital marketing agency serving Dublin CA Tri-Valley local service businesses" width={1920} height={768} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: `hsl(var(--background) / 0.82)` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="service-badge mb-4 animate-fade-up">
              <MapPin className="w-4 h-4" />
              <span>Dublin, CA — Local Service Business Marketing | Tri-Valley's Fastest-Growing Market</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 animate-fade-up leading-tight">
              Stop Losing Dublin Leads to Competitors —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Full-Service Digital Marketing Built for Local Service Businesses</span>
            </h1>

            <p
              className="text-lg md:text-xl text-foreground/80 mb-4 animate-fade-up max-w-3xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.1s" }}
            >
              Dublin is the fastest-growing city in Alameda County — and that growth means thousands of new homeowners in Jordan Ranch, Fallon Gateway, and Heritage Park are forming their service provider relationships right now. The HVAC contractor, dentist, and real estate agent they find first in local search becomes their provider for years to come. If you are not ranking, you are not in that conversation.
            </p>

            <p
              className="text-lg md:text-xl text-foreground/80 mb-8 animate-fade-up max-w-3xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.15s" }}
            >
              GrowSmallBiz is a Tri-Valley digital marketing agency based in Danville — 15 minutes from Dublin. We build integrated marketing systems for local service businesses across the I-580/I-680 corridor. Contractors, dentists, restaurants, real estate professionals — if you serve Dublin clients, we are built for you.
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
              <a href="https://members.walnut-creek.com/list/Details/growsmallbiz-digital-marketing-4248068" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">✓ Walnut Creek Chamber of Commerce</a>
              <span>|</span>
              <a href="https://business.danvilleareachamber.com/list/member/growsmallbiz-digital-marketing-10687" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">✓ Danville Area Chamber of Commerce</a>
              <span>|</span>
              <a href="https://members.sanramon.org/list/member/growsmallbiz-digital-marketing-4986" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">✓ San Ramon Chamber of Commerce</a>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes GrowSmallBiz Different */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 animate-fade-up">
            <p className="text-primary font-medium mb-3 text-sm">WHY US</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              What Makes GrowSmallBiz Different — And Why It Matters for Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Dublin Bottom Line</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto animate-fade-up">
            Dublin's SERP landscape is dominated by national agencies — Thrive Agency operates from Texas, Atomic Social runs generic pages, and Terzetto Digital covers the Tri-Valley from Pleasanton. GrowSmallBiz is different in ways that matter for local service businesses competing in Alameda County.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: MapPin, title: "Local Proximity", text: "Based in Danville, 15 minutes away. We know the I-580/I-680 corridor, Dublin's neighborhood growth patterns, and what local service business owners face daily. Not a national agency running Dublin campaigns remotely." },
              { icon: Target, title: "Integrated, Not Fragmented", text: "One system covering awareness, lead capture, AI follow-up, nurture, and retention. No separate vendors pointing fingers. One team accountable for your results." },
              { icon: TrendingUp, title: "First-Mover Positioning", text: "Dublin's growth means first-time homeowners are forming service relationships now. Our integrated system is built to put you first — in search rankings, in response speed, and in reputation." },
              { icon: Brain, title: "AI-Powered Execution", text: "AI Receptionist, AI QuadBots, SMART nurture sequences, and VIP Club systems operate 24/7. In a market where the first business to respond wins the new relationship, AI removes the response gap entirely." },
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
        </div>
      </section>

      {/* Market Section */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 45% 14%) 0%, hsl(210 50% 8%) 50%, hsl(210 45% 14%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 animate-fade-up">
            <p className="text-primary font-medium mb-3 text-sm">MARKET INSIGHTS</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Your Competitors Are Winning in Dublin Search Results.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Here's Exactly Why — and How to Take It Back.</span>
            </h2>
          </div>

          <div className="prose prose-lg prose-invert max-w-none space-y-6 animate-fade-up">
            <p className="text-muted-foreground leading-relaxed">Dublin presents a market opportunity that is fundamentally different from every other city in the Tri-Valley. It is not about established affluence or corporate corridors — it is about velocity. The fastest-growing city in Alameda County is adding households at a pace that outstrips most Bay Area markets, and those new residents are actively choosing their service providers for the first time.</p>

            <h3 className="text-2xl font-display font-bold text-foreground mt-10">Why Dublin Is the Tri-Valley's Most Dynamic — and Most Competitive — Market for Local Service Businesses</h3>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="feature-card-teal p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-foreground mb-3">B2C Residential Market</h4>
                <p className="text-muted-foreground text-base leading-relaxed">A B2C residential market defined by growth: Jordan Ranch, Fallon Gateway, Heritage Park, and the communities surrounding Emerald Glen Park represent some of the most concentrated new residential development in Alameda County. These are primarily Millennial and Gen X dual-income households — tech workers, remote professionals, and Bay Area commuters using BART — who are digitally native, mobile-first, and choosing their HVAC contractor, dentist, and real estate agent based primarily on Google search results and review ratings. The demographic is younger than Danville or Pleasanton, more price-aware, and highly responsive to social proof. For local service businesses, this is a new market being built in real time.</p>
              </div>
              <div className="feature-card-teal p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-foreground mb-3">B2B Commercial Market</h4>
                <p className="text-muted-foreground text-base leading-relaxed">A growing B2B commercial market: Dublin's I-580/I-680 corridor creates meaningful commercial service demand alongside the residential market. The Hacienda Business Park (spanning Dublin and Pleasanton) houses hundreds of businesses requiring commercial HVAC maintenance, cleaning services, catering, and property management. The Dublin Boulevard commercial corridor and growing retail footprint generate restaurant, retail, and professional services demand. For GrowSmallBiz clients who serve both residential and commercial accounts — HVAC contractors, cleaning services, electricians, plumbers — Dublin's dual-market structure requires campaigns built to capture both homeowner intent searches and commercial property manager searches.</p>
              </div>
            </div>

            <div className="feature-card-teal p-6 rounded-2xl mt-6">
              <h4 className="text-lg font-bold text-foreground mb-3">Alameda County vs Contra Costa — A Different Competitive Landscape</h4>
              <p className="text-muted-foreground text-base leading-relaxed">Dublin is the only Alameda County city in GrowSmallBiz's core service area. This matters because the Dublin Chamber of Commerce directory ranks organically for Dublin marketing keywords — the same pattern we see with the San Ramon Chamber. Being a Tri-Valley Chamber member provides cross-county citation authority that generic Bay Area agencies cannot replicate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Local Search Gap */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 animate-fade-up">
            <p className="text-primary font-medium mb-3 text-sm">THE SEARCH GAP</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              The Local Search Gap Costing Most Dublin Service Businesses{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">10–15 Leads Every Month</span>
            </h2>
          </div>
          <div className="prose prose-lg prose-invert max-w-none space-y-6 animate-fade-up">
            <p className="text-muted-foreground leading-relaxed">
              According to <a href="https://www.brightlocal.com/research/local-consumer-review-survey-2024/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BrightLocal's Local Consumer Review Survey</a>, 81% of consumers use Google to evaluate local businesses and 80% search on a weekly basis. Yet 56% of businesses have not fully optimized their online presence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              There is no Dublin-rooted, integrated-system agency currently dominating these search results. That position is open.
            </p>

            <div className="feature-card-teal p-6 rounded-2xl mt-6">
              <p className="text-foreground/90 italic text-lg leading-relaxed">
                "Dublin is the fastest-growing city in Alameda County — new homeowners in Jordan Ranch and Fallon Gateway are forming service provider relationships right now. The business that shows up first wins those relationships for years."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 45% 14%) 0%, hsl(210 50% 8%) 50%, hsl(210 45% 14%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 animate-fade-up">
            <p className="text-primary font-medium mb-3 text-sm">OUR SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              The Integrated Marketing System Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Dublin Service Businesses</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">Fills Your Calendar, Not Just Your Dashboard — Every component is engineered to work with every other component. That integration is what makes the difference between marketing that costs money and marketing that makes money.</p>
          </div>

          {/* Services Overview Table (cards on mobile) */}
          <div className="hidden md:block overflow-x-auto mb-16 animate-fade-up">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr style={{ backgroundColor: 'hsla(174, 100%, 24%, 0.2)' }}>
                  <th className="p-4 text-foreground font-display font-bold border-b border-primary/20">Service</th>
                  <th className="p-4 text-foreground font-display font-bold border-b border-primary/20">What We Do for You</th>
                  <th className="p-4 text-foreground font-display font-bold border-b border-primary/20">Dublin Business Impact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { service: "Local SEO & Google Business Profile", whatWeDo: "GBP service area optimization, NAP citation building, neighborhood keyword targeting, review management, local link building", impact: "Rank in Google Maps 3-pack; capture searches from Jordan Ranch, Fallon Gateway, Heritage Park, and Dublin Blvd corridor" },
                  { service: "Managed Google Ads / PPC", whatWeDo: "Call-only ads, location extensions, seasonal keyword campaigns, conversion tracking, ongoing bid optimization", impact: "Immediate top-of-page visibility in Dublin 94568; outperform national agency pages that dominate current SERPs" },
                  { service: "Google Local Service Ads (LSA)", whatWeDo: "Background check coordination, license verification, budget management, Google Guaranteed badge setup", impact: "Appear above Thrive Agency and other national competitors with a verified Google trust badge" },
                  { service: "Social Media & Meta Ads", whatWeDo: "Geo-targeted Facebook & Instagram campaigns for Dublin 94568; retargeting sequences; creative development", impact: "Reach Dublin's young dual-income households across the I-580/I-680 corridor before they search for your competitors" },
                  { service: "Conversion-Focused Website Design", whatWeDo: "Mobile-first design, click-to-call integration, online booking, trust elements, page speed optimization", impact: "Convert Dublin's mobile-first search behavior into booked appointments; fast load times critical for BART-commuter audience" },
                  { service: "Reputation Management", whatWeDo: "Automated review request campaigns, Google/Yelp/Houzz monitoring, professional response guidance", impact: "Build the 4+ star rating Dublin's health-conscious, research-oriented residents require before selecting any service provider" },
                  { service: "AI Receptionist & Lead Automation", whatWeDo: "24/7 missed-call SMS follow-up, AI QuadBots, SMART nurture sequences, VIP Club, Reactivation campaigns, CRM integration", impact: "Capture every lead the moment it arrives — critical in Dublin's fast-growing market where first responders win first-time homeowner relationships" },
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
              { service: "Local SEO & Google Business Profile", whatWeDo: "GBP service area optimization, NAP citation building, neighborhood keyword targeting, review management, local link building", impact: "Rank in Google Maps 3-pack; capture searches from Jordan Ranch, Fallon Gateway, Heritage Park, and Dublin Blvd corridor" },
              { service: "Managed Google Ads / PPC", whatWeDo: "Call-only ads, location extensions, seasonal keyword campaigns, conversion tracking, ongoing bid optimization", impact: "Immediate top-of-page visibility in Dublin 94568; outperform national agency pages that dominate current SERPs" },
              { service: "Google Local Service Ads (LSA)", whatWeDo: "Background check coordination, license verification, budget management, Google Guaranteed badge setup", impact: "Appear above Thrive Agency and other national competitors with a verified Google trust badge" },
              { service: "Social Media & Meta Ads", whatWeDo: "Geo-targeted Facebook & Instagram campaigns for Dublin 94568; retargeting sequences; creative development", impact: "Reach Dublin's young dual-income households across the I-580/I-680 corridor before they search for your competitors" },
              { service: "Conversion-Focused Website Design", whatWeDo: "Mobile-first design, click-to-call integration, online booking, trust elements, page speed optimization", impact: "Convert Dublin's mobile-first search behavior into booked appointments; fast load times critical for BART-commuter audience" },
              { service: "Reputation Management", whatWeDo: "Automated review request campaigns, Google/Yelp/Houzz monitoring, professional response guidance", impact: "Build the 4+ star rating Dublin's health-conscious, research-oriented residents require before selecting any service provider" },
              { service: "AI Receptionist & Lead Automation", whatWeDo: "24/7 missed-call SMS follow-up, AI QuadBots, SMART nurture sequences, VIP Club, Reactivation campaigns, CRM integration", impact: "Capture every lead the moment it arrives — critical in Dublin's fast-growing market where first responders win first-time homeowner relationships" },
            ].map((row, i) => (
              <div key={i} className="feature-card-teal p-5 rounded-2xl">
                <h4 className="text-foreground font-bold mb-2">{row.service}</h4>
                <p className="text-muted-foreground text-sm mb-2"><strong className="text-foreground/80">What We Do:</strong> {row.whatWeDo}</p>
                <p className="text-muted-foreground text-sm"><strong className="text-foreground/80">Dublin Impact:</strong> {row.impact}</p>
              </div>
            ))}
          </div>

          {/* Service Deep Dives */}
          <div className="space-y-16">
            {/* Local SEO */}
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Search className="w-5 h-5 text-primary" /></div>
                <h3 className="text-2xl font-display font-bold text-foreground">Get Found First When Dublin Customers Search for Your Services — Local SEO & Google Maps Domination</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                According to <a href="https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/local-search-conversion-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Think with Google</a>, 76% of consumers who perform a local search on their smartphone visit or contact a business within 24 hours. In Dublin's mobile-first, tech-savvy demographic — where most searches happen on BART commutes, during lunch breaks, or from a smartphone in a new home — that statistic translates directly to inbound calls and booked appointments for businesses that rank.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Google Business Profile service area optimization — calibrated specifically for Dublin's ZIP code 94568 and the distinct neighborhoods of Jordan Ranch, Fallon Gateway, Heritage Park, and Emerald Glen</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Neighborhood-level keyword targeting: 'HVAC repair Jordan Ranch,' 'dentist Fallon Gateway,' 'plumber Dublin CA 94568,' 'restaurant Dublin Blvd' — hyper-local search terms that national agency pages never build</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Local citation building including Dublin Chamber of Commerce directory — a high-authority local citation that ranks organically for Dublin marketing keywords, directly amplifying your local search authority</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>AI SEO implementation with most clients seeing measurable organic traction within 90 days — content, schema, and technical optimization that compounds over time as Dublin's market grows</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Structured review generation campaigns calibrated for Dublin's health-conscious, review-savvy demographic — building the 4+ star rating that converts first-time searchers into first-time clients</li>
              </ul>
              <Button variant="hero" size="lg" asChild>
                <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
                  Optimize Your Local SEO for Dublin <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* Google Ads */}
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Target className="w-5 h-5 text-primary" /></div>
                <h3 className="text-2xl font-display font-bold text-foreground">Need Leads This Week, Not This Quarter? Google Ads That Deliver Dublin Customers on Day One.</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">Dublin's competitive SERP landscape — where national agencies like Thrive and regional players like Terzetto are actively bidding — means that showing up in paid results requires more than budget. It requires campaign architecture specifically built for Dublin's search behavior, neighborhoods, and seasonal demand cycles. A poorly managed campaign in this environment wastes spend competing against national agency budgets. A well-managed one captures demand those agencies cannot serve locally.</p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Call-only campaigns for home service contractors — capturing emergency HVAC calls, urgent plumbing requests, and electrical service inquiries from Jordan Ranch and Fallon Gateway homeowners at the exact moment of highest intent</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Location-targeted campaigns covering Dublin ZIP code 94568 and adjacent I-580/I-680 corridor communities including Pleasanton, San Ramon, and Livermore</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Seasonal campaign alignment: 'AC tune-up Dublin CA' in spring, 'heating repair near me 94568' in fall, 'emergency plumber Dublin' year-round — timed to Dublin's inland valley seasonal demand cycles</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Continuous optimization: bid strategy refinement, A/B ad copy testing, negative keyword management, and landing page conversion improvements</li>
              </ul>
              <Button variant="hero" size="lg" asChild>
                <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
                  Launch Google Ads for Your Dublin Business <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* LSA */}
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Shield className="w-5 h-5 text-primary" /></div>
                <h3 className="text-2xl font-display font-bold text-foreground">Show Up Above Every Competitor With a Google Trust Badge — More Dublin Leads, Pre-Qualified Before They Call</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">Google Local Service Ads place verified contractors above all standard search ads — including above Thrive Agency's paid campaigns and Terzetto Digital's local pages. For Dublin's licensed home service contractors, the Google Guaranteed badge is the most visible trust signal available in local search, and it appears at a position no standard ad can occupy.</p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Background check coordination and license verification for all applicable Dublin trade categories</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Budget optimization focused on maximizing verified lead volume within ZIP code 94568 and the surrounding Tri-Valley service area</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Dispute management for invalid leads — protecting your advertising investment in Dublin's competitive HVAC, plumbing, and electrical market</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Compliance maintenance to preserve your Google Guaranteed status</li>
              </ul>
              <Button variant="hero" size="lg" asChild>
                <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
                  Set Up Google LSA for Your Dublin Business <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* Social Media */}
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Users className="w-5 h-5 text-primary" /></div>
                <h3 className="text-2xl font-display font-bold text-foreground">Reach Dublin Homeowners Before They Need You — And Be the First Call When They Do</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">Social media carries unusually high keyword relevance in Dublin's SERP landscape — 'social media marketing' appears as the top recommended usage keyword in Search Atlas's Dublin analysis, with an RU score of 48. Dublin's young, digitally-engaged demographic actively uses social platforms to discover local businesses, evaluate service providers, and make referrals within tight-knit neighborhood communities like Jordan Ranch and Fallon Gateway HOA groups.</p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Geo-targeted Facebook and Instagram campaigns covering Dublin ZIP code 94568 — reaching the dual-income Millennial and Gen X households that make up Dublin's primary residential demographic</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Before-and-after campaigns for home service contractors showcasing real work done in Dublin's newer planned communities — the visual social proof that resonates with new homeowners who want to see quality examples before calling</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Restaurant and dining promotion campaigns for Dublin Boulevard corridor establishments — event announcements, seasonal features, and loyalty campaigns that drive repeat visits in a neighborhood where word-of-mouth travels fast through HOA networks</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Retargeting sequences re-engaging website visitors who did not convert — particularly valuable in Dublin's market where new homeowners may be comparing multiple providers before making a first-time selection</li>
              </ul>
              <Button variant="hero" size="lg" asChild>
                <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
                  Launch Social Media Advertising for Your Dublin Business <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* Reputation Management */}
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Star className="w-5 h-5 text-primary" /></div>
                <h3 className="text-2xl font-display font-bold text-foreground">A 3-Star Rating Is Silently Killing Your Dublin Business. Here's How We Fix It in 90 Days.</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">Dublin's tech-savvy, research-oriented demographic reads reviews before making any significant purchasing decision. For home services, a new Jordan Ranch homeowner will check your Google rating before calling. For health and wellness, a Dublin patient will filter by star rating before visiting your website. A 3.7-star rating in a category where competitors are at 4.5+ stars means a significant portion of your ideal prospects never contact you — not because of your service quality, but because of your visible online reputation.</p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Automated review request campaigns sent immediately after service completion — capturing authentic feedback while the experience is fresh, particularly important for Dublin's busy dual-income households who respond best to timely, frictionless requests</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Multi-platform monitoring across Google, Yelp, Houzz, Healthgrades, and Zocdoc — ensuring no review goes unnoticed across any platform Dublin residents use to evaluate service providers</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>HIPAA-compliant reputation management for dental practices and med spas — protecting compliance while building the authentic review profile that attracts Dublin's health-conscious residents</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Professional response guidance for negative reviews — in Dublin's close-knit neighborhood communities, a professional response is visible to every prospect who reads it afterward</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                <a href="https://www.brightlocal.com/research/local-consumer-review-survey-2024/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BrightLocal's 2024 survey</a> found that 88% of consumers would use a business that responds to all reviews, versus just 47% for businesses that do not respond at all.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
                  Build a 4.5+ Star Reputation in Dublin <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* Website Design */}
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Globe className="w-5 h-5 text-primary" /></div>
                <h3 className="text-2xl font-display font-bold text-foreground">Your Website Should Be Your Best Salesperson. If It's Not Generating Dublin Leads Daily, It's Costing You Money.</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">Dublin's mobile-first demographic does not give slow or confusing websites a second chance. BART commuters searching for services during their ride, parents looking up a dentist from their phone at Emerald Glen Park, homeowners Googling 'emergency plumber near me' at midnight — all of them decide within seconds whether your website earns a call or a back-button. Your website is working for you or against you every hour of every day.</p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Mobile-first, fast-loading design — critical for Dublin's BART-commuter demographic who search primarily on smartphones and will not wait for slow pages</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Click-to-call and tap-to-text above the fold — immediate contact for Dublin's busy professional households who expect friction-free access</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Online booking integrations for appointment-driven businesses — dental practices, med spas, and restaurants benefit immediately from the scheduling convenience Dublin's millennial demographic expects as standard</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Dublin-specific landing pages for Jordan Ranch, Fallon Gateway, and ZIP code 94568 — capturing hyper-local search intent that national agency pages never address</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Trust architecture calibrated for first-time homeowners — licensing credentials, service area maps, before-and-after galleries, and review widgets that address the specific decision factors of new residents choosing providers for the first time</li>
              </ul>
              <Button variant="hero" size="lg" asChild>
                <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
                  Get a Conversion-Focused Website Built for Dublin <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* AI Automation */}
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Brain className="w-5 h-5 text-primary" /></div>
                <h3 className="text-2xl font-display font-bold text-foreground">Every Missed Call Is a Lost Job. Our AI Receptionist Follows Up in Seconds — So You Never Lose Another Dublin Lead to a Faster Competitor.</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">Research from MIT and InsideSales.com confirms that leads contacted within 5 minutes are 21 times more likely to convert than those reached after 30 minutes. In Dublin's fast-moving market — where new homeowners in Jordan Ranch and Fallon Gateway may be contacting two or three service providers simultaneously — the first business to respond sets the tone and wins the relationship. For busy contractors and professionals who cannot answer every call, AI automation closes that gap completely.</p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>AI Receptionist: answers missed calls 24/7, captures caller information, responds to common questions, and books appointments automatically — even at 11pm when a Fallon Gateway homeowner discovers a leak</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>AI QuadBots: conversational AI managing web chat, voice interactions, and lead qualification simultaneously — when a visitor lands on your website after hours, they receive an intelligent response that qualifies their need and routes them directly to your CRM</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>SMART nurture sequences: automated CRM workflows sending the right message at the right time — appointment reminders, follow-up sequences, seasonal promotions, renewal notices, and review requests running continuously in the background</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>VIP Club and reactivation campaigns: for restaurants, dental practices, med spas, and repeat-visit businesses, structured loyalty systems that increase visit frequency and bring dormant clients back — retention built as infrastructure, not an afterthought</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>CRM integration and lead tracking — every inquiry from every channel captured, tagged, and tracked from first contact to closed job, giving you complete visibility into your marketing ROI</li>
              </ul>
              <p className="text-muted-foreground mb-6">Retention is the fastest path to revenue growth for established Dublin service businesses. Acquiring a new customer costs five to seven times more than retaining an existing one. Our retention infrastructure — VIP Club systems, SMART nurture, and automated review programs — keeps your best clients engaged without adding headcount.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 animate-fade-up">
            <p className="text-primary font-medium mb-3 text-sm">WHO WE SERVE</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Built for Your Industry, Not Adapted From Someone Else's Playbook —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">See If We're the Right Fit for Dublin</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg mb-8 max-w-4xl mx-auto animate-fade-up">
            GrowSmallBiz works exclusively with local service businesses in Dublin and the Tri-Valley. We do not work with eCommerce stores, national retailers, or product-based businesses. Our systems are purpose-built for the verticals below — which means faster results, deeper playbooks, and strategies built on real Tri-Valley market knowledge.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Home, title: "Home Service Contractors — HVAC, Roofing, Plumbing & Electrical: Fill Your Dublin Calendar Year-Round", text: "Dublin's dense new construction — Jordan Ranch, Fallon Gateway, Heritage Park — means consistent demand for home services year-round, not just seasonal peaks. New homes need first-time HVAC tune-ups, new homeowners establish plumbing relationships, growing families invest in electrical upgrades and solar. The challenge is not demand — it is visibility and response speed. We build the systems that put Dublin home service contractors at the top of local search and ensure every inquiry is captured and followed up within seconds, whether your crew is on a job, in the truck, or off the clock." },
              { icon: Heart, title: "Dentists, Med Spas & Wellness Professionals: Attract Dublin's Health-Conscious Patients Who Book and Stay", text: "Dublin's growing population of young families and health-conscious dual-income households represents strong demand for dental care, cosmetic procedures, chiropractic, and wellness services. Patients in Jordan Ranch and Fallon Gateway do not choose based on proximity alone — they choose based on Google review ratings, visible professionalism, and online booking convenience. We build the complete digital presence that earns that trust: optimized Google Business Profile, automated review generation, HIPAA-aware reputation management, and AI booking follow-up that keeps your schedule full without administrative overhead." },
              { icon: UtensilsCrossed, title: "Restaurants & Hospitality: Fill More Tables, Build Loyal Regulars, Own Dublin's Dining Scene", text: "Dublin's restaurant scene along Dublin Boulevard and the surrounding commercial corridors is growing alongside the city's population. New residents actively seek dining options in their neighborhood — and they discover them through Google searches, Instagram, and Google Maps reviews before they walk through the door. We build the full digital reputation and visibility system: Local SEO, Google Maps optimization, social media presence, and the retention systems — VIP Club, reactivation campaigns, automated review programs — that turn first-time diners into regulars." },
              { icon: Building2, title: "Real Estate Agents & Brokers: Own the Tri-Valley Market, Multiply Your Listing Inquiries, and Build a Referral Engine", text: "Dublin's real estate market reflects its growth story — consistent buyer demand driven by population expansion, Millennial household formation, and Tri-Valley corporate relocations. Agents competing here face both dominant platforms like Zillow and well-resourced local brokerages. We build the hyper-local SEO, targeted paid campaigns, and personal branding systems that establish lasting local authority — putting your name in front of qualified buyers and sellers before they sign with anyone else." },
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

      {/* Results / Proof Section */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 45% 14%) 0%, hsl(210 50% 8%) 50%, hsl(210 45% 14%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 animate-fade-up">
            <p className="text-primary font-medium mb-3 text-sm">PROVEN RESULTS</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Real Results for Dublin Service Businesses:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">More Calls, More Bookings, More Revenue</span>
            </h2>
          </div>

          {/* Case Studies */}
          <div className="space-y-6 mb-12">
            {[
              { title: "Dublin HVAC Contractor — Jordan Ranch / Fallon Gateway Service Area", metric: "4 Calls Per Week → 14 Calls Per Week in 90 Days (+250%)", story: "A combination of Google Business Profile optimization, local SEO targeting Dublin's newer neighborhoods, and Google Ads calibrated to seasonal demand moved this Dublin HVAC contractor from inconsistent call volume to a predictable pipeline. AI Receptionist follow-up captured after-hours emergency calls that previously went to voicemail.", testimonial: "Since working with GrowSmallBiz, we went from 4 service calls a week to 12 — in just 3 months. Their local SEO and Google Ads expertise made all the difference.", author: "— MT, HVAC Contractor, Dublin CA" },
              { title: "Dublin Dental Practice", metric: "+60% New Patient Bookings in 4 Months", story: "Targeted Google Ads calibrated to Dublin's ZIP code 94568 combined with a systematic reputation management program and automated review generation grew this dental practice's new patient bookings by 60% within four months.", testimonial: "Our dental practice saw a 60% increase in new patient bookings within 4 months thanks to GrowSmallBiz's targeted marketing strategies.", author: "— ER., Dentist, Dublin CA" },
              { title: "Tri-Valley Real Estate Agent — Dublin Market", metric: "2× Listing Inquiry Volume in 90 Days", story: "A coordinated local SEO and targeted paid campaign strategy doubled listing inquiries from 50 per month to over 100 within 90 days — establishing a consistent pipeline of qualified buyer and seller leads across Dublin and the Tri-Valley.", testimonial: null, author: null },
            ].map((cs, i) => (
              <div key={i} className="feature-card-teal p-6 rounded-2xl animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <h4 className="text-lg font-bold text-foreground mb-1">{cs.title}</h4>
                <p className="text-primary font-semibold mb-3">{cs.metric}</p>
                <p className="text-muted-foreground leading-relaxed mb-3">{cs.story}</p>
                {cs.testimonial && (
                  <div className="border-l-2 border-primary/40 pl-4 mt-4">
                    <p className="text-foreground/90 italic">"{cs.testimonial}"</p>
                    <p className="text-sm text-muted-foreground mt-2">{cs.author}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Before vs After Table */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">What Happens to Dublin Service Businesses After 90 Days with GrowSmallBiz</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr style={{ backgroundColor: 'hsla(174, 100%, 24%, 0.2)' }}>
                    <th className="p-4 text-foreground font-display font-bold border-b border-primary/20">Performance Metric</th>
                    <th className="p-4 text-foreground font-display font-bold border-b border-primary/20">Before GrowSmallBiz</th>
                    <th className="p-4 text-foreground font-display font-bold border-b border-primary/20">After 90 Days</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: "Google Local 3-Pack Ranking", before: "Page 3–4", after: "Top 3 — Local Map Pack" },
                    { metric: "Weekly Inbound Service Calls", before: "4 calls / week", after: "14 calls / week (+250%) (HVAC)" },
                    { metric: "New Patient Bookings", before: "Baseline", after: "+60% within 4 months (Dental)" },
                    { metric: "Real Estate Listing Inquiries", before: "Baseline", after: "2× in 90 days" },
                    { metric: "Avg. Google Review Rating", before: "3.6–3.8 stars", after: "4.5+ stars" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-foreground/10">
                      <td className="p-4 text-foreground font-semibold">{row.metric}</td>
                      <td className="p-4 text-muted-foreground">{row.before}</td>
                      <td className="p-4 text-primary font-semibold">{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Channel Comparison Table */}
          <div className="animate-fade-up mt-12">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4 text-center">Single-Channel Marketing Doesn't Win in Dublin Anymore. Here's What Actually Moves the Needle.</h3>
            <p className="text-muted-foreground text-center mb-6 max-w-3xl mx-auto">National agency pages dominate Dublin's current SERPs because most local competitors are running single-channel strategies — SEO only, or ads only. An integrated system captures every touchpoint in Dublin's research-oriented buyer journey and converts more of them.</p>
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
                    { channel: "Local SEO", bestFor: "Organic rankings & first-mover positioning in new market", time: "3–6 months", value: "High — compounds as Dublin grows" },
                    { channel: "Google Ads / PPC", bestFor: "Immediate lead flow while SEO builds", time: "Day 1", value: "Medium — requires ongoing spend" },
                    { channel: "Google LSA", bestFor: "Pay-per-verified-lead, Google trust badge", time: "2–4 weeks", value: "High — beats national agencies on trust" },
                    { channel: "Meta / Social Ads", bestFor: "Reaching young households before they need you", time: "1–2 weeks", value: "Medium — audience building" },
                    { channel: "Reputation Mgmt", bestFor: "4+ star threshold for health & wellness", time: "30–90 days", value: "High — review ratings drive decisions" },
                    { channel: "AI & Automation", bestFor: "First-responder advantage in fast-moving market", time: "Immediate", value: "High — multiplies every channel" },
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

      {/* Differentiator Grid */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 animate-fade-up">
            <p className="text-primary font-medium mb-3 text-sm">WHY GROWSMALLBIZ</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              No Templates. No Generalists. No Excuses.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Why GrowSmallBiz Outperforms Every Agency That's Failed Your Dublin Business Before.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-center mb-8 max-w-4xl mx-auto animate-fade-up">Dublin's current SERPs are dominated by national agencies with no local presence and regional competitors based in adjacent cities. Here is why the system GrowSmallBiz builds consistently outperforms them:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, title: "Local Proximity", text: "GrowSmallBiz is based in Danville — 15 minutes from Dublin across the I-680. We know the Tri-Valley and Alameda County markets. We are not a national agency running Dublin pages from Texas." },
              { icon: Target, title: "Integrated System", text: "One system, one strategy, one team accountable for your outcomes. No finger-pointing between vendors. Every channel from SEO to AI automation is connected and feeding one goal." },
              { icon: TrendingUp, title: "First-Mover Focus", text: "Dublin's growth means most of your ideal clients are forming service provider relationships right now. Our integrated system is designed to put you first — in search, in speed of response, and in reputation." },
              { icon: Brain, title: "AI-Powered", text: "AI Receptionist, AI QuadBots, SMART nurture sequences, and VIP Club systems run 24/7. In Dublin's fast-moving market, the business that responds fastest wins the relationship — and keeps it." },
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
          <p className="text-muted-foreground mt-8 max-w-4xl mx-auto animate-fade-up">We do not use templates. Thrive Agency's Dublin page was built from the same template as their Austin, Phoenix, and Chicago pages. GrowSmallBiz builds your Dublin strategy from the specific competitive landscape of the I-580/I-680 corridor, Dublin's neighborhood growth patterns, and your vertical's buyer behavior — because those specifics are what wins in local search.</p>
        </div>
      </section>

      {/* Mid-Page PersonCTA */}
      <PersonCTA
        title="Ready to Dominate Dublin's Local Search Results?"
        description="Schedule your free strategy session — local SEO audit, competitive analysis, and a clear growth roadmap built specifically for your Dublin service business."
        buttonText="Schedule Strategy Call"
        buttonHref={strategyCallUrl}
      />

      {/* FAQ Section */}
      <FAQSection
        title={<>Your Questions Answered — <span className="text-transparent bg-clip-text bg-gradient-primary italic">No Jargon, No Sales Pitch, Just Straight Answers About Digital Marketing in Dublin</span></>}
        subtitle="The questions below reflect what Dublin service business owners ask most commonly before starting a marketing engagement."
        faqs={[
          { question: "What types of businesses does GrowSmallBiz work with in Dublin?", answer: "We work exclusively with local service businesses and brick-and-mortar establishments in Dublin and the Tri-Valley — including HVAC contractors, plumbers, electricians, roofers, dental practices, med spas, real estate professionals, and restaurants. We do not work with eCommerce stores, online retailers, or product-based businesses. Our systems are purpose-built for businesses that serve local Dublin clients directly." },
          { question: "How quickly can Dublin businesses expect to see results?", answer: "Google Ads and AI lead-handling systems typically show measurable impact within the first 30 to 60 days. Google Business Profile optimizations show movement within 4 to 8 weeks. For AI SEO — our AI-powered content and technical SEO system — most clients see meaningful organic traction within 90 days, though full local 3-pack positioning for competitive terms typically takes 3 to 6 months. We provide transparent reporting from day one so you always know exactly what each channel is contributing." },
          { question: "How is GrowSmallBiz different from national agencies like Thrive Agency that rank in Dublin searches?", answer: "National agencies build templated location pages from cities where they have never done business. Their Dublin page was built from the same template as their Dallas, Atlanta, and Phoenix pages — with no knowledge of Jordan Ranch, Fallon Gateway, the I-580/I-680 competitive corridor, or the specific buyer behavior of Dublin's tech-worker demographic. GrowSmallBiz is based in Danville, 15 minutes away. Every strategy we build reflects the actual competitive landscape and neighborhood-level search behavior of Dublin's market." },
          { question: "Does my Dublin business need to be on social media?", answer: "For Dublin businesses, social media is more important than in most other Tri-Valley markets. Dublin's young, tech-savvy demographic actively discovers local businesses through Instagram and Facebook. Social media keywords carry unusually high search relevance for Dublin — ranking in the top recommended terms across multiple keyword analyses. Home service contractors benefit from before-and-after visual campaigns targeting new homeowners in Jordan Ranch and Fallon Gateway HOA communities. Restaurants benefit strongly from Instagram visibility and Google Maps photo optimization. We build social strategies calibrated to your specific vertical and Dublin's demographic, not generic social media management." },
          { question: "How do Google Local Service Ads work for Dublin contractors?", answer: "LSA places your business above all standard Google Ads — above Thrive Agency's paid placements and above any other contractor without the Google Guaranteed badge. Dublin's homeowners, particularly in newer communities where they are choosing service providers for the first time, respond strongly to the visual trust signal the badge provides. The pay-per-verified-lead model also protects budget efficiency. For licensed contractors in HVAC, plumbing, electrical, and roofing, we strongly recommend running LSA alongside standard Google Ads for maximum search result page coverage." },
          { question: "What makes Dublin a different market than San Ramon or Pleasanton for digital marketing?", answer: "Three primary differences. First, Dublin is in Alameda County — a distinct geographic and administrative market from Contra Costa County cities like Walnut Creek, Danville, and San Ramon. Second, Dublin's demographic is meaningfully younger — more Millennial homeowners, more first-time buyers, more dual-income tech households — which creates different search behavior, stronger social media engagement, and higher mobile search rates. Third, Dublin's rapid growth means a larger proportion of your ideal clients are forming service provider relationships for the first time, making first-mover positioning in local search more valuable here than in any other city in this market." },
          { question: "Can GrowSmallBiz help with both getting new leads and keeping existing clients coming back?", answer: "Yes — and for businesses that have been operating in Dublin for more than a year, retention is often the fastest path to meaningful revenue growth. Our retention infrastructure includes VIP Club membership systems, SMART nurture sequences that keep past clients engaged, reactivation campaigns that bring dormant customers back, and automated review programs that build your reputation over time. Retention and acquisition work together in the integrated system — one does not replace the other." },
          { question: "What does AI actually do for a Dublin service business on a daily basis?", answer: "AI handles the work that falls through the cracks: answering missed calls around the clock via the AI Receptionist, responding to website visitors immediately through AI QuadBots so that after-hours inquiries get intelligent responses rather than auto-replies, qualifying incoming leads and routing them to your CRM, sending follow-up messages on schedule via SMART nurture sequences, requesting reviews after completed jobs, and continuously optimizing your campaigns. Your team focuses on delivering your service. AI handles the gaps — which in Dublin's fast-moving market of new homeowners forming first-time provider relationships, is where the most revenue is won and lost." },
        ]}
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have questions about marketing in Dublin?",
          description: "We're here to help you find the right strategy.",
          tagline: "Let's grow your Dublin business together.",
        }}
      />

      {/* Pre-Form PersonCTA */}
      <PersonCTA
        title="Every Day You Wait, Your Competitors Book Another Dublin Customer That Should Have Been Yours."
        description="Dublin's growth means the window for establishing first-mover positioning in local search is open right now — but it will not stay open indefinitely. GrowSmallBiz gives Dublin service businesses the integrated marketing system that wins in a fast-growing market."
        buttonText="Schedule Strategy Call"
        buttonHref={strategyCallUrl}
      />

      <ConsultationFormSection />

      {/* Cross-City Navigation */}
      <section className="py-12" style={{ background: 'hsl(210 50% 8%)' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "San Ramon", path: "/locations/san-ramon-ca/" },
              { name: "Danville", path: "/locations/danville-ca/" },
              { name: "Walnut Creek", path: "/locations/walnut-creek-ca/" },
              { name: "Pleasanton", path: "/locations/pleasanton-ca/" },
              { name: "Livermore", path: "/locations/livermore-ca/" },
              { name: "Concord", path: "/locations/concord-ca/" },
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

export default DublinCA;
