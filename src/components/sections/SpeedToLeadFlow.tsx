import { useEffect, useRef, useState } from "react";
import {
  Globe,
  Database,
  Smartphone,
  Mail,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  Zap,
} from "lucide-react";

type Step = {
  icon: typeof Globe;
  label: string;
  title: string;
  body: string;
  chips?: string[];
};

const STEPS: Step[] = [
  {
    icon: Globe,
    label: "Step 1",
    title: "Website Form Submitted",
    body: "Visitor fills out the form on your site.",
  },
  {
    icon: Database,
    label: "Step 2",
    title: "Contact Created in CRM",
    body: "The lead is added, tagged, and routed automatically.",
    chips: ["Tagged", "Routed"],
  },
  {
    icon: Smartphone,
    label: "Step 3",
    title: "Owner Alert on Your Phone",
    body: "You get an instant notification so you never miss a hot lead.",
    chips: ["Push", "SMS"],
  },
  {
    icon: Mail,
    label: "Step 4",
    title: "Email + SMS Sent to Visitor",
    body: "An instant reply with your calendar link lands in their inbox and on their phone.",
    chips: ["Email", "SMS", "Calendar Link"],
  },
  {
    icon: Calendar,
    label: "Step 5",
    title: "Visitor Books the Consultation",
    body: "They pick a time on your calendar — the appointment is confirmed automatically.",
    chips: ["Booked", "Confirmed"],
  },
  {
    icon: Clock,
    label: "Step 6",
    title: "Appointment Reminders Sent Automatically",
    body: "Email & SMS reminders go out 24 hours, 1 hour, and 15 minutes before — so they actually show up.",
    chips: ["24 hr before", "1 hr before", "15 min before"],
  },
];

export const SpeedToLeadFlow = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inViewRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || paused) return;
    const id = window.setInterval(() => {
      if (!inViewRef.current) return;
      setActive((a) => (a + 1) % STEPS.length);
    }, 2200);
    return () => clearInterval(id);
  }, [reduced, paused]);

  return (
    <div
      ref={containerRef}
      className="relative rounded-3xl border border-border bg-card p-5 md:p-8 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-live="polite"
    >
      {/* Mobile: vertical list */}
      <div className="md:hidden space-y-3">
        {STEPS.map((step, i) => {
          const isActive = i === active;
          const isDone = i < active;
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className={`rounded-2xl border p-4 transition-all duration-500 ${
                isActive
                  ? "border-primary bg-primary/5 shadow-[0_0_30px_-5px_hsl(22_85%_55%/0.55)] scale-[1.01]"
                  : "border-border bg-background/60"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                    isActive
                      ? "bg-primary/20 border border-primary/50 animate-pulse"
                      : isDone
                      ? "bg-primary/10 border border-primary/30"
                      : "bg-muted border border-border"
                  }`}
                >
                  {isDone ? (
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  ) : (
                    <Icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-0.5">
                    {step.label}
                  </p>
                  <h3 className="font-display font-bold text-foreground text-base mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.body}</p>
                  {step.chips && isActive && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {step.chips.map((c, ci) => (
                        <span
                          key={c}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/15 border border-primary/40 text-primary animate-fade-in"
                          style={{ animationDelay: `${ci * 100}ms` }}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop: horizontal flow */}
      <div className="hidden md:block">
        <div className="grid grid-cols-6 gap-3 relative">
          {STEPS.map((step, i) => {
            const isActive = i === active;
            const isDone = i < active;
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                <div
                  className={`h-full rounded-2xl border-2 p-4 text-center transition-all duration-500 ${
                    isActive
                      ? "border-primary bg-primary/5 shadow-[0_15px_40px_-10px_hsl(22_85%_55%/0.6)] -translate-y-1"
                      : isDone
                      ? "border-primary/30 bg-background/70"
                      : "border-border bg-background/40 opacity-70"
                  }`}
                >
                  <div
                    className={`mx-auto w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all ${
                      isActive
                        ? "bg-primary/20 border border-primary/50 animate-pulse"
                        : isDone
                        ? "bg-primary/10 border border-primary/30"
                        : "bg-muted border border-border"
                    }`}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    ) : (
                      <Icon className={`w-6 h-6 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                    )}
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">
                    {step.label}
                  </p>
                  <h3 className="font-display font-bold text-foreground text-sm mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.body}</p>
                  {step.chips && (
                    <div
                      className={`flex flex-wrap justify-center gap-1 mt-2 transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {step.chips.map((c, ci) => (
                        <span
                          key={c}
                          className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-primary/15 border border-primary/40 text-primary"
                          style={{
                            animation: isActive ? `fade-in 0.4s ease-out ${ci * 120}ms both` : undefined,
                          }}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="absolute top-1/2 -right-2 -translate-y-1/2 z-10">
                    <ArrowRight
                      className={`w-4 h-4 transition-colors ${
                        i < active ? "text-primary" : "text-muted-foreground/40"
                      }`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="mt-6 h-1 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-500"
            style={{ width: `${((active + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border-2 border-primary/40 text-foreground font-semibold text-sm">
          <Zap className="w-4 h-4 text-primary" />
          No copying. No chasing. No forgetting.
        </p>
      </div>
    </div>
  );
};
