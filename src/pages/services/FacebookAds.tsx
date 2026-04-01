import { Head } from "vite-react-ssg";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { PersonCTA } from "@/components/services/PersonCTA";
import { baseContactCTA } from "@/config/contactCTA";
import { useUtm } from "@/hooks/use-utm";
import { CTA_URLS } from "@/lib/utm";
import {
  ArrowRight,
  Target,
  Eye,
  Zap,
  TrendingUp,
  BarChart3,
  Phone,
  CheckCircle2,
  Users,
  Star,
  Image,
  RefreshCw,
  MousePointerClick,
  Settings,
  FileText,
  Layers,
  Home,
  Stethoscope,
  Wrench,
  Car,
  Camera,
  Scale,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/services/SectionHeader";

const faqs: FAQItem[] = [
  {
    question: "How much should I spend on Facebook Ads as a local business?",
    answer: "The right budget depends on your market, your service, your competition, and your growth goals. As a general benchmark, most local service businesses generating meaningful results are spending between $500 and $2,000 per month in ad spend, separate from management fees. During your strategy session, we'll recommend a realistic budget based on your specific market and goals.",
  },
  {
    question: "How long does it take to see results from Facebook Ads?",
    answer: "Most of our clients begin seeing leads within the first two to four weeks of launching a properly structured campaign. The first month is typically a data-gathering and optimization phase where we identify the highest-performing audiences and creatives. Results improve consistently through months two and three as we refine targeting and creative based on real performance data. This is why our performance guarantee exists — if we haven't generated leads within the agreed timeframe, we keep working until we do.",
  },
  {
    question: "What's the difference between boosting posts and running Facebook Ads?",
    answer: "Boosting posts is a simplified advertising feature designed for reach and engagement — it prioritizes impressions and likes. Managed Facebook Ad campaigns are built around specific business objectives: lead generation, website conversions, or calls. A boosted post is a shortcut. A properly structured campaign is a lead generation system. Most local businesses who feel like \"Facebook Ads don't work\" have only ever boosted posts.",
  },
  {
    question: "Do you manage Instagram Ads as well as Facebook Ads?",
    answer: "Yes. Facebook and Instagram advertising are managed through the same Meta Ads Manager platform, and we manage campaigns across both platforms simultaneously. We optimize placement, format, and creative for each platform independently to maximize performance on both.",
  },
  {
    question: "Do I need a Facebook Business Page and Meta Business Suite account before we start?",
    answer: "Yes. You'll need an active Facebook Business Page and a Meta Business Manager account. If you don't have these set up, we walk you through the setup process during onboarding. We also configure your Facebook Pixel on your website as part of the initial campaign setup.",
  },
  {
    question: "Will I have visibility into my campaign performance?",
    answer: "Yes, completely. You'll receive monthly performance reports with all key metrics explained in plain English. You'll always know exactly how your budget is being spent, what your cost per lead is, how many leads were generated, and what we're doing to improve results.",
  },
  {
    question: "Can you take over campaigns that another agency or I was already running?",
    answer: "Absolutely. We take over underperforming accounts regularly. We start with a full audit of your existing campaign structure, audience settings, creative performance, and conversion tracking configuration. Then we restructure what's broken and build on what's working. Transitioning management to GrowSmallBiz typically results in improved performance within the first 30 to 60 days.",
  },
];

const FacebookAds = () => {
  const { buildUrl, pageMedium } = useUtm();
  const strategyUrl = buildUrl(CTA_URLS.strategySession, "strategy-session");
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Facebook Ads Management for Local Businesses — GrowSmallBiz</title>
        <meta name="description" content="Stop wasting ad spend on clicks that never convert. GrowSmallBiz manages your Facebook & Instagram Ads with precision targeting, conversion-focused creative, and full-funnel tracking — so every dollar drives real leads for your local business." />
        <link rel="canonical" href="https://growsmallbiz.io/services/paid-advertising/facebook-ads/" />
      </Head>
      <ServiceJsonLd
        serviceName="Facebook Ads Management"
        serviceType="Facebook Ads Management"
        description="Facebook & Instagram Ads management for local service businesses. Precision targeting, conversion-focused creative, full-funnel tracking, and retargeting."
        url="/services/paid-advertising/facebook-ads/"
        breadcrumbs={[
          { name: "Services", url: "/services/" },
          { name: "Facebook Ads Management", url: "/services/paid-advertising/facebook-ads/" },
        ]}
      />
      <Header />

      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Users className="w-4 h-4" />
                Facebook & Instagram Ads
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up">
              Facebook & Instagram Ads That Fill Your Calendar —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Not Just Your Feed
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Most local businesses waste thousands on Facebook Ads chasing likes and impressions. You need leads. We build, manage, and optimize Meta ad campaigns that turn your ad spend into booked appointments, service calls, and paying customers.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.15s" }}>
              If you've tried running Facebook Ads on your own — or handed them off to an agency that sent you vanity metrics instead of phone calls — you already know the problem. Targeting without strategy, creative without direction, and campaigns running on autopilot with no one watching the results.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
              At GrowSmallBiz, we manage Facebook and Instagram Ads the way they were meant to be used: as a precision lead-generation engine for local service businesses. From audience research and ad creative to pixel tracking, retargeting, and monthly reporting, we handle every layer so you can focus on serving the customers we send you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.25s" }}>
              <Button variant="hero" size="xl" asChild>
                <a href={strategyUrl} target="_blank" rel="noopener noreferrer">
                  Get My Free Facebook Ads Strategy Session
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#how-it-works">
                  See How It Works
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground text-center mb-8">Trusted by Local Service Businesses Across the Bay Area and Nationwide</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "2x – 4x", label: "Client Growth Reported" },
              { value: "200%", label: "Increase in Qualified Leads (3 Months)" },
              { value: "30+", label: "Years Founder's Business & Marketing Experience" },
              { value: "100%", label: "Done-For-You Campaign Management" },
            ].map((stat, i) => (
              <div key={i} className="text-center animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <p className="text-3xl md:text-4xl font-display font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Why Most Facebook Ad Campaigns Fail"
              titleHighlight="Local Businesses"
              description="Facebook and Instagram have over 3 billion combined monthly active users. The audience is there. The targeting tools are there. So why are so many local businesses still burning through budgets with nothing to show for it?"
            />
            <div className="space-y-6 mt-12">
              {[
                { title: "You're paying for the wrong outcomes.", desc: "Boosting posts for likes and reach is not advertising — it's brand awareness spending without brand-awareness budgets. If your campaigns aren't structured around lead generation and conversion goals, you're funding Meta's revenue, not yours." },
                { title: "Your targeting is too broad — or too narrow.", desc: "Generic interest targeting reaches people who will never call you. Hyper-local targeting without the right audience signals means you're guessing. Without a data-driven audience strategy built around your actual customer profile, your budget disappears into impressions that convert to nothing." },
                { title: "You have no retargeting system.", desc: "The majority of people who see your ad for the first time won't book immediately. Without a structured retargeting funnel — using pixel data, website visitors, and custom audiences — you're letting warm leads go cold every single day." },
                { title: "Your creative doesn't speak to your customer.", desc: "A blurry stock photo and a generic caption don't stop the scroll. Local service businesses need ad creative that addresses the specific pain points of their ideal customer, with a clear message and a compelling reason to act now." },
                { title: "There's no one watching the numbers.", desc: "Facebook Ads require continuous optimization. Audience fatigue, creative burnout, budget pacing, and bidding strategy all need active management. Set-it-and-forget-it campaigns are money drains." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <h4 className="text-base font-display font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="What You Get When GrowSmallBiz Manages Your"
              titleHighlight="Facebook & Instagram Ads"
              description="We don't just run ads. We build a full-funnel paid social system designed to generate consistent, qualified leads for your local service business — every single month."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { icon: Target, title: "Qualified Leads, Not Vanity Metrics", desc: "Every campaign we build is structured around one goal: generating real business outcomes. Phone calls, form fills, booked appointments, and service requests — not likes, shares, or impressions." },
                { icon: Users, title: "Precision Audience Targeting", desc: "We build custom audiences based on your ideal customer profile — location, demographics, behaviors, and life events — so your ads reach people who are actually in the market for your services. Then we layer in lookalike audiences built from your existing client list to scale what's working." },
                { icon: Image, title: "Scroll-Stopping Ad Creative", desc: "Our team develops 3–4 ad creatives with copy specifically written for your service, your market, and your customer's pain points. We A/B test every ad to identify the combinations that drive the lowest cost per lead." },
                { icon: RefreshCw, title: "Full-Funnel Retargeting", desc: "We set up your Facebook Pixel, build retargeting audiences from website visitors and video viewers, and run sequential ad campaigns that nurture prospects from first touch to booked appointment." },
                { icon: MousePointerClick, title: "Conversion Tracking & Pixel Setup", desc: "You can't optimize what you can't measure. We implement complete conversion tracking so you know exactly which ads, audiences, and placements are generating real results — and which ones to cut." },
                { icon: Settings, title: "Ongoing Campaign Optimization", desc: "Every week, we monitor performance, adjust bids, refresh creative, and optimize targeting. Campaigns are never left on autopilot. If something isn't working, we fix it. If something is working, we scale it." },
                { icon: FileText, title: "Monthly Reporting That Makes Sense", desc: "No cryptic dashboards or vanity slides. You get clear, plain-English reports showing exactly how your campaigns performed, what we tested, what we changed, and what's next." },
                { icon: Layers, title: "Instagram Ads Integration", desc: "Your campaigns run across both Facebook and Instagram, giving you maximum reach within your local market. We optimize placement and format for each platform so your budget works harder." },
              ].map((card, i) => (
                <div key={i} className="bg-background border border-border rounded-xl p-6 space-y-3 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <card.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-sm font-display font-semibold text-foreground">{card.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="Our Facebook & Instagram Ads"
              titleHighlight="Management Services"
            />
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {[
                { title: "Campaign Strategy & Setup", desc: "We start with your business goals, service area, competitive landscape, and ideal customer profile. Then we build a campaign architecture designed around those specific inputs — not a recycled template. Includes campaign structure, ad set configuration, objective selection, and full account setup." },
                { title: "Audience Research & Targeting", desc: "We identify and build the audience segments most likely to convert for your specific service. Core audiences based on location and demographics, interest and behavior targeting, custom audiences from your existing customer data, and lookalike audiences to expand reach intelligently." },
                { title: "Ad Creative Development", desc: "We write and design 3–4 ad creatives per campaign, including primary copy, headlines, and call-to-action text. Creative is built around your customer's pain points and tested systematically to find the best performers. Formats include image ads, carousel ads, and lead generation ads." },
                { title: "Facebook Pixel & Conversion Tracking Setup", desc: "Full pixel implementation on your website, custom conversion event configuration, and integration with your contact forms, phone tracking, and booking system so every lead is attributed correctly." },
                { title: "Retargeting Campaign Management", desc: "We build and manage dedicated retargeting campaigns targeting your website visitors, video viewers, and lead form openers. Sequential retargeting moves prospects through a structured funnel from awareness to conversion." },
                { title: "Ongoing Campaign Management & Optimization", desc: "Active management of up to five ad sets, with weekly performance reviews, bid adjustments, audience refinements, creative refreshes, and budget pacing. We manage the campaign so it performs — not just runs." },
                { title: "Monthly Performance Reporting", desc: "Clear monthly reports covering key metrics: cost per lead, lead volume, click-through rate, reach, frequency, and ROAS. Plus a summary of optimizations made and the plan for the following month." },
                { title: "Lead Follow-Up Integration", desc: "We connect your ads to your CRM or lead notification system so new leads are followed up with immediately. Speed to lead is one of the biggest drivers of conversion — we make sure no lead goes cold." },
              ].map((svc, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 space-y-3 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <h4 className="text-base font-display font-semibold text-foreground">{svc.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="how-it-works" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="How We Manage Your Facebook Ads:"
              titleHighlight="From Strategy to Results"
            />
            <div className="space-y-6 mt-12">
              {[
                { title: "Discovery & Strategy Session", desc: "We start with a deep-dive strategy session to understand your business, your target customer, your service area, and your growth goals. We audit your existing ad account (if you have one), review your competitors' ad activity, and identify the biggest opportunities in your market. This session defines everything that follows." },
                { title: "Audience Build & Campaign Architecture", desc: "Based on your strategy session, we build your core audience segments — custom, interest-based, and lookalike — and structure your campaign architecture around your specific conversion goal. We configure your ad account, Business Manager, and pixel at this stage." },
                { title: "Ad Creative Development & A/B Testing Setup", desc: "We develop 3–4 ad creatives with full copywriting, headlines, and visual direction. Each creative is built to speak directly to your ideal customer's situation and motivate a specific action. We set up systematic A/B testing so every creative is evaluated on real performance data." },
                { title: "Campaign Launch & Conversion Tracking Verification", desc: "We launch your campaigns and run a full conversion tracking verification to confirm that every lead, form fill, and phone call is being recorded accurately. No assumptions — we verify the data before scaling any budget." },
                { title: "Weekly Monitoring & Active Optimization", desc: "Every week, we review performance across all active ad sets. We adjust bids, refresh underperforming creative, expand winning audiences, and reallocate budget toward the highest-performing combinations. Your campaign is always improving." },
                { title: "Monthly Reporting & Strategy Review", desc: "At the end of each month, you receive a clear performance report with all key metrics and a plain-English explanation of results. We review what worked, what we're changing, and what the plan is for the next 30 days." },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary">{i + 1}</span>
                    </div>
                    {i < 5 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-6">
                    <h4 className="text-base font-display font-semibold text-foreground mb-2">Step {i + 1}: {step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="Facebook Ads Management for"
              titleHighlight="Local Service Industries"
            />
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {[
                { icon: Home, title: "HVAC & Home Services", desc: "Seasonal demand, emergency calls, and maintenance agreements all require different campaign strategies. We build HVAC ad campaigns that generate service calls when they matter most." },
                { icon: Star, title: "Dental Practices", desc: "New patient acquisition on Facebook requires trust-building creative and precise geographic targeting. We build dental ad campaigns that attract high-value patients to your practice." },
                { icon: Stethoscope, title: "Med Spas & Aesthetic Services", desc: "Visual services require visual advertising. We develop scroll-stopping creative for med spa and aesthetic service providers that drives consultation bookings." },
                { icon: Wrench, title: "Chiropractic & Physical Therapy", desc: "Pain-point driven ad creative that speaks directly to the conditions your patients are suffering from. We target the right audience at the moment they're looking for relief." },
                { icon: Car, title: "Auto Repair & Detailing", desc: "Urgency and local trust drive auto service decisions. We build campaigns that establish credibility and drive service appointments within your target radius." },
                { icon: Scale, title: "Realtors & Real Estate Professionals", desc: "Buyer and seller lead generation on Facebook requires sophisticated targeting and compelling lead magnets. We manage campaigns that fill your pipeline with qualified prospects." },
                { icon: Camera, title: "Photographers & Creative Professionals", desc: "Showcase your work with visually-led ad campaigns designed to book consultations, sessions, and engagements." },
                { icon: Briefcase, title: "Other Local Professional Services", desc: "CPAs, attorneys, financial advisors, consultants, and other local professionals — if you serve a local market and need a consistent pipeline of qualified leads, we can build and manage the campaigns that deliver them." },
              ].map((ind, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 space-y-3 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <ind.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-base font-display font-semibold text-foreground">{ind.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY GROWSMALLBIZ */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Why Local Businesses Choose GrowSmallBiz for"
              titleHighlight="Facebook Ads Management"
              className="mb-12"
            />
            <div className="space-y-6">
              {[
                { title: "We Specialize in Local Service Businesses — Period", desc: "We don't manage ad campaigns for e-commerce brands, SaaS companies, or national retailers. Our entire agency is built around one type of client: local service businesses. That specialization means we understand your customer, your competitive landscape, and your growth levers in a way a generalist agency never will." },
                { title: "30+ Years of Real Business Experience", desc: "GrowSmallBiz was founded by Subrata Guha — a 30+ year veteran of Fortune 500 sales, marketing, supply chain, and digital transformation. He didn't build this agency to learn on your budget. The strategic thinking, business judgment, and marketing frameworks we apply come from decades of real-world business leadership." },
                { title: "Full-Funnel, Not Just Ads", desc: "Anyone can run an ad. We build the entire system: audience targeting, ad creative, pixel setup, conversion tracking, retargeting sequences, and lead follow-up integration. Your ads are connected to your business — not just running in isolation." },
                { title: "AI-Powered Campaign Management", desc: "We use AI-powered tools to enhance audience analysis, creative optimization, and performance monitoring. That means faster decisions, smarter targeting, and more efficient use of your budget — at every stage of your campaign." },
                { title: "Integrated with Your Broader Marketing System", desc: "Your Facebook Ads don't operate in a silo. We integrate your paid social campaigns with your SEO strategy, website conversion rate, reputation management, and CRM — so every channel amplifies the others and every lead is captured and nurtured." },
                { title: "The Performance Guarantee", desc: "We stand behind our work. If we don't generate leads within the agreed timeframe and scope, we keep working at no additional management fee until we do." },
              ].map((item, i) => (
                <div key={i} className="bg-background border border-border rounded-xl p-6 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <h4 className="text-base font-display font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES PLACEHOLDER */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="Real Results from"
              titleHighlight="Facebook Ads Campaigns"
              description="Case studies coming soon — showcasing measurable results from our Facebook & Instagram Ads management for local service businesses."
            />
            <div className="grid lg:grid-cols-3 gap-8 mt-12">
              {["Med Spa", "Dental Practice", "Home Services"].map((name, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-8 text-center animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{name}</h3>
                  <p className="text-sm text-muted-foreground">Case study coming soon</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MID-CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Ready to Stop Wasting Ad Spend and Start"
              titleHighlight="Generating Real Leads?"
            />
            <p className="text-muted-foreground leading-relaxed text-center mt-6 mb-8">
              Your competitors are already running Facebook and Instagram Ads in your market. The question isn't whether to advertise on social media — it's whether your campaigns are built to win. Schedule a free strategy session and we'll show you exactly what a properly structured Facebook Ads campaign looks like for your business.
            </p>
            <div className="bg-background border border-border rounded-xl p-6 mb-8">
              <h4 className="text-base font-display font-semibold text-foreground mb-4">What you'll get in the session:</h4>
              <ul className="space-y-3">
                {[
                  "A review of your current Facebook Ads account (or a blank-slate plan if you're starting fresh)",
                  "An analysis of your top local competitors' ad activity",
                  "A recommended campaign structure, targeting approach, and creative direction",
                  "A realistic projection of what a properly managed campaign can deliver for your business",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">No contracts. No pressure. Just strategy.</p>
              <Button variant="hero" size="xl" asChild>
                <a href={strategyUrl} target="_blank" rel="noopener noreferrer">
                  Book My Free Strategy Session
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={faqs}
        title="Frequently Asked Questions About Facebook Ads Management for Local Businesses"
        subtitle="Common questions about our Facebook & Instagram Ads management"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Facebook Ads?",
          description: "We're here to help you build a Facebook Ads campaign that drives real leads.",
          tagline: "Let's turn your social ad spend into booked appointments.",
        }}
      />

      {/* FOOTER CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Your Local Market Is Active on Facebook and Instagram Right Now.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Are You Showing Up?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The question is whether your business is showing up — and whether the campaigns driving that visibility are built to convert. GrowSmallBiz manages Facebook and Instagram Ads exclusively for local service businesses. We know your customer, we know your market, and we know how to build campaigns that turn ad spend into revenue.
            </p>
            <p className="text-sm text-muted-foreground">
              Schedule your free strategy session today. There's no obligation, no contract pitch, and no fluff — just a direct conversation about what your Facebook Ads should be doing for your business and how we'll get you there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href={strategyUrl} target="_blank" rel="noopener noreferrer">
                  Get My Free Facebook Ads Strategy Session
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+19258863724">
                  <Phone className="w-5 h-5 mr-2" />
                  +1 (925) 886-3724
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationFormSection utmCampaign="consultation-form" utmMedium={pageMedium} />
      <Footer />
    </div>
  );
};

export default FacebookAds;
