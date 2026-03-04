import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Helmet } from "react-helmet";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedStatsSection } from "@/components/sections/AnimatedStatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";

const quadBotsTestimonials = [
  {
    quote: "The AI bots respond to leads instantly while I sleep. We've tripled our qualified appointments without hiring anyone.",
    author: "Mike Thompson",
    role: "Owner",
    company: "Thompson HVAC",
  },
  {
    quote: "No more missed calls or delayed responses. The voice AI handles after-hours calls perfectly.",
    author: "Dr. Sarah Chen",
    role: "Practice Owner",
    company: "Chen Family Dental",
  },
  {
    quote: "The lead qualification bot saves us 15+ hours per week. Only serious buyers get through to our sales team.",
    author: "James Rodriguez",
    role: "Sales Director",
    company: "Premium Roofing Co.",
  },
];
import { 
  ServiceHero, 
  SectionHeader, 
  FeatureCard,
  ChecklistItem,
  CardCTA
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
  GraduationCap,
  TrendingUp,
} from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { BlogSection, generalBlogPosts } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import heroImage from "@/assets/quad-bots-hero.jpg";
import botLeadGenerator from "@/assets/bot-lead-generator.png";
import botConversationalAI from "@/assets/bot-conversational-ai.png";
import botVoiceAI from "@/assets/bot-voice-ai.png";
import botSupervisorOS from "@/assets/bot-supervisor-os.png";
import { baseContactCTA } from "@/config/contactCTA";

const quadBotsStats = [
  { value: "4", label: "AI Bots Working 24/7", icon: Bot },
  { value: "85%", label: "Lead Response Automation", icon: Zap },
  { value: "3x", label: "More Qualified Leads", icon: TrendingUp },
  { value: "15+", label: "Hours Saved Weekly", icon: Clock },
];

const quadBotsCaseStudies = [
  {
    company: "Elite Roofing Solutions",
    location: "Atlanta, GA",
    industry: "Roofing Contractor",
    challenge: "Sales team overwhelmed with unqualified leads. Spending 15+ hours weekly on manual follow-ups.",
    timeframe: "4 months",
    metrics: [
      { label: "Qualified Appointments", before: "12/mo", after: "42/mo", improvement: "+250%" },
      { label: "Hours Saved Weekly", before: "0", after: "18+", improvement: "New" },
      { label: "Close Rate", before: "18%", after: "34%", improvement: "+89%" },
    ],
    quote: "The lead qualification bot saves us 15+ hours per week. Only serious buyers get through to our sales team.",
    quoteName: "James Rodriguez",
    quoteRole: "Sales Director, Elite Roofing Solutions"
  },
  {
    company: "Wellness First Chiropractic",
    location: "San Diego, CA",
    industry: "Chiropractic Practice",
    challenge: "Missing after-hours inquiries. No system to qualify and book appointments automatically.",
    timeframe: "3 months",
    metrics: [
      { label: "After-Hours Bookings", before: "5/mo", after: "32/mo", improvement: "+540%" },
      { label: "Lead Response Time", before: "6+ hours", after: "< 2 min", improvement: "-99%" },
      { label: "New Patients/Month", before: "24", after: "58", improvement: "+142%" },
    ],
    quote: "The AI bots respond to leads instantly while I sleep. We've tripled our qualified appointments.",
    quoteName: "Dr. Amanda Chen",
    quoteRole: "Owner, Wellness First Chiropractic"
  }
];

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

      <ServiceJsonLd
        serviceName="Quad Bots AI Sales Team"
        serviceType="AI Automation"
        description="4-Bot System with Lead Gen, Conversational AI, Voice AI, and Supervisor OS for 24/7 sales automation."
        url="/services/quad-bots"
        breadcrumbs={[
          { name: "Services", url: "/services/ai-seo-hub" },
          { name: "AI QuadBots", url: "/services/quad-bots" },
        ]}
      />
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

        {/* Mid-page CTA after Features */}
        <CardCTA
          title="See These Features in Action"
          description="Schedule a personalized demo to see how Quad Bots can transform your sales process and boost your revenue."
        />

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


        <WhyChooseSection 
          title="Why Choose GrowSmallBiz for AI Automation"
          subtitle="Your AI Automation Partner"
          description="Four specialized AI bots work together 24/7 to capture leads, qualify prospects, book appointments, and follow up—so you can focus on closing deals."
          items={[
            { title: "4 AI Bots, One System", description: "Lead Generator, Conversational AI, Voice AI, and Supervisor OS work together seamlessly.", icon: Bot },
            { title: "24/7 Lead Response", description: "Never miss a lead again. AI responds instantly to every inquiry, day or night.", icon: Clock },
            { title: "Intelligent Qualification", description: "AI qualifies leads automatically so your team only talks to serious prospects.", icon: Users },
            { title: "Natural Conversations", description: "AI engages leads in human-like conversations across text, chat, and voice channels.", icon: MessageSquare },
            { title: "Self-Improving System", description: "The Supervisor OS monitors and optimizes all bots for continuous improvement.", icon: Settings },
            { title: "Proven ROI", description: "Most clients see 3x more qualified leads within 90 days of implementation.", icon: TrendingUp },
          ]}
        />

        <AnimatedStatsSection stats={quadBotsStats} columns={4} />

        <TestimonialsSection 
          testimonials={quadBotsTestimonials}
          title="AI Automation Success Stories"
          subtitle="See how businesses automate lead follow-up and grow revenue"
        />

        {/* Case Studies Section */}
        <CaseStudySection
          caseStudies={quadBotsCaseStudies}
          title="Quad Bots Success Stories"
          subtitle="Real results from businesses running on autopilot with AI"
          ctaLink="/free-assessment"
          ctaText="Get Results Like These"
        />

        {/* FAQ Section */}
        {/* Blog Section */}
        <BlogSection
          posts={generalBlogPosts.slice(0, 3)}
          title="Latest Insights"
          subtitle="Expert tips and strategies for AI-powered sales automation"
          showViewAll={true}
          viewAllLink="/blog"
        />

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
        <CardCTA
          title="Ready to Transform Your Business with AI?"
          description="Learn how GrowSmallBiz can customize a Quad Bots solution for your business. Let's discuss your specific needs and how our AI can revolutionize your operations."
        />
        <ConsultationFormSection />
      </main>

      <Footer />
    </>
  );
};

export default QuadBots;
