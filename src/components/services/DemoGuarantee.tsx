import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

export const DemoGuarantee = () => (
  <section className="py-16" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <h2 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight mb-6">
        "No Risk <span className="text-accent">Guarantee</span>"
      </h2>
      <h3 className="text-xl font-semibold text-foreground mb-6">The Choice Is Yours</h3>

      <div className="bg-card border border-border rounded-xl p-8 mb-8">
        <p className="text-muted-foreground leading-relaxed">
          Start today and get a 30 day <strong className="text-foreground">money back guarantee.</strong> If, for any reason, you're not 100% satisfied with your License within 30 days of your purchase, simply reach out to Member Support, and we'll gladly issue you a full refund for your monthly subscription. <strong className="text-foreground">No questions asked.</strong>
        </p>
        <p className="text-sm text-muted-foreground mt-4 italic">
          *Memberships are month to month, no contracts!
        </p>
      </div>

      <Button
        size="lg"
        className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 h-auto"
        asChild
      >
        <Link to="/services/marketing-automation-for-small-business#ready-to-talk">
          <Shield className="w-5 h-5 mr-2" />
          100% SATISFACTION GUARANTEE
        </Link>
      </Button>
    </div>
  </section>
);
