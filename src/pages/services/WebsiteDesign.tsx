import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/sections/FAQSection";
import { BlogSection, generalBlogPosts } from "@/components/sections/BlogSection";
import { AnimatedStatsSection } from "@/components/sections/AnimatedStatsSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { baseContactCTA } from "@/config/contactCTA";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA, FloatingCTA } from "@/components/services";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { GlowCard } from "@/components/ui/glow-card";
import {
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Search,
  Users,
  BarChart3,
  Shield,
  Clock,
  Star,
  Globe,
  Zap,
  Target,
  Award,
  TrendingUp,
  MapPin,
  FileText,
  Settings,
  Rocket,
  RefreshCw,
  Eye,
  Layout,
  Code,
  Layers,
} from "lucide-react";
import websiteHeroBg from "@/assets/websites-hero.jpg";
import caseStudyDental from "@/assets/case-study-dental.jpg";
import caseStudyHvac from "@/assets/case-study-hvac.jpg";
import caseStudyMedspa from "@/assets/case-study-medspa.jpg";
import portfolioDental from "@/assets/portfolio-dental-website.jpg";
import portfolioHvac from "@/assets/portfolio-hvac-website.jpg";
import portfolioMedspa from "@/assets/portfolio-medspa-website.jpg";
import portfolioLaw from "@/assets/portfolio-law-website.jpg";
import portfolioChiro from "@/assets/portfolio-chiro-website.jpg";
import portfolioRemodeling from "@/assets/portfolio-remodeling-website.jpg";

const websiteStats = [
  { value: "2s", label: "Avg. Load Time", icon: Zap },
  { value: "3x", label: "More Conversions", icon: TrendingUp },
  { value: "100%", label: "Mobile Responsive", icon: Smartphone },
  { value: "1-2", label: "Weeks to Launch", icon: Clock },
];

// FAQs from source
const faqs = [
  {
    question: "How long does it take to complete a website project?",
    answer:
      "Our typical timeline is 1-2 weeks for starter template websites and 6-8 weeks for premium authority websites. This includes discovery, design, development, content creation, and testing phases. Complex integrations or extensive content requirements may extend the timeline, which we'll discuss upfront during your consultation.",
  },
  {
    question: "Do you provide the content, or do I need to write it myself?",
    answer:
      "We handle all content creation as part of our service. Our copywriting specialists will craft compelling, SEO-optimized content that resonates with your target audience. We'll need you to provide basic information about your services, team, and any specific messaging preferences, but we do the heavy lifting of writing conversion-focused content.",
  },
  {
    question: "What happens if I need changes after the website launches?",
    answer:
      "For authority websites (up to 25 pages), the project includes up to 3 rounds of edits (up to 4 hours) to the development site before launch. We include one round of minor revisions within 30 days of launch at no additional cost. For ongoing updates and maintenance, monthly maintenance packages are included in your monthly fee, which includes content updates, security monitoring, performance optimization, and technical support.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Absolutely! Every website we create is fully responsive and mobile-optimized. With over 60% of searches happening on mobile devices, we design with a mobile-first approach to ensure your site looks and functions perfectly on smartphones, tablets, and desktops.",
  },
  {
    question: "How do you handle SEO and local search optimization?",
    answer:
      "Local SEO foundation is built into every website we create. Website SEO optimization includes optimized page structure, SEO optimized titles, meta tags, internal page linking, location-based schema markup, sitemap submission, conversion rate optimization, local keywords, NAP (Name, Address, Phone) consistency, Google Analytics setup, and site speed optimization. Our off-page SEO optimization includes Google Business Profile optimization, external link building, and citation building.",
  },
  {
    question: "Can I update the website myself after it's completed?",
    answer:
      "While we build websites using user-friendly platforms, we're responsible for delivering optimal SEO performance and maintaining your site's professional standards. Website updates are best handled by our experienced team members to ensure consistency and search engine optimization. Monthly updates are included in our retainer packages.",
  },
  {
    question: "Do you work with businesses outside the Bay Area?",
    answer:
      "While we're based in the San Francisco Bay Area, we work with premium service professionals nationwide. Our virtual consultation process and local research capabilities ensure we can effectively serve clients anywhere in the country while helping them dominate their local markets.",
  },
  {
    question: "What's the difference between your template and custom website options?",
    answer:
      "For Authority Websites, we offer development of 5 unique page templates/designs (contact us page & blog post included complimentary), up to 25 pages, SEO optimized, hyper-optimized hosting included, monthly updates and optimization included, and AI-powered SEO monitoring. For Quick Template Websites, we can add all your existing assets to a fresh new theme in about a week, including up to 10 pages and 1 round of revisions.",
  },
  {
    question: "How much input do I have in the design process?",
    answer:
      "We believe in collaborative design. After our discovery phase, we'll present initial concepts and gather your feedback. You'll have opportunities to review and request changes during the design phase, and we'll ensure the final result aligns with your vision and business goals.",
  },
  {
    question: "What if I'm not satisfied with the website?",
    answer:
      "We stand behind our work with a 30-day satisfaction guarantee. If you're not completely satisfied with your website within the first 30 days after launch, we'll work with you to make it right. Our goal is to create a website that exceeds your expectations and drives real results for your business.",
  },
  {
    question: "Do you provide analytics and reporting?",
    answer:
      "Yes! We set up Google Analytics and provide you with login credentials so you can monitor your website's performance. Our premium packages include monthly performance reports showing traffic, leads, and conversion metrics. We also provide recommendations for ongoing optimization based on the data.",
  },
];

