import { Head } from "vite-react-ssg";
import { Header } from "@/components/layout/Header";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { DemoGuarantee } from "@/components/services/DemoGuarantee";
import { DemoPageNav } from "@/components/services/DemoPageNav";
import { Search, UserCheck, Send, MapPin } from "lucide-react";

export default function GenerateLeadsDemo() {
  return (
    <>
      <Head>
        <title>Generate Leads Live Demo | GrowSmallBiz</title>
        <meta name="description" content="See how GrowSmallBiz Generate Leads Live helps you find and capture leads in real time." />
        <link rel="canonical" href="https://growsmallbiz.io/services/marketing-automation-for-small-business/generate-leads" />
      </Head>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <p className="text-primary font-semibold uppercase tracking-widest mb-4">GENERATE LEADS LIVE</p>
            <h1 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
              Find And Capture Leads In Real Time With Smart Prospecting Tools
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Discover and capture new leads with smart prospecting tools. Find potential customers based on location, industry, and business type — and reach out automatically.
            </p>
          </div>
        </section>

        {/* Source URL embed - no video available, show features */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
              See It In Action
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Watch how the lead generation engine finds and captures prospects in real time.
            </p>
            <a
              href="https://lp.growsmallbiz.io/generate-lead"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              View Live Demo ➡️
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-black text-foreground text-center mb-12">
              Smart Prospecting Tools At Your Fingertips
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Search, title: "Lead Discovery", description: "Search for potential customers by location, industry, keywords, and more." },
                { icon: UserCheck, title: "Contact Enrichment", description: "Get phone numbers, emails, and business details for your prospects automatically." },
                { icon: Send, title: "Auto-Outreach", description: "Send personalized outreach sequences to new leads directly from the platform." },
                { icon: MapPin, title: "Location-Based Search", description: "Find businesses and prospects in specific geographic areas to target your ideal local market." },
              ].map((feature) => (
                <div key={feature.title} className="bg-card border border-border rounded-xl p-8">
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fill Pipeline */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-2xl md:text-4xl font-black text-foreground mb-6">
              Fill Your Pipeline With Qualified Leads
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Stop waiting for leads to come to you. Our prospecting engine actively discovers potential customers in your target market and feeds them directly into your CRM for immediate follow-up.
            </p>
          </div>
        </section>

        <IntegrationsSection />
        <DemoGuarantee />
        <DemoPageNav />
      </main>
    </>
  );
}
