import { Head } from "vite-react-ssg";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { baseContactCTA } from "@/config/contactCTA";
import { useUtm } from "@/hooks/use-utm";
import { CTA_URLS } from "@/lib/utm";
import {
  ArrowRight,
  Target,
  ShieldCheck,
  Eye,
  MapPin,
  TrendingUp,
  BarChart3,
  Phone,
  CheckCircle2,
  Star,
  Users,
  DollarSign,
  FileCheck,
  Settings,
  ClipboardCheck,
  Home,
  Stethoscope,
  Wrench,
  Camera,
  PersonStanding,
  Smile,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/services/SectionHeader";

const faqs: FAQItem[] = [
  {
    question: "What are Google Local Service Ads and how are they different from regular Google Ads?",
    answer: "Google Local Service Ads (LSA) are Google's pay-per-lead advertising product for local service businesses, where you pay only when a verified customer contacts you directly. Regular Google Ads charge per click regardless of whether the click converts. LSA ads also appear above all PPC ads and above the local map pack at the very top of search results, and eligible businesses display the Google Verified badge as a trust signal.",
  },
  {
    question: "What is the Google Verified badge and how do I qualify for it?",
    answer: "The Google Verified badge is a blue checkmark displayed on your Google Local Service Ads profile that confirms Google has screened your business — including background checks, license verification, insurance confirmation, and identity verification. To qualify, you must pass Google's background check, verify active business licenses, maintain required insurance, link an active Google Business Profile, and meet customer service and response standards. The unified Google Verified badge replaced the older Google Guaranteed, Google Screened, and License Verified badges in October 2025. Average timeline from application to badge approval is three to four weeks.",
  },
  {
    question: "How much does it cost to run Google Local Service Ads?",
    answer: "LSA cost per lead for home service businesses typically ranges $25–$80, though this varies by category. Roofing leads can run $60–$130, water damage $80–$180, cleaning services $12–$30, and landscaping $20–$55 (Blue Grid Media 2026 managed-account data). Unlike PPC, you set a weekly budget and pay only when a qualified customer contacts you — no charges for bounced clicks or tire-kickers.",
  },
  {
    question: "What happens if I receive spam calls or invalid leads through LSA?",
    answer: "Google allows you to dispute invalid leads — spam calls, wrong numbers, calls from outside your service area, and automated solicitations all qualify for credits. Effective LSA management means auditing every lead weekly and filing disputes immediately, recovering the budget you should not have spent. Without active dispute management, you can easily lose 10–20% of your monthly spend to invalid leads.",
  },
  {
    question: "How does GrowSmallBiz improve my LSA ranking over time?",
    answer: "LSA ranking depends on review count and recency, response time to inquiries, profile completeness, service area relevance, and dispute-to-lead ratio. We actively optimize each ranking factor week over week — prompting verified customers for reviews, tightening response times through notification workflows, refining service categories, and adjusting geographic targeting based on performance data. Rankings improve gradually with sustained optimization, typically over 60–90 days.",
  },
  {
    question: "Do Google Local Service Ads work for my type of business?",
    answer: "LSA works for businesses in Google's eligible service categories — home services (HVAC, plumbing, electrical, roofing, cleaning, landscaping), health and wellness (dental, med spa, chiropractic), some professional services, and real estate among others. If your category is not LSA-eligible, Google Ads (pay-per-click) remains the primary Google advertising channel. We assess eligibility as part of our free strategy call before recommending LSA.",
  },
  {
    question: "Can I run Google Local Service Ads alongside my regular Google Ads (PPC)?",
    answer: "Yes — most local service businesses should run both. LSA captures pre-qualified phone leads from high-intent searchers who prefer the pay-per-lead model (29% of searchers prefer LSA vs 11% who prefer Google Ads, per The Media Captain 2025). Google Ads captures keyword-specific searches, retargeting, and display reach. The two channels are complementary, not substitutes. Learn more about <a href=\"/services/paid-advertising/google-ads/\" class=\"text-primary hover:underline\">Google Ads management</a> for the PPC side of the equation.",
  },
];

const marketStats = [
  {
    value: "29%",
    label: "of searchers prefer clicking Google Local Service Ads vs 11% who prefer Google Ads",
    source: "The Media Captain 2025 (100+ LSA + PPC client accounts)",
  },
  {
    value: "$25–$80",
    label: "typical LSA cost per qualified lead for home service businesses",
    source: "Mediagistic (Google Premier Partner) · Blue Grid Media 2026",
  },
  {
    value: "2–5x",
    label: "variation in LSA cost per lead by service category — roofing vs cleaning vs landscaping",
    source: "Blue Grid Media 2026 (managed-account data across 100+ clients)",
  },
];

const LSA = () => {
  const { buildUrl, pageMedium } = useUtm();
  const strategyUrl = buildUrl(CTA_URLS.strategySession, "strategy-session");
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Google Local Service Ads Management for Small Businesses | GrowSmallBiz</title>
        <meta name="description" content="Google Local Service Ads management for HVAC, dental, med spa, home services, and other small service businesses. Pay-per-lead pricing, Google Verified badge, verified leads only. Free strategy call." />
        <link rel="canonical" href="https://growsmallbiz.io/services/paid-advertising/google-local-services-ads/" />
      </Head>
      <ServiceJsonLd
        serviceName="Google Local Service Ads Management"
        serviceType="LSA Management"
        description="Complete Google Local Service Ads management for local businesses. Google Verified badge activation, profile optimization, lead review, dispute management, and performance reporting."
        url="/services/paid-advertising/google-local-services-ads/"
        breadcrumbs={[
          { name: "Services", url: "/services/" },
          { name: "Paid Advertising", url: "/services/paid-advertising/" },
          { name: "Google Local Service Ads Management", url: "/services/paid-advertising/google-local-services-ads/" },
        ]}
      />
      <Header />

      {/* ─── HERO (P1: tightened subtitle, kept pill badge, added credential line) ─── */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <ShieldCheck className="w-4 h-4" />
                Google Local Service Ads
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up">
              Get More Calls. Pay Only for Real Leads.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Not Clicks.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Google Local Service Ads put your business at the very top of search — above PPC, above organic. You pay only when a verified customer contacts you directly. GrowSmallBiz manages every detail: Google Verified setup, profile optimization, lead review, and dispute management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl" asChild>
                <a href={strategyUrl} target="_blank" rel="noopener noreferrer">
                  Get Your Free LSA Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+19258863724">
                  <Phone className="w-5 h-5 mr-2" /> Call +1 (925) 886-3724
                </a>
              </Button>
            </div>
            {/* Credential line under CTAs */}
            <p
              className="text-base md:text-lg text-muted-foreground text-center mx-auto animate-fade-up"
              style={{ maxWidth: "40rem", marginTop: "1.5rem", animationDelay: "0.25s" }}
            >
              Managing Google Local Service Ads campaigns for small service businesses nationally — HVAC, dental, med spa, home services, and more.
            </p>
          </div>
        </div>
      </section>

      {/* ─── MARKET STATS BAND (P0: replaces fabricated stats) ─── */}
      <section className="py-16" style={{ backgroundColor: "#1B2A4E" }}>
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Google LSA"
            titleHighlight="by the Numbers"
            className="mb-4 [&_h2]:text-white"
          />
          <p className="text-sm md:text-base text-white/70 text-center max-w-2xl mx-auto mb-12">
            Benchmarks from specialist LSA agencies managing 100+ client accounts across eligible service categories.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {marketStats.map((stat, i) => (
              <div key={i} className="text-center animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <p className="text-4xl md:text-5xl font-display font-bold text-primary mb-3">{stat.value}</p>
                <p className="text-sm md:text-base text-white leading-snug mb-3">{stat.label}</p>
                <p className="text-xs italic text-white/50">Source: {stat.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AEO CONTEXT CALLOUT (P2: NEW "Why LSA Matters Now") ─── */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="relative rounded-2xl p-8 md:p-10 border-l-4 border-primary"
              style={{ backgroundColor: "hsl(210 50% 12%)" }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-6">
                Why LSA{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary">Matters Now</span>
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                <p>
                  GrowSmallBiz manages Google Local Service Ads for small service businesses in a search landscape that is fundamentally shifting. AI Overviews now appear in 25% of Google searches, and organic click-through rates drop 58% on queries affected by them (Conductor 2026; Ahrefs 2026). The top of the SERP has never been more valuable.
                </p>
                <p>
                  For local services, only 7.9% of searches currently trigger an AI Overview (Ahrefs, November 2025) — so high-intent local queries still route through traditional results. And at the very top of those results, above every Google Ads placement, Google Local Service Ads claim position zero. As AI pushes organic down and paid visibility becomes more valuable, LSA's position above paid becomes the most valuable real estate on the page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM SECTION (P1: Local→Small) ─── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Why Most Small Businesses"
              titleHighlight="Are Losing to LSA Competitors"
              description="If your competitors have Google Local Service Ads running and you don't, you are losing leads right now. Every day without an active LSA campaign is revenue flowing to the business above you in search. Here's what we see every day from businesses that come to us after letting competitors take the top spot:"
            />
            <div className="space-y-6 mt-12">
              {[
                { title: "You're Paying Per Click, Not Per Lead.", desc: "Traditional Google Ads charge you every time someone clicks your ad — regardless of whether they call you, book a job, or immediately leave your site. That means you are funding bounced traffic, accidental clicks, and tire-kickers. LSA flips this model entirely: you only pay when a qualified customer contacts you directly." },
                { title: "Your Competitors Have the Google Verified Badge — You Don't.", desc: "The blue checkmark Google Verified badge signals to potential customers that Google has confirmed your business identity, licenses, insurance, and background. It is one of the clearest trust signals Google offers in local search. Without it, your business looks unverified next to competitors who carry it — and prospects click theirs first, especially for high-trust service categories like home services and healthcare." },
                { title: "Your LSA Profile Is Not Optimized — So Your Ranking Suffers.", desc: "Google's LSA algorithm ranks businesses based on review count, responsiveness, service area relevance, and profile completeness. Most businesses set up their LSA profile once and never touch it again. That means you are being ranked below competitors who are actively managing their profile every single week." },
                { title: "You're Getting Charged for Leads You Should Never Have Paid For.", desc: "Invalid leads happen — spam calls, wrong numbers, calls from outside your service area. If you do not know how to dispute these leads and claim credits through Google's system, you are simply paying for them. Effective LSA management means auditing every lead and recovering every dollar you should not have spent." },
                { title: "You Have No Idea What Your Cost Per Lead Actually Is.", desc: "Without proper LSA tracking and reporting, you cannot measure what is working, which service categories drive the most leads, or whether your budget is set correctly. You are flying blind — and that means you cannot grow with confidence." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <h4 className="text-base font-display font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-center mt-8 animate-fade-up">
              These are exactly the problems GrowSmallBiz solves — so you stop wasting budget and start getting the leads your business deserves.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS (Google Verified terminology updates) ─── */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="What You Get When Your LSA Campaign Is"
              titleHighlight="Managed the Right Way"
              description="Google Local Service Ads are not difficult to run — they are difficult to run well. The difference between an underperforming LSA account and one that generates consistent, high-quality leads every week comes down to optimization, oversight, and expertise."
            />
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {[
                { icon: Eye, title: "You Show Up First", desc: "LSA ads appear at the absolute top of Google search results, above sponsored PPC ads and above the local map pack. When a customer in your area searches for your service, they see your business first." },
                { icon: DollarSign, title: "You Pay Only for Verified, Real Customer Leads", desc: "Unlike traditional PPC where you pay per click, LSA charges you only when a customer directly calls, messages, or books through your ad. Every dollar is spent on genuine customer contact." },
                { icon: ShieldCheck, title: "The Google Verified Badge Adds a Layer of Trust", desc: "Businesses that pass Google's screening display the Google Verified badge — a blue checkmark confirming that Google has background-checked the business, verified active licenses, and confirmed required insurance. The badge works alongside your review count, response time, and profile completeness to help customers choose your business in a crowded LSA lineup." },
                { icon: FileCheck, title: "Invalid Leads Get Disputed — You Get Your Money Back", desc: "We review every lead, dispute every invalid charge, and recover credits on your behalf. You only pay for the leads that actually count." },
                { icon: TrendingUp, title: "Your Profile Ranks Higher Over Time", desc: "We actively optimize every ranking factor week over week — reviews, response times, profile completeness, and service area accuracy — so your position improves continuously." },
                { icon: Settings, title: "Your Budget Is Managed to Maximize Lead Volume", desc: "We calibrate your budget based on search volume, competition, and your lead goals — and adjust it as the market changes. No overspending, no underdelivering." },
                { icon: BarChart3, title: "You Get Full Transparency on Every Lead and Every Dollar", desc: "Clear reporting on lead volume, cost per lead, dispute outcomes, and campaign performance. You always know exactly what your LSA campaign is delivering." },
                { icon: Target, title: "A Complete Local Advertising Presence", desc: "We integrate your LSA campaign with your Google Search Ads and organic SEO footprint so every channel reinforces the other and your business dominates local search end to end." },
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

      {/* ─── SERVICES (Google Verified terminology) ─── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="What Our Google Local Service Ads Management"
              titleHighlight="Includes"
            />
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {[
                { icon: ShieldCheck, title: "Google Verified Application Management", desc: "We guide you through every step of the Google Verified screening — background check, license and insurance verification, compliance management — and keep your badge active." },
                { icon: Settings, title: "LSA Profile Setup and Optimization", desc: "We build or rebuild your profile with optimized service categories, accurate service area targeting, business hours, photos, and a compelling business description. A fully optimized profile ranks higher and converts more visitors into callers." },
                { icon: Star, title: "Review Generation and Management", desc: "We implement a systematic review generation strategy connecting with your existing customers to build your review count quickly. More reviews mean better rankings and more leads." },
                { icon: DollarSign, title: "Budget Strategy and Weekly Spend Management", desc: "We set your budget based on service area population, competitive density, and target lead volume — and adjust it weekly based on actual performance data." },
                { icon: ClipboardCheck, title: "Lead Review, Tracking, and Dispute Management", desc: "Every lead your LSA campaign generates gets reviewed. Spam calls, wrong numbers, duplicates, and out-of-area contacts get disputed with Google, and credits are recovered to your account." },
                { icon: MapPin, title: "Service Category and Targeting Optimization", desc: "We analyze which categories generate leads at the best cost per lead and allocate your presence accordingly. We refine your geographic targeting to the zip codes and neighborhoods where your most profitable customers are located." },
                { icon: BarChart3, title: "Performance Reporting and Monthly Strategy Reviews", desc: "Monthly plain-English reports covering lead volume, cost per lead, dispute outcomes, review growth, and ranking position. Plus a strategy review call each month." },
                { icon: Target, title: "Integration with Your Full Local Advertising Strategy", desc: "We align your LSA campaign with your Google Search Ads, local SEO, and website to create a complete local advertising ecosystem where every channel amplifies the others." },
              ].map((svc, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 space-y-3 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svc.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-base font-display font-semibold text-foreground">{svc.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS (Step 2 updated to Google Verified) ─── */}
      <section id="how-lsa-works" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="How We Launch and Manage Your"
              titleHighlight="Google Local Service Ads Campaign"
            />
            <div className="space-y-6 mt-12">
              {[
                { title: "Strategy Call and LSA Readiness Assessment", desc: "We review your current online presence, check your Google Business Profile, assess your review count, verify licensing and insurance status, and evaluate your competitive landscape in your specific service area." },
                { title: "Google Verified Application and Screening", desc: "We manage your entire Google Verified application — documentation collection, background check submission, license and insurance verification — through to badge approval. Average timeline is three to four weeks from submission to badge activation." },
                { title: "Profile Build and Category Optimization", desc: "We build out your LSA profile in full: service categories, service area zip codes, hours, photos, and business description. Categories are selected based on search volume data and competitive analysis." },
                { title: "Budget Setting and Campaign Launch", desc: "We set your initial weekly budget, configure lead preferences and notification settings, then launch and monitor daily through the first two weeks to catch any early adjustments needed." },
                { title: "Lead Monitoring, Dispute Filing, and Review Building", desc: "From launch, we monitor every lead, review calls, categorize contacts, dispute invalid leads immediately, and activate your review generation strategy to grow your ranking." },
                { title: "Ongoing Optimization and Monthly Reporting", desc: "Weekly campaign reviews — budget adjustments, category refinement, dispute monitoring, ranking tracking. Monthly plain-English report plus a strategy review call." },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary">{i + 1}</span>
                    </div>
                    {i < 5 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-6">
                    <h4 className="text-base font-display font-semibold text-foreground mb-2">Step {i + 1} — {step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES (P0: Auto Repair removed → 7 tiles, Google Verified terminology) ─── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="We Specialize in Google Local Service Ads for"
              titleHighlight="These Industries"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { icon: Home, title: "HVAC Companies", desc: "Seasonal demand, emergency calls, and maintenance agreements all require different campaign strategies. We optimize your LSA profile to capture both routine service calls and high-margin emergency requests." },
                { icon: Smile, title: "Dental Practices", desc: "The Google Verified badge gives your dental practice a credibility signal that turns search traffic into new patient appointments. We manage your profile to showcase specialties and generate reviews that move you to the top." },
                { icon: Stethoscope, title: "Med Spas", desc: "An optimized LSA profile with strong reviews and clear service categories positions your med spa as the obvious choice before prospects visit your website. We manage your entire LSA presence to drive consultation bookings." },
                { icon: Wrench, title: "Home Services Contractors", desc: "Plumbers, electricians, roofers, general contractors, landscapers, pest control operators, and flooring professionals — we know what it takes to rank at the top in crowded markets and generate consistent, bookable leads." },
                { icon: PersonStanding, title: "Chiropractic Practices", desc: "LSA positioning puts your practice front and center the moment patients search for relief. We optimize for the service categories and geographic areas that bring in new patients." },
                { icon: Users, title: "Realtors", desc: "We manage the Google Verified application process for qualifying real estate professionals and optimize your profile to generate direct buyer and seller leads from local search." },
                { icon: Camera, title: "Photographers", desc: "We build and manage your profile to reach clients actively searching for a photographer in your area — generating booking inquiries from people ready to hire, not just browse." },
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

      {/* ─── WHY GROWSMALLBIZ (P1: Local→Small) ─── */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Why Small Businesses Choose GrowSmallBiz to"
              titleHighlight="Manage Their LSA Campaigns"
              className="mb-12"
            />
            <div className="space-y-6">
              {[
                { title: "We Work Exclusively with Local Service Businesses.", desc: "We don't serve e-commerce brands, SaaS companies, or national retailers. Our entire agency is built around local service businesses. That focus means deep, practical experience in the exact industries and competitive dynamics that determine whether your LSA campaign succeeds or fails." },
                { title: "Founded by a 30-Year Fortune 500 Executive.", desc: "GrowSmallBiz was founded by Subrata Guha — a digital transformation leader with over 30 years of Fortune 500 experience. You get enterprise-level marketing strategy applied to your local market." },
                { title: "We Manage the Entire Ecosystem — Not Just One Channel.", desc: "We coordinate your LSA with your Google Search Ads, local SEO, website, reputation management, and AI-powered lead follow-up systems. Every dollar works harder because every channel reinforces the others." },
                { title: "We Dispute Invalid Leads and Recover Your Budget.", desc: "Every invalid lead gets reviewed and disputed. Every recoverable credit gets claimed. That discipline alone can recover a meaningful percentage of your monthly ad spend." },
                { title: "We Guarantee Results — In Writing.", desc: "If we commit to a lead generation target and don't hit it within the agreed timeframe, we continue working at no additional management fee until we do." },
                { title: "You Always Know Exactly What Is Happening.", desc: "Plain-English monthly reports covering leads, cost per lead, dispute outcomes, review growth, and ranking position — plus a direct conversation with your account team. No black boxes." },
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

      {/* ─── MID-PAGE CTA (Google Verified terminology) ─── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Ready to Pay for Leads"
              titleHighlight="Instead of Clicks?"
            />
            <p className="text-muted-foreground leading-relaxed text-center mt-6 mb-8">
              Most local businesses are leaving the most valuable advertising real estate in Google search completely unoccupied — or running LSA campaigns that cost more than they should because no one is actively managing them. A free strategy call takes 30 minutes. You will walk away knowing exactly what your LSA opportunity looks like, what it will cost, and what results you can realistically expect in your market.
            </p>
            <div className="bg-card border border-border rounded-xl p-6 mb-8">
              <h4 className="text-base font-display font-semibold text-foreground mb-4">What you get on the call:</h4>
              <ul className="space-y-3">
                {[
                  "A complete review of your current LSA presence (or a clean-slate plan if you have not started)",
                  "A competitive analysis of who is ranking above you and why",
                  "A Google Verified eligibility assessment for your business category",
                  "A realistic cost-per-lead projection for your specific service area",
                  "A custom campaign structure recommendation — service categories, budget, and targeting",
                  "A clear explanation of what GrowSmallBiz will manage, optimize, and report every month",
                  "No pressure, no sales tactics — just a straight conversation about what will work",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <Button variant="hero" size="xl" asChild>
                <a href={strategyUrl} target="_blank" rel="noopener noreferrer">
                  Book My Free LSA Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES SECTION DROPPED (P0-2) — no LSA-specific case studies exist ─── */}

      {/* ─── FAQ (7 Q&As, Google Verified terminology) ─── */}
      <FAQSection
        faqs={faqs}
        title="Frequently Asked Questions About Google Local Service Ads"
        subtitle="Common questions about LSA management"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Local Service Ads?",
          description: "We're here to help you get the most from your LSA campaign.",
          tagline: "Let's get your Google Verified badge and start generating leads.",
        }}
      />

      {/* ─── FOOTER CTA (Google Verified terminology) ─── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Your Competitors Are Already Running Google Local Service Ads.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Are You?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Right now, in your service area, your competitors are capturing leads through Google Local Service Ads that you are not even competing for. The businesses with the Google Verified badge, the most reviews, and the most optimized profiles are collecting calls from customers who never scroll past the top three results. Every day without an active, well-managed LSA campaign is revenue that belongs to someone else.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              GrowSmallBiz manages your complete LSA presence — verification, profile optimization, budget management, lead review, dispute filing, and performance reporting — so you capture your share of that demand starting now. Book your free strategy call today. No obligation, no contract pressure, no fluff. Just a direct conversation about what LSA can do for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href={strategyUrl} target="_blank" rel="noopener noreferrer">
                  Schedule Strategy Call
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

export default LSA;
