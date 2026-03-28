import { Head } from "vite-react-ssg";
import { ArrowRight } from "lucide-react";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SectionHeader } from "@/components/services/SectionHeader";
import { FeatureCard } from "@/components/services/FeatureCard";
import { PricingCard, PricingGrid } from "@/components/services/PricingCard";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { PersonCTA } from "@/components/services/PersonCTA";
import { TestimonialCard, TestimonialsGrid } from "@/components/services/TestimonialCard";
import { createServiceContactCTA } from "@/config/contactCTA";
import { FunnelBuilderSection } from "@/components/sections/FunnelBuilderSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { AutopilotCTASection } from "@/components/sections/AutopilotCTASection";
import heroImage from "@/assets/marketing-automation-hero.jpg";
import whatYouGetSpeed from "@/assets/what-you-get-speed.svg";
import whatYouGetCalendar from "@/assets/what-you-get-calendar.svg";
import whatYouGetCalls from "@/assets/what-you-get-calls.svg";
import whatYouGetSmart from "@/assets/what-you-get-smart.svg";
import whatYouGetPerformance from "@/assets/what-you-get-performance.svg";
import whatYouGetAutopilot from "@/assets/what-you-get-autopilot.svg";
import {
  Bot,
  Zap,
  CalendarCheck,
  MessageSquare,
  BarChart3,
  Phone,
  Mail,
  Star,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Layers,
  Sparkles,
  PenTool,
  LayoutTemplate,
  CheckCircle2,
  Home,
  Heart,
  Scale,
  Car,
  Briefcase,
  Stethoscope,
  Thermometer,
  Wrench,
  TreePine,
  Bug,
  Lock,
  Paintbrush,
  ShieldCheck,
  Activity,
  Eye,
  Dumbbell,
  FileText,
  DollarSign,
  Calculator,
} from "lucide-react";

const contactCTA = createServiceContactCTA(
  "Marketing Automation",
  "Let's automate your growth together."
);

const faqs: FAQItem[] = [
  {
    question: "What Kind Of Support Do You Provide?",
    answer:
      "Support is at the heart of everything we do. We offer 24/7 email support as well as an easy-to-navigate comprehensive tutorial library for quick answers to your questions.",
  },
  {
    question: "How Secure Is My Customer Data?",
    answer:
      "Data privacy and security is every company's obligation. That's why we ensure compliance with all governing laws and regulations, as well as provide extra protection against security breaches.",
  },
  {
    question: "Can I Cancel My Account At Any Time?",
    answer:
      "You can cancel at any time. No need to worry about obligations or contracts.",
  },
  {
    question: "Can I upgrade my plan anytime?",
    answer:
      "Yes, you can switch between plans whenever you want. Your account gives you full control to upgrade or downgrade as needed.",
  },
  {
    question: "Does the platform come with a website and funnel builder?",
    answer:
      "Yes, it includes both. You can cancel other funnel-building tools and immediately reduce costs. Hosting for your website is also included at no extra charge.",
  },
  {
    question: "Does it work with Zapier?",
    answer:
      "Yes. Once you join, you receive access to our private Zapier integration, allowing you to connect with thousands of other apps.",
  },
  {
    question: "How Does Your Automation Work?",
    answer:
      "We provide comprehensive automation that will execute and automate workflows across your high-value business processes. Our smart campaigns will put SMS, Email, Web Chat, Phone Calls, and Calendar Appointments on autopilot.",
  },
  {
    question: "What are data charges and how much should I expect to spend each month?",
    answer:
      "Data charges apply to calling, texting, and emails. Texts cost about $0.012 per segment, outbound calls cost about $0.021 per minute, and emails cost about $0.0014 each. Most users spend around $20 monthly on data usage. All real-time rates are displayed clearly inside your dashboard.",
  },
  {
    question: "Are there setup fees or contracts?",
    answer:
      "There is a required setup fee which covers one-on-one onboarding, technical setup, domain configuration, list imports, and more. Your first payment includes the setup fee, followed by regular monthly billing. There are no long-term contracts.",
  },
  {
    question: "Do I own my data?",
    answer:
      "Absolutely. Any data you add is fully yours. We do not access, rent, sell, or share your information. Your data remains private and protected at all times.",
  },
  {
    question: "Is there a mobile app I can use?",
    answer:
      "Yes. We have mobile apps for both iOS and Android. Simply search in your app store and log in using your existing account credentials.",
  },
];

