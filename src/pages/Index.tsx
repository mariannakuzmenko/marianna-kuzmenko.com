import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";

import { IconCard } from "@/components/site/IconCard";
import { FloatingNote } from "@/components/site/FloatingNote";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactSection } from "@/components/site/ContactSection";
import { WaveDivider } from "@/components/site/WaveDivider";
import { Whisper } from "@/components/site/Whisper";
import { LaptopMockup } from "@/components/site/LaptopMockup";
import { EinblickSection } from "@/components/site/EinblickSection";
import { useParallax } from "@/hooks/useParallax";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Palette,
  Layers,
  Code2,
  Search,
  ArrowRight,
  Compass,
  PenTool,
  Rocket,
  LineChart,
  Sparkles,
  Heart,
  Clock,
  ShieldCheck,
  Star,
  TrendingUp,
  MessageCircle,
  Eye,
  Minus,
  Plus,
} from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import logo from "@/assets/logo.png";
import { useLang, pick, ROUTES } from "@/i18n/LanguageContext";

const useHeadlineMorph = () => {
  const [morphed, setMorphed] = useState(false);
  useEffect(() => {
    const onScroll = () => setMorphed(window.scrollY > 280);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return morphed;
};

const Index = () => {
  const { lang, path } = useLang();
  const morphed = useHeadlineMorph();
  const blobRef1 = useParallax(0.08);
  const blobRef2 = useParallax(-0.06);

  const t = pick(lang,
    {
      seoTitle: "Webdesigner & Webentwicklung in Deutschland — Marianna Kuzmenko",
      seoDesc: "Moderne Websites, UX/UI Design und SEO Optimierung in Deutschland. Webdesigner & SEO Freelancer mit klarer Strategie statt Templates.",
      chip: "Verfügbar für neue Projekte · Q3 2026",
      heroA: "Webdesign,",
      heroB: "das sich",
      heroC: "leise ",
      heroD1: "behauptet.",
      heroD2: "durchsetzt.",
      portraitAlt: "Marianna Kuzmenko, Webdesignerin in Deutschland",
      mockupAlt: "Beispielprojekt im Browser",
      lead1a: "Ich bin ",
      leadAccent1: "Webdesignerin und Entwicklerin",
      lead1b: " in Deutschland. Ich baue moderne Websites mit klarer Struktur, ruhigem Design und nachhaltiger ",
      leadAccent2: "SEO Optimierung",
      lead1c: " — für Menschen, die mehr wollen als ein Template.",
      note1: <>„Schön ist gut. <br />Verständlich ist besser."</>,
      ctaPrimary: "Ein kleiner Einblick",
      ctaSecondary: "Schreib mir",
      whisper1: "ein kleiner Einblick ↓",
      marquee: ["Webdesign", "UX / UI", "SEO Optimierung", "Webentwicklung", "Strategie"],
      // Section 02 — not me
      s2eye: "02 — Was ich nicht bin",
      s2titleA: "Das bin ich",
      s2titleB: "nicht.",
      s2lead: <>Manchmal sagt es mehr, was man <em>nicht</em> macht. Drei Dinge, die du bei mir nicht bekommst.</>,
      notMe: [
        ["Keine Templates", "von der Stange.", "Jede Website beginnt mit deiner Geschichte — nicht mit einem Layout."],
        ["Kein Design", "ohne Strategie.", "Ästhetik ist wichtig. Aber sie kommt nach dem Verstehen."],
        ["Keine SEO", "ohne Ergebnis.", "Sichtbarkeit, die bleibt. Keine Tricks, keine kurzfristigen Hacks."],
      ] as [string, string, string][],
      whisper2: "noch ein bisschen scrollen …",
      // Services
      s3eye: "03 — Leistungen",
      s3titleA: "Website erstellen lassen",
      s3titleB: "— aber richtig.",
      s3lead: "Vier Bereiche, die zusammengehören. Eine Website, die wirkt.",
      services: [
        { title: "Individuelles Webdesign", desc: "Visuelle Identität, die zu dir passt — keine Vorlagen, kein Bauchgefühl." },
        { title: "UX/UI mit klarer Struktur", desc: "Nutzerführung, Hierarchie und Microinteractions, die Conversions bringen." },
        { title: "Technische Webentwicklung", desc: "Schnell, sauber gebaut, wartbar. React, Performance, Accessibility." },
        { title: "SEO Optimierung von Anfang an", desc: "Sichtbarkeit ist kein Nachgedanke. SEO-Strategie ist im Design eingebaut." },
      ],
      moreWeb: "Mehr zu Web Development",
      moreSeo: "Mehr zu SEO",
      // Projects
      s4eye: "04 — Werk",
      s4titleA: "Ausgewählte",
      s4titleB: "Projekte.",
      s4lead: "Ein paar Projekte, die zeigen, wie Strategie, Design und Entwicklung zusammenkommen.",
      projects: [
        { name: "Atelier Norden", category: "Webdesign · Webentwicklung", desc: "Markenwebsite für ein skandinavisches Designstudio. Klare Hierarchie, ruhige Typografie, +180% organische Reichweite." },
        { name: "Kraft & Klarheit", category: "UX/UI · SEO", desc: "Coaching-Plattform mit klarem Funnel. UX-Redesign, neue Inhaltsstruktur, sauberes technisches SEO." },
        { name: "Studio Linde", category: "Branding · Webdev", desc: "Atelierauftritt mit eigenem Designsystem. Editorial Layout, sanfte Microinteractions, schnelle Performance." },
      ],
      allProjects: "Alle Projekte ansehen",
      whisper3: "fast geschafft …",
      // Process
      s5eye: "05 — Ablauf",
      s5titleA: "So läuft ein",
      s5titleB: "Projekt.",
      s5lead: "Ein klarer Weg vom ersten Gespräch bis zum Launch — ohne Überraschungen, mit viel Sorgfalt.",
      process: [
        { step: "01", title: "Verstehen", desc: "Ich höre zu. Ziele, Zielgruppe, Markt — bevor irgendein Pixel entsteht." },
        { step: "02", title: "Gestalten", desc: "Struktur und Design entstehen gemeinsam. Du bekommst klare Entwürfe statt 30 Versionen." },
        { step: "03", title: "Bauen", desc: "Saubere Entwicklung mit React, Performance und SEO direkt eingebaut." },
        { step: "04", title: "Launchen", desc: "Wir gehen live. Danach: Pflege, Optimierung, weiterdenken." },
      ],
      // Why
      s6eye: "06 — Warum",
      s6titleA: "Warum mit",
      s6titleB: "mir arbeiten.",
      s6lead: "Nicht für jede Person das Richtige — und genau das ist gut so.",
      why: [
        { title: "Design mit Substanz", desc: "Schön ist nicht genug. Jede Entscheidung hat einen Grund — und einen messbaren Effekt." },
        { title: "SEO von Anfang an", desc: "Sichtbarkeit beginnt in der Struktur. Keine Add-ons, keine teuren Nachbesserungen." },
        { title: "Technisch sauber", desc: "Wartbare Codebasis, schnelle Ladezeiten, Accessibility — Standard, kein Aufpreis." },
        { title: "Menschlich & klar", desc: "Klare Kommunikation, ehrliche Antworten. Keine Buzzwords, keine Schwammigkeit." },
        { title: "Pünktlich & verlässlich", desc: "Du weißt jederzeit, wo wir stehen. Termine sind Zusagen, keine Wünsche." },
        { title: "Sorgfalt im Detail", desc: "Spacing, Mikrocopy, Animation — die kleinen Dinge machen den Unterschied." },
      ],
      // Ending
      endEye: "— Anfang —",
      endA: "Vielleicht ist das",
      endB: "Anfang.",
      endBefore: "der ",
      endLead: "Wenn dich etwas davon berührt hat, ist das schon mehr als die meisten Websites schaffen. Schreib mir — auch wenn du noch nicht genau weißt, wohin es gehen soll.",
      endCta: "Lass uns reden",
      // Why a website matters
      mEye: "— Warum eine Website zählt",
      mTitleA: "Eine Website ist mehr",
      mTitleB: "als ein Schaufenster.",
      mLead: "Sie ist oft der erste Eindruck deiner Marke — und entscheidet in Sekunden, ob jemand bleibt.",
      matters: [
        { title: "Vertrauen aufbauen", desc: "Eine professionelle Website schafft Vertrauen bereits in den ersten Sekunden." },
        { title: "Mehr Sichtbarkeit", desc: "SEO und moderne Webentwicklung helfen dabei, online besser gefunden zu werden." },
        { title: "Starker erster Eindruck", desc: "Deine Website ist oft der erste Kontakt mit potenziellen Kund:innen." },
        { title: "Mehr Anfragen", desc: "Klare Struktur und gutes UX-Design unterstützen mehr Anfragen und Verkäufe." },
        { title: "Langfristige Präsenz", desc: "Eine Website arbeitet langfristig für deine Marke und dein Business." },
        { title: "Wahrnehmung gestalten", desc: "Design beeinflusst, wie Menschen deine Arbeit und deinen Wert einschätzen." },
      ],
      // Storytelling
      storyEye: "— Ein Gedanke",
      storyA: "Eine Website ist heute mehr",
      storyB: "als nur eine Online-Präsenz.",
      storyC: "Sie ist oft der erste Eindruck deiner Marke — leise, präzise, ehrlich.",
      storyD: "Vertrauen entsteht im Detail. Wahrnehmung folgt der Form. Professionalität spürt man, bevor man sie liest.",
      // Contrast
      cEye: "— Ein Vergleich",
      cTitleA: "Mit, oder",
      cTitleB: "ohne.",
      cLead: "Zwei Welten — und der ruhige Unterschied dazwischen.",
      cWithoutTitle: "Ohne professionelle Website",
      cWithout: [
        "Unternehmen wirken weniger vertrauenswürdig",
        "Potenzielle Kund:innen springen schneller ab",
        "Sichtbarkeit in Suchmaschinen geht verloren",
        "Die Marke fühlt sich austauschbar an",
      ],
      cWithTitle: "Mit einer modernen Website",
      cWith: [
        "Deine Marke wirkt klarer und professioneller",
        "Vertrauen entsteht in den ersten Sekunden",
        "Du wirst online besser gefunden",
        "Anfragen kommen qualifizierter herein",
      ],
    },
    {
      seoTitle: "Web Designer & Web Developer in Germany — Marianna Kuzmenko",
      seoDesc: "Modern websites, UX/UI design and SEO for European and US clients. Freelance web designer & developer based in Germany — strategy first, never templates.",
      chip: "Available for new projects · Q3 2026",
      heroA: "Web design",
      heroB: "that quietly",
      heroC: "earns ",
      heroD1: "attention.",
      heroD2: "results.",
      portraitAlt: "Marianna Kuzmenko, web designer based in Germany",
      mockupAlt: "Sample project shown in browser",
      lead1a: "I’m a ",
      leadAccent1: "web designer and developer",
      lead1b: " based in Germany, building modern websites with clear structure, calm design, and sustainable ",
      leadAccent2: "SEO",
      lead1c: " — for people who want more than a template.",
      note1: <>“Beautiful is good.<br />Clear is better.”</>,
      ctaPrimary: "See selected work",
      ctaSecondary: "Write me",
      whisper1: "a small look inside ↓",
      marquee: ["Web Design", "UX / UI", "SEO", "Web Development", "Strategy"],
      s2eye: "02 — What I’m not",
      s2titleA: "What I’m",
      s2titleB: "not.",
      s2lead: <>Sometimes it’s clearer to say what you <em>don’t</em> do. Three things you won’t get from me.</>,
      notMe: [
        ["No off-the-shelf", "templates.", "Every website starts with your story — not with a layout."],
        ["No design", "without strategy.", "Aesthetics matter. But they come after understanding."],
        ["No SEO", "without results.", "Visibility that lasts. No tricks, no short-term hacks."],
      ] as [string, string, string][],
      whisper2: "keep scrolling, gently …",
      s3eye: "03 — Services",
      s3titleA: "Have a website built",
      s3titleB: "— done properly.",
      s3lead: "Four areas that belong together. One website that actually performs.",
      services: [
        { title: "Custom Web Design", desc: "Visual identity that fits you — no templates, no guesswork." },
        { title: "UX/UI with clear structure", desc: "User flow, hierarchy and microinteractions that drive conversions." },
        { title: "Modern Web Development", desc: "Fast, clean, maintainable. React, performance, accessibility." },
        { title: "SEO from day one", desc: "Visibility isn’t an afterthought. SEO strategy is built into the design." },
      ],
      moreWeb: "More on Web Development",
      moreSeo: "More on SEO",
      s4eye: "04 — Work",
      s4titleA: "Selected",
      s4titleB: "projects.",
      s4lead: "A few projects that show how strategy, design and development come together.",
      projects: [
        { name: "Atelier Norden", category: "Web Design · Development", desc: "Brand site for a Scandinavian design studio. Clear hierarchy, calm typography, +180% organic reach." },
        { name: "Kraft & Klarheit", category: "UX/UI · SEO", desc: "Coaching platform with a clear funnel. UX redesign, new content structure, clean technical SEO." },
        { name: "Studio Linde", category: "Branding · Web Dev", desc: "Studio site with its own design system. Editorial layout, soft microinteractions, fast performance." },
      ],
      allProjects: "View all projects",
      whisper3: "almost there …",
      s5eye: "05 — Process",
      s5titleA: "How a project",
      s5titleB: "unfolds.",
      s5lead: "A clear path from first conversation to launch — no surprises, plenty of care.",
      process: [
        { step: "01", title: "Listen", desc: "I listen. Goals, audience, market — before a single pixel is drawn." },
        { step: "02", title: "Design", desc: "Structure and design grow together. You get clear drafts, not 30 variations." },
        { step: "03", title: "Build", desc: "Clean React development with performance and SEO baked in." },
        { step: "04", title: "Launch", desc: "We go live. Then: care, optimization, keep thinking forward." },
      ],
      s6eye: "06 — Why",
      s6titleA: "Why work",
      s6titleB: "with me.",
      s6lead: "Not the right fit for everyone — and that’s exactly the point.",
      why: [
        { title: "Design with substance", desc: "Pretty isn’t enough. Every decision has a reason — and a measurable effect." },
        { title: "SEO from day one", desc: "Visibility starts in the structure. No add-ons, no expensive rework." },
        { title: "Technically clean", desc: "Maintainable code, fast load times, accessibility — standard, not extra." },
        { title: "Human & clear", desc: "Honest answers, plain language. No buzzwords, no fog." },
        { title: "On time, reliable", desc: "You always know where we stand. Deadlines are promises, not wishes." },
        { title: "Care in the details", desc: "Spacing, microcopy, animation — the small things make the difference." },
      ],
      endEye: "— A beginning —",
      endA: "Maybe this is",
      endB: "beginning.",
      endBefore: "the ",
      endLead: "If something here resonated, that’s already more than most websites manage. Write me — even if you don’t yet know where it should go.",
      endCta: "Let’s talk",
      // Why a website matters
      mEye: "— Why a website matters",
      mTitleA: "A website is more",
      mTitleB: "than a storefront.",
      mLead: "It’s often the first impression of your brand — and decides in seconds whether someone stays.",
      matters: [
        { title: "Build trust", desc: "A professional website earns trust within the first few seconds." },
        { title: "Be more visible", desc: "SEO and modern web development help you get found online." },
        { title: "A strong first impression", desc: "Your website is often the first contact with future clients." },
        { title: "More inquiries", desc: "Clear structure and thoughtful UX gently invite more inquiries and sales." },
        { title: "Long-term presence", desc: "A website keeps working for your brand and business in the background." },
        { title: "Shape perception", desc: "Design quietly influences how people read your work and its value." },
      ],
      storyEye: "— A thought",
      storyA: "A website today is more",
      storyB: "than just an online presence.",
      storyC: "It’s often the first impression of your brand — quiet, precise, honest.",
      storyD: "Trust grows in the details. Perception follows form. Professionalism is felt before it’s read.",
      cEye: "— A comparison",
      cTitleA: "With, or",
      cTitleB: "without.",
      cLead: "Two worlds — and the calm difference between them.",
      cWithoutTitle: "Without a professional site",
      cWithout: [
        "Your business feels less trustworthy",
        "Visitors leave faster than you’d think",
        "You lose visibility in search",
        "The brand starts to feel interchangeable",
      ],
      cWithTitle: "With a modern site",
      cWith: [
        "Your brand reads as clearer and more professional",
        "Trust forms within the first seconds",
        "You get found online with intent",
        "Inquiries arrive better qualified",
      ],
    }
  );

  const services = t.services;
  const projects = [
    { ...t.projects[0], img: project1 },
    { ...t.projects[1], img: project2 },
    { ...t.projects[2], img: project3 },
  ];
  const processIcons = [Compass, PenTool, Code2, Rocket];
  const whyIcons = [Sparkles, LineChart, ShieldCheck, Heart, Clock, PenTool];
  const serviceIcons = [Palette, Layers, Code2, Search];
  const serviceVariants: ("default"|"blue"|"pink")[] = ["default", "blue", "pink", "default"];

  return (
    <Layout>
      <Seo
        title={t.seoTitle}
        description={t.seoDesc}
        path={path("home")}
        pathDe={ROUTES.home.de}
        pathEn={ROUTES.home.en}
      />

      {/* HERO */}
      <section className="container-editorial pt-12 md:pt-20 pb-24 relative overflow-hidden">
        <div ref={blobRef1} className="blob blob-pink animate-float-slow" style={{ width: 460, height: 460, top: "-100px", right: "-120px" }} />
        <div ref={blobRef2} className="blob blob-blue animate-float-slower" style={{ width: 380, height: 380, top: "200px", left: "-150px" }} />
        <div className="hero-shape hero-shape-ring" style={{ width: 220, height: 220, top: "8%", left: "42%" }} />
        <div className="hero-shape hero-shape-dot" style={{ width: 14, height: 14, top: "30%", right: "12%" }} />
        <div className="hero-shape hero-shape-square" style={{ width: 90, height: 90, bottom: "8%", left: "38%" }} />

        <div className="grid grid-cols-12 gap-6 items-end relative">
          <div className="col-span-12 md:col-span-7 reveal-stagger">
            <div className="chip mb-8 reveal-line">
              <span className="w-2 h-2 rounded-full bg-rose animate-pulse" />
              {t.chip}
            </div>
            <img
              src={logo}
              alt="Marianna Kuzmenko — Web Design & Development"
              className="w-full max-w-[720px] h-auto mb-10 reveal-line"
              style={{ filter: "drop-shadow(0 8px 32px hsl(208 70% 45% / 0.4))" }}
            />
            <h1 className="display-xl reveal-line">
              <span className={`inline-block transition-all duration-1000 ${morphed ? "opacity-90" : "opacity-100"}`}>
                {t.heroA}
              </span>
              <br />
              <span className="italic font-light reveal-line">{t.heroB}</span><br />
              <span className="text-rose marker reveal-line">{t.heroC}</span>
              <span className="italic reveal-line">
                {morphed ? t.heroD2 : t.heroD1}
              </span>
            </h1>
          </div>

          <div className="col-span-12 md:col-span-5 hidden md:block relative">
            <div className="frame-soft aspect-[3/4] max-w-[260px] ml-auto reveal" style={{ transitionDelay: "200ms" }}>
              <img src={portrait} alt={t.portraitAlt} loading="eager" />
            </div>
            <div className="absolute -bottom-10 -left-6 w-[68%] reveal" style={{ transitionDelay: "500ms" }}>
              <LaptopMockup screens={[project1, project2, project3]} alt={t.mockupAlt} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-20 md:mt-28 relative">
          <div className="col-span-12 md:col-span-6 reveal" style={{ transitionDelay: "200ms" }}>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/85">
              {t.lead1a}<span className="hover-accent">{t.leadAccent1}</span>{t.lead1b}<span className="hover-accent">{t.leadAccent2}</span>{t.lead1c}
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
            <FloatingNote rotate={-4}>{t.note1}</FloatingNote>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-4 relative reveal" style={{ transitionDelay: "400ms" }}>
          <Link to={path("work")} className="btn-pink btn-press group">
            {t.ctaPrimary}
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45 duration-500" />
          </Link>
          <a href="#kontakt" className="btn-ghost-soft btn-press">
            {t.ctaSecondary}
          </a>
        </div>

        <Whisper className="mt-12">{t.whisper1}</Whisper>
      </section>

      <WaveDivider />

      {/* NOT ME */}
      <section className="container-editorial py-28">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-5 reveal-stagger">
            <p className="eyebrow mb-4 reveal-line">{t.s2eye}</p>
            <h2 className="display-lg reveal-line">
              {t.s2titleA}<br />
              <span className="italic text-rose">{t.s2titleB}</span>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-md reveal-line">{t.s2lead}</p>
          </div>
          <div className="col-span-12 md:col-span-7 space-y-5">
            {t.notMe.map(([a, b, c], i) => (
              <div key={i} className="reveal card-soft group flex flex-col md:flex-row md:items-center gap-6" style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="font-mono text-xs text-muted-foreground md:w-12">0{i + 1}</span>
                <div className="flex-1">
                  <p className="font-display text-2xl md:text-3xl group-hover:text-rose transition-colors duration-500">
                    {a} <span className="italic text-muted-foreground">{b}</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Whisper className="mt-16 text-center">{t.whisper2}</Whisper>
      </section>

      <WaveDivider flip />

      {/* WHY A WEBSITE MATTERS */}
      <section className="container-editorial py-28">
        <div className="grid grid-cols-12 gap-6 mb-16 reveal-stagger">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4 reveal-line">{t.mEye}</p>
            <h2 className="display-lg reveal-line">
              {t.mTitleA}<br />
              <span className="italic text-rose">{t.mTitleB}</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end reveal-line">
            <p className="text-muted-foreground leading-relaxed">{t.mLead}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.matters.map((m, i) => {
            const Icon = [ShieldCheck, TrendingUp, MessageCircle, Rocket, Clock, Eye][i];
            return (
              <div key={i} className="reveal glass-panel p-7 group" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="w-12 h-12 rounded-2xl bg-rose-soft flex items-center justify-center mb-5 transition-transform duration-500 group-hover:-rotate-6">
                  <Icon size={20} strokeWidth={1.4} className="text-rose" />
                </div>
                <h3 className="font-display text-2xl mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <WaveDivider />

      {/* SERVICES */}
      <section className="container-editorial py-28">
        <div className="grid grid-cols-12 gap-6 mb-16 reveal-stagger">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4 reveal-line">{t.s3eye}</p>
            <h2 className="display-lg reveal-line">
              {t.s3titleA}<br />
              <span className="italic text-rose">{t.s3titleB}</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end reveal-line">
            <p className="text-muted-foreground leading-relaxed">{t.s3lead}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <IconCard key={i} icon={serviceIcons[i]} title={s.title} desc={s.desc} variant={serviceVariants[i] === "default" ? undefined : serviceVariants[i]} index={i} />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link to={path("web")} className="btn-ghost-soft btn-press">
            {t.moreWeb} <ArrowRight size={14} />
          </Link>
          <Link to={path("seo")} className="btn-ghost-soft btn-press">
            {t.moreSeo} <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <WaveDivider />

      {/* STORYTELLING */}
      <section className="container-editorial py-32 md:py-40 scene-fade">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-8 reveal-line">{t.storyEye}</p>
          <h2 className="display-xl leading-[1.1] reveal-stagger">
            <span className="reveal-line block">{t.storyA}</span>
            <span className="reveal-line block italic text-rose">{t.storyB}</span>
          </h2>
          <p className="mt-12 text-xl md:text-2xl font-display italic text-foreground/80 leading-relaxed reveal">
            {t.storyC}
          </p>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto reveal" style={{ transitionDelay: "200ms" }}>
            {t.storyD}
          </p>
        </div>
      </section>

      <WaveDivider flip />

      {/* PROJECTS */}
      <section className="container-editorial py-28 relative">
        <div className="grid grid-cols-12 gap-6 mb-16 reveal-stagger">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4 reveal-line">{t.s4eye}</p>
            <h2 className="display-lg reveal-line">
              {t.s4titleA}<br />
              <span className="italic">{t.s4titleB}</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end reveal-line">
            <p className="text-lg leading-relaxed text-muted-foreground">{t.s4lead}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <Link to={path("work")} key={i} className="reveal group block" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="project-card frame-soft aspect-[4/5] mb-5">
                <img src={p.img} alt={`${p.name} — ${pick(lang, "Projekt von Marianna Kuzmenko", "Project by Marianna Kuzmenko")}`} loading="lazy" />
                <div className="project-overlay text-white">
                  <p className="font-mono text-[11px] uppercase tracking-widest opacity-80">{p.category}</p>
                  <h3 className="font-display text-2xl md:text-3xl mt-2">{p.name}</h3>
                  <p className="text-sm leading-relaxed opacity-90 mt-3">{p.desc}</p>
                </div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl group-hover:text-rose transition-colors duration-500">{p.name}</h3>
                  <p className="text-sm text-muted-foreground font-mono uppercase tracking-widest mt-1.5">{p.category}</p>
                </div>
                <ArrowUpRight className="transition-transform group-hover:rotate-45 duration-500 text-muted-foreground group-hover:text-rose mt-1" size={22} />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Link to={path("work")} className="btn-pink btn-press">
            {t.allProjects} <ArrowUpRight size={16} />
          </Link>
        </div>
        <Whisper className="mt-10">{t.whisper3}</Whisper>
      </section>

      <WaveDivider flip />

      {/* CONTRAST */}
      <section className="container-editorial py-28">
        <div className="text-center mb-16 reveal-stagger">
          <p className="eyebrow mb-4 reveal-line">{t.cEye}</p>
          <h2 className="display-lg reveal-line">
            {t.cTitleA} <span className="italic text-rose">{t.cTitleB}</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed reveal-line max-w-xl mx-auto">{t.cLead}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 relative">
          <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-rose/30 to-transparent" aria-hidden />

          <div className="reveal card-soft bg-secondary/40 relative overflow-hidden">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-4">{t.cWithoutTitle}</p>
            <ul className="space-y-4">
              {t.cWithout.map((line, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/70">
                  <span className="mt-1.5 w-7 h-7 rounded-full bg-background/60 flex items-center justify-center shrink-0">
                    <Minus size={14} strokeWidth={1.6} className="text-muted-foreground" />
                  </span>
                  <span className="leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal card-soft bg-rose-soft/40 relative overflow-hidden" style={{ transitionDelay: "120ms" }}>
            <p className="font-mono text-[11px] uppercase tracking-widest text-rose mb-4">{t.cWithTitle}</p>
            <ul className="space-y-4">
              {t.cWith.map((line, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-7 h-7 rounded-full bg-rose/15 flex items-center justify-center shrink-0">
                    <Plus size={14} strokeWidth={1.6} className="text-rose" />
                  </span>
                  <span className="leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <WaveDivider flip />

      {/* PROCESS */}
      <section className="container-editorial py-28">
        <div className="grid grid-cols-12 gap-6 mb-16 reveal-stagger">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4 reveal-line">{t.s5eye}</p>
            <h2 className="display-lg reveal-line">
              {t.s5titleA}<br />
              <span className="italic text-rose">{t.s5titleB}</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end reveal-line">
            <p className="text-muted-foreground leading-relaxed">{t.s5lead}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.process.map((p, i) => {
            const Icon = processIcons[i];
            return (
              <div key={i} className="reveal glass-panel p-7" style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-rose-soft flex items-center justify-center">
                    <Icon size={20} strokeWidth={1.5} className="text-rose" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground tracking-widest">{p.step}</span>
                </div>
                <h3 className="font-display text-2xl mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <WaveDivider />

      {/* WHY */}
      <section className="container-editorial py-28">
        <div className="grid grid-cols-12 gap-6 mb-16 reveal-stagger">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4 reveal-line">{t.s6eye}</p>
            <h2 className="display-lg reveal-line">
              {t.s6titleA}<br />
              <span className="italic text-rose">{t.s6titleB}</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end reveal-line">
            <p className="text-muted-foreground leading-relaxed">{t.s6lead}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.why.map((p, i) => {
            const Icon = whyIcons[i];
            return (
              <div key={i} className="reveal card-soft" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center mb-5">
                  <Icon size={20} strokeWidth={1.5} className="text-foreground" />
                </div>
                <h3 className="font-display text-xl md:text-2xl mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <WaveDivider flip />

      <EinblickSection />

      <WaveDivider />

      <Testimonials />

      <WaveDivider />

      {/* ENDING */}
      <section className="ending-scene scene-fade">
        <div className="container-editorial relative">
          <p className="eyebrow mb-6 reveal-line">{t.endEye}</p>
          <h2 className="ending-headline">
            {t.endA}<br />
            {t.endBefore}<span className="italic text-rose marker">{t.endB}</span>
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-muted-foreground leading-relaxed">{t.endLead}</p>
          <div className="mt-10 flex justify-center">
            <a href="#kontakt" className="btn-pink btn-press">
              {t.endCta} <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default Index;
