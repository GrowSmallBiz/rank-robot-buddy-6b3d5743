import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
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
  /** Accent words to highlight in title (will be colored with gradient) */
  accentWords?: string[];
  /** Whether to show the phone call button */
  showPhoneButton?: boolean;
}

export const CardCTA = ({
  title,
  description,
  buttonText = "Schedule Strategy Call",
  buttonHref = "https://lp.growsmallbiz.io/digital-growth-strategy-session",
  sectionClassName = "py-24 lg:py-32",
  accentWords = [],
}: CardCTAProps) => {
  // Helper to render title with accent words highlighted
  const renderTitle = () => {
    if (accentWords.length === 0) return title;
    
    let result = title;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    
    // Find and highlight each accent word
    accentWords.forEach((word) => {
      const index = result.toLowerCase().indexOf(word.toLowerCase());
      if (index !== -1) {
        // Add text before the accent word
        if (index > lastIndex) {
          parts.push(result.substring(lastIndex, index));
        }
        // Add the accent word with gradient (blue to orange like reference)
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
    
    // Add remaining text
    if (lastIndex < result.length) {
      parts.push(result.substring(lastIndex));
    }
    
    return parts.length > 0 ? parts : title;
  };

  return (
    <section className={`${sectionClassName} relative overflow-hidden`}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Dark navy card with subtle orange border - matching reference */}
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
                      width={160}
                      height={160}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h4 className="mt-5 text-lg font-display font-semibold text-foreground">{baseContactCTA.name}</h4>
                <p className="text-sm text-muted-foreground">{baseContactCTA.role}</p>
              </div>
              
              {/* Right: Content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold mb-5 leading-tight bg-gradient-heading bg-clip-text text-transparent">
                  {title}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                  {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
                  {/* Gradient CTA Button - orange to blue like reference */}
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
                  {/* Outlined Phone Button - subtle border like reference */}
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
