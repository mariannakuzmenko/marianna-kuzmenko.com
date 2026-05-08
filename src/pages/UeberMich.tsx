import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { IconCard } from "@/components/site/IconCard";
import { FloatingNote } from "@/components/site/FloatingNote";
import { Link } from "react-router-dom";
import { GraduationCap, Eye, Feather, ArrowRight } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import workspace from "@/assets/workspace.jpg";
import { useLang, pick, ROUTES } from "@/i18n/LanguageContext";

const UeberMich = () => {
  const { lang, path } = useLang();
  const t = pick(lang,
    {
      seoTitle: "Über mich — Marianna Kuzmenko · Webdesignerin & SEO Freelancer",
      seoDesc: "Webdesignerin und Entwicklerin mit Fokus auf UX/UI Design und SEO Optimierung. Ausgebildet in Portugal & Kanada, tätig als Freelancer Webdesigner in Deutschland.",
      eye1: "02 — Über mich",
      h1A: "Hallo,",
      h1B: "ich bin",
      h1C: "Marianna.",
      portraitAlt: "Marianna Kuzmenko, Webdesignerin und Entwicklerin in Deutschland",
      whoEye: "Wer",
      who1a: "Ich bin ",
      who1b: "Webdesignerin und Entwicklerin",
      who1c: " mit Fokus auf UX/UI und SEO.",
      who2: <>Ich habe Frontend Development in <em>Portugal</em> und <em>Kanada</em> gelernt und mich zusätzlich im Bereich Internet Marketing spezialisiert.</>,
      who3a: "Heute verbinde ich Design, Technik und SEO zu einem klaren Ziel: ",
      who3b: "Websites, die sichtbar sind und Ergebnisse bringen.",
      note: <>„Strukturiert,<br />nicht steif."</>,
      deskAlt: "Mariannas Arbeitsplatz mit Laptop, Notizbuch und Kaffee",
      methodEye: "Methode",
      methodTitleA: "Wie ich",
      methodTitleB: "arbeite.",
      method: [
        { title: "Strukturiert", desc: "Klare Phasen, klare Deliverables. Kein Chaos, kein Bauchgefühl." },
        { title: "Transparent", desc: "Du siehst, was passiert. Immer. Updates ohne Marketing-Geschwafel." },
        { title: "Ohne Komplexität", desc: "Nur das, was wirklich nötig ist. Keine Tools-Sammlung als Selbstzweck." },
      ],
      valuesEye: "Werte",
      valuesA: "Was mir",
      valuesB: "wichtig ist.",
      values: [
        ["Klarheit", "vor Design-Trends."],
        ["Funktion", "vor Spielerei."],
        ["Nachhaltige SEO", "statt kurzfristiger Tricks."],
      ] as [string, string][],
      ctaWeb: "Web Development entdecken →",
      ctaWork: "Projekte ansehen",
    },
    {
      seoTitle: "About — Marianna Kuzmenko · Freelance Web Designer & SEO Specialist",
      seoDesc: "Freelance web designer and developer focused on UX/UI design and SEO. Trained in Portugal & Canada, based in Germany, working with clients worldwide.",
      eye1: "02 — About",
      h1A: "Hello,",
      h1B: "I’m",
      h1C: "Marianna.",
      portraitAlt: "Marianna Kuzmenko, web designer and developer based in Germany",
      whoEye: "Who",
      who1a: "I’m a ",
      who1b: "web designer and developer",
      who1c: " focused on UX/UI and SEO.",
      who2: <>I studied frontend development in <em>Portugal</em> and <em>Canada</em>, and specialized further in internet marketing.</>,
      who3a: "Today I connect design, engineering and SEO with one clear goal: ",
      who3b: "websites that get found and bring results.",
      note: <>“Structured,<br />never stiff.”</>,
      deskAlt: "Marianna’s workspace with laptop, notebook and coffee",
      methodEye: "Method",
      methodTitleA: "How I",
      methodTitleB: "work.",
      method: [
        { title: "Structured", desc: "Clear phases, clear deliverables. No chaos, no guesswork." },
        { title: "Transparent", desc: "You see what’s happening. Always. Updates without marketing fog." },
        { title: "Without complexity", desc: "Only what’s actually needed. No tool stack for its own sake." },
      ],
      valuesEye: "Values",
      valuesA: "What",
      valuesB: "matters to me.",
      values: [
        ["Clarity", "over design trends."],
        ["Function", "over decoration."],
        ["Sustainable SEO", "over short-term tricks."],
      ] as [string, string][],
      ctaWeb: "Explore Web Development →",
      ctaWork: "View work",
    }
  );

  return (
    <Layout>
      <Seo
        title={t.seoTitle}
        description={t.seoDesc}
        path={path("about")}
        pathDe={ROUTES.about.de}
        pathEn={ROUTES.about.en}
      />

      <section className="container-editorial pt-12 md:pt-20 pb-16 relative">
        <div className="blob blob-blue animate-float-slower" style={{ width: 420, height: 420, top: "100px", left: "-100px" }} />
        <p className="eyebrow mb-6 relative">{t.eye1}</p>
        <div className="grid grid-cols-12 gap-8 items-end relative">
          <div className="col-span-12 md:col-span-8">
            <h1 className="display-xl">
              {t.h1A}<br />
              <span className="italic">{t.h1B}</span><br />
              <span className="text-rose">{t.h1C}</span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="frame-soft aspect-[3/4] max-w-[320px] ml-auto">
              <img src={portrait} alt={t.portraitAlt} loading="eager" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-editorial pb-24">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-2">
            <p className="eyebrow">{t.whoEye}</p>
          </div>
          <div className="col-span-12 md:col-span-7 space-y-6 text-xl md:text-2xl leading-relaxed font-display">
            <p className="reveal">
              {t.who1a}<span className="marker">{t.who1b}</span>{t.who1c}
            </p>
            <p className="reveal" style={{ transitionDelay: "120ms" }}>{t.who2}</p>
            <p className="reveal" style={{ transitionDelay: "240ms" }}>
              {t.who3a}<span className="text-rose">{t.who3b}</span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 mt-6 md:mt-12">
            <FloatingNote rotate={4}>{t.note}</FloatingNote>
          </div>
        </div>
      </section>

      <section className="container-editorial pb-28">
        <div className="frame-soft aspect-[16/9] md:aspect-[21/9]">
          <img src={workspace} alt={t.deskAlt} loading="lazy" />
        </div>
      </section>

      <section className="container-editorial pb-28">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow mb-4">{t.methodEye}</p>
            <h2 className="display-lg">{t.methodTitleA}<br /><span className="italic text-rose">{t.methodTitleB}</span></h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <IconCard icon={GraduationCap} title={t.method[0].title} desc={t.method[0].desc} index={0} />
          <IconCard icon={Eye} title={t.method[1].title} desc={t.method[1].desc} variant="blue" index={1} />
          <IconCard icon={Feather} title={t.method[2].title} desc={t.method[2].desc} variant="pink" index={2} />
        </div>
      </section>

      <section className="container-editorial pb-28">
        <div className="card-soft p-10 md:p-16" style={{ background: "var(--gradient-soft)" }}>
          <p className="eyebrow mb-4">{t.valuesEye}</p>
          <h2 className="display-lg mb-12">{t.valuesA}<br /><span className="italic">{t.valuesB}</span></h2>

          <ul className="space-y-2">
            {t.values.map(([a, b], i) => (
              <li key={i} className="reveal py-6 grid grid-cols-12 gap-6 items-baseline group cursor-default border-b border-border last:border-0" style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <span className="col-span-10 md:col-span-11 font-display text-2xl md:text-4xl">
                  <span className="group-hover:text-rose transition-colors duration-500">{a}</span>{" "}
                  <span className="italic text-muted-foreground">{b}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to={path("web")} className="btn-pink">{t.ctaWeb}</Link>
            <Link to={path("work")} className="btn-ghost-soft">{t.ctaWork} <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UeberMich;
