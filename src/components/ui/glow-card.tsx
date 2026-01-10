import * as React from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether to apply the glow effect on hover (default: true) */
  glowOnHover?: boolean;
  /** Custom glow color - uses primary orange by default */
  glowColor?: string;
  /** Whether to include the lift animation on hover (default: true) */
  liftOnHover?: boolean;
  /** Border radius class (default: rounded-2xl) */
  rounded?: string;
  /** As child - render as a different element */
  asChild?: boolean;
}

const GlowCard = React.forwardRef<HTMLDivElement, GlowCardProps>(
  (
    {
      className,
      glowOnHover = true,
      glowColor = "rgba(255, 127, 80, 0.3)",
      liftOnHover = true,
      rounded = "rounded-2xl",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          "bg-card border-2 border-border/50",
          rounded,
          "transition-all duration-300",
          // Hover effects
          glowOnHover && "hover:border-primary/50",
          liftOnHover && "hover:-translate-y-2",
          className
        )}
        style={{
          ...(glowOnHover && {
            ["--glow-color" as string]: glowColor,
          }),
        }}
        onMouseEnter={(e) => {
          if (glowOnHover) {
            e.currentTarget.style.boxShadow = `0 0 30px ${glowColor}`;
          }
          props.onMouseEnter?.(e);
        }}
        onMouseLeave={(e) => {
          if (glowOnHover) {
            e.currentTarget.style.boxShadow = "";
          }
          props.onMouseLeave?.(e);
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlowCard.displayName = "GlowCard";

export { GlowCard, type GlowCardProps };
