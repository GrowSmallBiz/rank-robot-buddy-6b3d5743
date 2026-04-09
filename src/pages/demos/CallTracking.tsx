import { Head } from "vite-react-ssg";
import { VideoJsonLd } from "@/components/seo/VideoJsonLd";
import { Header } from "@/components/layout/Header";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { DemoGuarantee } from "@/components/services/DemoGuarantee";
import { DemoPageNav } from "@/components/services/DemoPageNav";
import { Link } from "react-router-dom";
import { Phone, BarChart3, Shield, Activity } from "lucide-react";

export default function CallTrackingDemo() {
  return (
    <>
      <Head>
        <title>Call Tracking Demo for Small Businesses | GrowSmallBiz</title>
        <meta name="description" content="Know which ads and channels are actually driving calls. GrowSmallBiz Call Tracking records every conversation and shows you exactly where your best leads are coming from." />
        <link rel="canonical" href="https://growsmallbiz.io/services/marketing-automation-for-small-business/call-tracking/" />
      </Head>
      <VideoJsonLd
        name="Call Tracking Demo"
        description="Know which ads and channels are actually driving calls. Track, record, and analyze every call to optimize your marketing spend."
        thumbnailUrl="https://growsmallbiz.io/images/growsmallbiz-logo.png"
        contentUrl="https://storage.googleapis.com/msgsndr/SwP9BuV0qUOPa58lqK1y/media/649b4a9fc681295ac4876614.mp4"
        uploadDate="2025-01-15"
      />
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="py-10 md:py-14" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <p className="text-primary font-semibold uppercase tracking-widest mb-4">CALL TRACKING</p>
            <h1 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
              Track Every Call, Record Conversations, And Attribute Leads To Their Source
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Know exactly where your phone leads come from. Track, record, and analyze every call to optimize your marketing spend and improve your team's performance.
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="w-full rounded-2xl overflow-hidden shadow-[0_0_30px_hsl(var(--ghl-card-border)/0.3)] border-2 border-[hsl(var(--ghl-card-border))]">
              <video controls className="w-full" preload="metadata" playsInline>
                <source src="https://storage.googleapis.com/msgsndr/SwP9BuV0qUOPa58lqK1y/media/649b4a9fc681295ac4876614.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-black text-foreground text-center mb-12">
              Everything You Need To Track & Optimize Calls
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Phone, title: "Call Attribution", description: "Assign unique tracking numbers to campaigns and know exactly which ads drive calls." },
                { icon: Shield, title: "Call Recording", description: "Record and review calls for quality assurance, training, and dispute resolution." },
                { icon: BarChart3, title: "Real-Time Analytics", description: "Track call volume, duration, missed calls, and source attribution in real time." },
                { icon: Activity, title: "Performance Insights", description: "Get detailed reports on call outcomes, peak hours, and team performance to make data-driven decisions." },
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

        {/* Know Your ROI */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-2xl md:text-4xl font-black text-foreground mb-6">
              Know Your ROI On Every Marketing Dollar
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Stop guessing which campaigns drive phone calls. With call tracking, you'll know exactly which marketing channels deliver the highest-quality leads so you can double down on what works.
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
