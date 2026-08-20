import { BeforeAfter } from "./BeforeAfter";
import { useLang, pick } from "@/i18n/LanguageContext";
import beforeAsset from "@/assets/projects/haas-vorher.png.asset.json";
import afterImg from "@/assets/projects/haas-nachher.png";

const beforeImg = beforeAsset.url;

export const BeforeAfterSection = () => {
  const { lang } = useLang();
  const t = pick(
    lang,
    {
      eyebrow: "Transformation",
      title: "Vorher.",
      titleItalic: "Nachher.",
      lead: "Bewege den Regler und sieh, wie sich Struktur, Hierarchie und Markenwirkung verändern, wenn Design, Entwicklung und SEO zusammen gedacht werden.",
      points: [
        { title: "Design", desc: "Editorial statt generisch" },
        { title: "Struktur", desc: "Klare Hierarchie" },
        { title: "Vertrauen", desc: "Professionelle Wirkung" },
        { title: "UX", desc: "Eindeutiger nächster Schritt" },
      ],
    },
    {
      eyebrow: "Transformation",
      title: "Before.",
      titleItalic: "After.",
      lead: "Drag the slider to see how structure, hierarchy and brand presence shift when design, development and SEO work together.",
      points: [
        { title: "Design", desc: "Editorial, not generic" },
        { title: "Structure", desc: "Clear hierarchy" },
        { title: "Trust", desc: "Professional presence" },
        { title: "UX", desc: "Obvious next step" },
      ],
    },
  );

  return (
    <section className="container-editorial py-24">
      <div className="grid grid-cols-12 gap-8 items-end mb-12 reveal-stagger">
        <div className="col-span-12 md:col-span-7">
          <p className="eyebrow mb-4 reveal-line">{t.eyebrow}</p>
          <h2 className="display-lg reveal-line">
            {t.title} <span className="italic text-rose">{t.titleItalic}</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 reveal-line">
          <p className="text-muted-foreground leading-relaxed">{t.lead}</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 lg:col-span-8 reveal">
          <BeforeAfter
            beforeSrc={beforeImg}
            afterSrc={afterImg}
            beforeAlt={lang === "de" ? "Vorher — alte Website des KFZ-Sachverständigen Paul Haas" : "Before — old website of car appraiser Paul Haas"}
            afterAlt={lang === "de" ? "Nachher — neues Premium-Redesign für Paul Haas KFZ-Sachverständiger" : "After — new premium redesign for Paul Haas car appraiser"}
          />
        </div>
        <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-4 reveal" style={{ transitionDelay: "120ms" }}>
          {t.points.map((p) => (
            <div key={p.title} className="glass-panel p-5">
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-1">{p.title}</p>
              <p className="text-sm font-display">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
