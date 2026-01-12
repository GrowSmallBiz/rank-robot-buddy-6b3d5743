import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, X } from "lucide-react";
import { baseContactCTA } from "@/config/contactCTA";
import { useState, useEffect } from "react";

interface FloatingCTAProps {
  /** Main headline */
  title: string;
  /** Supporting description text */
  description: string;
  /** Primary button text */
  buttonText?: string;
  /** Primary button link */
  buttonHref?: string;
  /** Show after scrolling this many pixels */
  showAfterScroll?: number;
  /** Accent words to highlight in title */
  accentWords?: string[];
}

export const FloatingCTA = ({
  title,
  description,
  buttonText = "Get Your Custom Growth Strategy",
  buttonHref = "/contact",
  showAfterScroll = 400,
  accentWords = [],
}: FloatingCTAProps) => {
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
      <div className="max-w-5xl mx-auto">
        {/* Dark navy card with subtle orange border - matching CardCTA */}
        <div 
          className="relative rounded-2xl p-5 md:p-6 transition-all duration-300"
          style={{
            backgroundColor: 'hsl(215 40% 13%)',
            border: '1px solid hsla(18, 85%, 60%, 0.35)',
            boxShadow: '0 -4px 40px -10px hsla(18, 85%, 60%, 0.25), 0 10px 40px -10px rgba(0,0,0,0.5)'
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

          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
            {/* Photo with subtle gray ring */}
            <div className="flex-shrink-0 hidden sm:block">
              <div className="relative inline-block">
                <div 
                  className="absolute -inset-1 rounded-full"
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
            </div>

            {/* Person info */}
            <div className="hidden sm:flex flex-col items-center md:items-start -ml-2">
              <span className="text-sm font-semibold text-foreground">{baseContactCTA.name}</span>
              <span className="text-xs text-muted-foreground">{baseContactCTA.role}</span>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left pr-6">
              <h3 className="text-lg md:text-xl lg:text-2xl font-display font-bold text-foreground mb-1">
                {renderTitle()}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 hidden md:block">
                {description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              {/* Gradient CTA Button */}
              <Button 
                size="lg" 
                asChild 
                className="border-0 px-6 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:opacity-90 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(25 90% 55%) 0%, hsl(35 85% 60%) 35%, hsl(199 80% 55%) 100%)',
                  boxShadow: '0 8px 25px -6px hsla(25, 90%, 50%, 0.5)'
                }}
              >
                {buttonHref.startsWith("http") ? (
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
              {/* Outlined Phone Button */}
              <Button
                variant="outline"
                size="lg"
                className="border-muted-foreground/30 hover:border-foreground/50 hover:bg-transparent text-foreground bg-transparent rounded-full"
                asChild
              >
                <a href="tel:+19258863724">
                  <Phone className="mr-2 w-4 h-4" />
                  <span className="hidden lg:inline">Call</span> +1 (925) 886-3724
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
