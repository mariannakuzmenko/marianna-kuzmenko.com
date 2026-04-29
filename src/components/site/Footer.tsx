import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-foreground/15 mt-32">
      <div className="container-editorial py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <p className="eyebrow mb-6">Lass uns reden</p>
            <h2 className="display-md mb-6">
              Bereit für eine Website,<br />
              die wirklich <em className="text-accent not-italic">funktioniert</em>?
            </h2>
            <a
              href="mailto:hello@mariannakuzmenko.de"
              className="inline-flex items-center gap-3 group"
            >
              <span className="font-display text-2xl md:text-4xl underline-draw">hello@mariannakuzmenko.de</span>
            </a>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Navigation</p>
            <ul className="space-y-2 text-sm">
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
            <p className="text-sm leading-relaxed">
              Freelancer Webdesigner<br />
              Deutschland · Remote weltweit
            </p>
            <p className="eyebrow mt-6 mb-4">Folgen</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="underline-draw">LinkedIn</a></li>
              <li><a href="#" className="underline-draw">Instagram</a></li>
              <li><a href="#" className="underline-draw">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-20 mb-6" />
        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground font-mono uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Marianna Kuzmenko · Alle Rechte vorbehalten</p>
          <p>Gebaut mit Sorgfalt in Deutschland</p>
        </div>
      </div>
    </footer>
  );
};
