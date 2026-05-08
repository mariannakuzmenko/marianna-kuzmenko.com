import { Link } from "react-router-dom";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="relative mt-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-soft)" }} />
      <div className="blob blob-pink" style={{ width: 380, height: 380, top: "-80px", right: "10%" }} />
      <div className="container-editorial py-24 relative">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <img
              src={logo}
              alt="Marianna Kuzmenko"
              className="h-12 md:h-14 w-auto object-contain mb-8"
              style={{ filter: "drop-shadow(0 4px 18px hsl(var(--sky-deep) / 0.35))" }}
            />
            <p className="eyebrow mb-6">Lass uns reden</p>
            <h2 className="display-md mb-8">
              Bereit für eine Website,<br />
              die wirklich <em className="text-rose not-italic">funktioniert</em>?
            </h2>
            <a
              href="mailto:hello@mariannakuzmenko.de"
              className="btn-pink"
            >
              <Mail size={16} strokeWidth={1.6} />
              hello@mariannakuzmenko.de
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Navigation</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="underline-draw">Startseite</Link></li>
              <li><Link to="/ueber-mich" className="underline-draw">Über mich</Link></li>
              <li><Link to="/webentwicklung" className="underline-draw">Webentwicklung</Link></li>
              <li><Link to="/seo" className="underline-draw">SEO Optimierung</Link></li>
              <li><Link to="/projekte" className="underline-draw">Projekte</Link></li>
              <li><Link to="/blog" className="underline-draw">Blog</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Standort</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Freelancer Webdesigner<br />
              Deutschland · Remote weltweit
            </p>
            <p className="eyebrow mt-8 mb-4">Folgen</p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-paper flex items-center justify-center hover:bg-rose-soft transition-colors duration-500" aria-label="LinkedIn">
                <Linkedin size={16} strokeWidth={1.6} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-paper flex items-center justify-center hover:bg-rose-soft transition-colors duration-500" aria-label="Instagram">
                <Instagram size={16} strokeWidth={1.6} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-paper flex items-center justify-center hover:bg-rose-soft transition-colors duration-500" aria-label="GitHub">
                <Github size={16} strokeWidth={1.6} />
              </a>
            </div>
          </div>
        </div>

        <div className="hairline mt-20 mb-6" />
        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground font-mono uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Marianna Kuzmenko · Alle Rechte vorbehalten</p>
          <p>Mit Sorgfalt gemacht — in Deutschland</p>
        </div>
      </div>
    </footer>
  );
};