const pricingPlans = [
  {
    name: "Essentials",
    price: "$297",
    description: "Perfect for Solopreneurs",
    features: [
      "Smart CRM & Unified Inbox",
      "Sales Pipelines",
      "Calendars & Appointment Scheduling",
      "Funnels, Websites & Forms Builder",
      "Email & Social Media Marketing",
      "Memberships & Courses",
      "Invoicing, Proposals & Contracts",
      "Workflow Automations",
      "Reputation Management",
    ],
    cta: "Get Started",
    ctaLink: "https://lp.growsmallbiz.io/ai-client-growth-system",
    note: "No contracts. Cancel anytime.",
    cardStyle: "linear-gradient(180deg, hsl(210 45% 13%) 0%, hsl(210 50% 9%) 100%)",
  },
  {
    name: "Unlimited",
    price: "$397",
    description: "Maximum Power, Zero Limits",
    features: [
      "Everything in Essentials +",
      "UNLIMITED Image AI",
      "UNLIMITED Content AI",
      "UNLIMITED Voice AI",
      "UNLIMITED Conversation AI",
      "ZERO AI OVERAGE FEES",
    ],
    cta: "Go Unlimited",
    ctaLink: "https://lp.growsmallbiz.io/ai-client-growth-system",
    popular: true,
    note: "Zero AI overage fees. Cancel anytime.",
    cardStyle: "linear-gradient(180deg, hsl(210 45% 13%) 0%, hsl(210 50% 9%) 100%)",
  },
  {
    name: "Growth",
    price: "$497",
    description: "Traffic, SEO & Scale",
    features: [
      "Everything in Unlimited +",
      "Cross-Channel AI Manager",
      "Listings & Local SEO Sync",
      "Premium WordPress Hosting",
      "Multi-site & high-traffic optimization",
      "Enhanced performance & visibility tools",
    ],
    cta: "Unlock Growth",
    ctaLink: "https://lp.growsmallbiz.io/ai-client-growth-system",
    note: "Save on Hosting & Ads. Cancel anytime.",
    cardStyle: "linear-gradient(180deg, hsl(210 45% 13%) 0%, hsl(210 50% 9%) 100%)",
  },
];

const whyChooseFeatures = [
  {
    icon: Bot,
    title: "AI That Works Like a 24/7 Sales Assistant",
    description:
      "Instant follow-up, smart lead nurturing, appointment setting, and automated responses — all handled by AI, so you never miss a lead again.",
  },
  {
    icon: Layers,
    title: "Everything in One System",
    description:
      "Run your sales, communication, and follow-up from a single unified platform. No more switching between scattered tools.",
  },
  {
    icon: Zap,
    title: "Fast & Easy to Use",
    description:
      "Launch pages, forms, and campaigns in minutes. Our intuitive interface removes all the clutter so you can focus on strategy, not setup.",
  },
];

const benefitFeatures = [
  {
    image: whatYouGetSpeed,
    title: "Double Your Speed To Lead",
    label: "Speed",
    description:
      "Streamline all your communication in one place so that you can double your speed to lead and fill your pipeline!",
  },
  {
    image: whatYouGetCalendar,
    title: "Instantly Fill Your Calendar",
    label: "Calendar",
    description:
      "GrowSmallBiz schedules appointments for you automatically so that you can close more deals!",
  },
  {
    image: whatYouGetCalls,
    title: "Drive More Phone Calls",
    label: "Calls",
    description:
      "Automatically route calls and convert inbound leads to sales opportunities by connecting you directly with leads who want to talk right now!",
  },
  {
    image: whatYouGetSmart,
    title: "Build SMART Nurture Campaigns",
    label: "SMART",
    description:
      "Get up to an 80% response rate with SMART automation campaigns that interact across multiple channels!",
  },
  {
    image: whatYouGetPerformance,
    title: "Gain Key Insights Into Performance",
    label: "Performance",
    description:
      "Easily see how well your campaigns and sales team are performing so that you can increase your opportunities and sales!",
  },
  {
    image: whatYouGetAutopilot,
    title: "Autopilot for Your Business",
    description:
      "Put SMS, Email, Web Chat, Phone Calls, and much more on complete autopilot so you can focus on what matters most.",
    textAbove: true,
  },
];

