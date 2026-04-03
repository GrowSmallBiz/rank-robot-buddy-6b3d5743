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
  buttonText = "Schedule Strategy Call",
  buttonHref = "/contact/",
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
        <div 
          className="relative rounded-2xl p-6 md:p-8 lg:p-10 transition-all duration-300 backdrop-blur-xl"
          style={{
            backgroundColor: 'hsla(215, 40%, 13%, 0.85)',
            border: '1px solid hsla(18, 85%, 60%, 0.4)',
            boxShadow: '0 -8px 40px -10px hsla(18, 85%, 60%, 0.2), 0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-muted/30 hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground z-10"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Left: Photo + Name (stacked) */}
            <div className="flex-shrink-0 text-center">
              <div className="relative inline-block">
                {/* Subtle gray ring around photo */}
                <div 
                  className="absolute -inset-1 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, hsl(210 20% 40%) 0%, hsl(210 20% 25%) 100%)'
                  }}
                />
                {/* Photo container */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden">
                  <img 
                    src={baseContactCTA.image} 
                    alt={baseContactCTA.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h4 className="mt-3 text-base font-display font-semibold text-foreground">{baseContactCTA.name}</h4>
              <p className="text-sm text-muted-foreground">{baseContactCTA.role}</p>
            </div>
            
            {/* Right: Content + Buttons */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3 leading-tight">
                {renderTitle()}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-xl">
                {description}
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  asChild 
                  className="border-0 px-8 py-5 text-base font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:opacity-90 hover:shadow-xl rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, hsl(30 80% 65%) 0%, hsl(40 75% 70%) 40%, hsl(185 60% 55%) 100%)',
                    boxShadow: '0 12px 35px -8px hsla(30, 80%, 55%, 0.5)'
                  }}
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
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="border-muted-foreground/40 hover:border-foreground/50 hover:bg-transparent text-foreground bg-transparent px-6 py-5 rounded-full"
                >
                  <a href="tel:+19258863724">
                    <Phone className="mr-2 w-5 h-5" />
                    Call +1 (925) 886-3724
                  </a>
                </Button>
              </div>
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
