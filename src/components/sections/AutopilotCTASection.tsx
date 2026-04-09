import { Button } from "@/components/ui/button";
import { MessageSquare, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const AutopilotCTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-up">
          See How Your Sales Can Run on{" "}
          <span className="text-primary">Autopilot</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Experience how AI instantly responds to leads, books appointments for you, follows up automatically, and keeps your pipeline moving 24/7.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <Button size="lg" asChild>
            <a href="https://lp.growsmallbiz.io/ai-client-growth-system" target="_blank" rel="noopener noreferrer">
              Sign Up
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://lp.growsmallbiz.io/digital-growth-strategy-session" target="_blank" rel="noopener noreferrer">
              Schedule Strategy Call
            </a>
          </Button>
        </div>
        <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <span className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-primary" />
            24/7 Live Chat Support
          </span>
          <span className="flex items-center gap-2">
            <XCircle className="w-4 h-4 text-primary" />
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
};
