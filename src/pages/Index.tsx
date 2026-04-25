import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { useUtm } from "@/hooks/use-utm";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { baseContactCTA } from "@/config/contactCTA";


// Lazy-load below-the-fold sections to improve FCP

const FAQSection = lazy(() => import("@/components/sections/FAQSection").then(m => ({ default: m.FAQSection })));
const AnimatedStatsSection = lazy(() => import("@/components/sections/AnimatedStatsSection").then(m => ({ default: m.AnimatedStatsSection })));

const CardCTA = lazy(() => import("@/components/services").then(m => ({ default: m.CardCTA })));
const WhyChooseSection = lazy(() => import("@/components/sections/WhyChooseSection").then(m => ({ default: m.WhyChooseSection })));
const HomeCaseStudySection = lazy(() => import("@/components/sections/HomeCaseStudySection").then(m => ({ default: m.HomeCaseStudySection })));
const ConsultationFormSection = lazy(() => import("@/components/sections/ConsultationFormSection").then(m => ({ default: m.ConsultationFormSection })));
import { 
  ArrowRight, 
  Bot, 
  Search, 
  Globe, 
  BarChart3, 
  TrendingUp, 
  CheckCircle2, 
  XCircle, 
  Layers,
  Zap,
  Megaphone,
  Users,
  PhoneCall,
  ClipboardCheck,
  Rocket,
  Settings,
  Brain,
  Wrench,
  Heart,
  Target,
  LayoutDashboard,
  Award,
  Phone,
} from "lucide-react";
import { Head } from "vite-react-ssg";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { SiteNavigationJsonLd } from "@/components/seo/SiteNavigationJsonLd";


// Stats data for homepage
const homepageStats = [
  { value: "1", label: "Connected System", icon: Layers },
  { value: "AI", label: "Powered at Every Stage", icon: Brain },
  { value: "DFY", label: "Done-for-You Execution", icon: Wrench },
  { value: "1", label: "Multi-Channel Dashboard", icon: LayoutDashboard },
];

// Core Services — 4 system stages
const coreServices = [
  {
    title: "Capture",
    description: "Get found, build trust quickly, and turn visitors into inquiries.",
    features: [
      "Website Design",
      "Managed AI SEO",
      "Google & Meta Ads",
    ],
    icon: Target,
  },
  {
    title: "Nurture",
    description: "Keep leads engaged with automated follow-up so interest does not go cold.",
    features: [
      "CRM & Marketing Automation",
      "Automated Email & SMS Follow-Up",
      "Missed-Call Capture / AI Follow-Up",
    ],
    icon: Heart,
  },
  {
    title: "Convert",
    description: "Move more leads into booked calls, appointments, and sales opportunities.",
    features: [
      "Pipeline Management",
      "Booking / Appointment Flows",
      "AI Lead Handling",
    ],
    icon: TrendingUp,
  },
  {
    title: "Retain",
    description: "Strengthen loyalty, trust, and repeat business with better post-conversion systems.",
    features: [
      "Review Request Workflows",
      "Review Response Workflows",
      "Ongoing Customer Follow-Up",
    ],
    icon: Users,
  },
];

// Homepage FAQs
const homepageFAQs = [
  {
    question: "What types of businesses do you work with?",
    answer: "We work primarily with local service businesses, including home services, healthcare, legal, accounting, and other businesses that rely on visibility, trust, and fast lead follow-up."
  },
  {
    question: "Do I need every service at once?",
    answer: "No. We focus first on the areas most likely to create impact, then build from there as your growth system matures."
  },
  {
    question: "How soon can we get started?",
    answer: "We can usually begin with a strategy call and initial review quickly, then prioritize the right next steps based on your goals and current setup."
  },
  {
    question: "How long does it take to see results?",
    answer: "Timelines vary by service. Paid ads and follow-up improvements can create results faster, while SEO and long-term visibility strategies build over time."
  },
  {
    question: "Is this done-for-you or do I have to manage it myself?",
    answer: "GrowSmallBiz is designed as a done-for-you service. We handle the strategy, setup, execution, and optimization so you do not have to juggle the marketing systems yourself."
  },
  {
    question: "How do you use AI in the system?",
    answer: "We use AI-powered systems across the client acquisition process, including search visibility support, follow-up automation, AI lead handling, and faster response workflows."
  },
  {
    question: "Will I be able to see what is working?",
    answer: "Yes. We provide a clear multi-channel performance dashboard so you can track how your visibility, leads, follow-up, and conversion activity are performing."
  },
  {
    question: "Is marketing performance guaranteed?",
    answer: "No marketing channel performs perfectly all the time. That is why we track performance closely, recalibrate strategy when needed, and keep improving the system based on real data."
  },
  {
    question: "Do you offer any kind of performance guarantee?",
    answer: "Yes. If we do not generate leads within a pre-agreed timeframe and scope, we continue working at no additional management fee until results are delivered."
  },
];

