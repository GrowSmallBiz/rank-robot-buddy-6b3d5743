import { Head } from "vite-react-ssg";
import { Header } from "@/components/layout/Header";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { DemoPageNav } from "@/components/services/DemoPageNav";
import { Link } from "react-router-dom";

export default function WorkflowAutomationsDemo() {
  return (
    <>
      <Head>
        <title>Workflow Automations Demo | GrowSmallBiz</title>
        <meta name="description" content="See how GrowSmallBiz Workflow Automations simplify your business by automating repetitive tasks." />
        <link rel="canonical" href="https://growsmallbiz.io/services/marketing-automation-for-small-business/workflow-automations" />
      </Head>
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h1 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-4">
              Workflow Automations
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Simplify Business By Automating Tasks
            </p>

            <div className="w-full rounded-2xl overflow-hidden shadow-[0_0_30px_hsl(var(--ghl-card-border)/0.3)] border-2 border-[hsl(var(--ghl-card-border))] mb-8">
              <video controls className="w-full" preload="metadata" playsInline>
                <source src="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697d43ed7c36cfd35fffd0.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* Put Your Business On Auto-Pilot */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-black text-foreground text-center mb-8">
              Put Your Business On Auto-Pilot
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed mb-16">
              Our workflow automation tool makes the creation of marketing campaigns straightforward and places most of it on autopilot. But it can do so much more than just help automate marketing...
            </p>

            {/* Automate Many Processes */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-xl md:text-2xl font-black text-foreground mb-4">Automate Many Processes</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Using our drag-and-drop tool, you can create workflows to speed up your business.
                </p>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/0kD0zUIt0n5b23xP6gbC/media/1a19bcb3-10ef-436f-8ada-3c679593c42b.png"
                alt="Automate Many Processes"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Prospect Interactions */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/0kD0zUIt0n5b23xP6gbC/media/4d72dfec-a22c-4d9a-8379-bb190a272462.png"
                alt="Prospect Interactions"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-black text-foreground mb-4">Prospect Interactions</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether a prospect clicks a link in an email, fills out a form, joins a membership site, books an appointment, misses an appointment, or more, you can automate the majority of your follow-up process.
                </p>
              </div>
            </div>

            {/* Team Interactions */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-xl md:text-2xl font-black text-foreground mb-4">Team Interactions</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Updating contact records, setting reminders for staff, sending automated emails, SMSs, Facebook and Instagram messages, sending internal notifications, editing notes, and much more will simplify your life
                </p>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/0kD0zUIt0n5b23xP6gbC/media/fba63086-75b6-493a-af98-12438a8b3791.png"
                alt="Team Interactions"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Project Management */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/0kD0zUIt0n5b23xP6gbC/media/96bece65-1dfa-40fe-bb77-1079cb6073fe.png"
                alt="Project Management"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-black text-foreground mb-4">Project Management</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  From creating simple recurring reminders to complete project management flows, you can automate large portions of your business to make sure things never fall through the cracks.
                </p>
                <Link
                  to="/services/marketing-automation-for-small-business#ready-to-talk"
                  className="inline-block bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl hover:opacity-90 transition-all"
                >
                  Watch A Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Automate Everything / Ultimate Flexibility */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <p className="text-primary font-semibold uppercase tracking-widest mb-2">Automate Everything</p>
                  <h3 className="text-xl font-bold text-foreground mb-4">Connect all of your channels</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You can build workflows to include any of its modules and connect them by specifying triggers, events, and actions. For example, create an event invite, then set follow-up emails or actions to occur.
                  </p>
                </div>
                <div>
                  <p className="text-primary font-semibold uppercase tracking-widest mb-2">Ultimate Flexibility</p>
                  <h3 className="text-xl font-bold text-foreground mb-4">Create multi-channel campaigns</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your campaigns can include as many – or as few – channels as you like. They can be purely one channel (email, for example) or be a mix of social media, text, and email.
                  </p>
                </div>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/0kD0zUIt0n5b23xP6gbC/media/1dd36b24-6a34-4703-8a37-f16b2b496367.png"
                alt="Multi-channel campaigns"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <IntegrationsSection />
        <DemoPageNav />
      </main>
    </>
  );
}
