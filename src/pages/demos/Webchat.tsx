import { Head } from "vite-react-ssg";
import { VideoJsonLd } from "@/components/seo/VideoJsonLd";
import { Header } from "@/components/layout/Header";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { DemoGuarantee } from "@/components/services/DemoGuarantee";
import { DemoPageNav } from "@/components/services/DemoPageNav";
import { MessageCircle, Bot, UserPlus, Clock } from "lucide-react";

export default function WebchatDemo() {
  return (
    <>
      <Head>
        <title>Webchat: Engage Website Visitors, Capture Leads & Schedule Appointments</title>
        <meta name="description" content="Webchat: Engage & capture leads with AI Livechat. Convert website visitors into a booked appointment even when you sleep. Sign up today!" />
        <meta name="keywords" content="web chat, live chat services, AI chatbots, marketing automation, lead capture, customer engagement, online communication, small business solutions" />
        <link rel="canonical" href="https://growsmallbiz.io/services/marketing-automation-for-small-business/webchat/" />
      </Head>
      <VideoJsonLd
        name="Webchat Demo"
        description="Convert website visitors into leads with live chat and AI chatbots."
        thumbnailUrl="https://growsmallbiz.io/images/growsmallbiz-logo.webp"
        contentUrl="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697cdbbd180f262a3725d9.mp4"
        uploadDate="2025-01-15"
      />
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="py-10 md:py-14" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <p className="text-primary font-semibold uppercase tracking-widest mb-4">WEBCHAT</p>
            <h1 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-6 bg-gradient-heading bg-clip-text text-transparent">
              Instantly Capture Leads with Live Chat & AI Chatbots
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Convert website visitors into leads with live chat and AI-powered chatbots. Engage visitors immediately and capture their contact information before they leave.
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="w-full rounded-2xl overflow-hidden shadow-[0_0_30px_hsl(var(--ghl-card-border)/0.3)] border-2 border-[hsl(var(--ghl-card-border))]">
              <video controls className="w-full" preload="metadata" playsInline>
                <source src="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697cdbbd180f262a3725d9.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-black text-foreground text-center mb-12 bg-gradient-heading bg-clip-text text-transparent">
              Never Miss A Website Visitor Again
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: MessageCircle, title: "Live Chat", description: "Chat with website visitors in real time from your dashboard or mobile app." },
                { icon: Bot, title: "AI Chatbot", description: "Auto-respond to common questions with AI-powered chatbot responses 24/7." },
                { icon: UserPlus, title: "Lead Capture", description: "Automatically capture visitor information and route them into your CRM and automations." },
                { icon: Clock, title: "24/7 Availability", description: "Even when you're offline, the AI chatbot ensures every visitor gets an immediate response and their details are captured." },
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

        {/* Convert Visitors */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-2xl md:text-4xl font-black text-foreground mb-6 bg-gradient-heading bg-clip-text text-transparent">
              Turn Every Website Visit Into An Opportunity
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Most website visitors leave without taking action. Webchat engages them at the right moment, answers their questions instantly, and captures their contact info so you never lose a potential customer.
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
