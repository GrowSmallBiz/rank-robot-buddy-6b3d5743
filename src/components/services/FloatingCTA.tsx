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
}

export const FloatingCTA = ({
  title,
  description,
  buttonText = "Schedule Strategy Session",
  buttonHref = "/contact",
  showAfterScroll = 400,
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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-card/95 backdrop-blur-md border border-primary/30 rounded-2xl p-4 md:p-6 shadow-2xl shadow-primary/20">
          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 md:top-4 md:right-4 p-1.5 rounded-full bg-muted/50 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            {/* Photo with Ring */}
            <div className="flex-shrink-0 hidden sm:block">
              <div className="relative">
                {/* Gradient ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-70" />
                {/* Photo */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-card">
                  <img
                    src={baseContactCTA.image}
                    alt={baseContactCTA.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Person info - mobile only inline */}
            <div className="hidden sm:flex flex-col items-center md:items-start">
              <span className="text-sm font-semibold text-foreground">{baseContactCTA.name}</span>
              <span className="text-xs text-muted-foreground">{baseContactCTA.role}</span>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg md:text-xl lg:text-2xl font-display font-bold text-foreground mb-1">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 hidden md:block">
                {description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 flex-shrink-0">
              <Button className="ghl-btn px-6 py-2.5" asChild>
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
              <Button
                variant="outline"
                className="border-muted-foreground/30 hover:bg-muted/50 px-6 py-2.5"
                asChild
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
