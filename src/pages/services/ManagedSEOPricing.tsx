import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Head } from "vite-react-ssg";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GlowCard } from "@/components/ui/glow-card";
import { 
  CheckCircle, 
  XCircle, 
  Globe, 
  Search, 
  FileText, 
  Link2, 
  Users, 
  Zap,
  Megaphone,
  ArrowRight,
  Star,
  Shield
} from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

// Types for feature items
interface FeatureItem {
  name: string;
  frequency: string;
  starter: string | boolean;
  growth: string | boolean;
  authority: string | boolean;
}

interface FeatureCategory {
  category: string;
  icon: React.ReactNode;
  color: string;
  features: FeatureItem[];
}

// Feature data based on the table
const pricingFeatures: FeatureCategory[] = [
  {
    category: "Starter Website",
    icon: <Globe className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-500",
    features: [
      { name: "Header graphic, Home page graphics, sidebar graphics and internal page elements", frequency: "One-time", starter: true, growth: false, authority: false },
      { name: "Up to 5-10 Pages (Home, Service Pages, City Pages, About, Contact, Blog Setup)", frequency: "One-time", starter: true, growth: false, authority: false },
    ]
  },
  {
    category: "Authority Website",
    icon: <Shield className="w-5 h-5" />,
    color: "from-purple-500 to-pink-500",
    features: [
      { name: "Header graphic, Home page graphics, sidebar graphics and internal page elements", frequency: "One-time", starter: false, growth: true, authority: true },
      { name: "Total 25 pages (with 5 pages)", frequency: "One-time", starter: false, growth: true, authority: true },
    ]
  },
  {
    category: "Local SEO",
    icon: <Search className="w-5 h-5" />,
    color: "from-orange-500 to-amber-500",
    features: [
      { name: "Audit and optimize the GBP to ensure all core business information is accurate", frequency: "One-time", starter: true, growth: true, authority: true },
      { name: "Demonstrate engagement with your audience and send signals to Google", frequency: "Monthly", starter: "2/mo", growth: "4/mo", authority: "8/mo" },
      { name: "Build a series of questions and answers about the company and services", frequency: "Monthly", starter: "2/mo", growth: "4/mo", authority: "8/mo" },
      { name: "Monitor and manage all GBP reviews", frequency: "Monthly", starter: "As needed", growth: "As needed", authority: "As needed" },
    ]
  },
  {
    category: "Technical & On-Page SEO",
    icon: <FileText className="w-5 h-5" />,
    color: "from-green-500 to-emerald-500",
    features: [
      { name: "Optimize title tags, meta descriptions, meta keywords, and header", frequency: "One-time", starter: true, growth: true, authority: true },
      { name: "Add alt image texts to all images", frequency: "One-time", starter: true, growth: true, authority: true },
      { name: "Organization, NLP, and FAQ schema", frequency: "One-time", starter: true, growth: true, authority: true },
      { name: "Improve internal linking structure to funnel more equity from lower value pages to higher value pages", frequency: "One-time", starter: true, growth: true, authority: true },
      { name: "Update any missing or incorrect canonical tags. Update any outdated redirects", frequency: "One-time", starter: true, growth: true, authority: true },
      { name: "Open Graph tags, Twitter Meta Cards", frequency: "One-time", starter: false, growth: true, authority: true },
    ]
  },
  {
    category: "Content",
    icon: <FileText className="w-5 h-5" />,
    color: "from-teal-500 to-cyan-500",
    features: [
      { name: "Create a robust topical map for all primary services/keywords to expand the keyword universe and establish subject matter expertise", frequency: "Quarterly", starter: false, growth: true, authority: true },
      { name: "Target top and mid-funnel traffic with longer tailed informational keywords to build a strong pipeline of MQLs", frequency: "Monthly", starter: "2/mo", growth: "4/mo", authority: "10/mo" },
      { name: "Add NLP and LSI entities to core web pages to ensure they are robust enough to outrank the competitors", frequency: "Monthly", starter: true, growth: true, authority: true },
    ]
  },
  {
    category: "Authority Building",
    icon: <Link2 className="w-5 h-5" />,
    color: "from-indigo-500 to-violet-500",
    features: [
      { name: "Core business information added to prominent local directories to help improve local map rankings", frequency: "One-time", starter: "25 Citations", growth: "50 Citations", authority: "100+ Citations" },
      { name: "High quality backlinks from local and national news outlets. Targeting high-intent keywords, branded phrases, and sending signals to local maps", frequency: "Monthly", starter: "1 PR, 1 Channel (~15 links)", growth: "1 PR, 3 Channels (~40 links)", authority: "1 PR, All Channels (~100 links)" },
      { name: "High DA backlinks from cloud-based domains to boost site authority and improve local map rankings", frequency: "Monthly", starter: "+$50 (Addon)", growth: true, authority: true },
      { name: "Contextually relevant editorial backlinks from topically-focused domains to directly improve rankings for high intent keywords", frequency: "Monthly", starter: false, growth: true, authority: true },
    ]
  },
  {
    category: "UX Optimization",
    icon: <Users className="w-5 h-5" />,
    color: "from-rose-500 to-pink-500",
    features: [
      { name: "Review carousel, Trust Badges, Proof in Numbers", frequency: "Optional", starter: false, growth: false, authority: false },
      { name: "CTA Mapping, CTA Text, Sales messaging", frequency: "Optional", starter: false, growth: false, authority: false },
      { name: "Mobile and Desktop Speed Optimizations. Mobile friendliness", frequency: "Optional", starter: false, growth: false, authority: false },
    ]
  },
  {
    category: "Paid Media",
    icon: <Megaphone className="w-5 h-5" />,
    color: "from-red-500 to-orange-500",
    features: [
      { name: "Google Ads (Pay Per Click) - Run ads on Google Search", frequency: "Monthly", starter: false, growth: false, authority: false },
      { name: "Local Services Ads - Advertise your business on Google", frequency: "Optional", starter: false, growth: false, authority: false },
      { name: "Meta Ads (Facebook & Instagram) - Connect with people", frequency: "Optional", starter: false, growth: false, authority: false },
      { name: "TikTok Ads - Make ads that entertain and engage", frequency: "Optional", starter: false, growth: false, authority: false },
      { name: "Retargeting - Maximize ROI by targeting website visitors", frequency: "Optional", starter: false, growth: false, authority: false },
    ]
  },
];

