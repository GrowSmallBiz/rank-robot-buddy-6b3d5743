import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, X } from "lucide-react";
import { baseContactCTA } from "@/config/contactCTA";
import { useState, useEffect } from "react";

interface StickyCardCTAProps {
  /** Main headline - should be contextual to the page */
  title: string;
  /** Supporting description text */
  description: string;
  /** Button text */
  buttonText?: string;
  /** Button link - can be internal route or external URL */
  buttonHref?: string;
  /** Accent words to highlight in title (will be colored with gradient) */
  accentWords?: string[];
  /** Show after scrolling this many pixels */
  showAfterScroll?: number;
}

export const StickyCardCTA = ({
  title,
  description,
  buttonText = "Get Your Custom Growth Strategy",
  buttonHref = "/contact",
  accentWords = [],
  showAfterScroll = 600,
}: StickyCardCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showAfterScroll && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= showAfterScroll) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfterScroll, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  // Helper to render title with accent words highlighted
  const renderTitle = () => {
    if (accentWords.length === 0) return title;
    
    let result = title;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    
    accentWords.forEach((word) => {
      const index = result.toLowerCase().indexOf(word.toLowerCase());
      if (index !== -1) {
        if (index > lastIndex) {
          parts.push(result.substring(lastIndex, index));
        }
        parts.push(
          <span key={word} className="text-gradient">
            {result.substring(index, index + word.length)}
          </span>
        );
        lastIndex = index + word.length;
      }
    });
    
    if (lastIndex < result.length) {
      parts.push(result.substring(lastIndex));
    }
    
    return parts.length > 0 ? parts : title;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="container mx-auto max-w-5xl">
        <div className="relative bg-card/80 backdrop-blur-sm border-2 border-primary/50 rounded-3xl p-6 md:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/70 group">
          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-muted/30 hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground z-10"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Photo + Name */}
            <div className="flex-shrink-0 text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg group-hover:border-primary/50 transition-all duration-300">
                <img 
                  src={baseContactCTA.image} 
                  alt={baseContactCTA.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="mt-2 text-sm font-display font-semibold text-foreground">{baseContactCTA.name}</h4>
              <p className="text-xs text-muted-foreground">{baseContactCTA.role}</p>
            </div>
            
            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-foreground mb-2 leading-tight">
                {renderTitle()}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground hidden md:block max-w-lg">
                {description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Button 
                variant="hero"
                size="lg" 
                asChild
              >
                {buttonHref.startsWith('http') ? (
                  <a href={buttonHref} target="_blank" rel="noopener noreferrer">
                    {buttonText}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                ) : (
                  <Link to={buttonHref}>
                    {buttonText}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                )}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="border-primary/40 hover:border-primary/60 hover:bg-primary/10 rounded-full"
              >
                <a href="tel:+19258863724">
                  <Phone className="mr-2 w-4 h-4" />
                  Call +1 (925) 886-3724
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
