import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  cta: string;
  ctaLink: string;
  popular?: boolean;
  note?: string;
  delay?: number;
  className?: string;
}

export const PricingCard = ({
  name,
  price,
  period = "/month",
  description,
  features,
  cta,
  ctaLink,
  popular = false,
  note,
  delay = 0,
  className = "",
}: PricingCardProps) => {
  return (
    <div
      className={`pricing-card ${popular ? "pricing-card-popular" : ""} animate-fade-up ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {popular && <span className="pricing-badge">Most Popular</span>}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-display font-bold text-foreground mb-2">
          {name}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      <div className="text-center mb-6">
        <span className="text-4xl md:text-5xl font-display font-bold text-primary">
          {price}
        </span>
        <span className="text-muted-foreground">{period}</span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-foreground text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={popular ? "hero" : "outline"}
        size="lg"
        className="w-full"
        asChild
      >
        <a href={ctaLink} target="_blank" rel="noopener noreferrer">
          {cta}
        </a>
      </Button>

      {note && (
        <p className="text-xs text-center text-muted-foreground mt-4">{note}</p>
      )}
    </div>
  );
};

interface PricingGridProps {
  plans: Array<{
    name: string;
    price: string;
    period?: string;
    description?: string;
    features: string[];
    cta: string;
    ctaLink: string;
    popular?: boolean;
    note?: string;
  }>;
  columns?: 2 | 3 | 4;
  className?: string;
}

export const PricingGrid = ({
  plans,
  columns = 3,
  className = "",
}: PricingGridProps) => {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-8 ${className}`}>
      {plans.map((plan, index) => (
        <PricingCard key={index} {...plan} delay={index * 0.1} />
      ))}
    </div>
  );
};
