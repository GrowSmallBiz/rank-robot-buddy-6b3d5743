import { useState, useEffect, useRef } from "react";
import { LucideIcon } from "lucide-react";

// Helper to parse stat values like "24/7", "100%", "2-4x", "15+", "3.2x"
const parseStatValue = (value: string): { number: number; prefix: string; suffix: string } => {
  if (value === "24/7") return { number: 24, prefix: "", suffix: "/7" };
  if (value === "2-4x") return { number: 4, prefix: "2-", suffix: "x" };
  
  // Handle decimal values like "3.2x"
  const decimalMatch = value.match(/^([^\d]*)(\d+\.?\d*)(.*)$/);
  if (decimalMatch) {
    const num = parseFloat(decimalMatch[2]);
    return { 
      prefix: decimalMatch[1] || "", 
      number: num, 
      suffix: decimalMatch[3] || "" 
    };
  }
  
  return { number: 0, prefix: "", suffix: value };
};

interface StatItem {
  value: string;
  label: string;
  subtext?: string;
  icon?: LucideIcon;
}

interface AnimatedStatCardProps {
  stat: StatItem;
  index: number;
  variant?: "default" | "card" | "minimal";
}

const AnimatedStatCard = ({ stat, index, variant = "default" }: AnimatedStatCardProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { number: endValue, prefix, suffix } = parseStatValue(stat.value);
  const Icon = stat.icon;
  const isDecimal = stat.value.includes(".");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) setHasStarted(true);
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const duration = 2000;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(isDecimal ? endValue * easeOutQuart : Math.floor(endValue * easeOutQuart));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasStarted, endValue, isDecimal]);

  const displayValue = isDecimal ? count.toFixed(1) : count;

  if (variant === "card") {
    return (
      <div
        ref={ref}
        className="bg-background/80 border border-ghl-icon rounded-2xl p-6 text-center animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.5)]"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="text-4xl md:text-5xl font-display font-bold mb-2" style={{ color: '#FC8253' }}>
          {prefix}{displayValue}{suffix}
        </div>
        <p className="text-foreground font-medium mb-2">{stat.label}</p>
        {stat.subtext && <p className="text-xs text-muted-foreground">{stat.subtext}</p>}
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div ref={ref} className="text-center">
        <p className="text-2xl md:text-3xl font-display font-bold" style={{ color: '#FC8253' }}>
          {prefix}{displayValue}{suffix}
        </p>
        <p className="text-sm text-muted-foreground">{stat.label}</p>
      </div>
    );
  }

  // Default variant with icons
  return (
    <div
      ref={ref}
      className="text-center animate-fade-up group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {Icon && (
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#FC8253]/15 border border-[#FC8253]/30 mb-5 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(252,130,83,0.4)] group-hover:bg-[#FC8253]/25">
          <Icon className="w-6 h-6" style={{ color: '#FC8253' }} />
        </div>
      )}
      <p className="text-4xl md:text-5xl font-display font-bold mb-2 tracking-tight" style={{ color: '#FC8253' }}>
        {prefix}{displayValue}{suffix}
      </p>
      <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
    </div>
  );
};

interface AnimatedStatsSectionProps {
  stats: StatItem[];
  columns?: 2 | 3 | 4;
  variant?: "default" | "card" | "minimal";
  className?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

export const AnimatedStatsSection = ({
  stats,
  columns = 4,
  variant = "default",
  className = "",
  title,
  subtitle,
  description,
}: AnimatedStatsSectionProps) => {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className={`py-20 bg-[#1a2a3a] ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle || description) && (
          <div className="text-center mb-16 animate-fade-up">
            {subtitle && <p className="text-primary font-medium mb-4">{subtitle}</p>}
            {title && (
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-slate-400 max-w-2xl mx-auto">{description}</p>
            )}
          </div>
        )}
        <div className={`grid ${gridCols[columns]} gap-8 lg:gap-12`}>
          {stats.map((stat, index) => (
            <AnimatedStatCard key={index} stat={stat} index={index} variant={variant} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Export the individual card for flexible use
export { AnimatedStatCard };
