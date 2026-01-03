import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { 
  ArrowRight, 
  Star,
  Shield,
  MessageSquare,
  TrendingUp,
  Zap,
  Eye,
  Users,
  BarChart3,
  CheckCircle2,
  Clock,
  Bot,
  Bell,
  ThumbsUp,
  Search
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// FAQs from source content
const faqs: FAQItem[] = [
  {
    question: "How does AI-powered reputation management work for small businesses?",
    answer: "AI-powered reputation management automatically monitors your online reviews across Google, Facebook, Yelp, and 50+ platforms. When customers leave reviews, our AI instantly crafts personalized responses that maintain your professional image. The system also automatically requests reviews from happy customers, helping you build a stronger online presence without any manual effort."
  },
  {
    question: "How quickly will I see more Google reviews for my business?",
    answer: "Most businesses start seeing increased review volume within the first 2-4 weeks as the automated review request system begins reaching out to customers. The steady growth continues as more satisfied customers receive timely review requests, typically resulting in 2-5x more reviews within the first 90 days."
  },
  {
    question: "What makes AI review responses better than manual responses?",
    answer: "AI responses are faster, consistent, and never miss a review. Our AI responds within minutes 24/7, uses your brand voice, and handles both positive and negative reviews professionally. Unlike manual responses that can be delayed or inconsistent, AI ensures every customer feels heard while protecting your reputation around the clock."
  },
  {
    question: "Can this help my business rank higher in local Google searches?",
    answer: "Yes, absolutely. More positive Google reviews directly improve your local search rankings. Google's algorithm heavily weights review quantity, quality, and recency when determining local search results. Businesses using our system typically see improved local rankings within 30-60 days as their review count and rating increase."
  },
  {
    question: "What happens when I get a negative review?",
    answer: "Our AI immediately alerts you to negative reviews and suggests professional response strategies. The AI can craft diplomatic responses that show you care about customer concerns while protecting your reputation. For serious issues, you'll get instant notifications so you can personally address problems before they escalate."
  },
  {
    question: "Do I need technical skills to use this reputation management system?",
    answer: "No technical skills required. The entire system runs automatically after a simple 15-minute setup. You'll get a dashboard to monitor everything, but the AI handles review requests, responses, and monitoring without any ongoing work from you. It's designed specifically for busy small business owners."
  },
  {
    question: "Which review sites does your system monitor and manage?",
    answer: "We monitor Google My Business, Facebook, Yelp, Better Business Bureau, industry-specific sites, and over 50 major review platforms. The system prioritizes Google reviews since they have the biggest impact on local search, but ensures you never miss feedback from any important source."
  },
  {
    question: "How much does AI-powered reputation management cost?",
    answer: "Pricing varies based on your business size and needs. Most small businesses invest between $297-497 per month, which typically pays for itself through just 1-2 additional customers per month. Book a free consultation to get exact pricing for your specific situation and see ROI projections."
  },
  {
    question: "Can I see examples of the AI responses before they go live?",
    answer: "Yes, you have full control. You can review and approve AI responses before they're posted, or set the system to auto-respond for routine positive reviews while flagging complex situations for your approval. The AI learns your preferences and brand voice over time."
  },
  {
    question: "How long does it take to set up automated reputation management?",
    answer: "Initial setup takes about 15 minutes to connect your Google Business Profile and other review accounts. The AI starts monitoring immediately, and you'll see your first automated review requests go out within 24 hours. Full optimization typically happens within the first week as the system learns your customer patterns."
  },
];

const highlights = [
  "Send Review Requests on Auto Pilot To Your Customers Without Lifting a Finger",
  "Workflow Automation Sends Reminder via Email & SMS For Pending Reviews",
  "Let AI Automation Handle Review Replies",
  "Control Your Online Reputation",
  "Build Trust Signals",
  "Increase Local SEO Rankings",
  "Get Found By More Prospects",
  "Generate More Leads",
  "Drive More Sales",
  "Dominate Your Local Market",
];

const features = [
  {
    title: "Direct Google Reviews",
    description: "Skip the hassle of review sites that don't matter. Our direct Google integration ensures every review lands exactly where local customers look first – your Google Business Profile.",
    icon: Star,
  },
  {
    title: "Complete Autopilot Collection",
    description: "Your system automatically reaches out to happy customers and guides them to leave reviews on Google. No manual work, no awkward conversations, just steady review growth every month.",
    icon: Zap,
  },
  {
    title: "AI-Powered Review Response",
    description: "Your AI assistant crafts professional, personalized responses to every review within minutes. Happy customers feel appreciated, upset customers get addressed before problems escalate.",
    icon: Bot,
  },
  {
    title: "Review Monitoring Dashboard",
    description: "Track every mention of your business. Monitor Google, Facebook, Yelp and 50+ review sites from one dashboard. Catch negative reviews early and never miss an opportunity to engage.",
    icon: Eye,
  },
];

const benefits = [
  {
    title: "Own Your Local Market",
    description: "When locals search for your services, make sure you're the obvious choice with hundreds of authentic customer reviews.",
    icon: TrendingUp,
  },
  {
    title: "Turn Customers Into Marketing",
    description: "Automatically collect reviews, respond instantly with AI, and watch your local rankings soar while you focus on your business.",
    icon: Users,
  },
  {
    title: "Protect Your Reputation 24/7",
    description: "AI monitors and responds to reviews around the clock, ensuring your business maintains a professional image at all times.",
    icon: Shield,
  },
  {
    title: "Increase Local SEO Rankings",
    description: "More positive reviews directly improve your local search rankings, bringing in more organic traffic and leads.",
    icon: Search,
  },
  {
    title: "Build Trust & Credibility",
    description: "A strong review profile builds instant trust with potential customers, making them more likely to choose you over competitors.",
    icon: ThumbsUp,
  },
  {
    title: "Real-Time Alerts",
    description: "Get instant notifications for new reviews so you can celebrate wins and address concerns before they become problems.",
    icon: Bell,
  },
];

const stats = [
  { value: "50+", label: "Review Platforms Monitored" },
  { value: "24/7", label: "AI Response Coverage" },
  { value: "15min", label: "Setup Time" },
  { value: "2-5x", label: "More Reviews in 90 Days" },
];

const ReputationManagement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI-Powered Reputation Management | Automated Review Collection & Response | GrowSmallBiz</title>
        <meta name="description" content="Automate your online reputation with AI-powered review collection, instant responses, and monitoring across 50+ platforms. Build trust, increase local SEO rankings, and dominate your local market." />
        <meta name="keywords" content="reputation management, online reviews, Google reviews, AI review response, review automation, local SEO, review monitoring, customer feedback" />
        <link rel="canonical" href="https://growsmallbiz.io/services/reputation-management" />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Star className="w-4 h-4" />
                AI-Powered Reputation Management
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100">
              Reputation Management{" "}
              <span className="text-gradient">Automation Powered by AI</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up delay-200">
              Turn every happy customer into your best marketing tool. Automatically collect reviews, 
              respond instantly with AI, and watch your local rankings soar—all on autopilot.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Link to="/free-assessment">
                <Button variant="hero" size="xl">
                  Get My Reputation System
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 animate-fade-up delay-400">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl md:text-3xl font-display font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System Highlights */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">System Automation Highlights</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Everything Runs on Autopilot
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-background border border-border rounded-xl hover:border-primary/50 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Win More Local Business */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Win More Local Business</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Own Your Local Market with Reviews
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When locals search for your services, make sure you're the obvious choice. 
              Get hundreds of authentic customer reviews that put you ahead of every competitor in your area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-6 space-y-4 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/50 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <benefit.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
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

      {/* Core Features */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Core Features</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Your Complete Review Automation System
            </h2>
            <p className="text-lg text-muted-foreground">
              From collection to response to monitoring—everything is handled automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-background border border-border rounded-2xl p-8 space-y-6 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/50 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Experience Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <p className="text-primary font-medium">Customer Experience That Drives Revenue</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              A Complete Local Marketing Solution Built for Small Business Success
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              This isn't just review software – it's your unfair advantage in the local market. 
              AI-powered responses keep customers happy, automatic collection builds your reputation, 
              and higher rankings bring more customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/free-assessment">
                <Button variant="hero" size="xl">
                  Get My Reputation System
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Reputation Management FAQs"
        subtitle="Everything you need to know about our AI-powered reputation management system"
        faqs={faqs}
        schemaType="FAQPage"
      />

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default ReputationManagement;
