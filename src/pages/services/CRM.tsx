import { Helmet } from "react-helmet";
import crmHeroBg from "@/assets/crm-hero-bg.jpg";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/sections/FAQSection";
import {
  Phone,
  MessageSquare,
  Calendar,
  Users,
  Clock,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Bot,
  Globe,
  Headphones,
  Building2,
  Wrench,
  Stethoscope,
  Scale,
  Home,
  Star,
  Mail,
  Send,
  Target,
  Sparkles,
  Repeat,
  Gift,
  FileText,
  Megaphone,
  PieChart,
  Play,
  ChevronRight,
  Smartphone,
  UserPlus,
  Bell,
  Settings,
  CreditCard,
  LineChart,
  Inbox,
  Image,
  Mic,
  MessageCircle,
  PenTool,
  Layout,
  Share2,
  ThumbsUp,
  AlertCircle,
  Quote,
  CalendarCheck,
  CalendarClock,
  Crown,
  Receipt,
  TrendingDown,
  Heart,
  Cake,
  RefreshCw,
  Rss,
  CalendarDays,
  Newspaper,
  MousePointer,
  FileSearch,
  Download,
  ClipboardCheck,
  Eye,
  Gauge,
  ShieldCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CRM = () => {
  const valueProps = [
    {
      icon: Bot,
      title: "AI That Works Like a 24/7 Sales Assistant",
      description: "Instant follow-up, smart lead nurturing, appointment setting, and automated responses — all handled by AI, so you never miss a lead again.",
    },
    {
      icon: Inbox,
      title: "Everything in One System",
      description: "Run your sales, communication, and follow-up from a single unified platform. No more switching between scattered tools.",
    },
    {
      icon: Zap,
      title: "Fast & Easy to Use",
      description: "Launch pages, forms, and campaigns in minutes. Our intuitive interface removes all the clutter so you can focus on strategy, not setup.",
    },
  ];

  const keyBenefits = [
    {
      icon: TrendingUp,
      title: "Double Your Speed To Lead",
      description: "Stop missing out on conversations! Streamline all your communication in one place so that you can double your speed to lead and fill your pipeline!",
    },
    {
      icon: Calendar,
      title: "Instantly Fill Your Calendar",
      description: "Say goodbye to missed sales opportunities! GrowSmallBiz Digital Marketing schedules appointments for you automatically so that you can close more deals!",
    },
    {
      icon: Phone,
      title: "Drive More Phone Calls",
      description: "Automatically route calls and convert inbound leads to sales opportunities by connecting you directly with leads who want to talk right now!",
    },
    {
      icon: Target,
      title: "Build SMART Nurture Campaigns",
      description: "Get up to an 80% response rate from your leads and customers with SMART automation campaigns that interact across multiple channels!",
    },
    {
      icon: BarChart3,
      title: "Gain Key Insights Into Performance",
      description: "Easily see how well your campaigns and sales team are performing so that you can increase your opportunities and sales!",
    },
    {
      icon: Smartphone,
      title: "Mobile App for On-The-Go",
      description: "Close prospects on the go with our mobile app, respond to leads, track statuses, complete reminders, and more.",
    },
  ];

  const aiFeatures = [
    {
      icon: Settings,
      title: "AI Workflows & Automation",
      description: "Automate follow-ups and tasks with intelligent, self-optimizing workflows.",
    },
    {
      icon: CalendarCheck,
      title: "AI Appointment Booking",
      description: "Smart conversations that guide prospects into your calendar automatically.",
    },
    {
      icon: Send,
      title: "AI Follow-Up",
      description: "Consistent outreach across SMS and email to revive cold leads and boost conversions.",
    },
    {
      icon: Headphones,
      title: "AI Voice & Chat Assistants",
      description: "Human-like interactions that answer questions, qualify leads, and keep conversations moving.",
    },
    {
      icon: PenTool,
      title: "AI Content Generation",
      description: "Auto-create messages, emails, and campaigns in seconds.",
    },
    {
      icon: Layout,
      title: "AI Funnel Builder",
      description: "Build high-converting funnels instantly with smart, auto-generated layouts.",
    },
  ];

  const growthSuiteCategories = [
    {
      id: "lead-communication",
      title: "Lead Communication",
      icon: MessageSquare,
      features: [
        { name: "Missed-Call Text-Back System", description: "Automatically text back missed calls so no lead slips away.", quote: "Never lose a customer because you missed a call again." },
        { name: "Lead Nurture & Follow-Up Automation", description: "Automatic multi-channel follow-up for all new leads via SMS, email, and voicemail sequences.", quote: "Every lead gets followed up until they convert — automatically." },
        { name: "Quote Follow-Up System", description: "Automated follow-up designed to close open quotes and estimates.", quote: "Close more open quotes without lifting a finger." },
        { name: "No-Show Recovery Automation", description: "Converts no-shows into rescheduled appointments with automated prompts.", quote: "Turn no-shows into booked appointments automatically." },
      ],
    },
    {
      id: "reputation",
      title: "Reputation",
      icon: Star,
      features: [
        { name: "Review Request Automation", description: "Automatic review generation from every new customer.", quote: "Generate 5-star reviews every week — automatically." },
        { name: "Review Response Service", description: "Respond to all customer reviews with professional templates.", quote: "Every review gets a professional response — like clockwork." },
        { name: "Reputation Monitoring & Alerts", description: "Monitor new reviews and get alerts for negative ratings.", quote: "Never get blindsided by a bad review again." },
        { name: "Testimonial & Case Study Engine", description: "Automated system for collecting new testimonials and stories.", quote: "Collect powerful testimonials automatically." },
      ],
    },
    {
      id: "scheduling",
      title: "Scheduling",
      icon: Calendar,
      features: [
        { name: "Appointment Reminder Sequences", description: "Automated reminders via SMS and email to reduce no-shows dramatically.", quote: "Cut no-shows with automatic reminders." },
        { name: "Booking Calendar Optimization", description: "Monthly tuning to keep calendars functioning correctly with buffer optimization.", quote: "Your calendar will always work the way it should." },
        { name: "VIP Waitlist & Priority Scheduling", description: "Notify VIPs about early openings or new availability.", quote: "Keep your best customers coming back first." },
        { name: "Membership & Subscription Billing", description: "Automates billing reminders, failed payment recovery, and renewals.", quote: "Never lose revenue to failed membership payments again." },
      ],
    },
    {
      id: "retention",
      title: "Retention",
      icon: Heart,
      features: [
        { name: "Upsell & Cross-Sell Automation", description: "Automatically promote higher-value services or products.", quote: "Increase revenue per customer automatically." },
        { name: "Customer Loyalty Program Engine", description: "Points, rewards, and incentives delivered automatically.", quote: "Turn customers into loyal regulars with a simple rewards system." },
        { name: "Birthday & Anniversary Offers", description: "Special offers sent automatically on important dates.", quote: "Celebrate customers and drive repeat visits." },
        { name: "Win-Back & Churn Prevention", description: "Detect and recover at-risk customers with targeted messaging.", quote: "Stop customers from slipping away." },
      ],
    },
    {
      id: "content",
      title: "Content",
      icon: FileText,
      features: [
        { name: "Auto-Reposting Social Content", description: "Reposts existing content across social channels automatically.", quote: "Stay active online without creating new content." },
        { name: "Monthly Content Calendar", description: "Pre-scheduled 30 days of content posts with auto-posting setup.", quote: "A full month of content, done for you." },
        { name: "Review-to-Content Engine", description: "Turn customer reviews into social proof posts.", quote: "Turn your 5-star reviews into daily social proof." },
        { name: "Customer Newsletter", description: "Send branded newsletters with helpful content and offers.", quote: "Build loyalty with a valuable monthly newsletter." },
      ],
    },
    {
      id: "advertising",
      title: "Advertising",
      icon: Megaphone,
      features: [
        { name: "Monthly Ad Angle Refresh", description: "New hooks, creative angles, and copy every month.", quote: "Keep your ads fresh and performing well." },
        { name: "Retargeting Audience Builder", description: "Build and maintain high-converting retargeting audiences.", quote: "Capture everyone who showed interest but didn't convert." },
        { name: "Landing Page Optimization", description: "Monthly tuning of landing pages to improve conversions.", quote: "Your landing pages will convert better every month." },
        { name: "Lead Magnet Delivery & Follow-Up", description: "Deliver lead magnets and nurture leads into appointments.", quote: "Turn lead magnet downloads into real customers." },
      ],
    },
    {
      id: "analytics",
      title: "Analytics",
      icon: PieChart,
      features: [
        { name: "Monthly Performance Report", description: "A simple report summarizing key metrics and suggestions.", quote: "Know exactly what's working and what to fix." },
        { name: "Customer Journey Dashboard", description: "Visualize and optimize the entire customer journey.", quote: "Visualize exactly where customers drop off so we can fix it." },
        { name: "Pipeline Cleanup & Optimization", description: "Remove duplicates, fix tags, and clean dead conversations monthly.", quote: "A clean pipeline converts better — let's tidy yours every month." },
        { name: "Compliance & Deliverability Monitoring", description: "Protect messaging deliverability by monitoring compliance settings.", quote: "Avoid shutdowns and keep your messages landing where they belong." },
      ],
    },
  ];

  const industryCategories = [
    {
      title: "Home Service",
      industries: ["Kitchen Remodeling", "AC Repair", "Plumbing", "Landscaping", "Roofing", "Electricians", "Pest Control", "Locksmith", "Painting", "Flooring Installation", "Damage Restoration", "Garage Door Repair"],
    },
    {
      title: "Healthcare",
      industries: ["Dentists", "Chiropractors", "Cosmetic Surgery", "Weight Loss Centers", "Eye Doctors", "Day Spas", "Veterinarians", "Fitness Centers"],
    },
    {
      title: "Legal",
      industries: ["Bankruptcy", "Personal Injury", "Divorce", "Criminal", "Traffic"],
    },
    {
      title: "Automotive",
      industries: ["Auto Repair Shops", "Auto Body Shops", "Auto Dealers"],
    },
    {
      title: "Professional Services",
      industries: ["Real Estate Brokers", "Mortgage Brokers", "Insurance Agents", "CPA/Tax Consultants"],
    },
  ];

  const pricingPlans = [
    {
      name: "Essentials",
      price: "$297",
      period: "/month",
      annualSave: "Save $594",
      annualPrice: "$2,970/year",
      popular: false,
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
      ctaLink: "https://lp.growsmallbiz.io/order-1",
      note: "No contracts. Cancel anytime.",
    },
    {
      name: "Unlimited",
      price: "$397",
      period: "/month",
      annualSave: "Save $794",
      annualPrice: "$3,970/year",
      popular: true,
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
      ctaLink: "https://lp.growsmallbiz.io/order-2",
      note: "Zero AI overage fees. Cancel anytime.",
    },
    {
      name: "Growth",
      price: "$497",
      period: "/month",
      annualSave: "Save $993",
      annualPrice: "$4,970/year",
      popular: false,
      description: "Traffic, SEO & Scale",
      features: [
        "Everything in Unlimited +",
        "Cross-Channel AI Manager",
        "Listings & Local SEO Sync",
        "Workflow Premium WordPress Hosting",
        "Multi-site & high-traffic optimization",
        "Enhanced performance & visibility tools",
      ],
      cta: "Unlock Growth",
      ctaLink: "https://lp.growsmallbiz.io/order-3",
      note: "Save on Hosting & Ads. Cancel anytime.",
    },
  ];

  const testimonials = [
    {
      quote: "I would give GrowSmallBiz Digital Marketing a 5 out of 5 stars! It's extremely easy to use even if you're not tech-savvy, it's effective and I recommend it to all my clients!",
      author: "Christian Kuzdub",
      company: "Kuzdub Consulting",
      rating: 5,
    },
    {
      quote: "The campaigns are so simple & easy to create... It's unbelievable. GrowSmallBiz made building and launching campaigns unbelievably smooth.",
      author: "Joel Karnston",
      company: "Everton Consulting",
      rating: 5,
    },
    {
      quote: "I have used different marketing automation platforms and this is now the best one I can recommend for beginners and SME.",
      author: "Janiece Nicolette",
      company: "Komo Consulting",
      rating: 5,
    },
    {
      quote: "The tools, documentation, and support are outstanding. Everything integrates seamlessly into my workflow, helping me ship faster and stay organized across multiple projects.",
      author: "Mia Carter",
      company: "Grant Digital",
      rating: 5,
    },
  ];

  const demoVideos = [
    { title: "Universal Inbox", icon: Inbox },
    { title: "Workflow Automations", icon: Settings },
    { title: "Website Builder", icon: Globe },
    { title: "Email & SMS Marketing", icon: Mail },
    { title: "Integrated Payments", icon: CreditCard },
    { title: "Social Media Planner", icon: Share2 },
    { title: "Calendar Scheduling", icon: Calendar },
    { title: "Sales Tracker", icon: LineChart },
    { title: "Forms & Surveys", icon: FileText },
    { title: "Reviews", icon: Star },
    { title: "Call Tracking", icon: Phone },
    { title: "CRM", icon: Users },
  ];

  const industryLeadingFeatures = [
    { icon: MessageSquare, title: "7 Channel Automated Follow Up", description: "Automatically message leads across SMS, Email, Voicemail, Calls, Facebook Messenger." },
    { icon: CalendarCheck, title: "AI Appointment Booking", description: "Use GrowSmallBiz to book appointments for you so you can focus on closing deals." },
    { icon: Phone, title: "Live Call Transfer", description: "Automatically get inbound calls every time a lead is ready to talk." },
    { icon: Inbox, title: "Communication Center", description: "All your communications in one place! Email, SMS, Phone, Voicemail, Facebook, Web Chat." },
    { icon: Smartphone, title: "Mobile App", description: "Close prospects on the go, respond to leads, track statuses, complete reminders." },
    { icon: Users, title: "Team Management", description: "Work as team members, track progress, set up campaigns, and more." },
    { icon: UserPlus, title: "Lead Round Robin", description: "Distribute leads automatically across multiple channels to increase response rates to 80%." },
    { icon: Bell, title: "Smart Reminders", description: "Never miss a follow-up with intelligent reminder systems." },
    { icon: BarChart3, title: "Advanced Reporting", description: "See how well your campaigns and sales team are performing." },
  ];

  const faqs = [
    {
      question: "What is GrowSmallBiz CRM and how does it work?",
      answer: "GrowSmallBiz CRM is an all-in-one business automation platform that helps you capture, nurture, and close leads through SMS, Email, Live Chat, Phone Calls, and more. It replaces scattered tools with a streamlined system that works around the clock with AI-powered automation.",
    },
    {
      question: "How quickly can I get started?",
      answer: "You can be up and running within 5 business days. Our team handles complete setup, connects all your channels, trains the AI on your business information, and tests everything before going live. No technical work required from you.",
    },
    {
      question: "Does it integrate with my existing tools?",
      answer: "Yes! GrowSmallBiz integrates with 100+ leading apps including Google Calendar, Outlook, Stripe, Facebook, Instagram, and many more. We configure everything to work seamlessly with your existing workflows.",
    },
    {
      question: "What's included in the setup?",
      answer: "All plans include account setup, training calls, and ongoing support. We configure your automations, connect your communication channels, set up your CRM, and ensure everything is working perfectly before you go live.",
    },
    {
      question: "Can I switch plans later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. There are no long-term contracts and you can cancel anytime.",
    },
    {
      question: "What are the additional usage costs?",
      answer: "Usage costs are minimal: Text messages at $0.016 each, emails at $0.004 each, local voicemail at $0.05 each. There are no hidden fees and the AI Premium plan includes zero AI overage fees.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take security seriously. All data is encrypted, stored securely, and we maintain compliance with industry standards. You own your data and can export it anytime.",
    },
    {
      question: "Do you offer a free trial?",
      answer: "We offer a free demo where you can see the platform in action and discuss your specific needs. Schedule a demo to see how GrowSmallBiz can transform your business.",
    },
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "GrowSmallBiz CRM",
    "applicationCategory": "BusinessApplication",
    "description": "All-in-one AI-powered CRM that helps small businesses capture, nurture, and close leads through automated SMS, Email, Live Chat, and Phone communication.",
    "provider": {
      "@type": "Organization",
      "name": "GrowSmallBiz"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter Plan",
        "price": "97",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31"
      },
      {
        "@type": "Offer",
        "name": "Growth Plan",
        "price": "297",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31"
      },
      {
        "@type": "Offer",
        "name": "AI Premium Plan",
        "price": "497",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI-Powered CRM for Small Business | Automate Sales & Marketing | GrowSmallBiz</title>
        <meta
          name="description"
          content="Convert more leads into sales with GrowSmallBiz CRM. All-in-one platform for automated SMS, Email, Live Chat & Phone follow-ups. 24/7 AI-powered lead nurturing. Start at $97/mo."
        />
        <meta
          name="keywords"
          content="small business CRM, AI CRM, sales automation, lead nurturing, automated follow-up, marketing automation, appointment booking, reputation management"
        />
        <link rel="canonical" href="https://growsmallbiz.io/services/crm" />
        <meta property="og:title" content="AI-Powered CRM for Small Business | GrowSmallBiz" />
        <meta property="og:description" content="Convert more leads into sales with automated SMS, Email, Live Chat & Phone follow-ups. 24/7 AI-powered lead nurturing." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${crmHeroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(266,27%,10%)]/60 via-[hsl(266,27%,10%)]/50 to-[hsl(266,27%,10%)]/90" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-fade-up">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">START CLOSING MORE DEALS!</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up leading-tight">
                Convert More{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Leads</span>{" "}
                Into Sales
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                GrowSmallBiz Digital Marketing helps you capture, nurture, and close leads on autopilot
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.15s" }}>
                through SMS, Email, Live Chat, Phone Calls, and more!
              </p>



              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <Button variant="hero" size="lg" asChild>
                  <a href="https://lp.growsmallbiz.io/crm-demo-request-page" target="_blank" rel="noopener noreferrer">
                    Schedule A Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#pricing">View Pricing</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us / Value Props */}
        <section className="relative py-20 bg-card/80 border-t border-primary/10">
          <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-up">
              <p className="text-primary font-medium mb-4">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Your Entire Business. Powered by AI.
              </h2>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Simplified Into <span className="text-transparent bg-clip-text bg-gradient-primary italic">One System</span>.
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
                GrowSmallBiz Digital Marketing gives small businesses the power to capture more leads, close more deals, and automate their entire customer journey in one place. It replaces scattered tools with a streamlined system that works around the clock.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {valueProps.map((prop, index) => (
                <div
                  key={index}
                  className="bg-background/80 backdrop-blur-sm border border-ghl-icon rounded-2xl p-8 text-center animate-fade-up transition-all hover:shadow-[0_0_30px_rgba(255,127,80,0.5)]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <prop.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{prop.title}</h3>
                  <p className="text-muted-foreground">{prop.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="relative py-20 ghl-section">
          <div className="absolute inset-0 section-glow opacity-50" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-up">
              <p className="text-primary font-medium mb-4">Autopilot for your Business</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                through SMS, Email, Web Chat, Phone Calls, and much more!
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm rounded-2xl p-6 animate-fade-up transition-all hover:shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]"
                  style={{ animationDelay: `${index * 0.1}s`, border: '2px solid #17a2b8ff', backgroundColor: '#2d465cff' }}
                >
                  <div className="w-12 h-12 rounded-xl bg-ghl-icon/20 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-ghl-icon" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Features Section */}
        <section className="relative py-20 ghl-section border-y border-ghl-border/20">
          <div className="absolute inset-0 bg-gradient-to-br from-ghl-border/5 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-up">
              <p className="text-primary font-medium mb-4">AI Features Overview</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Work Smarter, Respond Faster, Close More Deals
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built-in AI tools that handle the heavy lifting so you can focus on growth—not manual tasks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="ghl-card rounded-2xl p-6 animate-fade-up group"
                  style={{ animationDelay: `${index * 0.1}s`, border: '2px solid #17a2b8ff' }}
                >
                  <div className="w-12 h-12 rounded-xl bg-ghl-icon/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-ghl-icon" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Complete Growth Suite Section */}
        <section className="relative py-20 bg-background">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.03)_0%,_transparent_50%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-up">
              <p className="text-primary font-medium mb-4">COMPLETE GROWTH SUITE</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-primary italic">Grow Your Business</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                7 powerful categories of automation services designed to attract leads, build your reputation, and retain customers for life.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {growthSuiteCategories.map((category, index) => (
                <AccordionItem
                  key={category.id}
                  value={category.id}
                  className="ghl-card px-6 animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s`, border: '2px solid #17a2b8ff' }}
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xl font-semibold text-foreground">{category.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="grid md:grid-cols-2 gap-4 pt-4">
                      {category.features.map((feature, fIndex) => (
                        <div key={fIndex} className="bg-background/80 border border-border rounded-xl p-4 hover:border-primary/20 transition-colors">
                          <h4 className="font-semibold text-foreground mb-2">{feature.name}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                          <p className="text-sm text-primary italic">"{feature.quote}"</p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Industry Leading Features */}
        <section className="relative py-20 bg-card/80 border-t border-primary/10">
          <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Industry Leading Features
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryLeadingFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-background/80 backdrop-blur-sm border border-ghl-icon rounded-2xl p-6 animate-fade-up transition-all hover:shadow-[0_0_30px_rgba(255,127,80,0.5)]"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 text-center">{feature.title}</h3>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="relative py-20 bg-background">
          <div className="absolute inset-0 section-glow opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-up">
              <p className="text-primary font-medium mb-4">Tailored For Your Industry</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Solutions Built To Fit Your Business
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Whether you are scheduling jobs, booking clients, managing leads, or closing deals, the platform adjusts to your industry needs while keeping everything fast, simple, and automated.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {industryCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-background/80 backdrop-blur-sm border border-ghl-icon rounded-2xl p-6 animate-fade-up transition-all hover:shadow-[0_0_30px_rgba(255,127,80,0.5)]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4 pb-3 border-b border-border">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.industries.map((industry, iIndex) => (
                      <li key={iIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        {industry}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-20 bg-secondary/40 border-y border-primary/10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Join 3,800+ GrowSmallBiz Customers!
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-6 animate-fade-up hover:shadow-lg hover:shadow-primary/5 transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 text-sm leading-relaxed">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Videos Section */}
        <section className="relative py-20 bg-background">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Quick Demo Videos
              </h2>
              <p className="text-muted-foreground">See how each feature works in action</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {demoVideos.map((video, index) => (
                <div
                  key={index}
                  className="bg-card/60 backdrop-blur-sm border border-ghl-icon rounded-xl p-4 text-center animate-fade-up transition-all cursor-pointer group hover:shadow-[0_0_30px_rgba(255,127,80,0.5)]"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <video.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{video.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative py-20 bg-secondary/50 border-y border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
          <div className="absolute inset-0 section-glow" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-up">
              <p className="text-primary font-medium mb-4">Choose a Plan That Fits Your Growth</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Win More Clients & Keep Them For Life
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything You Need To Capture, Nurture, and Close Leads — All In One Place
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-card/95 backdrop-blur-sm border rounded-2xl p-8 animate-fade-up transition-all hover:translate-y-[-4px] ${
                    plan.popular 
                      ? "border-primary shadow-xl shadow-primary/20 ring-1 ring-primary/30" 
                      : "border-ghl-icon hover:shadow-[0_0_60px_rgba(255,127,80,0.5)]"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary text-primary-foreground text-sm font-medium rounded-full shadow-lg shadow-primary/30">
                      ★ Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-sm text-primary font-medium">Go annual and {plan.annualSave}</p>
                    <p className="text-xs text-muted-foreground mt-1">{plan.annualPrice}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    {plan.note}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-background overflow-hidden">
          <div className="absolute inset-0 hero-glow opacity-50" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Ready to Convert More Leads Into Sales?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Schedule a demo to see how GrowSmallBiz can transform your business with AI-powered automation.
              </p>
              <Button variant="hero" size="lg" className="glow-primary" asChild>
                <a href="https://lp.growsmallbiz.io/crm-demo-request-page" target="_blank" rel="noopener noreferrer">
                  Schedule My Demo Session
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about GrowSmallBiz CRM"
          faqs={faqs}
        />
      </main>

      <Footer />
    </>
  );
};

export default CRM;
