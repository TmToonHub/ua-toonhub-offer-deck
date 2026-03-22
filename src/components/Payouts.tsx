import ScrollReveal from "@/components/ScrollReveal";
import { DollarSign, Clock, Wallet, TrendingUp, Shield } from "lucide-react";

const Payouts = () => (
  <section id="payouts" className="py-24 bg-surface-bright/50">
    <div className="container">
      <ScrollReveal className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Financial <span className="neon-text">Conditions</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">PPS (Pay Per Sale) — payout per active subscription.</p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="rounded-xl border neon-glow-box bg-card p-8 text-center h-full neon-border">
            <div className="text-2xl font-black neon-text mx-auto mb-4">PAY</div>
            <div className="text-4xl font-black neon-text mb-2">$35+</div>
            <div className="text-sm font-semibold mb-1">Tier-1 PPS</div>
            <div className="text-sm text-muted-foreground">US, UK, CA, AU, NZ</div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="rounded-xl border bg-card p-8 text-center h-full neon-border">
            <div className="text-2xl font-black neon-text mx-auto mb-4">PAY</div>
            <div className="text-4xl font-black neon-text mb-2">$10–20</div>
            <div className="text-sm font-semibold mb-1">Worldwide PPS</div>
            <div className="text-sm text-muted-foreground">Depending on GEO — ideal for Social & UGC traffic</div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="rounded-xl border bg-card p-8 text-center h-full neon-border">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-neon" />
              <Wallet className="w-6 h-6 text-neon" />
            </div>
            <div className="text-xl font-bold mb-2">Weekly Payouts</div>
            <div className="text-sm text-muted-foreground mb-1">USDT (TRC20) or Wire</div>
            <div className="text-sm text-muted-foreground">Custom schedules for top-tier affiliates</div>
          </div>
        </ScrollReveal>
      </div>

      <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto mt-5">
        <ScrollReveal delay={250}>
          <div className="rounded-xl border bg-card p-6 h-full neon-border">
            <TrendingUp className="w-5 h-5 text-neon mb-3" />
            <h4 className="font-semibold text-sm mb-1">Scale-Up Bumps</h4>
            <p className="text-sm text-muted-foreground">Higher rates available for high-volume partners with proven quality.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="rounded-xl border bg-card p-6 h-full neon-border">
            <DollarSign className="w-5 h-5 text-neon mb-3" />
            <h4 className="font-semibold text-sm mb-1">$0 Minimum Payout</h4>
            <p className="text-sm text-muted-foreground">We cash out any amount. No thresholds.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={350}>
          <div className="rounded-xl border bg-card p-6 h-full neon-border">
            <Shield className="w-5 h-5 text-neon mb-3" />
            <h4 className="font-semibold text-sm mb-1">Trial Terms</h4>
            <p className="text-sm text-muted-foreground">Test cap: 50 subscriptions. 14-day hold for quality verification (new partners only).</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default Payouts;
