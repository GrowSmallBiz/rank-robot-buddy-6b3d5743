import { Head } from "vite-react-ssg";
import { VideoJsonLd } from "@/components/seo/VideoJsonLd";
import { Header } from "@/components/layout/Header";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { DemoPageNav } from "@/components/services/DemoPageNav";
import { Link } from "react-router-dom";

export default function WebsiteBuilderDemo() {
  return (
    <>
      <Head>
        <title>Website Builder Demo for Small Businesses: Build a Website Without Code</title>
        <meta name="description" content="GrowSmallBiz DIY website builder: Build a fast, mobile-friendly website without coding for small businesses. Sign up today!" />
        <meta name="keywords" content="website builder, small business website, drag-and-drop website builder, mobile-friendly website, marketing automation, user-friendly website tools, no coding website creation, secure website solutions" />
        <link rel="canonical" href="https://growsmallbiz.io/services/marketing-automation-for-small-business/website-builder/" />
      </Head>
      <VideoJsonLd
        name="Website Builder Demo"
        description="Build a fast, professional website that captures leads — no developer needed."
        thumbnailUrl="https://growsmallbiz.io/images/growsmallbiz-logo.webp"
        contentUrl="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697bd00f8a085fea630af5.mp4"
        uploadDate="2025-01-15"
      />
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero */}
        <section className="py-10 md:py-14" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h1 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-4 bg-gradient-heading bg-clip-text text-transparent">
              Website &amp; Landing Page Builder
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Your Website Is The Hub Of Your Marketing - Now You Can Easily Connect It
            </p>

            <div className="w-full rounded-2xl overflow-hidden shadow-[0_0_30px_hsl(var(--ghl-card-border)/0.3)] border-2 border-[hsl(var(--ghl-card-border))] mb-8">
              <video controls className="w-full" preload="metadata" playsInline>
                <source src="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697bd00f8a085fea630af5.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* 93% of consumers */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent">
              93% of consumers use search engines for purchase and service decisions
            </h2>
            <p className="text-muted-foreground text-lg">
              If you don't have a website, you're only visible to 7% of your potential customers.
            </p>
          </div>

          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <img
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/0677a927-c51e-4f2e-a056-3748c6375f68.png"
                  alt="Build Beautiful Websites"
                  className="w-full rounded-lg mb-4"
                  loading="lazy"
                />
                <h3 className="text-lg font-bold text-foreground mb-2">Build Beautiful Websites</h3>
                <p className="text-sm text-muted-foreground">
                  Using our simple, drag-and-drop interface, you don't have to be a professional coder to build beautiful websites.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <img
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/5354c873-a198-45b7-87d7-ee7ca83fa7c1.png"
                  alt="Mobile Friendly"
                  className="w-full rounded-lg mb-4"
                  loading="lazy"
                />
                <h3 className="text-lg font-bold text-foreground mb-2">Mobile Friendly</h3>
                <p className="text-sm text-muted-foreground">
                  With more and more people moving to viewing websites on mobile devices, our builder helps you build a mobile-friendly site.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <img
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/a52e1470-c95e-48e8-8dcb-3a57bbb2106b.png"
                  alt="Fully Secure"
                  className="w-full rounded-lg mb-4"
                  loading="lazy"
                />
                <h3 className="text-lg font-bold text-foreground mb-2">Fully Secure</h3>
                <p className="text-sm text-muted-foreground">
                  While many website companies offer website security for an extra cost, SSL is included on all of our websites at no charge.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/services/marketing-automation-for-small-business/#ready-to-talk"
                className="inline-block bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl hover:opacity-90 transition-all"
              >
                Watch A Demo
              </Link>
            </div>
          </div>
        </section>

        {/* No Limits */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent">
  No Limits
</h2>
                <h3 className="text-xl font-bold text-foreground mb-6">Build all the websites you need</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a business, you have ideas. They don't always fall into the category of one site. There is no need to pay for multiple hosting accounts to build the variety of sites you need for your business. Build as many as you need on our platform.
                </p>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/413b40ed-58d2-4863-a36a-dd5399e801ed.png"
                alt="No Limits - Build all websites"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Intuitive Drag-and-drop builder */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/BdnD3TjkxQR9s3Yi5FPM/media/63dae1244ded97cc059e157b.png"
                alt="Drag-and-drop builder"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
              <div>
                <p className="text-primary font-semibold uppercase tracking-widest mb-2">Intuitive</p>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6 bg-gradient-heading bg-clip-text text-transparent">
  Drag-and-drop builder
</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Using our intuitive builder is as simple as drag and drop. Customize and add a multitude of elements, including countdown timers, videos, a calendar, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Websites are where people go */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6 bg-gradient-heading bg-clip-text text-transparent">
              Websites are where people go if they want more information
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              You can showcase examples of work, testimonials, information about upcoming promotions, and more.
            </p>
          </div>
        </section>

        <IntegrationsSection />
        <DemoPageNav />
      </main>
    </>
  );
}
