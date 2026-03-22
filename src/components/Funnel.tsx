import ScrollReveal from "@/components/ScrollReveal";
import { BookOpen, Gift, Lock, CreditCard, Globe, DollarSign, Wallet } from "lucide-react";

const steps = [
  { icon: BookOpen, num: "01", title: "Landing on Prologue", desc: "User starts with the prologue or the first episode." },
  { icon: Gift, num: "02", title: "Free 2-Episode Engagement", desc: "Users read 2 free episodes to get hooked on the story." },
  { icon: Lock, num: "03", title: "Cliffhanger Paywall", desc: "A strategic paywall appears at the peak of the plot." },
  { icon: CreditCard, num: "04", title: "Subscription (FTD)", desc: "The user converts into a paid subscriber to continue reading." },
];

const Funnel = () => (
  <section id="funnel" className="py-24 bg-surface-bright/50">
    <div className="container">
      <ScrollReveal className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Funnel & <span className="neon-text">Monetization</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-pretty">
          Every step is engineered for maximum conversion. From first click to paid subscriber.
        </p>
      </ScrollReveal>

      {/* Step-by-step flow */}
      <div className="relative max-w-3xl mx-auto mb-20">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-neon/60 via-neon/20 to-transparent hidden sm:block" />
        <div className="space-y-8">
          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 120}>
              <div className="flex gap-5 sm:gap-8 items-start group">
                <div className="relative z-10 w-12 h-12 shrink-0 rounded-xl bg-card border flex items-center justify-center neon-border">
                  <s.icon className="w-5 h-5 text-neon" />
                </div>
                <div className="pt-1">
                  <span className="text-xs font-bold text-neon tracking-widest">{s.num}</span>
                  <h3 className="text-lg font-semibold mt-1 mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Sub-sections */}
      <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
        <ScrollReveal>
            <div className="rounded-xl border bg-card p-6 h-full neon-border">
            <Globe className="w-6 h-6 text-neon mb-4" />
            <h3 className="font-semibold text-base mb-2">GEOs & Target Audience</h3>
            <p className="text-sm text-muted-foreground mb-2"><strong className="text-foreground">Primary:</strong> Tier-1 English Speaking (US, UK, CA, AU, NZ).</p>
            <p className="text-sm text-muted-foreground"><strong className="text-foreground">Scale:</strong> We accept Worldwide (WW) traffic.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
            <div className="rounded-xl border bg-card p-6 h-full neon-border">
            <DollarSign className="w-6 h-6 text-neon mb-4" />
            <h3 className="font-semibold text-base mb-2">Low-Barrier Pricing</h3>
            <p className="text-sm text-muted-foreground mb-3">A low entry point — perfect trigger for impulsive payments:</p>
            <div className="space-y-1.5">
              {[
                { plan: "1 Week", price: "$7.99" },
                { plan: "4 Weeks", price: "$13.99" },
                { plan: "12 Weeks", price: "$24.99" },
              ].map((p) => (
                <div key={p.plan} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{p.plan}</span>
                  <span className="font-semibold neon-text">{p.price}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="rounded-xl border bg-card p-6 h-full neon-border">
            <Wallet className="w-6 h-6 text-neon mb-4" />
            <h3 className="font-semibold text-base mb-2">Seamless Payments</h3>
            <p className="text-sm text-muted-foreground mb-2">Apple Pay, Google Pay, PayPal, and Bank Cards.</p>
            <p className="text-sm text-muted-foreground">A polished, ultra-short payment path ensures the highest possible Checkout-to-Paid ratio.</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default Funnel;
