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
          <span 
            key={word} 
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(90deg, hsl(199 89% 48%) 0%, hsl(18 85% 60%) 100%)'
            }}
          >
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
        <div 
          className="relative rounded-2xl p-6 md:p-8 transition-all duration-300"
          style={{
            backgroundColor: 'hsl(215 40% 13%)',
            border: '1px solid hsla(18, 85%, 60%, 0.35)',
            boxShadow: '0 -4px 40px -10px hsla(18, 85%, 60%, 0.25), 0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-muted/30 hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Photo + Name - compact */}
            <div className="flex-shrink-0 flex items-center gap-4">
              <div className="relative">
                <div 
                  className="absolute -inset-0.5 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, hsl(210 20% 40%) 0%, hsl(210 20% 25%) 100%)'
                  }}
                />
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                  <img 
                    src={baseContactCTA.image} 
                    alt={baseContactCTA.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="hidden sm:block md:hidden lg:block">
                <h4 className="text-sm font-display font-semibold text-foreground">{baseContactCTA.name}</h4>
                <p className="text-xs text-muted-foreground">{baseContactCTA.role}</p>
              </div>
            </div>
            
            {/* Content - compact */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-foreground mb-2 leading-tight">
                {renderTitle()}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground hidden md:block max-w-lg">
                {description}
              </p>
            </div>

            {/* Buttons - compact */}
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Button 
                size="lg" 
                asChild 
                className="border-0 px-6 py-5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:opacity-90 hover:shadow-xl rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(25 90% 55%) 0%, hsl(35 85% 60%) 35%, hsl(199 80% 55%) 100%)',
                  boxShadow: '0 12px 35px -8px hsla(25, 90%, 50%, 0.6)'
                }}
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
                className="border-muted-foreground/40 hover:border-foreground/50 hover:bg-transparent text-foreground bg-transparent px-5 rounded-full"
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
