import { Header } from "@/components/layout/Header";
import pleasantHillHero from "@/assets/pleasant-hill-hero.webp";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Phone, Shield, CheckCircle, Search, Target, Star, Users, Home, Heart, Building2, UtensilsCrossed, BarChart3, TrendingUp } from "lucide-react";
import { CampaignResultsCards } from "@/components/locations/CampaignResultsCards";
import { pleasantHillCards } from "@/components/locations/campaignCardData";
import { LocationJsonLd } from "@/components/seo/LocationJsonLd";
import { PersonCTA } from "@/components/services";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { useUtm } from "@/hooks/use-utm";
import { baseContactCTA } from "@/config/contactCTA";

const PleasantHillCA = () => {
  const { buildUrl } = useUtm();
  const strategyCallUrl = buildUrl("https://lp.growsmallbiz.io/digital-growth-strategy-session", "schedule-strategy-call");

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Digital Marketing Services in Pleasant Hill, CA | GrowSmallBiz</title>
        <meta name="description" content="Pleasant Hill, CA digital marketing services by GrowSmallBiz: Grow your business with AI SEO, AI optimized paid ads, and AI marketing automation." />
        <meta name="keywords" content="digital marketing Pleasant Hill, AI-powered SEO, local service marketing, lead generation services, reputation management Pleasant Hill, paid advertising Pleasant Hill, social media campaigns, local business growth strategies" />
        <link rel="canonical" href="https://growsmallbiz.io/locations/pleasant-hill-ca/" />
      </Head>
      <LocationJsonLd
        cityName="Pleasant Hill"
        stateCode="CA"
        description="GrowSmallBiz helps Pleasant Hill local service businesses rank higher, generate more leads, and grow faster with AI-powered digital marketing."
        url="/locations/pleasant-hill-ca/"
        latitude={37.9483}
        longitude={-122.0608}
        breadcrumbs={[
          { name: "Locations We Serve", url: "/locations/locations-we-serve/" },
          { name: "Pleasant Hill, CA", url: "/locations/pleasant-hill-ca/" },
        ]}
      />
      <Header />
      <main id="main-content">

      {/* ===== SECTION 1 — HERO ===== */}
      <section className="hero-section">
        <img src={pleasantHillHero} alt="GrowSmallBiz digital marketing agency serving Pleasant Hill CA Contra Costa County local service businesses" width={1920} height={768} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: `hsl(var(--background) / 0.82)` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="service-badge mb-4 animate-fade-up">
              <MapPin className="w-4 h-4" />
              <span>Pleasant Hill, CA — Local Service Business Marketing | 680 Corridor | Contra Costa County</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 animate-fade-up leading-tight bg-gradient-heading bg-clip-text text-transparent">
              Stop Losing Pleasant Hill Leads to Competitors — Full-Service Digital Marketing for Local Businesses
            </h1>
            <h2 className="max-w-3xl mx-auto text-xl md:text-2xl text-foreground/90 font-display font-semibold animate-fade-up mt-4 bg-gradient-heading bg-clip-text text-transparent" style={{ animationDelay: "0.05s" }}>
              Sitting at the heart of the 680 corridor, Pleasant Hill's affluent homeowner base, BART-connected professionals, and Diablo Valley College population create high-intent demand for local service businesses — with the lowest keyword competition of any city we serve.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
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

      {/* ===== SECTION 2 — WHY US ===== */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4" /> WHY US
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              What Makes GrowSmallBiz Different — And Why It Matters for Your Pleasant Hill Business
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Concord and Walnut Creek competitors are outranking Pleasant Hill service businesses right now — not because their work is better, but because their digital presence is stronger. The primary keyword carries a Keyword Difficulty of 8, the lowest of any city in our Contra Costa County footprint. The SERP leaders are thin template pages with scores under 50 and fewer than 600 words. Here is what GrowSmallBiz brings that no template agency can.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "Closest integrated agency:", body: "Based in Danville, 15 miles from Pleasant Hill via I-680. The agencies currently ranking for Pleasant Hill keywords are out-of-state template providers or single-channel shops. GrowSmallBiz is the nearest full-service integrated marketing agency serving Contra Costa County local service businesses." },
              { label: "Integrated, not fragmented:", body: "One system covering awareness, lead capture, AI follow-up, nurture, and reputation management. No separate vendors pointing fingers. One team accountable for your results across every channel." },
              { label: "Diablo Valley market knowledge:", body: "We know Contra Costa Blvd, the competitive dynamics between Pleasant Hill, Walnut Creek, and Concord, and how Pleasant Hill's BART-connected, mobile-first professional community searches, compares, and decides." },
              { label: "AI-powered execution:", body: "AI Receptionist captures evening and weekend leads from BART commuters and busy professionals. AI QuadBots handle multi-channel inquiries simultaneously. SMART nurture sequences follow up with every prospect automatically — capturing the 9 PM homeowner search that manual teams miss every day." },
              { label: "No long-term contracts:", body: "Month-to-month agreements keep us accountable to results. We earn your business every single month." },
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

      {/* ===== SECTION 3 — LOCAL MARKET ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" /> LOCAL MARKET
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              Your Competitors Are Winning in Pleasant Hill Search Results. Here's Exactly Why — and How to Take It Back.
            </h2>
          </div>

          <div className="prose prose-lg prose-invert max-w-4xl mx-auto space-y-5 mb-12">
            <p className="text-foreground/90 leading-relaxed">Pleasant Hill is not a generic suburban market. It sits at the geographic heart of the 680 corridor — bounded by Walnut Creek to the south and Concord to the north, connected to the Bay Area tech workforce via the Pleasant Hill BART station (Contra Costa Centre), and anchored by Diablo Valley College with over 20,000 enrolled students. Each of these creates a distinct demand pattern that generic Bay Area marketing agencies completely miss.</p>
            <p className="text-foreground/90 leading-relaxed">The primary commercial corridor runs along Contra Costa Blvd — one of the most competitive stretches of local commerce in the Diablo Valley. Medical and dental offices, chiropractic and wellness practices, HVAC and home service contractors, auto repair shops, real estate offices, and med spas all compete for the same digital real estate. Highway 680 creates a continuous competitive zone — businesses in Walnut Creek and Concord actively invest in SEO and paid advertising, and their digital reach extends directly into Pleasant Hill searches.</p>
            <p className="text-foreground/90 leading-relaxed">Pleasant Hill's BART station connects residents to San Francisco, Oakland, and the broader Bay Area tech corridor. This means a significant portion of Pleasant Hill's population is digital-native, mobile-first, and accustomed to searching, reviewing, and booking services entirely on their phone. When they need a local service, they trust the businesses that rank, have strong reviews, and look credible online — and they hire those businesses instead of their competitors.</p>
            <p className="text-foreground/90 leading-relaxed">GrowSmallBiz is based in Danville, CA — just 15 miles south of Pleasant Hill, within the same Contra Costa County. We know this market because we operate in it.</p>
          </div>

          {/* Market Snapshot Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: "~38,000", label: "Residents" },
              { value: "$90,000+", label: "Median Household Income" },
              { value: "20,000+", label: "Diablo Valley College daily population" },
              { value: "15 miles", label: "from GrowSmallBiz HQ in Danville" },
            ].map((stat, i) => (
              <div key={i} className="bg-card/50 border border-border/60 rounded-xl p-4 text-center">
                <p className="text-2xl font-display font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 text-center">Why Pleasant Hill Is a High-Priority Digital Marketing Market</h3>
          <div className="space-y-3 max-w-4xl mx-auto mb-12">
            {[
              { label: "Affluent, high-intent searchers:", body: "Residents with above-average income search for quality service providers — and convert at higher rates when they find a business they trust online" },
              { label: "Mobile-first behavior:", body: "BART commuters and busy professionals search on mobile. Businesses that rank on mobile Google and Google Maps capture a disproportionate share of leads" },
              { label: "Strong review culture:", body: "Pleasant Hill residents actively consult Google reviews before hiring any local service provider. Reputation management is not optional here — it is a prerequisite" },
              { label: "Rising digital competition:", body: "As more Walnut Creek and Concord businesses invest in SEO and Google Ads, Pleasant Hill businesses that don't match that investment get pushed further down the results page — and further from their customers" },
              { label: "Lowest keyword difficulty on the 680 corridor:", body: "'digital marketing agency pleasant hill ca' carries a KD of 8 — the field is nearly empty and the first well-built, locally-anchored page will own it" },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-primary mt-1 flex-shrink-0">●</span>
                <p className="text-foreground/90"><span className="font-bold text-foreground">{item.label}</span> {item.body}</p>
              </div>
            ))}
          </div>

          {/* Pull quote */}
          <div className="max-w-4xl mx-auto bg-primary/5 border-l-4 border-l-primary rounded-r-xl p-6">
            <p className="text-foreground/90 italic leading-relaxed">"The Pleasant Hill SERP for 'digital marketing agency pleasant hill ca' is occupied by a Yelp listing at #1, a 509-word thin page at #2, and a Concord agency page ranking by accident at #8. The first purpose-built, locally-anchored Pleasant Hill page displaces all of them."</p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4 — SERVICES ===== */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Target className="w-4 h-4" /> SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              The Integrated Marketing System Built for Pleasant Hill Service Businesses — Fills Your Calendar, Not Just Your Dashboard
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Pleasant Hill's 680 corridor competition and BART-connected, review-driven consumer base reward businesses that are visible across the right channels, trusted by an affluent audience, and responsive at the speed the market demands. An integrated system delivers all three simultaneously — not as separate investments, but as a coordinated engine that compounds as your market presence matures.</p>
          </div>

          {/* Services Overview Table */}
          <div className="overflow-x-auto mb-14">
            <table className="w-full text-sm border-collapse">
              <thead><tr>
                <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">Service</th>
                <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">What We Deliver</th>
                <th className="p-3 text-left font-bold text-primary bg-card/80 border border-border/60">Business Impact</th>
              </tr></thead>
              <tbody>
                {[
                  { svc: "Managed AI SEO", deliver: "AI-powered keyword research, content strategy, and ongoing optimization", impact: "Rank for Pleasant Hill-specific searches with KD as low as 8" },
                  { svc: "Local SEO & GBP", deliver: "Map pack rankings, citation building, GBP optimization", impact: "Top-3 map pack position for Pleasant Hill and 680 corridor searches" },
                  { svc: "On-Page SEO", deliver: "Title tags, meta, headings, internal linking, content alignment", impact: "Every page optimized for high-intent Pleasant Hill search queries" },
                  { svc: "Technical SEO", deliver: "Site speed, Core Web Vitals, crawlability, schema markup", impact: "Eliminate ranking suppressors for Pleasant Hill's mobile-first audience" },
                  { svc: "AEO & GEO", deliver: "Featured snippets, voice search, AI Overview, ChatGPT citations", impact: "Be the answer AI assistants surface for Pleasant Hill service queries" },
                  { svc: "Google Ads / PPC", deliver: "High-intent geo-targeted campaigns for the 680 corridor", impact: "Qualified leads within days — no 6-month wait for results" },
                  { svc: "AI Client Growth System", deliver: "AI Receptionist, QuadBots, SMART nurture, CRM automation", impact: "Zero missed leads, faster follow-up, more booked appointments" },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-3 border border-border/60 font-semibold text-foreground bg-card/30">{row.svc}</td>
                    <td className="p-3 border border-border/60 text-foreground/70">{row.deliver}</td>
                    <td className="p-3 border border-border/60 text-primary font-bold">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 7 Expanded Service Blocks */}
          {[
            {
              num: "1", title: "Rank Higher and Stay There — Managed AI SEO for Pleasant Hill Service Businesses",
              body1: "Our flagship service combines advanced AI tooling with expert human strategy to identify every ranking opportunity available to your Pleasant Hill business — and capture it systematically. We handle keyword research, content development, competitive gap analysis, and ongoing optimization so you rank for the searches that bring real customers through your door.",
              body2: "The Pleasant Hill SERP for the primary keyword is unusually open. South Street & Co. holds position #2 with 509 words and a content score of 47. Local SEO Guide holds a position with 1,001 words and a score of 51. A well-built, locally-anchored GrowSmallBiz page outperforms both within 60–90 days.",
              bullets: [
                "Primary target: 'digital marketing agency pleasant hill ca' (KD: 8) — lowest difficulty of any city in our Contra Costa County footprint",
                "Secondary targets: 'local seo pleasant hill ca' (KD: 41), 'seo services pleasant hill ca' (KD: 33), 'small business marketing pleasant hill ca' (KD: 36)",
                "Geo-broad opportunity: 'contra costa county digital marketing' (KD: 23) — virtually no competing service pages, open for immediate capture",
                "AI content strategy continuously updated against shifting SERP signals — not a set-it-and-forget-it campaign",
              ],
            },
            {
              num: "2", title: "Own the Google Map Pack When Pleasant Hill Customers Search for Your Service — Local SEO & Google Business Profile",
              body1: "When a Pleasant Hill resident searches for your service, showing up in the Google Local Pack is the highest-leverage position available. It captures the highest share of local search clicks — above organic results, above paid ads, and above every competitor who hasn't built the map pack authority yours will have.",
              body2: (<>We optimize your Google Business Profile, build authoritative local citations across Contra Costa County directories, and execute a map pack ranking strategy designed to put your business at the top of results for Pleasant Hill, Walnut Creek, Concord, and Martinez. According to BrightLocal, <a href="https://www.brightlocal.com/research/local-consumer-review-survey-2024/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">81% of consumers use Google to evaluate local businesses</a> — and <a href="https://www.brightlocal.com/resources/local-seo-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">56% have not fully optimized their Google Business Profile</a>. That gap is your competitive opportunity.</>),
              bullets: [
                "Google Business Profile optimization: categories, services, photos, posts, Q&A, and review strategy all configured for Pleasant Hill search signals",
                "Citation building across Contra Costa County directories — including the Pleasant Hill Chamber directory, confirmed ranking at #5 for the primary keyword",
                "Map pack ranking strategy targeting Pleasant Hill 94523, Walnut Creek, Concord, and Martinez simultaneously",
                "Ongoing GBP management — the BART commuter's phone search and the homeowner's 9 PM emergency query both captured and routed into your pipeline",
              ],
            },
            {
              num: "3", title: "Turn Every Page of Your Website Into a Lead-Generating Asset — On-Page SEO for the Diablo Valley Market",
              body1: "Every page of your website is an opportunity to rank for a Pleasant Hill search query. Most local business websites waste that opportunity with generic copy that fails to signal relevance to Google's local algorithm or to the specific intent of a 680 corridor searcher.",
              body2: "We optimize your site's title tags, meta descriptions, heading structure, internal linking, and content — aligned with the specific keywords your target customers are searching in the Diablo Valley market. Every optimization decision is driven by search intent data, not templates.",
              bullets: [
                "Title tags and meta descriptions rewritten with Pleasant Hill-specific keyword targets and click-through optimization",
                "Heading hierarchy restructured to match search intent — H1 through H6 aligned with how Google reads and ranks your service pages",
                "Internal linking strategy connecting your service pages, location pages, and blog content into a coherent authority structure",
                "Long-tail opportunity capture: 'hvac contractor pleasant hill ca,' 'dentist near contra costa blvd,' 'chiropractic pleasant hill 94523,' and dozens more",
              ],
            },
            {
              num: "4", title: "Fix the Technical Foundations That Are Quietly Suppressing Your Rankings — Technical SEO",
              body1: "A slow or poorly structured site undermines every other marketing effort. Pleasant Hill's BART-connected, mobile-first population searches on their phones — and Google ranks sites based on mobile performance. If your site fails Core Web Vitals, your rankings are being penalized regardless of how good your content is.",
              body2: "Our technical SEO work addresses site speed, mobile performance, crawlability, indexation, schema markup, and Core Web Vitals — ensuring your site performs at the level Google demands for the mobile-first audience that defines Pleasant Hill search behavior.",
              bullets: [
                "Core Web Vitals audit and remediation — Largest Contentful Paint, Cumulative Layout Shift, and Interaction to Next Paint all brought within Google's passing thresholds",
                "Mobile performance optimization for the BART commuter audience — fast loading on 4G/5G cellular connections, not just wifi",
                "Crawlability and indexation review — ensure Google can find, read, and rank every page you want ranked",
                "LocalBusiness schema markup implemented correctly with Pleasant Hill-specific areaServed and sameAs citations",
              ],
            },
            {
              num: "5", title: "Be the Answer AI Assistants Give When Pleasant Hill Residents Search for Your Service — Answer Engine & Generative Engine Optimization",
              body1: "AI assistants, featured snippets, and voice search are reshaping how Pleasant Hill residents find local businesses. Google AI Overviews, ChatGPT, Perplexity, and Gemini are becoming primary discovery channels — and they reward businesses that have built the content authority, structured data, and citation profile to be trusted as authoritative local sources.",
              body2: "AEO positions your business to be the trusted answer surfaced in zero-click moments. GEO ensures your Pleasant Hill business is cited, recommended, and referenced when AI-generated search results are served to users looking for services in the Diablo Valley area. Most of your competitors are not building for this channel yet — the first-mover advantage is significant and compounds over time.",
              bullets: [
                "Featured snippet optimization for condition-specific and service-specific queries: 'best hvac company near pleasant hill,' 'dentist accepting new patients pleasant hill ca'",
                "ChatGPT and Perplexity citation strategy — structured content that AI engines pull from when generating local service recommendations",
                "Voice search optimization for conversational queries Pleasant Hill's BART commuter audience uses on mobile: 'who fixes AC near me,' 'find a chiropractor open now in pleasant hill'",
                "Google AI Overview positioning for high-value zero-click moments — your business named before a competitor's website is even clicked",
              ],
            },
            {
              num: "6", title: "Generate Qualified Pleasant Hill Leads This Week — Not Six Months From Now — Google Ads / PPC",
              body1: "When you need leads this week — not in six months — targeted Google Ads campaigns deliver. SEO compounds over time; paid advertising produces results immediately. The two are not in competition — they are complementary channels that serve different points in your growth timeline.",
              body2: "We build and manage PPC campaigns for Pleasant Hill businesses focused on high-intent Diablo Valley searches, with geographic targeting that captures searches from Pleasant Hill, Walnut Creek, Concord, and the surrounding 680 corridor. Every dollar is tracked, every campaign is optimized for conversion, and there is no wasted spend on clicks that will never become customers.",
              bullets: [
                "Geo-targeted campaign structure: Pleasant Hill 94523 primary zone, with 680 corridor extension to Walnut Creek, Concord, and Martinez",
                "High-intent keyword targeting — searches that signal immediate purchase intent, not research intent",
                "Landing page alignment — every ad group matched to a dedicated, conversion-optimized landing page",
                "Conversion tracking for calls, form submissions, and appointment bookings — not just clicks and impressions",
                "Average 41–48% reduction in cost per lead at full campaign optimization — verified across GrowSmallBiz local service client accounts",
              ],
            },
            {
              num: "7", title: "Never Miss Another Pleasant Hill Lead — AI Client Growth System",
              body1: (<>Pleasant Hill's BART-connected, professionally-oriented residents inquire at all hours. A homeowner searching for an HVAC contractor at 9 PM on a Thursday has an urgent need — and they will hire the first business that responds. In Pleasant Hill's competitive 680 corridor market, where Walnut Creek and Concord competitors are already responding faster, response speed is the deciding factor between a booked job and a lost lead.</>),
              body2: (<>Our AI Client Growth System answers calls and web inquiries around the clock — qualifying leads, answering common questions, and booking appointments automatically so you never miss a customer because you were unavailable. According to <a href="https://www.insidesales.com/response-time-matters/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">InsideSales research, leads contacted within 5 minutes are 21 times more likely to convert</a>. The AI Receptionist eliminates the response delays that cost Pleasant Hill service businesses revenue every day.</>),
              bullets: [
                "AI Receptionist: answers missed calls 24/7, captures caller information, responds to common questions, and books appointments automatically — capturing the evening BART commuter inquiry and the weekend homeowner call with equal capability regardless of when it arrives",
                "AI QuadBots: conversational AI managing web chat, SMS, email, and voice interactions simultaneously — website visitors from busy professionals receive intelligent responses immediately, qualify their need, and route directly into your CRM pipeline",
                "SMART nurture sequences: automated CRM workflows sending the right message at the right time — appointment reminders, seasonal maintenance campaigns, renewal notices, and review requests running continuously for your growing Pleasant Hill client base",
                "VIP Club and reactivation campaigns: for restaurants, dental practices, and repeat-visit businesses, structured loyalty systems that convert Pleasant Hill's community-oriented residents into a referral network",
                "CRM integration and lead tracking: every inquiry tracked from first contact to closed job — complete visibility into your Pleasant Hill marketing ROI across all channels and all hours",
              ],
            },
          ].map((svc, i) => (
            <div key={i} className={i === 0 ? "mt-0" : "mt-16 pt-10 border-t border-border/30"}>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                {svc.num}. <span className="text-transparent bg-clip-text bg-gradient-primary">{svc.title}</span>
              </h3>
              <p className="text-foreground/90 leading-relaxed mb-4">{svc.body1}</p>
              <p className="text-foreground/90 leading-relaxed mb-6">{svc.body2}</p>
              {svc.bullets.length > 0 && (
                <ul className="space-y-3 mb-6">
                  {svc.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">●</span>
                      <span className="text-foreground/80">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Service 7 closing body */}
          <p className="text-foreground/90 leading-relaxed mt-6 max-w-4xl">Retention is the fastest path to revenue growth for established Pleasant Hill service businesses. In a community where residents actively consult reviews and refer service providers within neighborhood networks, a loyal client often refers three to five neighbors. Our retention infrastructure activates and sustains that referral engine systematically rather than leaving it to chance.</p>
        </div>
      </section>

      {/* ===== SECTION 5 — WHO WE SERVE ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" /> WHO WE SERVE
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              Built for Your Industry, Not Adapted From Someone Else's Playbook — See If We're the Right Fit for Pleasant Hill
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">GrowSmallBiz works exclusively with local service businesses in Pleasant Hill and surrounding Contra Costa County. We do not work with eCommerce stores, national retailers, or product-based businesses. Our systems are purpose-built for the verticals below — with genuine knowledge of Pleasant Hill's commercial corridors, competitive landscape, and the specific challenges of serving a BART-connected, high-income, review-driven market.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><Home className="w-6 h-6 text-primary" /></div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">HVAC & Home Service Contractors</h3>
              <p className="text-muted-foreground leading-relaxed">Pleasant Hill's strong homeowner base and established residential neighborhoods create consistent, year-round demand for HVAC, plumbing, electrical, roofing, and home service contractors. The city's owner-occupied housing base means homeowners are actively maintaining and improving their properties — and they search Google first when they need help. Competitors from Walnut Creek and Concord are actively competing for the same customers online — visibility in local search and the Google Map Pack is the deciding factor in who captures the job.</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">●</span>Year-round demand from a high homeowner-density market with median household income above $90,000 — homeowners here spend and expect quality</li>
                <li className="flex gap-2"><span className="text-primary">●</span>AI Receptionist captures the evening call and weekend emergency — the two highest-value inquiry windows in home services, when manual teams are unavailable</li>
                <li className="flex gap-2"><span className="text-primary">●</span>Map pack + organic ranking strategy positions your business above national aggregators, Walnut Creek competitors, and out-of-county providers competing in your ZIP code</li>
              </ul>
            </div>
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><Heart className="w-6 h-6 text-primary" /></div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Dental Practices, Chiropractic Offices & Med Spas</h3>
              <p className="text-muted-foreground leading-relaxed">Pleasant Hill's affluent, health-conscious demographic — with median household income above $90,000 — is an ideal market for dental practices, chiropractic offices, and medical spas. But only if patients can find you when they search. The Contra Costa Blvd corridor and surrounding neighborhoods are dense with health and wellness competition. The practices that win are the ones with the strongest local SEO authority, the best review profiles, and the most responsive follow-up systems.</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">●</span>Condition-specific SEO strategies targeting 'dentist near contra costa blvd,' 'chiropractor pleasant hill 94523,' 'med spa diablo valley' — long-tail searches with high conversion intent</li>
                <li className="flex gap-2"><span className="text-primary">●</span>Reputation management builds the 4.5+ star profile that converts health-conscious Pleasant Hill residents actively researching providers on Google and Yelp</li>
                <li className="flex gap-2"><span className="text-primary">●</span>Google Ads for immediate new patient acquisition while SEO builds compound authority — both channels working simultaneously</li>
              </ul>
            </div>
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><Building2 className="w-6 h-6 text-primary" /></div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Realtors & Real Estate Professionals</h3>
              <p className="text-muted-foreground leading-relaxed">The Contra Costa County real estate market is competitive and active, with buyers relocating from San Francisco and Oakland and within the Diablo Valley itself. Pleasant Hill sits at the center of that movement — buyers looking for the 680 corridor lifestyle at a step below Walnut Creek price points. We help Pleasant Hill realtors build local SEO authority, digital advertising presence, and CRM automation needed to capture buyer and seller leads consistently — and stay top-of-mind through the longer decision cycles that real estate demands.</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">●</span>Local SEO targeting buyers relocating from San Francisco and Oakland who are searching 'homes for sale pleasant hill ca,' 'diablo valley real estate agent,' and 'contra costa county realtor'</li>
                <li className="flex gap-2"><span className="text-primary">●</span>LinkedIn Outreach automation for B2B real estate professionals and commercial contacts in the 680 corridor</li>
                <li className="flex gap-2"><span className="text-primary">●</span>CRM automation that keeps Pleasant Hill realtors visible to prospects across 60–120 day decision cycles without manual follow-up</li>
              </ul>
            </div>
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><UtensilsCrossed className="w-6 h-6 text-primary" /></div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Restaurants & Hospitality</h3>
              <p className="text-muted-foreground leading-relaxed">Diablo Valley College's 20,000+ daily population, the BART commuter flow through the Pleasant Hill station, and the city's professional resident base create sustained food service demand. But restaurant search is intensely local and mobile — 'restaurants near me,' 'dinner pleasant hill,' and 'lunch contra costa blvd' searches happen in the moment, on a phone, with a two-minute decision window. The restaurant that ranks and has 4.5+ stars wins that customer. We help Pleasant Hill restaurants build that position and sustain it.</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">●</span>Map pack visibility that captures the Diablo Valley College lunch crowd, the BART commuter's 'dinner near me' search, and the weekend family dining decision</li>
                <li className="flex gap-2"><span className="text-primary">●</span>Google Business Profile management keeps your restaurant visible in 'open now,' 'near me,' and category search results — the three queries that drive the highest foot traffic conversion</li>
                <li className="flex gap-2"><span className="text-primary">●</span>Review velocity management ensures your rating stays above the 4.2-star threshold where Google surfaces restaurants in competitive category searches</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6 — RESULTS ===== */}
      <section className="py-16 md:py-24 bg-background">
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

          <CampaignResultsCards cards={pleasantHillCards} />

          {/* Channel Comparison */}
          <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">Single-Channel Marketing Doesn't Win in Pleasant Hill's Competitive 680 Corridor. Here's What Actually Moves the Needle.</h3>
          <p className="text-foreground/80 leading-relaxed mb-6">With Walnut Creek and Concord businesses investing heavily in SEO and paid advertising, Pleasant Hill service businesses face real cross-city competition for every local search query. Outperforming that requires the compounding effect of SEO, paid ads, reputation, and AI automation all working together — not just one channel in isolation.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead><tr>
                <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">Channel</th>
                <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">Standalone Result</th>
                <th className="p-3 text-left font-bold text-primary bg-card/80 border border-border/60">GrowSmallBiz Integrated Result</th>
              </tr></thead>
              <tbody>
                {[
                  { ch: "Managed AI SEO", standalone: "Higher rankings over 3–6 months", integrated: "Rankings + map pack + AI citation presence" },
                  { ch: "Google Ads / PPC", standalone: "Immediate leads, stops when budget stops", integrated: "Leads + retargeting pool + brand awareness compound" },
                  { ch: "Local SEO / GBP", standalone: "Map pack visibility", integrated: "Map pack + citation authority + review velocity" },
                  { ch: "AI Receptionist", standalone: "Fewer missed leads", integrated: "Missed leads captured + CRM pipeline automated" },
                  { ch: "Reputation Management", standalone: "Better ratings", integrated: "Ratings + referral volume + map pack signal" },
                  { ch: "All channels integrated", standalone: "—", integrated: "Each channel amplifies the others — compounding ROI" },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-3 border border-border/60 font-semibold text-foreground bg-card/30">{row.ch}</td>
                    <td className="p-3 border border-border/60 text-foreground/70">{row.standalone}</td>
                    <td className="p-3 border border-border/60 text-primary font-bold">{row.integrated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7 — WHY WE WIN ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" /> WHY WE WIN
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
              No Templates. No Generalists. No Excuses. Why GrowSmallBiz Outperforms Every Agency That's Failed Your Pleasant Hill Business Before.
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Pleasant Hill's SERP leaders are template agencies with no knowledge of Contra Costa Blvd, Diablo Valley College's daily population impact, or the BART-connected mobile search behavior that defines how Pleasant Hill residents find and hire service providers. Here is what makes the GrowSmallBiz system consistently outperform them in this market:</p>
          </div>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead><tr>
                <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">Advantage</th>
                <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">Template Agencies (Current SERP leaders)</th>
                <th className="p-3 text-left font-bold text-primary bg-card/80 border border-border/60">GrowSmallBiz</th>
              </tr></thead>
              <tbody>
                {[
                  { adv: "Local presence", them: "Remote — no Contra Costa County footprint", us: "Danville HQ — 15 miles from Pleasant Hill" },
                  { adv: "Pleasant Hill specificity", them: "Generic Bay Area template", us: "Contra Costa Blvd, DVC, BART, 680 corridor" },
                  { adv: "Services", them: "SEO only or ads only", us: "Full-stack: SEO + Ads + Web + AI + CRM + Reputation" },
                  { adv: "AI integration", them: "None or bolt-on", us: "Native AI SEO, AI Receptionist, AI QuadBots" },
                  { adv: "Vertical focus", them: "Any business", us: "Local service businesses only — purpose-built" },
                  { adv: "Contracts", them: "Annual lock-in", us: "Month-to-month — accountable to results" },
                  { adv: "Reporting", them: "Traffic and rankings", us: "Leads, calls, appointments, cost per acquisition" },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-3 border border-border/60 font-semibold text-foreground bg-card/30">{row.adv}</td>
                    <td className="p-3 border border-border/60 text-foreground/70">{row.them}</td>
                    <td className="p-3 border border-border/60 text-primary font-bold">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-foreground/80 leading-relaxed max-w-4xl mx-auto">The agencies currently ranking for Pleasant Hill digital marketing keywords built their pages from Bay Area templates applied identically across dozens of cities. Not one of them anchors their content to Contra Costa Blvd, Diablo Valley College, or the specific community dynamics of Pleasant Hill's position between Walnut Creek and Concord. GrowSmallBiz builds your Pleasant Hill strategy from the specific competitive landscape of this specific market — because that specificity is what converts this community's high-income, review-driven, mobile-first population into your clients.</p>
        </div>
      </section>

      {/* Founder CTA */}
      <PersonCTA title="Let's Build Your Growth Engine" description="If you want AI-powered client acquisition systems, done-for-you execution, adaptive strategy, and a clear multi-channel dashboard without patching together disconnected tools, start with a free strategy call." buttonText="Schedule Strategy Call" buttonHref={strategyCallUrl} sectionClassName="py-16" />

      {/* ===== SECTION 8 — FAQ ===== */}
      <FAQSection
        title="Frequently Asked Questions — Pleasant Hill Digital Marketing"
        faqs={[
          { question: "How long does it take to see SEO results in Pleasant Hill?", answer: "Local SEO and organic rankings typically show meaningful movement within 60–90 days. Significant lead volume growth is usually seen within 6 months. Paid advertising can generate qualified leads within days of campaign launch. We set realistic, honest expectations during the strategy call based on your specific starting point and the Pleasant Hill competitive landscape — which, for the primary keyword at KD 8, is unusually open compared to every other city in our service area." },
          { question: "Do you serve areas beyond Pleasant Hill?", answer: "Yes. GrowSmallBiz serves businesses throughout the Diablo Valley and 680 corridor — Pleasant Hill, Walnut Creek, Concord, Martinez, Danville, San Ramon, and surrounding communities. We understand this specific market and the competitive dynamics between these cities because we are headquartered in Contra Costa County." },
          { question: "What makes GrowSmallBiz different from other digital marketing agencies in Pleasant Hill?", answer: "Most agencies serve any business and apply a generic playbook. GrowSmallBiz serves one audience — local service business owners — and brings a fully integrated system of SEO, paid advertising, web design, AI automation, and reputation management built specifically for that audience. We also combine traditional SEO with AEO and GEO capabilities that position your business across the emerging AI search landscape, not just Google's traditional blue-link results." },
          { question: "How transparent is your pricing and reporting?", answer: "We provide clear, outcome-focused reporting showing leads generated, calls received, appointments booked, and cost per acquisition — not impressions, follower counts, or vanity metrics. Pricing is tailored to your business needs and budget, with no hidden fees. We discuss all costs upfront during the strategy call. If a campaign isn't performing, we tell you — and we fix it." },
          { question: "Do you manage Google Local Services Ads (LSA) for Pleasant Hill businesses?", answer: "Yes. Google LSA management is available for eligible verticals in Pleasant Hill — including HVAC, plumbing, electrical, dental, chiropractic, and auto services. LSA is included in our Authority package and can be added to other packages as needed. We optimize your LSA profile, manage bids, and monitor performance to maximize qualified lead volume from this channel." },
          { question: "Why should a Pleasant Hill business choose a local agency over a national one?", answer: "Because we operate in the same county. GrowSmallBiz is headquartered 15 miles from Pleasant Hill in Danville, CA. We know the Contra Costa Blvd corridor, understand seasonal demand patterns in this market, and know how Pleasant Hill customers — BART commuters, dual-income homeowners, health-conscious professionals — search, compare, and decide. A national agency treats Pleasant Hill as a geographic parameter. We treat it as our backyard." },
          { question: "Does the Pleasant Hill Chamber of Commerce membership benefit local SEO?", answer: "Yes — and it is a meaningful signal, not just a badge. The Pleasant Hill Chamber's Marketing & Advertising category directory (business.pleasanthillchamber.com) appears at position #5 in local search results for the primary keyword 'digital marketing agency pleasant hill ca' — confirmed in Search Atlas SERP data. A verified member listing provides a locally-relevant citation that feeds into Google's local authority signals. This is the same SEO pattern that makes the San Ramon and Concord chamber listings valuable working assets for GrowSmallBiz clients." },
        ]}
        schemaType="FAQPage"
        contactCTA={{ ...baseContactCTA, title: "Have more questions about marketing in Pleasant Hill?", description: "We're here to help. Reach out to us for a personalized consultation.", tagline: "Let's grow your Pleasant Hill business together." }}
      />

      {/* ===== SECTION 9 — FINAL CTA ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight mb-6 bg-gradient-heading bg-clip-text text-transparent">
              Every Day You Wait, Your Competitors Book Another Pleasant Hill Customer That Should Have Been Yours.
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Pleasant Hill's local search landscape is open. The dominant SERP competitors are thin template pages from agencies with no genuine knowledge of this community. The map pack positions for most local service categories in Pleasant Hill are not locked — they are available to the business that builds a properly structured local presence first and maintains it consistently.</p>
            <p className="text-foreground/80 leading-relaxed mb-4">The businesses investing in digital marketing today are building advantages that compound over time. Every month your Pleasant Hill competitors spend outranking you online is another month of qualified leads going to someone else. The businesses that act now are the ones who own their market a year from now.</p>
            <p className="text-foreground/80 leading-relaxed mb-6">GrowSmallBiz gives Pleasant Hill service businesses the integrated marketing system that wins in a high-income, mobile-first, review-driven market: one connected platform spanning awareness to retention, powered by AI, and managed by a team based 15 miles away in Danville.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <p className="text-primary text-sm font-medium mt-3">No commitment. No pressure. Just a clear path forward for your business.</p>
          </div>
        </div>
      </section>

      <ConsultationFormSection utmCampaign="pleasant-hill-consultation" utmMedium="pleasant-hill-ca" />

      {/* ===== SECTION 10 — RELATED CITIES ===== */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-6">If your business also serves nearby communities, explore our pages for:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Martinez", to: "/locations/martinez-ca/" },
              { label: "Concord", to: "/locations/concord-ca/" },
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

export default PleasantHillCA;
