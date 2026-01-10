import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { baseContactCTA } from "@/config/contactCTA";

interface CardCTAProps {
  /** Main headline - should be contextual to the page */
  title: string;
  /** Supporting description text */
  description: string;
  /** Button text */
  buttonText?: string;
  /** Button link - can be internal route or external URL */
  buttonHref?: string;
  /** Custom section class for background styling */
  sectionClassName?: string;
}

export const CardCTA = ({
  title,
  description,
  buttonText = "Schedule Strategy Session",
  buttonHref = "/contact",
  sectionClassName = "py-24 lg:py-32",
}: CardCTAProps) => {
  return (
    <section className={`${sectionClassName} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-violet-500/10" />
      <div className="container mx-auto px-4 relative z-10">
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
                  {title}
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  {description}
                </p>
                <Button variant="hero" size="xl" asChild>
                  {buttonHref.startsWith('http') ? (
                    <a href={buttonHref} target="_blank" rel="noopener noreferrer">
                      {buttonText}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  ) : (
                    <Link to={buttonHref}>
                      {buttonText}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