const aiFeatures = [
  {
    icon: Zap,
    title: "AI Workflows & Automation",
    description:
      "Automate follow-ups and tasks with intelligent, self-optimizing workflows.",
  },
  {
    icon: CalendarCheck,
    title: "AI Appointment Booking",
    description:
      "Smart conversations that guide prospects into your calendar automatically.",
  },
  {
    icon: MessageSquare,
    title: "AI Follow-Up",
    description:
      "Consistent outreach across SMS and email to revive cold leads and boost conversions.",
  },
  {
    icon: Bot,
    title: "AI Voice & Chat Assistants",
    description:
      "Human-like interactions that answer questions, qualify leads, and keep conversations moving.",
  },
  {
    icon: PenTool,
    title: "AI Content Generation",
    description:
      "Auto-create messages, emails, and campaigns in seconds.",
  },
  {
    icon: LayoutTemplate,
    title: "AI Funnel Builder",
    description:
      "Build high-converting funnels instantly with smart, auto-generated layouts.",
  },
];

const growthSuiteCategories = [
  {
    title: "Lead Communication",
    icon: MessageSquare,
    services: [
      { name: "Missed-Call Text-Back System", desc: "Automatically text back missed calls so no lead slips away.", tagline: "Never lose a customer because you missed a call again." },
      { name: "Lead Nurture & Follow-Up Automation", desc: "Automatic multi-channel follow-up for all new leads via SMS, email, and voicemail sequences.", tagline: "Every lead gets followed up until they convert — automatically." },
      { name: "Quote Follow-Up System", desc: "Automated follow-up designed to close open quotes and estimates.", tagline: "Close more open quotes without lifting a finger." },
      { name: "No-Show Recovery Automation", desc: "Converts no-shows into rescheduled appointments with automated prompts.", tagline: "Turn no-shows into booked appointments automatically." },
    ],
  },
  {
    title: "Reputation",
    icon: Star,
    services: [
      { name: "Review Request Automation", desc: "Automatic review generation from every new customer.", tagline: "Generate 5-star reviews every week — automatically." },
      { name: "Review Response Service", desc: "Respond to all customer reviews with professional templates.", tagline: "Every review gets a professional response — like clockwork." },
      { name: "Reputation Monitoring & Alerts", desc: "Monitor new reviews and get alerts for negative ratings.", tagline: "Never get blindsided by a bad review again." },
      { name: "Testimonial & Case Study Engine", desc: "Automated system for collecting new testimonials and stories.", tagline: "Collect powerful testimonials automatically." },
    ],
  },
  {
    title: "Scheduling",
    icon: CalendarCheck,
    services: [
      { name: "Appointment Reminder Sequences", desc: "Automated reminders via SMS and email to reduce no-shows dramatically.", tagline: "Cut no-shows with automatic reminders." },
      { name: "Booking Calendar Optimization", desc: "Monthly tuning to keep calendars functioning correctly with buffer optimization.", tagline: "Your calendar will always work the way it should." },
      { name: "VIP Waitlist & Priority Scheduling", desc: "Notify VIPs about early openings or new availability.", tagline: "Keep your best customers coming back first." },
      { name: "Membership & Subscription Billing", desc: "Automates billing reminders, failed payment recovery, and renewals.", tagline: "Never lose revenue to failed membership payments again." },
    ],
  },
  {
    title: "Retention",
    icon: Heart,
    services: [
      { name: "Upsell & Cross-Sell Automation", desc: "Automatically promote higher-value services or products.", tagline: "Increase revenue per customer automatically." },
      { name: "Customer Loyalty Program Engine", desc: "Points, rewards, and incentives delivered automatically.", tagline: "Turn customers into loyal regulars with a simple rewards system." },
      { name: "Birthday & Anniversary Offers", desc: "Special offers sent automatically on important dates.", tagline: "Celebrate customers and drive repeat visits." },
      { name: "Win-Back & Churn Prevention", desc: "Detect and recover at-risk customers with targeted messaging.", tagline: "Stop customers from slipping away." },
    ],
  },
  {
    title: "Content",
    icon: PenTool,
    services: [
      { name: "Auto-Reposting Social Content", desc: "Reposts existing content across social channels automatically.", tagline: "Stay active online without creating new content." },
      { name: "Monthly Content Calendar", desc: "Pre-scheduled 30 days of content posts with auto-posting setup.", tagline: "A full month of content, done for you." },
      { name: "Review-to-Content Engine", desc: "Turn customer reviews into social proof posts.", tagline: "Turn your 5-star reviews into daily social proof." },
      { name: "Customer Newsletter", desc: "Send branded newsletters with helpful content and offers.", tagline: "Build loyalty with a valuable monthly newsletter." },
    ],
  },
  {
    title: "Advertising",
    icon: TrendingUp,
    services: [
      { name: "Monthly Ad Angle Refresh", desc: "New hooks, creative angles, and copy every month.", tagline: "Keep your ads fresh and performing well." },
      { name: "Retargeting Audience Builder", desc: "Build custom audiences from site visitors and leads.", tagline: "Re-engage visitors who didn't convert the first time." },
      { name: "Landing Page Optimization", desc: "Monthly testing and refinement of landing pages.", tagline: "Higher conversions from the same traffic." },
      { name: "Lead Magnet Delivery & Follow-Up", desc: "Automated delivery and nurturing after lead magnet download.", tagline: "Turn downloads into booked calls." },
    ],
  },
  {
    title: "Analytics",
    icon: BarChart3,
    services: [
      { name: "Monthly Performance Report", desc: "Clear monthly breakdown of all campaign performance.", tagline: "Always know what's working and what's not." },
      { name: "Customer Journey Dashboard", desc: "Visualize how leads move through your pipeline.", tagline: "See every touchpoint from lead to customer." },
      { name: "Pipeline Cleanup & Optimization", desc: "Regular cleanup of stale leads and pipeline health.", tagline: "A clean pipeline means better forecasting." },
      { name: "Compliance & Deliverability Monitoring", desc: "Ensure emails and texts reach inboxes reliably.", tagline: "Stay compliant and keep deliverability high." },
    ],
  },
];

