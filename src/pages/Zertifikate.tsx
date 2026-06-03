import { useState, useEffect } from "react";
import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { GraduationCap, Award, X, Maximize2 } from "lucide-react";
import { useLang, pick } from "@/i18n/LanguageContext";

import sheReact from "@/assets/certificates/shecodes-react.png";
import sheResponsive from "@/assets/certificates/shecodes-responsive.png";
import shePlus from "@/assets/certificates/shecodes-plus.png";
import sheBasics from "@/assets/certificates/shecodes-basics.png";
import geniusUxUi from "@/assets/certificates/genius-uxui.jpg";
import canShe from "@/assets/certificates/canshecode-html-css.png";
import para from "@/assets/certificates/para-marketing.jpg";

interface Cert {
  title: string;
  issuer: string;
  date: string;
  img: string;
  tag: string;
}

const Zertifikate = () => {
  const { lang } = useLang();
  const [lightbox, setLightbox] = useState<Cert | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);


  const certs: Cert[] = [
    { title: "UX/UI Designer Diploma", issuer: "Genius.Space", date: "2024", img: geniusUxUi, tag: pick(lang, "UX/UI Design", "UX/UI Design") },
    { title: "Integrated Internet Marketing", issuer: "Para — School of Digital Skills", date: "Sep 2025", img: para, tag: pick(lang, "Marketing & SEO", "Marketing & SEO") },
    { title: "React Development", issuer: "SheCodes", date: "Aug 2023", img: sheReact, tag: pick(lang, "Frontend", "Frontend") },
    { title: "Responsive Web Development", issuer: "SheCodes", date: "Jan 2023", img: sheResponsive, tag: pick(lang, "Responsive Design", "Responsive Design") },
    { title: "Introduction to Web Development (HTML5, CSS3)", issuer: "Can She Code Inc., Montreal", date: "Oct 2022", img: canShe, tag: pick(lang, "Web Development", "Web Development") },
    { title: "Web Development", issuer: "SheCodes Plus", date: "Aug 2022", img: shePlus, tag: pick(lang, "Web Development", "Web Development") },
    { title: "Introduction to Coding", issuer: "SheCodes Basics", date: "Jun 2022", img: sheBasics, tag: pick(lang, "Foundations", "Foundations") },
  ];

  const t = pick(lang,
    {
      title: "Zertifikate & Qualifikationen — Marianna Kuzmenko",
      desc: "Diplome und Zertifikate in UX/UI Design, Webentwicklung, React, responsivem Webdesign und digitalem Marketing.",
      eye: "Qualifikationen",
      h1a: "Zertifikate &",
      h1b: "Qualifikationen.",
      lead: "Eine Auswahl der Diplome und Weiterbildungen, die meine Arbeit als Webdesignerin, Entwicklerin und SEO-Spezialistin begleiten.",
      timelineTitle: "Ausbildungszeitstrahl",
      timelineLead: "Kontinuierliche Weiterbildung in Design, Entwicklung und Marketing.",
    },
    {
      title: "Certificates & Qualifications — Marianna Kuzmenko",
      desc: "Diplomas and certificates in UX/UI design, web development, React, responsive web design and digital marketing.",
      eye: "Qualifications",
      h1a: "Certificates &",
      h1b: "qualifications.",
      lead: "A selection of the diplomas and continued education that shape my work as a web designer, developer and SEO specialist.",
      timelineTitle: "Education timeline",
      timelineLead: "Continuous learning across design, development and marketing.",
    }
  );

  return (
    <Layout>
      <Seo title={t.title} description={t.desc} path={lang === "en" ? "/en/certificates" : "/zertifikate"} />
      <section className="container-editorial pt-12 pb-16">
        <p className="eyebrow mb-6">{t.eye}</p>
        <h1 className="display-xl mb-6 max-w-4xl">
          {t.h1a} <span className="italic text-rose">{t.h1b}</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{t.lead}</p>
      </section>

      <section className="container-editorial pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c) => (
            <button
              key={c.title}
              type="button"
              onClick={() => setLightbox(c)}
              className="group panel-white p-4 text-left transition-transform duration-500 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose"
              aria-label={`${pick(lang, "Zertifikat vergrößern", "Enlarge certificate")}: ${c.title}`}
            >
              <div className="relative frame-soft aspect-[4/3] overflow-hidden mb-4 bg-paper">
                <img src={c.img} alt={`${c.title} — ${c.issuer}`} loading="lazy" className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-[1.03]" />
                <span className="absolute top-2 right-2 w-9 h-9 rounded-full bg-background/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <Maximize2 size={14} strokeWidth={1.6} className="text-foreground" />
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Award size={14} className="text-rose" strokeWidth={1.6} />
                <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">{c.tag}</span>
              </div>
              <h3 className="font-display text-xl leading-tight mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.issuer} · {c.date}</p>
            </button>
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/85 backdrop-blur-xl p-4 md:p-10 animate-in fade-in duration-300"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label={pick(lang, "Schließen", "Close")}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-muted transition"
          >
            <X size={18} strokeWidth={1.6} />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-5xl w-full max-h-full flex flex-col items-center gap-4">
            <img src={lightbox.img} alt={`${lightbox.title} — ${lightbox.issuer}`} className="max-h-[78vh] w-auto object-contain rounded-xl shadow-2xl bg-paper" />
            <figcaption className="text-center">
              <p className="font-display text-xl">{lightbox.title}</p>
              <p className="text-sm text-muted-foreground mt-1">{lightbox.issuer} · {lightbox.date}</p>
            </figcaption>
          </figure>
        </div>
      )}

      <section className="container-editorial pb-28">
        <div className="panel-white p-10 md:p-14">
          <p className="eyebrow mb-4">{t.timelineTitle}</p>
          <p className="text-muted-foreground mb-10 max-w-xl">{t.timelineLead}</p>
          <ol className="relative border-l border-border pl-8 space-y-8">
            {certs.map((c) => (
              <li key={c.title} className="relative">
                <span className="absolute -left-[42px] top-1.5 w-3 h-3 rounded-full bg-rose ring-4 ring-rose-soft" />
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">{c.date}</p>

                <h4 className="font-display text-lg flex items-center gap-2">
                  <GraduationCap size={16} className="text-rose" strokeWidth={1.6} />
                  {c.title}
                </h4>
                <p className="text-sm text-muted-foreground">{c.issuer}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </Layout>
  );
};

export default Zertifikate;
