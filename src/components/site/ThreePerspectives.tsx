import { Brush, Code2, TrendingUp, ArrowUpRight } from "lucide-react";
import { useLang, pick } from "@/i18n/LanguageContext";

export const ThreePerspectives = () => {
  const { lang } = useLang();
  const t = pick(
    lang,
    {
      eyebrow: "Drei Perspektiven · Ein Projekt",
      title: "Design. Entwicklung. Strategie.",
      titleItalic: "In einer Hand.",
      lead: "Die meisten Websites scheitern an Schnittstellen. Ich denke alle drei Disziplinen von Anfang an zusammen — für ein Ergebnis, das visuell, technisch und strategisch trägt.",
      cols: [
        {
          icon: Brush,
          tag: "Designer-Perspektive",
          title: "Ästhetik mit Absicht",
          desc: "Komposition, Typografie und Hierarchie, die Markenwert sichtbar machen — kein Templatelook, sondern editorial gedacht.",
          points: ["Visuelle Identität", "Typografie-System", "UX/UI Hierarchie"],
        },
        {
          icon: Code2,
          tag: "Developer-Perspektive",
          title: "Saubere Technik",
          desc: "Schneller Code, semantische Struktur und ein wartbares Frontend — die Basis für Performance, SEO und Skalierbarkeit.",
          points: ["Performance & Core Web Vitals", "Semantic HTML", "Responsive Engineering"],
        },
        {
          icon: TrendingUp,
          tag: "SEO-Perspektive",
          title: "Strategische Sichtbarkeit",
          desc: "Inhalte, Struktur und technische Signale, die in Suchmaschinen ranken — und die richtigen Anfragen bringen.",
          points: ["Keyword-Strategie", "Technisches SEO", "Conversion-Pfad"],
        },
      ],
      footer: "Die besten Websites entstehen, wenn Design, Entwicklung und Strategie gemeinsam denken.",
      cta: "Projekt besprechen",
    },
    {
      eyebrow: "Three Perspectives · One Project",
      title: "Design. Development. Strategy.",
      titleItalic: "From one mind.",
      lead: "Most websites fail at the seams between disciplines. I think design, code and SEO together from day one — so the result is visually, technically and strategically aligned.",
      cols: [
        {
          icon: Brush,
          tag: "Designer Perspective",
          title: "Aesthetics with intent",
          desc: "Composition, typography and hierarchy that make brand value visible — never templated, always editorially considered.",
          points: ["Visual identity", "Typography system", "UX/UI hierarchy"],
        },
        {
          icon: Code2,
          tag: "Developer Perspective",
          title: "Clean engineering",
          desc: "Fast code, semantic structure and a maintainable frontend — the foundation for performance, SEO and scale.",
          points: ["Performance & Core Web Vitals", "Semantic HTML", "Responsive engineering"],
        },
        {
          icon: TrendingUp,
          tag: "SEO Perspective",
          title: "Strategic visibility",
          desc: "Content, structure and technical signals that rank — and bring the right inquiries to your inbox.",
          points: ["Keyword strategy", "Technical SEO", "Conversion path"],
        },
      ],
      footer: "The best websites are created when design, development and strategy work together.",
      cta: "Discuss your project",
    },
  );

  return (
    <section className="container-editorial py-24" id="three-perspectives">
      <div className="text-center max-w-3xl mx-auto mb-16 reveal-stagger">
        <p className="eyebrow mb-4 reveal-line">{t.eyebrow}</p>
        <h2 className="display-lg reveal-line">
          {t.title} <span className="italic text-rose">{t.titleItalic}</span>
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed reveal-line">{t.lead}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.cols.map((col, i) => {
          const Icon = col.icon;
          return (
            <div
              key={col.title}
              className="perspective-col glass-panel p-8 reveal hover:-translate-y-1 transition-transform duration-500"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-rose-soft flex items-center justify-center mb-6">
                <Icon size={24} strokeWidth={1.5} className="text-rose" />
              </div>
              <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-3">{col.tag}</p>
              <h3 className="font-display text-2xl mb-3">{col.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{col.desc}</p>
              <ul className="space-y-2 pt-5 border-t border-border">
                {col.points.map((p) => (
                  <li key={p} className="text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-rose" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-14 text-center reveal">
        <p className="font-display text-2xl md:text-3xl italic max-w-3xl mx-auto leading-snug">
          “{t.footer}”
        </p>
        <div className="mt-8 flex justify-center">
          <a href=path("inquiry") className="btn-cta">
            {t.cta} <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
