import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import walnutCreekHero from "@/assets/walnut-creek-hero.jpg";

import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { MapPin, TrendingUp, AlertTriangle, Briefcase, Globe, Search, Target, Zap, Brain, Eye, BarChart3, Users, Star, Home, Heart, Building2, Calendar, ArrowRight } from "lucide-react";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
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
        <title>Digital Marketing Walnut Creek CA | GrowSmallBiz</title>
        <meta name="description" content="GrowSmallBiz helps Walnut Creek, CA local service businesses grow with website design, local SEO, paid ads, marketing automation, and AI-assisted lead conversion systems." />
        <link rel="canonical" href="https://growsmallbiz.io/locations/walnut-creek-ca/" />
      </Head>
      <ServiceJsonLd
        serviceName="Digital Marketing Walnut Creek CA"
        serviceType="Digital Marketing"
        description="GrowSmallBiz helps Walnut Creek, CA local service businesses grow with website design, local SEO, paid ads, marketing automation, and AI-assisted lead conversion systems."
        url="/locations/walnut-creek-ca/"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 animate-fade-up leading-tight">
              Digital Marketing for Walnut Creek, CA Local Service Businesses —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Built for a Market Where Buyers Judge Quality Fast</span>
            </h1>

            {/* Opening paragraph */}
            <p
              className="max-w-3xl mx-auto text-base md:text-lg text-foreground/80 leading-relaxed mb-4 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Walnut Creek is not a market where a business wins just because it shows up. Buyers here often compare carefully, expect professionalism quickly, and make decisions based on more than price.
            </p>

            {/* Trust line */}
            <p className="max-w-3xl mx-auto text-sm md:text-base text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "0.15s" }}>
              As a Walnut Creek Chamber member, GrowSmallBiz stays connected to the local business community while helping local service businesses compete in Walnut Creek and the wider East Bay.
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

      {/* Problem / Solution Section */}
      <section className="py-16" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 12%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-display font-semibold text-primary mb-3">The Disconnected Marketing Problem</h3>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Walnut Creek is not a market where a business wins just because it shows up. Buyers here often compare carefully, expect professionalism quickly, and make decisions based on more than price. They look at the website, the reviews, the business profile, the tone, the speed of response, and how easy the business feels to trust. That is especially true for local service businesses in categories where the wrong choice feels costly.
              </p>
            </div>
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-display font-semibold text-primary mb-3">One Connected Growth System</h3>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                GrowSmallBiz is a digital marketing agency serving Walnut Creek and the wider East Bay with one connected system built for local service businesses. We provide digital marketing services and marketing services that help businesses turn visibility into trust, trust into inquiry, and inquiry into revenue without relying on disconnected vendors or scattered tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Why Walnut Creek Raises the Standard */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" /> THE CHALLENGE
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Why Walnut Creek{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Raises the Standard</span>
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">Some cities reward basic visibility. Walnut Creek usually rewards stronger positioning.</p>
            </div>
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base text-foreground/90 leading-relaxed">This is a market with affluence, density, established neighborhoods, active retail and commercial life, and buyers who are used to comparing options. That creates opportunity, but it also means average marketing becomes easier to ignore. A business may appear in search results, have a few decent reviews, and still lose because a competitor presents itself with more clarity and more confidence.</p>
            </div>
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base text-foreground/90 leading-relaxed">That is why local marketing in Walnut Creek often fails in a quieter way than in smaller cities. The business is not invisible. It just is not compelling enough, coordinated enough, or polished enough to become the obvious choice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: What Usually Holds Walnut Creek Businesses Back */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" /> THE PROBLEM
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              What Usually Holds Walnut Creek{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Businesses Back</span>
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">The problem is often not a lack of effort. It is that the effort does not build enough confidence.</p>
              <p className="text-base text-foreground/90 leading-relaxed mb-3">A business may have:</p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>a site that looks acceptable but does not feel strong enough</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>local SEO that improves visibility without improving trust</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>ads that create clicks without improving lead quality</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>reviews that are respectable but not actively reinforced</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>follow-up that feels slower than the market expects</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>too many separate tools shaping one customer experience</li>
              </ul>
            </div>

            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base text-foreground/90 leading-relaxed">That creates a common pattern. The business gets looked at, but not chosen often enough. It gets attention, but not enough of the best inquiries. It spends money, but not enough of that spend compounds into stronger positioning.</p>
            </div>

            {/* Where Walnut Creek Businesses Most Often Lose Revenue */}
            <div className="mt-8">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">Where Walnut Creek Businesses Most Often Lose Revenue</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "They look available, but not clearly better.", desc: "A buyer sees the business, but nothing creates enough confidence to make the next step obvious." },
                  { title: "They underestimate how much perception shapes conversion.", desc: "In a comparison-driven market, trust signals matter more than many owners realize." },
                  { title: "They treat channels separately.", desc: "Website, SEO, ads, and follow-up each get attention, but not as one system." },
                  { title: "They answer acceptably, not quickly.", desc: "In a market where buyers compare fast, good enough response speed still loses leads." },
                  { title: "They spend for acquisition but underuse retention.", desc: "That forces the business to keep buying attention it could have kept warmer." },
                ].map((item, i) => (
                  <div key={i} className="feature-card-teal rounded-2xl p-5">
                    <p className="text-foreground font-semibold mb-2">{item.title}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-card/50 border border-border/60 rounded-xl p-6 mt-6 text-center">
                <p className="text-foreground/90">That is why GrowSmallBiz is built around one connected growth system instead of isolated tactics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Why Walnut Creek Is a Market Worth Winning */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" /> LOCAL MARKET
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Why Walnut Creek Is a Market{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Worth Winning</span>
            </h2>
          </div>

          {/* Market Signal Band */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {[
              { line: "strong homeowner demand" },
              { line: "premium service expectations" },
              { line: "appointment-driven health and wellness demand" },
              { line: "cross-city buyer comparison throughout the East Bay" },
            ].map((signal, i) => (
              <div key={i} className="bg-card/50 border border-border/60 rounded-xl p-5 text-center">
                <p className="text-sm md:text-base font-display font-semibold text-primary leading-snug">{signal.line}</p>
              </div>
            ))}
          </div>

          {/* Body Copy — Editorial Card Layout */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Full-width lead card */}
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Market Snapshot</p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed"><a href="https://www.walnutcreekconnected.com/home/showdocument?id=31673&t=638580174769484169" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Walnut Creek</a> is a meaningful market for local businesses that can turn visibility into trust and trust into action. The city combines strong household economics, an active business environment, established residential demand, and buyers who are used to evaluating quality.</p>
            </div>

            {/* Ecosystem card */}
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Business Ecosystem</p>
              <p className="text-base text-foreground/90 leading-relaxed"><a href="https://www.walnutcreekconnected.com/business-support/resources-and-partnerships" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">City of Walnut Creek's economic development materials</a> point to a supportive business environment and a strong network of local partners. The City's business-support pages specifically reference <a href="https://walnutcreekdowntown.com/about/who-we-are" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Walnut Creek Downtown</a> and the <a href="https://www.walnut-creek.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Walnut Creek Chamber</a> as part of that ecosystem. Walnut Creek Downtown describes itself as a Business Improvement District that promotes the downtown business community, while the Walnut Creek Chamber says it attracts, supports, and grows business in the Walnut Creek region through advocacy and inclusive economic and business development.</p>
            </div>

            {/* What the Market Supports */}
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">What the Market Supports</p>
              <p className="text-base text-foreground/90 leading-relaxed mb-3">For a local service business, that matters because Walnut Creek supports:</p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>strong homeowner demand</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>premium service expectations</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>appointment-driven health and wellness demand</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>consultation-driven professional services</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>repeat-visit local business opportunity</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>and cross-city buyer comparison throughout the East Bay</li>
              </ul>
              <p className="text-base text-foreground/90 leading-relaxed mt-4">This is especially important in categories where buyers decide based on professionalism before they ever call.</p>
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
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Walnut Creek, CA Local Businesses</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">GrowSmallBiz provides the digital marketing services most local businesses actually need, but as one connected system rather than separate projects.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Globe,
                title: "Website Design for Small Businesses",
                description: <>A website should do more than describe what a business does. It should help the business feel trustworthy, clear, and easy to choose. Our <Link to="/services/website-design/" className="text-primary hover:underline">website design for small businesses</Link> focuses on stronger structure, better calls to action, mobile responsiveness, and cleaner inquiry flow.<br /><br />For Walnut Creek businesses, that often means improving how the business is perceived in the first few seconds, not just making the design look more updated.</>
              },
              {
                icon: Search,
                title: "SEO and Local SEO Services",
                description: <>Our <Link to="/services/seo-agency/" className="text-primary hover:underline">SEO and local SEO services</Link> help Walnut Creek businesses improve visibility where local buyers are already comparing options. That includes Google Business Profile support, local landing-page relevance, content strength, technical structure, and trust signals that help a business earn the click or call.<br /><br />Local SEO and search engine optimization work best when they are tied directly to confidence-building. Ranking alone is not enough here. The business has to look worth contacting once it is found.</>
              },
              {
                icon: Target,
                title: "Paid Ads Management with Google Ads, Local Services Ads, and Meta Ads",
                description: <><Link to="/services/paid-advertising/" className="text-primary hover:underline">Paid ads management</Link> helps Walnut Creek businesses create faster visibility and more controlled lead generation. Google Ads can capture high-intent demand. Local Services Ads can strengthen trust in eligible categories. Meta Ads can support remarketing, selective local reach, and awareness where the business model fits.<br /><br />Paid campaigns work best when they reinforce the rest of the system. Without strong landing pages and strong follow-up, traffic becomes expensive attention instead of useful opportunity.</>
              },
              {
                icon: Zap,
                title: "Marketing Automation, AI Receptionist, and Better Follow-Up",
                description: <><Link to="/services/marketing-automation-for-small-business/" className="text-primary hover:underline">Marketing automation</Link> helps businesses respond faster, nurture leads more consistently, and convert more opportunities without relying only on manual follow-up. That can include CRM workflows, AI Receptionist support, missed-call text-back, email and SMS follow-up, and reactivation systems.<br /><br />For many Walnut Creek businesses, this is where the hidden lift is found. The difference between a lead and a lost lead often comes down to how quickly and how professionally the next step happens.</>
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

      {/* Section: Built for How Walnut Creek Buyers Actually Decide */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" /> BUYER BEHAVIOR
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Built for How Walnut Creek Buyers{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Actually Decide</span>
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-3">Walnut Creek buyers often decide through comparison, not impulse. They look at:</p>
              <ul className="space-y-2 text-foreground/80 mb-4">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>reviews</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>business profiles</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>websites</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>professionalism</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>service clarity</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>and how easy the business feels to contact</li>
              </ul>
              <p className="text-base text-foreground/90 leading-relaxed">That means local marketing has to do more than create visibility. It has to strengthen perceived quality.</p>
            </div>
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base text-foreground/90 leading-relaxed">A business can show up in search and still underperform if the site feels thin, the message feels vague, or the follow-up path feels uncertain. The businesses that do best in a market like Walnut Creek usually create confidence before the first conversation even happens.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Built for Walnut Creek's Most Important Local Categories */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" /> INDUSTRIES
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Built for Walnut Creek's Most Important{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Local Categories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Home Service Contractors</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">Walnut Creek homeowners often compare providers on responsiveness, credibility, reviews, and professionalism, not just price.</p>
              <p className="text-muted-foreground leading-relaxed">GrowSmallBiz helps home service businesses improve local visibility, stronger lead capture, and better speed to lead so more searches become booked work.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Health and Wellness Businesses</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">Dentists, med spas, chiropractors, and related providers compete in categories where trust and perception matter heavily. A business may be technically strong and still lose if the digital experience feels weaker than the competition.</p>
              <p className="text-muted-foreground leading-relaxed">GrowSmallBiz helps strengthen that path from discovery to inquiry so the business feels more credible before the prospect even reaches out.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Real Estate and Professional Services</h3>
              <p className="text-muted-foreground leading-relaxed">Walnut Creek professionals compete in a market where trust, familiarity, and consistency matter. One burst of attention is rarely enough. Stronger long-term visibility and better lead handling both matter.</p>
            </div>

            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Appointment-Driven and Repeat-Visit Local Businesses</h3>
              <p className="text-muted-foreground leading-relaxed">Some local businesses win by building repeat trust over time. Promotions, reactivation, customer communication, and better follow-up can matter just as much as first-time discovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Why Walnut Creek Businesses Need an AI-First Marketing Platform */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Brain className="w-4 h-4" /> AI-FIRST PLATFORM
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Why Walnut Creek Businesses Need an{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">AI-First Marketing Platform</span>
            </h2>
          </div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {/* Intro paragraph */}
            <div className="rounded-xl border border-border/60 bg-card/50 p-6 md:p-8">
              <p className="text-muted-foreground leading-relaxed">An AI-first marketing platform should not mean replacing people with gimmicks. It should mean using <a href="https://www.census.gov/newsroom/blogs/research-matters/2024/12/ai-use-small-businesses.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AI</a> where it creates practical leverage in a market that expects speed, consistency, and professionalism.</p>
            </div>

            {/* Operational gap card */}
            <div className="rounded-xl border border-border/60 bg-card/50 p-6 md:p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">Why It Matters</span>
              <p className="text-muted-foreground leading-relaxed mb-3">In Walnut Creek, that matters because the gap between good business and chosen business is often operational:</p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>who answered faster</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>who followed up better</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>who seemed more organized</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>who looked easier to trust</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>who made the next step simpler</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">AI helps close those gaps when it is used well.</p>
            </div>

            {/* Where AI Helps Most */}
            <div className="rounded-xl border border-border/60 bg-card/50 p-6 md:p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-4 block">Where AI Helps Most in Walnut Creek</span>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Faster first response", desc: "A prospect comparing options is easier to keep when the business responds quickly." },
                  { title: "More polished follow-up", desc: "The business feels more consistent and more professional across touchpoints." },
                  { title: "Less operational leakage", desc: "Fewer good leads disappear because a call, form, or text was handled too slowly." },
                  { title: "More reliable workflow execution", desc: "Important follow-up steps happen more consistently instead of relying on memory and availability." },
                  { title: "Smarter campaign support", desc: "Optimization becomes more disciplined and less reactive." },
                ].map((item, i) => (
                  <div key={i} className="feature-card-teal rounded-xl p-4">
                    <p className="text-foreground font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing card */}
            <div className="rounded-xl border border-border/60 bg-card/50 p-6 md:p-8">
              <p className="text-muted-foreground leading-relaxed">The value of AI here is not novelty. It is that it helps a business meet the standard buyers already expect.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: AI Search Visibility Also Matters in Walnut Creek */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Eye className="w-4 h-4" /> AI SEARCH
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              AI Search Visibility Also Matters in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Walnut Creek</span>
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Opening paragraph */}
            <div className="rounded-xl border border-border/60 bg-card/50 p-6 md:p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">Search Behavior Is Changing</span>
              <p className="text-foreground/90 leading-relaxed">AI search visibility is becoming part of local visibility, not a separate channel. <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google</a> says the same foundational SEO best practices still apply to AI features such as AI Overviews and AI Mode. That means the businesses most likely to benefit are still the ones with stronger fundamentals:</p>
            </div>

            {/* Fundamentals card */}
            <div className="rounded-xl border border-border/60 bg-card/50 p-6 md:p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-3 block">Stronger Fundamentals Win</span>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>better service pages</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>clearer local relevance</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>accurate business information</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>stronger trust signals</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>helpful content</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>and a technically sound site</li>
              </ul>
            </div>

            {/* Concluding card */}
            <div className="rounded-xl border border-border/60 bg-card/50 p-6 md:p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">What This Means for Walnut Creek</span>
              <p className="text-foreground/90 leading-relaxed">For Walnut Creek businesses, that matters because buyers are already comparison-oriented. Thin local content does not help much in that environment. Clearer, more trustworthy content does.</p>
            </div>
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
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Walnut Creek Businesses</span>
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base text-foreground/90 leading-relaxed"><a href="https://support.google.com/business/answer/7091?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google's Business Profile guidance</a> says businesses with complete and accurate information are more likely to appear in local search results, and that local results are mainly based on relevance, distance, and popularity.</p>
            </div>
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base text-foreground/90 leading-relaxed">In Walnut Creek, local visibility still affects who gets the inquiry. Buyers compare quickly and often pick the business that looks most credible with the least friction. Strong local visibility matters because it creates the first opportunity to be considered at all.</p>
            </div>
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
              <p className="text-base text-foreground/90 leading-relaxed">GrowSmallBiz is built around a connected model: Discovery, Trust, Contact, Conversion, and Retention.</p>
            </div>
            <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
              <p className="text-base text-foreground/90 leading-relaxed">Discovery comes from search visibility, paid reach, stronger positioning, and selective social media marketing support when it helps reinforce local recognition. Trust grows when the website, reviews, business profile, and service pages all tell the same credible story. Contact improves when forms, calls, and messaging paths reduce friction. Conversion improves when response is faster and follow-through is stronger. Retention grows through review generation, reactivation campaigns, ongoing customer communication, and reputation management that keeps the business top of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: What Businesses Usually Want to Improve */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" /> GAINS
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              What Businesses Usually Want to Improve in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Walnut Creek</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { title: "A stronger first impression against stronger competition", desc: "Because the business often needs to feel more premium and more trustworthy, not just more visible." },
              { title: "More consistency between traffic and conversion", desc: "So the business gets more value from the visibility it already earns." },
              { title: "Faster and more polished lead handling", desc: "Especially when buyer comparison happens quickly." },
              { title: "Stronger review and reputation support", desc: "Because perception matters more in a higher-choice market." },
              { title: "More value from retained customers and warm leads", desc: "Instead of paying to reacquire demand from scratch every month." },
            ].map((gain, i) => (
              <div key={i} className="feature-card-teal rounded-2xl p-6">
                <p className="text-foreground font-display font-semibold mb-2">{gain.title}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{gain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Testimonials */}
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
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Walnut Creek-Area Home Services Owner", quote: "The most useful part was realizing that our problem was not just traffic. We needed the whole experience to feel stronger and more coordinated once people found us." },
              { title: "East Bay Wellness Practice Manager", quote: "What stood out was the focus on trust and follow-through. The recommendations felt built for a market where buyers are comparing carefully, not just clicking around." },
              { title: "Tri-Valley Professional Services Owner", quote: "They understood that visibility alone does not win in a place like Walnut Creek. The way they tied together presentation, follow-up, and conversion made the strategy feel much more complete." },
            ].map((t, i) => (
              <div key={i} className="p-6 feature-card-teal rounded-2xl">
                <p className="text-foreground/90 italic mb-4">"{t.quote}"</p>
                <p className="text-sm font-semibold text-primary">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Why Walnut Creek Businesses Choose GrowSmallBiz */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4" /> WHY US
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Why Walnut Creek Businesses{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Choose GrowSmallBiz</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Built for Local Service Businesses", desc: "GrowSmallBiz is built for businesses that depend on visibility, trust, and measurable lead flow." },
              { title: "Better Fit for Comparison-Driven Markets", desc: "Walnut Creek is a market where buyers evaluate quality quickly. Stronger systems create a stronger edge." },
              { title: "Less Fragmentation, More Coordination", desc: "The goal is not one more tactic. It is to make the whole growth system work together." },
              { title: "Measured by Business Movement", desc: "The focus is not vanity metrics. It is better inquiries, better follow-up, better conversion, and better customer value." },
            ].map((item, i) => (
              <div key={i} className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8">
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links + Serving */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Serving Walnut Creek and the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Wider East Bay</span>
            </h2>
          </div>
          <div className="bg-card/50 border border-border/60 rounded-xl p-6 md:p-8 mb-10">
            <p className="text-base text-foreground/90 leading-relaxed text-center">GrowSmallBiz supports businesses in Walnut Creek as well as nearby East Bay communities including Concord, Pleasant Hill, Martinez, Danville, San Ramon, Pleasanton, and surrounding service areas. That overlap matters because buyers often compare across city lines even when local trust still drives the final choice.</p>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">If your business also serves nearby communities, explore our pages for:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Danville", to: "/locations/danville-ca/" },
                { label: "San Ramon", to: "/locations/san-ramon-ca/" },
                { label: "Concord", to: "/locations/concord-ca/" },
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
        </div>
      </section>

      <FAQSection
        title={<>Frequently Asked Questions About <span className="text-transparent bg-clip-text bg-gradient-primary italic">Marketing in Walnut Creek, CA</span></>}
        faqs={[
          { question: "What types of businesses does GrowSmallBiz work with in Walnut Creek, CA?", answer: "GrowSmallBiz primarily works with local service businesses and repeat-visit local businesses, including home services, dentists, med spas, chiropractors, real estate professionals, restaurants, and other businesses that rely on local visibility, qualified inquiries, and consistent follow-up." },
          { question: "Is GrowSmallBiz only an SEO company?", answer: "No. SEO is one important part of the system, but GrowSmallBiz is not positioned as an SEO-only provider. The broader model includes website design, SEO, paid ads, marketing automation, and lead-handling improvements." },
          { question: "Can GrowSmallBiz help if my business already has a website?", answer: "Yes. Many businesses already have a website but still need stronger messaging, cleaner landing pages, better local visibility, stronger calls to action, or more effective follow-up. An existing website can often be improved rather than replaced immediately." },
          { question: "Do you offer Google Ads and Local Services Ads for Walnut Creek businesses?", answer: "Yes. GrowSmallBiz can support paid lead generation through Google Ads and Local Services Ads as part of a broader system that also includes landing pages, tracking, and lead follow-up." },
          { question: "How does AI improve local marketing for small businesses?", answer: "AI improves local marketing when it is used for practical business functions such as faster lead response, smarter follow-up, better workflow consistency, and more efficient optimization. The value is not the label. The value is better execution." },
          { question: "Why does local SEO still matter if search is becoming more AI-driven?", answer: "Because Google says the same foundational SEO best practices still apply to AI features, and local search visibility still depends on factors such as relevance, distance, and popularity. Strong local SEO and strong AI visibility increasingly reinforce each other instead of competing with each other." }
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
            <h2 className="section-title">
              Ready to Build a Smarter Marketing System for Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Walnut Creek Business</span>?
            </h2>
            <p className="section-description mt-4 mb-8">
              GrowSmallBiz helps Walnut Creek businesses connect website performance, search visibility, paid ads, follow-up, conversion, and retention into one practical system. That is the difference between paying for marketing activity and building a structure that supports real business growth.
            </p>
          </div>
          <CardCTA
            title="Schedule Your Free Marketing Assessment"
            description="If you want a smarter, more connected approach to digital marketing in Walnut Creek, GrowSmallBiz is built for that next step. We can look at where your current system is losing visibility, losing trust, or losing leads — and what a stronger local growth engine could look like."
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
