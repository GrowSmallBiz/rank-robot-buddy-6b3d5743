import { useEffect, useRef, useState } from "react";
import { Bot, CheckCircle2, Calendar, Phone, PhoneCall } from "lucide-react";
import therapistImage from "@/assets/cohort/therapist-in-session.webp";

type Msg = { from: "user" | "ai"; text: string };

const CHAT_SCRIPT: Msg[] = [
  { from: "user", text: "Do you offer prenatal massage?" },
  { from: "ai", text: "Yes! 60 and 90-minute prenatal sessions available. Want me to book one?" },
  { from: "user", text: "Saturday afternoon if possible" },
  { from: "ai", text: "Booking link sent. 2pm Saturday is open — tap to confirm." },
];

const TYPING_MS = 850;
const READ_MS = 1500;
const HOLD_MS = 3500;
const CHAT_OFFSET_MS = 600;

type PanelState = {
  visible: number;
  typing: "user" | "ai" | null;
  done: boolean;
};

const initialPanel: PanelState = { visible: 0, typing: null, done: false };

export const AiBusyMomDemo = () => {
  const [voice, setVoice] = useState<PanelState>(initialPanel);
  const [chat, setChat] = useState<PanelState>(initialPanel);
  const [reduced, setReduced] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
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
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (reduced) {
      setVoice({ visible: VOICE_SCRIPT.length, typing: null, done: true });
      setChat({ visible: CHAT_SCRIPT.length, typing: null, done: true });
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
      while (!inViewRef.current && !cancelled) await wait(300);
    };

    const playPanel = async (
      script: Msg[],
      setter: typeof setVoice,
      offsetMs: number
    ) => {
      if (offsetMs) await wait(offsetMs);
      for (let i = 0; i < script.length; i++) {
        if (cancelled) return;
        setter((p) => ({ ...p, typing: script[i].from }));
        await wait(TYPING_MS);
        if (cancelled) return;
        setter({ visible: i + 1, typing: null, done: false });
        await wait(READ_MS);
      }
      if (cancelled) return;
      setter((p) => ({ ...p, done: true }));
    };

    const run = async () => {
      while (!cancelled) {
        setVoice(initialPanel);
        setChat(initialPanel);
        await waitForView();
        await wait(400);
        await Promise.all([
          playPanel(VOICE_SCRIPT, setVoice, 0),
          playPanel(CHAT_SCRIPT, setChat, CHAT_OFFSET_MS),
        ]);
        if (cancelled) return;
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
      className="grid lg:grid-cols-[1fr_1.1fr_1fr] gap-5 md:gap-6 items-stretch"
    >
      <VoiceCallPanel state={voice} />
      <TherapistCard />
      <ChatPanel state={chat} />
    </div>
  );
};

/* ---------------- Voice Call Panel ---------------- */

const VoiceCallPanel = ({ state }: { state: PanelState }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const sc = scrollRef.current;
    if (sc) sc.scrollTo({ top: sc.scrollHeight, behavior: "smooth" });
  }, [state.visible, state.typing, state.done]);

  return (
    <div className="rounded-3xl border border-border bg-card p-5 md:p-6 shadow-[0_30px_80px_-30px_hsl(20_60%_40%/0.25)] flex flex-col">
      <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
          <PhoneCall className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-foreground text-sm">AI Voice Receptionist</p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
            {state.done ? "Call ended" : "On call"}
          </p>
        </div>
        <span className="text-[10px] uppercase tracking-wider font-semibold text-primary/80 bg-primary/10 px-2 py-1 rounded-md">
          Phone
        </span>
      </div>

      <div
        ref={scrollRef}
        className="space-y-3 text-sm min-h-[300px] md:min-h-[340px] max-h-[400px] overflow-hidden flex-1"
      >
        {VOICE_SCRIPT.slice(0, state.visible).map((m, i) => (
          <div
            key={i}
            className={`flex ${m.from === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-[13px] leading-snug ${
                m.from === "user"
                  ? "rounded-tr-sm bg-muted/80 text-foreground border border-border"
                  : "rounded-tl-sm bg-primary/15 text-foreground border border-primary/30"
              }`}
            >
              <span className="block text-[10px] uppercase tracking-wider opacity-60 mb-0.5">
                {m.from === "user" ? "Caller" : "AI"}
              </span>
              {m.text}
            </div>
          </div>
        ))}

        {state.typing && (
          <TypingBubble side={state.typing === "user" ? "right" : "left"} tone="voice" />
        )}

        {state.done && (
          <div className="flex flex-wrap items-center gap-2.5 pt-2 animate-fade-in">
            <Badge icon={Calendar} text="Appointment booked" />
            <Badge icon={CheckCircle2} text="Added to CRM" />
          </div>
        )}
      </div>
    </div>
  );
};

