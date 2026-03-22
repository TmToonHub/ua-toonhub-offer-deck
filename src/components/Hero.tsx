import logo from "@/assets/logo.png";

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-neon/5 blur-[100px]" />
    </div>

    <div className="container relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <div
          className="flex justify-center mb-8 animate-fade-up"
        >
          <img src={logo} alt="Toon Hub" className="h-16 sm:h-20 md:h-24 w-auto" />
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] mb-6 animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          Premium Adult Webtoons
          <div className="mt-3" />
          <span className="neon-text">(Direct Offer)</span>
        </h1>

        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-up text-pretty"
          style={{ animationDelay: "200ms" }}
        >
          Original digital comics for a male audience. In-house production,
          custom funnels, and superior realistic art.
        </p>

        <div
          className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto animate-fade-up"
          style={{ animationDelay: "350ms" }}
        >
          {[
            { value: "$35+", label: "Tier-1 PPS" },
            { value: "WW", label: "Targeting" },
            { value: "7-Day", label: "Weekly Payouts" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold neon-text">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
