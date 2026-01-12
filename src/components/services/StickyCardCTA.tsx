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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-4 animate-slide-up">
      <div className="container mx-auto max-w-6xl">
        <div className="relative bg-card/95 backdrop-blur-md border-2 border-primary/50 rounded-2xl p-4 md:p-5 shadow-xl shadow-black/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/70 group">
          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 md:top-3 md:right-3 p-1.5 rounded-full bg-muted/30 hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground z-10"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-4 md:gap-6">
            {/* Photo + Name - compact inline */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-primary/40 shadow-lg group-hover:border-primary/60 transition-all duration-300">
                <img 
                  src={baseContactCTA.image} 
                  alt={baseContactCTA.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <h4 className="text-sm font-display font-semibold text-foreground whitespace-nowrap">{baseContactCTA.name}</h4>
                <p className="text-xs text-muted-foreground whitespace-nowrap">{baseContactCTA.role}</p>
              </div>
            </div>
            
            {/* Content - single line on desktop */}
            <div className="flex-1 min-w-0 hidden lg:block">
              <h2 className="text-lg xl:text-xl font-display font-bold text-foreground leading-tight truncate">
                {renderTitle()}
              </h2>
              <p className="text-sm text-muted-foreground truncate">
                {description}
              </p>
            </div>

            {/* Buttons - always visible */}
            <div className="flex items-center gap-2 md:gap-3 flex-shrink-0 ml-auto">
              <Button 
                variant="hero"
                size="default"
                className="text-sm px-4 md:px-6"
                asChild
              >
                {buttonHref.startsWith('http') ? (
                  <a href={buttonHref} target="_blank" rel="noopener noreferrer">
                    <span className="hidden sm:inline">{buttonText}</span>
                    <span className="sm:hidden">Get Started</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                ) : (
                  <Link to={buttonHref}>
                    <span className="hidden sm:inline">{buttonText}</span>
                    <span className="sm:hidden">Get Started</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                )}
              </Button>
              <Button 
                variant="outline" 
                size="default"
                asChild 
                className="border-primary/40 hover:border-primary/60 hover:bg-primary/10 rounded-full px-4 md:px-5"
              >
                <a href="tel:+19258863724" className="whitespace-nowrap">
                  <Phone className="mr-2 w-4 h-4" />
                  <span className="hidden md:inline">Call +1 (925) 886-3724</span>
                  <span className="md:hidden">Call</span>
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
