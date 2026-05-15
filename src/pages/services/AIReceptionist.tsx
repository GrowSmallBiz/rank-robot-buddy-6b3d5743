import { Head } from "vite-react-ssg";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FAQSection } from "@/components/sections/FAQSection";
import { AnimatedStatCard } from "@/components/sections/AnimatedStatsSection";
import { SavingsCalculatorSection } from "@/components/sections/SavingsCalculatorSection";
import { IndustryCallBenchmarksSection } from "@/components/sections/IndustryCallBenchmarksSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { CardCTA } from "@/components/services";
import { baseContactCTA } from "@/config/contactCTA";
import heroImage from "@/assets/ai-receptionist-hero.webp";
import {
  Phone,
  MessageSquare,
  Calendar,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Bot,
  Globe,
  Headphones,
  Building2,
  Wrench,
  Stethoscope,
  Scale,
  Home,
  Smartphone,
  Facebook,
  Instagram,
  MapPin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const PAGE_PATH = "/services/ai-receptionist-and-conversational-ai/";
const PAGE_URL = `https://growsmallbiz.io${PAGE_PATH}`;
const PRIMARY_CTA_URL = "https://lp.growsmallbiz.io/digital-growth-strategy-session";

const AIReceptionist = () => {
  const features = [
    {
      icon: Phone,
      title: "24/7 Inbound Call Handling",
      description:
        "AI answers every call naturally, manages after-hours inquiries, and provides accurate business information around the clock.",
    },
    {
      icon: Users,
      title: "Intelligent Lead Qualification",
      description:
        "Automatically gathers caller information, assesses needs and budget, determines qualification level, and prioritizes leads.",
    },
    {
      icon: Calendar,
      title: "Automated Appointment Booking",
      description:
        "Books appointments directly into your calendar based on real-time availability with Google Calendar integration.",
    },
    {
      icon: MessageSquare,
      title: "Multi-Channel Conversations",
      description:
        "Handles SMS, Facebook, Instagram, website chat, and Google Business Profile messages from one unified platform.",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description:
        "Triggers automated follow-up sequences, sends SMS confirmations and reminders, and updates contact details across systems.",
    },
    {
      icon: Shield,
      title: "CRM Integration",
      description:
        "Automatically collects and updates contact information, saves call details and conversation history, eliminating manual data entry.",
    },
  ];

  const stats = [
    {
      value: "$1T",
      label: "In U.S. Consumer Spending Influenced By Phone Calls",
      subtext: "Source: BIA/Kelsey",
    },
    {
      value: "21x",
      label: "More Likely To Qualify Leads When You Respond In 5 Minutes",
      subtext: "Source: Harvard Business Review",
    },
    {
      value: "60%",
      label: "Of Customers Prefer To Call Small Businesses About Purchases",
      subtext: "Source: Google / Ipsos",
    },
    {
      value: "$1,200",
      label: "Average Lost Revenue Per Missed Call (Home Services)",
      subtext: "Source: Invoca",
    },
  ];

  const industries = [
    { icon: Wrench, name: "HVAC Contractors", benefit: "Capture after-hours service calls worth $500-2,000 each" },
    { icon: Stethoscope, name: "Dental Offices", benefit: "Manage appointment requests and emergency consultations" },
    { icon: Scale, name: "Law Firms", benefit: "Qualify potential clients and schedule consultations" },
    { icon: Home, name: "Real Estate Agents", benefit: "Never miss buyer inquiries with automatic lead scoring" },
    { icon: Building2, name: "Med Spas", benefit: "Handle consultation requests and treatment questions 24/7" },
    { icon: Headphones, name: "Service Businesses", benefit: "Capture every lead, every call, every opportunity" },
  ];

  const faqs = [
    {
      question: "What is AI Receptionist & Conversational AI and how does it work?",
      answer:
        "AI Receptionist & Conversational AI is a comprehensive business automation solution that combines voice AI (for phone calls) and chat AI (for digital channels). It handles customer interactions across SMS, Facebook, Instagram, website chat, and phone calls—all managed through a single platform. GrowSmallBiz provides complete setup, training, and ongoing support.",
    },
    {
      question: "How quickly can I start capturing more leads?",
      answer:
        "GrowSmallBiz's technical team handles complete setup in 5 business days after your onboarding session. We configure your AI Receptionist with existing phone numbers, connect all digital channels, train both systems on your business information, and test everything before going live. No technical work required from you.",
    },
    {
      question: "Does it work with my existing business systems?",
      answer:
        "Yes! AI Receptionist integrates seamlessly with popular business management platforms and CRM systems. We configure the AI to work with your existing workflows, calendars, and automations. Phone calls and conversations trigger established follow-up sequences, appointment bookings sync with your calendar, and all customer data flows into your current processes.",
    },
    {
      question: "How does the AI Receptionist handle business calls?",
      answer:
        "Your AI Receptionist uses advanced speech recognition to answer calls naturally, collect customer information, and perform actions like booking appointments, sending payment links, or transferring urgent calls to human staff. It works with your existing business phone system and integrates with your CRM.",
    },
    {
      question: "Can I use my existing phone numbers?",
      answer:
        "Yes, you can assign any available phone number in your account to the AI agent, provided it isn't already configured for other specialized functions like IVR. GrowSmallBiz will configure your existing business phone numbers to work seamlessly with your AI Receptionist.",
    },
    {
      question: "What channels does Conversational AI support?",
      answer:
        "Conversational AI works across SMS, Facebook messages, Instagram DMs, website live chat, and Google Business Profile messages. You can choose which channels to activate and select between Suggestive mode (AI provides response suggestions) or Auto-Pilot mode (AI responds automatically). All conversations sync with your CRM.",
    },
    {
      question: "What happens when the AI can't handle a customer inquiry?",
      answer:
        "AI Receptionist can transfer calls to human agents when needed, and Conversational AI can escalate complex issues through your workflows. You receive complete conversation history, so you're fully informed when taking over. AI successfully handles 80-85% of routine inquiries while maintaining 95% customer satisfaction rates.",
    },
    {
      question: "Is this worth the investment for a small business?",
      answer:
        "Absolutely. Most small businesses miss 47% of incoming calls, with each missed call representing $300-3,000 in lost revenue depending on your industry. AI Receptionist typically pays for itself within the first month by capturing just 3-5 additional customers you would have otherwise lost. Plus, you save $30,000-50,000 annually compared to hiring additional staff.",
    },
    {
      question: "Will AI make my business seem impersonal?",
      answer:
        "Not at all! AI Receptionist actually enhances your professional image by ensuring you never miss the critical 5-minute response window. Many website visitors browse between 7-11 PM when they're free. While competitors are closed, your AI provides immediate answers, shares business information, and books appointments even at 2 AM.",
    },
    {
      question: "What if the AI gives wrong information to customers?",
      answer:
        "GrowSmallBiz extensively trains your AI on your specific business information, services, and pricing before going live. We test all responses thoroughly and program the AI to say 'Let me connect you with a team member' for any questions it's unsure about. You can review and update the AI's knowledge base anytime.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Head>
        <title>AI Receptionist & Conversational AI 24/7 | GrowSmallBiz</title>
        <meta
          name="description"
          content="AI Receptionist answers every call 24/7. Conversational AI handles SMS, Facebook, Instagram & website chat. Capture every lead—never miss one."
        />
        <meta
          name="keywords"
          content="AI receptionist, virtual receptionist, conversational AI, AI chat, 24/7 answering service, automated phone system, lead capture, appointment booking, business automation"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="AI Receptionist & Conversational AI 24/7 | GrowSmallBiz" />
        <meta
          property="og:description"
          content="AI Receptionist answers every call 24/7. Conversational AI handles SMS, Facebook, Instagram & website chat. Capture every lead."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`https://growsmallbiz.io${heroImage}`} />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Receptionist & Conversational AI 24/7 | GrowSmallBiz" />
        <meta
          name="twitter:description"
          content="AI Receptionist answers every call 24/7. Conversational AI handles SMS, Facebook, Instagram & website chat."
        />
        <meta name="twitter:image" content={`https://growsmallbiz.io${heroImage}`} />
      </Head>

      <ServiceJsonLd
        serviceName="AI Receptionist & Conversational AI"
        serviceType="AI Customer Service Automation"
        description="24/7 AI-powered phone answering, SMS, and chat automation for lead capture and appointment booking."
        url={PAGE_PATH}
        breadcrumbs={[
          { name: "Services", url: "/services/" },
          { name: "AI Receptionist & Conversational AI", url: PAGE_PATH },
        ]}
        offerCatalog={{
          name: "AI Receptionist & Conversational AI",
          items: [
            {
              name: "AI Virtual Receptionist",
              description:
                "24/7 phone answering with natural conversation, lead qualification, and appointment booking.",
            },
            {
              name: "Conversational AI",
              description:
                "Multi-channel chat automation across SMS, Facebook, Instagram, website chat, and Google Business Profile.",
            },
          ],
        }}
        useEntityGraph
        hasFaqPage
      />

      <Header />

      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="AI Receptionist and Conversational AI handling 24/7 calls and chats for small businesses"
              width={1920}
              height={1080}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-background/85" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-fade-up">
                <Bot className="w-4 h-4" />
                <span className="text-sm font-medium">AI Client Growth System</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-up leading-tight text-foreground">
                <span className="bg-gradient-heading bg-clip-text text-transparent">
                  AI Receptionist & Conversational AI That Works 24/7 - The best solution for Speed to Lead
                </span>
              </h1>

              <p
                className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                <strong>AI Receptionist</strong> handles every call.{" "}
                <strong>Conversational AI</strong> manages SMS, Facebook, Instagram & website chat.
              </p>

              <p
                className="text-lg text-muted-foreground mb-8 animate-fade-up"
                style={{ animationDelay: "0.15s" }}
              >
                Your competitors capture leads while you're busy. Stop losing customers to faster responses.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                <Button variant="hero" size="lg" asChild>
                  <a href={PRIMARY_CTA_URL} target="_blank" rel="noopener noreferrer">
                    Schedule Strategy Call
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+19258863724">
                    <Phone className="w-5 h-5 mr-2" /> Call +1 (925) 886-3724
                  </a>
                </Button>
              </div>

              <p
                className="mt-6 text-sm text-muted-foreground animate-fade-up"
                style={{ animationDelay: "0.25s" }}
              >
                <strong>White Glove Service:</strong> Setup, training, and 24×7 support included
              </p>
            </div>
          </div>
        </section>

        {/* Problem / Stats Section */}
        <section className="relative py-20 bg-[#1a2a3a]">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-up">
              <p className="font-medium mb-4 text-primary">The Hidden Cost of Missed Opportunities</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-heading bg-clip-text text-transparent">
                What Missed Calls Are Really Costing You
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                The research is clear — every unanswered call is revenue walking out the door
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <AnimatedStatCard key={index} stat={stat} index={index} variant="card" />
              ))}
            </div>

            <SavingsCalculatorSection />
          </div>
        </section>

        {/* Industry Benchmarks */}
        <IndustryCallBenchmarksSection />

        {/* AI Receptionist Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Phone className="w-4 h-4" />
                  AI Virtual Receptionist
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-heading bg-clip-text text-transparent">
                  Never Miss Another Call, Ever Again
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Your AI Receptionist handles every call with natural conversation, qualifies leads
                  automatically, books appointments directly into your calendar, and captures all customer data
                  in your CRM—while you focus on serving existing customers.
                </p>

                <div className="space-y-4">
                  {[
                    "Answers inbound calls 24/7 with natural conversation",
                    "Qualifies leads and prioritizes automatically",
                    "Books appointments with real-time calendar integration",
                    "Transfers to human agents when complex issues arise",
                    "Sends SMS confirmations and follow-ups",
                    "Integrates with your existing CRM and workflows",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="bg-card border border-primary/30 rounded-2xl p-8 animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.35)]"
                style={{ animationDelay: "0.1s" }}
              >
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Call Actions During Every Interaction
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Users, label: "Update Contact Fields" },
                    { icon: Zap, label: "Trigger Workflows" },
                    { icon: Phone, label: "Transfer Calls" },
                    { icon: MessageSquare, label: "Send SMS Messages" },
                    { icon: Globe, label: "API Integration" },
                    { icon: Headphones, label: "Natural Language Processing" },
                  ].map((action, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
                    >
                      <action.icon className="w-5 h-5 text-primary" />
                      <span className="text-sm text-foreground">{action.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conversational AI Section */}
        <section className="relative py-20" style={{ background: 'linear-gradient(180deg, #0a1628 0%, #0f172a 50%, #0a1628 100%)' }}>
          <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(ellipse at center, #17a2b820 0%, transparent 70%)' }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className="order-2 lg:order-1 backdrop-blur-sm rounded-2xl p-8 animate-fade-up transition-all hover:shadow-[0_0_40px_#17a2b880,0_0_80px_#17a2b840]"
                style={{ border: '2px solid #17a2b8', backgroundColor: '#050a10', boxShadow: '0 0 30px #17a2b830' }}
              >
                <h3 className="text-2xl font-semibold text-foreground mb-6">Unified Multi-Channel Platform</h3>
                <div className="space-y-4">
                  {([
                    { channel: "SMS", desc: "Instant text message responses and follow-ups", bgColor: "#0d2818", borderColor: "#22c55e", iconColor: "#22c55e", Icon: Smartphone },
                    { channel: "Website Live Chat", desc: "Engage visitors the moment they arrive", bgColor: "#0d1f2d", borderColor: "#17a2b8", iconColor: "#17a2b8", Icon: Globe },
                    { channel: "Facebook", desc: "Respond to Messenger inquiries automatically", bgColor: "#0d1a33", borderColor: "#1877f2", iconColor: "#1877f2", Icon: Facebook },
                    { channel: "Instagram", desc: "Handle DMs and convert followers to customers", bgColor: "#2d0d1f", borderColor: "#e1306c", iconColor: "#e1306c", Icon: Instagram },
                    { channel: "Google Business Profile", desc: "Manage profile messages seamlessly", bgColor: "#0f1419", borderColor: "", iconColor: "#4285f4", Icon: MapPin, isGoogle: true },
                  ] as { channel: string; desc: string; bgColor: string; borderColor: string; iconColor: string; Icon: LucideIcon; isGoogle?: boolean }[]).map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 p-4 rounded-lg transition-all hover:scale-[1.02] ${item.isGoogle ? 'relative overflow-hidden' : ''}`}
                      style={{
                        background: item.isGoogle ? 'linear-gradient(135deg, rgba(66,133,244,0.12), rgba(234,67,53,0.12), rgba(251,188,5,0.12), rgba(52,168,83,0.12))' : item.bgColor,
                        border: item.isGoogle ? 'none' : `1px solid ${item.borderColor}`,
                        boxShadow: item.isGoogle ? '0 0 20px rgba(66,133,244,0.2), 0 0 20px rgba(234,67,53,0.1), 0 0 20px rgba(52,168,83,0.1)' : `0 0 20px ${item.borderColor}40`
                      }}
                    >
                      {item.isGoogle && (
                        <div
                          className="absolute inset-0 rounded-lg pointer-events-none animate-gradient-rotate"
                          style={{
                            background: 'linear-gradient(90deg, #4285f4, #ea4335, #fbbc05, #34a853, #4285f4)',
                            backgroundSize: '300% 100%',
                            padding: '1px',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude'
                          }}
                        />
                      )}
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: item.isGoogle
                            ? 'linear-gradient(135deg, rgba(66,133,244,0.3), rgba(234,67,53,0.3), rgba(251,188,5,0.3), rgba(52,168,83,0.3))'
                            : `${item.iconColor}20`
                        }}
                      >
                        <item.Icon className="w-5 h-5" style={{ color: item.iconColor }} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.channel}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <MessageSquare className="w-4 h-4" />
                  Conversational AI
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-heading bg-clip-text text-transparent">
                  Turn Every Digital Interaction Into Revenue
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Capture and convert every website visitor, social media lead, and text message inquiry into
                  booked appointments—automatically. Handle unlimited conversations across all digital channels
                  while your AI qualifies leads and nurtures prospects through your sales funnel.
                </p>

                <div className="space-y-4">
                  {[
                    "All channels managed from one unified inbox",
                    "Suggestive mode or full Auto-Pilot mode available",
                    "Automated lead capture and qualification",
                    "Calendar integration for instant booking",
                    "Complete conversation history synced to CRM",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="relative py-20 bg-background border-y border-border/40">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-up">
              <p className="text-primary font-medium mb-4">Complete Capabilities</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-heading bg-clip-text text-transparent">
                Everything You Need for 24/7 Customer Coverage
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 animate-fade-up transition-all hover:border-primary/40 hover:shadow-[0_0_40px_rgba(255,127,80,0.15)]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Everyone Wins Section */}
        <section className="relative py-20 bg-card/40 border-t border-border/40">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-heading bg-clip-text text-transparent">
                Why Everyone Wins With AI
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-background border border-primary/30 rounded-2xl p-8 animate-fade-up">
                <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-primary" />
                  Why Your Business Will Love It
                </h3>
                <ul className="space-y-3">
                  {[
                    "Never sleeps, never calls sick, no vacations",
                    "No salary, benefits, or HR drama",
                    "Works 24/7 without breaks or complaints",
                    "Perfect attendance – 365 days a year",
                    "Scales to handle unlimited volume",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="bg-background border border-primary/30 rounded-2xl p-8 animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  Why Your Customers Will Love It
                </h3>
                <ul className="space-y-3">
                  {[
                    "Instant answers day, night, weekends, holidays",
                    "Never hear voicemail or 'please hold' again",
                    "Same perfect service every single time",
                    "Every customer gets VIP treatment",
                    "Seamless handoff to humans when needed",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="relative py-20 bg-background">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-up">
              <p className="text-primary font-medium mb-4">Industry Applications</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-heading bg-clip-text text-transparent">
                Built for Service-Based Businesses
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Any business where timing and responsiveness directly impact revenue
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 animate-fade-up transition-all hover:border-primary/40"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <industry.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{industry.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{industry.benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* White Glove Service Section */}
        <section className="relative py-20 bg-card/40 border-y border-border/40">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Clock className="w-4 h-4" />
                Done-For-You Service
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-heading bg-clip-text text-transparent">
                White Glove Setup & Support
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                GrowSmallBiz handles everything. Zero technical work required from you.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {[
                  "Configure AI with your existing phone numbers",
                  "Connect all digital channels seamlessly",
                  "Upload your business info and train AI systems",
                  "Set up calendar integration and booking flows",
                  "Create custom call routing and transfer protocols",
                  "Provide ongoing optimization and 24/7 support",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-background border border-primary/20 rounded-lg p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <WhyChooseSection
          title="Why Choose GrowSmallBiz for AI Receptionist"
          subtitle="Your AI Communication Partner"
          description="Our AI Receptionist answers every call, books appointments, and qualifies leads 24/7—so you never miss an opportunity to grow your business."
          items={[
            { title: "24/7 Call Handling", description: "AI answers every call naturally, even after hours, holidays, and weekends—never miss a lead.", icon: Phone },
            { title: "Multi-Channel Coverage", description: "Handle calls, texts, web chat, Facebook, Instagram, and Google Business messages from one platform.", icon: MessageSquare },
            { title: "Natural Conversations", description: "AI engages callers in human-like conversations that feel personal and professional.", icon: Bot },
            { title: "Calendar Integration", description: "Appointments booked directly into your calendar based on real-time availability.", icon: Calendar },
            { title: "CRM Sync", description: "Every conversation and contact automatically saved to your CRM—zero manual data entry.", icon: Shield },
            { title: "White Glove Setup", description: "We configure everything for you—AI training, integrations, workflows—you just start receiving leads.", icon: Clock },
          ]}
        />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about AI Receptionist & Conversational AI"
          faqs={faqs}
          schemaId={`${PAGE_URL}#faqpage`}
          contactCTA={{
            ...baseContactCTA,
            title: "Have more questions about AI Receptionist?",
            description: "We're here to help! Reach out for a personalized walkthrough.",
            tagline: "Let's automate your customer service together.",
          }}
        />

        {/* Final CTA */}
        <CardCTA
          title="Ready to Capture Every Lead, Every Call?"
          description="Your AI starts working 24/7 within days. Complete phone and digital coverage from day one."
          buttonText="Schedule Strategy Call"
          buttonHref={PRIMARY_CTA_URL}
        />

        <ConsultationFormSection />
      </main>

      <Footer />
    </div>
  );
};

export default AIReceptionist;
