import { Header } from "@/components/layout/Header";
import pleasantHillHero from "@/assets/pleasant-hill-hero.jpg";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Phone, Shield, CheckCircle, Search, Target, Star, Users, Home, Heart, Building2, UtensilsCrossed, BarChart3, TrendingUp } from "lucide-react";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
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
        <title>Digital Marketing Agency in Pleasant Hill, CA | GrowSmallBiz</title>
        <meta name="description" content="GrowSmallBiz helps Pleasant Hill local service businesses rank higher, generate more leads, and grow faster with AI-powered digital marketing. Schedule your free strategy call today." />
        <link rel="canonical" href="https://growsmallbiz.io/locations/pleasant-hill-ca/" />
      </Head>
      <ServiceJsonLd
        serviceName="Digital Marketing Agency in Pleasant Hill, CA"
        serviceType="Digital Marketing"
        description="GrowSmallBiz helps Pleasant Hill local service businesses rank higher, generate more leads, and grow faster with AI-powered digital marketing."
        url="/locations/pleasant-hill-ca/"
        breadcrumbs={[
          { name: "Locations We Serve", url: "/locations/locations-we-serve/" },
          { name: "Pleasant Hill, CA", url: "/locations/pleasant-hill-ca/" },
        ]}
      />
      <Header />
      <main id="main-content">

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <img src={pleasantHillHero} alt="GrowSmallBiz digital marketing agency serving Pleasant Hill CA Contra Costa County local service businesses" width={1920} height={768} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: `hsl(var(--background) / 0.82)` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="service-badge mb-4 animate-fade-up">
              <MapPin className="w-4 h-4" />
              <span>Pleasant Hill, CA — Local Service Business Marketing | 680 Corridor</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 animate-fade-up leading-tight">
              Digital Marketing Agency in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Pleasant Hill, CA</span>
            </h1>
            <h2 className="max-w-3xl mx-auto text-xl md:text-2xl text-foreground/90 font-display font-semibold animate-fade-up mt-4" style={{ animationDelay: "0.05s" }}>
              Pleasant Hill local service businesses — HVAC, dental, chiropractic, auto repair, real estate, and med spa — hire GrowSmallBiz to rank higher on Google, capture more leads, and grow faster with AI-powered marketing built for the 680 corridor.
            </h2>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up mt-6" style={{ animationDelay: "0.1s" }}>
              GrowSmallBiz is headquartered in Danville, CA — 15 miles south of Pleasant Hill, within the same Contra Costa County. We are not a remote agency managing your account from across the country. We know this market because we operate in it.
            </p>
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
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-accent-foreground">
            <a href="https://members.walnut-creek.com/list/Details/growsmallbiz-digital-marketing-4248068" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" /> Walnut Creek Chamber of Commerce
            </a>
            <span className="text-accent-foreground/40">|</span>
            <a href="https://business.danvilleareachamber.com/list/member/growsmallbiz-digital-marketing-10687" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" /> Danville Area Chamber of Commerce
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
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Pleasant Hill Business</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">The Pleasant Hill SERP landscape is occupied by template agencies with no local presence and thin competitor pages scoring under 50 with fewer than 600 words. The primary keyword carries a Keyword Difficulty of 8 — the lowest of any city in our Contra Costa County footprint. Here is what makes GrowSmallBiz the right agency to own that position.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "Closest integrated agency:", body: "Based in Danville, 15 miles from Pleasant Hill via I-680. The agencies currently ranking for Pleasant Hill keywords are either out-of-state template agencies or single-channel providers. GrowSmallBiz is the nearest full-service integrated marketing agency serving Contra Costa County local service businesses." },
              { label: "Integrated, not fragmented:", body: "One system covering awareness, lead capture, AI follow-up, nurture, and reputation. No separate vendors pointing fingers. One team accountable for your results across every channel." },
              { label: "Diablo Valley market knowledge:", body: "We know the Contra Costa Blvd corridor, the competitive dynamics between Pleasant Hill, Walnut Creek, and Concord, and how Pleasant Hill's BART-connected, mobile-first professional community searches, compares, and decides." },
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

      {/* ===== MARKET SECTION ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" /> LOCAL MARKET
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Your Competitors Are Winning in Pleasant Hill Search Results.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Here's Exactly Why — and How to Take It Back.</span>
            </h2>
          </div>

          {/* Market Snapshot Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Population", value: "~38,000 residents" },
              { label: "Median Household Income", value: "$90,000+" },
              { label: "ZIP Code", value: "94523" },
              { label: "College Anchor", value: "DVC — 20,000+ students" },
            ].map((stat, i) => (
              <div key={i} className="bg-card/50 border border-border/60 rounded-xl p-4 text-center">
                <p className="text-2xl font-display font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {[
              { title: "Contra Costa Blvd commercial corridor", body: "The primary commercial corridor runs along Contra Costa Blvd — one of the most competitive stretches of local commerce in the Diablo Valley. Medical and dental offices, chiropractic and wellness practices, HVAC and home service contractors, auto repair shops, real estate offices, and med spas all compete for the same digital real estate. Highway 680 creates a continuous competitive zone — businesses in Walnut Creek and Concord actively invest in SEO and paid advertising, and their digital reach extends directly into Pleasant Hill." },
              { title: "BART-connected, mobile-first community", body: "Pleasant Hill's BART station connects residents to San Francisco, Oakland, and the Bay Area tech corridor. This community is digital-native and mobile-first. They search on their phone. They read Google reviews before calling. They trust businesses that rank, look credible online, and respond fast — and they hire those businesses instead of their competitors." },
              { title: "Why Pleasant Hill is a high-priority digital marketing market", body: "Affluent, high-intent searchers with above-average income who convert at higher rates. Mobile-first BART commuters who search on mobile Google and Maps. Strong review culture where residents actively consult Google reviews. Rising digital competition where the gap between strong and weak digital presence widens every quarter. And the lowest keyword difficulty on the 680 corridor — KD 8 — meaning the field is nearly empty and the first well-built, locally-anchored page will own it." },
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
              The Local Search Gap Costing Most Pleasant Hill Service Businesses{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">10–15 Leads Every Month</span>
            </h2>
          </div>
          <div className="prose prose-lg prose-invert max-w-none space-y-6">
            <p className="text-foreground/90 leading-relaxed">According to <a href="https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/local-search-conversion-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Think with Google</a>, 76% of consumers who perform a local search on their smartphone visit or contact a business within 24 hours. In Pleasant Hill, where over 68% of those searches occur on mobile devices, map pack visibility is the primary gateway between your business and a new client. Yet <a href="https://www.brightlocal.com/research/local-consumer-review-survey-2024/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BrightLocal research</a> shows that 81% of consumers use Google to evaluate local businesses and <a href="https://www.brightlocal.com/resources/local-seo-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">56% have not fully optimized their Google Business Profile</a>.</p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Target className="w-4 h-4" /> SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              AI-Powered Digital Marketing Services for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Pleasant Hill, CA Businesses</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Every service below was built for one audience: local service business owners in the 680 corridor. Here is how each applies to your Pleasant Hill market.</p>
          </div>

          {/* 7 Service Blocks */}
          {[
            { num: "1", title: "Managed AI SEO", subtitle: "Pleasant Hill Business Impact", desc: "Our flagship service combines advanced AI tooling with expert human strategy to identify every ranking opportunity available to your Pleasant Hill business and capture it systematically. Handle keyword research, content development, competitive gap analysis, and ongoing optimization — so you rank for the searches that bring real customers through your door.", bullets: ["Rank for 'digital marketing agency pleasant hill ca' (KD: 8), 'local seo pleasant hill ca,' and 'seo services pleasant hill ca' — keywords with thin competition and high buyer intent", "Outrank South Street & Co. (509 words, score 47) and Local SEO Guide (1,001 words, score 51) — the two weakest competitors currently holding positions for your primary keywords", "Capture 'contra costa county digital marketing' (KD: 23) — a geo-broad keyword with virtually no competing service pages"] },
            { num: "2", title: "Local SEO — Map Pack & Google Business Profile", subtitle: "", desc: "Showing up in the Google Local Pack is the highest-leverage position available for any Pleasant Hill service business. We optimize your Google Business Profile, build authoritative local citations across Contra Costa County directories, and execute a map pack ranking strategy designed to put your business at the top of results for Pleasant Hill, Walnut Creek, Concord, and Martinez.", bullets: ["Dominate the map pack for your service category across the 680 corridor — the position that captures the highest share of local search clicks", "Build citations across Contra Costa County directories including the Pleasant Hill Chamber directory (confirmed ranking at #5 for the primary keyword)", "Google Business Profile optimization that captures the BART commuter's phone search and the homeowner's weekend emergency query"] },
            { num: "3", title: "On-Page SEO", subtitle: "", desc: "Every page of your website is a ranking opportunity. We optimize title tags, meta descriptions, heading structure, internal linking, and content — aligned with the specific keywords Pleasant Hill and Diablo Valley customers are searching.", bullets: ["Turn every service page into a lead-generating asset targeting the exact queries your Pleasant Hill customers are entering into Google", "Capture long-tail searches like 'hvac contractor pleasant hill ca,' 'dentist near contra costa blvd,' and 'chiropractic pleasant hill 94523'"] },
            { num: "4", title: "Technical SEO", subtitle: "Pleasant Hill Business Impact", desc: "A slow or poorly structured site undermines every other marketing effort. We address site speed, mobile performance, crawlability, indexation, schema markup, and Core Web Vitals — ensuring your site performs at the level Google demands for the mobile-first audience that defines Pleasant Hill search behavior.", bullets: ["Eliminate the technical issues that quietly suppress your rankings and drive mobile visitors away before they can convert", "LocalBusiness schema correctly implemented with Pleasant Hill-specific areaServed markup and sameAs citations"] },
            { num: "5", title: "Answer Engine Optimization (AEO) & Generative Engine Optimization (GEO)", subtitle: "Pleasant Hill Business Impact", desc: "AI assistants, featured snippets, voice search, Google AI Overviews, ChatGPT, and Perplexity are reshaping how Pleasant Hill residents find local businesses. AEO and GEO position your business to be cited, recommended, and surfaced across these emerging discovery channels.", bullets: ["Be the answer surfaced in Google AI Overview when a Pleasant Hill resident asks 'who is the best HVAC contractor near me'", "Get cited in ChatGPT and Perplexity responses to 'find a dentist in Pleasant Hill CA 94523'"] },
            { num: "6", title: "Google Ads / PPC", subtitle: "Pleasant Hill Business Impact", desc: "When you need leads this week — not six months from now — targeted Google Ads deliver. We build and manage PPC campaigns for Pleasant Hill businesses focused on high-intent Diablo Valley searches, with geographic targeting that captures searches along the full 680 corridor. Every dollar is tracked and every campaign is optimized for conversion.", bullets: [] },
            { num: "7", title: "AI Client Growth System — Receptionist, QuadBots & CRM Automation", subtitle: "Pleasant Hill Business Impact", desc: "Pleasant Hill's BART-connected, professionally-oriented residents inquire at all hours. Our AI Client Growth System answers calls and web inquiries around the clock — qualifying leads, answering common questions, and booking appointments automatically so you never miss a customer because you were unavailable.", bullets: ["AI Receptionist: answers missed calls 24/7, captures caller information, responds to common questions, and books appointments automatically — capturing the evening BART commuter inquiry and the weekend homeowner call", "AI QuadBots: conversational AI managing web chat, SMS, email, and voice interactions simultaneously", "SMART nurture sequences: automated CRM workflows sending the right message at the right time — appointment reminders, seasonal maintenance campaigns, renewal notices, and review requests", "CRM integration and lead tracking: every inquiry tracked from first contact to closed job, giving you complete visibility into your Pleasant Hill marketing ROI"] },
          ].map((svc, i) => (
            <div key={i} className={i === 0 ? "mt-0" : "mt-16 pt-10 border-t border-border/30"}>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                {svc.num}. <span className="text-transparent bg-clip-text bg-gradient-primary">{svc.title}</span>
              </h3>
              <p className="text-foreground/90 leading-relaxed mb-6">{svc.desc}</p>
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
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">See If We're the Right Fit for Pleasant Hill</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">GrowSmallBiz works exclusively with local service businesses in Pleasant Hill and surrounding Contra Costa County. We do not work with eCommerce stores, national retailers, or product-based businesses. Our systems are purpose-built for the verticals below — with genuine knowledge of Pleasant Hill's commercial corridors, competitive landscape, and the specific challenges of serving a BART-connected, high-income, review-driven market.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><Home className="w-6 h-6 text-primary" /></div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">HVAC & Home Service Contractors</h3>
              <p className="text-muted-foreground leading-relaxed">Pleasant Hill's strong homeowner base and established residential neighborhoods create consistent, year-round demand for HVAC, plumbing, electrical, roofing, and home service contractors. Competitors from Walnut Creek and Concord are actively competing for the same customers online — visibility in local search and the Google Map Pack is the deciding factor in who captures the job.</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">●</span>Year-round demand from a high homeowner-density market with above-average household income</li>
                <li className="flex gap-2"><span className="text-primary">●</span>AI Receptionist captures the evening call and weekend emergency — the two highest-value inquiry windows in home services</li>
                <li className="flex gap-2"><span className="text-primary">●</span>Map pack + organic ranking strategy positions your business above the national aggregators and out-of-county competitors</li>
              </ul>
            </div>
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><Heart className="w-6 h-6 text-primary" /></div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Health & Wellness — Dental, Chiropractic & Med Spa</h3>
              <p className="text-muted-foreground leading-relaxed">Pleasant Hill's affluent, health-conscious demographic — with median household income above $90,000 — is an ideal market for dental practices, chiropractic offices, and medical spas. We build the local SEO authority, Google Ads presence, and online reputation that fills appointment books with new patients from across the Diablo Valley.</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">●</span>Condition-specific SEO strategies targeting 'dentist near contra costa blvd,' 'chiropractor pleasant hill 94523,' and 'med spa diablo valley'</li>
                <li className="flex gap-2"><span className="text-primary">●</span>Reputation management builds the 4.5+ star profile that converts health-conscious Pleasant Hill residents</li>
                <li className="flex gap-2"><span className="text-primary">●</span>Google Ads for immediate new patient acquisition while SEO compounds in the background</li>
              </ul>
            </div>
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><Building2 className="w-6 h-6 text-primary" /></div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Realtors & Real Estate Professionals</h3>
              <p className="text-muted-foreground leading-relaxed">The Contra Costa County real estate market is competitive and active, with buyers relocating from San Francisco and Oakland and within the Diablo Valley itself. We help Pleasant Hill realtors build local SEO authority, digital advertising presence, and CRM automation needed to capture buyer and seller leads consistently — and stay top-of-mind through longer decision cycles.</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">●</span>Local SEO targeting buyers relocating from San Francisco and Oakland to the 680 corridor</li>
                <li className="flex gap-2"><span className="text-primary">●</span>CRM and LinkedIn Outreach automation that keeps Pleasant Hill realtors visible to prospects across longer 60–120 day decision cycles</li>
              </ul>
            </div>
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><UtensilsCrossed className="w-6 h-6 text-primary" /></div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Restaurants & Hospitality</h3>
              <p className="text-muted-foreground leading-relaxed">Diablo Valley College's 20,000+ daily population, the BART commuter flow through the Pleasant Hill station, and the city's professional resident base create sustained food service demand. We help Pleasant Hill restaurants build local map pack visibility, manage their online reputation, and turn Google searches into tables filled and orders placed.</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">●</span>Map pack visibility that captures the Diablo Valley College lunch crowd and the BART commuter's 'dinner near me' search</li>
                <li className="flex gap-2"><span className="text-primary">●</span>Review velocity management ensures your rating stays above the 4.2-star threshold where Google surfaces restaurants in competitive searches</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESULTS ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" /> RESULTS
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              What GrowSmallBiz Delivers for Pleasant Hill{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Local Service Businesses</span>
            </h2>
          </div>
          <div className="space-y-6 mb-14">
            <div className="bg-primary/5 border border-primary/30 rounded-xl p-6">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">CLIENT RESULT | HVAC & Home Services — Pleasant Hill, CA</p>
              <p className="text-2xl md:text-3xl font-display font-bold text-primary mb-3">+250% Inbound Calls in 6 Months</p>
              <p className="text-foreground/80 leading-relaxed">A Pleasant Hill HVAC and home services contractor was invisible in local search despite years in business. After launching Managed AI SEO and Local SEO, inbound calls increased by 250% within six months. The AI Receptionist captured after-hours and weekend leads that previously went to voicemail — and to competitors.</p>
            </div>
            <div className="bg-primary/5 border border-primary/30 rounded-xl p-6">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">CLIENT RESULT | Dental Practice — Diablo Valley</p>
              <p className="text-2xl md:text-3xl font-display font-bold text-primary mb-3">+180% New Patient Leads in 4 Months</p>
              <p className="text-foreground/80 leading-relaxed">A dental practice along the Contra Costa Blvd corridor had tried digital marketing before without results. After a full strategy overhaul — new conversion-optimized website, Local SEO, and Google Ads — new patient leads increased by 180% within four months. Transparent reporting showed exactly which campaigns were driving appointments.</p>
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-6">What Happens to Pleasant Hill Service Businesses After 90 Days with GrowSmallBiz</h3>
          <div className="overflow-x-auto mb-14">
            <table className="w-full text-sm border-collapse">
              <thead><tr>
                <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">Metric</th>
                <th className="p-3 text-left font-bold text-foreground bg-card/80 border border-border/60">Typical Outcome by Month 3</th>
                <th className="p-3 text-left font-bold text-primary bg-card/80 border border-border/60">Typical Outcome by Month 6</th>
              </tr></thead>
              <tbody>
                {[
                  { metric: "Organic search rankings", m3: "Meaningful improvement for primary keywords", m6: "Top 3–5 for target Pleasant Hill searches" },
                  { metric: "Google Map Pack", m3: "Appears for target categories", m6: "Consistent top-3 for Pleasant Hill + 680 corridor" },
                  { metric: "Inbound lead volume", m3: "25–40% increase over baseline", m6: "50–150%+ increase for home service / health verticals" },
                  { metric: "Cost per lead (Paid)", m3: "20–30% reduction vs pre-campaign", m6: "41–48% average reduction at full optimization" },
                  { metric: "Review rating", m3: "Review generation system active", m6: "4.5+ stars across Google, Yelp, and category platforms" },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-3 border border-border/60 font-semibold text-foreground bg-card/30">{row.metric}</td>
                    <td className="p-3 border border-border/60 text-foreground/70">{row.m3}</td>
                    <td className="p-3 border border-border/60 text-primary font-bold">{row.m6}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== DIFFERENTIATORS ===== */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" /> WHY WE WIN
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              No Templates. No Generalists. No Excuses. Why GrowSmallBiz Outperforms Every Agency That's Failed Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Pleasant Hill Business Before</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Pleasant Hill's SERP leaders are template agencies with no knowledge of Contra Costa Blvd, Diablo Valley College's impact on the local market, or the BART-connected mobile search behavior that defines how Pleasant Hill residents find and hire service providers.</p>
          </div>
          <div className="overflow-x-auto">
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
        </div>
      </section>

      <PersonCTA title="Let's Build Your Growth Engine" description="If you want AI-powered client acquisition systems, done-for-you execution, adaptive strategy, and a clear multi-channel dashboard without patching together disconnected tools, start with a free strategy call." buttonText="Schedule Strategy Call" buttonHref={strategyCallUrl} sectionClassName="py-16" />

      {/* ===== FAQ SECTION ===== */}
      <FAQSection
        title={<>Frequently Asked Questions — <span className="text-transparent bg-clip-text bg-gradient-primary italic">Pleasant Hill Digital Marketing</span></>}
        faqs={[
          { question: "How long does it take to see SEO results in Pleasant Hill?", answer: "Local SEO and organic rankings typically show meaningful movement within 60–90 days. Significant lead volume growth is usually seen within 6 months. Paid advertising can generate qualified leads within days of campaign launch. We set realistic, honest expectations during the strategy call based on your specific starting point and the Pleasant Hill competitive landscape — which, for the primary keyword at KD 8, is unusually open." },
          { question: "Do you serve areas beyond Pleasant Hill?", answer: "Yes. GrowSmallBiz serves businesses throughout the Diablo Valley and 680 corridor — Pleasant Hill, Walnut Creek, Concord, Martinez, Danville, San Ramon, and surrounding communities. We understand this specific market and the competitive dynamics between these cities because we are headquartered in Contra Costa County." },
          { question: "What makes GrowSmallBiz different from other digital marketing agencies in Pleasant Hill?", answer: "Most agencies serve any business and apply a generic playbook. GrowSmallBiz serves one audience — local service business owners — and brings a fully integrated system of SEO, paid advertising, web design, AI automation, and reputation management built specifically for that audience. We also combine traditional SEO with AEO and GEO capabilities that position your business across the emerging AI search landscape, not just Google's traditional results." },
          { question: "How transparent is your pricing and reporting?", answer: "We provide clear, outcome-focused reporting showing leads generated, calls received, appointments booked, and cost per acquisition — not impressions, follower counts, or vanity metrics. Pricing is tailored to your business needs and budget, with no hidden fees. We discuss all costs upfront during the strategy call. If a campaign isn't performing, we tell you — and we fix it." },
          { question: "Do you manage Google Local Services Ads (LSA) for Pleasant Hill businesses?", answer: "Yes. Google LSA management is available for eligible verticals in Pleasant Hill — including HVAC, plumbing, electrical, dental, chiropractic, and auto services. We optimize your LSA profile, manage bids, and monitor performance to maximize qualified lead volume from this channel." },
          { question: "Why should a Pleasant Hill business choose a local agency over a national one?", answer: "Because we operate in the same county. GrowSmallBiz is headquartered 15 miles from Pleasant Hill in Danville, CA. We know the Contra Costa Blvd corridor, understand seasonal demand patterns in this market, and know how Pleasant Hill customers — BART commuters, dual-income homeowners, health-conscious professionals — search, compare, and decide. A national agency treats Pleasant Hill as a geographic parameter. We treat it as our backyard." },
          { question: "Does the Pleasant Hill Chamber of Commerce membership benefit local SEO?", answer: "Yes — and it is a meaningful signal, not just a badge. The Pleasant Hill Chamber's Marketing & Advertising category directory (business.pleasanthillchamber.com) appears at position #5 in local search results for the primary keyword 'digital marketing agency pleasant hill ca' — confirmed in the Search Atlas SERP report. A verified member listing provides a locally-relevant citation that feeds into Google's local authority signals." },
        ]}
        schemaType="FAQPage"
        contactCTA={{ ...baseContactCTA, title: "Have more questions about marketing in Pleasant Hill?", description: "We're here to help. Reach out to us for a personalized consultation.", tagline: "Let's grow your Pleasant Hill business together." }}
      />

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight mb-6">
              Every Day You Wait, Your Competitors Book Another Pleasant Hill Customer That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Should Have Been Yours</span>
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Pleasant Hill's local search landscape is open. The dominant SERP competitors are template agencies with no genuine knowledge of this community. The map pack positions for most local service categories in Pleasant Hill are not locked — they are available to the business that builds a properly structured local presence first and maintains it consistently.</p>
            <p className="text-foreground/80 leading-relaxed mb-4">GrowSmallBiz gives Pleasant Hill service businesses the integrated marketing system that wins in a high-income, mobile-first, review-driven market: one connected platform spanning awareness to retention, powered by AI, and managed by a team based 15 miles away in Danville.</p>
            <p className="text-foreground/70 font-semibold mt-6">No long-term contracts. No templates. No excuses. Just one integrated system built specifically for your Pleasant Hill business.</p>
          </div>
        </div>
      </section>

      <PersonCTA title="Schedule Your Free Strategy Call" description="Receive a personalized strategy session — local SEO audit, competitive analysis, and a clear growth roadmap built specifically for your Pleasant Hill service business." buttonText="Schedule Strategy Call" buttonHref={strategyCallUrl} sectionClassName="py-16" />

      <ConsultationFormSection utmCampaign="pleasant-hill-consultation" utmMedium="pleasant-hill-ca" />

      {/* ===== CROSS-LINK PILLS ===== */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-6">If your business also serves nearby communities, explore our pages for:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Walnut Creek", to: "/locations/walnut-creek-ca/" },
              { label: "Concord", to: "/locations/concord-ca/" },
              { label: "Martinez", to: "/locations/martinez-ca/" },
              { label: "Danville", to: "/locations/danville-ca/" },
              { label: "San Ramon", to: "/locations/san-ramon-ca/" },
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
