import { LucideIcon } from "lucide-react";

type CardVariant = "default" | "teal" | "orange" | "minimal";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: CardVariant;
  delay?: number;
  className?: string;
}

const variantStyles: Record<CardVariant, { card: string; icon: string; iconColor: string }> = {
  default: {
    card: "feature-card",
    icon: "icon-container-lg mx-auto mb-6",
    iconColor: "text-primary",
  },
  teal: {
    card: "feature-card-teal",
    icon: "icon-container-ghl mb-4",
    iconColor: "text-ghl-icon",
  },
  orange: {
    card: "bg-background/80 backdrop-blur-sm border border-ghl-icon rounded-2xl p-6 transition-all hover:shadow-[0_0_30px_rgba(255,127,80,0.5)]",
    icon: "icon-container mb-4",
    iconColor: "text-primary",
  },
  minimal: {
    card: "bg-card border border-border rounded-2xl p-6 transition-all hover:border-primary/30 hover:shadow-lg",
    icon: "icon-container mb-4",
    iconColor: "text-primary",
  },
};

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  variant = "default",
  delay = 0,
  className = "",
}: FeatureCardProps) => {
  const styles = variantStyles[variant];
  const isCentered = variant === "default";

  return (
    <div
      className={`${styles.card} animate-fade-up ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={styles.icon}>
        <Icon className={`w-${variant === "default" ? "8" : "6"} h-${variant === "default" ? "8" : "6"} ${styles.iconColor}`} />
      </div>
      <h3 className={`text-${variant === "default" ? "2xl" : "xl"} font-semibold text-foreground mb-${variant === "default" ? "4" : "3"} ${isCentered ? "text-center" : ""}`}>
        {title}
      </h3>
      <p className={`text-muted-foreground ${isCentered ? "text-center" : ""}`}>
        {description}
      </p>
    </div>
  );
};
