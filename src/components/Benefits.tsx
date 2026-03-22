import ScrollReveal from "@/components/ScrollReveal";
import { Rocket, Clapperboard, Eye, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Свіжий оффер з високим потенціалом",
    desc: "Ринок ще не «віджатий» — Станьте першими, хто почне масштабуватися на оффері, який раніше був доступний лише нашій внутрішній медіабаїнг команді",
  },
  {
    icon: Clapperboard,
    title: "In-house продакшн повного циклу",
    desc: "Постійний ріст бібліотеки: +3 нові тайтли та свіжі епізоди щомісяця для підтримки інтересу. Більше контенту — вищий CR, адже ми закриваємо потреби найрізноманітніших сегментів трафіку",
  },
  {
    icon: Eye,
    title: "Реалістична анатомія та топова графіка",
    desc: "Це не черговий дешевий хентай, а якісний арт-продукт. Це суттєво підвищує CTR ваших рекламних креативів. Висока якість арту конвертується у дешевий та якісний клік",
  },
  {
    icon: ShieldCheck,
    title: "Рішення для White-Hat джерел",
    desc: "Наявність як Explicit (18+), так і Censored контенту. Повна готовність до будь-якого джерела трафіку — від жорсткого адалту до «білих» мереж.",
  },
];

const Benefits = () => (
  <section id="benefits" className="py-24">
    <div className="container">
      <ScrollReveal className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Секрет високої конверсії <span className="neon-text">Toon-Hub</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-pretty">
          Якісний продукт з високим утриманням користувачів, а не черговий ресейл-оффер
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