// How It Works steps
const howItWorksSteps = [
  {
    title: "Strategy Call",
    description: "We learn about your goals, marketing gaps, and where better systems can create the biggest impact.",
    icon: PhoneCall,
  },
  {
    title: "Review & Analysis",
    description: "We evaluate your website, local visibility, reviews, follow-up systems, and competitive landscape.",
    icon: ClipboardCheck,
  },
  {
    title: "Build & Launch",
    description: "We implement the right mix of website improvements, SEO, ads, automation, and AI lead handling.",
    icon: Rocket,
  },
  {
    title: "Optimize & Grow",
    description: "As data comes in, we improve what is working and refine what is not.",
    icon: Settings,
  },
];

const Index = () => {
  const { strategySessionUrl } = useUtm();
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>AI Powered Digital Marketing for Local Businesses | GrowSmallBiz</title>
        <meta name="description" content="AI-powered digital marketing for local businesses. Get more leads with website, AI-SEO, paid ads, and AI marketing automation. Contact us!" />
        <meta name="keywords" content="digital marketing, local SEO, lead generation, website design, CRM automation, paid advertising, marketing solutions, growth system" />
        <link rel="canonical" href="https://growsmallbiz.io/" />
      </Head>
      <PageJsonLd
        pageType="WebPage"
        name="GrowSmallBiz | AI-Powered Digital Marketing for Local Service Businesses"
        description="Get more qualified local leads with a smarter marketing system. Websites, SEO, paid ads, CRM automation, and AI-powered follow-up for local service businesses."
        url="/"
        breadcrumbs={[]}
      />
      <SiteNavigationJsonLd />
      <Header />
      <main id="main-content">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/homepage-hero-bg-mobile.webp" />
          <source media="(min-width: 769px)" srcSet="/images/homepage-hero-bg.webp" />
          <img
            src="/images/homepage-hero-bg.webp"
            alt=""
            role="presentation"
            fetchPriority="high"
            loading="eager"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-background/85" />
        
        {/* Decorative blurs hidden on mobile for performance */}
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl hidden md:block" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl hidden md:block" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="animate-fade-up-safe">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Zap className="w-4 h-4" />
                AI-Powered Growth System for Local Service Businesses
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up-safe delay-100 bg-gradient-heading bg-clip-text text-transparent">
              More Leads. Stronger Visibility. A System That Works While You Work.
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-fade-up-safe delay-200">
              GrowSmallBiz helps local service businesses attract qualified leads, show up in local search, follow up faster, and convert more opportunities with one connected, AI-powered growth system.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up-safe delay-300">
              We handle your website, SEO, paid ads, CRM automation, and AI-powered follow-up so you can spend less time managing marketing and more time focusing on your business, your clients, and your family.
            </p>

            <p className="text-base text-muted-foreground/80 italic max-w-3xl mx-auto animate-fade-up-safe" style={{ animationDelay: "0.35s" }}>
              When performance needs improvement, we review the data, recalibrate the strategy, and keep optimizing the system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-safe delay-400">
              <a href={strategySessionUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl">
                  Schedule Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+19258863724">
                  <Phone className="w-5 h-5 mr-2" /> Call +1 (925) 886-3724
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground animate-fade-up-safe" style={{ animationDelay: "0.5s" }}>
              Built for home services, healthcare, legal, accounting, and other local service businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Problem → Solution Comparison Section */}
      <section className="py-24 bg-card/80 relative overflow-hidden border-t border-primary/10 cv-auto">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl hidden md:block" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl hidden md:block" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">From Fragmented to Focused</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 bg-gradient-heading bg-clip-text text-transparent">
              Most Local Businesses Are Losing Leads They Never Knew They Had
            </h2>
            <p className="text-lg text-muted-foreground">
              The problem is usually not effort. It is the gap between the tools and tactics you are already using.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Fragmented Approach */}
            <div className="bg-background/80 border border-ghl-icon rounded-2xl p-8 animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.3)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">The Fragmented Approach</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Separate tools and platforms that do not work together.",
                  "Leads slipping through the cracks because follow-up is delayed or inconsistent.",
                  "Weak local visibility when nearby customers are actively searching.",
                  "Unclear tracking that makes it hard to know what is driving revenue.",
                  "Feast-or-famine lead flow instead of steady growth.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <XCircle className="w-5 h-5 text-destructive/60 shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connected Growth System */}
            <div className="bg-background/80 border-2 border-primary/30 rounded-2xl p-8 relative animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.5)]" style={{ animationDelay: "0.1s" }}>
              <div className="absolute -top-4 left-8 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                Our Solution
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">A Connected Growth System</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Website, SEO, ads, reviews, and follow-up all support one conversion path.",
                  "Faster response times with automation and AI-powered lead handling.",
                  "Stronger local visibility and trust before the first conversation happens.",
                  "Clearer attribution so you can see what is working.",
                  "More predictable growth because the system is working together.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — 4-Card Method Section */}
      <section className="section-dark cv-auto">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 bg-gradient-heading bg-clip-text text-transparent">
              A Clear Path from Strategy to Results
            </h2>
            <p className="text-lg text-muted-foreground">
              You do not need everything at once. We focus on the priorities most likely to create meaningful impact first.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {howItWorksSteps.map((step, index) => (
              <div
                key={index}
                className="feature-card-teal rounded-xl p-6 text-center space-y-4 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <a href={strategySessionUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="animate-fade-up">
                Schedule Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Core Services Section — 4 System Stages */}
      <section id="services" className="py-24 bg-card/80 relative overflow-hidden border-t border-primary/10 cv-auto">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Core Services</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 bg-gradient-heading bg-clip-text text-transparent">
              A Connected Growth System for Local Service Businesses
            </h2>
            <p className="text-lg text-muted-foreground">
              GrowSmallBiz combines AI-powered systems and done-for-you services to help you capture leads, nurture them automatically, convert more of them into booked jobs, and retain more customers — without forcing you to manage a stack of disconnected tools yourself.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="backdrop-blur-sm rounded-2xl p-6 space-y-4 animate-fade-up relative transition-all hover:shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]"
                style={{ animationDelay: `${index * 0.05}s`, border: '2px solid #17a2b8ff', backgroundColor: '#2d465cff' }}
              >
                <div className="w-12 h-12 rounded-xl bg-ghl-icon/20 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-ghl-icon" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-xl">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-ghl-icon shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-up">
            <Link to="/services/">
              <Button variant="heroOutline" size="lg">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        {/* Founder CTA Banner */}
        <CardCTA 
          title="Ready to Build a Smarter Growth System?"
          description="Book a free strategy call to see how our done-for-you, AI-powered growth system can take marketing and follow-up off your plate, so you can focus more on running your business and spending time where it matters most. We also provide a clear dashboard view of performance and continuously recalibrate the strategy when results need improvement."
          buttonText="Schedule Strategy Call"
          buttonHref={strategySessionUrl}
        />

        {/* Why Choose GrowSmallBiz */}
        <WhyChooseSection 
          title="Why Local Service Businesses Choose GrowSmallBiz"
          subtitle="Why GrowSmallBiz"
          description="GrowSmallBiz is built around one idea: local businesses grow faster when AI-powered systems, done-for-you execution, adaptive strategy, and clear reporting all work together as one connected client acquisition engine."
          items={[
            {
              title: "AI at Every Stage",
              description: "We use AI-powered systems across visibility, follow-up, lead handling, and conversion support.",
              icon: Brain,
            },
            {
              title: "Done-for-You Execution",
              description: "We do the heavy lifting so you do not have to manage websites, SEO, ads, and automation yourself.",
              icon: Wrench,
            },
            {
              title: "Built for Local Growth",
              description: "The messaging, channels, and conversion flow are designed for local service business growth.",
              icon: TrendingUp,
            },
            {
              title: "Adaptive Strategy",
              description: "When a channel or campaign is not performing as expected, we review the data and recalibrate the strategy.",
              icon: Settings,
            },
            {
              title: "Multi-Channel Dashboard",
              description: "See lead generation and performance across SEO, ads, follow-up, and conversion activity in one place.",
              icon: BarChart3,
            },
            {
              title: "Performance Commitment",
              description: "We stand behind our work with a performance guarantee. If we do not generate leads within a pre-agreed timeframe and scope, we continue working at no additional management fee until results are delivered.",
              icon: Award,
            },
          ]}
        />

        {/* Stats */}
        <AnimatedStatsSection stats={homepageStats} columns={4} />

        {/* Real Results Across Home Service Campaigns */}
        <HomeCaseStudySection />

        {/* FAQ Section */}
        <FAQSection 
          title="Frequently Asked Questions"
          subtitle="Answers to common questions local service business owners ask before getting started."
          faqs={homepageFAQs}
          contactCTA={{
            ...baseContactCTA,
            title: "Have more questions?",
            description: "We're here to help. Reach out to us for a personalized consultation.",
            tagline: "Let's grow your business together.",
          }}
        />

        {/* Final CTA Strip */}
        <CardCTA 
          title="Let's Build Your Growth Engine"
          description="If you want AI-powered client acquisition systems, done-for-you execution, adaptive strategy, and a clear multi-channel dashboard without patching together disconnected tools, start with a free strategy call."
          buttonText="Schedule Strategy Call"
          buttonHref={strategySessionUrl}
        />

        <ConsultationFormSection utmCampaign="home-consultation" utmMedium="home" />

      </Suspense>

      </main>
      <Footer />
    </div>
  );
};

export default Index;
