import { useEffect, useRef, useState } from "react";
import { Bot, CheckCircle2, Calendar } from "lucide-react";

type Msg = { from: "user" | "bot"; text: string };

const SCRIPT: Msg[] = [
  { from: "user", text: "Hi! Do you have any openings this Saturday?" },
  {
    from: "bot",
    text:
      "Hi there! Yes — we have a few openings on Saturday afternoon. May I grab your name and best phone number so I can hold a spot for you?",
  },
  { from: "user", text: "Sara — 925-555-0143" },
  {
    from: "bot",
    text:
      "Thanks Sara! I’ve sent a booking link to your phone. Would 1pm or 3pm work better?",
  },
];

const TYPING_MS = 900;
const READ_MS = 1600;
const HOLD_MS = 3500;

export const AiLivechatDemo = () => {
  const [visibleCount, setVisibleCount] = useState(0); // number of messages shown
  const [typing, setTyping] = useState<"user" | "bot" | null>(null);
  const [showBadges, setShowBadges] = useState(false);
  const [reduced, setReduced] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inViewRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const h = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Auto-scroll on new content
  useEffect(() => {
    const sc = scrollRef.current;
    if (sc) sc.scrollTo({ top: sc.scrollHeight, behavior: "smooth" });
  }, [visibleCount, typing, showBadges]);

  useEffect(() => {
    if (reduced) {
      setVisibleCount(SCRIPT.length);
      setShowBadges(true);
      return;
    }

    let cancelled = false;
    const timeouts: number[] = [];
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const id = window.setTimeout(resolve, ms);
        timeouts.push(id);
      });

    const waitForView = async () => {
      while (!inViewRef.current && !cancelled) {
        await wait(300);
      }
    };

    const run = async () => {
      while (!cancelled) {
        // Reset
        setVisibleCount(0);
        setShowBadges(false);
        setTyping(null);
        await waitForView();
        await wait(400);

        for (let i = 0; i < SCRIPT.length; i++) {
          if (cancelled) return;
          setTyping(SCRIPT[i].from);
          await wait(TYPING_MS);
          if (cancelled) return;
          setTyping(null);
          setVisibleCount(i + 1);
          await wait(READ_MS);
        }

        if (cancelled) return;
        setShowBadges(true);
        await wait(HOLD_MS);
      }
    };

    run();
    return () => {
      cancelled = true;
      timeouts.forEach((id) => clearTimeout(id));
    };
  }, [reduced]);

  return (
    <div
      ref={containerRef}
      className="max-w-2xl mx-auto rounded-3xl border border-border bg-card p-5 md:p-7 shadow-[0_30px_80px_-30px_hsl(20_60%_40%/0.25)]"
    >
      <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
          <Bot className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">Your Website Assistant</p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" /> Online now
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="space-y-3 text-sm min-h-[320px] md:min-h-[360px] max-h-[420px] overflow-hidden"
      >
        {SCRIPT.slice(0, visibleCount).map((m, i) => (
          <div
            key={i}
            className={`flex ${m.from === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                m.from === "user"
                  ? "rounded-tr-sm bg-primary text-primary-foreground"
                  : "rounded-tl-sm bg-muted text-foreground"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {typing && (
          <div className={`flex ${typing === "user" ? "justify-end" : "justify-start"} animate-fade-in`}>
            <div
              className={`rounded-2xl px-4 py-3 ${
                typing === "user"
                  ? "rounded-tr-sm bg-primary/70 text-primary-foreground"
                  : "rounded-tl-sm bg-muted text-foreground"
              }`}
              aria-label="Typing"
            >
              <span className="inline-flex items-end gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-[bounce_1s_infinite] [animation-delay:0ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-[bounce_1s_infinite] [animation-delay:150ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-[bounce_1s_infinite] [animation-delay:300ms]" />
              </span>
            </div>
          </div>
        )}

        {showBadges && (
          <div className="flex flex-wrap items-center gap-3 pt-2 animate-fade-in">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
              <CheckCircle2 className="w-3.5 h-3.5" /> Contact captured in CRM
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
              <Calendar className="w-3.5 h-3.5" /> Booking link sent
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
