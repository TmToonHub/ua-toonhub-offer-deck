import ScrollReveal from "@/components/ScrollReveal";
import { Cookie, Smartphone, Radio, Server } from "lucide-react";

const features = [
  { icon: Cookie, title: "1-Year Cookie TTL", desc: "365-day attribution window. No lost conversions." },
  { icon: Smartphone, title: "Cross-Device Tracking", desc: "Desktop → Mobile continuity built-in." },
  { icon: Radio, title: "Lead Postbacks", desc: "FREE registration postbacks for pixel training & optimization." },
  { icon: Server, title: "Affise Platform", desc: "Enterprise-grade S2S tracking for maximum reliability." },
];

const Tech = () => (
  <section id="tech" className="py-24">
    <div className="container">
      <ScrollReveal className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Tech & <span className="neon-text">Tracking</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Enterprise-grade infrastructure for serious affiliates.</p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 70}>
            <div className="flex items-start gap-4 rounded-xl border bg-card p-5 neon-border h-full">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <f.icon className="w-4.5 h-4.5 text-neon" />
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Tech;
