import { Sparkles } from "lucide-react";

/**
 * Premium 3D spiral-bound workbook mockup used as the hero bonus visual.
 * Pure CSS/SVG so it stays crisp, themable and prerender-safe.
 */
export const WorkbookMockup = () => (
  <div className="mt-8 flex flex-col items-center">
    <div className="group relative [perspective:1400px]">
      {/* Bonus badge */}
      <span className="absolute -right-3 -top-3 z-20 inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-lg shadow-primary/40 md:-right-5 md:-top-4">
        <Sparkles className="h-3.5 w-3.5" />
        Included FREE with Registration
      </span>

      {/* Book */}
      <div className="relative w-[17rem] transition-transform duration-500 ease-out [transform:rotateY(17deg)_rotateX(6deg)] group-hover:-translate-y-2 group-hover:[transform:rotateY(15deg)_rotateX(5deg)] md:w-[19rem]">
        {/* Page stack (thickness) */}
        <div className="absolute inset-y-2 -right-2 rounded-r-md bg-gradient-to-r from-foreground/70 to-foreground/25 [width:14px]" />
        <div className="absolute inset-y-3 -right-3 rounded-r-md bg-foreground/20 [width:14px]" />

        {/* Cover */}
        <div className="relative overflow-hidden rounded-md rounded-l-sm border border-primary/25 bg-[hsl(210_55%_10%)] shadow-2xl shadow-background/80 ring-1 ring-inset ring-foreground/5">
          {/* Abstract AI pattern */}
          <svg
            aria-hidden="true"
            viewBox="0 0 300 400"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.5]"
          >
            <defs>
              <radialGradient id="wbGlow" cx="80%" cy="12%" r="70%">
                <stop offset="0%" stopColor="hsl(18 85% 60%)" stopOpacity="0.45" />
                <stop offset="100%" stopColor="hsl(18 85% 60%)" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="wbGlow2" cx="10%" cy="95%" r="60%">
                <stop offset="0%" stopColor="hsl(188 78% 45%)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="hsl(188 78% 45%)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="300" height="400" fill="url(#wbGlow)" />
            <rect width="300" height="400" fill="url(#wbGlow2)" />
            <g stroke="hsl(188 78% 60%)" strokeOpacity="0.35" strokeWidth="1">
              <path d="M40 300 L110 250 L180 288 L250 232" fill="none" />
              <path d="M40 340 L110 300 L180 330 L250 285" fill="none" />
              <path d="M110 250 L110 300 M180 288 L180 330 M250 232 L250 285" />
            </g>
            <g fill="hsl(18 85% 62%)">
              {[
                [40, 300],
                [110, 250],
                [180, 288],
                [250, 232],
              ].map(([cx, cy]) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" />
              ))}
            </g>
          </svg>

          {/* Cover content */}
          <div className="relative z-10 flex aspect-[3/4] flex-col justify-between p-6 md:p-7">
            <div>
              <span className="inline-block rounded-full border border-primary/50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-primary">
                Workshop Edition
              </span>
              <h3 className="mt-5 font-display text-[1.65rem] font-extrabold leading-[1.1] text-foreground md:text-3xl">
                AI Visibility
                <br />
                Workbook
              </h3>
              <div className="mt-3 h-[3px] w-14 rounded-full bg-primary" />
              <p className="mt-3 text-[11px] font-medium leading-relaxed tracking-wide text-foreground/75 md:text-xs">
                Measure • Improve • Get Recommended by AI
              </p>
            </div>

            <div className="border-t border-foreground/15 pt-3">
              <p className="font-display text-sm font-bold text-foreground">GrowSmallBiz</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Workshop Edition
              </p>
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

    <p className="mt-4 max-w-md text-center text-sm leading-relaxed text-muted-foreground md:text-base">
      Leave with a practical workbook, checklists, and an action plan you can use long
      after the workshop ends.
    </p>
  </div>
);
