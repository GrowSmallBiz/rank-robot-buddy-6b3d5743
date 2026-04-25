import { Header } from "@/components/layout/Header";
import martinezHero from "@/assets/martinez-hero.webp";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Phone, Shield, CheckCircle, Search, Target, Star, Users, Home, Heart, Building2, UtensilsCrossed, BarChart3, TrendingUp } from "lucide-react";
import { CampaignResultsCards } from "@/components/locations/CampaignResultsCards";
import { martinezCards } from "@/components/locations/campaignCardData";
import { LocationJsonLd } from "@/components/seo/LocationJsonLd";
import { PersonCTA } from "@/components/services";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { useUtm } from "@/hooks/use-utm";
import { baseContactCTA } from "@/config/contactCTA";

const MartinezCA = () => {
  const { buildUrl } = useUtm();
  const strategyCallUrl = buildUrl("https://lp.growsmallbiz.io/digital-growth-strategy-session", "schedule-strategy-call");

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Digital Marketing Services in Martinez, CA | GrowSmallBiz</title>
        <meta name="description" content="Martinez, CA digital marketing services by GrowSmallBiz: Grow your business with AI SEO, AI optimized paid ads, and AI marketing automation." />
        <meta name="keywords" content="local digital marketing, Martinez CA marketing services, AI-powered SEO, reputation management Martinez, Google Ads for local businesses, local SEO strategies, small business marketing, integrated marketing solutions" />
        <link rel="canonical" href="https://growsmallbiz.io/locations/martinez-ca/" />
      </Head>
      <LocationJsonLd
        cityName="Martinez"
        stateCode="CA"
        description="GrowSmallBiz serves Martinez CA local service businesses with integrated digital marketing — Local SEO, Google Ads, AI automation, reputation management."
        url="/locations/martinez-ca/"
        latitude={38.0194}
        longitude={-122.1341}
        breadcrumbs={[
          { name: "Locations We Serve", url: "/locations/locations-we-serve/" },
          { name: "Martinez, CA", url: "/locations/martinez-ca/" },
        ]}
      />
      <Header />
      <main id="main-content">

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <img src={martinezHero} alt="GrowSmallBiz digital marketing agency serving Martinez CA Contra Costa County local service businesses" width={1920} height={768} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: `hsl(var(--background) / 0.82)` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="service-badge mb-4 animate-fade-up">
              <MapPin className="w-4 h-4" />
              <span>Martinez, CA — Local Service Business Marketing | Contra Costa County Seat</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 animate-fade-up leading-tight bg-gradient-heading bg-clip-text text-transparent">
              Stop Losing Martinez Leads to Competitors — Full-Service Digital Marketing Built for Local Service Businesses
            </h1>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up mt-6" style={{ animationDelay: "0.1s" }}>
              Martinez is not a suburban market. As the seat of Contra Costa County, it has its own distinct identity: a historic downtown with Victorian architecture, a working waterfront along the Carquinez Strait, residential neighborhoods ranging from blue-collar Vine Hill to semi-rural Alhambra Valley, and a legal and financial services cluster centered on the county courthouse. The businesses that serve Martinez's community deserve marketing built for this market — not repurposed from a Bay Area template. GrowSmallBiz is a Contra Costa County digital marketing agency based in Danville — 20 minutes from Martinez. We build integrated marketing systems for local service businesses across Martinez and the broader County. Contractors, dentists, restaurants, real estate professionals — if you serve Martinez clients, we are built for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="lg" asChild>
                <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
                  Schedule Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+19258863724"><Phone className="w-5 h-5 mr-2" /> Call +1 (925) 886-3724</a>
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"><Star className="w-4 h-4" /> WHY US</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              What Makes GrowSmallBiz Different — And Why It Matters for Your Martinez Bottom Line
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Martinez's SERP landscape is dominated by national agencies with no local roots. The current SERP leaders are national agencies running the same page templates across Sacramento, Fresno, and dozens of other California cities. Subrata Guha, GrowSmallBiz founder, brings 30+ years of Fortune 500 sales, marketing, and growth strategy experience to the specific challenges of Martinez's community-oriented local service market — combined with genuine Contra Costa County proximity that national agencies cannot replicate.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "Contra Costa proximity:", body: "Based in Danville, 20 minutes from Martinez. We know the difference between Vine Hill and Alhambra Valley, the waterfront corridor's seasonal demand, and the community-oriented buyer behavior that distinguishes Martinez from every I-680 corridor suburb." },
              { label: "Integrated system:", body: "One system, one strategy, one team accountable for your results. Current SERP leaders run SEO-only or ads-only — no one owns the full picture. Every channel GrowSmallBiz manages feeds a single coordinated goal." },
              { label: "Community-first reputation strategy:", body: "Martinez is not a transient market. Residents stay, refer neighbors, and choose service providers based on community trust signals. Our review velocity systems are built for markets where word-of-mouth carries more weight than in high-turnover suburban cities." },
              { label: "AI-powered execution:", body: "AI Receptionist, AI QuadBots, SMART nurture sequences, and VIP Club systems operate 24/7. Over 68% of local searches in Contra Costa County happen on mobile — response speed and mobile-first execution are non-negotiable." },
              { label: "No long-term contracts:", body: "Month-to-month agreements keep us accountable. We earn your business every single month." },
            ].map((item, i) => (
              <div key={i} className="bg-card/50 border border-border/60 rounded-xl p-5 border-l-4 border-l-primary">
                <p className="text-foreground/90 leading-relaxed"><span className="font-bold text-foreground">{item.label}</span> {item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MARKET SECTION ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"><TrendingUp className="w-4 h-4" /> LOCAL MARKET</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              Your Competitors Are Winning in Martinez Search Results. Here's Exactly Why — and How to Take It Back.
            </h2>
          </div>
          <div className="space-y-5 max-w-4xl mx-auto">
            {[
              { title: "Martinez's Distinct Market Structure: Waterfront, Courthouse, and Residential Corridors", body: "Martinez presents a market opportunity that is structurally different from every other city in GrowSmallBiz's service area. It is not a growth story like Dublin, not a premium enclave like Danville, and not a corporate corridor like San Ramon. Martinez is Contra Costa County's working city — the county seat, with its own commercial districts, its own residential character, and its own community culture." },
              { title: "A B2C residential market with distinct neighborhood character", body: "Martinez's residential geography creates meaningfully different consumer segments. Vine Hill is a working-class neighborhood with consistent demand for home services — HVAC, plumbing, electrical, roofing — at the volume and price point of a blue-collar homeowner community. Alhambra Valley is semi-rural and more affluent, with larger properties and higher-ticket home service requirements. The historic downtown area serves an older, community-rooted demographic that makes purchasing decisions based heavily on local reputation and neighbor referrals." },
              { title: "A distinct B2B commercial market", body: "The Contra Costa County courthouse complex generates a concentrated legal and financial services corridor — attorneys, title companies, bail bondsmen, process servers, and financial advisors who themselves need local marketing support, but also who represent an influential professional class driving demand for premium services across Martinez. The Shell Martinez Refinery and industrial waterfront create a blue-collar worker population with consistent service demand." },
              { title: "Healthcare demand near the Contra Costa County Regional Medical Center", body: "The Contra Costa County Regional Medical Center, located in Martinez, anchors significant healthcare demand. Dental practices, physical therapists, chiropractors, and allied health professionals serving Martinez benefit from proximity to the county's primary medical campus — and compete for the same high-intent patient searches on Google Maps." },
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"><Search className="w-4 h-4" /> SEARCH GAP</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              The Local Search Gap Costing Most Martinez Service Businesses 10–15 Leads Every Month
            </h2>
          </div>
          <div className="prose prose-lg prose-invert max-w-none space-y-6">
            <p className="text-foreground/90 leading-relaxed">According to <a href="https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/local-search-conversion-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Think with Google</a>, 76% of consumers who perform a local search on their smartphone visit or contact a business within 24 hours. In Martinez, where over 68% of those searches occur on mobile devices, map pack visibility is the primary gateway between your business and a new client. Yet <a href="https://www.brightlocal.com/research/local-consumer-review-survey-2024/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BrightLocal research</a> shows that 81% of consumers use Google to evaluate local businesses and <a href="https://www.brightlocal.com/resources/local-seo-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">56% have not fully optimized their Google Business Profile</a>.</p>
            <p className="text-foreground/90 leading-relaxed">The SERP landscape reinforces this opportunity. Streamline Results leads 'local seo martinez ca' with a 4,268-word page and a content score of 91 — but it is a national template agency with no genuine Martinez market knowledge. No local Contra Costa agency currently dominates Martinez's digital marketing search results. That position is available.</p>
          </div>
          <div className="mt-10 bg-primary/5 border-l-4 border-primary rounded-r-xl px-6 py-5">
            <p className="text-lg md:text-xl font-semibold italic text-foreground/90">"Martinez is the Contra Costa County seat — a market with its own distinct identity, community culture, and search behavior. Generic Bay Area agency pages do not win here. Local market knowledge does."</p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"><Target className="w-4 h-4" /> SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              The Integrated Marketing System Built for Martinez Service Businesses — Fills Your Calendar, Not Just Your Dashboard
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Martinez's community-oriented market rewards businesses that are genuinely visible, consistently responsive, and authentically trusted. An integrated marketing system delivers all three simultaneously.</p>
          </div>

          {/* Services Overview Table — Desktop */}
          <div className="hidden md:block overflow-x-auto mb-16">
            <table className="w-full text-sm border-collapse">
              <thead><tr>
                <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">Service</th>
                <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">What We Do for You</th>
                <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">Martinez Business Impact</th>
              </tr></thead>
              <tbody>
                {[
                  { service: "Local SEO & Google Business Profile", whatWeDo: "GBP optimization, NAP citation building, Contra Costa County directory citations, review management, local link building", impact: "Rank in Google Maps 3-pack for Martinez; capture searches from Alhambra Avenue corridor, Waterfront, Vine Hill, Alhambra Valley — outperform generic national agency pages" },
                  { service: "Managed Google Ads / PPC", whatWeDo: "Call-only ads, location extensions, seasonal keyword campaigns, conversion tracking, ongoing bid optimization", impact: "Immediate top-of-page visibility for Martinez searches; particularly effective for emergency home services around the Vine Hill and Alhambra Valley residential areas" },
                  { service: "Google Local Service Ads (LSA)", whatWeDo: "Background check coordination, license verification, budget management, Google Guaranteed badge setup", impact: "Appear above every competitor with a Google-verified trust badge — critical for home service contractors serving Martinez's suburban residential corridors" },
                  { service: "Social Media & Meta Ads", whatWeDo: "Geo-targeted Facebook & Instagram campaigns for Martinez ZIP code 94553; community event tie-ins; retargeting sequences", impact: "Reach Martinez's tight-knit residential community — Vine Hill, Alhambra Valley — and waterfront dining audience through community-focused social campaigns" },
                  { service: "Conversion-Focused Website Design", whatWeDo: "Mobile-first design, click-to-call integration, online booking, trust elements, page speed optimization", impact: "Over 68% of local searches in Contra Costa County occur on mobile devices — a desktop-first website is a direct conversion disadvantage for Martinez businesses" },
                  { service: "Reputation Management", whatWeDo: "Automated review request campaigns, Google/Yelp monitoring, professional response guidance", impact: "Martinez's community-oriented culture means word-of-mouth and online reviews carry outsized influence — a 3-star rating in a tight-knit market costs significantly more than the same rating in a larger city" },
                  { service: "AI Receptionist & Lead Automation", whatWeDo: "24/7 missed-call SMS follow-up, AI QuadBots, SMART nurture sequences, VIP Club, Reactivation campaigns, CRM integration", impact: "Never lose a Martinez lead to a faster competitor; AI Receptionist captures after-hours calls from homeowners in Vine Hill and Alhambra Valley who cannot wait until morning for emergency services" },
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
              { service: "Local SEO & Google Business Profile", whatWeDo: "GBP optimization, NAP citation building, Contra Costa County directory citations, review management, local link building", impact: "Rank in Google Maps 3-pack for Martinez; outperform generic national agency pages" },
              { service: "Managed Google Ads / PPC", whatWeDo: "Call-only ads, location extensions, seasonal keyword campaigns, conversion tracking", impact: "Immediate top-of-page visibility for Martinez searches" },
              { service: "Google Local Service Ads (LSA)", whatWeDo: "Background check coordination, license verification, Google Guaranteed badge setup", impact: "Appear above every competitor with a Google-verified trust badge" },
              { service: "Social Media & Meta Ads", whatWeDo: "Geo-targeted campaigns for Martinez ZIP code 94553; community event tie-ins", impact: "Reach Martinez's tight-knit residential community through community-focused social campaigns" },
              { service: "Conversion-Focused Website Design", whatWeDo: "Mobile-first design, click-to-call, online booking, page speed optimization", impact: "Over 68% of local searches occur on mobile — a desktop-first website is a conversion disadvantage" },
              { service: "Reputation Management", whatWeDo: "Automated review campaigns, Google/Yelp monitoring, professional response guidance", impact: "In a tight-knit market, a 3-star rating costs significantly more than in a larger city" },
              { service: "AI Receptionist & Lead Automation", whatWeDo: "24/7 missed-call SMS, AI QuadBots, SMART nurture, VIP Club, CRM integration", impact: "Never lose a Martinez lead to a faster competitor" },
            ].map((row, i) => (
              <div key={i} className="bg-card/50 border border-border/60 rounded-xl p-4 border-l-4 border-l-primary">
                <p className="font-bold text-foreground mb-1">{row.service}</p>
                <p className="text-sm text-foreground/80 mb-2">{row.whatWeDo}</p>
                <p className="text-sm text-primary italic">{row.impact}</p>
              </div>
            ))}
          </div>

          {/* Individual service blocks - abbreviated for key services */}
          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Get Found First When Martinez Customers Search for Your Services —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Local SEO & Google Maps Domination</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">Local SEO in Martinez operates differently from the I-680 corridor suburbs. Search radii in smaller Bay Area cities like Martinez tend to prioritize hyperlocal results within a 5-mile radius — meaning precise GBP service area configuration, neighborhood-level keyword targeting, and consistent local citation signals matter more here than in broader metropolitan markets.</p>
            <ul className="space-y-3 mb-6">
              {[
                "Google Business Profile optimization calibrated for Martinez's hyperlocal search behavior — category selection, service area configuration covering Vine Hill, Alhambra Valley, the waterfront corridor, and ZIP code 94553",
                "Neighborhood-level keyword targeting: 'HVAC repair Vine Hill,' 'dentist Martinez CA,' 'plumber Alhambra Valley,' 'restaurant Waterfront Park Martinez' — hyper-local terms that national template agencies never build for a market this specific",
                "Contra Costa County citation building — structured citations across local directories, Contra Costa County business associations, and regional aggregators that tell Google you legitimately serve this market",
                "Seasonal content alignment — Martinez Farmers Market, Martinez Blues Festival, Fourth of July fireworks at Waterfront Park — community event references that boost local content relevance",
                "Review velocity management — consistent review acquisition systems that build the recency signal Martinez's community-oriented searchers rely on when choosing a trusted local provider",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3"><span className="text-primary mt-1 flex-shrink-0">●</span><span className="text-foreground/80">{bullet}</span></li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Optimize Your Local SEO for Martinez — Schedule Strategy Call
            </a>
          </div>

          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Need Leads This Week, Not This Quarter?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Google Ads That Deliver Martinez Customers on Day One.</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">Google Ads in Martinez require local audience intelligence to perform efficiently. Campaigns built around Martinez's actual search behavior — waterfront corridor dining searches, Vine Hill emergency plumbing, Alhambra Valley HVAC seasonal demand — generate qualified leads at a fraction of the cost of generic Bay Area campaigns.</p>
            <ul className="space-y-3 mb-6">
              {[
                "Call-only campaigns for home service contractors — capturing emergency HVAC, plumbing, and electrical inquiries from Vine Hill and Alhambra Valley homeowners at the exact moment of highest intent",
                "Location-targeted campaigns covering ZIP code 94553 and Martinez's service radius across the northern Contra Costa County market",
                "Seasonal campaign alignment: 'AC repair Martinez CA' in summer, 'heating service Alhambra Valley' in fall, 'emergency plumber Martinez' year-round",
                "Community event campaign tie-ins: pre-event restaurant and retail promotions around the Martinez Farmers Market and Blues Festival",
                "Complete conversion tracking: every dollar of ad spend accountable to phone calls, form submissions, and booked appointments",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3"><span className="text-primary mt-1 flex-shrink-0">●</span><span className="text-foreground/80">{bullet}</span></li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Launch Google Ads for Your Martinez Business — Start Generating Leads This Week
            </a>
          </div>

          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              A 3-Star Rating Is Silently Killing Your Martinez Business.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Here's How We Fix It in 90 Days.</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">In Martinez's community-oriented market, online reviews carry a weight that is disproportionate to what the same rating represents in larger, higher-turnover cities. Martinez residents know their neighbors, discuss local businesses at the Farmers Market, and treat a high Google rating as confirmation of what they have already heard through the community grapevine. A 3.7-star rating in this market does not just cost you leads — it contradicts your community reputation.</p>
            <p className="text-foreground/80 italic mb-6"><a href="https://www.brightlocal.com/research/local-consumer-review-survey-2024/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BrightLocal's 2024 survey</a> found that 88% of consumers would use a business that responds to all of its reviews, compared to just 47% for businesses that do not respond at all.</p>
            <ul className="space-y-3 mb-6">
              {[
                "Automated review request campaigns timed immediately after service completion — calibrated for Martinez's community-oriented residents who respond best to timely, personal requests",
                "Multi-platform monitoring across Google, Yelp, Houzz, Healthgrades, OpenTable, and Yelp — comprehensive coverage across every platform Martinez residents use",
                "Professional negative review response guidance — in Martinez's tight community, every response is a public statement visible to potential clients who have heard about your business through neighborhood channels",
                "Healthcare-compliant reputation management for dental practices and wellness professionals serving patients near the Contra Costa County Regional Medical Center",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3"><span className="text-primary mt-1 flex-shrink-0">●</span><span className="text-foreground/80">{bullet}</span></li>
              ))}
            </ul>
            <a href={strategyCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 text-primary font-semibold hover:bg-primary/20 transition-colors">
              → Build a 4.5+ Star Reputation in Martinez — Start Your Review Campaign
            </a>
          </div>

          <div className="mt-16 pt-10 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Every Missed Call Is a Lost Job.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Our AI Receptionist Follows Up in Seconds — So You Never Lose Another Martinez Lead to a Faster Competitor.</span>
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6">Research from <a href="https://www.insidesales.com/response-time-matters/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">MIT and InsideSales.com</a> confirms that leads contacted within 5 minutes are 21 times more likely to convert than those reached after 30 minutes. In Martinez's home services market — where an emergency HVAC call, a burst pipe, or a power outage at 9pm requires immediate response — the business that answers first wins. Manual teams cannot achieve five-minute response times around the clock. AI systems can.</p>
            <ul className="space-y-3 mb-6">
              {[
                "AI Receptionist: answers missed calls 24/7, captures caller information, responds to common questions, and books appointments automatically — including emergency after-hours calls from Vine Hill homeowners and Alhambra Valley residents",
                "AI QuadBots: conversational AI managing web chat, voice interactions, and lead qualification simultaneously — after-hours website visitors receive intelligent responses, not auto-replies",
                "SMART nurture sequences: automated CRM workflows — appointment reminders, follow-up sequences, seasonal service promotions, renewal notices, and review requests running continuously",
                "VIP Club and reactivation campaigns: for restaurants, dental practices, and repeat-visit businesses, structured loyalty systems that turn Martinez's community-loyal customer base into compounding revenue",
                "CRM integration and lead tracking — every inquiry tracked from first contact to closed job",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3"><span className="text-primary mt-1 flex-shrink-0">●</span><span className="text-foreground/80">{bullet}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== WHO WE SERVE ===== */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"><Users className="w-4 h-4" /> WHO WE SERVE</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              Built for Your Industry, Not Adapted From Someone Else's Playbook — See If We're the Right Fit for Martinez
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">GrowSmallBiz works exclusively with local service businesses in Martinez and surrounding Contra Costa County. We do not work with eCommerce stores, national retailers, or product-based businesses. Our systems are purpose-built for the verticals below — with genuine knowledge of Martinez's neighborhoods, seasonal demand patterns, and community culture.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><Home className="w-6 h-6 text-primary" /></div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Home Service Contractors — HVAC, Roofing, Plumbing & Electrical</h3>
              <p className="text-muted-foreground leading-relaxed">Martinez's residential geography creates distinct demand patterns for home service contractors. Vine Hill's working-class homeowners generate consistent volume demand. Alhambra Valley's larger, more affluent properties create higher-ticket service opportunities. We build the systems that put Martinez home service contractors at the top of those searches and capture every lead the moment it arrives.</p>
            </div>
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><Heart className="w-6 h-6 text-primary" /></div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Dentists, Med Spas & Wellness Professionals</h3>
              <p className="text-muted-foreground leading-relaxed">Martinez's proximity to the Contra Costa County Regional Medical Center creates meaningful demand for dental care, physical therapy, chiropractic, and allied health services. Patients here choose their healthcare providers based on visible community trust signals. We build the complete digital presence that helps Martinez practices compete on community trust and personalized care.</p>
            </div>
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><UtensilsCrossed className="w-6 h-6 text-primary" /></div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Restaurants & Hospitality</h3>
              <p className="text-muted-foreground leading-relaxed">Martinez's waterfront dining corridor along the Carquinez Strait and the Alhambra Avenue restaurant district serve a community that treats local dining as a social institution. We build the full digital system — Local SEO, Google Maps optimization, social media community campaigns tied to the Martinez Farmers Market and Blues Festival, and the retention infrastructure that fills tables year-round.</p>
            </div>
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><Building2 className="w-6 h-6 text-primary" /></div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Real Estate Agents & Brokers</h3>
              <p className="text-muted-foreground leading-relaxed">Martinez's real estate market reflects its character — more affordable than the I-680 corridor suburbs, with genuine historic downtown inventory, semi-rural Alhambra Valley properties, and steady residential turnover. We build the local SEO, targeted paid campaigns, and personal branding systems that establish lasting community authority — generating qualified listing inquiries from buyers and sellers who want an agent who actually knows Martinez.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESULTS ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"><BarChart3 className="w-4 h-4" /> RESULTS</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              Real Client Results Across Our Service Areas
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">See what's possible when marketing runs as a complete, integrated system.</p>
          </div>

          <CampaignResultsCards cards={martinezCards} />
        </div>
      </section>

      <PersonCTA title="Let's Build Your Growth Engine" description="If you want AI-powered client acquisition systems, done-for-you execution, adaptive strategy, and a clear multi-channel dashboard, start with a free strategy call." buttonText="Schedule Strategy Call" buttonHref={strategyCallUrl} sectionClassName="py-16" />

      {/* ===== FAQ ===== */}
      <FAQSection
        title="Your Questions Answered — No Jargon, No Sales Pitch, Just Straight Answers About Digital Marketing in Martinez"
        faqs={[
          { question: "What types of businesses does GrowSmallBiz work with in Martinez?", answer: "We work exclusively with local service businesses and brick-and-mortar establishments in Martinez and the surrounding Contra Costa County area — including HVAC contractors, plumbers, electricians, roofers, dental practices, med spas, real estate professionals, and restaurants. We do not work with law firms, eCommerce stores, or product-based businesses. Our systems are purpose-built for businesses that serve local Martinez and Contra Costa County clients directly." },
          { question: "How long does SEO take in Martinez?", answer: "Google Business Profile optimizations show measurable movement — increased views, calls, and direction requests — within 30 to 60 days. Organic rankings shift within 60 to 90 days for less competitive terms and 3 to 6 months for primary category keywords. Martinez is competitive but not saturated: the current SERP leader is a national template agency that can be outperformed with a well-executed local strategy within 6 to 12 months." },
          { question: "How is GrowSmallBiz different from the national agencies that rank in Martinez searches?", answer: "National agencies build templated location pages from cities where they have no business presence. The agencies currently ranking for Martinez keywords carry the same structure across Sacramento, Fresno, Riverside and dozens of other cities — with no knowledge of Vine Hill's residential character, the Alhambra Avenue dining corridor, the courthouse legal cluster, or the community-oriented buyer behavior that distinguishes Martinez from every other Contra Costa County city. GrowSmallBiz is based in Danville, 20 minutes away." },
          { question: "Why does Martinez search behavior differ from Walnut Creek or San Ramon?", answer: "Three primary differences. First, Martinez is the Contra Costa County seat — a market with its own civic infrastructure, institutional anchor (the courthouse), and community identity. Second, the demographic mix is distinct — a blend of working-class Vine Hill households, semi-rural Alhambra Valley residents, waterfront hospitality workers, and courthouse-area professionals. Third, Martinez's community culture means purchasing decisions carry a social dimension — residents consult neighbors, discuss providers at the Farmers Market, and treat online reviews as confirmation of community word-of-mouth." },
          { question: "Can GrowSmallBiz help with both new lead generation and keeping existing clients?", answer: "Yes — and for established Martinez service businesses, retention is often the faster path to meaningful revenue growth. In a community market where a loyal client refers three neighbors over five years, retention is also your most cost-effective marketing channel. Our retention infrastructure includes VIP Club membership systems, SMART nurture sequences, reactivation campaigns, and automated review programs." },
          { question: "How does the AI Receptionist work for a Martinez service business?", answer: "The AI Receptionist is a 24/7 automated system handling leads across every channel — after-hours calls, web forms, chat, and texts. When a Vine Hill homeowner calls at 10pm about a furnace failure, the AI Receptionist answers immediately, captures their information, responds to common questions, and books a next-morning appointment directly into your scheduling calendar without manual intervention." },
          { question: "Does my Martinez business need to be on social media?", answer: "For Martinez businesses, social media serves a different function than in higher-turnover suburban markets. Martinez's community orientation means social media campaigns that reference local landmarks, events, and neighborhoods — the Farmers Market, the Blues Festival, the waterfront — generate meaningfully higher engagement than generic service promotion content." },
          { question: "What common SEO mistakes are Martinez businesses making right now?", answer: "Based on our Contra Costa County market audits, the most common and costly mistakes are: ignoring mobile optimization despite over 68% of local searches happening on mobile devices; inconsistent NAP information across directories; outdated or incomplete Google Business Profiles; generic website content with no Martinez-specific neighborhood references; and failing to solicit reviews consistently." },
        ]}
        schemaType="FAQPage"
        contactCTA={{ ...baseContactCTA, title: "Have more questions about marketing in Martinez?", description: "We're here to help. Reach out to us for a personalized consultation.", tagline: "Let's grow your Martinez business together." }}
      />

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight mb-6 bg-gradient-heading bg-clip-text text-transparent">
              Every Day You Wait, Your Competitors Book Another Martinez Customer That Should Have Been Yours
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Martinez's local search landscape is open. The dominant SERP competitor is a national template agency with no genuine knowledge of this community. The map pack positions for most local service categories in Martinez are not locked — they are available to the business that builds a properly structured local presence first and maintains it consistently.</p>
            <p className="text-foreground/80 leading-relaxed mb-4">GrowSmallBiz gives Martinez service businesses the integrated marketing system that wins in a community-oriented market: one connected platform spanning awareness to retention, powered by AI, and managed by a team based 20 minutes away in Danville.</p>
            <p className="text-foreground/70 font-semibold mt-6">No long-term contracts. No templates. No excuses. Just one integrated system built specifically for your Martinez business.</p>
          </div>
        </div>
      </section>

      <PersonCTA title="Schedule Strategy Call" description="Receive a personalized strategy session — local SEO audit, competitive analysis, and a clear growth roadmap built specifically for your Martinez service business." buttonText="Schedule Strategy Call" buttonHref={strategyCallUrl} sectionClassName="py-16" />

      <ConsultationFormSection utmCampaign="martinez-consultation" utmMedium="martinez-ca" />

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-6">If your business also serves nearby communities, explore our pages for:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Concord", to: "/locations/concord-ca/" },
              { label: "Pleasant Hill", to: "/locations/pleasant-hill-ca/" },
              { label: "Walnut Creek", to: "/locations/walnut-creek-ca/" },
              { label: "Danville", to: "/locations/danville-ca/" },
              { label: "San Ramon", to: "/locations/san-ramon-ca/" },
              { label: "Dublin", to: "/locations/dublin-ca/" },
              { label: "Pleasanton", to: "/locations/pleasanton-ca/" },
              { label: "Livermore", to: "/locations/livermore-ca/" },
              { label: "Tracy", to: "/locations/tracy-ca/" },
            ].map((city) => (
              <Link key={city.to} to={city.to} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all text-sm font-medium">
                <MapPin className="w-3.5 h-3.5" />{city.label}
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

export default MartinezCA;
