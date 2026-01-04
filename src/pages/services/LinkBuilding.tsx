import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { baseContactCTA } from "@/config/contactCTA";
import { PlatformAdvantagesSection } from "@/components/sections/PlatformAdvantages";
import { BlogSection, linkBuildingBlogPosts } from "@/components/sections/BlogSection";
import { ArrowRight, Link2, Search, Megaphone, Users, FileText, BarChart3, Shield } from "lucide-react";
import linkBuildingImage from "@/assets/link-building.png";

const faqs: FAQItem[] = [
  {
    question: "What is enterprise link building?",
    answer: "Enterprise link building focuses on acquiring authoritative, editorially earned backlinks for large and complex websites. It strengthens domain authority, builds brand trust, and improves search visibility across national and global markets."
  },
  {
    question: "Why is link building important for my business?",
    answer: "High-quality backlinks remain one of the strongest ranking signals in search algorithms. Search engines use them to verify credibility and authority, especially for websites competing in saturated, high-stakes categories."
  },
  {
    question: "How is link building different from on-page SEO?",
    answer: "On-page SEO enhances your content quality and technical structure. Link building elevates your off-site authority by earning trusted endorsements from reputable publishers, industry sites, and media outlets."
  },
  {
    question: "What types of links do you build?",
    answer: "We focus exclusively on editorial, contextual backlinks from authoritative, brand-safe domains. We never use private blog networks (PBNs), link farms, or high-risk link schemes that could harm your site."
  },
  {
    question: "Do I need link building if I already publish quality content?",
    answer: "Yes. Content alone rarely ranks in competitive markets. Link building provides the external validation and authority your content needs to win top positions and maintain visibility against competitors."
  },
  {
    question: "Can you help remove toxic backlinks?",
    answer: "Absolutely. We identify toxic or risky backlinks in your profile, manage disavow files, and help protect your site from harmful link signals that could trigger penalties."
  },
  {
    question: "How do you measure link building success?",
    answer: "We track referring domains, domain authority metrics, organic visibility improvements, competitive share of voice, referral traffic, and conversions driven by off-site placements."
  },
  {
    question: "Do you follow Google's link building guidelines?",
    answer: "Yes. We exclusively use white-hat outreach and digital PR strategies aligned with Google's webmaster guidelines for safe, sustainable, long-term growth without penalty risk."
  },
];

const features = [
  {
    title: "Backlink Audits & Link Detox",
    description: "Comprehensive analysis of your backlink profile to identify toxic links and disavow harmful domains.",
    icon: Shield,
  },
  {
    title: "High-Quality Link Building",
    description: "Strategic acquisition of authoritative, relevant backlinks that boost domain authority.",
    icon: Link2,
  },
  {
    title: "Digital PR & Media Outreach",
    description: "Earn editorial mentions and links from trusted publications through strategic PR campaigns.",
    icon: Megaphone,
  },
  {
    title: "Thought Leadership & Guest Posting",
    description: "Position your brand as an industry authority through expert content on high-authority sites.",
    icon: Users,
  },
  {
    title: "Content Promotion & Syndication",
    description: "Amplify your best content to earn natural backlinks and brand mentions across the web.",
    icon: FileText,
  },
  {
    title: "Competitor Link Gap Reports",
    description: "Identify linking opportunities your competitors have that you're missing out on.",
    icon: Search,
  },
  {
    title: "Performance Tracking & Reporting",
    description: "Transparent reporting on link acquisition, domain authority growth, and ranking improvements.",
    icon: BarChart3,
  },
];

const LinkBuilding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="animate-fade-up">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                  <Link2 className="w-4 h-4" />
                  Link Building Services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100">
                Build Authority.{" "}
                <span className="text-gradient">Scale Rankings.</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-up delay-200">
                Scale your brand's visibility with enterprise-grade link building. We 
                secure high-quality, brand-safe backlinks, increase authoritative mentions, 
                and strengthen your online presence across the web.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
                <Button variant="hero" size="xl">
                  Start Building Authority
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-in-right delay-200">
              <div className="relative rounded-2xl overflow-hidden glow-border">
                <img
                  src={linkBuildingImage}
                  alt="Link building network connections visualization"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Link Building Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Why Link Building</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Backlinks Remain a Top Ranking Factor
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Quality backlinks signal to search engines that your content is valuable 
              and trustworthy. Our strategic approach to link building focuses on earning 
              links that matter — from relevant, authoritative sources that drive both 
              rankings and referral traffic.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: "#1", label: "Backlinks are the #1 ranking factor" },
              { value: "91%", label: "of pages get no organic traffic due to lack of backlinks" },
              { value: "3.8x", label: "more organic traffic for pages with backlinks" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-secondary/50 border border-border rounded-xl animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-3xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Comprehensive Link Building Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="ghl-card rounded-xl p-8 space-y-4 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="ghl-icon">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PlatformAdvantagesSection variant="compact" serviceType="linkbuilding" />

      <FAQSection
        faqs={faqs}
        subtitle="Learn about our link building approach and how it drives results."
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Link Building?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's build your authority together.",
        }}
      />

      {/* Blog Section */}
      <BlogSection 
        posts={linkBuildingBlogPosts}
        title="Link Building Insights"
        subtitle="Expert tips to build authority and scale rankings"
        showViewAll={false}
      />

      <CTASection />
      <Footer />
    </div>
  );
};

export default LinkBuilding;
