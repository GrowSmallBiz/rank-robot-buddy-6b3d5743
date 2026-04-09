import { Head } from "vite-react-ssg";
import { Header } from "@/components/layout/Header";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { DemoGuarantee } from "@/components/services/DemoGuarantee";
import { DemoPageNav } from "@/components/services/DemoPageNav";

export default function SocialMediaPlannerDemo() {
  return (
    <>
      <Head>
        <title>Social Media Planner Demo for Small Businesses | GrowSmallBiz</title>
        <meta name="description" content="Plan and schedule weeks of social content in minutes. GrowSmallBiz Social Media Planner keeps your business visible online without the daily grind." />
        <link rel="canonical" href="https://growsmallbiz.io/services/marketing-automation-for-small-business/social-media-planner/" />
      </Head>
      <Header />
      <main id="main-content" className="pt-20">
        <section className="py-10 md:py-14" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h1 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-4">Schedule Weeks of Social Content in Minutes and Never Miss a Post</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">Create Content, Post, Respond to Comments, and DM's on Auto-Pilot</p>
            <div className="w-full rounded-2xl overflow-hidden shadow-[0_0_30px_hsl(var(--ghl-card-border)/0.3)] border-2 border-[hsl(var(--ghl-card-border))] mb-8">
              <video controls className="w-full" preload="metadata" playsInline>
                <source src="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697d2002ec939081dee944.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* Simplify Social Media */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-primary font-semibold uppercase tracking-widest mb-2">Simplify Social Media</p>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">Tired Of Social Media Posting In Different Places?</h2>
                <p className="text-muted-foreground leading-relaxed">Connect multiple Social Media channels like Google Business Profile, Facebook, Instagram, TikTok, and LinkedIn. Build out your posts for multiple channels and you will be able to immediately post it, schedule the post, or, if needed, have it approved by an admin.</p>
              </div>
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/9e9b8e77-e832-45d2-858f-0faf6ac9b842.png" alt="Simplify Social Media" className="w-full rounded-xl shadow-lg" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Social Planner */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/BdnD3TjkxQR9s3Yi5FPM/media/63e00606a486206e9c26506e.png" alt="Social Planner Calendar" className="w-full rounded-xl shadow-lg" loading="lazy" />
              <div>
                <p className="text-primary font-semibold uppercase tracking-widest mb-2">Social Planner</p>
                <h3 className="text-xl font-bold text-foreground mb-4">Use the Calendar for Planning Posts</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">View all your posts by calendar view or by list view to see what is upcoming and have the ability to pause or edit the posts. And to top it off, you are able to track your engagement metrics in one place across your social media accounts.</p>
                <h4 className="text-lg font-bold text-foreground mb-2">Thousands of Templates Ready to Use</h4>
                <p className="text-muted-foreground">Don't have time to make content? That's ok. We've done the work for you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Post Now or Schedule */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-primary font-semibold uppercase tracking-widest mb-2">Your Timing</p>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">Post Now or Schedule for Later</h2>
                <p className="text-muted-foreground leading-relaxed">Instead of logging into each platform and posting content every day, you can use the scheduling tool to prepare as many posts as you want and schedule them for any point in the future.</p>
              </div>
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/BdnD3TjkxQR9s3Yi5FPM/media/63e007016af20710a55a8ae2.png" alt="Schedule posts" className="w-full rounded-xl shadow-lg" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Social media manager */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/BdnD3TjkxQR9s3Yi5FPM/media/63e0087c6af2073eab5a8b48.png" alt="Social media manager login" className="w-full rounded-xl shadow-lg" loading="lazy" />
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">Do you have a social media manager?</h2>
                <p className="text-muted-foreground leading-relaxed">GrowSmallBiz allows you to create a login for your social media manager to login and schedule posts. This limited login keeps them from seeing any other parts of your business. Best of all, you can have every post scheduled sent to you for approval before it gets posted. That's ultimate flexibility!</p>
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
