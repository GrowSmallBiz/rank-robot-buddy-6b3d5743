import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { BlogSection, generalBlogPosts } from "@/components/sections/BlogSection";
import { AnimatedStatsSection } from "@/components/sections/AnimatedStatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { baseContactCTA } from "@/config/contactCTA";
import { GlowCard } from "@/components/ui/glow-card";

const socialMediaTestimonials = [
  {
    quote: "Our Instagram went from 500 to 15,000 engaged followers. Now it's our #1 source for new patient inquiries.",
    author: "Dr. Amanda Park",
    role: "Medical Director",
    company: "Glow Aesthetics",
  },
  {
    quote: "The content calendar and strategy transformed our brand. We're now seen as the premium choice in our market.",
    author: "Robert Kim",
    role: "Owner",
    company: "Kim Law Group",
  },
  {
    quote: "Consistent posting with their strategy doubled our engagement and brought in high-quality leads every week.",
    author: "Lisa Chen",
    role: "Marketing Manager",
    company: "Elite Dental Care",
  },
];
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import { 
  ArrowRight, 
  Target, 
  Users, 
  BarChart3, 
  TrendingUp,
  MessageCircle,
  Image,
  Calendar,
  Megaphone,
  ChartLine,
  Shield,
  CheckCircle2,
  Star,
  Quote,
  Clock,
  CalendarDays,
  Building2,
  Briefcase,
  MapPin,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import socialMediaHero from "@/assets/social-media-hero.jpg";

const socialMediaStats = [
  { value: "90%", label: "Consumers Research Online", icon: Users },
  { value: "3-8x", label: "ROI in First Year", icon: TrendingUp },
  { value: "73%", label: "Check Social Before Buying", icon: Eye },
  { value: "30", label: "Posts Per Month", icon: Calendar },
];

// FAQs from source with enhancements
const faqs: FAQItem[] = [
  // General Questions
  {
    question: "Do my clients really use social media to find professionals like me?",
    answer: "Absolutely. Over 90% of affluent consumers research professionals online before making decisions, and 73% check social media profiles as part of their vetting process. Your potential clients are looking at your competitors' social media presence right now - the question is whether they're finding you or your competition."
  },
  {
    question: "How is social media marketing different for high-ticket service professionals compared to other businesses?",
    answer: "High-ticket professional services require a completely different approach focused on building trust, demonstrating expertise, and attracting quality prospects rather than quantity. We emphasize professional credibility, client testimonials, educational content, and precise targeting of affluent local demographics rather than broad audience reach."
  },
  {
    question: "What makes GrowSmallBiz different from other social media agencies?",
    answer: "We specialize exclusively in high-ticket local service professionals like healthcare providers, attorneys, and premium contractors. We understand your unique challenges, compliance requirements, and the need to attract affluent clients. Our strategies focus on ROI and client quality, not just followers or likes."
  },
  // Strategy Questions
  {
    question: "Which social media platforms should my practice be on?",
    answer: "This depends on your profession and target audience. Typically, we recommend LinkedIn for B2B professionals and attorneys, Facebook for broad local reach, Instagram for visual services like cosmetic procedures or luxury home improvements, and Google Business Profile for all local professionals. We'll conduct a platform analysis during your strategy development to determine the optimal mix."
  },
  {
    question: "How long does it take to see results from social media marketing?",
    answer: "While brand awareness begins immediately, meaningful lead generation typically starts within 3-6 months. High-ticket services have longer sales cycles, so we focus on building relationships and trust over time. Our clients usually see significant ROI by month 6-12, with consistent growth thereafter."
  },
  {
    question: "What kind of ROI can I expect from social media marketing?",
    answer: "Our high-ticket service professional clients typically see 3:1 to 8:1 ROI within the first year. Since your average client value is much higher than typical businesses, even a few additional clients per month can generate substantial returns. We track all leads and conversions to provide clear attribution."
  },
  // Content & Compliance
  {
    question: "What type of content will you create for my practice?",
    answer: "We create a mix of educational content (industry insights, tips, FAQ videos), authority building content (professional achievements, client testimonials, community involvement), and local engagement content (event participation, partnerships, area-specific offerings). All content is tailored to your profession and target audience."
  },
  {
    question: "How do you handle compliance and professional ethics requirements?",
    answer: "We work closely with each client to understand their industry's specific compliance requirements (HIPAA for healthcare, bar association rules for attorneys, etc.). All content is reviewed for compliance before publishing, and we maintain strict confidentiality protocols for sensitive information."
  },
  {
    question: "How often will you post content?",
    answer: "Posting frequency varies by platform and strategy, but typically ranges from 3-5 posts per week across all platforms. Quality and strategic timing are more important than volume. We focus on consistent, professional content that builds your reputation over time."
  },
  // Management & Communication
  {
    question: "Will I have input on the content before it's published?",
    answer: "Absolutely. You'll review and approve all content before publication. We use a collaborative approval process that respects your expertise while leveraging our marketing knowledge. Most clients prefer to approve content in batches (weekly or bi-weekly) for efficiency."
  },
  {
    question: "How do you handle negative reviews or comments on social media?",
    answer: "We monitor your accounts continuously and have protocols for addressing negative feedback professionally and promptly. Our approach focuses on demonstrating your commitment to client satisfaction while protecting your professional reputation. We'll always consult with you before responding to sensitive situations."
  },
  // Investment & Pricing
  {
    question: "What's included in your social media management services?",
    answer: "Our comprehensive service includes strategy development, content creation, posting and scheduling, community management, paid advertising management, reputation monitoring, monthly reporting, and ongoing optimization. We also provide lead conversion tools including automated follow-up systems and AI chat capabilities."
  },
  {
    question: "How much should I budget for social media advertising?",
    answer: "Advertising budgets typically range from $1,000-$5,000+ per month depending on your market size, competition, and growth goals. We'll provide specific recommendations based on your local market analysis and target client value. Many clients find the advertising investment pays for itself with just one new client per month."
  },
  // Results & Reporting
  {
    question: "How do you track leads and conversions from social media?",
    answer: "We use advanced tracking systems including call tracking numbers, form analytics, UTM parameters, and CRM integration to attribute leads directly to social media efforts. You'll receive detailed monthly reports showing exactly which platforms and content types generate the most valuable leads."
  },
  {
    question: "What metrics do you focus on beyond likes and followers?",
    answer: "We prioritize business-focused metrics including lead generation, consultation bookings, phone calls, website traffic, local brand awareness, and ultimately revenue attribution. While engagement metrics are important, we focus on metrics that directly impact your bottom line."
  },
  {
    question: "How quickly can we get started?",
    answer: "After your initial consultation and contract signing, we typically begin with a 2-week strategy development phase including social media audit and competitive analysis. Content creation and posting usually begin by week 3, with paid advertising campaigns launching by week 4-6."
  },
  // Technical Questions
  {
    question: "Will you need access to my current social media accounts?",
    answer: "Yes, we'll need administrative access to manage your accounts effectively. We use secure, professional account management tools and never share login credentials. We can also help you set up new accounts if you don't currently have a professional social media presence."
  },
  {
    question: "What happens to my accounts if I stop working with you?",
    answer: "Your social media accounts remain yours, and we'll provide a complete transition including all login credentials, content calendars, and strategy documentation. We believe in building long-term relationships, but we never hold your accounts hostage."
  },
];

const platforms = [
  {
    name: "Facebook",
    description: "Ideal for reaching local affluent demographics and building community presence with targeted advertising.",
    icon: Users,
    features: ["Community Building", "Local Targeting", "Lead Gen Ads", "Retargeting"],
    bestFor: "Broad local reach & community engagement",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    name: "Instagram",
    description: "Perfect for visual services like med spas, dental work, and premium home improvements.",
    icon: Image,
    features: ["Reels & Stories", "Visual Showcase", "Influencer Partnerships", "Shopping"],
    bestFor: "Visual services & lifestyle branding",
    color: "from-pink-500/20 to-purple-500/20",
  },
  {
    name: "LinkedIn",
    description: "Essential for B2B professionals, attorneys, consultants, and business service providers.",
    icon: Briefcase,
    features: ["Professional Network", "Thought Leadership", "B2B Lead Gen", "Industry Authority"],
    bestFor: "B2B & professional services",
    color: "from-blue-600/20 to-blue-800/20",
  },
  {
    name: "Google Business Profile",
    description: "Critical for local SEO and reputation management. Your digital storefront for local searches.",
    icon: MapPin,
    features: ["Local Search", "Reviews", "Posts & Updates", "Direct Messaging"],
    bestFor: "Local visibility & reputation",
    color: "from-green-500/20 to-emerald-500/20",
  },
];

const services = [
  {
    title: "Strategy Development",
    description: "Comprehensive social media auditing, competitor analysis, content calendar planning, and platform-specific strategies to dominate your local market.",
    icon: Target,
  },
  {
    title: "Content Planning",
    description: "Strategic monthly content planning to establish credibility, generate referrals, and attract high-value clients in your specific geographic area.",
    icon: Calendar,
  },
  {
    title: "Content Creation",
    description: "Professional photography, custom videography, branded graphic design, educational content, and client testimonials for a polished online presence.",
    icon: Image,
  },
  {
    title: "Advertising Management",
    description: "Strategic campaign setup, precise audience targeting, and professional creative development to reach and convert high-value local prospects.",
    icon: Megaphone,
  },
  {
    title: "Drive Engagement",
    description: "Lead conversion automation with proven email and SMS templates, 24/7 automated follow-up systems, and AI receptionists that respond instantly.",
    icon: MessageCircle,
  },
  {
    title: "Analytics & Reporting",
    description: "Monthly performance reports, lead tracking and attribution, ROI analysis, and strategy refinements to maximize your returns.",
    icon: ChartLine,
  },
];

const benefits = [
  {
    title: "Build Authority & Credibility",
    description: "Establish yourself as the go-to professional in your local market through consistent, quality content.",
    icon: Shield,
  },
  {
    title: "Attract Affluent Clients",
    description: "Target high-income earners seeking premium services with precision demographic targeting.",
    icon: Target,
  },
  {
    title: "Generate Quality Referrals",
    description: "Turn satisfied clients into brand advocates who share your content and refer new business.",
    icon: Users,
  },
  {
    title: "Stay Top-of-Mind",
    description: "Maintain awareness with past clients for repeat business and ongoing referrals.",
    icon: TrendingUp,
  },
  {
    title: "Track Real ROI",
    description: "Know exactly which efforts generate leads with advanced tracking and attribution.",
    icon: BarChart3,
  },
  {
    title: "Compliance-First Approach",
    description: "Industry-specific compliance for healthcare, legal, and regulated professions.",
    icon: CheckCircle2,
  },
];

const industryRecommendations = [
  { 
    industry: "Med Spas & Aesthetics", 
    platforms: "Instagram + Facebook + Google Business Profile",
    reason: "Visual transformation content drives bookings"
  },
  { 
    industry: "Dental Practices", 
    platforms: "Facebook + Instagram + Google Business Profile",
    reason: "Before/after content and patient education"
  },
  { 
    industry: "Chiropractors & Wellness", 
    platforms: "Facebook + Instagram + LinkedIn",
    reason: "Educational content builds trust"
  },
  { 
    industry: "HVAC & Plumbing", 
    platforms: "Facebook + Google Business Profile",
    reason: "Local reach and review management"
  },
  { 
    industry: "Law Firms & Attorneys", 
    platforms: "LinkedIn + Facebook + Google Business Profile",
    reason: "Professional authority and B2B connections"
  },
  { 
    industry: "Photographers & Creatives", 
    platforms: "Instagram + Facebook + LinkedIn",
    reason: "Portfolio showcase and networking"
  },
];

const testimonials = [
  {
    quote: "Our social media presence went from non-existent to generating 15+ new patient inquiries per month. The ROI has been incredible for our med spa.",
    author: "Dr. Sarah Mitchell",
    role: "Owner",
    company: "Radiance Med Spa",
    rating: 5,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote: "Finally, a team that understands HIPAA compliance and still creates engaging content. Our patient engagement has increased by 300%.",
    author: "Dr. Michael Chen",
    role: "Dental Director",
    company: "Premier Dental Group",
    rating: 5,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote: "They helped us build a LinkedIn presence that positioned us as the go-to law firm in our area. We've landed several major clients through social media.",
    author: "Jennifer Walsh",
    role: "Managing Partner",
    company: "Walsh & Associates Law",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
  },
];

const caseStudies = [
  {
    company: "Coastal Chiropractic",
    industry: "Healthcare",
    challenge: "Low brand awareness and struggling to attract new patients in a competitive market.",
    results: [
      { metric: "New Patient Inquiries", before: "8/month", after: "35/month", improvement: "+338%" },
      { metric: "Social Followers", before: "245", after: "2,847", improvement: "+1,062%" },
      { metric: "Review Score", before: "3.8", after: "4.9", improvement: "+29%" },
    ],
    timeframe: "6 months",
    platforms: "Facebook, Instagram, Google Business Profile",
  },
  {
    company: "Elite HVAC Services",
    industry: "Home Services",
    challenge: "Needed to establish trust and generate leads during peak season.",
    results: [
      { metric: "Monthly Leads", before: "12", after: "48", improvement: "+300%" },
      { metric: "Facebook Reach", before: "500", after: "15,000", improvement: "+2,900%" },
      { metric: "Cost Per Lead", before: "$85", after: "$32", improvement: "-62%" },
    ],
    timeframe: "4 months",
    platforms: "Facebook, Google Business Profile",
  },
  {
    company: "Luxe Aesthetics",
    industry: "Med Spa",
    challenge: "Wanted to attract higher-value clients and showcase premium services.",
    results: [
      { metric: "Avg. Booking Value", before: "$350", after: "$750", improvement: "+114%" },
      { metric: "Instagram Engagement", before: "1.2%", after: "5.8%", improvement: "+383%" },
      { metric: "Monthly Revenue", before: "$45K", after: "$112K", improvement: "+149%" },
    ],
    timeframe: "8 months",
    platforms: "Instagram, Facebook, LinkedIn",
  },
];

const blogPosts = [
  {
    title: "How Local Businesses Can Leverage Instagram Reels for Maximum Engagement",
    excerpt: "Discover the strategies that help local service businesses create viral-worthy Reels that drive real leads.",
    category: "Social Media Strategy",
    readTime: "6 min read",
    date: "Dec 28, 2025",
    slug: "/blog/instagram-reels-local-business",
  },
  {
    title: "The Complete Guide to Google Business Profile Optimization in 2026",
    excerpt: "Everything you need to know to dominate local search and turn your GBP into a lead generation machine.",
    category: "Local SEO",
    readTime: "8 min read",
    date: "Dec 22, 2025",
    slug: "/blog/google-business-profile-optimization",
  },
  {
    title: "Facebook Ads for Service Businesses: A Step-by-Step ROI Blueprint",
    excerpt: "Learn how to create Facebook ad campaigns that generate high-quality leads without wasting your budget.",
    category: "Paid Social",
    readTime: "10 min read",
    date: "Dec 15, 2025",
    slug: "/blog/facebook-ads-service-businesses",
  },
];

const SocialMedia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Social Media Marketing for Local Businesses | GrowSmallBiz</title>
        <meta name="description" content="Strategic social media marketing for local service professionals. From paid advertising to organic engagement, we elevate your brand and connect you with local clients." />
      </Helmet>
      <ServiceJsonLd
        serviceName="Social Media Marketing"
        serviceType="Social Media Management"
        description="Strategic social media marketing for local service professionals with paid advertising and organic engagement."
        url="/services/social-media"
        breadcrumbs={[
          { name: "Services", url: "/services/ai-seo-hub" },
          { name: "Social Media", url: "/services/social-media" },
        ]}
      />
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${socialMediaHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <MessageCircle className="w-4 h-4" />
                Social Media Marketing
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100">
              Social Media Management for{" "}
              <span className="text-gradient">Local Service Professionals</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up delay-200">
              With our strategic social media marketing, from paid advertising to organic engagement, 
              we elevate your professional brand and connect you with affluent local clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Link to="/free-assessment">
                <Button variant="hero" size="xl">
                  Get Free Strategy Session
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-up delay-400">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-gradient">90%</p>
                <p className="text-sm text-muted-foreground">Research Online First</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-gradient">3-8x</p>
                <p className="text-sm text-muted-foreground">Average ROI</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-gradient">73%</p>
                <p className="text-sm text-muted-foreground">Check Social Profiles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Social Media Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Why Social Media Marketing?</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Essential for Local Service Businesses
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a local service professional, your reputation and visibility directly impact your ability 
              to attract affluent clients. Social media provides the platform to showcase your expertise, 
              build trust, and establish yourself as the go-to professional in your market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="ghl-card rounded-xl p-6 space-y-4 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="ghl-icon">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Platform Selection</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Strategic Platform Selection for Your Business
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Not all platforms are created equal. We strategically select platforms based on 
              your target audience and professional industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${platform.color} border-2 border-border rounded-2xl p-8 space-y-6 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,127,80,0.3)] hover:-translate-y-2 animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-background/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <platform.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {platform.name}
                    </h3>
                    <p className="text-xs text-primary font-medium">
                      {platform.bestFor}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {platform.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {platform.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-background/60 backdrop-blur-sm text-foreground text-xs rounded-full border border-border/50"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Comprehensive Social Media Management
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From strategy to execution, we handle every aspect of your social media presence 
              so you can focus on what you do best.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GlowCard
                key={index}
                className="p-6 space-y-4 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Recommendations Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Industry-Specific Strategy</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Platform Recommendations by Industry
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Different industries require different platform strategies. Here's what works best for local service businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industryRecommendations.map((item, index) => (
              <GlowCard
                key={index}
                className="p-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{item.industry}</p>
                    <p className="text-sm text-primary font-medium mb-2">{item.platforms}</p>
                    <p className="text-xs text-muted-foreground">{item.reason}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Client Success</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-8 space-y-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/30" />
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-border flex items-center gap-4">
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

      {/* Case Studies Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Proven Results</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Client Success Stories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real results from real local service businesses. See how social media marketing transforms brands.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="p-6 border-b border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-xs text-muted-foreground">{study.timeframe}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {study.company}
                  </h3>
                  <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  <p className="text-xs text-primary mt-3">{study.platforms}</p>
                </div>
                <div className="p-6 space-y-4">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground">{result.metric}</p>
                        <p className="text-sm text-foreground">
                          {result.before} → <span className="text-primary font-semibold">{result.after}</span>
                        </p>
                      </div>
                      <span className="text-primary font-bold text-sm">{result.improvement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-up">
            <Link to="/free-assessment">
              <Button variant="hero" size="lg">
                Get Your Free Strategy Session
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseSection 
        title="Why Choose GrowSmallBiz for Social Media Marketing"
        subtitle="Your Social Media Partner"
        description="We build and manage your social media presence with strategy, creativity, and consistency—helping you connect with customers and grow your brand."
        items={[
          { title: "Strategic Content Planning", description: "We create content calendars aligned with your business goals and audience interests.", icon: Target },
          { title: "Multi-Platform Management", description: "We manage Instagram, Facebook, LinkedIn, and more from a unified strategy.", icon: Users },
          { title: "Engagement & Community", description: "We actively engage with your audience to build community and brand loyalty.", icon: MessageCircle },
          { title: "Performance Analytics", description: "Detailed reporting shows what's working and drives continuous improvement.", icon: BarChart3 },
          { title: "Brand Voice Consistency", description: "Every post reflects your brand personality and maintains professional standards.", icon: Eye },
          { title: "Trend Monitoring", description: "We stay on top of platform changes and trending content to maximize reach.", icon: TrendingUp },
        ]}
      />

      <AnimatedStatsSection stats={socialMediaStats} columns={4} />

      <TestimonialsSection 
        testimonials={socialMediaTestimonials}
        title="Social Media Success Stories"
        subtitle="See how businesses grow their brand presence and engagement"
      />

      <CaseStudySection
        caseStudies={[
          {
            company: "Glow Aesthetics",
            location: "Los Angeles, CA",
            industry: "Medical Spa",
            challenge: "No social presence despite offering premium aesthetic services.",
            timeframe: "6 months",
            metrics: [
              { label: "Instagram Followers", before: "500", after: "15,000", improvement: "+2,900%" },
              { label: "Engagement Rate", before: "0.8%", after: "6.2%", improvement: "+675%" },
              { label: "Social-Driven Leads", before: "3/mo", after: "42/mo", improvement: "+1,300%" },
            ],
          },
          {
            company: "Elite Fitness Studio",
            location: "Miami, FL",
            industry: "Fitness",
            challenge: "Inconsistent posting and no strategy for member acquisition.",
            timeframe: "4 months",
            metrics: [
              { label: "Monthly Reach", before: "2,500", after: "45,000", improvement: "+1,700%" },
              { label: "New Member Signups", before: "8/mo", after: "35/mo", improvement: "+338%" },
              { label: "Content Engagement", before: "45/post", after: "380/post", improvement: "+744%" },
            ],
          },
        ]}
        title="Social Media Case Studies"
        subtitle="How we transform social presence into business growth"
      />

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our Social Media Management Services"
        faqs={faqs}
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Social Media?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's grow your social presence together.",
        }}
      />

      {/* Blog Section */}
      <BlogSection
        posts={generalBlogPosts.slice(0, 3)}
        title="Social Media Marketing Insights"
        subtitle="Expert strategies to grow your local business through social media"
        showViewAll={true}
        viewAllLink="/blog"
      />

      {/* CTA Section */}
      <CardCTA
        title="Ready to Elevate Your Professional Brand?"
        description="Get a free 30-minute strategy session, complimentary social media audit ($500 value), and local competitor analysis report."
      />
      <ConsultationFormSection />

      <Footer />
    </div>
  );
};

export default SocialMedia;
