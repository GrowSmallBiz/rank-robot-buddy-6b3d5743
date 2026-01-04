import { Helmet } from "react-helmet";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { 
  ServiceHero, 
  SectionHeader, 
  FeatureCard,
  ChecklistItem
} from "@/components/services";
import { 
  Bot, 
  Users, 
  Phone, 
  Settings, 
  Zap, 
  MessageSquare,
  Clock,
  BarChart3,
  Shield,
  Rocket,
  Calendar,
  Timer,
  Smile,
  Building2,
  Heart,
  Home,
  Briefcase,
  GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FAQSection } from "@/components/sections/FAQSection";
import heroImage from "@/assets/quad-bots-hero.jpg";
import botLeadGenerator from "@/assets/bot-lead-generator.png";
import botConversationalAI from "@/assets/bot-conversational-ai.png";
import botVoiceAI from "@/assets/bot-voice-ai.png";
import botSupervisorOS from "@/assets/bot-supervisor-os.png";
import { baseContactCTA } from "@/config/contactCTA";

const botCards = [
  {
    icon: Users,
    image: botLeadGenerator,
    title: "Bot 1: Lead Generator",
    subtitle: "Your tireless prospector.",
    description: "Finds and delivers qualified leads to your CRM. Targets daily or weekly searches. Keeps your sales funnel filled automatically.",
    highlight: "Fill your pipeline without cold calling or manual prospecting."
  },
  {
    icon: MessageSquare,
    image: botConversationalAI,
    title: "Bot 2: Conversational AI",
    subtitle: "Your chat + SMS + email specialist.",
    description: "Engages new leads instantly. Qualifies and follows up with prospects. Re-engages cold leads with smart reminders.",
    highlight: "Nurtures conversations like a dedicated sales rep — but never sleeps."
  },
  {
    icon: Phone,
    image: botVoiceAI,
    title: "Bot 3: Voice AI",
    subtitle: "Your inbound & outbound caller.",
    description: "Books appointments instantly. Handles follow-ups, re-engagement, and upsells. Speed-to-lead calls so no customer is left waiting.",
    highlight: "A voice assistant that feels human and handles calls 24/7."
  },
  {
    icon: Settings,
    image: botSupervisorOS,
    title: "Bot 4: Supervisor OS",
    subtitle: "Your system's manager.",
    description: "Tracks every customer interaction. Ensures no lead is missed. Provides visibility, reporting, and oversight.",
    highlight: "The system that runs the system — checks, balances, and structure."
  }
];

const features = [
  {
    icon: Zap,
    title: "AI-Powered Lead Generation",
    description: "Automatically find and qualify prospects using advanced AI algorithms that never sleep.",
    checklist: ["24/7 prospecting", "Smart qualification", "CRM integration"]
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Communication",
    description: "Engage customers across chat, SMS, email, and voice with consistent messaging.",
    checklist: ["Unified conversations", "Context retention", "Seamless handoffs"]
  },
  {
    icon: Clock,
    title: "Real-Time Response",
    description: "Instant responses to inquiries ensure you never miss an opportunity to engage.",
    checklist: ["Zero wait times", "Immediate engagement", "Higher conversion rates"]
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track performance, monitor conversations, and optimize your sales process with detailed insights.",
    checklist: ["Performance metrics", "Conversion tracking", "ROI analysis"]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption to keep your business data secure.",
    checklist: ["Data encryption", "Compliance ready", "Secure integrations"]
  },
  {
    icon: Rocket,
    title: "Lightning-Fast Setup",
    description: "Get your 4-Bot system up and running in under 48 hours with our guided setup process.",
    checklist: ["Quick deployment", "Expert guidance", "Minimal downtime"]
  }
];

const benefits = [
  {
    icon: Calendar,
    title: "Increase Bookings",
    description: "Never miss a service request. Our AI efficiently captures and schedules jobs, maximizing your booking potential.",
    details: [
      "Instantly schedules appointments and sends confirmations",
      "Prevents double bookings and empty time slots",
      "Works 24/7 — even when your team is offline",
      "Boosts revenue by filling your calendar consistently"
    ]
  },
  {
    icon: Timer,
    title: "Reduce Hold Times Dramatically",
    description: "Instantaneous responses mean customers aren't left waiting, significantly improving their experience.",
    details: [
      "Handles multiple customer requests simultaneously",
      "Routes inquiries to the right department automatically",
      "Frees your team to focus on high-value interactions",
      "Boosts customer satisfaction through faster service"
    ]
  },
  {
    icon: Smile,
    title: "Improve Customer Satisfaction",
    description: "Provide quick, accurate, and convenient service around the clock, leading to happier, more loyal customers.",
    details: [
      "Reduces frustration with clear, consistent communication",
      "Anticipates customer needs before they even ask",
      "Personalizes every interaction based on customer history",
      "Delivers fast, accurate responses 24/7 — no downtime"
    ]
  }
];

const industries = [
  { icon: Home, name: "Home Services", description: "HVAC, Plumber, Roofer, etc." },
  { icon: Heart, name: "Health & Wellness", description: "Med Spa, Dental, Chiropractor, etc." },
  { icon: Building2, name: "Real Estate & Property", description: "Property Management, Agents" },
  { icon: Briefcase, name: "Agencies & Marketing", description: "Digital Agencies, Consultants" },
  { icon: Shield, name: "Insurance & Financial", description: "Insurance, Financial Services" },
  { icon: GraduationCap, name: "Education & Coaching", description: "Coaches, Course Creators" }
];

