import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Send } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Benefits", href: "#benefits" },
  { label: "Funnel", href: "#funnel" },
  { label: "Payouts", href: "#payouts" },
  { label: "Tech", href: "#tech" },
  { label: "Support", href: "#support" },
  { label: "Titles", href: "#titles" },
  { label: "Traffic", href: "#traffic" },
];

const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#">
          <img src={logo} alt="Toon Hub" className="h-8 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="neon-outline" size="sm" asChild className="hidden sm:inline-flex">
            <a href="https://t.me/TimAIex" target="_blank" rel="noopener noreferrer">
              <Send className="w-4 h-4" />
              Manager's TG
            </a>
          </Button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-border/50 mt-3">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                {l.label}
              </a>
            ))}
            <Button variant="neon-outline" size="sm" asChild className="mt-2 w-fit">
              <a href="https://t.me/TimAIex" target="_blank" rel="noopener noreferrer">
                <Send className="w-4 h-4" />
                Manager's TG
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default StickyNav;
