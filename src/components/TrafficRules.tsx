import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle2, XCircle } from "lucide-react";

const allowed = [
  "Social (FB / TikTok)",
  "SEO / Content sites",
  "UGC (Organic)",
  "Adult Tubes",
  "Push notifications",
  "Popunder",
];

const prohibited = [
  "Incentive traffic, Fraud, Multi-accounting, Chargebacks",
  "Mislead (promising non-existent features or fake functionality)",
];

const TrafficRules = () => (
  <section id="traffic" className="py-24 bg-surface-bright/50">
    <div className="container">
      <ScrollReveal className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Traffic <span className="neon-text">Rules</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Know what's accepted before you launch.</p>
      </ScrollReveal>

      <div className="max-w-2xl mx-auto space-y-5">
        <ScrollReveal>
          <div className="rounded-xl border border-green/30 bg-green/5 p-6">
            <h3 className="text-sm font-semibold text-green mb-4">✅ Allowed</h3>
            <ul className="space-y-3">
              {allowed.map((a) => (
                <li key={a} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6">
            <h3 className="text-sm font-semibold text-destructive mb-4">🚫 Prohibited</h3>
            <ul className="space-y-3">
              {prohibited.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm">
                  <XCircle className="w-4 h-4 text-destructive shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="rounded-xl border border-amber/30 bg-amber/5 p-5">
            <h4 className="text-sm font-semibold text-amber mb-2">GEO Restrictions (Blacklist)</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Blocked Countries (Government Policies):</strong> UAE, Singapore, Qatar, Turkey
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              <strong className="text-foreground">US Restricted States (Age Verification Laws):</strong> AR, LA, MS, MT, TX, UT, VA
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default TrafficRules;
