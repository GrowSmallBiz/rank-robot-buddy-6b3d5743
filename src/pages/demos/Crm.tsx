import { Head } from "vite-react-ssg";
import { VideoJsonLd } from "@/components/seo/VideoJsonLd";
import { Header } from "@/components/layout/Header";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { DemoGuarantee } from "@/components/services/DemoGuarantee";
import { DemoPageNav } from "@/components/services/DemoPageNav";
import { Users, ListFilter, Settings, Workflow } from "lucide-react";

export default function CrmDemo() {
  return (
    <>
      <Head>
        <title>CRM for Small Businesses: Manage Customers & Marketing | GrowSmallBiz</title>
        <meta name="description" content="GrowSmallBiz CRM: Manage customers & marketing in one place. Fix your leaky bucket - Never let a lead slip through the cracks. Sign up today!" />
        <meta name="keywords" content="CRM solutions, customer relationship management, marketing integration, small business CRM, contact tracking, smart lists, customer management software, GrowSmallBiz" />
        <link rel="canonical" href="https://growsmallbiz.io/services/marketing-automation-for-small-business/crm/" />
        <meta property="og:title" content="Manage customers & marketing in one place | GrowSmallBiz" />
      </Head>
      <VideoJsonLd
        name="CRM Demo"
        description="Never let a lead slip through the cracks. GrowSmallBiz CRM tracks every customer, prospect, and job from first contact to closed deal."
        thumbnailUrl="https://growsmallbiz.io/images/growsmallbiz-logo.webp"
        contentUrl="https://storage.googleapis.com/msgsndr/SwP9BuV0qUOPa58lqK1y/media/649b4a9fc681291412876613.mp4"
        uploadDate="2025-01-15"
      />
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="py-10 md:py-14" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <p className="text-primary font-semibold uppercase tracking-widest mb-4">CRM</p>
            <h1 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-6 bg-gradient-heading bg-clip-text text-transparent">
              All-in-One CRM for Small Business: Manage Leads, Contacts & Marketing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              When you are focused on turning leads into customers, having a powerful CRM is paramount. Using our CRM, you can truly integrate your business with all of your marketing and follow-up.
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="w-full rounded-2xl overflow-hidden shadow-[0_0_30px_hsl(var(--ghl-card-border)/0.3)] border-2 border-[hsl(var(--ghl-card-border))]">
              <video controls className="w-full" preload="metadata" playsInline>
                <source src="https://storage.googleapis.com/msgsndr/SwP9BuV0qUOPa58lqK1y/media/649b4a9fc681291412876613.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-black text-foreground text-center mb-12 bg-gradient-heading bg-clip-text text-transparent">
              Manage Contacts, Deals, And Relationships
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Users, title: "Contact Tracking", description: "Keep customer and prospect information at your fingertips, integrated with all your marketing and follow-up." },
                { icon: ListFilter, title: "Smart Lists", description: "Create filtered lists any way you need — from people in a certain area to those who bought specific products." },
                { icon: Settings, title: "Fully Customizable", description: "Add custom fields to track anything you need. Warranty dates, anniversaries — you name it." },
                { icon: Workflow, title: "Marketing Integration", description: "Seamlessly connect your CRM with email campaigns, SMS sequences, and workflow automations for end-to-end lead management." },
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

        {/* Unified View */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-2xl md:text-4xl font-black text-foreground mb-6 bg-gradient-heading bg-clip-text text-transparent">
              One Unified View Of Every Customer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              See every interaction, every touchpoint, and every deal in one place. No more switching between tools or losing track of conversations. Your entire customer history, at your fingertips.
            </p>
          </div>
        </section>

        <IntegrationsSection />
        <DemoGuarantee headingOverride="Try GrowSmallBiz CRM Risk-Free with 30-Day Money-Back Guarantee" />
        <DemoPageNav />
      </main>
    </>
  );
}
