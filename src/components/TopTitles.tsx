import ScrollReveal from "@/components/ScrollReveal";
import comic1 from "@/assets/comic-1.webp";
import comic2 from "@/assets/comic-2.webp";
import comic3 from "@/assets/comic-3.webp";
import comic4 from "@/assets/comic-4.webp";

const titles = [
  { img: comic1, name: "Neighbor's Curse", genre: "Uncensored / Romance / Comedy", episodes: 12, link: "https://toon-hub.com/comics/neighbors-curse/?verification=1" },
  { img: comic2, name: "My Sister Is The Campus Queen", genre: "Uncensored / Family / Exclusive", episodes: 8, link: "https://toon-hub.com/comics/my-sister-is-the-campus-queen/?verification=1" },
  { img: comic3, name: "Stepmom's Dirty Deal", genre: "Uncensored / Family / Cheating", episodes: 5, link: "https://toon-hub.com/comics/stepmoms-dirty-deal/?verification=1" },
  { img: comic4, name: "Pizza Boy vs MILFs", genre: "Uncensored / MILF", episodes: 6, link: "https://toon-hub.com/comics/pizza-boy-vs-milfs/?verification=1" },
];

const TopTitles = () => (
  <section id="titles" className="py-24">
    <div className="container">
      <ScrollReveal className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Top <span className="neon-text">Titles</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Premium in-house content your audience hasn't seen before.</p>
      </ScrollReveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {titles.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 100} className="h-full">
            <a
              href={t.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full rounded-xl border border-border bg-card overflow-hidden hover:neon-border transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold text-base mb-1">{t.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{t.genre}</p>
                <p className="text-sm neon-text mt-auto">{t.episodes} episodes</p>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TopTitles;
