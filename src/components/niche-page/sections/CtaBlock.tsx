import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { baseContactCTA } from "@/config/contactCTA";

interface CtaBlockProps {
  headline: string;
  subtext: string;
  strategySessionUrl: string;
}

export const CtaBlock = ({ headline, subtext, strategySessionUrl }: CtaBlockProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-card/80 backdrop-blur-sm border-2 border-primary/50 rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/70 group">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Photo */}
          <div className="flex-shrink-0 text-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg group-hover:border-primary/50 transition-all duration-300">
              <img
                src={baseContactCTA.image}
                alt={baseContactCTA.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="mt-4 text-lg font-display font-semibold text-foreground">{baseContactCTA.name}</h4>
            <p className="text-sm text-muted-foreground">{baseContactCTA.role}</p>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              {headline}
            </h2>
            <p className="text-xl text-muted-foreground mb-6">{subtext}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button variant="hero" size="xl" asChild>
                <a href={strategySessionUrl}>
                  Schedule Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-muted-foreground/30 hover:bg-muted/50 transition-all duration-300"
              >
                <a href="tel:+19258863724" className="inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call +1 (925) 886-3724
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
