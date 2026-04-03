import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import sanRamonHero from "@/assets/san-ramon-hero.jpg";

import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { MapPin, TrendingUp, AlertTriangle, Briefcase, Globe, Search, Target, Zap, Home, Heart, Building2, UtensilsCrossed, Brain, Eye, BarChart3, Users, Star, ArrowRight } from "lucide-react";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
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
        <title>Digital Marketing San Ramon CA | GrowSmallBiz</title>
        <meta name="description" content="GrowSmallBiz helps San Ramon, CA local service businesses grow with website design, local SEO, paid ads, marketing automation, and AI-assisted lead conversion systems." />
        <link rel="canonical" href="https://growsmallbiz.io/locations/san-ramon-ca/" />
      </Head>
      <ServiceJsonLd
        serviceName="Digital Marketing San Ramon CA"
        serviceType="Digital Marketing"
        description="GrowSmallBiz helps San Ramon, CA local service businesses grow with website design, local SEO, paid ads, marketing automation, and AI-assisted lead conversion systems."
        url="/locations/san-ramon-ca/"
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
            {/* City pill */}
            <div className="service-badge mb-4 animate-fade-up">
              <MapPin className="w-4 h-4" />
              <span>San Ramon, CA</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 animate-fade-up leading-tight">
              Digital Marketing for San Ramon, CA Local Service Businesses —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Built for a Market That Expects Speed, Trust, and Professionalism</span>
            </h1>

            {/* Short opening line */}
            <p
              className="text-lg md:text-xl text-foreground/80 mb-8 animate-fade-up max-w-3xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.1s" }}
            >
              San Ramon is not a market where a business can rely on a basic website and inconsistent follow-up and still expect strong growth.
            </p>

            {/* CTA row */}
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
                <Link to="/services/">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution Section */}
      <section className="py-16" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 12%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-display font-semibold text-primary mb-3">The Disconnected Marketing Problem</h3>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                San Ramon is not a market where a business can rely on a basic website and inconsistent follow-up and still expect strong growth. It is a city with affluent households, a major employment corridor, established neighborhoods, and buyers who often compare options quickly. That creates real opportunity, but it also raises the standard. A business may be good at what it does and still lose leads because its marketing feels fragmented, its website feels underpowered, or its follow-up is slower than the market expects.
              </p>
            </div>
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-display font-semibold text-primary mb-3">One Connected Growth System</h3>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                GrowSmallBiz is a digital marketing agency serving San Ramon and the wider Tri-Valley with one connected system built for local service businesses. We provide digital marketing services and marketing services that help businesses connect visibility, lead capture, follow-up, conversion, and retention so growth does not depend on disconnected vendors, scattered tools, or inconsistent execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Why San Ramon Behaves Like Two Markets at Once */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" /> DUAL MARKET
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Why San Ramon Behaves Like{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Two Markets at Once</span>
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">One reason San Ramon is different is that it does not behave like a purely residential local market.</p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">It has a strong homeowner base and family-driven household demand, but it also has a major business and daytime economic presence connected to Bishop Ranch and the broader commercial ecosystem around City Center. That means local buying behavior is influenced by both residential life and a larger professional-business environment.</p>
            </div>
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">For a local service business, that matters because the competition is not just the company down the street. It is also the business from a nearby city that looks more polished, responds faster, or presents itself more clearly online.</p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">That creates a market where:</p>
              <ul className="list-disc list-inside text-foreground/90 space-y-1 mt-3">
                <li>trust has to be built quickly</li>
                <li>response speed matters more</li>
                <li>presentation matters more</li>
                <li>and a disconnected marketing setup gets exposed faster</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: What Usually Breaks First */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" /> THE PROBLEM
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              What Usually Breaks First for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">San Ramon Businesses</span>
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">The issue is usually not a total lack of marketing. The issue is that the system is not strong enough to support the demand it is trying to create.</p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-3">A business may have:</p>
              <ul className="list-disc list-inside text-foreground/90 space-y-1">
                <li>a decent website that does not convert well enough</li>
                <li>SEO that improves impressions but not enough qualified leads</li>
                <li>Google Ads that generate traffic without stronger landing pages</li>
                <li>reviews that are respectable but not actively supported</li>
                <li>follow-up that depends too much on manual effort</li>
                <li>multiple tools for calls, forms, texting, and pipelines that do not work together cleanly</li>
              </ul>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mt-4">That creates a common pattern. The business is visible enough to get some attention, but not organized enough to turn enough of that attention into revenue.</p>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Where San Ramon Businesses Most Often{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Lose Opportunities</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                { title: "They look acceptable, but not clearly stronger than the alternatives.", desc: "In a market with higher expectations, acceptable often loses to whoever feels more trustworthy and easier to work with." },
                { title: "They respond too slowly during peak demand.", desc: "A missed call or delayed reply can cost the job, especially in home services and appointment-driven categories." },
                { title: "They separate visibility from conversion.", desc: "Traffic comes in, but the site, forms, and follow-up are not strong enough to convert it efficiently." },
                { title: "They underuse the advantage of being in San Ramon.", desc: "A local presence matters, but only if the website, business profile, reviews, and content actually reinforce it." },
                { title: "They focus too much on acquisition and not enough on retention.", desc: "That forces the business to keep paying to replace demand it should be keeping warmer." },
              ].map((item, i) => (
                <div key={i} className="bg-card/50 border border-border/60 rounded-xl p-5">
                  <p className="font-semibold text-foreground mb-2">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed text-center mt-4">That is why GrowSmallBiz is built around a connected growth system instead of one-off tactics.</p>
          </div>
        </div>
      </section>

      {/* Section: Why San Ramon Is a Market Worth Winning */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" /> LOCAL MARKET
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Why San Ramon Is a Market{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Worth Winning</span>
            </h2>
          </div>

          {/* Market Snapshot Stat Band */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {[
              { figure: "5.9 million sq. ft.", line: "Bishop Ranch office space" },
              { figure: "600+", line: "companies at Bishop Ranch" },
              { figure: "21,000+", line: "daily office workers" },
              { figure: "300,000 sq. ft.", line: "City Center Bishop Ranch retail, dining, and entertainment" },
            ].map((stat, i) => (
              <div key={i} className="bg-card/50 border border-border/60 rounded-xl p-5 text-center">
                <p className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">{stat.figure}</p>
                <p className="text-xs md:text-sm text-muted-foreground leading-snug">{stat.line}</p>
              </div>
            ))}
          </div>

          {/* Body Copy — Editorial Card Layout */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Paragraph 1 — Full-width lead card */}
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Market Snapshot</p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">San Ramon is a strong market for businesses that can earn trust quickly and handle demand well. It combines household buying power, strong home values, an established homeowner base, and a significant commercial footprint in one local area. That creates opportunity for businesses that are visible, responsive, and well presented.</p>
            </div>

            {/* Paragraphs 2 & 3 — Two-column row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Business Ecosystem</p>
                <p className="text-base text-foreground/90 leading-relaxed">The <a href="https://www.sanramon.ca.gov/visitors/community_profile" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">City of San Ramon's Community Profile</a> describes San Ramon as both one of the Bay Area's most desirable living areas and a significant regional employment center. The same official profile says <a href="https://www.sanramon.ca.gov/visitors/community_profile" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bishop Ranch</a> includes 5.9 million square feet of office space, more than 600 companies, and more than 21,000 daily office workers, while the City's <a href="https://www.sanramon.ca.gov/residents/city_center" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">City Center Bishop Ranch</a> page describes 300,000 square feet of retail, dining, and entertainment in the heart of Bishop Ranch. The <a href="https://www.census.gov/quickfacts/fact/table/sanramoncitycalifornia/INC110224" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">U.S. Census Bureau</a> also reflects San Ramon's household buying power, and the <a href="https://sanramon.org/about-us/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">San Ramon Chamber of Commerce</a> adds another layer of local business infrastructure through networking, visibility, advocacy, and community connection.</p>
              </div>
              <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">What the Market Can Support</p>
                <p className="text-base text-foreground/90 leading-relaxed mb-3">For a local business, that means San Ramon can support:</p>
                <ul className="list-disc list-inside text-foreground/90 space-y-1 text-sm mb-4">
                  <li>premium home service demand</li>
                  <li>appointment-driven health and wellness demand</li>
                  <li>consultation-driven professional services</li>
                  <li>repeat-visit local businesses</li>
                  <li>and competition across nearby cities where buyers still expect local relevance</li>
                </ul>
                <p className="text-base text-foreground/90 leading-relaxed">This is especially important for home services, health and wellness, real estate professionals, and other local businesses where trust, clarity, and responsiveness shape who gets chosen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Digital Marketing Services — Card Grid */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" /> SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Digital Marketing Services for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">San Ramon, CA Local Businesses</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">GrowSmallBiz provides the digital marketing services most local businesses actually need, but as one connected system rather than separate projects.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Globe,
                title: "Website Design for Small Businesses",
                description: <>A website should do more than explain what the business does. It should make the business feel professional, trustworthy, and easy to contact. Our <Link to="/services/website-design/" className="text-primary hover:underline">website design for small businesses</Link> focuses on stronger page structure, clearer calls to action, mobile responsiveness, and lead capture that supports real conversion. For San Ramon businesses, that often means improving the way the business is perceived in the first few seconds, not just making the design look newer.</>
              },
              {
                icon: Search,
                title: "SEO and Local SEO Services",
                description: <>Our <Link to="/services/seo-agency/" className="text-primary hover:underline">SEO and local SEO services</Link> help San Ramon businesses improve visibility where local buyers are already searching. That includes Google Business Profile support, service-page relevance, local landing-page strength, technical structure, and trust signals that help a business earn the click or call. Local SEO and search engine optimization work best when they are tied directly to how the business converts. The goal is not generic rankings. The goal is to show up in the right searches and look like the right next step once the buyer finds you.</>
              },
              {
                icon: Target,
                title: "Paid Ads Management with Google Ads, Local Services Ads, and Meta Ads",
                description: <><Link to="/services/paid-advertising/" className="text-primary hover:underline">Paid ads management</Link> helps San Ramon businesses create faster visibility and more controlled lead generation. Google Ads can capture high-intent demand. Local Services Ads can strengthen trust in eligible categories. Meta Ads can support remarketing, selective local reach, and awareness where it fits the business model. Paid campaigns work best when they are connected to strong landing pages, clearer offers, and better follow-up. Without that connection, ad spend can rise faster than business results.</>
              },
              {
                icon: Zap,
                title: "Marketing Automation, AI Receptionist, and Better Follow-Up",
                description: <><Link to="/services/marketing-automation-for-small-business/" className="text-primary hover:underline">Marketing automation</Link> helps businesses respond faster, nurture leads more consistently, and convert more opportunities without relying only on manual follow-up. That can include CRM workflows, AI Receptionist support, missed-call text-back, email and SMS follow-up, and reactivation systems. For many San Ramon businesses, this is where the hidden lift is found. The issue is often not that people are not interested. The issue is what happens after that interest appears.</>
              },
            ].map((service, i) => (
              <div key={i} className="feature-card-teal rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Built for How San Ramon Buyers Actually Search */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Search className="w-4 h-4" /> BUYER BEHAVIOR
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Built for How San Ramon Buyers{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Actually Search</span>
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">San Ramon buyers do not all search from the same context.</p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">Some are residents searching from home. Some are searching during the workday near business centers. Some are comparing providers across San Ramon, Danville, Dublin, Pleasanton, and other nearby cities. Some are looking for immediate service, while others are researching options more carefully.</p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">That means strong local marketing in San Ramon has to do more than generate visibility. It has to match the way real buyers compare choices in a city that blends residential demand with a stronger-than-average professional and commercial environment.</p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">A business can show up and still lose if the content feels thin, the message feels vague, or the follow-up path feels uncertain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Industry-Specific Marketing — Card Grid */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" /> INDUSTRIES
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Built for San Ramon's Most Important{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Local Categories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Home Service Contractors</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">San Ramon homeowners create demand for HVAC, plumbing, electrical, roofing, landscaping, pest control, and related trades. These categories often depend on urgency, trust, and response speed. The business that feels credible and reachable usually has the edge.</p>
              <p className="text-muted-foreground leading-relaxed">GrowSmallBiz helps home service businesses improve local visibility, stronger lead capture, and better speed to lead so more searches become booked work.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Health and Wellness Businesses</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">Dentists, med spas, chiropractors, physical therapists, and related providers depend heavily on reviews, credibility, and a smoother inquiry experience. Buyers compare carefully before booking, which means the digital experience influences trust before the first phone call.</p>
              <p className="text-muted-foreground leading-relaxed">GrowSmallBiz helps strengthen that path from discovery to inquiry so the business feels more trustworthy before the prospect ever reaches out.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Real Estate and Appointment-Driven Services</h3>
              <p className="text-muted-foreground leading-relaxed">San Ramon's household economics and regional overlap make visibility important, but lead handling matters just as much. Buyers, sellers, consultation prospects, and other appointment-driven leads often require stronger nurture and more consistent follow-up over time.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <UtensilsCrossed className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Restaurants and Repeat-Visit Local Businesses</h3>
              <p className="text-muted-foreground leading-relaxed">Repeat-visit local businesses need more than one-time discovery. They need stronger return traffic. Promotions, reactivation, customer communication, and loyalty-style outreach matter more here than in one-time purchase categories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Why San Ramon Businesses Need an AI-First Marketing Platform */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Brain className="w-4 h-4" /> AI-FIRST PLATFORM
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Why San Ramon Businesses Need an{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">AI-First Marketing Platform</span>
            </h2>
          </div>

          {/* Lead intro */}
          <div className="prose prose-lg prose-invert max-w-none mb-10">
            <p className="text-muted-foreground text-lg leading-relaxed text-center">An AI-first marketing platform should not mean replacing people with gimmicks. It should mean using <a href="https://www.census.gov/newsroom/blogs/research-matters/2024/12/ai-use-small-businesses.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AI</a> where it creates practical leverage for a smaller team that wants to respond faster and operate more consistently.</p>
          </div>

          {/* Patchwork setup card */}
          <div className="rounded-xl border border-border/60 bg-card/50 p-6 md:p-8 mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">The Patchwork Problem</span>
            <p className="text-muted-foreground leading-relaxed mb-3">In San Ramon, that matters because many businesses still rely on a patchwork setup:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>one tool for forms</li>
              <li>another for calls</li>
              <li>another for ads</li>
              <li>another for follow-up</li>
              <li>and too much manual effort trying to connect all of it</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">AI helps when it is used to reduce those gaps.</p>
          </div>

          {/* Where AI Helps Most subheading */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Where AI Helps Most in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">San Ramon</span>
            </h3>
          </div>

          {/* Benefit cards — 2-column grid */}
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {[
              { title: "Faster first response", desc: "A business can keep more prospects engaged when it replies quickly." },
              { title: "After-hours continuity", desc: "The business still feels reachable when staff are unavailable." },
              { title: "More consistent workflows", desc: "Follow-up steps happen more reliably across calls, forms, and messages." },
              { title: "Operational leverage", desc: "A smaller team can manage more demand without the same level of manual overhead." },
              { title: "Smarter campaign support", desc: "Optimization becomes more disciplined instead of purely reactive." },
            ].map((item, i) => (
              <div key={i} className="bg-card/50 border border-border/60 rounded-xl p-5">
                <p className="font-semibold text-foreground mb-2">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Closing card */}
          <div className="rounded-xl border border-border/60 bg-card/50 p-6 md:p-8">
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">The value of AI here is not novelty. It is that it helps the business lose fewer opportunities between visibility and conversion.</p>
          </div>
        </div>
      </section>

      {/* Section: AI Search Visibility Also Matters in San Ramon */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Eye className="w-4 h-4" /> AI SEARCH
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              AI Search Visibility Also Matters in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">San Ramon</span>
            </h2>
          </div>

          {/* Lead intro */}
          <div className="rounded-xl border border-border/60 bg-card/50 p-6 md:p-8 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">Search Behavior Is Changing</span>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">AI search visibility is becoming part of local visibility, not a separate channel. <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google</a> says the same foundational SEO best practices still apply to AI features such as AI Overviews and AI Mode. That means the businesses most likely to benefit are still the ones with stronger fundamentals:</p>
          </div>

          {/* Fundamentals card */}
          <div className="rounded-xl border border-border/60 bg-card/50 p-6 md:p-8 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">Stronger Fundamentals Win</span>
            <ul className="list-disc list-inside text-foreground/90 space-y-1">
              <li>better service pages</li>
              <li>clearer local relevance</li>
              <li>accurate business information</li>
              <li>stronger trust signals</li>
              <li>useful content</li>
              <li>and a technically sound site</li>
            </ul>
          </div>

          {/* Concluding card */}
          <div className="rounded-xl border border-border/60 bg-card/50 p-6 md:p-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">What This Means for San Ramon</span>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">For San Ramon businesses, that means thin local content is weak. Stronger, more useful, more trustworthy content is what helps the business hold visibility across both local search and AI-assisted discovery.</p>
          </div>
        </div>
      </section>

      {/* Section: Why Local Visibility Still Matters */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Eye className="w-4 h-4" /> LOCAL VISIBILITY
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Why Local Visibility Still Matters for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">San Ramon Businesses</span>
            </h2>
          </div>
          <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4"><a href="https://support.google.com/business/answer/7091?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google's Business Profile guidance</a> says businesses with complete and accurate information are more likely to appear in local search results, and that local results are mainly based on relevance, distance, and popularity.</p>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">In San Ramon, local visibility still affects who gets the inquiry, booking, or visit. Buyers compare quickly. They look at business profiles, service pages, websites, and reviews before they act. The businesses that are easiest to understand and easiest to trust usually have the advantage.</p>
          </div>
        </div>
      </section>

      {/* Section: How GrowSmallBiz Helps Turn Attention Into Revenue */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" /> GROWTH MODEL
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              How GrowSmallBiz Helps Turn Attention Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Revenue</span>
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">GrowSmallBiz is built around a connected model: Awareness, Lead Capture, Lead Nurture, Conversion, and Retention.</p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">Awareness comes from search visibility, paid reach, stronger positioning, and selective social media marketing support when it helps reinforce local recognition. Lead capture improves when websites, landing pages, forms, and contact paths reduce friction. Lead nurture uses CRM workflows, SMS, email, and AI-assisted follow-up so good prospects do not go cold. Conversion improves when response is faster and the handoff from inquiry to appointment is smoother. Retention grows through review generation, reactivation campaigns, ongoing customer communication, and reputation management that keeps the business top of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: What Businesses Usually Want to Improve in San Ramon */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" /> GAINS
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              What Businesses Usually Want to Improve in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">San Ramon</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto italic">This page uses a more San Ramon-specific gains structure instead of repeating the same proof-card pattern from other city pages.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Better visibility in a market with higher expectations", desc: "Not just more impressions, but stronger visibility that supports buyer trust." },
              { title: "A stronger first impression once buyers find the business", desc: "Because professionalism and clarity shape who gets contacted." },
              { title: "More reliable handling of leads across calls, forms, and messages", desc: "So good inquiries do not drift away." },
              { title: "More value from warm leads and existing customers", desc: "Especially for businesses that should not need to restart from zero every month." },
              { title: "A system that supports growth without creating more operational chaos", desc: "Because disconnected tools and disconnected vendors usually create more friction, not less." },
            ].map((item, i) => (
              <div key={i} className="feature-card-teal rounded-2xl p-6 text-center">
                <h3 className="text-lg font-display font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Representative Client Feedback */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" /> TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Representative{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Client Feedback</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto italic">These are placeholder-style testimonials, but they are written to fit San Ramon's themes of professionalism, responsiveness, and stronger system coordination.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { initials: "SR", role: "Owner", company: "San Ramon-Area Home Services Owner", quote: "What helped most was realizing that our issue was not just traffic. We already had some visibility, but too much was being lost between the inquiry and the actual follow-up." },
              { initials: "TV", role: "Manager", company: "Tri-Valley Practice Manager", quote: "The recommendations felt practical for a local business that needs both trust and consistency. It was less about marketing jargon and more about making the system work." },
              { initials: "EB", role: "Owner", company: "East Bay Professional Services Owner", quote: "They understood that in a market like San Ramon, looking credible is only one part of the job. The bigger value came from improving response, follow-through, and coordination." },
            ].map((t, i) => (
              <div key={i} className="p-6 feature-card-teal rounded-2xl">
                <p className="text-foreground/90 italic mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-primary via-orange-400 to-primary" />
                    <div className="relative w-10 h-10 rounded-full bg-card flex items-center justify-center text-primary font-bold text-sm">{t.initials}</div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.role}</p>
                    <p className="text-xs text-muted-foreground">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Why San Ramon Businesses Choose GrowSmallBiz */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4" /> WHY US
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Why San Ramon Businesses Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">GrowSmallBiz</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Built for Local Service Businesses", desc: "GrowSmallBiz is built for businesses that depend on local visibility, trust, and measurable lead flow." },
              { title: "Better Fit for Higher-Expectation Markets", desc: "San Ramon is a market where buyers compare quickly and expect more professionalism. Stronger systems matter more here." },
              { title: "Less Fragmentation, More Coordination", desc: "The goal is not one more tactic. It is to make the whole growth system work together." },
              { title: "Measured by Business Movement", desc: "The focus is not vanity metrics. It is better inquiries, better follow-up, better conversion, and better customer value." },
            ].map((item, i) => (
              <div key={i} className="feature-card-teal rounded-2xl p-6">
                <h3 className="text-lg font-display font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Serving San Ramon and the Wider Tri-Valley */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
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

          {/* Cross-link pills */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">If your business also serves nearby communities, explore our pages for:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Danville", to: "/locations/danville-ca/" },
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
        </div>
      </section>

      <FAQSection
        title={<>Frequently Asked Questions About <span className="text-transparent bg-clip-text bg-gradient-primary italic">Marketing in San Ramon, CA</span></>}
        faqs={[
          { question: "What types of businesses does GrowSmallBiz work with in San Ramon, CA?", answer: "GrowSmallBiz primarily works with local service businesses and repeat-visit local businesses, including home services, dentists, med spas, chiropractors, real estate professionals, restaurants, and other businesses that rely on local visibility, qualified inquiries, and consistent follow-up." },
          { question: "Is GrowSmallBiz only an SEO company?", answer: "No. SEO is one important part of the system, but GrowSmallBiz is not positioned as an SEO-only provider. The broader model includes website design, SEO, paid ads, marketing automation, and lead-handling improvements." },
          { question: "Can GrowSmallBiz help if my business already has a website?", answer: "Yes. Many businesses already have a website but still need stronger messaging, cleaner landing pages, better local visibility, stronger calls to action, or more effective follow-up. An existing website can often be improved rather than replaced immediately." },
          { question: "Do you offer Google Ads and Local Services Ads for San Ramon businesses?", answer: "Yes. GrowSmallBiz can support paid lead generation through Google Ads and Local Services Ads as part of a broader system that also includes landing pages, tracking, and lead follow-up." },
          { question: "How does AI improve local marketing for small businesses?", answer: "AI improves local marketing when it is used for practical business functions such as faster lead response, smarter follow-up, better workflow consistency, and more efficient optimization. The value is not the label. The value is better execution." },
          { question: "Why does local SEO still matter if search is becoming more AI-driven?", answer: "Because Google says the same foundational SEO best practices still apply to AI features, and local search visibility still depends on factors such as relevance, distance, and popularity. Strong local SEO and strong AI visibility increasingly reinforce each other instead of competing with each other." }
        ]}
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have questions about marketing in San Ramon?",
          description: "We're here to help you find the right strategy.",
          tagline: "Let's grow your San Ramon business together.",
        }}
      />

      <section id="final-cta" className="py-16" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <p className="text-primary font-medium mb-4">THE NEXT STEP</p>
            <h2 className="section-title">
              Ready to Build a Smarter Marketing System for Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">San Ramon Business</span>?
            </h2>
            <p className="section-description mt-4 mb-8">
              GrowSmallBiz helps San Ramon businesses connect website performance, search visibility, paid ads, follow-up, conversion, and retention into one practical system. That is the difference between paying for marketing activity and building a structure that supports real business growth.
            </p>
          </div>
          <CardCTA
            title="Schedule Your Free Marketing Assessment"
            description="If you want a smarter, more connected approach to digital marketing in San Ramon, GrowSmallBiz is built for that next step. We can look at where your current system is losing visibility, losing trust, or losing leads — and what a stronger local growth engine could look like."
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
