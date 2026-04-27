import { PhoneOff, PhoneIncoming, TrendingUp } from "lucide-react";

interface IndustryStat {
  industry: string;
  unanswered: number;
  phoneLeads: number;
  conversion: number;
  /** Tailwind gradient classes for the headline number / accent ring */
  accent: string;
  /** Tailwind background tint for the card surface */
  surface: string;
  /** Tailwind border tint */
  border: string;
}

// Source: Invoca — "How Much Missed Sales Calls Cost Home Services Businesses"
// and Invoca Call Conversion Industry Benchmarks Report 2025
const INDUSTRIES: IndustryStat[] = [
  {
    industry: "Home Services",
    unanswered: 27,
    phoneLeads: 47,
    conversion: 29,
    accent: "from-orange-400 to-orange-600",
    surface: "bg-orange-500/5",
    border: "border-orange-500/30",
  },
  {
    industry: "Dental",
    unanswered: 27,
    phoneLeads: 37,
    conversion: 26,
    accent: "from-cyan-400 to-cyan-600",
    surface: "bg-cyan-500/5",
    border: "border-cyan-500/30",
  },
  {
    industry: "Auto Dealerships",
    unanswered: 21,
    phoneLeads: 37,
    conversion: 33,
    accent: "from-amber-400 to-amber-600",
    surface: "bg-amber-500/5",
    border: "border-amber-500/30",
  },
  {
    industry: "Auto Service Centers",
    unanswered: 20,
    phoneLeads: 39,
    conversion: 51,
    accent: "from-violet-400 to-violet-600",
    surface: "bg-violet-500/5",
    border: "border-violet-500/30",
  },
  {
    industry: "Physical Therapy",
    unanswered: 28,
    phoneLeads: 26,
    conversion: 39,
    accent: "from-rose-400 to-rose-600",
    surface: "bg-rose-500/5",
    border: "border-rose-500/30",
  },
  {
    industry: "Senior Living",
    unanswered: 37,
    phoneLeads: 17,
    conversion: 38,
    accent: "from-emerald-400 to-emerald-600",
    surface: "bg-emerald-500/5",
    border: "border-emerald-500/30",
  },
];

const StatRow = ({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof PhoneOff;
  label: string;
  value: number;
}) => (
  <div className="flex items-center justify-between py-2 border-t border-white/5 first:border-t-0">
    <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wide">
      <Icon className="w-3.5 h-3.5" />
      <span>{label}</span>
    </div>
    <span className="text-xl font-display font-bold text-white tabular-nums">{value}%</span>
  </div>
);

export const IndustryCallBenchmarksSection = () => {
  return (
    <section className="relative py-20 bg-[#0a1628] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(249,115,22,0.08),_transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="font-medium mb-4 text-primary">Industry Benchmarks</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-heading bg-clip-text text-transparent">
            The Numbers Don't Lie — Your Industry Is Bleeding Calls
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Real benchmarks from millions of analyzed calls across 6 industries.{" "}
            <span className="text-white font-semibold">1 in 4 calls go unanswered</span> — every single one is a customer your competitor will gladly take.
          </p>
        </div>

        {/* Headline mega-stat band */}
        <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-5xl mx-auto">
          {[
            { value: "27%", label: "Avg. unanswered call rate", sub: "across all industries" },
            { value: "37%", label: "Of inbound calls are leads", sub: "high-intent buyers" },
            { value: "<3%", label: "Of voicemails get a callback", sub: "lost forever" },
          ].map((m) => (
            <div
              key={m.label}
              className="text-center bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl px-6 py-7"
            >
              <p className="text-5xl md:text-6xl font-display font-extrabold bg-gradient-to-br from-primary to-orange-300 bg-clip-text text-transparent leading-none">
                {m.value}
              </p>
              <p className="text-white font-semibold mt-3 text-sm">{m.label}</p>
              <p className="text-slate-500 text-xs mt-1">{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Industry grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.industry}
              className={`relative rounded-2xl border ${ind.border} ${ind.surface} backdrop-blur-sm p-6 hover:scale-[1.02] transition-transform duration-300 animate-fade-up`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {/* Industry name */}
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-display font-bold text-white">{ind.industry}</h3>
              </div>

              {/* Hero number — unanswered calls */}
              <div className="mb-5">
                <p
                  className={`text-6xl md:text-7xl font-display font-extrabold bg-gradient-to-br ${ind.accent} bg-clip-text text-transparent leading-none tabular-nums`}
                >
                  {ind.unanswered}%
                </p>
                <p className="text-xs uppercase tracking-wider text-slate-400 mt-2 flex items-center gap-1.5">
                  <PhoneOff className="w-3.5 h-3.5" />
                  Calls go unanswered
                </p>
              </div>

              {/* Supporting stats */}
              <div className="space-y-1">
                <StatRow icon={PhoneIncoming} label="Phone leads" value={ind.phoneLeads} />
                <StatRow icon={TrendingUp} label="Lead conversion" value={ind.conversion} />
              </div>
            </div>
          ))}
        </div>

        {/* Source */}
        <p className="text-center text-xs text-slate-500 mt-10">
          Source: Invoca Call Conversion Industry Benchmarks — analysis of millions of inbound calls across 6 verticals.
        </p>
      </div>
    </section>
  );
};
