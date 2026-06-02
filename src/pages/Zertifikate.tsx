import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { GraduationCap, Award } from "lucide-react";
import { useLang, pick } from "@/i18n/LanguageContext";

import sheReact from "@/assets/certificates/shecodes-react.png.asset.json";
import sheResponsive from "@/assets/certificates/shecodes-responsive.png.asset.json";
import shePlus from "@/assets/certificates/shecodes-plus.png.asset.json";
import sheBasics from "@/assets/certificates/shecodes-basics.png.asset.json";
import geniusUxUi from "@/assets/certificates/genius-uxui.jpeg.asset.json";
import canShe from "@/assets/certificates/canshecode-html-css.png.asset.json";
import para from "@/assets/certificates/para-marketing.jpeg.asset.json";

interface Cert {
  title: string;
  issuer: string;
  date: string;
  img: string;
  tag: string;
}

const Zertifikate = () => {
  const { lang } = useLang();

  const certs: Cert[] = [
    { title: "UX/UI Designer Diploma", issuer: "Genius.Space", date: "2024", img: geniusUxUi.url, tag: pick(lang, "UX/UI Design", "UX/UI Design") },
    { title: "Integrated Internet Marketing", issuer: "Para — School of Digital Skills", date: "Sep 2025", img: para.url, tag: pick(lang, "Marketing & SEO", "Marketing & SEO") },
    { title: "React Development", issuer: "SheCodes", date: "Aug 2023", img: sheReact.url, tag: pick(lang, "Frontend", "Frontend") },
    { title: "Responsive Web Development", issuer: "SheCodes", date: "Jan 2023", img: sheResponsive.url, tag: pick(lang, "Responsive Design", "Responsive Design") },
    { title: "Introduction to Web Development (HTML5, CSS3)", issuer: "Can She Code Inc., Montreal", date: "Oct 2022", img: canShe.url, tag: pick(lang, "Web Development", "Web Development") },
    { title: "Web Development", issuer: "SheCodes Plus", date: "Aug 2022", img: shePlus.url, tag: pick(lang, "Web Development", "Web Development") },
    { title: "Introduction to Coding", issuer: "SheCodes Basics", date: "Jun 2022", img: sheBasics.url, tag: pick(lang, "Foundations", "Foundations") },
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
            <article key={c.title} className="group panel-white p-4 transition-transform duration-500 hover:-translate-y-1">
              <div className="frame-soft aspect-[4/3] overflow-hidden mb-4 bg-paper">
                <img src={c.img} alt={`${c.title} — ${c.issuer}`} loading="lazy" className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Award size={14} className="text-rose" strokeWidth={1.6} />
                <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">{c.tag}</span>
              </div>
              <h3 className="font-display text-xl leading-tight mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.issuer} · {c.date}</p>
            </article>
          ))}
        </div>
      </section>

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
