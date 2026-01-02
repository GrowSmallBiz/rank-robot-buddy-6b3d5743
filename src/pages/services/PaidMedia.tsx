import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { PlatformAdvantagesSection } from "@/components/sections/PlatformAdvantages";
import { BlogSection, generalBlogPosts } from "@/components/sections/BlogSection";
import { 
  ArrowRight, 
  Target, 
  DollarSign, 
  TrendingUp, 
  Users, 
  BarChart3, 
  RefreshCw,
  Play,
  Search,
  ShieldCheck,
  Zap,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";

const faqs: FAQItem[] = [
  {
    question: "What's the difference between Google PPC and Google LSA?",
    answer: "Google PPC (Pay-Per-Click) ads appear at the top of search results and charge per click. Google LSA (Local Service Ads) appear above PPC ads with a 'Google Guaranteed' badge and charge per lead, not per click. LSAs are ideal for service-based local businesses like plumbers, electricians, and lawyers."
  },
  {
    question: "Which platform is best for my local business?",
    answer: "It depends on your industry and target audience. Google Ads works well for high-intent searches. Meta (Facebook/Instagram) excels at visual services and retargeting. TikTok is great for younger demographics. YouTube reaches users during research phase. We recommend starting with Google + Meta for most local businesses."
  },
  {
    question: "How much should I budget for paid advertising?",
    answer: "We recommend starting with $1,500-3,000/month for most local businesses. This allows enough data collection to optimize campaigns effectively. Your actual budget depends on your market competition, service value, and growth goals."
  },
  {
    question: "How quickly will I see results from paid ads?",
    answer: "Unlike SEO, paid ads can generate leads immediately once campaigns launch. However, optimization takes 2-4 weeks as we gather data and refine targeting. Most clients see their best ROI after 60-90 days of continuous optimization."
  },
  {
    question: "Do you integrate paid media with SEO strategy?",
    answer: "Absolutely! We use SEO traffic data to build retargeting audiences, reducing ad costs by 60-70%. We also use paid ads to test keywords before investing in organic SEO, and both strategies share conversion tracking and analytics."
  },
  {
    question: "What's included in your paid media management?",
    answer: "Our service includes campaign strategy, ad creative development, audience targeting, bid management, A/B testing, conversion tracking setup, landing page recommendations, monthly reporting, and ongoing optimization. We handle everything from setup to scaling."
  },
  {
    question: "How do you measure paid advertising success?",
    answer: "We track cost per lead (CPL), cost per acquisition (CPA), return on ad spend (ROAS), conversion rates, and lead quality. We set up proper conversion tracking and provide transparent reporting so you know exactly what your ad spend generates."
  },
  {
    question: "Can I run ads myself or do I need professional management?",
    answer: "You can run ads yourself, but professional management typically improves ROI significantly. We leverage advanced strategies, continuous testing, and years of experience to reduce wasted spend and maximize conversions that DIY advertisers often miss."
  },
];

const platforms = [
  {
    name: "Google PPC",
    description: "Capture high-intent customers actively searching for your services with Search, Display, and Shopping campaigns.",
    icon: Search,
    features: ["Search Ads", "Display Network", "Shopping Campaigns", "Performance Max"],
    bestFor: "High-intent leads ready to buy",
  },
  {
    name: "Google LSA",
    description: "Dominate local search with Google Guaranteed badge and pay only for qualified leads, not clicks.",
    icon: ShieldCheck,
    features: ["Google Guaranteed", "Pay Per Lead", "Top Placement", "Review Integration"],
    bestFor: "Local service businesses",
  },
  {
    name: "Meta Ads",
    description: "Reach and retarget your ideal customers on Facebook and Instagram with precision targeting.",
    icon: Users,
    features: ["Facebook Ads", "Instagram Ads", "Retargeting", "Lookalike Audiences"],
    bestFor: "Visual services & retargeting",
  },
  {
    name: "TikTok Ads",
    description: "Engage younger demographics and showcase your brand personality with short-form video ads.",
    icon: Play,
    features: ["In-Feed Ads", "Spark Ads", "TopView", "Brand Effects"],
    bestFor: "Younger audiences & brand awareness",
  },
  {
    name: "YouTube Ads",
    description: "Build brand awareness and trust with video ads that reach customers during their research phase.",
    icon: Play,
    features: ["Skippable Ads", "Non-Skippable", "Bumper Ads", "Discovery Ads"],
    bestFor: "Brand building & education",
  },
  {
    name: "Microsoft Ads",
    description: "Reach the often-overlooked Bing audience with lower competition and cost-per-click.",
    icon: Search,
    features: ["Bing Search", "LinkedIn Targeting", "Lower CPCs", "Import from Google"],
    bestFor: "B2B & professional services",
  },
];

const benefits = [
  {
    title: "Immediate Visibility",
    description: "Start generating leads today, not months from now. Paid ads put your business in front of customers instantly.",
    icon: Zap,
  },
  {
    title: "Precise Targeting",
    description: "Reach exactly who you want—by location, demographics, interests, behaviors, and even past website visitors.",
    icon: Target,
  },
  {
    title: "Measurable ROI",
    description: "Track every dollar spent and every lead generated. Know exactly what your advertising investment returns.",
    icon: BarChart3,
  },
  {
    title: "Cost-Effective Retargeting",
    description: "Re-engage website visitors for 60-70% less than cold advertising. Turn browsers into buyers.",
    icon: RefreshCw,
  },
  {
    title: "Scalable Growth",
    description: "Once we find what works, scale your budget to grow your business predictably and profitably.",
    icon: TrendingUp,
  },
  {
    title: "Full Visibility",
    description: "Transparent reporting and access to your accounts. You own everything, always.",
    icon: Eye,
  },
];

const comparisonData = [
  { metric: "Time to Results", cold: "Immediate", retargeting: "Immediate", seo: "3-6 months" },
  { metric: "Cost Per Lead", cold: "$50-150", retargeting: "$15-40", seo: "$0/visit" },
  { metric: "Audience Quality", cold: "Variable", retargeting: "High (warm)", seo: "High (intent)" },
  { metric: "Scale Potential", cold: "Unlimited", retargeting: "Limited to traffic", seo: "Organic growth" },
];

const PaidMedia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Target className="w-4 h-4" />
                Paid Media & Advertising
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100">
              Turn Ad Spend Into{" "}
              <span className="text-gradient">Predictable Revenue</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up delay-200">
              Strategic paid advertising across Google, Meta, TikTok, and YouTube 
              that generates qualified leads while maximizing every dollar of your ad budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Link to="/free-assessment">
                <Button variant="hero" size="xl">
                  Get Free Ad Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-up delay-400">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-gradient">60-70%</p>
                <p className="text-sm text-muted-foreground">Lower Retargeting Costs</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-gradient">3-5x</p>
                <p className="text-sm text-muted-foreground">Average ROAS</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-gradient">24hrs</p>
                <p className="text-sm text-muted-foreground">To First Leads</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Paid Media Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">The Power of Paid Advertising</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Why Invest in Paid Media?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              While SEO builds long-term organic visibility, paid advertising delivers 
              immediate results and precise targeting. The smartest businesses use both 
              together for maximum impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-6 space-y-4 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
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
            <p className="text-primary font-medium mb-4">Advertising Platforms</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Multi-Platform Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We manage campaigns across all major advertising platforms, choosing the 
              right mix for your business goals and target audience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 space-y-4 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <platform.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {platform.name}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {platform.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {platform.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-primary font-medium">
                  Best for: {platform.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <p className="text-primary font-medium mb-4">Cost Comparison</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Why Retargeting + SEO Wins
              </h2>
              <p className="text-muted-foreground">
                The smartest ad strategy combines SEO traffic with retargeting for maximum ROI.
              </p>
            </div>

            <div className="overflow-x-auto animate-fade-up delay-100">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-foreground font-semibold">Metric</th>
                    <th className="text-center py-4 px-4 text-foreground font-semibold">Cold Ads</th>
                    <th className="text-center py-4 px-4 text-foreground font-semibold bg-primary/10 rounded-t-lg">Retargeting</th>
                    <th className="text-center py-4 px-4 text-foreground font-semibold">SEO Only</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-4 px-4 text-muted-foreground">{row.metric}</td>
                      <td className="py-4 px-4 text-center text-foreground">{row.cold}</td>
                      <td className="py-4 px-4 text-center text-primary font-semibold bg-primary/5">
                        {row.retargeting}
                      </td>
                      <td className="py-4 px-4 text-center text-foreground">{row.seo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20 animate-fade-up delay-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">The Full-Funnel Advantage</p>
                  <p className="text-sm text-muted-foreground">
                    Combine SEO (free traffic) with retargeting (lower costs) to create a 
                    sustainable marketing engine that reduces your overall cost per acquisition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Recommendations */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Industry-Specific Strategy</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Platform Recommendations by Industry
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { industry: "HVAC, Plumbing & Electrical", platforms: "Google LSA + Google PPC + Display Retargeting" },
              { industry: "Med Spas & Aesthetics", platforms: "Meta (Instagram) + Google PPC + TikTok" },
              { industry: "Dental Practices", platforms: "Google LSA + Meta + YouTube" },
              { industry: "Chiropractors", platforms: "Google PPC + Meta Retargeting + YouTube" },
              { industry: "Auto Repair", platforms: "Google LSA + Google PPC + Display Retargeting" },
              { industry: "Photographers", platforms: "Meta (Instagram) + Pinterest + TikTok" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="font-semibold text-foreground mb-2">{item.industry}</p>
                <p className="text-sm text-primary">{item.platforms}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Advantages - using local since paid media complements local SEO */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 animate-fade-up">
            <p className="text-primary font-medium mb-2">Full-Funnel Marketing</p>
            <h3 className="text-2xl font-display font-bold text-foreground">
              Best When Combined with SEO
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex gap-4 bg-background border border-border rounded-xl p-6 animate-fade-up">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">
                  SEO Builds Retargeting Audiences
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Free organic traffic creates warm audiences you can retarget with ads at 60-70% lower cost than cold advertising.
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-background border border-border rounded-xl p-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">
                  Ads Test Keywords for SEO
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Use paid ads to quickly test which keywords convert before investing in long-term organic optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        subtitle="Common questions about paid advertising and media management"
      />

      <BlogSection 
        posts={generalBlogPosts}
        title="Paid Media Insights"
        subtitle="Expert tips for maximizing your advertising ROI"
        showViewAll={false}
      />

      <CTASection />
      <Footer />
    </div>
  );
};

export default PaidMedia;
