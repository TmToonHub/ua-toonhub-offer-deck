import ScrollReveal from "@/components/ScrollReveal";
import { Rocket, Clapperboard, Eye, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Fresh & Scalable Offer",
    desc: "The market isn't saturated. We are just moving from exclusive in-house buying to a public CPA model—be among the first to scale.",
  },
  {
    icon: Clapperboard,
    title: "In-house Production",
    desc: "Direct ownership of all titles. We launch 2–3 new titles every month and add fresh episodes to existing ones. Continuous content updates expand your audience reach and boost conversion rates across all interests.",
  },
  {
    icon: Eye,
    title: "Superior Adult Realism",
    desc: "Our art style stands out with realistic anatomy, lighting, and textures—far beyond standard \"cardboard\" anime. This significantly boosts CTR on your creatives.",
  },
  {
    icon: ShieldCheck,
    title: "White-Hat Ready",
    desc: "We provide two types of assets: Explicit (18+) for adult networks and organic traffic, and Censored (Clean) fully compliant funnels for \"hard\" sources without risk of bans.",
  },
];

const Benefits = () => (
  <section id="benefits" className="py-24">
    <div className="container">
      <ScrollReveal className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Why Toon-Hub <span className="neon-text">Converts</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-pretty">
          Premium product with real retention — not another recycled offer.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {benefits.map((b, i) => (
          <ScrollReveal key={b.title} delay={i * 80}>
            <div className="group relative rounded-xl border bg-card p-6 neon-border h-full">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <b.icon className="w-5 h-5 text-neon" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
