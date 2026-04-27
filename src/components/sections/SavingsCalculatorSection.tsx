import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Phone, TrendingUp, Calculator, Info, Wallet, PiggyBank, RotateCcw } from "lucide-react";
import { useUtm } from "@/hooks/use-utm";

const PRIMARY_CTA_URL = "https://lp.growsmallbiz.io/digital-growth-strategy-session";

// Capture-rate assumptions for MISSED calls (i.e. of the calls you currently miss, what % does each option recover?)
// A single FT human receptionist still misses after-hours, lunch, sick days, simultaneous calls.
// Realistic recovery of currently-missed calls: ~50%.
const HUMAN_RECOVERY_OF_MISSED = 0.5;
// AI Receptionist: 24/7, instant, parallel — recovers ~95% of currently-missed calls.
const AI_RECOVERY_OF_MISSED = 0.95;

const fmtMoney = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

interface ScenarioCardProps {
  title: string;
  subtitle: string;
  cost: number;
  callsStillMissed: number;
  revenueLost: number;
  net: number;
  variant: "danger" | "success";
  badge?: string;
  icon: typeof AlertTriangle;
}

const ScenarioCard = ({
  title,
  subtitle,
  cost,
  callsStillMissed,
  revenueLost,
  net,
  variant,
  badge,
  icon: Icon,
}: ScenarioCardProps) => {
  const styles = {
    danger: {
      border: "border-destructive/30",
      bg: "bg-destructive/5",
      accent: "text-destructive",
      iconBg: "bg-destructive/15 text-destructive",
      badgeBg: "bg-destructive/15 text-destructive border-destructive/30",
    },
    success: {
      border: "border-primary/40",
      bg: "bg-primary/5",
      accent: "text-primary",
      iconBg: "bg-primary/15 text-primary",
      badgeBg: "bg-primary/15 text-primary border-primary/40",
    },
  }[variant];

  return (
    <div className={`relative rounded-2xl border ${styles.border} ${styles.bg} p-6 flex flex-col h-full`}>
      {badge && (
        <span
          className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full border ${styles.badgeBg}`}
        >
          {badge}
        </span>
      )}

      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${styles.iconBg}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-base font-semibold text-white leading-tight">{title}</h4>
          <p className="text-xs text-slate-400">{subtitle}</p>
        </div>
      </div>

      <div className="space-y-2.5 text-sm flex-1">
        <div className="flex justify-between text-slate-300">
          <span>Monthly cost</span>
          <span className="font-semibold text-white">{fmtMoney(cost)}</span>
        </div>
        <div className="flex justify-between text-slate-300">
          <span>Calls still missed</span>
          <span className="font-semibold text-white">{Math.round(callsStillMissed)}/mo</span>
        </div>
        <div className="flex justify-between text-slate-300">
          <span>Revenue still lost</span>
          <span className={`font-semibold ${variant === "danger" ? "text-destructive/90" : "text-slate-400"}`}>
            {fmtMoney(revenueLost)}
          </span>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-white/10 text-center">
        <p className="text-xs text-slate-400 mb-1">Net monthly position</p>
        <p className={`text-3xl font-display font-bold ${styles.accent}`}>
          {net >= 0 ? "+" : ""}{fmtMoney(net)}
        </p>
      </div>
    </div>
  );
};

export const SavingsCalculatorSection = () => {
  const { buildUrl } = useUtm();

  const DEFAULTS = {
    missedCallsPerMonth: 60,
    avgValue: 500,
    conversionRate: 25,
    hasHuman: false,
    humanCost: 3500,
    aiCost: 399,
  };

  const [missedCallsPerMonth, setMissedCallsPerMonth] = useState(DEFAULTS.missedCallsPerMonth);
  const [avgValue, setAvgValue] = useState(DEFAULTS.avgValue);
  const [conversionRate, setConversionRate] = useState(DEFAULTS.conversionRate);
  const [hasHuman, setHasHuman] = useState(DEFAULTS.hasHuman);
  const [humanCost, setHumanCost] = useState(DEFAULTS.humanCost);
  const [aiCost, setAiCost] = useState(DEFAULTS.aiCost);

  const resetToDefaults = () => {
    setMissedCallsPerMonth(DEFAULTS.missedCallsPerMonth);
    setAvgValue(DEFAULTS.avgValue);
    setConversionRate(DEFAULTS.conversionRate);
    setHasHuman(DEFAULTS.hasHuman);
    setHumanCost(DEFAULTS.humanCost);
    setAiCost(DEFAULTS.aiCost);
  };

  const results = useMemo(() => {
    // Total revenue at risk from currently-missed calls
    const lostLeadsCurrent = missedCallsPerMonth * (conversionRate / 100);
    const revenueAtRisk = lostLeadsCurrent * avgValue;

    // "Without AI" baseline — depends on whether they have a human receptionist
    let baselineCost = 0;
    let baselineMissed = missedCallsPerMonth;
    let baselineRevenueLost = revenueAtRisk;

    if (hasHuman) {
      // Human recovers ~50% of currently-missed calls (still misses after-hours, lunch, sick days)
      baselineCost = humanCost;
      baselineMissed = missedCallsPerMonth * (1 - HUMAN_RECOVERY_OF_MISSED);
      baselineRevenueLost = revenueAtRisk * (1 - HUMAN_RECOVERY_OF_MISSED);
    }

    // With AI — recovers ~95% of currently-missed calls
    const aiMissed = missedCallsPerMonth * (1 - AI_RECOVERY_OF_MISSED);
    const aiRevenueLost = revenueAtRisk * (1 - AI_RECOVERY_OF_MISSED);

    // Net positions (revenue recovered − cost)
    // Baseline net = -(revenue still lost + cost)
    const baselineNet = -(baselineRevenueLost + baselineCost);
    const aiNet = -(aiRevenueLost + aiCost);

    // Headline: how much better is AI than the current baseline?
    const aiAdvantage = aiNet - baselineNet;

    return {
      revenueAtRisk,
      baselineCost,
      baselineMissed,
      baselineRevenueLost,
      baselineNet,
      aiMissed,
      aiRevenueLost,
      aiNet,
      aiAdvantage,
    };
  }, [missedCallsPerMonth, avgValue, conversionRate, hasHuman, humanCost, aiCost]);

  const ctaUrl = buildUrl(PRIMARY_CTA_URL, "savings-calculator");

  return (
    <div className="mt-12 max-w-6xl mx-auto animate-fade-up">
      <div className="bg-[#0f1f33]/80 border border-primary/20 rounded-3xl p-6 md:p-10 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Calculator className="w-5 h-5 text-primary" />
          <p className="text-primary font-medium text-sm uppercase tracking-wider">Interactive Calculator</p>
        </div>
        <h3 className="text-3xl md:text-4xl font-display font-bold text-center text-white mb-2">
          Calculate Your Missed-Revenue Opportunity
        </h3>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Drag the sliders to match your business. The math updates in real time.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Inputs */}
          <div className="space-y-7">
            <div className="flex justify-end -mb-3">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={resetToDefaults}
                className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 h-8 px-2.5 text-xs"
              >
                <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                Reset to defaults
              </Button>
            </div>
            {/* Missed calls per month */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm font-medium text-white">Missed calls per month</label>
                <span className="text-lg font-display font-bold text-primary">{missedCallsPerMonth}</span>
              </div>
              <Slider
                value={[missedCallsPerMonth]}
                onValueChange={(v) => setMissedCallsPerMonth(v[0])}
                min={5}
                max={500}
                step={5}
                aria-label="Missed calls per month"
              />
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Most owners underestimate this. Industry research shows 40–60% of inbound calls go unanswered. No exact number? Estimate ~30% of your total monthly call volume.
              </p>
            </div>

            {/* Avg customer value */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm font-medium text-white">Average value per booked customer</label>
                <span className="text-lg font-display font-bold text-primary">{fmtMoney(avgValue)}</span>
              </div>
              <Slider
                value={[avgValue]}
                onValueChange={(v) => setAvgValue(v[0])}
                min={50}
                max={5000}
                step={25}
                aria-label="Average value per booked customer"
              />
            </div>

            {/* Conversion rate */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm font-medium text-white">Lead-to-customer conversion rate</label>
                <span className="text-lg font-display font-bold text-primary">{conversionRate}%</span>
              </div>
              <Slider
                value={[conversionRate]}
                onValueChange={(v) => setConversionRate(v[0])}
                min={1}
                max={60}
                step={1}
                aria-label="Lead-to-customer conversion rate"
              />
            </div>

            {/* AI cost */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm font-medium text-white">AI Receptionist cost / month</label>
                <span className="text-lg font-display font-bold text-primary">{fmtMoney(aiCost)}</span>
              </div>
              <Slider
                value={[aiCost]}
                onValueChange={(v) => setAiCost(v[0])}
                min={299}
                max={499}
                step={10}
                aria-label="AI Receptionist monthly cost"
              />
              <p className="text-xs text-slate-500 mt-1">
                <span className="text-amber-400/90 font-medium">Illustrative only</span> — typical plan range. Actual cost varies by implementation, call volume, and integrations.
              </p>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Note: AI answers ~95% of missed calls 24/7, but recovered callers still convert at <strong className="text-slate-300">your normal {conversionRate}% rate</strong> set above — not 100%. The math already factors this in.
              </p>
            </div>

            {/* Human toggle */}
            <div className="border-t border-white/10 pt-6">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <label htmlFor="has-human" className="text-sm font-medium text-white">
                    I currently employ a human receptionist
                  </label>
                  <p className="text-xs text-slate-500 mt-0.5">Adjusts the baseline comparison</p>
                </div>
                <Switch id="has-human" checked={hasHuman} onCheckedChange={setHasHuman} />
              </div>

              {hasHuman && (
                <div className="mt-4 animate-fade-up">
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-medium text-white">Human receptionist cost / month</label>
                    <span className="text-lg font-display font-bold text-primary">{fmtMoney(humanCost)}</span>
                  </div>
                  <Slider
                    value={[humanCost]}
                    onValueChange={(v) => setHumanCost(v[0])}
                    min={2500}
                    max={6000}
                    step={100}
                    aria-label="Human receptionist monthly cost"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Fully-loaded: wages + payroll tax + benefits. One FT receptionist, ~40 hrs/week. A human still misses ~50% of currently-missed calls (after-hours, lunch, sick days, simultaneous calls).
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="space-y-5" aria-live="polite">
            {/* Headline */}
            <div className="text-center bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/30 rounded-2xl p-6">
              <div className="flex items-center justify-center gap-2 text-slate-300 text-sm mb-3">
                <TrendingUp className="w-4 h-4" />
                <span>You'd be better off by</span>
              </div>
              <p className="text-5xl md:text-6xl font-display font-bold bg-gradient-heading bg-clip-text text-transparent leading-none">
                {results.aiAdvantage * 12 >= 0 ? "+" : ""}{fmtMoney(results.aiAdvantage * 12)}
                <span className="text-2xl text-slate-400 font-normal">/year</span>
              </p>
              <p className="text-sm text-slate-400 mt-3">
                ≈ <span className="text-white font-semibold">{results.aiAdvantage >= 0 ? "+" : ""}{fmtMoney(results.aiAdvantage)}/mo</span> vs. {hasHuman ? "your current human receptionist" : "doing nothing"}
              </p>
            </div>

            {/* Scenario cards */}
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <ScenarioCard
                title={hasHuman ? "With Human Receptionist" : "Without AI Receptionist"}
                subtitle={hasHuman ? "Recovers ~50% of missed calls" : "All missed calls = lost revenue"}
                cost={results.baselineCost}
                callsStillMissed={results.baselineMissed}
                revenueLost={results.baselineRevenueLost}
                net={results.baselineNet}
                variant="danger"
                icon={AlertTriangle}
              />
              <ScenarioCard
                title="With AI Receptionist"
                subtitle="Recovers ~95% of missed calls"
                cost={aiCost}
                callsStillMissed={results.aiMissed}
                revenueLost={results.aiRevenueLost}
                net={results.aiNet}
                variant="success"
                badge="24/7 coverage"
                icon={CheckCircle2}
              />
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" asChild className="flex-1">
                <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                  Get this for my business
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="flex-1">
                <a href="tel:+19258863724">
                  <Phone className="w-4 h-4 mr-2" /> Call (925) 886-3724
                </a>
              </Button>
            </div>
            <p className="text-xs text-center text-slate-500">No credit card. Free strategy call.</p>
          </div>
        </div>

        {/* Methodology / Sources */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <details className="group">
            <summary className="flex items-center gap-2 text-sm text-slate-400 hover:text-white cursor-pointer list-none">
              <Info className="w-4 h-4" />
              <span className="underline decoration-dotted underline-offset-4">
                Methodology &amp; sources
              </span>
            </summary>
            <div className="mt-4 text-xs text-slate-400 space-y-2 leading-relaxed">
              <p>
                <strong className="text-slate-300">Recovery vs. conversion:</strong> "Recovery" means the call is <em>answered</em>. AI answers ~95% of currently-missed calls; a single FT human recovers ~50% (still misses after-hours, lunch, sick days, simultaneous calls). Answered callers then convert to paying customers at <em>your normal lead-to-customer rate</em> (the slider above) — not 100%. Revenue numbers are calculated as <code className="text-slate-300">missed calls × recovery rate × conversion rate × avg customer value</code>.
              </p>
              <p>
                <strong className="text-slate-300">Why instant answer matters:</strong> Harvard Business Review research shows responding to inbound leads within 5 minutes makes you 21× more likely to qualify them.
              </p>
              <p>
                <strong className="text-slate-300">Phone calls drive purchases:</strong> Phone calls influence over $1 trillion in U.S. consumer spending annually (BIA/Kelsey), and 60% of customers prefer to call small businesses about purchases (Google/Ipsos).
              </p>
              <p className="text-slate-500 italic">
                Estimates only — actual results vary by industry, lead quality, and operational factors. Not a guarantee.
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};
