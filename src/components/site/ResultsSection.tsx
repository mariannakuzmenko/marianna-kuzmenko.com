import { ShieldCheck, TrendingUp, MessageCircle, Award, Zap, Smartphone } from "lucide-react";
import { useLang, pick } from "@/i18n/LanguageContext";

export const ResultsSection = () => {
  const { lang } = useLang();
  const t = pick(
    lang,
    {
      eyebrow: "Ergebnisse",
      titleA: "Was du als Kund:in",
      titleB: "wirklich gewinnst.",
      lead:
        "Eine hochwertige Website ist keine Kostenstelle, sondern ein stiller Vertriebspartner — Tag und Nacht.",
      items: [
        { title: "Mehr Vertrauen", desc: "Ein professioneller Auftritt beantwortet Zweifel, bevor sie entstehen." },
        { title: "Bessere Google-Sichtbarkeit", desc: "Saubere SEO-Basis, klare Struktur und relevante Inhalte für den DACH-Markt." },
        { title: "Mehr passende Anfragen", desc: "Ruhige Nutzerführung filtert und qualifiziert deine Kontakte." },
        { title: "Professionelles Image", desc: "Design als leises Statement für Preis, Positionierung und Wertigkeit." },
        { title: "Schnelle Website", desc: "Optimierte Performance, kurze Ladezeiten und moderne technische Basis." },
        { title: "Mobile-First", desc: "Perfekte Darstellung auf Smartphone, Tablet und Desktop — überall." },
      ],
    },
    {
      eyebrow: "Results",
      titleA: "What clients",
      titleB: "actually gain.",
      lead:
        "A premium website is not an expense line — it's a quiet sales partner working for you day and night.",
      items: [
        { title: "More Trust", desc: "A professional presence answers doubts before they are asked." },
        { title: "Better Google Visibility", desc: "A clean SEO foundation, structured content and relevant reach in your market." },
        { title: "More Aligned Inquiries", desc: "Calm user flow filters and qualifies the people who reach out." },
        { title: "Professional Image", desc: "Design as a quiet signal for pricing, positioning and value." },
        { title: "Fast Website", desc: "Optimised performance, short load times and a modern technical foundation." },
        { title: "Mobile-First", desc: "Perfectly rendered on phone, tablet and desktop — everywhere." },
      ],
    }
  );

  const icons = [ShieldCheck, TrendingUp, MessageCircle, Award, Zap, Smartphone];

  return (
    <section className="container-editorial py-24 md:py-28">
      <div className="grid grid-cols-12 gap-8 items-end mb-14 reveal-stagger">
        <div className="col-span-12 md:col-span-7">
          <p className="eyebrow mb-4 reveal-line">{t.eyebrow}</p>
          <h2 className="display-lg reveal-line">
            {t.titleA}
            <br />
            <span className="italic text-rose">{t.titleB}</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 reveal-line">
          <p className="text-muted-foreground leading-relaxed">{t.lead}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {t.items.map((item, i) => {
          const Icon = icons[i];
          return (
            <div
              key={item.title}
              className="glass-panel p-7 group reveal transition-transform duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-rose-soft flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                <Icon size={20} strokeWidth={1.5} className="text-rose" />
              </div>
              <h3 className="font-display text-xl md:text-2xl mb-3 leading-tight">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
