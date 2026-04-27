import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Phone, TrendingUp, Calculator, Info } from "lucide-react";
import { useUtm } from "@/hooks/use-utm";

const PRIMARY_CTA_URL = "https://lp.growsmallbiz.io/digital-growth-strategy-session";

// Coverage assumptions (research-backed; see footnote citations)
// Human receptionist (single FT, business hours only) ~ captures 40% of total monthly calls
const HUMAN_COVERAGE = 0.4;
// "Do nothing" scenario (no receptionist, owner/staff catch some) ~ captures 38% of calls
// Derived from Invoca: ~62% of business calls go unanswered.
const DO_NOTHING_COVERAGE = 0.38;
// AI receptionist: 24/7 coverage, ~97% answer rate
const AI_COVERAGE = 0.97;

const fmtMoney = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

interface ScenarioCardProps {
  title: string;
  cost: number;
  captured: number;
  totalLeads: number;
  net: number;
  variant: "danger" | "warning" | "success";
  badge?: string;
}

const ScenarioCard = ({ title, cost, captured, totalLeads, net, variant, badge }: ScenarioCardProps) => {
  const styles = {
    danger: {
      border: "border-destructive/30",
      bg: "bg-destructive/5",
      accent: "text-destructive",
      badgeBg: "bg-destructive/15 text-destructive border-destructive/30",
    },
    warning: {
      border: "border-amber-500/30",
      bg: "bg-amber-500/5",
      accent: "text-amber-400",
      badgeBg: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    },
    success: {
      border: "border-primary/40",
      bg: "bg-primary/5",
      accent: "text-primary",
      badgeBg: "bg-primary/15 text-primary border-primary/40",
    },
  }[variant];

  const lostLeads = totalLeads - captured;

  return (
    <div className={`relative rounded-2xl border ${styles.border} ${styles.bg} p-6 flex flex-col h-full`}>
      {badge && (
        <span
          className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full border ${styles.badgeBg}`}
        >
          {badge}
        </span>
      )}
      <h4 className="text-lg font-semibold text-white text-center mb-4">{title}</h4>

      <div className="space-y-3 text-sm flex-1">
        <div className="flex justify-between text-slate-300">
          <span>Monthly cost</span>
          <span className="font-semibold text-white">{fmtMoney(cost)}</span>
        </div>
        <div className="flex justify-between text-slate-300">
          <span>Leads captured</span>
          <span className="font-semibold text-white">{Math.round(captured)} / {Math.round(totalLeads)}</span>
        </div>
        <div className="flex justify-between text-slate-300">
          <span>Leads lost</span>
          <span className="font-semibold text-destructive/90">{Math.round(lostLeads)}</span>
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

  const [callsPerMonth, setCallsPerMonth] = useState(200);
  const [avgValue, setAvgValue] = useState(500);
  const [conversionRate, setConversionRate] = useState(25);
  const [hasHuman, setHasHuman] = useState(false);
  const [humanCost, setHumanCost] = useState(3500);
  const [aiCost, setAiCost] = useState(399);

  const results = useMemo(() => {
    const totalLeads = callsPerMonth * (conversionRate / 100);

    // Captured leads per scenario (calls answered × conversion already in totalLeads scale)
    const doNothingCaptured = totalLeads * DO_NOTHING_COVERAGE;
    const humanCaptured = totalLeads * HUMAN_COVERAGE;
    const aiCaptured = totalLeads * AI_COVERAGE;

    // Revenue per scenario
    const doNothingRevenue = doNothingCaptured * avgValue;
    const humanRevenue = humanCaptured * avgValue;
    const aiRevenue = aiCaptured * avgValue;

    // Net = revenue captured − cost of that scenario
    const doNothingNet = doNothingRevenue - 0;
    const humanNet = humanRevenue - humanCost;
    const aiNet = aiRevenue - aiCost;

    // Headline savings (AI vs best alternative the user has today)
    const baseline = hasHuman ? humanNet : doNothingNet;
    const aiAdvantage = aiNet - baseline;

    return {
      totalLeads,
      doNothingCaptured,
      humanCaptured,
      aiCaptured,
      doNothingNet,
      humanNet,
      aiNet,
      aiAdvantage,
    };
  }, [callsPerMonth, avgValue, conversionRate, hasHuman, humanCost, aiCost]);

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
            {/* Calls per month */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm font-medium text-white">Inbound calls per month</label>
                <span className="text-lg font-display font-bold text-primary">{callsPerMonth}</span>
              </div>
              <Slider
                value={[callsPerMonth]}
                onValueChange={(v) => setCallsPerMonth(v[0])}
                min={20}
                max={2000}
                step={10}
                aria-label="Inbound calls per month"
              />
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
              <p className="text-xs text-slate-500 mt-1">Typical GrowSmallBiz AI Receptionist plan range</p>
            </div>

            {/* Human toggle */}
            <div className="border-t border-white/10 pt-6">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <label htmlFor="has-human" className="text-sm font-medium text-white">
                    I currently employ a human receptionist
                  </label>
                  <p className="text-xs text-slate-500 mt-0.5">Adds a side-by-side cost comparison</p>
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
                    Fully-loaded: wages + payroll tax + benefits. One FT receptionist, ~40 hrs/week.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="space-y-5" aria-live="polite">
            {/* Headline */}
            <div className="text-center bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/30 rounded-2xl p-6">
              <div className="flex items-center justify-center gap-2 text-slate-300 text-sm mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>AI advantage vs. {hasHuman ? "your current human receptionist" : "doing nothing"}</span>
              </div>
              <p className="text-4xl md:text-5xl font-display font-bold bg-gradient-heading bg-clip-text text-transparent">
                {results.aiAdvantage >= 0 ? "+" : ""}{fmtMoney(results.aiAdvantage)}
                <span className="text-xl text-slate-400 font-normal">/mo</span>
              </p>
              <p className="text-sm text-slate-400 mt-2">
                = {fmtMoney(results.aiAdvantage * 12)} per year
              </p>
            </div>

            {/* Scenario cards */}
            <div className={`grid gap-4 ${hasHuman ? "md:grid-cols-3" : "md:grid-cols-2"} pt-2`}>
              <ScenarioCard
                title="Do Nothing"
                cost={0}
                captured={results.doNothingCaptured}
                totalLeads={results.totalLeads}
                net={results.doNothingNet}
                variant="danger"
              />
              {hasHuman && (
                <ScenarioCard
                  title="Human Receptionist"
                  cost={humanCost}
                  captured={results.humanCaptured}
                  totalLeads={results.totalLeads}
                  net={results.humanNet}
                  variant="warning"
                />
              )}
              <ScenarioCard
                title="AI Receptionist"
                cost={aiCost}
                captured={results.aiCaptured}
                totalLeads={results.totalLeads}
                net={results.aiNet}
                variant="success"
                badge="24/7 coverage"
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
                <strong className="text-slate-300">Coverage assumptions:</strong> "Do nothing" captures ~38% of leads (industry research shows ~62% of business calls go unanswered). A single full-time human receptionist captures ~40% (business hours only, ~40 of 168 weekly hours, weighted for daytime call density). AI captures 97% (24/7, instant answer).
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
