import { Head } from "vite-react-ssg";
import { VideoJsonLd } from "@/components/seo/VideoJsonLd";
import { Header } from "@/components/layout/Header";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { DemoPageNav } from "@/components/services/DemoPageNav";
import { Link } from "react-router-dom";

export default function CalendarSchedulingDemo() {
  return (
    <>
      <Head>
        <title>Calendar Scheduling Demo for Small Businesses | GrowSmallBiz</title>
        <meta name="description" content="See how GrowSmallBiz Calendar Scheduling automates appointment booking and reduces no-shows." />
        <link rel="canonical" href="https://growsmallbiz.io/services/marketing-automation-for-small-business/calendar-scheduling/" />
      </Head>
      <VideoJsonLd
        name="Calendar Scheduling Demo"
        description="See how GrowSmallBiz Calendar Scheduling automates appointment booking and reduces no-shows for small businesses."
        thumbnailUrl="https://growsmallbiz.io/images/growsmallbiz-logo.png"
        contentUrl="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697c25ed7c362a3f5fa8e9.mp4"
        uploadDate="2025-01-15"
      />
      <Header />
      <main id="main-content" className="pt-20">
        <section className="py-10 md:py-14" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h1 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-4">Fill Your Calendar and Cut No-Shows With Smart Appointment Scheduling</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">GrowSmallBiz is your scheduling automation platform for eliminating the back-and-forth emails to find the perfect time — and so much more.</p>
            <div className="w-full rounded-2xl overflow-hidden shadow-[0_0_30px_hsl(var(--ghl-card-border)/0.3)] border-2 border-[hsl(var(--ghl-card-border))] mb-8">
              <video controls className="w-full" preload="metadata" playsInline>
                <source src="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697c25ed7c362a3f5fa8e9.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* Drive More Revenue */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Drive More Revenue</h3>
                <p className="text-sm text-muted-foreground">Book high-value meetings in seconds and turn scheduling into a competitive advantage.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Speed up your sales cycle</h3>
                <p className="text-sm text-muted-foreground">Keep your deal momentum high and remove scheduling friction at every stage of your sales cycle.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Close more deals</h3>
                <p className="text-sm text-muted-foreground">Customize reminder and follow-up workflows to move deals along, integrate with sales tools, and remove logistical tasks to focus on selling.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Online Scheduling */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img src="https://img.freepik.com/free-vector/appointment-booking-with-calendar_23-2148549799.jpg?w=826" alt="Online Scheduling" className="w-full rounded-xl shadow-lg" loading="lazy" />
              <div>
                <p className="text-primary font-semibold uppercase tracking-widest mb-2">Online Scheduling</p>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">Make scheduling easy</h2>
                <p className="text-muted-foreground leading-relaxed">Replace software like Calendly and automate and manage multiple team calendars in one place.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Managing Schedules */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-black text-foreground text-center mb-6">Managing Schedules Has Never Been More Simple</h2>
            <p className="text-lg text-foreground text-center mb-12">With calendar scheduling you have control over your time.</p>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-xl font-black text-foreground mb-4">Complete Control</h3>
                <p className="text-muted-foreground leading-relaxed">You have full control over all your bookings and appointments. You can embed calendars in your site for easy booking or manually schedule any of your contacts from within the app.</p>
              </div>
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/5e7d3e76-3d84-4ad0-9cc1-8472986d0226.png" alt="Complete Control" className="w-full rounded-xl shadow-lg" loading="lazy" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/81cab6f2-6830-4556-bf52-0e15bb34135d.png" alt="Unlimited Team Members" className="w-full rounded-xl shadow-lg" loading="lazy" />
              <div>
                <h3 className="text-xl font-black text-foreground mb-4">Unlimited Team Members</h3>
                <p className="text-muted-foreground leading-relaxed">Unlike other scheduling software, there is no charge for extra team members. Whether you have a team of 1 or 40, add as many calendars as you need for your business.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-xl font-black text-foreground mb-4">Automate</h3>
                <p className="text-muted-foreground leading-relaxed">Make the booking process for your events smooth. In conjunction with our workflows, you can schedule both appointments and follow ups to make it easy for your team and customers.</p>
              </div>
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/b7d35116-f795-4dff-8722-e641fa0f7075.png" alt="Automate scheduling" className="w-full rounded-xl shadow-lg" loading="lazy" />
            </div>

            <div className="text-center">
              <Link to="/services/marketing-automation-for-small-business/#ready-to-talk" className="inline-block bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl hover:opacity-90 transition-all">Watch A Demo</Link>
            </div>
          </div>
        </section>

        {/* Scheduling Needs */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-primary font-semibold uppercase tracking-widest mb-2">Scheduling Needs</p>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">How it best fits for you</h2>
                <p className="text-muted-foreground leading-relaxed">Automate reminder campaigns that include links to reschedule and cancel. You can also manually or automatically confirm appointments. Integrate your Google calendar or Outlook calendar so that you are never double-booked.</p>
              </div>
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/BdnD3TjkxQR9s3Yi5FPM/media/63dfdf206af207be095a7b88.png" alt="Scheduling Needs" className="w-full rounded-xl shadow-lg" loading="lazy" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/BdnD3TjkxQR9s3Yi5FPM/media/63dfdd91077c9a6bd049a3d0.png" alt="Flexibility" className="w-full rounded-xl shadow-lg" loading="lazy" />
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">Flexibility for your needs</h2>
                <p className="text-muted-foreground leading-relaxed">You have complete control over each calendar's availability, the ability to round-robin leads or appointments to users, take payment prior to booking an appointment, and multiple options when it comes to integrating forms with your appointment calendar.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-semibold uppercase tracking-widest mb-2">Web Meetings</p>
                <h3 className="text-xl font-bold text-foreground mb-4">Integrate for online meetings</h3>
                <p className="text-muted-foreground leading-relaxed">Integrate your calendars with Zoom or Google Meet to automatically schedule your virtual appointments.</p>
              </div>
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/BdnD3TjkxQR9s3Yi5FPM/media/63dfe1466af20770935a7be7.png" alt="Web Meetings" className="w-full rounded-xl shadow-lg" loading="lazy" />
            </div>
          </div>
        </section>

        <IntegrationsSection />
        <DemoPageNav />
      </main>
    </>
  );
}
