import { useState, useEffect, useRef } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
}

export const useCountUp = ({
  end,
  duration = 2000,
  delay = 0,
  suffix = "",
  prefix = "",
}: UseCountUpOptions) => {
  // SEO: render the final value in the SSG/initial HTML so crawlers never see
  // "0" placeholders (which can trigger Soft 404 classification). After
  // hydration, rewind to 0 and animate up when the element becomes visible.
  const [count, setCount] = useState(end);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
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

    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const startValue = 0;

      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [hasStarted, end, duration, delay]);

  const displayValue = `${prefix}${count}${suffix}`;

  return { ref, displayValue, count };
};

// Helper to parse stat values like "24/7", "48hrs", "100%", "4"
export const parseStatValue = (value: string): { number: number; prefix: string; suffix: string } => {
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