const industries = [
  {
    icon: Home,
    name: "Home Service",
    services: [
      { name: "Kitchen Remodeling", icon: Home },
      { name: "AC Repair", icon: Thermometer },
      { name: "Plumbing", icon: Wrench },
      { name: "Landscaping", icon: TreePine },
      { name: "Roofing", icon: Home },
      { name: "Electricians", icon: Zap },
      { name: "Pest Control", icon: Bug },
      { name: "Locksmith", icon: Lock },
      { name: "Painting", icon: Paintbrush },
      { name: "Flooring Installation", icon: Layers },
      { name: "Damage Restoration", icon: ShieldCheck },
      { name: "Garage Door Repair", icon: Wrench },
    ],
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    services: [
      { name: "Dentists", icon: Stethoscope },
      { name: "Chiropractors", icon: Activity },
      { name: "Cosmetic Surgery", icon: Sparkles },
      { name: "Weight Loss Centers", icon: Activity },
      { name: "Eye Doctors", icon: Eye },
      { name: "Day Spas", icon: Sparkles },
      { name: "Veterinarians", icon: Heart },
      { name: "Fitness Centers", icon: Dumbbell },
    ],
  },
  {
    icon: Scale,
    name: "Legal",
    services: [
      { name: "Bankruptcy", icon: FileText },
      { name: "Personal Injury", icon: ShieldCheck },
      { name: "Divorce", icon: Scale },
      { name: "Criminal", icon: Scale },
      { name: "Traffic", icon: Car },
    ],
  },
  {
    icon: Car,
    name: "Automotive",
    services: [
      { name: "Auto Repair Shops", icon: Wrench },
      { name: "Auto Body Shops", icon: Car },
      { name: "Auto Dealers", icon: Car },
    ],
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    services: [
      { name: "Real Estate Brokers", icon: Home },
      { name: "Mortgage Brokers", icon: DollarSign },
      { name: "Insurance Agents", icon: ShieldCheck },
      { name: "CPA/Tax Consultants", icon: Calculator },
    ],
  },
];

