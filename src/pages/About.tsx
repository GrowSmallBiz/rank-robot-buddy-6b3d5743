import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { AnimatedStatsSection } from "@/components/sections/AnimatedStatsSection";
import { ArrowRight, Target, Users, Zap, Award, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    title: "Results-Driven",
    description: "We measure success by your growth, not vanity metrics. Every strategy is designed to drive real business outcomes.",
    icon: TrendingUp,
  },
  {
    title: "Transparency First",
    description: "No black boxes or hidden tactics. We explain exactly what we do, why we do it, and how it impacts your business.",
    icon: Shield,
  },
  {
    title: "Local Expertise",
    description: "We specialize in helping small and medium local businesses compete with larger competitors in their markets.",
    icon: Target,
  },
  {
    title: "AI-Forward Approach",
    description: "We stay ahead of the curve, integrating AI tools and optimizing for AI platforms before they become mainstream.",
    icon: Zap,
  },
];

const stats = [
  { value: "150+", label: "Local Businesses Served" },
  { value: "3.2x", label: "Average Traffic Increase" },
  { value: "85%", label: "Client Retention Rate" },
  { value: "5+", label: "Years of Experience" },
];

const About = () => {
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
                <Users className="w-4 h-4" />
                About GrowSmallBiz
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100">
              Helping Local Businesses{" "}
              <span className="text-gradient">Dominate Online</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up delay-200">
              We're a team of SEO specialists, AI strategists, and digital marketers 
              dedicated to helping small and medium local businesses compete and win 
              in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      <AnimatedStatsSection stats={stats} columns={4} />

      {/* Our Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-up">
              <p className="text-primary font-medium">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Born from a Simple Belief
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  GrowSmallBiz was founded on a simple belief: local businesses deserve 
                  the same caliber of digital marketing that enterprise companies enjoy, 
                  without the enterprise price tag.
                </p>
                <p>
                  We saw too many local businesses struggling to compete online—not because 
                  they lacked quality products or services, but because they couldn't 
                  navigate the complex world of SEO, AI optimization, and digital advertising.
                </p>
                <p>
                  Today, we've helped over 150 local businesses across industries like 
                  HVAC, dental, med spas, and more to establish dominant online presences. 
                  Our approach combines proven SEO strategies with cutting-edge AI optimization 
                  to ensure our clients stay ahead of the curve.
                </p>
              </div>
            </div>

            <div className="relative animate-fade-up delay-200">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-border">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Mission</p>
                      <p className="text-sm text-muted-foreground">What drives us every day</p>
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    "To democratize digital marketing excellence, ensuring every local 
                    business can achieve online visibility and growth regardless of size 
                    or budget."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make and every strategy we implement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-6 space-y-4 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <p className="text-primary font-medium mb-4">Why GrowSmallBiz?</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Built Different for Local Success
              </h2>
            </div>

            <div className="space-y-6 animate-fade-up delay-100">
              <div className="bg-card border border-border rounded-xl p-6 flex gap-6 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Local-First Strategy
                  </h3>
                  <p className="text-muted-foreground">
                    We understand the nuances of local search, Google Business Profile optimization, 
                    and geo-targeted campaigns that drive foot traffic and local leads.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 flex gap-6 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    AI-Ready Optimization
                  </h3>
                  <p className="text-muted-foreground">
                    We prepare your business for the AI era with Answer Engine Optimization (AEO) 
                    and Generative Engine Optimization (GEO), ensuring you're visible on ChatGPT, 
                    Google AI, and other AI platforms.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 flex gap-6 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Full-Funnel Integration
                  </h3>
                  <p className="text-muted-foreground">
                    We don't just drive traffic—we combine SEO with retargeting and paid media 
                    strategies to maximize conversions and reduce your cost per lead.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 animate-fade-up delay-200">
              <Link to="/free-assessment">
                <Button variant="hero" size="xl">
                  Get Your Free SEO Assessment
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
