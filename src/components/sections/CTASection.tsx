import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 hero-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground animate-fade-up">
            Ready to Dominate{" "}
            <span className="text-gradient">Search Rankings?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up delay-100">
            Get a comprehensive AI-powered SEO audit and discover untapped opportunities 
            to grow your organic traffic. No obligations, just actionable insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-200">
            <Button variant="hero" size="xl">
              Get Your Free Audit
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Schedule a Call
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground animate-fade-up delay-300">
            ✓ Free consultation  ✓ Custom strategy  ✓ No commitment required
          </p>
        </div>
      </div>
    </section>
  );
};
