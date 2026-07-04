import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { IconCard } from "@/components/site/IconCard";
import { FloatingNote } from "@/components/site/FloatingNote";
import { ConversionCta } from "@/components/site/ConversionCta";
import {
  GraduationCap,
  Eye,
  Feather,
  Compass,
  Layers,
  Search,
  Rocket,
  Sparkles,
  ShieldCheck,
  Handshake,
  MessageCircle,
  Zap,
  Code2,
  BookOpen,
  HeartHandshake,
  Palette,
  Users,
  Award,
  Gauge,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import portraitWindow from "@/assets/portraits/marianna-portrait-window.jpeg";
import portraitPampas from "@/assets/portraits/marianna-portrait-pampas.jpeg";
import portraitSuit from "@/assets/portraits/marianna-portrait-suit.jpeg";
import portraitLaptop from "@/assets/portraits/marianna-laptop-coffee.jpeg";
import workspace from "@/assets/workspace.jpg";
import { useLang, pick, ROUTES } from "@/i18n/LanguageContext";

const UeberMich = () => {
  const { lang, path } = useLang();

  const t = pick(
    lang,
    {
      seoTitle: "Über mich — Marianna Kuzmenko · Webdesignerin & SEO in Nürnberg",
      seoDesc:
        "Marianna Kuzmenko: Webdesignerin, Entwicklerin und SEO-Beraterin aus Nürnberg. Ausgebildet in Portugal und Kanada. Persönlich, transparent, premium.",
      eye1: "02 — Über mich",
      h1A: "Hallo,",
      h1B: "ich bin",
      h1C: "Marianna.",
      heroLead:
        "Webdesignerin, Entwicklerin und SEO-Beraterin — mit Sitz in Nürnberg und Kund:innen in ganz Deutschland, Österreich, der Schweiz und international.",
      portraitAlt: "Marianna Kuzmenko, Webdesignerin und Entwicklerin in Nürnberg",
      whoEye: "Wer",
      who1a: "Ich verbinde ",
      who1b: "strategisches Design, saubere Entwicklung und SEO",
      who1c: " zu Websites, die Vertrauen aufbauen und Anfragen bringen.",
      who2: (
        <>
          Ausgebildet in <em>Portugal</em> und <em>Kanada</em>, spezialisiert
          auf UX/UI, Frontend-Entwicklung und Internet Marketing — heute in
          Nürnberg zuhause und für Marken in ganz Europa im Einsatz.
        </>
      ),
      who3a: "Mein Ziel ist einfach: ",
      who3b: "digitale Auftritte, die sichtbar sind und Ergebnisse bringen.",
      note: (
        <>
          „Strukturiert,
          <br />
          nicht steif."
        </>
      ),

      journeyEye: "03 — Mein Weg",
      journeyTitleA: "Von Design",
      journeyTitleB: "zur digitalen Strategie.",
      journey: [
        { icon: Palette, year: "2015", title: "Learning Design", desc: "Erste Schritte in visueller Gestaltung, Typografie und Bildkomposition." },
        { icon: Eye, year: "2017", title: "UX/UI Design", desc: "Fokus auf Nutzerführung, Interfaces und digitale Produkte." },
        { icon: Code2, year: "2019", title: "Frontend Development", desc: "Ausbildung in Portugal und Kanada — moderne Web-Technologien." },
        { icon: Search, year: "2021", title: "SEO & Marketing", desc: "Vertiefung in technisches SEO, Content-Struktur und Suchintention." },
        { icon: Sparkles, year: "2022", title: "Professionelle Projekte", desc: "Kundenprojekte für Kliniken, Kanzleien, Studios und Dienstleister." },
        { icon: Rocket, year: "Heute", title: "Marianna Kuzmenko Studio", desc: "Premium-Webdesign, Entwicklung und SEO aus Nürnberg — persönlich geführt." },
      ],

      philosophyEye: "04 — Design-Philosophie",
      philosophyTitleA: "Klarheit ist",
      philosophyTitleB: "die höchste Form von Luxus.",
      philosophyLead:
        "Ich glaube an ruhige, hochwertige Gestaltung — die nicht ablenkt, sondern das Wesentliche stärkt.",
      philosophy: [
        { icon: Feather, title: "Ruhig statt laut", desc: "Weißraum, klare Typografie und präzise Details statt visueller Überlastung." },
        { icon: Compass, title: "Führung statt Chaos", desc: "Jede Seite hat einen klaren Zweck und einen klaren nächsten Schritt." },
        { icon: ShieldCheck, title: "Substanz statt Trend", desc: "Struktur, SEO und Performance sind wichtiger als kurzlebige Effekte." },
      ],

      methodEye: "05 — Wie ich arbeite",
      methodTitleA: "Strukturiert,",
      methodTitleB: "transparent, persönlich.",
      method: [
        { icon: Layers, title: "Strukturiert", desc: "Klare Phasen, klare Deliverables. Kein Chaos, kein Bauchgefühl." },
        { icon: Eye, title: "Transparent", desc: "Du siehst, was passiert. Immer. Updates ohne Marketing-Geschwafel." },
        { icon: Zap, title: "Ohne Komplexität", desc: "Nur das, was wirklich nötig ist — kein Tool-Overkill." },
        { icon: HeartHandshake, title: "Langfristig", desc: "Ich baue Beziehungen, nicht nur Websites — für nachhaltige Zusammenarbeit." },
      ],

      diffEye: "06 — Was mich anders macht",
      diffTitleA: "Kein Template.",
      diffTitleB: "Kein Kompromiss.",
      diffLead:
        "Jede Website entsteht individuell — mit Fokus auf Marke, Nutzer:innen und Suchmaschinen.",
      diff: [
        { icon: Sparkles, title: "Individuelles Design", desc: "Kein Baukasten, kein Theme — jedes Projekt beginnt mit einem leeren Blatt." },
        { icon: Search, title: "SEO von Anfang an", desc: "Struktur, Content und Technik werden für Sichtbarkeit gebaut, nicht nachgerüstet." },
        { icon: Gauge, title: "Schnelle Websites", desc: "Sauberer Code, optimierte Bilder, Core Web Vitals im grünen Bereich." },
        { icon: Code2, title: "Moderne Technologien", desc: "React, TypeScript, Vite — professioneller Stack, wartbare Basis." },
        { icon: MessageCircle, title: "Persönliche Betreuung", desc: "Du sprichst mit mir. Nicht mit einer Agentur-Hotline oder einem Junior." },
        { icon: Handshake, title: "Langfristige Partnerschaft", desc: "Support, Wartung und Weiterentwicklung nach dem Launch." },
      ],

      valuesEye: "07 — Meine Werte",
      valuesTitleA: "Was mir",
      valuesTitleB: "wichtig ist.",
      values: [
        { icon: Eye, title: "Transparenz" },
        { icon: Award, title: "Qualität" },
        { icon: Palette, title: "Kreativität" },
        { icon: ShieldCheck, title: "Ehrlichkeit" },
        { icon: Handshake, title: "Verlässlichkeit" },
        { icon: BookOpen, title: "Weiterbildung" },
        { icon: MessageCircle, title: "Persönliche Kommunikation" },
        { icon: HeartHandshake, title: "Langfristige Partnerschaft" },
      ],

      expectEye: "08 — Was du erwarten kannst",
      expectTitleA: "Klare Ergebnisse.",
      expectTitleB: "Ohne Marketing-Nebel.",
      expect: [
        { icon: TrendingUp, title: "Bessere Sichtbarkeit", desc: "SEO-optimierte Struktur, die in Google gefunden wird." },
        { icon: ShieldCheck, title: "Mehr Vertrauen", desc: "Professioneller Auftritt, der Qualität sichtbar macht." },
        { icon: Users, title: "Passende Anfragen", desc: "Klare Botschaften ziehen die richtige Zielgruppe an." },
        { icon: Smartphone, title: "Mobile-First", desc: "Perfekte Darstellung auf jedem Gerät — vom iPhone bis zum Desktop." },
      ],

      workspaceAlt: "Mariannas Arbeitsplatz mit Laptop, Notizbuch und Kaffee",
      pampasAlt: "Marianna Kuzmenko in warmem Licht",
      laptopAlt: "Marianna arbeitet am Laptop mit Kaffee",
      suitAlt: "Marianna Kuzmenko im schwarzen Blazer",

      ctaEye: "— Bereit? —",
      ctaTitle: (
        <>
          Lass uns etwas <span className="italic text-rose">Großartiges</span> bauen.
        </>
      ),
      ctaLead:
        "Wenn du eine Website willst, die deine Marke wirklich trägt — sprechen wir darüber.",
      ctaPrimary: "Projekt starten",
      ctaSecondary: "Projekte ansehen",
    },
    {
      seoTitle: "About — Marianna Kuzmenko · Web Designer & SEO in Nuremberg",
      seoDesc:
        "Marianna Kuzmenko: web designer, developer and SEO consultant based in Nuremberg. Trained in Portugal and Canada. Personal, transparent, premium.",
      eye1: "02 — About",
      h1A: "Hello,",
      h1B: "I’m",
      h1C: "Marianna.",
      heroLead:
        "Web designer, developer and SEO consultant — based in Nuremberg, working with clients across Germany, Austria, Switzerland and internationally.",
      portraitAlt: "Marianna Kuzmenko, web designer and developer based in Nuremberg",
      whoEye: "Who",
      who1a: "I bring together ",
      who1b: "strategic design, clean development and SEO",
      who1c: " to build websites that earn trust and generate inquiries.",
      who2: (
        <>
          Trained in <em>Portugal</em> and <em>Canada</em>, specialized in UX/UI,
          frontend development and internet marketing — now based in Nuremberg,
          working with brands across Europe.
        </>
      ),
      who3a: "My goal is simple: ",
      who3b: "digital presences that get found and bring results.",
      note: (
        <>
          “Structured,
          <br />
          never stiff.”
        </>
      ),

      journeyEye: "03 — My Journey",
      journeyTitleA: "From design",
      journeyTitleB: "to digital strategy.",
      journey: [
        { icon: Palette, year: "2015", title: "Learning Design", desc: "First steps in visual design, typography and composition." },
        { icon: Eye, year: "2017", title: "UX/UI Design", desc: "Focus on user flows, interfaces and digital products." },
        { icon: Code2, year: "2019", title: "Frontend Development", desc: "Trained in Portugal and Canada — modern web technologies." },
        { icon: Search, year: "2021", title: "SEO & Marketing", desc: "Deep-dive into technical SEO, content structure and search intent." },
        { icon: Sparkles, year: "2022", title: "Professional Projects", desc: "Client work for clinics, law firms, studios and service brands." },
        { icon: Rocket, year: "Today", title: "Marianna Kuzmenko Studio", desc: "Premium web design, development and SEO from Nuremberg — personally led." },
      ],

      philosophyEye: "04 — Design Philosophy",
      philosophyTitleA: "Clarity is",
      philosophyTitleB: "the highest form of luxury.",
      philosophyLead:
        "I believe in calm, refined design — that never distracts, only strengthens the essential.",
      philosophy: [
        { icon: Feather, title: "Calm over loud", desc: "Whitespace, clear typography and precise detail instead of visual overload." },
        { icon: Compass, title: "Guidance over chaos", desc: "Every page has a clear purpose and a clear next step." },
        { icon: ShieldCheck, title: "Substance over trend", desc: "Structure, SEO and performance matter more than short-lived effects." },
      ],

      methodEye: "05 — How I work",
      methodTitleA: "Structured,",
      methodTitleB: "transparent, personal.",
      method: [
        { icon: Layers, title: "Structured", desc: "Clear phases, clear deliverables. No chaos, no guesswork." },
        { icon: Eye, title: "Transparent", desc: "You see what’s happening. Always. Updates without marketing fog." },
        { icon: Zap, title: "Without complexity", desc: "Only what’s actually needed — no tool overkill." },
        { icon: HeartHandshake, title: "Long-term", desc: "I build relationships, not just websites — for lasting partnerships." },
      ],

      diffEye: "06 — What makes me different",
      diffTitleA: "No template.",
      diffTitleB: "No compromise.",
      diffLead: "Every website is built individually — with focus on brand, users and search engines.",
      diff: [
        { icon: Sparkles, title: "Individual design", desc: "No page builder, no theme — every project starts with a blank canvas." },
        { icon: Search, title: "SEO from the start", desc: "Structure, content and tech built for visibility — not bolted on later." },
        { icon: Gauge, title: "Fast websites", desc: "Clean code, optimized assets, Core Web Vitals in the green." },
        { icon: Code2, title: "Modern technologies", desc: "React, TypeScript, Vite — a professional, maintainable stack." },
        { icon: MessageCircle, title: "Personal support", desc: "You talk to me. Not to an agency hotline or a junior team." },
        { icon: Handshake, title: "Long-term partnership", desc: "Support, maintenance and evolution long after launch." },
      ],

      valuesEye: "07 — My values",
      valuesTitleA: "What",
      valuesTitleB: "matters to me.",
      values: [
        { icon: Eye, title: "Transparency" },
        { icon: Award, title: "Quality" },
        { icon: Palette, title: "Creativity" },
        { icon: ShieldCheck, title: "Honesty" },
        { icon: Handshake, title: "Reliability" },
        { icon: BookOpen, title: "Continuous learning" },
        { icon: MessageCircle, title: "Personal communication" },
        { icon: HeartHandshake, title: "Long-term partnership" },
      ],

      expectEye: "08 — What you can expect",
      expectTitleA: "Clear outcomes.",
      expectTitleB: "No marketing fog.",
      expect: [
        { icon: TrendingUp, title: "Better visibility", desc: "SEO-optimized structure that gets found on Google." },
        { icon: ShieldCheck, title: "More trust", desc: "A professional presence that makes quality visible." },
        { icon: Users, title: "Relevant inquiries", desc: "Clear messaging attracts the right audience." },
        { icon: Smartphone, title: "Mobile-first", desc: "Perfect display on every device — from iPhone to desktop." },
      ],

      workspaceAlt: "Marianna’s workspace with laptop, notebook and coffee",
      pampasAlt: "Marianna Kuzmenko in warm light",
      laptopAlt: "Marianna working on laptop with coffee",
      suitAlt: "Marianna Kuzmenko in a black blazer",

      ctaEye: "— Ready? —",
      ctaTitle: (
        <>
          Let’s build something <span className="italic text-rose">great</span>.
        </>
      ),
      ctaLead:
        "If you want a website that truly carries your brand — let’s talk about it.",
      ctaPrimary: "Start a project",
      ctaSecondary: "View projects",
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

      {/* HERO */}
      <section className="container-editorial pt-12 md:pt-20 pb-16 relative">
        <div
          className="blob blob-blue animate-float-slower"
          style={{ width: 420, height: 420, top: "100px", left: "-100px" }}
        />
        <div
          className="blob blob-pink animate-float-slow"
          style={{ width: 320, height: 320, bottom: "-40px", right: "-80px" }}
        />
        <p className="eyebrow mb-6 relative">{t.eye1}</p>
        <div className="grid grid-cols-12 gap-8 items-end relative">
          <div className="col-span-12 md:col-span-8">
            <h1 className="display-xl">
              {t.h1A}
              <br />
              <span className="italic">{t.h1B}</span>{" "}
              <span className="text-rose">{t.h1C}</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t.heroLead}
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 relative">
            <div className="frame-soft aspect-[3/4] max-w-[340px] ml-auto">
              <img src={portraitWindow} alt={t.portraitAlt} loading="eager" />
            </div>
            <div
              className="hidden md:block frame-soft aspect-square w-32 absolute -bottom-10 -left-6 shadow-xl"
              style={{ transform: "rotate(-4deg)" }}
            >
              <img src={portraitLaptop} alt={t.laptopAlt} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* WHO I AM */}
      <section className="container-editorial pb-24">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-2">
            <p className="eyebrow">{t.whoEye}</p>
          </div>
          <div className="col-span-12 md:col-span-7 space-y-6 text-xl md:text-2xl leading-relaxed font-display">
            <p className="reveal">
              {t.who1a}
              <span className="marker">{t.who1b}</span>
              {t.who1c}
            </p>
            <p className="reveal" style={{ transitionDelay: "120ms" }}>
              {t.who2}
            </p>
            <p className="reveal" style={{ transitionDelay: "240ms" }}>
              {t.who3a}
              <span className="text-rose">{t.who3b}</span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 mt-6 md:mt-12">
            <FloatingNote rotate={4}>{t.note}</FloatingNote>
          </div>
        </div>
      </section>

      {/* EDITORIAL PHOTO COMPOSITION */}
      <section className="container-editorial pb-28">
        <div className="grid grid-cols-12 gap-4 md:gap-6 items-end">
          <div className="col-span-7 md:col-span-5">
            <div className="frame-soft aspect-[4/5]">
              <img src={portraitPampas} alt={t.pampasAlt} loading="lazy" />
            </div>
          </div>
          <div className="col-span-5 md:col-span-4 md:mb-16">
            <div className="frame-soft aspect-square">
              <img src={portraitSuit} alt={t.suitAlt} loading="lazy" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="frame-soft aspect-[3/4]">
              <img src={workspace} alt={t.workspaceAlt} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY / TIMELINE */}
      <section className="container-editorial pb-28">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-4">{t.journeyEye}</p>
            <h2 className="display-lg">
              {t.journeyTitleA}
              <br />
              <span className="italic text-rose">{t.journeyTitleB}</span>
            </h2>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* animated connecting line */}
          <div
            className="absolute left-6 md:left-1/2 top-2 bottom-2 w-px -translate-x-0 md:-translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, transparent, hsl(var(--rose) / 0.6), hsl(var(--sky-deep) / 0.4), transparent)",
            }}
            aria-hidden
          />
          <ol className="space-y-10 md:space-y-14">
            {t.journey.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={i}
                  className={`reveal relative grid grid-cols-12 gap-4 md:gap-8 items-center`}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  {/* dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose ring-4 ring-background z-10" />
                  {/* content */}
                  <div
                    className={`col-span-12 pl-16 md:pl-0 ${
                      isLeft ? "md:col-span-5 md:pr-10 md:text-right" : "md:col-start-8 md:col-span-5 md:pl-10"
                    }`}
                  >
                    <div className="card-soft group cursor-default">
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                          {step.year}
                        </span>
                        <div className="w-10 h-10 rounded-2xl bg-paper flex items-center justify-center transition-transform duration-500 group-hover:-rotate-6">
                          <Icon size={18} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="font-display text-2xl mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="container-editorial pb-28">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-4">{t.philosophyEye}</p>
            <h2 className="display-lg">
              {t.philosophyTitleA}
              <br />
              <span className="italic text-rose">{t.philosophyTitleB}</span>
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
              {t.philosophyLead}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.philosophy.map((p, i) => (
            <IconCard
              key={i}
              icon={p.icon}
              title={p.title}
              desc={p.desc}
              index={i}
              variant={i === 1 ? "blue" : i === 2 ? "pink" : "default"}
            />
          ))}
        </div>
      </section>

      {/* METHOD */}
      <section className="container-editorial pb-28">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-4">{t.methodEye}</p>
            <h2 className="display-lg">
              {t.methodTitleA}
              <br />
              <span className="italic text-rose">{t.methodTitleB}</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.method.map((m, i) => (
            <IconCard key={i} icon={m.icon} title={m.title} desc={m.desc} index={i} />
          ))}
        </div>
      </section>

      {/* WHAT MAKES ME DIFFERENT */}
      <section className="container-editorial pb-28">
        <div className="card-soft p-8 md:p-14" style={{ background: "var(--gradient-soft)" }}>
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-8">
              <p className="eyebrow mb-4">{t.diffEye}</p>
              <h2 className="display-lg">
                {t.diffTitleA}
                <br />
                <span className="italic text-rose">{t.diffTitleB}</span>
              </h2>
              <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
                {t.diffLead}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {t.diff.map((d, i) => {
              const Icon = d.icon;
              return (
                <div
                  key={i}
                  className="reveal card-soft group cursor-default bg-background/70 backdrop-blur"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="w-11 h-11 rounded-2xl bg-paper flex items-center justify-center mb-5 transition-transform duration-500 group-hover:-rotate-6">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl mb-2">{d.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-editorial pb-28">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-4">{t.valuesEye}</p>
            <h2 className="display-lg">
              {t.valuesTitleA}
              <br />
              <span className="italic text-rose">{t.valuesTitleB}</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {t.values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="reveal card-soft flex flex-col items-start gap-4 group cursor-default"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-11 h-11 rounded-2xl bg-rose-soft flex items-center justify-center transition-transform duration-500 group-hover:-rotate-6">
                  <Icon size={20} strokeWidth={1.5} className="text-foreground" />
                </div>
                <h3 className="font-display text-lg md:text-xl leading-tight">
                  {v.title}
                </h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHAT CLIENTS CAN EXPECT */}
      <section className="container-editorial pb-28">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-4">{t.expectEye}</p>
            <h2 className="display-lg">
              {t.expectTitleA}
              <br />
              <span className="italic text-rose">{t.expectTitleB}</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.expect.map((e, i) => (
            <IconCard
              key={i}
              icon={e.icon}
              title={e.title}
              desc={e.desc}
              index={i}
              variant={i % 2 === 0 ? "default" : "blue"}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <ConversionCta
        eyebrow={t.ctaEye}
        title={t.ctaTitle}
        lead={t.ctaLead}
        primary={{ label: t.ctaPrimary, href: path("inquiry") }}
        secondary={{ label: t.ctaSecondary, href: path("work") }}
      />
    </Layout>
  );
};

export default UeberMich;
