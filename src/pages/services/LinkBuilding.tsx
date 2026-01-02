import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, Link2, Search, Megaphone, Users, FileText, BarChart3, Shield } from "lucide-react";
import linkBuildingImage from "@/assets/link-building.png";

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
                className="bg-card border border-border rounded-xl p-8 space-y-4 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
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

      <CTASection />
      <Footer />
    </div>
  );
};

export default LinkBuilding;
