import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedStat } from "./AnimatedStat";

interface HeroCTA {
  label: string;
  href: string;
  variant?: "hero" | "outline" | "heroOutline";
  external?: boolean;
}

interface ServiceHeroProps {
  badge: {
    icon: LucideIcon;
    text: string;
  };
  title: ReactNode;
  titleHighlight?: string;
  subtitle: string;
  description?: string;
  preCtaContent?: ReactNode;
  primaryCTA: HeroCTA;
  secondaryCTA?: HeroCTA;
  note?: string;
  backgroundImage?: string;
  overlayOpacity?: number;
  stats?: Array<{
    value: string;
    label: string;
  }>;
  children?: ReactNode;
}

export const ServiceHero = ({
  badge,
  title,
  titleHighlight,
  subtitle,
  description,
  preCtaContent,
  primaryCTA,
  secondaryCTA,
  note,
  backgroundImage,
  overlayOpacity = 85,
  stats,
  children,
}: ServiceHeroProps) => {
  const BadgeIcon = badge.icon;

  const renderCTA = (cta: HeroCTA, isPrimary: boolean) => {
    const variant = cta.variant || (isPrimary ? "hero" : "outline");

    const content = (
      <>
        {cta.label}
        {isPrimary && <ArrowRight className="w-5 h-5 ml-2" />}
      </>
    );

    if (cta.external) {
      return (
        <Button variant={variant} size="lg" asChild>
          <a href={cta.href} target="_blank" rel="noopener noreferrer">
            {content}
          </a>
        </Button>
      );
    }

    return (
      <Button variant={variant} size="lg" asChild>
        <Link to={cta.href}>{content}</Link>
      </Button>
    );
  };

  return (
    <section className="hero-section">
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `hsl(var(--background) / ${overlayOpacity / 100})` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="service-badge mb-6 animate-fade-up">
            <BadgeIcon className="w-4 h-4" />
            <span>{badge.text}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up leading-tight">
            {title}{" "}
            {titleHighlight && (
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                {titleHighlight}
              </span>
            )}
          </h1>

          <div
            className="text-lg md:text-xl text-foreground/80 mb-4 animate-fade-up max-w-3xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.1s" }}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />

          {description && (
            <p
              className="text-lg text-muted-foreground mb-10 animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              {description}
            </p>
          )}

          {preCtaContent && (
            <div className="animate-fade-up" style={{ animationDelay: "0.18s" }}>
              {preCtaContent}
            </div>
          )}

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {renderCTA(primaryCTA, true)}
            {secondaryCTA && renderCTA(secondaryCTA, false)}
          </div>

          {note && (
            <p
              className="mt-6 text-sm text-muted-foreground animate-fade-up"
              style={{ animationDelay: "0.25s" }}
              dangerouslySetInnerHTML={{ __html: note }}
            />
          )}

          {stats && stats.length > 0 && (
            <div
              className="mt-12 p-8 rounded-2xl bg-background/20 backdrop-blur-md border border-primary/30 shadow-[0_0_40px_rgba(255,127,80,0.15)] animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <AnimatedStat
                    key={index}
                    value={stat.value}
                    label={stat.label}
                    showDivider={index < stats.length - 1}
                  />
                ))}
              </div>
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
};