// Testimonials
const testimonials = [
  {
    quote:
      "Our new website has completely transformed our practice. We went from getting 2-3 leads per week to 15+ qualified inquiries. The ROI has been incredible.",
    author: "Dr. Michael Chen",
    role: "Owner",
    company: "Bay Area Dental Excellence",
    rating: 5,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "They understood exactly what our law firm needed. The website positions us as the premium choice in our market, and we're attracting higher-value cases than ever before.",
    author: "Sarah Mitchell",
    role: "Managing Partner",
    company: "Mitchell & Associates Law",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "As a contractor, I was skeptical about investing in a premium website. But the results speak for themselves – we've landed three six-figure projects directly from website leads.",
    author: "James Rodriguez",
    role: "Owner",
    company: "Elite Home Remodeling",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
];

// Case Studies
const caseStudies = [
  {
    company: "Premier Dental Group",
    location: "San Jose, CA",
    industry: "Dental Practice",
    challenge:
      "Outdated website failing to convert visitors into appointments despite high traffic from existing marketing efforts.",
    timeframe: "8 weeks",
    image: caseStudyDental,
    metrics: [
      { label: "Conversion Rate", before: "1.2%", after: "8.7%", improvement: "+625%" },
      { label: "Monthly Leads", before: "12", after: "67", improvement: "+458%" },
      { label: "Page Load Time", before: "6.2s", after: "1.8s", improvement: "-71%" },
    ],
    quote: {
      text: "The new website paid for itself within the first month. We're now booking more high-value procedures than ever.",
      author: "Dr. Robert Kim",
      role: "Practice Owner",
    },
  },
  {
    company: "Comfort Pro HVAC",
    location: "Oakland, CA",
    industry: "HVAC Services",
    challenge:
      "Generic template website that looked like every other HVAC company, making it impossible to stand out in a competitive market.",
    timeframe: "6 weeks",
    image: caseStudyHvac,
    metrics: [
      { label: "Organic Traffic", before: "850/mo", after: "3,200/mo", improvement: "+276%" },
      { label: "Service Calls", before: "45/mo", after: "120/mo", improvement: "+167%" },
      { label: "Average Job Value", before: "$450", after: "$780", improvement: "+73%" },
    ],
    quote: {
      text: "Our website now reflects the premium service we provide. Customers comment on how professional we look compared to competitors.",
      author: "Mike Thompson",
      role: "Owner",
    },
  },
  {
    company: "Glow Medical Spa",
    location: "Palo Alto, CA",
    industry: "Medical Spa",
    challenge:
      "Website didn't convey the luxury experience of the spa, resulting in price-sensitive inquiries rather than premium clients.",
    timeframe: "7 weeks",
    image: caseStudyMedspa,
    metrics: [
      { label: "Premium Bookings", before: "15/mo", after: "48/mo", improvement: "+220%" },
      { label: "Avg. Treatment Value", before: "$320", after: "$580", improvement: "+81%" },
      { label: "Consultation Requests", before: "25/mo", after: "85/mo", improvement: "+240%" },
    ],
    quote: {
      text: "The website perfectly captures our brand's elegance. We're attracting the exact clientele we want.",
      author: "Dr. Lisa Park",
      role: "Medical Director",
    },
  },
];

// Website Features
const conversionFeatures = [
  {
    icon: Target,
    title: "Lead Capture & Conversion Tools",
    features: [
      "Custom contact forms with smart routing",
      "Online appointment booking integration",
      "Live chat functionality for immediate engagement",
      "Strategic call-to-action placement throughout",
    ],
  },
  {
    icon: Award,
    title: "Professional Credibility Elements",
    features: [
      "Client testimonials and case studies",
      "Professional certifications and awards display",
      "Before/after galleries (where applicable)",
      "Trust badges and security indicators",
    ],
  },
  {
    icon: BarChart3,
    title: "Performance & Analytics",
    features: [
      "Lightning-fast loading speeds (under 3 seconds)",
      "Comprehensive analytics and reporting",
      "Heat mapping and user behavior tracking",
      "Conversion rate optimization tools",
    ],
  },
  {
    icon: MapPin,
    title: "Local Business Integration",
    features: [
      "Google Maps integration",
      "Local business schema markup",
      "Service area pages for multiple locations",
      "Emergency contact features",
    ],
  },
];

// Local SEO Features
const localSEOFeatures = [
  {
    icon: Layout,
    title: "Location-Based Page Structure",
    description:
      "Every page is strategically designed with location-specific content and keywords that your ideal clients are searching for. We create dedicated service area pages and optimize your site architecture for local search visibility.",
  },
  {
    icon: Code,
    title: "Local Schema Markup Integration",
    description:
      "We embed structured data directly into your website code that helps Google understand your business location, services, and contact information. This technical foundation improves your chances of appearing in local search results.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Local Design",
    description:
      'With over 60% of local searches happening on mobile devices, we ensure your website delivers a flawless experience that converts "near me" searches into paying clients through optimized contact forms and click-to-call functionality.',
  },
  {
    icon: FileText,
    title: "NAP Consistency",
    description:
      "We ensure your business information (Name, Address, Phone) is consistently formatted across every page of your website, creating a solid foundation for local search credibility and making it easy for search engines to verify your location.",
  },
];

// Development Process
const developmentProcess = [
  {
    phase: "Phase 1",
    title: "Discovery & Strategy",
    description:
      "We begin with an in-depth consultation to understand your practice, target clientele, and competitive landscape. This foundation ensures every design decision aligns with your business goals and local market opportunities.",
    icon: Search,
  },
  {
    phase: "Phase 2",
    title: "Custom Design & UX",
    description:
      "Our design team creates a unique, professional website that reflects your brand's premium positioning. We focus on user experience elements that guide visitors toward taking action.",
    icon: Layers,
  },
  {
    phase: "Phase 3",
    title: "SEO Optimized Content",
    description:
      "Our copywriting specialists craft compelling, conversion-focused content that resonates with your target audience while incorporating local SEO best practices.",
    icon: FileText,
  },
  {
    phase: "Phase 4",
    title: "Development & Integration",
    description:
      "We build your website using the latest technologies and integrate essential features like appointment booking, contact forms, and analytics tracking.",
    icon: Settings,
  },
  {
    phase: "Phase 5",
    title: "Testing & Launch",
    description:
      "Before going live, we conduct thorough testing across all devices and browsers. We verify every form, button, and feature works perfectly.",
    icon: Rocket,
  },
  {
    phase: "Phase 6",
    title: "Ongoing Optimization",
    description:
      "Your website launch is just the beginning. We provide monthly content updates, security patches, performance monitoring, and continuous optimization.",
    icon: RefreshCw,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "Unlike generic web designers, we specialize exclusively in high-ticket service businesses. We understand the unique challenges and opportunities in your industry.",
  },
  {
    icon: MapPin,
    title: "Local Market Mastery",
    description:
      "Our team includes local SEO specialists who know how to make your business visible to clients in your specific geographic area.",
  },
  {
    icon: Target,
    title: "Conversion-Focused Design",
    description:
      "Every element of your website is strategically designed to convert visitors into clients using proven psychological principles.",
  },
  {
    icon: TrendingUp,
    title: "Ongoing Optimization",
    description:
      "Your website launch is just the beginning. We provide ongoing support, regular updates, and continuous optimization.",
  },
  {
    icon: Eye,
    title: "Transparent Reporting",
    description:
      "You'll receive detailed monthly reports showing exactly how your website is performing, including traffic sources and conversion rates.",
  },
  {
    icon: Star,
    title: "Premium Brand Positioning",
    description:
      "We help you establish a strong online presence that positions you as the premium choice in your market.",
  },
];

// Industries Served
const industriesServed = [
  {
    category: "Health & Wellness",
    businesses: ["Plastic Surgeons", "Medical Spas", "Dentists", "Chiropractors", "Fitness Centers"],
  },
  {
    category: "Legal & Professional",
    businesses: ["Personal Injury", "Family Law", "Estate Planning", "Criminal Defense", "Business Law"],
  },
  {
    category: "Home Services",
    businesses: ["HVAC & Plumbing", "Roofing", "Remodeling", "Landscaping", "Electrical"],
  },
  {
    category: "Other Services",
    businesses: ["Financial Advisors", "Real Estate", "Auto Repair", "Insurance", "Photography"],
  },
];

// Blog Posts
const blogPosts = [
  {
    title: "7 Website Elements That Convert Visitors Into Paying Customers",
    excerpt:
      "Discover the essential design and content elements that turn your website into a 24/7 lead generation machine for your local business.",
    date: "December 28, 2024",
    category: "Conversion Optimization",
    link: "/blog/website-conversion-elements",
  },
  {
    title: "Why Your Outdated Website Is Costing You Premium Clients",
    excerpt:
      "Learn how an outdated website design can hurt your credibility and drive potential customers to your competitors.",
    date: "December 20, 2024",
    category: "Website Design",
    link: "/blog/outdated-website-cost",
  },
  {
    title: "Mobile-First Design: Why It's Critical for Local Service Businesses",
    excerpt:
      "With 60%+ of local searches on mobile, discover why mobile-first design is essential for capturing local leads.",
    date: "December 15, 2024",
    category: "Mobile Optimization",
    link: "/blog/mobile-first-design",
  },
];

// Portfolio Items
const portfolioItems = [
  {
    title: "Premier Dental Care",
    industry: "Dental Practice",
    description: "Complete rebrand and website redesign resulting in 625% increase in conversions",
    image: portfolioDental,
    tags: ["Healthcare", "Lead Generation", "Mobile-First"],
    results: "+458% Monthly Leads",
  },
  {
    title: "Comfort Pro HVAC",
    industry: "HVAC Services",
    description: "Custom website with emergency booking and service area pages",
    image: portfolioHvac,
    tags: ["Home Services", "Local SEO", "Booking Integration"],
    results: "+276% Organic Traffic",
  },
  {
    title: "Glow Medical Spa",
    industry: "Medical Spa",
    description: "Luxury website design reflecting premium brand positioning",
    image: portfolioMedspa,
    tags: ["Med Spa", "Premium Design", "Gallery"],
    results: "+220% Premium Bookings",
  },
  {
    title: "Mitchell & Associates",
    industry: "Law Firm",
    description: "Professional corporate website with case evaluation forms",
    image: portfolioLaw,
    tags: ["Legal", "Professional", "Trust Building"],
    results: "+185% Qualified Leads",
  },
  {
    title: "Coastal Chiropractic",
    industry: "Chiropractic Care",
    description: "Wellness-focused design with patient education resources",
    image: portfolioChiro,
    tags: ["Wellness", "Educational", "Appointment Booking"],
    results: "+338% New Patients",
  },
  {
    title: "Elite Home Remodeling",
    industry: "Home Remodeling",
    description: "Portfolio showcase with before/after galleries and project estimator",
    image: portfolioRemodeling,
    tags: ["Contractor", "Portfolio", "Lead Capture"],
    results: "+167% Project Inquiries",
  },
];

const WebsiteDesign = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Helmet>
        <title>Conversion Focused Website Design | Lead-Generating Websites for Local Businesses</title>
        <meta
          name="description"
          content="Transform your online presence with conversion-focused responsive website design. We build lead-generating websites for local service businesses that attract premium clients and convert visitors into customers."
        />
        <meta
          name="keywords"
          content="website design, conversion optimization, local business website, responsive web design, lead generation website, SEO website, service business website"
        />
        <link rel="canonical" href="https://growsmallbiz.io/services/website-design" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Conversion Focused Website Design",
            description:
              "Professional website design services for local service businesses focused on lead generation and conversions.",
            provider: {
              "@type": "Organization",
              name: "GrowSmallBiz",
            },
            serviceType: "Website Design",
            areaServed: "United States",
          })}
        </script>
      </Helmet>

      <ServiceJsonLd
        serviceName="Conversion Focused Website Design"
        serviceType="Website Design"
        description="Lead-generating website design for local service businesses with SEO and conversion optimization."
        url="/services/website-design"
        breadcrumbs={[
          { name: "Services", url: "/services/ai-seo-hub" },
          { name: "Website Design", url: "/services/website-design" },
        ]}
      />
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${websiteHeroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />

        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
              Conversion-Focused Website Design
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Responsive Website Design for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[hsl(199_89%_48%)]">
                Local Service Businesses
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Transform your online presence into a lead-generating machine that attracts premium clients in your local
              market and converts visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/free-assessment">
                  Get Free Website Analysis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Schedule Strategy Session</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">625%</div>
                <div className="text-sm text-muted-foreground">Avg. Conversion Increase</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">1.8s</div>
                <div className="text-sm text-muted-foreground">Avg. Page Load Time</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Websites Launched</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Packages Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From Authority Websites to Starter Templates
            </h2>
            <p className="text-lg text-muted-foreground">
              Premium solutions for established professionals and cost-effective options for new businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Authority Websites */}
            <div className="bg-card rounded-2xl p-8 border-2 border-primary/20 shadow-lg hover:shadow-[0_0_30px_rgba(255,127,80,0.3)] transition-all duration-300">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Authority Websites</h3>
              <p className="text-muted-foreground mb-6">
                For established high-ticket service professionals who want to dominate their local market with 25+ pages.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "5 unique page template designs",
                  "Up to 25 fully optimized pages",
                  "Complete SEO optimization",
                  "Hyper-optimized hosting included",
                  "Monthly updates & optimization",
                  "AI-powered SEO monitoring",
                  "30-day satisfaction guarantee",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" className="w-full" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Starter Websites */}
            <div className="bg-card rounded-2xl p-8 border-2 border-border hover:shadow-[0_0_30px_rgba(255,127,80,0.3)] transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Starter Template Websites</h3>
              <p className="text-muted-foreground mb-6">
                For new business owners who need a professional presence without the full investment with 5 pages.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Up to 10 pages",
                  "Fresh, modern theme",
                  "1 round of revisions",
                  "Titles & meta descriptions",
                  "Mobile responsive design",
                  "One-time fee (no retainer)",
                  "Ready in ~1 week",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Features That Convert Visitors Into Clients
            </h2>
            <p className="text-lg text-muted-foreground">
              Every website we build includes powerful tools designed to capture leads and drive conversions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {conversionFeatures.map((feature, index) => (
              <div
                key={index}
                className="ghl-card rounded-xl p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="ghl-icon flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Foundation Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Website Design Built on Local SEO Foundation
            </h2>
            <p className="text-lg text-muted-foreground">
              Your authority website is the foundation of local SEO – we build it right from the start
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {localSEOFeatures.map((feature, index) => (
              <div key={index} className="ghl-card rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="ghl-icon flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Proven 6-Phase Development Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach that ensures your website is built right from discovery to launch and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentProcess.map((phase, index) => (
              <div
                key={index}
                className="ghl-card rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <phase.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-primary">{phase.phase}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground">
              Specialized website design for high-ticket local service professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesServed.map((industry, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border-2 border-border hover:shadow-[0_0_30px_rgba(255,127,80,0.3)] hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold mb-4 text-primary">{industry.category}</h3>
                <ul className="space-y-2">
                  {industry.businesses.map((business, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary/60 shrink-0" />
                      {business}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Service Professionals Choose Us
            </h2>
            <p className="text-lg text-muted-foreground">
              We specialize exclusively in high-ticket service businesses and understand your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="ghl-card text-center p-6 rounded-xl"
              >
                <div className="ghl-icon mx-auto mb-4">
                  <reason.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Websites That Drive Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our collection of conversion-focused websites built for local service businesses across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden border-2 border-border hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,127,80,0.3)]"
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} website design`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Results Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full shadow-lg">
                    {item.results}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {item.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Ready to join our portfolio of successful businesses?
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/free-assessment">
                Start Your Website Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results for Real Businesses</h2>
            <p className="text-lg text-muted-foreground">
              See how our conversion-focused websites have transformed local service businesses
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden border-2 border-border shadow-lg hover:shadow-[0_0_30px_rgba(255,127,80,0.3)] transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={study.image}
                      alt={study.company}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent lg:hidden" />
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                        {study.industry}
                      </span>
                      <span className="text-sm text-muted-foreground">{study.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{study.company}</h3>
                    <p className="text-muted-foreground mb-6">{study.challenge}</p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center p-3 rounded-lg bg-secondary/50">
                          <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
                          <div className="text-lg font-bold text-primary">{metric.improvement}</div>
                          <div className="text-xs text-muted-foreground">
                            {metric.before} → {metric.after}
                          </div>
                        </div>
                      ))}
                    </div>

                    {study.quote && (
                      <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                        "{study.quote.text}"
                        <footer className="mt-2 text-sm font-semibold text-foreground">
                          — {study.quote.author}, {study.quote.role}
                        </footer>
                      </blockquote>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/free-assessment">
                Get Your Free Website Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Trusted by local service professionals across the country
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 border-2 border-border hover:border-primary/30 hover:shadow-[0_0_30px_rgba(255,127,80,0.3)] transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AnimatedStatsSection stats={websiteStats} columns={4} />

      <CaseStudySection
        caseStudies={[
          {
            company: "Premier Dental Group",
            location: "San Jose, CA",
            industry: "Dental Practice",
            challenge: "Outdated website failing to convert visitors into appointments despite high traffic.",
            timeframe: "8 weeks",
            metrics: [
              { label: "Conversion Rate", before: "1.2%", after: "8.7%", improvement: "+625%" },
              { label: "Monthly Leads", before: "12", after: "67", improvement: "+458%" },
              { label: "Page Load Time", before: "6.2s", after: "1.8s", improvement: "-71%" },
            ],
          },
          {
            company: "Comfort Pro HVAC",
            location: "Oakland, CA",
            industry: "HVAC Services",
            challenge: "Generic template website that looked like every other HVAC company.",
            timeframe: "6 weeks",
            metrics: [
              { label: "Organic Traffic", before: "850/mo", after: "3,200/mo", improvement: "+276%" },
              { label: "Service Calls", before: "45/mo", after: "120/mo", improvement: "+167%" },
              { label: "Average Job Value", before: "$450", after: "$780", improvement: "+73%" },
            ],
          },
        ]}
        title="Website Design Case Studies"
        subtitle="See how our websites transform business results"
      />

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about our website development process"
        faqs={faqs}
        schemaType="WebPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Website Design?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's build your dream website together.",
        }}
      />

      {/* Blog Section */}
      <BlogSection
        posts={generalBlogPosts.slice(0, 3)}
        title="Website Design & Development Insights"
        subtitle="Expert tips to create high-converting websites for service businesses"
        showViewAll={true}
        viewAllLink="/blog"
      />

      {/* CTA Section */}
      <CardCTA
        title="Ready to Transform Your Online Presence?"
        description="Don't let another day pass with a website that fails to showcase your expertise. Join hundreds of successful service professionals who've elevated their online presence."
      />
      <ConsultationFormSection />
      <Footer />
      
      {/* Floating CTA */}
      <FloatingCTA
        title="Ready to Transform Your Online Presence?"
        description="Don't let another day pass with a website that fails to showcase your expertise. Join hundreds of successful service professionals."
      />
    </div>
  );
};

export default WebsiteDesign;
