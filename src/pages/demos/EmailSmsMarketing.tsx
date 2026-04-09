import { Head } from "vite-react-ssg";
import { Header } from "@/components/layout/Header";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { DemoGuarantee } from "@/components/services/DemoGuarantee";
import { DemoPageNav } from "@/components/services/DemoPageNav";
import { Link } from "react-router-dom";

export default function EmailSmsMarketingDemo() {
  return (
    <>
      <Head>
        <title>Email & SMS Marketing Demo for Small Businesses | GrowSmallBiz</title>
        <meta name="description" content="See how GrowSmallBiz Email & SMS Marketing helps you engage leads with automated campaigns." />
        <link rel="canonical" href="https://growsmallbiz.io/services/marketing-automation-for-small-business/email-sms-marketing/" />
      </Head>
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h1 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-4">Turn Cold Leads Into Paying Customers With Automated Email and SMS Campaigns</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">95% of Text Messages Are Read in the 1st Five Minutes</p>
            <div className="w-full rounded-2xl overflow-hidden shadow-[0_0_30px_hsl(var(--ghl-card-border)/0.3)] border-2 border-[hsl(var(--ghl-card-border))] mb-8">
              <video controls className="w-full" preload="metadata" playsInline>
                <source src="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697c5302ec935366dea37a.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* Stop Using Multiple Apps */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-black text-foreground text-center mb-6">Stop Using Multiple Apps For Email &amp; SMS Marketing</h2>
            <p className="text-lg text-foreground text-center mb-8">Integrate them into one for a seamless experience.</p>
            <p className="text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed mb-12">
              Whether you have used MailChimp, Constant Contact, Aweber, GetResponse, HubSpot, Keap, Textedly, or other email/SMS marketing software, this is now fully integrated into your marketing system through our dashboard. Our simple-to-use, drag-and-drop builder has all the features you need to build and send out custom emails or SMS messages to your customers.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/b4085ff4-1374-4759-9e0d-934e265e51eb.png" alt="Email & SMS integration" className="w-full rounded-xl shadow-lg" loading="lazy" />
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-black text-foreground mb-2">Email Marketing</h3>
                  <p className="text-muted-foreground">Our comprehensive and intuitive tools help you create and run email campaigns</p>
                </div>
                <div>
                  <h3 className="text-xl font-black text-foreground mb-2">SMS Marketing</h3>
                  <p className="text-muted-foreground">Send SMS manually or through Automation. The choice is yours.</p>
                </div>
                <div>
                  <h3 className="text-xl font-black text-foreground mb-2">Automate</h3>
                  <p className="text-muted-foreground">You can automate both email and SMS conversations, campaigns, opt-ins, appointment booking, and even set up an SMS after-hours service so that you never miss a sales opportunity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personalize and Customize */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-primary font-semibold uppercase tracking-widest mb-2">Email &amp; SMS</p>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">Personalize and Customize</h2>
                <p className="text-muted-foreground leading-relaxed">Easily create customized email and text campaigns using the drag-and-drop template builder. Personalize all of your messages using a simple drop-down menu to personalize each message so your contacts will feel you are talking directly to them.</p>
              </div>
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/bc643623-9d6f-470d-bfab-57f7e13995c8.png" alt="Personalize and Customize" className="w-full rounded-xl shadow-lg" loading="lazy" />
            </div>

            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">Create automated replies for booking appointments</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">It's not always possible to physically answer a phone or message, but you don't want to miss the opportunity to make a booking. This is where the AI booking bot steps in and takes care of it for you.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-semibold uppercase tracking-widest mb-2">Every Conversation In One Place</p>
                <h3 className="text-xl font-bold text-foreground mb-4">Communicate Efficiently With Customers and Leads</h3>
                <p className="text-muted-foreground leading-relaxed">Reach your customers wherever they are with text or email messaging. Request reviews, connect with website visitors, collect payments, respond to Facebook &amp; Google Messages, and market to customers and leads all from your app.</p>
              </div>
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/b979a746-720d-414a-b37f-f2596589b4e0.png" alt="Communicate Efficiently" className="w-full rounded-xl shadow-lg" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Combine marketing strategy */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">Combine marketing strategy to increase effectiveness</h2>
            <p className="text-muted-foreground leading-relaxed">SMS messages have a 98% average open rate making it great for promotions and offers. Email messages are great relationship builders as well as promotional tools. Combined, they can be a force to be reckoned with.</p>
          </div>
        </section>

        <IntegrationsSection />
        <DemoGuarantee />
        <DemoPageNav />
      </main>
    </>
  );
}
