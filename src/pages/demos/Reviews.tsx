import { Head } from "vite-react-ssg";
import { VideoJsonLd } from "@/components/seo/VideoJsonLd";
import { Header } from "@/components/layout/Header";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { DemoGuarantee } from "@/components/services/DemoGuarantee";
import { DemoPageNav } from "@/components/services/DemoPageNav";
import { Link } from "react-router-dom";

export default function ReviewsDemo() {
  return (
    <>
      <Head>
        <title>Reviews Demo for Small Businesses | GrowSmallBiz</title>
        <meta name="description" content="More 5-star reviews mean more calls, more bookings, and a reputation your competitors can't touch. See how GrowSmallBiz automates the entire process." />
        <link rel="canonical" href="https://growsmallbiz.io/services/marketing-automation-for-small-business/reviews/" />
      </Head>
      <VideoJsonLd
        name="Reviews Management Demo"
        description="See how GrowSmallBiz automates 5-star review collection to build an unbeatable reputation."
        thumbnailUrl="https://growsmallbiz.io/images/growsmallbiz-logo.png"
        contentUrl="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697cb20f8a08e4aa6358b3.mp4"
        uploadDate="2025-01-15"
      />
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="py-10 md:py-14" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <p className="text-primary font-semibold uppercase tracking-widest mb-4">REVIEWS</p>
            <h1 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
              AI-Powered reviews to grow your business
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Double your monthly reviews in less than 60 days with textable review invites, automations, and instant AI-powered replies—all in one easy-to-use platform.
            </p>

            {/* Hero Image */}
            <img
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/31e31ab8-658f-4140-9ea9-01b50ed9448b.jpeg"
              alt="AI-Powered Reviews Dashboard"
              className="w-full rounded-2xl shadow-lg mb-8"
              loading="lazy"
            />
          </div>
        </section>

        {/* Attract New Customers Section */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-black text-foreground mb-6">
                  Attract new customers with more 5-star reviews
                </h2>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Drive more traffic as the #1 rated business in your area
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  93% of customers say online reviews had an impact on their buying decisions. With GrowSmallBiz, you'll bring more customers in the door with better and more frequent reviews, just by texting and automating review requests.
                </p>
                <Link
                  to="/services/marketing-automation-for-small-business/#ready-to-talk"
                  className="text-primary font-semibold hover:underline text-lg"
                >
                  Watch a demo ➡️
                </Link>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/d3584017-5df7-4803-a9c5-26cd5ce701a3.png"
                alt="5-star reviews dashboard"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Benefits Bar */}
        <section className="py-8" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {["Get More Reviews", "Respond Using AI", "Rank Higher On Google", "Win More Business"].map((item) => (
                <div key={item} className="py-4 px-2">
                  <p className="text-foreground font-bold text-sm md:text-base">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-center mt-6 max-w-3xl mx-auto leading-relaxed">
              With more 5-star reviews, your business will rise to the first page on Google when potential customers search for businesses in your area. By becoming the obvious choice, you'll convert new leads faster with your stellar reputation.
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="w-full rounded-2xl overflow-hidden shadow-[0_0_30px_hsl(var(--ghl-card-border)/0.3)] border-2 border-[hsl(var(--ghl-card-border))]">
              <video controls className="w-full" preload="metadata" playsInline>
                <source src="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697cb20f8a08e4aa6358b3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Get found on Facebook */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/b4ad0a90-8fc4-490a-af57-6f3d17320664.png"
                alt="Facebook reviews"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Get found on Facebook faster by new customers
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  When people search for businesses on Facebook, they're going to find and choose the one with the best reviews—and with Reviews, that'll be your business.
                </p>
                <Link
                  to="/services/marketing-automation-for-small-business/#ready-to-talk"
                  className="text-primary font-semibold hover:underline text-lg"
                >
                  Watch a demo ➡️
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Connect and manage review sites */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Connect and manage all your review sites in one easy place
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Beyond Google and Facebook, connect all of your key review sites, like Yellow Pages, BBB, Yahoo, Amazon, Apple, DealerRater, and more, so you can keep track of all your customer feedback in one place.
                </p>
                <Link
                  to="/services/marketing-automation-for-small-business/#ready-to-talk"
                  className="text-primary font-semibold hover:underline text-lg"
                >
                  Watch a demo ➡️
                </Link>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/eab49fa4-0ce9-4499-b009-612bdf637e0c.png"
                alt="Review sites management"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Customer Reviews - Most effective marketing */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/SwP9BuV0qUOPa58lqK1y/media/645d6aa555bb621d7ba10f43.png"
                alt="Customer reviews impact"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                  Customer reviews are the single most effective bit of marketing you can do for your company
                </h2>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  What customers say about your business online…is powerful.
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Reviews give your business credibility and help new customers find you online.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  It's no wonder 92% of consumers trust word-of-mouth recommendations more than any other form of advertising.
                </p>
              </div>
            </div>

            {/* Get Customer Reviews Automatically */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                  Get Customer Reviews Automatically
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Collecting new reviews has never been easier. GrowSmallBiz sends customers to top review sites to share their feedback.
                </p>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/5dc0e53a-d05d-4870-a8cc-4725c1a8588a.png"
                alt="Automatic review collection"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Automate Your Online Reviews */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-semibold uppercase tracking-widest mb-2">Online Reviews</p>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                  Automate Your Online Reviews
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Improve your ratings, build your reputation, and get found online by sending review requests via text to recent customers, responding to and interacting with reviewers, and managing it all from a single inbox.
                </p>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/0d1a6195-f982-4b5d-ae2c-a248e574ec26.png"
                alt="Automate online reviews"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* BrightLocal Stats */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
              How Do Your Clients And Customers Use Reviews?
            </h2>
            <p className="text-muted-foreground mb-12">- BrightLocal Study Results</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-4xl md:text-5xl font-black text-primary mb-2">95%</p>
                <p className="text-sm text-muted-foreground">Search For Local Businesses Online</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-4xl md:text-5xl font-black text-primary mb-2">91%</p>
                <p className="text-sm text-muted-foreground">Read Reviews Before Making A Purchase Decision</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-4xl md:text-5xl font-black text-primary mb-2">84%</p>
                <p className="text-sm text-muted-foreground">View Reviews As Much As A Personal Recommendation</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-4xl md:text-5xl font-black text-primary mb-2">73%</p>
                <p className="text-sm text-muted-foreground">Think Reviews Older Than 3 Months Aren't Relevant</p>
              </div>
            </div>
          </div>
        </section>

        {/* Win More Business */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-4">
              Win More Business with GrowSmallBiz's
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-primary text-center mb-12">
              AI Review and Reputation Management
            </h3>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h4 className="text-lg font-bold text-foreground mb-2">Win More Business</h4>
                <p className="text-primary font-semibold mb-4">Get found with Reviews</p>
                <p className="text-muted-foreground leading-relaxed">
                  Be the obvious choice for people who find you online. Stand out on the sites that matter by easily collecting hundreds of customer reviews.
                </p>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/7028f907-6ad8-460f-9ded-32b9da29c7bb.jpeg"
                alt="Win more business with reviews"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/02cd0758-4067-4dd7-9912-10eaa20de089.png"
                alt="Protect your reputation"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
              <div>
                <h4 className="text-lg font-bold text-foreground mb-2">Protect</h4>
                <p className="text-primary font-semibold mb-4">Protect your reputation</p>
                <p className="text-muted-foreground leading-relaxed">
                  Protect your reputation with a system that proactively catches unhappy customers for offline recovery before they leave that review online.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Turn customer reviews into competitive edge */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                  Turn customer reviews into your competitive edge
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Get new reviews, manage them and promote them across the web. All from one dashboard.
                </p>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/af1df8e8-fe64-4a2c-8ee6-892e6d92a4ba.png"
                alt="Reviews dashboard"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Review Monitoring */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-semibold uppercase tracking-widest mb-2">Review Monitoring</p>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                  Monitor all your reviews in one place
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Access all your customer reviews, for every location, from every source, in one dashboard.
                </p>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/0d1a6195-f982-4b5d-ae2c-a248e574ec26.png"
                alt="Review monitoring dashboard"
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
