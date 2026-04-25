import { Head } from "vite-react-ssg";
import { VideoJsonLd } from "@/components/seo/VideoJsonLd";
import { Header } from "@/components/layout/Header";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { DemoGuarantee } from "@/components/services/DemoGuarantee";
import { DemoPageNav } from "@/components/services/DemoPageNav";
import { Link } from "react-router-dom";

export default function IntegratedPaymentsDemo() {
  return (
    <>
      <Head>
        <title>Integrated Payments for Small Business: Get Paid Faster</title>
        <meta name="description" content="Integrated Payments: Get paid faster. Streamline billing, invoicing, and payment collection. Leading payment processors are integrated. Sign up today!" />
        <meta name="keywords" content="integrated payment solutions, small business invoicing, payment collection, streamline billing, customizable payment options, invoice tracking, reduce paperwork, payment management" />
        <link rel="canonical" href="https://growsmallbiz.io/services/marketing-automation-for-small-business/integrated-payments/" />
      </Head>
      <VideoJsonLd
        name="Integrated Payments Demo"
        description="See how GrowSmallBiz Integrated Payments streamlines billing, invoicing, and payment collection."
        thumbnailUrl="https://growsmallbiz.io/images/growsmallbiz-logo.webp"
        contentUrl="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697c7fc191e6dbb0e427de.mp4"
        uploadDate="2025-01-15"
      />
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero */}
        <section className="py-10 md:py-14" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h1 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-4">Stop Chasing Payments — Invoicing, Billing, and Collection All in One Place</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">Streamline Client Invoicing &amp; Collect Payments Anywhere</p>
            <div className="w-full rounded-2xl overflow-hidden shadow-[0_0_30px_hsl(var(--ghl-card-border)/0.3)] border-2 border-[hsl(var(--ghl-card-border))] mb-8">
              <video controls className="w-full" preload="metadata" playsInline>
                <source src="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697c7fc191e6dbb0e427de.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* Tracking Invoices */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-black text-foreground text-center mb-6">Tracking Invoices &amp; Payments Has Never Been Easier</h2>
            <p className="text-lg text-foreground text-center mb-12">With Integrated Payments, you can get paid faster than ever.</p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/ac6f240f-56e3-4dac-b9b2-062f4b0058c9.png" alt="Flexible Payment Options" className="w-full rounded-lg mb-4" loading="lazy" />
                <h3 className="text-lg font-bold text-foreground mb-2">Flexible Payment Options</h3>
                <p className="text-sm text-muted-foreground">Sell right on your website or even send a SMS link to close deals. Let customers purchase whenever they are ready.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/5c6d0158-8905-4876-95de-56911f59400b.png" alt="Stop Pushing Paper" className="w-full rounded-lg mb-4" loading="lazy" />
                <h3 className="text-lg font-bold text-foreground mb-2">Stop Pushing Paper</h3>
                <p className="text-sm text-muted-foreground">No postage. No paper. No phone tag. Cut back on the wasted time and resources associated with gathering payment.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/fb11cf4a-a785-40aa-8dc4-1b58eaf27650.png" alt="Get Paid Faster" className="w-full rounded-lg mb-4" loading="lazy" />
                <h3 className="text-lg font-bold text-foreground mb-2">Get Paid Faster</h3>
                <p className="text-sm text-muted-foreground">By texting invoice payment links, you'll see much faster response rates than with traditional methods.</p>
              </div>
            </div>

            <div className="text-center">
              <Link to="/services/marketing-automation-for-small-business/#ready-to-talk" className="inline-block bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl hover:opacity-90 transition-all">Live Training</Link>
            </div>
          </div>
        </section>

        {/* Customizable Payment Options & Data */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Customizable Payment Options</h3>
                <p className="text-muted-foreground leading-relaxed">Whether you sell one-time purchases or recurring subscriptions, you can manage it all. Bringing revenue in has never been easier.</p>
              </div>
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/6575d13e-e94d-4590-8b54-4c454fa4713b.png" alt="Customizable Payment Options" className="w-full rounded-xl shadow-lg" loading="lazy" />
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/b3b53dd6-f35e-41af-81c7-d8ea3fd59d9f.png" alt="Data At A Glance" className="w-full rounded-xl shadow-lg" loading="lazy" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Data At A Glance</h3>
                <p className="text-muted-foreground leading-relaxed">Easily see who has completed payment, and who needs follow up. Quickly export to your accounting software with integration-friendly data formats.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Make payments part of the conversation */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">Make payments part of the conversation</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">Get paid fast and keep the conversation alive. Whether you're at home, in-store, or in the field. Our text-to-pay and invoicing system has you covered.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-primary font-semibold uppercase tracking-widest mb-2">Easy and Fast</p>
                <h3 className="text-xl font-bold text-foreground mb-4">Get Paid Faster Than Ever</h3>
                <p className="text-muted-foreground leading-relaxed">Collecting payments isn't anyone's favorite job. Make paying as quick and convenient as possible for your customers with a secure payment link delivered right to their phone.</p>
              </div>
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/a71430fb-499c-405b-ba6e-94a121c0e6cd.png" alt="Get Paid Faster" className="w-full rounded-xl shadow-lg" loading="lazy" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { img: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/47e134ba-0d93-4712-b036-2e447716da9c.png", title: "Options", desc: "From subscription payments to coupons and even collecting taxes, our payments system allows you to customize however you need." },
                { img: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/7169f36e-4517-4be6-9497-56854776d4c3.png", title: "Bank Account", desc: "Connect your bank account to have your money deposited into your account weekly or even daily." },
                { img: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/ff2018b7-40b0-4354-8b8f-ccc34905bee6.png", title: "Line Items", desc: "Easily itemize your invoice to help customers see exactly what they are paying for." },
                { img: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/7b3d59c7-e7c4-4ee8-8c6f-f59e45663c12.png", title: "Payment Methods", desc: "Give flexibility to pay with credit, debit, Google Pay, or Apple Pay." },
                { img: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/8ec90c7b-5ae7-4687-b72b-b9cd9c9d8fd6.png", title: "Advanced Fraud Protection", desc: "Our fraud model helps protect you from taking payments from stolen cards." },
                { img: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/34e6753b-4ad9-4763-9582-8a0904e67b5e.png", title: "Secure Payments", desc: "Our PCI-compliant software protects you and your customers." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-4 text-center">
                  <img src={item.img} alt={item.title} className="w-full rounded-lg mb-3" loading="lazy" />
                  <h4 className="text-sm font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
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
