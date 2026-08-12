import { Check, Sparkles } from "lucide-react";
import coverArt from "@/assets/citations-by-platform-cover.webp";


/**
 * Premium 3D spiral-bound workbook mockup used as the hero bonus visual.
 * Pure CSS/SVG so it stays crisp, themable and prerender-safe.
 */
export const WorkbookMockup = () => (
  <div className="flex flex-col items-center">
    <div className="group relative [perspective:1400px]">
      {/* Bonus badge */}
      <span className="absolute -left-3 -top-3 z-20 inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-lg shadow-primary/40 md:-left-5 md:-top-4">
        <Sparkles className="h-3.5 w-3.5" />
        Workshop Bonus
      </span>


      {/* Book */}
      <div className="relative w-[17.8rem] transition-transform duration-500 ease-out [transform:rotateY(17deg)_rotateX(6deg)] group-hover:-translate-y-2 group-hover:[transform:rotateY(15deg)_rotateX(5deg)] md:w-[19.5rem]">
        {/* Page stack (thickness) */}
        <div className="absolute inset-y-2 -right-2 rounded-r-md bg-gradient-to-r from-foreground/70 to-foreground/25 [width:14px]" />
        <div className="absolute inset-y-3 -right-3 rounded-r-md bg-foreground/20 [width:14px]" />

        {/* Cover */}
        <div className="relative overflow-hidden rounded-md rounded-l-sm border border-primary/25 bg-[hsl(210_55%_10%)] shadow-2xl shadow-background/80 ring-1 ring-inset ring-foreground/5">
          {/* Subtle network / grid texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, hsl(var(--primary)/0.55) 1px, transparent 0), linear-gradient(hsl(var(--foreground)/0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)/0.05) 1px, transparent 1px)",
              backgroundSize: "34px 34px, 34px 34px, 34px 34px",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(115deg, transparent 48%, hsl(var(--primary)/0.5) 49%, transparent 50%), linear-gradient(60deg, transparent 62%, hsl(190 70% 55% / 0.4) 63%, transparent 64%)",
            }}
          />

          {/* Cover content */}
          <div className="relative z-10 flex aspect-[3/4] flex-col p-6 md:p-7">
            {/* Attendee Exclusive ribbon */}
            <span
              className="inline-block self-start bg-primary px-3.5 py-1 text-[9px] font-bold uppercase leading-[1.4] tracking-[0.18em] text-primary-foreground shadow"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, calc(100% - 7px) 50%, 100% 100%, 0 100%)",
              }}
            >
              Attendee Exclusive
            </span>

            {/* Title — two-level hierarchy */}
            <h3 className="mt-7 font-display leading-[1.0] text-foreground">
              <span className="block text-[1.9rem] font-extrabold tracking-tight md:text-[2.15rem]">
                AI Visibility
              </span>
              <span className="mt-1 block text-[1.25rem] font-semibold tracking-[0.04em] text-foreground/65 md:text-[1.4rem]">
                Playbook
              </span>
            </h3>
            <div className="mt-4 h-[3px] w-14 rounded-full bg-primary" />
            <p className="mt-4 text-[11px] font-medium leading-relaxed tracking-wide text-foreground/70 md:text-xs">
              Measure • Understand • Improve
            </p>

            {/* Chart — integrated as a designed graphic */}
            <div className="mt-7 overflow-hidden rounded-md border border-primary/15 bg-[hsl(210_55%_7%)]/80 p-2 shadow-lg">
              <img
                src={coverArt}
                alt="Citations by platform chart showing AI visibility share across ChatGPT, Google AI Mode, Perplexity, Gemini and Copilot"
                width={1574}
                height={456}
                loading="lazy"
                className="w-full rounded-sm opacity-90"
              />
            </div>

            {/* Branding */}
            <div className="mt-auto pt-7">
              <p className="text-[9px] uppercase tracking-[0.2em] text-foreground/45">
                GrowSmallBiz Playbook Series
              </p>
              <div className="mt-2 flex items-end justify-between border-t border-foreground/15 pt-3">
                <div>
                  <p className="font-display text-sm font-bold text-foreground">GrowSmallBiz</p>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Workshop Edition
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] uppercase tracking-[0.16em] text-foreground/55">
                    First Edition
                  </p>
                  <p className="font-display text-[11px] font-semibold tracking-[0.1em] text-primary">
                    2026
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Spine sheen */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background/70 to-transparent" />
        </div>


        {/* Spiral binding */}
        <div className="absolute -left-2 inset-y-6 flex flex-col justify-between">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="block h-[7px] w-5 rounded-full border border-foreground/40 bg-gradient-to-r from-foreground/60 to-foreground/10 shadow-sm"
            />
          ))}
        </div>
      </div>

      {/* Ground shadow */}
      <div className="pointer-events-none mx-auto mt-5 h-6 w-[80%] rounded-[100%] bg-background/90 blur-xl transition-all duration-500 group-hover:w-[86%] group-hover:opacity-80" />
    </div>

    <p className="mt-5 max-w-sm text-center text-sm leading-relaxed text-muted-foreground">
      Receive this playbook at the end of the session and leave with your personalized AI
      Visibility Action Plan — yours to keep when you stay through the end of the workshop.
    </p>

    <ul className="mt-4 space-y-1.5 text-left">
      {[
        "AI Visibility Checklist",
        "AI Recommendation Scorecard",
        "90-Day Action Plan",
      ].map((item) => (
        <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground/80">
          <Check className="h-3.5 w-3.5 shrink-0 text-primary/70" />
          {item}
        </li>
      ))}
    </ul>

  </div>
);