// Component to render feature value
const FeatureValue = ({ value }: { value: string | boolean }) => {
  if (value === true) {
    return <CheckCircle className="w-5 h-5 text-primary mx-auto" />;
  }
  if (value === false) {
    return <XCircle className="w-5 h-5 text-muted-foreground/40 mx-auto" />;
  }
  return <span className="text-sm font-medium text-foreground">{value}</span>;
};

const ManagedSEOPricing = () => {
  return (
    <>
      <Head>
        <title>Managed AI SEO Service Packages | GrowSmallBiz</title>
        <meta 
          name="description" 
          content="Compare our Managed AI SEO Service packages. From Starter to Authority plans, find the right SEO solution to grow your local business online presence." 
        />
      </Head>

      <ServiceJsonLd
        serviceName="Managed AI SEO Service Packages"
        serviceType="Managed SEO"
        description="Transparent pricing for managed AI SEO services from Starter to Authority plans."
        url="/services/managed-seo-pricing"
        breadcrumbs={[
          { name: "Services", url: "/services/managed-ai-seo" },
          { name: "Managed SEO Pricing", url: "/services/managed-seo-pricing" },
        ]}
      />
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-background via-secondary/30 to-background overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6 animate-fade-up">
                Managed AI SEO Service
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Choose Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                  SEO Growth Plan
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Comprehensive AI-powered SEO packages designed to dominate local search, build authority, and drive consistent leads for your business.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {/* Starter Plan */}
              <GlowCard className="relative p-8 animate-fade-up">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold font-display text-foreground mb-2">Starter</h3>
                  <p className="text-sm text-muted-foreground">Perfect for new businesses starting their SEO journey</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-primary">Custom</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">5-10 Page Starter Website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Local SEO Foundation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Technical SEO Optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">25 Local Citations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">2 Blog Posts/Month</span>
                  </li>
                </ul>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link to="/free-assessment">Get Started</Link>
                </Button>
              </GlowCard>

              {/* Growth Plan */}
              <div className="relative bg-card border-2 border-primary rounded-2xl p-8 shadow-2xl shadow-primary/20 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" /> Most Popular
                  </span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold font-display text-foreground mb-2">Growth</h3>
                  <p className="text-sm text-muted-foreground">For businesses ready to accelerate their online presence</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-primary">Custom</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">25+ Page Authority Website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Enhanced Local SEO (4 posts/mo)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Full Technical SEO Suite</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">50 Citations + PR (~40 links)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">4 Blog Posts/Month + Topical Map</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Cloud Backlinks Included</span>
                  </li>
                </ul>
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link to="/free-assessment">Get Started</Link>
                </Button>
              </div>

              {/* Authority Plan */}
              <GlowCard className="relative p-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold font-display text-foreground mb-2">Authority</h3>
                  <p className="text-sm text-muted-foreground">Maximum visibility and market domination</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-primary">Custom</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">25+ Page Authority Website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Aggressive Local SEO (8 posts/mo)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Full Technical SEO + Social Tags</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">100+ Citations + All Channels (~100 links)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">10 Blog Posts/Month + Full Content Strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Editorial Backlinks + Guest Posts</span>
                  </li>
                </ul>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link to="/free-assessment">Get Started</Link>
                </Button>
              </GlowCard>
            </div>
          </div>
        </section>

        {/* Detailed Feature Comparison */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Detailed Feature Comparison
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See exactly what's included in each package to make an informed decision for your business.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="max-w-6xl mx-auto">
              {/* Table Header - Sticky */}
              <div className="hidden md:grid grid-cols-[2fr,1fr,1fr,1fr,1fr] gap-4 bg-card border border-border rounded-t-2xl p-6 sticky top-20 z-20">
                <div className="font-semibold text-foreground">Feature</div>
                <div className="text-center font-semibold text-muted-foreground">Frequency</div>
                <div className="text-center font-semibold text-foreground">Starter</div>
                <div className="text-center font-semibold text-primary">Growth</div>
                <div className="text-center font-semibold text-foreground">Authority</div>
              </div>

              {/* Feature Categories */}
              {pricingFeatures.map((category, catIndex) => (
                <div key={catIndex} className="mb-2 last:mb-0">
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${category.color} p-4 flex items-center gap-3 ${catIndex === 0 ? '' : 'rounded-t-xl'}`}>
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white">
                      {category.icon}
                    </div>
                    <span className="font-bold text-white text-lg">{category.category}</span>
                  </div>

                  {/* Category Features */}
                  {category.features.map((feature, featIndex) => (
                    <div 
                      key={featIndex}
                      className={`grid grid-cols-1 md:grid-cols-[2fr,1fr,1fr,1fr,1fr] gap-4 bg-card border-x border-b border-border p-4 md:p-6 ${
                        featIndex === category.features.length - 1 ? 'rounded-b-xl mb-4' : ''
                      }`}
                    >
                      <div className="text-foreground text-sm md:text-base">{feature.name}</div>
                      <div className="text-center text-muted-foreground text-sm hidden md:block">{feature.frequency}</div>
                      
                      {/* Mobile Labels */}
                      <div className="md:hidden grid grid-cols-3 gap-2 text-center text-xs text-muted-foreground mt-2">
                        <span>Starter</span>
                        <span>Growth</span>
                        <span>Authority</span>
                      </div>
                      
                      {/* Values */}
                      <div className="md:hidden grid grid-cols-3 gap-2 text-center">
                        <FeatureValue value={feature.starter} />
                        <FeatureValue value={feature.growth} />
                        <FeatureValue value={feature.authority} />
                      </div>
                      <div className="hidden md:flex items-center justify-center">
                        <FeatureValue value={feature.starter} />
                      </div>
                      <div className="hidden md:flex items-center justify-center">
                        <FeatureValue value={feature.growth} />
                      </div>
                      <div className="hidden md:flex items-center justify-center">
                        <FeatureValue value={feature.authority} />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Add-ons Note */}
            <div className="max-w-4xl mx-auto mt-12 text-center">
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold font-display">Optional Add-Ons Available</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  UX Optimization and Paid Media services are available as add-ons for any package. 
                  Contact us to customize your perfect SEO solution.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/free-assessment" className="inline-flex items-center gap-2">
                    Get Custom Quote <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default ManagedSEOPricing;
