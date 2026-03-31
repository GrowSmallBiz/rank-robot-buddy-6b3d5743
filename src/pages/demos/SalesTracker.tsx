import { Head } from "vite-react-ssg";
import { Header } from "@/components/layout/Header";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { DemoGuarantee } from "@/components/services/DemoGuarantee";
import { DemoPageNav } from "@/components/services/DemoPageNav";
import { Link } from "react-router-dom";

export default function SalesTrackerDemo() {
  return (
    <>
      <Head>
        <title>Sales Pipeline Demo | GrowSmallBiz</title>
        <meta name="description" content="See how GrowSmallBiz Sales Pipeline helps you see where every prospect is and close more deals." />
        <link rel="canonical" href="https://growsmallbiz.io/services/marketing-automation-for-small-business/sales-tracker/" />
      </Head>
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <p className="text-primary font-semibold uppercase tracking-widest mb-4">SALES PIPELINE</p>
            <h1 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
              See Where Every Prospect Is And Close More Deals
            </h1>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="w-full rounded-2xl overflow-hidden shadow-[0_0_30px_hsl(var(--ghl-card-border)/0.3)] border-2 border-[hsl(var(--ghl-card-border))]">
              <video controls className="w-full" preload="metadata" playsInline>
                <source src="https://storage.googleapis.com/msgsndr/SwP9BuV0qUOPa58lqK1y/media/649b45f974a73015f562f32f.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Tracking Sales Opportunities */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-black text-foreground mb-6">
                  Tracking Sales Opportunities Has Never Been Easier
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  An opportunity (sales) pipeline is an absolute must in sales; it is a real-time view of your current sales activities.
                </p>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/b2d0783d-eac3-46e4-96bb-bc87f6d93dce.png"
                alt="Sales pipeline tracking"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Fully Customizable */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/89eacbc8-536d-4e0f-9923-da1253d726b4.png"
                alt="Fully customizable pipeline"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                  Fully Customizable
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Track a lead's journey through your sales process. Sales pipelines are fully customizable to whatever your sales cycle may be. This makes sure that you always know who is where.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Multiple Pipelines */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                  Multiple Pipelines
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Create pipelines for any or all products/services you offer and even additional pipelines for internal operations to help your team stay organized.
                </p>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/8507820d-2c47-466d-85e3-9af88b082e82.png"
                alt="Multiple pipelines"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Automate */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
              Automate
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              Automate leads moving through the process via workflow automations or manually with the drag-and-drop feature, moving them from step to step, or do a little of both.
            </p>
            <Link
              to="/services/marketing-automation-for-small-business#ready-to-talk"
              className="text-primary font-semibold hover:underline text-lg"
            >
              Watch A Demo ➡️
            </Link>
          </div>
        </section>

        {/* Pipeline Reporting */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
                  Pipeline Reporting
                </h2>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                  Nothing falls through the cracks
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  You can filter what you see by time/date, pipeline name, user, and workflow. You can also filter by open, won, lost, or abandoned. Opportunities will show up on your dashboard reports and reveal things like sales conversion and lead value.
                </p>
              </div>
              <img
                src="https://img.freepik.com/free-vector/business-people-with-magnifying-glass-diagrams_1262-18919.jpg?w=900"
                alt="Pipeline reporting"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Map your customer's journey */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-2xl md:text-4xl font-black text-foreground mb-6">
              Map your customer's journey
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Using the pipeline tracker, you can add all of the stages of your customer's journey. Your dashboard will give a clear overview of where all of your leads are and what needs to happen next to close more deals.
            </p>
          </div>
        </section>

        {/* At A Glance */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-semibold uppercase tracking-widest mb-2">AT A GLANCE</p>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                  See your sales opportunities
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you are tracking your sales team's activity or the effectiveness of your other marketing strategies, you can easily see where all of your customers are in the pipeline.
                </p>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/BdnD3TjkxQR9s3Yi5FPM/media/63def1c4a486204c7825fd66.png"
                alt="Sales opportunities at a glance"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <IntegrationsSection />
        <DemoGuarantee />
        <DemoPageNav />
      </main>
    </>
  );
}
