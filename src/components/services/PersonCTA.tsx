import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { baseContactCTA } from "@/config/contactCTA";

interface PersonCTAProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  /** Show animated gradient ring around photo */
  animated?: boolean;
  /** Show urgency micro-copy */
  showUrgency?: boolean;
  /** Custom urgency text */
  urgencyText?: string;
  /** Custom background section class */
  sectionClassName?: string;
}

export const PersonCTA = ({
  title,
  description,
  buttonText = baseContactCTA.buttonText,
  buttonHref = baseContactCTA.buttonHref,
  animated = true,
  showUrgency = true,
  urgencyText = "Takes 2 mins to schedule",
  sectionClassName = "py-12",
}: PersonCTAProps) => {
  return (
    <section className={sectionClassName}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-primary rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/30 animate-fade-up">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            {/* Left: Photo + Name */}
            <div className="flex-shrink-0 text-center md:pl-4">
              {animated ? (
                <>
                  {/* Animated Gradient Ring */}
                  <div className="relative inline-block">
                    {/* Spinning gradient ring */}
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground animate-ring-spin opacity-80" />
                    {/* Pulsing glow */}
                    <div className="absolute -inset-4 rounded-full bg-primary-foreground/20 blur-xl animate-pulse-glow" />
                    {/* Photo container */}
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-primary-foreground/40 to-accent/40">
                      <img
                        src={baseContactCTA.image}
                        alt={baseContactCTA.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="relative inline-block">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-foreground/30 to-primary-foreground/10 blur-sm scale-110" />
                  <img
                    src={baseContactCTA.image}
                    alt={baseContactCTA.name}
                    className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary-foreground/30"
                  />
                </div>
              )}
              <h3 className="mt-5 text-lg font-display font-semibold text-primary-foreground">
                {baseContactCTA.name}
              </h3>
              <p className="text-sm text-primary-foreground/70">{baseContactCTA.role}</p>
            </div>

            {/* Right: CTA Content */}
            <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
              <h2 className="text-2xl md:text-4xl font-display font-bold text-primary-foreground mb-3">
                {title}
              </h2>
              <p className="text-primary-foreground/80 mb-4 max-w-lg">
                {description}
              </p>
              {showUrgency && (
                <div className="flex items-center gap-2 mb-6">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm text-primary-foreground/90 font-medium">{urgencyText}</span>
                </div>
              )}
              <Button 
                size="lg" 
                variant="secondary" 
                asChild 
                className="group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/50"
              >
                {buttonHref.startsWith('http') ? (
                  <a href={buttonHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    {buttonText}
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <Link to={buttonHref} className="inline-flex items-center gap-2">
                    {buttonText}
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
