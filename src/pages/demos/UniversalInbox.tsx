import { Head } from "vite-react-ssg";
import { Header } from "@/components/layout/Header";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { DemoGuarantee } from "@/components/services/DemoGuarantee";
import { DemoPageNav } from "@/components/services/DemoPageNav";
import { Link } from "react-router-dom";

export default function UniversalInboxDemo() {
  return (
    <>
      <Head>
        <title>Universal Inbox Demo for Small Businesses | GrowSmallBiz</title>
        <meta name="description" content="See how GrowSmallBiz Universal Inbox consolidates SMS, email, social media, webchat and calls into one place." />
        <link rel="canonical" href="https://growsmallbiz.io/services/marketing-automation-for-small-business/universal-inbox/" />
      </Head>
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h1 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-4">
              Universal Inbox
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              Bring All Communication From All Channels, Into One Universal Inbox
            </p>
            <p className="text-base text-muted-foreground mb-10 max-w-3xl mx-auto">
              SMS, Email, Social Media Messenger, Social Media Comments, Webchat &amp; Recorded Calls
            </p>

            {/* Video */}
            <div className="w-full rounded-2xl overflow-hidden shadow-[0_0_30px_hsl(var(--ghl-card-border)/0.3)] border-2 border-[hsl(var(--ghl-card-border))] mb-8">
              <video controls className="w-full" preload="metadata" playsInline>
                <source src="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697cdbbd180f262a3725d9.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* No more going to multiple websites */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-8">
              No more going to multiple websites or checking multiple devices just to get your messages
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed mb-12">
              Communicate with your customers and prospects from one inbox, regardless if they are communicating via Email, Phone, SMS, Facebook Messenger, Facebook or Instagram Comments, Google Business, and Instagram DM. You never have to leave your inbox. Pick up the conversation seamlessly right inside the contact record with one centralized inbox. This brings all forms of communication into one spot.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Every Message In One Place</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Connect with leads and customers through texting, live chat, bulk messaging, Google Business Profile, and Facebook messages.
                </p>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/55418823-fcfc-429e-afd0-f94cdbf6da52.png"
                alt="Every Message In One Place"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Be channel-agnostic / Chat with context / Get started */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/f47426db-1317-42a5-8757-84f7b26c7c1b.png"
                alt="Be channel-agnostic"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">Be channel-agnostic</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  No matter where it started, you can keep it organized.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">Chat with context</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  See the history of every conversation and interaction.
                </p>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/7b984ed6-e18c-4462-9fa8-42dd247f2f0e.png"
                alt="Chat with context"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/1d7598c5-6793-4963-a282-4b133e104881.png"
                alt="Get started in seconds"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">Get started in seconds.</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Connect your channels and start messaging right away.
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

        {/* Webchat, Facebook & Google Business Profile Integration */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-semibold uppercase tracking-widest mb-2">Webchat, Facebook &amp; Google Business Profile Integration</p>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">Turn Messages Into Revenue</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Convert website, Facebook, and Google Business Profile visitors into customers. Engage visitors immediately with live chat, or save time by auto-responding with our AI chatbot.
                </p>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/BdnD3TjkxQR9s3Yi5FPM/media/1ef4f199-bada-4727-a437-be65b78a0318.png"
                alt="Turn Messages Into Revenue"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Customizable Viewing Options */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img
                src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48087692052/original/cHxVNz-bkXEPjlbMI6bxwTHMO5PU1ni4Og.jpg?1613574964"
                alt="Customizable Viewing Options"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">Customizable Viewing Options</h2>
                <p className="text-muted-foreground leading-relaxed">
                  With your mobile and desktop apps, you can communicate with your leads, customers, and teams from anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* All customer interactions */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Every Message In One Place</h3>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                  All customer interactions in one Unified Inbox
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Never miss another chat, review, survey, or referral. Now every customer interaction lives in a single place, right in your inbox — ready for you to respond to.
                </p>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/554c6e80-bffd-4e97-bc92-e60cb088c65a.png"
                alt="All customer interactions"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* 70% stat */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              70% of customers prefer to message with a business, rather than speaking on the phone
            </h2>
            <p className="text-muted-foreground text-lg">- The Washington Post</p>
          </div>
        </section>

        {/* Automate Text Back */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-semibold uppercase tracking-widest mb-2">Automate Text Back For Missed Calls</p>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">Never miss a customer call</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Engage callers immediately with auto-missed call text back to keep the conversation alive so you never lose business because you were unavailable.
                </p>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/BdnD3TjkxQR9s3Yi5FPM/media/a2e2cc13-a3b9-4f3a-9403-4590e95bda02.png"
                alt="Automate Text Back"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Stats: 3X, 95%, 10X */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-12">
              Your business wins when you interact with customers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-xl p-8">
                <p className="text-5xl font-black text-primary mb-2">3X</p>
                <p className="text-foreground font-bold mb-2">higher conversion</p>
                <p className="text-sm text-muted-foreground">Reviews requested via text message vs reviews requested via email.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-8">
                <p className="text-5xl font-black text-primary mb-2">95%</p>
                <p className="text-foreground font-bold mb-2">of messages are read</p>
                <p className="text-sm text-muted-foreground">Texts have a 99% open rate. 95% of those texts are read within 5 minutes.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-8">
                <p className="text-5xl font-black text-primary mb-2">10X</p>
                <p className="text-foreground font-bold mb-2">faster than calling</p>
                <p className="text-sm text-muted-foreground">Text messaging is the new standard for quick and easy communication.</p>
              </div>
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