const testimonials = [
  {
    quote:
      "GrowSmallBiz made building and launching campaigns unbelievably smooth. The clean interface removes all the clutter so I can focus on strategy, not setup. It saves me hours every week.",
    author: "Ethan Brooks",
    role: "Owner, SunPeak Home Services",
    rating: 5,
  },
  {
    quote:
      "The tools, documentation, and support are outstanding. Everything integrates seamlessly into my workflow, helping me ship faster and stay organized across multiple projects.",
    author: "Mia Carter",
    role: "Agency Director, Grant Digital",
    rating: 5,
  },
  {
    quote:
      "The platform scales effortlessly. We went from idea to thousands of users without stress. It gives our team the confidence to innovate without worrying about tech limitations.",
    author: "Liam Rivera",
    role: "Managing Director, Roofing Company",
    rating: 5,
  },
];

const MarketingAutomation = () => {
  return (
    <>
      <Head>
        <title>Marketing Automation for Small Business | GrowSmallBiz</title>
        <meta
          name="description"
          content="AI-powered marketing automation platform for small businesses. Capture, nurture, and close leads on autopilot through SMS, Email, Live Chat, Phone Calls and more."
        />
        <link
          rel="canonical"
          href="https://growsmallbiz.io/services/marketing-automation-for-small-business/"
        />
      </Head>
      <ServiceJsonLd
        serviceName="Marketing Automation for Small Business"
        serviceType="Marketing Automation Service"
        description="AI-powered client growth system that helps small businesses capture, nurture, and close leads on autopilot."
        url="/services/marketing-automation-for-small-business"
        breadcrumbs={[
          { name: "Services", url: "/services" },
          {
            name: "Marketing Automation",
            url: "/services/marketing-automation-for-small-business",
          },
        ]}
        rating={{ ratingValue: "4.9", reviewCount: "127" }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <ServiceHero
          badge={{ icon: Bot, text: "START CLOSING MORE DEALS!" }}
          title="Convert More"
          titleHighlight="Leads Into Sales"
          subtitle="GrowSmallBiz Digital Marketing helps you capture, nurture, and close leads on autopilot through SMS, Email, Live Chat, Phone Calls, and more!"
          primaryCTA={{
            label: "Schedule A Demo",
            href: "/contact",
          }}
          secondaryCTA={{
            label: "See Pricing",
            href: "#pricing",
            variant: "heroOutline",
          }}
          backgroundImage={heroImage}
          overlayOpacity={88}
          stats={[
            { value: "80%", label: "Response Rate" },
            { value: "2x", label: "Speed to Lead" },
            { value: "24/7", label: "AI Assistant" },
            { value: "100+", label: "Integrations" },
          ]}
        />

        {/* Why Choose Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="WHY CHOOSE US"
              title="Your Entire Business. Powered by AI."
              titleHighlight="Simplified Into One System."
              description="GrowSmallBiz gives small businesses the power to capture more leads, close more deals, and automate their entire customer journey — all in one place."
            />
            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  variant="default"
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="WHAT YOU GET"
              title="Using GrowSmallBiz Digital Marketing"
              titleHighlight="You Can"
              description="Automate your entire customer journey from first touch to loyal repeat customer."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {benefitFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`text-center animate-fade-up ${(feature as any).textAbove ? "" : ""}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {(feature as any).textAbove ? (
                    <div className="border-2 border-white rounded-2xl p-6 flex flex-col items-center" style={{ backgroundColor: "#2C485B" }}>
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-foreground leading-snug">
                          Autopilot for your{" "}
                          <span className="text-primary italic">Business</span> through{" "}
                          <span className="text-primary italic">SMS, Email, Web Chat, Phone Calls,</span>{" "}
                          and much more!
                        </h3>
                      </div>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-[300px] h-[300px] object-contain"
                      />
                    </div>
                  ) : (
                    <>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-[300px] h-[300px] object-contain mx-auto mb-5"
                      />
                      <div>
                        {(feature as any).label && (
                          <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-3">
                            {(feature as any).label}
                          </span>
                        )}
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Features Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="AI FEATURES OVERVIEW"
              title="Work Smarter, Respond Faster,"
              titleHighlight="Close More Deals"
              description="Built-in AI tools that handle the heavy lifting so you can focus on growth — not manual tasks."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiFeatures.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  variant="teal"
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Funnel Builder Section */}
        <FunnelBuilderSection />

        {/* Industries Section */}
        <section className="py-12" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="TAILORED FOR YOUR INDUSTRY"
              title="Solutions Built To Fit"
              titleHighlight="Your Business"
              description="Whether you are scheduling jobs, booking clients, managing leads, or closing deals, the platform adjusts to your industry needs while keeping everything fast, simple, and automated."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="feature-card-teal animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-primary rounded-xl p-2.5 w-fit mb-4">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {industry.name}
                  </h3>
                  <ul className="space-y-2">
                    {industry.services.map((service, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <service.icon className="w-4 h-4 text-primary shrink-0" />
                        {service.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <IntegrationsSection />

        {/* Testimonials */}
        <section className="section-padding" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="CLIENT SUCCESS STORIES"
              title="Real Stories From"
              titleHighlight="Real Teams"
            />
            <TestimonialsGrid testimonials={testimonials} columns={3} />
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="section-padding">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="CHOOSE A PLAN THAT FITS YOUR GROWTH"
              title="Win More Clients &"
              titleHighlight="Keep Them For Life"
              description="Everything You Need To Capture, Nurture, and Close Leads — All In One Place"
            />
            <PricingGrid plans={pricingPlans} columns={3} />
            <p className="text-center mt-8 text-muted-foreground animate-fade-up">
              <Shield className="w-5 h-5 inline-block mr-2 text-primary" />
              30 Days Money Back Guarantee
            </p>
          </div>
        </section>

        {/* Complete Growth Suite */}
        <section className="section-padding" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="COMPLETE GROWTH SUITE"
              title="Everything You Need to"
              titleHighlight="Grow Your Business"
              description="7 powerful categories of automation services designed to attract leads, build your reputation, and retain customers for life."
            />
            <div className="space-y-12">
              {growthSuiteCategories.map((category, index) => (
                <div
                  key={index}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {/* Category Title Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary rounded-xl p-2.5">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* 4 Service Cards in a Row */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.services.map((service, i) => (
                      <div
                        key={i}
                        className="bg-card/60 border border-border rounded-xl p-5 hover:border-primary/30 transition-all"
                      >
                        <h4 className="text-sm font-bold text-foreground mb-2">
                          {service.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-3">
                          {service.desc}
                        </p>
                        <p className="text-xs text-primary italic">
                          "{service.tagline}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Form - Single Column */}
        <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#2d465c' }}>
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            {/* Heading & Video */}
            <div className="flex flex-col items-center text-center mb-12">
              <p className="text-primary font-medium mb-3 text-sm">Ready to Talk?</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
                See How It <span className="text-accent">Works</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
                Watch a quick overview of how GrowSmallBiz helps local service businesses attract more leads and grow faster.
              </p>

              {/* YouTube Video */}
              <div className="w-full rounded-2xl overflow-hidden shadow-[0_0_30px_#17a2b850] mb-8" style={{ border: '2px solid #17a2b8' }}>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/IkA8jPWgHxk"
                    title="GrowSmallBiz Overview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Schedule Now Button */}
              <a
                href="https://link.growsmallbiz.io/widget/booking/BItMexXVhoWvQOVKgmfH"
                target="_blank"
                rel="noopener noreferrer"
                className="ghl-btn inline-flex items-center gap-3 px-8 py-4 text-lg font-bold"
              >
                Schedule Now
                <ArrowDown className="w-5 h-5" />
              </a>
            </div>

            {/* Form */}
            <div
              className="relative rounded-2xl shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]"
              style={{ border: '2px solid #17a2b8' }}
            >
              <div className="relative rounded-2xl p-6 md:p-8" style={{ backgroundColor: '#191321' }}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight mb-3">
                    Schedule A <span className="text-accent">Demo</span>
                  </h3>
                  <p className="text-muted-foreground">
                    Tell us about your business and we'll follow up with the next best step.
                  </p>
                </div>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/vRKH9AO2IToQ38j4hyaN"
                  style={{ width: "100%", height: "1645px", border: "none", borderRadius: "3px" }}
                  id="inline-vRKH9AO2IToQ38j4hyaN"
                  loading="lazy"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="GrowSmallBiz SaaS Demo Form"
                  data-height="1645"
                  data-layout-iframe-id="inline-vRKH9AO2IToQ38j4hyaN"
                  data-form-id="vRKH9AO2IToQ38j4hyaN"
                  title="GrowSmallBiz SaaS Demo Form"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* Autopilot CTA */}
        <AutopilotCTASection />

        {/* Final CTA */}
        <PersonCTA {...contactCTA} />
      </main>
      <Footer />
    </>
  );
};

export default MarketingAutomation;
