import { Send } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <a href="#">
            <img src={logo} alt="Toon Hub" className="h-7 w-auto" />
          </a>
          <p className="text-xs text-muted-foreground mt-1">Premium Adult Webtoons — Affiliate Program</p>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#benefits" className="hover:text-foreground transition-colors">Переваги</a>
          <a href="#payouts" className="hover:text-foreground transition-colors">Виплати</a>
          <a
            href="https://t.me/TimAIex"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-neon hover:brightness-110 transition-all"
          >
            <Send className="w-3.5 h-3.5" /> Telegram
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Toon-Hub. All rights reserved. 18+ only.
      </div>
    </div>
  </footer>
);

export default Footer;