const faqs = [
  {
    question: "How does onboarding work?",
    answer: "Our team guides you through a simple 3-step process: initial consultation, system configuration, and live testing. Most clients are fully operational within 48-72 hours."
  },
  {
    question: "Can I integrate the bots with my CRM or booking system?",
    answer: "Yes! We support popular CRMs like Salesforce, HubSpot, Pipedrive, and booking systems like Calendly, Acuity Scheduling, and more. Custom integrations are available for Enterprise plans."
  },
  {
    question: "Does the Voice AI sound natural?",
    answer: "Absolutely. Our Voice AI uses advanced natural language processing and can be customized with different voices, accents, and speaking styles to match your brand personality."
  },
  {
    question: "Can it handle different accents and languages?",
    answer: "Yes, our Voice AI supports multiple languages and is trained to understand various accents and regional dialects for better customer communication."
  },
  {
    question: "What industries benefit the most?",
    answer: "Any business that books appointments, generates leads, or provides customer service benefits from our system. We've seen exceptional results in HVAC, healthcare, real estate, agencies, and professional services."
  },
  {
    question: "Is there a setup fee?",
    answer: "Setup fees vary by plan complexity. Starter plans have minimal setup costs, while Enterprise plans include comprehensive onboarding and customization."
  },
  {
    question: "How secure is my data?",
    answer: "We use enterprise-grade security with SOC 2 compliance, end-to-end encryption, and regular security audits. Your data is never shared with third parties."
  }
];

const QuadBots = () => {
  return (
    <>
      <Helmet>
        <title>Quad Bots AI Sales Team | 24/7 AI Sales & Support | GrowSmallBiz</title>
        <meta
          name="description"
          content="Meet the 4-Bot System: Lead Gen, Conversational AI, Voice AI, and Supervisor OS working together to grow your business on autopilot. 24/7 AI sales and support team."
        />
        <meta name="keywords" content="AI sales team, quad bots, voice AI, conversational AI, lead generation, AI automation, sales automation, customer support AI" />
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <ServiceHero
          badge={{ icon: Bot, text: "AI Sales Automation" }}
          title="Your 24/7"
          titleHighlight="Quad Bots AI Sales Team"
          subtitle="Why hire one assistant when you can have four?"
          description="Meet the 4-Bot System — Lead Gen, Conversational AI, Voice AI, and Supervisor OS — working together to grow your business on autopilot."
          primaryCTA={{ label: "Get Started Now", href: "/free-assessment" }}
          secondaryCTA={{ label: "Book a Demo", href: "/contact" }}
          backgroundImage={heroImage}
          overlayOpacity={85}
          stats={[
            { value: "4", label: "AI Bots Working" },
            { value: "24/7", label: "Availability" },
            { value: "48hrs", label: "Setup Time" },
            { value: "100%", label: "Lead Capture" }
          ]}
        />

        {/* The Quad Bots System Section */}
        <section className="section-dark">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="The Quad Bots System"
              title="How It Works"
              titleHighlight="(The Quad Bots)"
              description="Four specialized AI bots working together as one seamless system to handle every aspect of your sales and customer engagement."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {botCards.map((bot, index) => (
                <div 
                  key={index} 
                  className="feature-card-teal animate-fade-up flex flex-col md:flex-row gap-6 items-start"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <img 
                      src={bot.image} 
                      alt={bot.title} 
                      className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                      {bot.title}
                    </h3>
                    <p className="text-primary font-medium mb-3">{bot.subtitle}</p>
                    <p className="text-muted-foreground mb-4">{bot.description}</p>
                    <p className="text-sm italic text-foreground/80 border-t border-border/50 pt-4">
                      {bot.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-card">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Powerful Features"
              title="Built for"
              titleHighlight="Growth"
              description="Everything you need to automate your sales process and grow your business."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="feature-card animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="icon-container mb-4">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.checklist.map((item, i) => (
                      <ChecklistItem key={i} text={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-dark">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Why Choose Quad Bots"
              title="Experience Tangible"
              titleHighlight="Benefits"
              description="See real results that impact your bottom line."
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="feature-card animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="icon-container-lg mb-6">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{benefit.description}</p>
                  <div className="space-y-3">
                    {benefit.details.map((detail, i) => (
                      <ChecklistItem key={i} text={detail} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="section-card">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Industries We Help"
              title="Perfect For"
              titleHighlight="Your Business"
              description="If your business books appointments, sells services, or needs leads — the Quad Bots System works for you."
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
              {industries.map((industry, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="icon-container mx-auto mb-4">
                    <industry.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-1">
                    {industry.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqs={faqs} 
          contactCTA={{
            ...baseContactCTA,
            title: "Have more questions about Quad Bots?",
            description: "We're here to help! If you have any additional questions or need more details about our AI Sales Team, reach out to us.",
            tagline: "Let's automate your sales and grow your business.",
          }}
        />

        {/* CTA Section */}
        <section className="py-24 lg:py-32 section-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="feature-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src={baseContactCTA.image} 
                    alt={baseContactCTA.name} 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Learn how GrowSmallBiz can customize a Quad Bots solution for your business.
                  </p>
                  <p className="text-lg font-medium text-primary mb-6">
                    Let's automate your sales and grow your business together.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4 md:justify-start justify-center">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">{baseContactCTA.name}</span>
                      <span className="mx-2">•</span>
                      {baseContactCTA.role}
                    </p>
                    <Button size="lg" variant="hero" asChild>
                      <Link to="/free-assessment">{baseContactCTA.buttonText}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default QuadBots;
