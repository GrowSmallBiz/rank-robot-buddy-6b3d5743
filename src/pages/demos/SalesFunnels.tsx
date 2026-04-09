import { Head } from "vite-react-ssg";
import { VideoJsonLd } from "@/components/seo/VideoJsonLd";
import { Header } from "@/components/layout/Header";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { DemoGuarantee } from "@/components/services/DemoGuarantee";
import { DemoPageNav } from "@/components/services/DemoPageNav";
import { Layers, FlaskConical, ShoppingCart, LayoutTemplate } from "lucide-react";

export default function SalesFunnelsDemo() {
  return (
    <>
      <Head>
        <title>Sales Funnels Demo for Small Businesses | GrowSmallBiz</title>
        <meta name="description" content="Build landing pages and sales sequences that move prospects from first click to booked job — without needing a funnel designer." />
        <link rel="canonical" href="https://growsmallbiz.io/services/marketing-automation-for-small-business/sales-funnels/" />
      </Head>
      <VideoJsonLd
        name="Sales Funnels Demo"
        description="Build landing pages and sales sequences that move prospects from first click to booked job."
        thumbnailUrl="https://growsmallbiz.io/images/growsmallbiz-logo.webp"
        contentUrl="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697bd00f8a085fea630af5.mp4"
        uploadDate="2025-01-15"
      />
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="py-10 md:py-14" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <p className="text-primary font-semibold uppercase tracking-widest mb-4">SALES FUNNELS</p>
            <h1 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
              Build High-Converting Sales Funnels With Smart, Auto-Generated Layouts
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Create multi-step sales funnels that guide prospects from awareness to purchase. Our funnel builder makes it easy to design landing pages, order forms, and upsell sequences.
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="w-full rounded-2xl overflow-hidden shadow-[0_0_30px_hsl(var(--ghl-card-border)/0.3)] border-2 border-[hsl(var(--ghl-card-border))]">
              <video controls className="w-full" preload="metadata" playsInline>
                <source src="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697bd00f8a085fea630af5.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-black text-foreground text-center mb-12">
              Everything You Need To Build Funnels That Convert
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: LayoutTemplate, title: "Funnel Templates", description: "Start with proven templates for lead gen, webinars, product launches, and more." },
                { icon: FlaskConical, title: "A/B Testing", description: "Test different headlines, images, and offers to maximize your conversion rates." },
                { icon: ShoppingCart, title: "Order Forms & Upsells", description: "Add order forms, one-click upsells, and downsells to maximize revenue per customer." },
                { icon: Layers, title: "Multi-Step Funnels", description: "Guide prospects through a tailored journey from first click to final purchase with multi-step funnel flows." },
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

        {/* Convert More Leads */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-2xl md:text-4xl font-black text-foreground mb-6">
              Turn Clicks Into Customers
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Stop losing leads to clunky checkout flows. Our sales funnels are designed to reduce friction, increase conversions, and maximize the value of every visitor to your site.
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
