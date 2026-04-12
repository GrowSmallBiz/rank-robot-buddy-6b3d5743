import { GlowCard } from "@/components/ui/glow-card";
import {
  CheckCircle, CheckCircle2, X, Clock, Mail, MessageSquare, Zap,
  Eye, Heart, UserPlus, RefreshCw
} from "lucide-react";
import type { NicheConfig } from "../NicheConfig";
import aiGrowthSystemFunnel from "@/assets/ai-growth-system-funnel.webp";
import emailSmsWorkflowDiagram from "@/assets/email-sms-workflow-diagram.webp";

const colorConfig: Record<string, any> = {
  pink: { bg: "bg-pink-500", bgLight: "bg-pink-500/10", text: "text-pink-500", border: "border-pink-500/30", gradient: "from-pink-500 to-pink-600", steps: ["bg-pink-500", "bg-pink-500/85", "bg-pink-500/70", "bg-pink-500/55", "bg-pink-500/45", "bg-pink-500/35", "bg-pink-500/25"] },
  rose: { bg: "bg-rose-500", bgLight: "bg-rose-500/10", text: "text-rose-500", border: "border-rose-500/30", gradient: "from-rose-500 to-rose-600", steps: ["bg-rose-500", "bg-rose-500/85", "bg-rose-500/70", "bg-rose-500/55", "bg-rose-500/45", "bg-rose-500/35", "bg-rose-500/25"] },
  blue: { bg: "bg-blue-500", bgLight: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/30", gradient: "from-blue-500 to-blue-600", steps: ["bg-blue-500", "bg-blue-500/85", "bg-blue-500/70", "bg-blue-500/55", "bg-blue-500/45", "bg-blue-500/35", "bg-blue-500/25"] },
  violet: { bg: "bg-violet-500", bgLight: "bg-violet-500/10", text: "text-violet-500", border: "border-violet-500/30", gradient: "from-violet-500 to-violet-600", steps: ["bg-violet-500", "bg-violet-500/85", "bg-violet-500/70", "bg-violet-500/55", "bg-violet-500/45", "bg-violet-500/35", "bg-violet-500/25"] },
  amber: { bg: "bg-amber-500", bgLight: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/30", gradient: "from-amber-500 to-amber-600", steps: ["bg-amber-500", "bg-amber-500/85", "bg-amber-500/70", "bg-amber-500/55", "bg-amber-500/45", "bg-amber-500/35", "bg-amber-500/25"] },
  emerald: { bg: "bg-emerald-500", bgLight: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/30", gradient: "from-emerald-500 to-emerald-600", steps: ["bg-emerald-500", "bg-emerald-500/85", "bg-emerald-500/70", "bg-emerald-500/55", "bg-emerald-500/45", "bg-emerald-500/35", "bg-emerald-500/25"] },
};

interface AiGrowthSystemSectionProps {
  config: NicheConfig;
}

export const AiGrowthSystemSection = ({ config }: AiGrowthSystemSectionProps) => {
  const widthClasses = ["w-full", "w-[94%]", "w-[88%]", "w-[82%]", "w-[76%]", "w-[70%]", "w-[64%]"];

  return (
    <section id="client-growth" className="py-24 bg-gradient-to-b from-[#0a1628] to-background scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-primary italic">{config.growthSystemHighlight}</span> {config.growthSystemHeadline}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{config.growthSystemSubheadline}</p>
        </div>

        {/* FIXED Funnel Visual */}
        <div className="mb-20">
          <div className="p-8 md:p-12 rounded-2xl shadow-[0_0_30px_rgba(255,127,80,0.6),0_0_60px_rgba(255,127,80,0.4)]" style={{ border: '2px solid rgb(255, 127, 80)', backgroundColor: 'rgba(25, 19, 33, 0.95)', backgroundImage: 'linear-gradient(to bottom right, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.9))' }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground text-center mb-4 relative z-10">
              Stop Juggling <span className="text-transparent bg-clip-text bg-gradient-primary">Hundreds of Disconnected Tools</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-center mb-10 relative z-10">
              All the tools you need in one platform without having to <span className="text-primary font-semibold italic">"duct-tape"</span> multiple platforms together!
            </p>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative flex justify-center">
                <div className="relative w-full max-w-lg">
                  <img src={aiGrowthSystemFunnel} alt="Marketing funnel stages" width={800} height={600} className="w-full rounded-2xl shadow-2xl shadow-primary/20" />
                  {["Awareness", "Capture", "Nurture", "Close"].map((label, idx) => {
                    const tops = ["2%", "28%", "55%", "78%"];
                    const bgs = ["bg-blue-600/90", "bg-slate-700/90", "bg-indigo-600/90", "bg-emerald-600/90"];
                    return (
                      <div key={label} className="absolute left-1/2 -translate-x-1/2" style={{ top: tops[idx] }}>
                        <span className={`px-3 py-1 ${bgs[idx]} text-white text-xs md:text-sm font-bold uppercase tracking-wider rounded-full shadow-lg backdrop-blur-sm`}>{label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">Most tree service and lawn care companies use separate tools for lead capture, scheduling, CRM, reviews, and follow-up. These tools don't talk to each other—leads fall through the cracks.</p>
                <div className="bg-card/50 border border-border/50 rounded-xl p-5">
                  <p className="text-foreground font-semibold mb-3">The All-in-One Difference:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5"><X className="w-4 h-4 text-red-500" /></div>
                      <span className="text-sm text-muted-foreground"><strong className="text-foreground">Without a system:</strong> Leads get lost, responses delayed, follow-ups forgotten</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle className="w-4 h-4 text-emerald-500" /></div>
                      <span className="text-sm text-muted-foreground"><strong className="text-foreground">With AI Growth System:</strong> Every lead captured instantly, automated nurturing, seamless booking</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  {[{ label: "Attract", color: "bg-blue-500", desc: "Draw in ideal clients through SEO, paid ads, AI search visibility, social media, and reputation management." },
                    { label: "Nurture", color: "bg-purple-500", desc: "Automatically follow up with leads via email sequences, SMS, AI receptionist, and chat." },
                    { label: "Convert & Retain", color: "bg-primary", desc: "Book jobs seamlessly, collect payments, gather reviews, and trigger re-engagement campaigns." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`w-3 h-3 rounded-full ${item.color} mt-2 shrink-0`} />
                      <div>
                        <h4 className="font-bold text-foreground text-lg">{item.label}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Journey */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-foreground mb-8 text-center">
            The 5 Stages of Your <span className="text-primary">Client Journey</span>
          </h3>
          <div className="relative">
            <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-primary via-emerald-500 to-amber-500 rounded-full" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
              {config.clientJourneyStages.map((stage, i) => {
                const StageIcon = stage.icon;
                const borderColors: Record<string, string> = { blue: "border-blue-500/30 hover:border-blue-500/60", purple: "border-purple-500/30 hover:border-purple-500/60", primary: "border-primary/30 hover:border-primary/60", emerald: "border-emerald-500/30 hover:border-emerald-500/60", amber: "border-amber-500/30 hover:border-amber-500/60" };
                const bgColors: Record<string, string> = { blue: "bg-blue-500", purple: "bg-purple-500", primary: "bg-primary", emerald: "bg-emerald-500", amber: "bg-amber-500" };
                const textColors: Record<string, string> = { blue: "text-blue-400", purple: "text-purple-400", primary: "text-primary", emerald: "text-emerald-400", amber: "text-amber-400" };
                return (
                  <div key={i} className={`relative bg-card border-2 ${borderColors[stage.color] || "border-border"} rounded-2xl p-6 transition-all hover:-translate-y-2 group`}>
                    <div className={`w-14 h-14 rounded-full ${bgColors[stage.color] || "bg-primary"} flex items-center justify-center mb-4 mx-auto lg:mx-0 group-hover:scale-110 transition-transform`}>
                      <StageIcon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2 text-center lg:text-left">{stage.stage}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
                    <div className="mt-3 pt-3 border-t border-border">
                      <p className={`text-xs ${textColors[stage.color] || "text-primary"} italic`}>Goal: {stage.goal}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* FIXED Why Autopilot Research Blocks */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">📚 Why This Matters</span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Why Marketing Needs to be on <span className="text-primary">Autopilot</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">The difference between struggling and thriving isn't talent—it's systems.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Speed-to-Lead */}
            <GlowCard className="p-8 border-red-500/30 bg-gradient-to-b from-red-500/5 to-transparent">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center shrink-0"><Clock className="w-7 h-7 text-white" /></div>
                <div><h4 className="text-xl font-bold text-foreground">Speed-to-Lead</h4><p className="text-sm text-red-400">The 5-Minute Rule</p></div>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
                <p className="text-sm text-foreground leading-relaxed"><span className="font-bold text-red-400">"Responding within 5 minutes makes you 100x more likely to connect compared to 30 minutes."</span></p>
                <p className="text-xs text-muted-foreground mt-2 italic">— InsideSales.com Lead Response Study</p>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2"><span className="text-emerald-500">✅</span> The Solution:</p>
                <p className="text-sm text-muted-foreground"><span className="text-emerald-400 font-medium">AI Receptionist</span> auto-responds within seconds—24/7.</p>
              </div>
            </GlowCard>
            {/* Lead Nurturing */}
            <GlowCard className="p-8 border-purple-500/30 bg-gradient-to-b from-purple-500/5 to-transparent">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-500 flex items-center justify-center shrink-0"><MessageSquare className="w-7 h-7 text-white" /></div>
                <div><h4 className="text-xl font-bold text-foreground">Lead Nurturing</h4><p className="text-sm text-purple-400">Why One Email Isn't Enough</p></div>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 mb-6">
                <p className="text-sm text-foreground leading-relaxed"><span className="font-bold text-purple-400">"80% of sales require 5+ follow-ups, yet 44% give up after just one contact."</span></p>
                <p className="text-xs text-muted-foreground mt-2 italic">— HubSpot Sales Research</p>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2"><span className="text-emerald-500">✅</span> The Solution:</p>
                <p className="text-sm text-muted-foreground"><span className="text-emerald-400 font-medium">Automated email sequences</span> that send 5-7 strategic touchpoints.</p>
              </div>
            </GlowCard>
            {/* Past Clients */}
            <GlowCard className="p-8 border-amber-500/30 bg-gradient-to-b from-amber-500/5 to-transparent">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center shrink-0"><UserPlus className="w-7 h-7 text-white" /></div>
                <div><h4 className="text-xl font-bold text-foreground">Past Client Gold</h4><p className="text-sm text-amber-400">Your Hidden Revenue Source</p></div>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-6">
                <p className="text-sm text-foreground leading-relaxed"><span className="font-bold text-amber-400">"Acquiring a new customer costs 5-25x more than retaining an existing one."</span></p>
                <p className="text-xs text-muted-foreground mt-2 italic">— Harvard Business Review</p>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2"><span className="text-emerald-500">✅</span> The Solution:</p>
                <p className="text-sm text-muted-foreground"><span className="text-emerald-400 font-medium">Automated re-engagement campaigns</span>—anniversary reminders, milestone triggers, referral incentives.</p>
              </div>
            </GlowCard>
          </div>
        </div>

        {/* Email Nurture System */}
        <div className="mb-16 mt-16">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-10 text-center">
            We Build <span className="text-primary">{config.emailSequenceTitle}</span> {config.emailSequenceHighlight}
          </h3>
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-primary/20 rounded-3xl blur-xl" />
              <img src={emailSmsWorkflowDiagram} alt="Email and SMS automation workflow diagram" width={800} height={500} className="relative rounded-2xl border border-border/50 shadow-2xl w-full" />
              <div className="absolute -bottom-4 -right-4 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">5-Day Automation</div>
            </div>
            <div className="space-y-4">
              {config.emailNurturePoints.map((point, i) => {
                const PointIcon = point.icon;
                return (
                  <GlowCard key={i} className="p-5 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <PointIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{point.title}</h4>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                  </GlowCard>
                );
              })}
            </div>
          </div>

          {/* 5-Day Email Sequence — FIXED structure */}
          <div className="mt-10">
            <p className="text-center text-sm text-muted-foreground uppercase tracking-wider mb-3">Sample Automation</p>
            <h4 className="text-lg font-bold text-foreground mb-6 text-center">
              5-Day Email & SMS Automation: <span className="text-primary">Inquiry to Close</span>
            </h4>
            <GlowCard className="p-6 border-purple-500/30 bg-gradient-to-b from-purple-500/5 to-transparent">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center"><Mail className="w-5 h-5 text-white" /></div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center"><MessageSquare className="w-5 h-5 text-white" /></div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Inquiry Nurture Workflow</p>
                  <p className="text-xs text-muted-foreground">Email + SMS automation triggered on new inquiry</p>
                </div>
                <div className="ml-auto"><span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full font-medium">Active</span></div>
              </div>
              <div className="space-y-4">
                {[
                  { day: "0", label: "Immediate", channels: "Email + SMS", title: "Welcome & Availability Check", desc: "Thank them for reaching out, confirm receipt, ask about their service needs and timeline" },
                  { day: "1", label: "Day 1", channels: "Email", title: "Service Overview + Social Proof", desc: "Share relevant service information and 2-3 Google review testimonials from past clients" },
                  { day: "2", label: "Day 2", channels: "SMS", title: "Quick Check-in", desc: "\"Did you get a chance to review the information I sent? Happy to answer any questions about your project.\"" },
                  { day: "3", label: "Day 3", channels: "Email", title: "FAQ + What to Expect", desc: "Address common questions about the process, timeline, and what to expect from the estimate" },
                  { day: "5", label: "Day 5", channels: "Email + SMS", title: "Limited Availability + Final CTA", desc: "Seasonal availability notice, schedule filling up, easy booking link" },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full ${i === 0 ? 'bg-emerald-500' : 'bg-purple-500'} flex items-center justify-center text-white font-bold text-sm`}>{step.day}</div>
                      {i < 4 && <div className="w-0.5 h-8 bg-border/50 mt-2" />}
                    </div>
                    <div className="flex-1 bg-muted/30 rounded-lg p-4 border border-border/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-medium ${i === 0 ? 'text-emerald-400' : 'text-purple-400'} uppercase tracking-wider`}>{step.label}</span>
                        <span className="text-xs text-muted-foreground">{step.channels}</span>
                      </div>
                      <p className="font-medium text-foreground text-sm">{step.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground"><Zap className="w-3 h-3 text-purple-400" /><span>5 Emails | 2 SMS | 5-Day Sequence | Avg. 34% Booking Rate</span></div>
                <span className="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium">Fully Automated</span>
              </div>
            </GlowCard>
          </div>
        </div>

        {/* No-Show Reduction */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Automated <span className="text-primary">Session Reminders</span> — Reduce No-Shows
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {config.noShowResearchCitations.map((citation, i) => (
              <GlowCard key={i} className="p-4 text-center">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">{citation.label}</span>
                <p className="text-lg font-bold text-foreground my-2">{citation.stat}</p>
                <p className="text-xs text-muted-foreground">{citation.source} — {citation.publication} ({citation.year})</p>
              </GlowCard>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {config.sessionReminderWorkflows.map((workflow, i) => {
              const WorkflowIcon = workflow.icon;
              const colors = colorConfig[workflow.color] || colorConfig.emerald;
              return (
                <GlowCard key={i} className={`p-6 ${colors.border}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                      <WorkflowIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{workflow.sessionType}</h4>
                      <p className="text-xs text-muted-foreground">{workflow.description}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {workflow.reminders.map((reminder, j) => (
                      <div key={j} className="bg-muted/30 rounded-lg p-3 border border-border/50">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-xs font-medium ${colors.text}`}>{reminder.timing}</span>
                          <div className="flex gap-1">
                            {reminder.channels.map((ch, k) => (
                              <span key={k} className="text-[10px] px-1.5 py-0.5 bg-muted rounded-full text-muted-foreground">{ch}</span>
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">{reminder.content}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Expected no-show reduction:</span>
                    <span className={`text-sm font-bold ${colors.text}`}>{workflow.expectedReduction}</span>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>

        {/* Marketing Campaigns */}
        <div className="border-t border-border/50 pt-16 mb-12">
          <p className="text-center text-sm text-muted-foreground uppercase tracking-wider mb-2">See It In Action</p>
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-4">
            Marketing Campaigns <span className="text-transparent bg-clip-text bg-gradient-primary italic">We Build for Your Studio</span>
          </h3>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">Real offers paired with automated funnels—tailored to each specialty</p>
        </div>
        <div className="space-y-12 mb-16">
          {config.marketingCampaigns.map((campaign, i) => {
            const colors = colorConfig[campaign.color] || colorConfig.blue;
            const CampaignIcon = campaign.icon;
            return (
              <div key={i} className="grid lg:grid-cols-2 gap-6 animate-fade-up" style={{ animationDelay: `${i * 0.15}s` }}>
                {/* Offer Card */}
                <GlowCard className={`overflow-hidden ${colors.border}`}>
                  <div className={`${colors.bgLight} px-6 py-4 border-b border-border/30`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${colors.bg} flex items-center justify-center`}><CampaignIcon className="w-5 h-5 text-white" /></div>
                      <div>
                        <p className={`text-xs font-medium ${colors.text} uppercase tracking-wider`}>{campaign.genre}</p>
                        <p className="text-xs text-muted-foreground">Sample Campaign Offer</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-2xl font-bold text-foreground mb-1">{campaign.offer.headline}</h4>
                    <p className="text-muted-foreground mb-4">{campaign.offer.tagline}</p>
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className={`text-4xl font-bold ${colors.text}`}>{campaign.offer.price}</span>
                      <span className="text-lg text-muted-foreground line-through">{campaign.offer.originalPrice}</span>
                      <span className={`text-sm font-medium px-2 py-1 rounded-full ${colors.bgLight} ${colors.text}`}>{campaign.offer.savings}</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-foreground mb-2">What's Included:</p>
                      <ul className="space-y-1.5">
                        {campaign.offer.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className={`w-4 h-4 ${colors.text} flex-shrink-0`} />{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <p className={`text-sm ${colors.text} font-medium mb-3`}><Clock className="w-4 h-4 inline mr-1" />{campaign.offer.urgency}</p>
                      <button className={`w-full py-3 rounded-lg font-semibold text-white transition-all hover:scale-[1.02] ${colors.bg}`}>{campaign.offer.cta}</button>
                    </div>
                  </div>
                </GlowCard>
                {/* Funnel */}
                <GlowCard className={`${colors.border}`}>
                  <div className={`${colors.bgLight} px-6 py-4 border-b border-border/30`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-foreground">Automated Marketing Funnel</p>
                        <p className="text-xs text-muted-foreground">How this campaign converts leads</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {campaign.topPlatforms.slice(0, 3).map((platform, pIdx) => (
                          <span key={pIdx} className={`text-xs px-2 py-1 ${colors.bgLight} ${colors.text} rounded-full border ${colors.border}`}>{platform}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-2">
                      {campaign.funnel.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex flex-col items-center">
                          <div className={`${widthClasses[stepIndex] || "w-[60%]"} ${colors.steps?.[stepIndex] || colors.bg} py-2.5 px-4 rounded-lg text-center text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02]`}>
                            <span className="opacity-60 mr-2">{stepIndex + 1}.</span>{step}
                          </div>
                          {stepIndex < campaign.funnel.length - 1 && <div className="text-muted-foreground text-xs my-1">↓</div>}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground"><Zap className={`w-3 h-3 ${colors.text}`} /><span>Fully automated workflow</span></div>
                      <p className={`text-xs ${colors.text} italic`}>{campaign.seasonality}</p>
                    </div>
                  </div>
                </GlowCard>
              </div>
            );
          })}
        </div>

        {/* Seasonal Campaigns */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            <span className="text-primary">Seasonal Campaigns</span> We Automate for Your Studio
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Campaign</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Timing</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Offer</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Channels</th>
                </tr>
              </thead>
              <tbody>
                {config.seasonalCampaigns.map((campaign, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium text-foreground">{campaign.campaign}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{campaign.timing}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{campaign.offer}</td>
                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-1">
                        {campaign.channels.map((channel, j) => (
                          <span key={j} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">{channel}</span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Past Client Workflows */}
        <div className="grid md:grid-cols-3 gap-6">
          {config.pastClientWorkflows.map((workflow, i) => {
            const WIcon = workflow.icon;
            return (
              <GlowCard key={i} className="p-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <WIcon className="w-6 h-6 text-amber-500" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{workflow.title}</h4>
                <p className="text-sm text-muted-foreground">{workflow.description}</p>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
