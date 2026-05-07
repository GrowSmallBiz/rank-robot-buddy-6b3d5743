import { useState, useEffect, useRef } from "react";

interface AnimatedStatProps {
  value: string;
  label: string;
  showDivider?: boolean;
}

// Helper to parse stat values like "24/7", "48hrs", "100%", "4"
const parseStatValue = (value: string): { number: number; prefix: string; suffix: string } => {
  // Handle special cases
  if (value === "24/7") {
    return { number: 24, prefix: "", suffix: "/7" };
  }
  
  // Extract number and suffix/prefix
  const match = value.match(/^([^\d]*)(\d+)(.*)$/);
  if (match) {
    return {
      prefix: match[1] || "",
      number: parseInt(match[2], 10),
      suffix: match[3] || "",
    };
  }
  
  return { number: 0, prefix: "", suffix: value };
};

export const AnimatedStat = ({ value, label, showDivider = false }: AnimatedStatProps) => {
  const { number: endValue, prefix, suffix } = parseStatValue(value);

  // SEO: render the final value in the SSG/initial HTML so crawlers (Googlebot,
  // Rich Results Test, etc.) never see "0%/0x/0/7" placeholders — that pattern
  // can cause Google to classify the page as a Soft 404. We only "rewind" to 0
  // and animate up once the component has mounted on the client.
  const [count, setCount] = useState(endValue);
  const [hasStarted, setHasStarted] = useState(false);
  const hasMounted = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  // After hydration, reset to 0 so the count-up animation has somewhere to go.
  useEffect(() => {
    hasMounted.current = true;
    setCount(0);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
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
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(endValue * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, endValue]);

  return (
    <div ref={ref} className="text-center relative">
      <p className="text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-primary drop-shadow-lg">
        {prefix}{count}{suffix}
      </p>
      <p className="text-sm md:text-base text-foreground/90 font-medium mt-2">{label}</p>
      {showDivider && (
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
      )}
    </div>
  );
};
