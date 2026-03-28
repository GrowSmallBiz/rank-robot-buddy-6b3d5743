import { Head } from "vite-react-ssg";
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
import whatYouGetSpeed from "@/assets/what-you-get-speed.png";
import whatYouGetCalendar from "@/assets/what-you-get-calendar.png";
import whatYouGetCalls from "@/assets/what-you-get-calls.png";
import whatYouGetSmart from "@/assets/what-you-get-smart.png";
import whatYouGetPerformance from "@/assets/what-you-get-performance.png";
import whatYouGetAutopilot from "@/assets/what-you-get-autopilot.png";
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
    icon: Clock,
    title: "Double Your Speed To Lead",
    description:
      "Streamline all your communication in one place so that you can double your speed to lead and fill your pipeline!",
  },
  {
    icon: CalendarCheck,
    title: "Instantly Fill Your Calendar",
    description:
      "GrowSmallBiz schedules appointments for you automatically so that you can close more deals!",
  },
  {
    icon: Phone,
    title: "Drive More Phone Calls",
    description:
      "Automatically route calls and convert inbound leads to sales opportunities by connecting you directly with leads who want to talk right now!",
  },
  {
    icon: MessageSquare,
    title: "Build SMART Nurture Campaigns",
    description:
      "Get up to an 80% response rate with SMART automation campaigns that interact across multiple channels!",
  },
  {
    icon: BarChart3,
    title: "Gain Key Insights Into Performance",
    description:
      "Easily see how well your campaigns and sales team are performing so that you can increase your opportunities and sales!",
  },
  {
    icon: Mail,
    title: "Autopilot for Your Business",
    description:
      "Put SMS, Email, Web Chat, Phone Calls, and much more on complete autopilot so you can focus on what matters most.",
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
      "Missed-Call Text-Back System",
      "Lead Nurture & Follow-Up Automation",
      "Quote Follow-Up System",
      "No-Show Recovery Automation",
    ],
  },
  {
    title: "Reputation",
    icon: Star,
    services: [
      "Review Request Automation",
      "Review Response Service",
      "Reputation Monitoring & Alerts",
      "Testimonial & Case Study Engine",
    ],
  },
  {
    title: "Scheduling",
    icon: CalendarCheck,
    services: [
      "Appointment Reminder Sequences",
      "Booking Calendar Optimization",
      "VIP Waitlist & Priority Scheduling",
      "Membership & Subscription Billing",
    ],
  },
  {
    title: "Retention",
    icon: Heart,
    services: [
      "Upsell & Cross-Sell Automation",
      "Customer Loyalty Program Engine",
      "Birthday & Anniversary Offers",
      "Win-Back & Churn Prevention",
    ],
  },
  {
    title: "Content",
    icon: PenTool,
    services: [
      "Auto-Reposting Social Content",
      "Monthly Content Calendar",
      "Review-to-Content Engine",
      "Customer Newsletter",
    ],
  },
  {
    title: "Advertising",
    icon: TrendingUp,
    services: [
      "Monthly Ad Angle Refresh",
      "Retargeting Audience Builder",
      "Landing Page Optimization",
      "Lead Magnet Delivery & Follow-Up",
    ],
  },
  {
    title: "Analytics",
    icon: BarChart3,
    services: [
      "Monthly Performance Report",
      "Customer Journey Dashboard",
      "Pipeline Cleanup & Optimization",
      "Compliance & Deliverability Monitoring",
    ],
  },
];

const industries = [
  {
    icon: Home,
    name: "Home Service",
    examples: "HVAC, Plumbing, Roofing, Landscaping, Electricians, Pest Control",
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    examples: "Dentists, Chiropractors, Day Spas, Fitness Centers, Veterinarians",
  },
  {
    icon: Scale,
    name: "Legal",
    examples: "Personal Injury, Bankruptcy, Divorce, Criminal, Traffic",
  },
  {
    icon: Car,
    name: "Automotive",
    examples: "Auto Repair Shops, Auto Body Shops, Auto Dealers",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    examples: "Real Estate, Mortgage Brokers, Insurance Agents, CPA/Tax",
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefitFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="ghl-card-animated p-6 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="icon-container-ghl mb-4">
                    <feature.icon className="w-6 h-6 text-ghl-icon" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Features Section */}
        <section className="section-padding">
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

        {/* Complete Growth Suite */}
        <section className="section-padding" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="COMPLETE GROWTH SUITE"
              title="Everything You Need to"
              titleHighlight="Grow Your Business"
              description="7 powerful categories of automation services designed to attract leads, build your reputation, and retain customers for life."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {growthSuiteCategories.map((category, index) => (
                <div
                  key={index}
                  className="ghl-card p-6 animate-fade-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="icon-container-ghl">
                      <category.icon className="w-5 h-5 text-ghl-icon" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.services.map((service, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {service}
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

        {/* Industries Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="TAILORED FOR YOUR INDUSTRY"
              title="Solutions Built To Fit"
              titleHighlight="Your Business"
              description="Whether you are scheduling jobs, booking clients, managing leads, or closing deals — the platform adjusts to your industry needs."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 text-center card-hover animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="icon-container-lg mx-auto mb-4">
                    <industry.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {industry.examples}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

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

        {/* Demo Form */}
        <ConsultationFormSection />

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
