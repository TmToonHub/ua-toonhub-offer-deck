import ScrollReveal from "@/components/ScrollReveal";
import { Users, Paintbrush, LayoutTemplate, Lightbulb } from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Character Packs",
    desc: "High-quality character renders on transparent backgrounds (PNG). Available in both Explicit (18+) and Censored (Clean) versions.",
  },
  {
    icon: Paintbrush,
    title: "Design Assets",
    desc: "A complete kit including backgrounds, buttons, speech bubbles, brand fonts, and UI elements for your custom creatives.",
  },
  {
    icon: LayoutTemplate,
    title: "High-Converting Landings",
    desc: "Ready-to-use landing pages optimized for maximum EPC.",
  },
  {
    icon: Lightbulb,
    title: "In-house Insights",
    desc: "Exclusive access to winning angles, creative strategies, and ROI-positive approaches used by our internal media buying team.",
  },
];

const PartnerSupport = () => (
  <section id="support" className="py-24 bg-surface-bright/50">
    <div className="container">
      <ScrollReveal className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Partner <span className="neon-text">Support</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Everything you need to launch and scale — provided by us.</p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 80}>
            <div className="group relative rounded-xl border bg-card p-6 neon-border h-full">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-neon" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerSupport;
