import ScrollReveal from "@/components/ScrollReveal";
import { BookOpen, Gift, Lock, CreditCard, Globe, DollarSign, Wallet } from "lucide-react";

const steps = [
  { icon: BookOpen, num: "01", title: "Точка входу: Пролог", desc: "Юзер потрапляє на сторінку з початком історії для знайомства з контентом" },
  { icon: Gift, num: "02", title: "Прогрів через 2 безкоштовні серії", desc: "Безкоштовний доступ до перших розділів формує звичку та бажання читати далі" },
  { icon: Lock, num: "03", title: "Стратегічний Paywall на піку сюжету", desc: "Пейвол спрацьовує саме тоді, коли користувач найбільше хоче дізнатися розв'язку" },
  { icon: CreditCard, num: "04", title: "Оформлення підписки (FTD)", desc: "Користувач платить за повний доступ до бібліотеки, приносячи вам конверсію та виплату" },
];

const Funnel = () => (
  <section id="funnel" className="py-24 bg-surface-bright/50">
    <div className="container">
      <ScrollReveal className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Воронка та <span className="neon-text">Монетизація</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-pretty">
          Кожен етап воронки вивірений для отримання найвищого CR
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
            <h3 className="font-semibold text-base mb-2">ГЕО та Трафік</h3>
            <p className="text-sm text-muted-foreground mb-2"><strong className="text-foreground">Основний фокус:</strong> Tier-1 англомовні країни (US, UK, CA, AU, NZ)</p>
            <p className="text-sm text-muted-foreground"><strong className="text-foreground">Скейл:</strong> Ми приймаємо Worldwide (WW) трафік</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
            <div className="rounded-xl border bg-card p-6 h-full neon-border">
            <DollarSign className="w-6 h-6 text-neon mb-4" />
            <h3 className="font-semibold text-base mb-2">Низький поріг входу</h3>
            <p className="text-sm text-muted-foreground mb-3">Доступна вартість — ідеальний тригер для імпульсивних оплат</p>
            <div className="space-y-1.5">
              {[
                { plan: "1 Тиждень", price: "$7.99" },
                { plan: "4 Тижні", price: "$13.99" },
                { plan: "12 Тижнів", price: "$24.99" },
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
            <h3 className="font-semibold text-base mb-2">Зручні методи оплати</h3>
            <p className="text-sm text-muted-foreground mb-2">Повний набір: Apple Pay, Google Pay, PayPal та карти.</p>
            <p className="text-sm text-muted-foreground">Короткий шлях до покупки гарантує найвищий CR з переходу в оплату</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default Funnel;