/* ---------------- Therapist Card ---------------- */

const TherapistCard = () => (
  <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-[0_30px_80px_-30px_hsl(20_60%_40%/0.25)] min-h-[360px]">
    <img
      src={therapistImage}
      alt="Massage therapist with a client during a session"
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
      width={1024}
      height={1024}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

    {/* Pulse ring + status chip */}
    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
      <span className="inline-flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 px-3 py-1.5 text-xs font-semibold text-white">
        <span className="relative flex w-2 h-2">
          <span className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-70" />
          <span className="relative inline-flex w-2 h-2 rounded-full bg-red-500" />
        </span>
        In session — Do not disturb
      </span>
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
      <p className="text-white font-display font-semibold text-lg md:text-xl leading-tight">
        She’s with a client right now.
      </p>
      <p className="text-white/80 text-sm mt-1.5">
        Her phone is silenced. Her hands are full. Her business doesn’t miss a beat — because AI is answering on both sides.
      </p>
    </div>
  </div>
);

/* ---------------- Chat Panel ---------------- */

const ChatPanel = ({ state }: { state: PanelState }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const sc = scrollRef.current;
    if (sc) sc.scrollTo({ top: sc.scrollHeight, behavior: "smooth" });
  }, [state.visible, state.typing, state.done]);

  return (
    <div className="rounded-3xl border border-border bg-card p-5 md:p-6 shadow-[0_30px_80px_-30px_hsl(20_60%_40%/0.25)] flex flex-col">
      <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
        <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
          <Bot className="w-5 h-5 text-cyan-400" />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-foreground text-sm">Website Live Chat</p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" /> Online now
          </p>
        </div>
        <span className="text-[10px] uppercase tracking-wider font-semibold text-cyan-400/90 bg-cyan-500/10 px-2 py-1 rounded-md">
          Website
        </span>
      </div>

      <div
        ref={scrollRef}
        className="space-y-3 text-sm min-h-[300px] md:min-h-[340px] max-h-[400px] overflow-hidden flex-1"
      >
        {CHAT_SCRIPT.slice(0, state.visible).map((m, i) => (
          <div
            key={i}
            className={`flex ${m.from === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[13px] leading-snug ${
                m.from === "user"
                  ? "rounded-tr-sm bg-primary text-primary-foreground"
                  : "rounded-tl-sm bg-muted text-foreground"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {state.typing && (
          <TypingBubble side={state.typing === "user" ? "right" : "left"} tone="chat" />
        )}

        {state.done && (
          <div className="flex flex-wrap items-center gap-2.5 pt-2 animate-fade-in">
            <Badge icon={CheckCircle2} text="Lead captured" />
            <Badge icon={Calendar} text="Booking link sent" />
          </div>
        )}
      </div>
    </div>
  );
};

/* ---------------- Shared bits ---------------- */

const TypingBubble = ({
  side,
  tone,
}: {
  side: "left" | "right";
  tone: "voice" | "chat";
}) => {
  const base =
    tone === "voice"
      ? side === "right"
        ? "rounded-tr-sm bg-muted/80 text-foreground border border-border"
        : "rounded-tl-sm bg-primary/15 text-foreground border border-primary/30"
      : side === "right"
        ? "rounded-tr-sm bg-primary/70 text-primary-foreground"
        : "rounded-tl-sm bg-muted text-foreground";

  return (
    <div className={`flex ${side === "right" ? "justify-end" : "justify-start"} animate-fade-in`}>
      <div className={`rounded-2xl px-4 py-3 ${base}`} aria-label="Typing">
        <span className="inline-flex items-end gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-[bounce_1s_infinite] [animation-delay:0ms]" />
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-[bounce_1s_infinite] [animation-delay:150ms]" />
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-[bounce_1s_infinite] [animation-delay:300ms]" />
        </span>
      </div>
    </div>
  );
};

const Badge = ({
  icon: Icon,
  text,
}: {
  icon: typeof CheckCircle2;
  text: string;
}) => (
  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
    <Icon className="w-3.5 h-3.5" /> {text}
  </span>
);
