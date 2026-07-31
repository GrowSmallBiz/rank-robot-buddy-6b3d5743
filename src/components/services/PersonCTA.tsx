import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { baseContactCTA } from "@/config/contactCTA";

interface PersonCTAProps {
  title: ReactNode;
  description: ReactNode;
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
  showUrgency = false,
  urgencyText = "Takes 2 mins to schedule",
  sectionClassName = "py-12",
}: PersonCTAProps) => {
  return (
    <section className={sectionClassName}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Dark navy card with orange border - matching CardCTA */}
          <div 
            className="relative rounded-2xl p-8 md:p-12 lg:p-14 transition-all duration-300 group"
            style={{
              backgroundColor: 'hsl(215 40% 13%)',
              border: '1px solid hsla(25, 90%, 55%, 0.5)',
              boxShadow: '0 0 50px -10px hsla(25, 90%, 55%, 0.25)'
            }}
          >
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
              {/* Left: Photo + Name */}
              <div className="flex-shrink-0 text-center">
                <div className="relative inline-block">
                  {/* Orange gradient ring around photo - matching FAQ contact CTA */}
                  <div 
                    className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-orange-400 to-primary"
                  />
                  {/* Photo container */}
                  <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden">
                    <img 
                      src={baseContactCTA.image} 
                      alt={baseContactCTA.name} 
                      width={160} height={160}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="mt-5 text-lg font-display font-semibold text-foreground">{baseContactCTA.name}</p>
                <p className="text-sm text-muted-foreground">{baseContactCTA.role}</p>
              </div>
              
              {/* Right: Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground mb-5 leading-tight bg-gradient-heading bg-clip-text text-transparent">
                  {title}
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  {description}
                </p>
                {showUrgency && (
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm text-muted-foreground font-medium">{urgencyText}</span>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
                  {/* Gradient CTA Button - orange to blue like CardCTA */}
                  <Button 
                    size="xl" 
                    variant="hero"
                    asChild 
                    className="border-0 px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl rounded-full"
                  >
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
                  {/* Outlined Phone Button - subtle border like CardCTA */}
                  <Button 
                    variant="outline" 
                    size="xl" 
                    asChild 
                    className="border-muted-foreground/40 hover:border-foreground/50 hover:bg-transparent text-foreground bg-transparent px-6 rounded-full"
                  >
                    <a href="tel:+19258863724">
                      <Phone className="mr-2 w-5 h-5" />
                      Call +1 (925) 886-3724
                    </a>
                  </Button>
                </div>
                <p className="mt-4 text-sm text-primary font-medium">
                  No commitment. No pressure. Just a clear path forward for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
