import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { IconCard } from "@/components/site/IconCard";
import { FloatingNote } from "@/components/site/FloatingNote";
import { ConversionCta } from "@/components/site/ConversionCta";
import { LaptopMockup } from "@/components/site/LaptopMockup";
import {
  ArrowUpRight,
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
  Coffee,
  Globe2,
  MapPin,
  Wifi,
  Clock,
  Heart,
  Pencil,
  Monitor,
  FileCode2,
  Braces,
  Component,
  Boxes,
  ImageIcon,
  Brush,
  Camera,
  Building2,
  Leaf,
  Cloud,
  Type,
  Lightbulb,
  Coffee as CoffeeIcon,
} from "lucide-react";
import portraitWindow from "@/assets/portraits/marianna-portrait-window.jpeg";
import portraitPampas from "@/assets/portraits/marianna-portrait-pampas.jpeg";
import portraitSuit from "@/assets/portraits/marianna-portrait-suit.jpeg";
import portraitLaptop from "@/assets/portraits/marianna-laptop-coffee.jpeg";
import workspace from "@/assets/workspace.jpg";
import projectAtelier from "@/assets/projects/atelier-nova.png";
import projectDental from "@/assets/projects/dentallux.png";
import projectLush from "@/assets/projects/lush-bloom.png";
import projectRaum from "@/assets/projects/raumform.png";
import projectNein from "@/assets/projects/nein-studio.png";
import { useLang, pick, ROUTES } from "@/i18n/LanguageContext";

const UeberMich = () => {
  const { lang, path } = useLang();

  const t = pick(
    lang,
    {
      seoTitle: "Über mich — Marianna Kuzmenko · Webdesignerin & SEO in Nürnberg",
      seoDesc:
        "Marianna Kuzmenko: Webdesignerin, Entwicklerin und SEO-Beraterin aus Nürnberg. Ausgebildet in Portugal und Kanada. Persönlich, transparent, premium.",

      // HERO
      heroEye: "02 — Über mich",
      heroTitleA: "Websites, die",
      heroTitleB: "Vertrauen schaffen",
      heroTitleC: "und Unternehmen wachsen lassen.",
      heroLead:
        "Ich bin Marianna — Webdesignerin, Entwicklerin und SEO-Beraterin aus Nürnberg. Ich baue digitale Auftritte, die Marken tragen und Kund:innen bringen.",
      heroPrimary: "Projekte ansehen",
      heroSecondary: "Kostenloses Erstgespräch",
      heroBadge: "Verfügbar für neue Projekte",
      portraitAlt: "Marianna Kuzmenko, Webdesignerin und Entwicklerin",

      // STORY CHAPTERS
      chaptersEye: "03 — Meine Geschichte",
      chaptersTitleA: "Wie alles",
      chaptersTitleB: "begonnen hat.",
      chapters: [
        {
          num: "01",
          eye: "Der Anfang",
          title: "Wie es angefangen hat.",
          body: "Meine Reise begann mit Skizzen, Farben und Neugier. Ich wollte verstehen, warum manche Marken sofort Vertrauen ausstrahlen — und andere nicht. Diese Frage führte mich zum Design.",
          image: portraitPampas,
        },
        {
          num: "02",
          eye: "Warum Webdesign",
          title: "Warum ich Webdesign gewählt habe.",
          body: "Eine gute Website ist mehr als eine schöne Oberfläche. Sie ist ein stiller Verkäufer, der 24/7 arbeitet. Genau das begeistert mich: Ästhetik, die messbar Ergebnisse liefert.",
          image: workspace,
        },
        {
          num: "03",
          eye: "Meine Leidenschaft für UX",
          title: "Wenn Design zur Führung wird.",
          body: "UX ist für mich unsichtbare Höflichkeit. Nutzer:innen sollen sich nie fragen müssen, wo sie klicken. Jede Interaktion ist eine kleine Entscheidung — und jede Entscheidung ein Moment für Vertrauen.",
          image: portraitLaptop,
        },
        {
          num: "04",
          eye: "Warum SEO zählt",
          title: "Sichtbarkeit ist kein Zufall.",
          body: "Die schönste Website nützt nichts, wenn sie niemand findet. Deshalb baue ich SEO von der ersten Zeile Code an ein — nicht als nachträglichen Gedanken.",
          image: projectDental,
        },
        {
          num: "05",
          eye: "Was ich am meisten liebe",
          title: "Die Arbeit mit Menschen.",
          body: "Am schönsten ist der Moment, wenn Kund:innen ihre neue Website zum ersten Mal sehen — und lächeln. Für dieses Lächeln baue ich jeden Tag weiter.",
          image: portraitSuit,
        },
      ],

      // JOURNEY
      journeyEye: "04 — Mein Weg",
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

      // PRINCIPLES
      principlesEye: "05 — Meine Design-Prinzipien",
      principlesTitleA: "Klar. Schnell.",
      principlesTitleB: "Menschlich.",
      principles: [
        { icon: Feather, title: "Minimales Design", desc: "Nur was zählt. Kein visueller Lärm, kein Ballast." },
        { icon: Gauge, title: "Schnelle Performance", desc: "Optimierte Ladezeiten. Core Web Vitals im grünen Bereich." },
        { icon: Search, title: "SEO First", desc: "Struktur, die Google versteht — von der ersten Zeile an." },
        { icon: Smartphone, title: "Responsive", desc: "Perfekt vom iPhone SE bis zum 4K-Monitor." },
        { icon: ShieldCheck, title: "Accessibility", desc: "Zugänglich für alle. Nach WCAG-Standards gebaut." },
        { icon: Sparkles, title: "Moderne Technologien", desc: "React, TypeScript, Vite — ein professioneller Stack." },
        { icon: HeartHandshake, title: "User Experience", desc: "Interfaces, die sich intuitiv anfühlen." },
        { icon: Code2, title: "Clean Code", desc: "Wartbar, lesbar, dokumentiert — Handwerk in HTML." },
      ],

      // TOOLKIT
      toolkitEye: "06 — Mein Werkzeugkasten",
      toolkitTitleA: "Werkzeuge,",
      toolkitTitleB: "die ich täglich nutze.",
      toolkit: [
        { icon: Pencil, name: "Figma", tag: "Design" },
        { icon: FileCode2, name: "HTML", tag: "Struktur" },
        { icon: Brush, name: "CSS", tag: "Style" },
        { icon: Braces, name: "JavaScript", tag: "Logik" },
        { icon: Boxes, name: "Bootstrap", tag: "Layout" },
        { icon: Component, name: "React", tag: "Framework" },
        { icon: Monitor, name: "VS Code", tag: "Editor" },
        { icon: ImageIcon, name: "Photoshop", tag: "Bild" },
        { icon: Palette, name: "Illustrator", tag: "Vektor" },
      ],

      // INSPIRATION
      inspEye: "07 — Was mich inspiriert",
      inspTitleA: "Klarheit,",
      inspTitleB: "Ruhe, Struktur.",
      inspLead:
        "Meine Sprache im Design entsteht abseits des Bildschirms — in Architektur, Natur und Alltag.",
      inspItems: [
        { icon: Building2, label: "Moderne Architektur" },
        { icon: Layers, label: "Minimale Interiors" },
        { icon: Leaf, label: "Natur" },
        { icon: Cloud, label: "Blauer Himmel" },
        { icon: Type, label: "Typografie" },
        { icon: Lightbulb, label: "Kreative Workspaces" },
        { icon: Sparkles, label: "Premium-Websites" },
        { icon: Smartphone, label: "Digitale Produkte" },
      ],

      // BEHIND THE SCENES
      btsEye: "08 — Behind My Work",
      btsTitleA: "Hinter",
      btsTitleB: "den Kulissen.",
      btsLead:
        "Bevor eine Website live geht, entstehen Skizzen, Wireframes, Farbstudien und viele Tassen Kaffee.",
      bts: [
        { image: workspace, cap: "Der Arbeitsplatz — ruhig, warm, konzentriert." },
        { image: portraitLaptop, cap: "Design-Sessions mit Kaffee und Notizbuch." },
        { image: projectAtelier, cap: "Erste Layout-Ideen im Browser." },
        { image: projectRaum, cap: "Feinschliff an Typografie und Weißraum." },
      ],

      // PHILOSOPHY
      philosophyEye: "09 — Design-Philosophie",
      philosophyTitleA: "Klarheit ist",
      philosophyTitleB: "die höchste Form von Luxus.",
      philosophyLead:
        "Ich glaube an ruhige, hochwertige Gestaltung — die nicht ablenkt, sondern das Wesentliche stärkt.",
      philosophy: [
        { icon: Feather, title: "Ruhig statt laut", desc: "Weißraum, klare Typografie und präzise Details statt visueller Überlastung." },
        { icon: Compass, title: "Führung statt Chaos", desc: "Jede Seite hat einen klaren Zweck und einen klaren nächsten Schritt." },
        { icon: ShieldCheck, title: "Substanz statt Trend", desc: "Struktur, SEO und Performance sind wichtiger als kurzlebige Effekte." },
      ],

      // METHOD
      methodEye: "10 — Wie ich arbeite",
      methodTitleA: "Strukturiert,",
      methodTitleB: "transparent, persönlich.",
      method: [
        { icon: Layers, title: "Strukturiert", desc: "Klare Phasen, klare Deliverables. Kein Chaos, kein Bauchgefühl." },
        { icon: Eye, title: "Transparent", desc: "Du siehst, was passiert. Immer. Updates ohne Marketing-Geschwafel." },
        { icon: Zap, title: "Ohne Komplexität", desc: "Nur das, was wirklich nötig ist — kein Tool-Overkill." },
        { icon: HeartHandshake, title: "Langfristig", desc: "Ich baue Beziehungen, nicht nur Websites — für nachhaltige Zusammenarbeit." },
      ],

      // QUICK FACTS
      quickEye: "11 — Quick Facts",
      quickTitleA: "Auf einen",
      quickTitleB: "Blick.",
      quick: [
        { icon: Wifi, title: "Remote Work", desc: "Ortsunabhängig, immer erreichbar." },
        { icon: MapPin, title: "DACH-Region", desc: "Deutschland, Österreich, Schweiz." },
        { icon: Smartphone, title: "Responsive Design", desc: "Mobile-first, ohne Kompromisse." },
        { icon: Search, title: "SEO-Optimiert", desc: "Sichtbar in Google — von Anfang an." },
        { icon: MessageCircle, title: "Persönliche Kommunikation", desc: "Du sprichst direkt mit mir." },
        { icon: Clock, title: "Schnelle Antwortzeit", desc: "Rückmeldung innerhalb von 24 Stunden." },
        { icon: Award, title: "Premium-Qualität", desc: "Handgemacht, nicht aus dem Baukasten." },
        { icon: Globe2, title: "Zwei Sprachen", desc: "Deutsch und Englisch, jederzeit." },
      ],

      // FUN FACTS
      funEye: "12 — Fun Facts",
      funTitleA: "Kleine Dinge,",
      funTitleB: "die mich ausmachen.",
      fun: [
        { emoji: "☕", label: "Coffee Lover" },
        { emoji: "💙", label: "Minimalist Design" },
        { emoji: "🌍", label: "Working Across Europe" },
        { emoji: "🚀", label: "Always Learning" },
        { emoji: "🎨", label: "Design with Purpose" },
      ],

      // CTA
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

      heroEye: "02 — About",
      heroTitleA: "Websites that",
      heroTitleB: "inspire trust",
      heroTitleC: "and help businesses grow.",
      heroLead:
        "I'm Marianna — web designer, developer and SEO consultant based in Nuremberg. I build digital presences that carry brands and bring clients.",
      heroPrimary: "View my projects",
      heroSecondary: "Book a free consultation",
      heroBadge: "Available for new projects",
      portraitAlt: "Marianna Kuzmenko, web designer and developer",

      chaptersEye: "03 — My Story",
      chaptersTitleA: "How it",
      chaptersTitleB: "all started.",
      chapters: [
        {
          num: "01",
          eye: "The beginning",
          title: "How it all started.",
          body: "My journey began with sketches, color, and curiosity. I wanted to understand why some brands instantly feel trustworthy — and others don't. That question led me to design.",
          image: portraitPampas,
        },
        {
          num: "02",
          eye: "Why web design",
          title: "Why I chose web design.",
          body: "A great website is more than a beautiful surface. It's a silent salesperson working 24/7. That's what excites me: aesthetics that deliver measurable results.",
          image: workspace,
        },
        {
          num: "03",
          eye: "My passion for UX",
          title: "When design becomes guidance.",
          body: "UX, to me, is invisible courtesy. Users should never have to wonder where to click. Every interaction is a small decision — and every decision a moment for trust.",
          image: portraitLaptop,
        },
        {
          num: "04",
          eye: "Why SEO matters",
          title: "Visibility is not a coincidence.",
          body: "The most beautiful website is useless if nobody finds it. That's why I build SEO in from the very first line of code — never as an afterthought.",
          image: projectDental,
        },
        {
          num: "05",
          eye: "What I love most",
          title: "Working with people.",
          body: "The best moment is when clients see their new website for the first time — and smile. For that smile, I keep building every day.",
          image: portraitSuit,
        },
      ],

      journeyEye: "04 — My Journey",
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

      principlesEye: "05 — My Design Principles",
      principlesTitleA: "Clear. Fast.",
      principlesTitleB: "Human.",
      principles: [
        { icon: Feather, title: "Minimal Design", desc: "Only what matters. No visual noise, no ballast." },
        { icon: Gauge, title: "Fast Performance", desc: "Optimized load times. Core Web Vitals in the green." },
        { icon: Search, title: "SEO First", desc: "Structure Google understands — from the first line." },
        { icon: Smartphone, title: "Responsive", desc: "Perfect from iPhone SE to 4K displays." },
        { icon: ShieldCheck, title: "Accessibility", desc: "Accessible to everyone. Built to WCAG standards." },
        { icon: Sparkles, title: "Modern Technologies", desc: "React, TypeScript, Vite — a professional stack." },
        { icon: HeartHandshake, title: "User Experience", desc: "Interfaces that feel intuitive." },
        { icon: Code2, title: "Clean Code", desc: "Maintainable, readable, documented — craft in HTML." },
      ],

      toolkitEye: "06 — My Toolkit",
      toolkitTitleA: "Tools I",
      toolkitTitleB: "use every day.",
      toolkit: [
        { icon: Pencil, name: "Figma", tag: "Design" },
        { icon: FileCode2, name: "HTML", tag: "Structure" },
        { icon: Brush, name: "CSS", tag: "Style" },
        { icon: Braces, name: "JavaScript", tag: "Logic" },
        { icon: Boxes, name: "Bootstrap", tag: "Layout" },
        { icon: Component, name: "React", tag: "Framework" },
        { icon: Monitor, name: "VS Code", tag: "Editor" },
        { icon: ImageIcon, name: "Photoshop", tag: "Image" },
        { icon: Palette, name: "Illustrator", tag: "Vector" },
      ],

      inspEye: "07 — What Inspires Me",
      inspTitleA: "Clarity,",
      inspTitleB: "calm, structure.",
      inspLead:
        "My design language grows away from the screen — in architecture, nature and everyday moments.",
      inspItems: [
        { icon: Building2, label: "Modern Architecture" },
        { icon: Layers, label: "Minimal Interiors" },
        { icon: Leaf, label: "Nature" },
        { icon: Cloud, label: "Blue Sky" },
        { icon: Type, label: "Typography" },
        { icon: Lightbulb, label: "Creative Workspaces" },
        { icon: Sparkles, label: "Premium Websites" },
        { icon: Smartphone, label: "Digital Products" },
      ],

      btsEye: "08 — Behind My Work",
      btsTitleA: "Behind",
      btsTitleB: "the scenes.",
      btsLead:
        "Before a website goes live, there are sketches, wireframes, color studies and many cups of coffee.",
      bts: [
        { image: workspace, cap: "The workspace — calm, warm, focused." },
        { image: portraitLaptop, cap: "Design sessions with coffee and notebook." },
        { image: projectAtelier, cap: "First layout ideas in the browser." },
        { image: projectRaum, cap: "Refining typography and whitespace." },
      ],

      philosophyEye: "09 — Design Philosophy",
      philosophyTitleA: "Clarity is",
      philosophyTitleB: "the highest form of luxury.",
      philosophyLead:
        "I believe in calm, refined design — that never distracts, only strengthens the essential.",
      philosophy: [
        { icon: Feather, title: "Calm over loud", desc: "Whitespace, clear typography and precise detail instead of visual overload." },
        { icon: Compass, title: "Guidance over chaos", desc: "Every page has a clear purpose and a clear next step." },
        { icon: ShieldCheck, title: "Substance over trend", desc: "Structure, SEO and performance matter more than short-lived effects." },
      ],

      methodEye: "10 — How I work",
      methodTitleA: "Structured,",
      methodTitleB: "transparent, personal.",
      method: [
        { icon: Layers, title: "Structured", desc: "Clear phases, clear deliverables. No chaos, no guesswork." },
        { icon: Eye, title: "Transparent", desc: "You see what's happening. Always. Updates without marketing fog." },
        { icon: Zap, title: "Without complexity", desc: "Only what's actually needed — no tool overkill." },
        { icon: HeartHandshake, title: "Long-term", desc: "I build relationships, not just websites — for lasting partnerships." },
      ],

      quickEye: "11 — Quick Facts",
      quickTitleA: "At a",
      quickTitleB: "glance.",
      quick: [
        { icon: Wifi, title: "Remote Work", desc: "Location-independent, always reachable." },
        { icon: MapPin, title: "DACH Region", desc: "Germany, Austria, Switzerland." },
        { icon: Smartphone, title: "Responsive Design", desc: "Mobile-first, no compromises." },
        { icon: Search, title: "SEO Optimized", desc: "Visible in Google — from day one." },
        { icon: MessageCircle, title: "Personal Communication", desc: "You talk directly to me." },
        { icon: Clock, title: "Fast Response", desc: "Reply within 24 hours." },
        { icon: Award, title: "Premium Quality", desc: "Handcrafted, never templated." },
        { icon: Globe2, title: "Two Languages", desc: "German and English, anytime." },
      ],

      funEye: "12 — Fun Facts",
      funTitleA: "Small things",
      funTitleB: "that shape me.",
      fun: [
        { emoji: "☕", label: "Coffee Lover" },
        { emoji: "💙", label: "Minimalist Design" },
        { emoji: "🌍", label: "Working Across Europe" },
        { emoji: "🚀", label: "Always Learning" },
        { emoji: "🎨", label: "Design with Purpose" },
      ],

      ctaEye: "— Ready? —",
      ctaTitle: (
        <>
          Let's build something <span className="italic text-rose">great</span>.
        </>
      ),
      ctaLead:
        "If you want a website that truly carries your brand — let's talk about it.",
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

      {/* ============ HERO ============ */}
      <section className="container-editorial pt-10 md:pt-16 pb-24 relative overflow-hidden">
        {/* soft animated background */}
        <div
          className="blob blob-blue animate-float-slower"
          style={{ width: 560, height: 560, top: "-140px", left: "-160px" }}
        />
        <div
          className="blob blob-blue animate-float-slow"
          style={{ width: 380, height: 380, top: "40%", right: "-120px", opacity: 0.5 }}
        />
        <div
          className="blob blob-pink animate-float-slow"
          style={{ width: 300, height: 300, bottom: "-60px", left: "10%", opacity: 0.6 }}
        />

        <p className="eyebrow mb-6 relative">{t.heroEye}</p>

        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center relative">
          {/* LEFT: headline + CTAs */}
          <div className="col-span-12 lg:col-span-7">
            <h1 className="display-xl">
              {t.heroTitleA}{" "}
              <span className="italic text-rose">{t.heroTitleB}</span>
              <br />
              {t.heroTitleC}
            </h1>
            <p className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t.heroLead}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href={path("work")} className="btn-cta">
                {t.heroPrimary} <ArrowUpRight size={18} strokeWidth={2} />
              </a>
              <a href={path("inquiry")} className="btn-cta-outline">
                {t.heroSecondary} <ArrowUpRight size={16} strokeWidth={2} />
              </a>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose" />
              </span>
              {t.heroBadge}
            </div>
          </div>

          {/* RIGHT: portrait + floating mockups */}
          <div className="col-span-12 lg:col-span-5 relative">
            <div className="relative">
              {/* Floating laptop mockup behind */}
              <div
                className="hidden md:block absolute -top-8 -left-16 w-[70%] opacity-90"
                style={{ transform: "rotate(-4deg)" }}
                aria-hidden
              >
                <div className="glass-panel p-3">
                  <LaptopMockup
                    screens={[projectAtelier, projectLush, projectRaum]}
                    alt=""
                    interval={4200}
                  />
                </div>
              </div>

              {/* Portrait in glass frame */}
              <div className="glass-panel p-3 relative z-10 max-w-[380px] ml-auto">
                <div className="frame-soft aspect-[3/4] overflow-hidden">
                  <img
                    src={portraitWindow}
                    alt={t.portraitAlt}
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating iPhone mockup */}
              <div
                className="hidden md:block absolute -bottom-10 -right-6 w-[130px] z-20"
                style={{ transform: "rotate(6deg)" }}
                aria-hidden
              >
                <div className="glass-card p-2">
                  <div
                    className="relative rounded-[28px] overflow-hidden bg-[#1a2030]"
                    style={{ aspectRatio: "9/19" }}
                  >
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-10" />
                    <img
                      src={projectNein}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <div
                className="hidden md:block absolute top-4 -right-4 glass-card px-4 py-3 z-20"
                style={{ transform: "rotate(-3deg)" }}
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Nürnberg · DACH
                </p>
                <p className="font-display text-sm mt-0.5">Web · UX · SEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PERSONAL STORY — ALTERNATING CHAPTERS ============ */}
      <section className="container-editorial pb-24">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-4">{t.chaptersEye}</p>
            <h2 className="display-lg">
              {t.chaptersTitleA}{" "}
              <span className="italic text-rose">{t.chaptersTitleB}</span>
            </h2>
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {t.chapters.map((ch, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className="reveal grid grid-cols-12 gap-6 md:gap-12 items-center"
              >
                <div className={`col-span-12 md:col-span-6 ${isLeft ? "" : "md:order-2"}`}>
                  <div
                    className="frame-soft aspect-[4/5] max-w-[460px]"
                    style={{ transform: isLeft ? "rotate(-1.5deg)" : "rotate(1.5deg)" }}
                  >
                    <img src={ch.image} alt={ch.title} loading="lazy" />
                  </div>
                </div>
                <div className={`col-span-12 md:col-span-6 ${isLeft ? "" : "md:order-1"}`}>
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-rose">
                      Chapter {ch.num}
                    </span>
                    <span className="h-px flex-1 bg-border" />
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      {ch.eye}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl leading-tight tracking-tight mb-5">
                    {ch.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                    {ch.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============ JOURNEY / TIMELINE ============ */}
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
          <div
            className="absolute left-6 md:left-1/2 top-2 bottom-2 w-px md:-translate-x-1/2"
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
                  className="reveal relative grid grid-cols-12 gap-4 md:gap-8 items-center"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose ring-4 ring-background z-10" />
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

      {/* ============ DESIGN PRINCIPLES ============ */}
      <section className="container-editorial pb-28">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-4">{t.principlesEye}</p>
            <h2 className="display-lg">
              {t.principlesTitleA}
              <br />
              <span className="italic text-rose">{t.principlesTitleB}</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.principles.map((p, i) => (
            <IconCard
              key={i}
              icon={p.icon}
              title={p.title}
              desc={p.desc}
              index={i}
              variant={i % 3 === 1 ? "blue" : i % 3 === 2 ? "pink" : "default"}
            />
          ))}
        </div>
      </section>

      {/* ============ TOOLKIT ============ */}
      <section className="container-editorial pb-28">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-4">{t.toolkitEye}</p>
            <h2 className="display-lg">
              {t.toolkitTitleA}
              <br />
              <span className="italic text-rose">{t.toolkitTitleB}</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
          {t.toolkit.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <div
                key={i}
                className="reveal glass-card p-5 flex flex-col items-start gap-3 group cursor-default"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-paper flex items-center justify-center transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon size={22} strokeWidth={1.5} className="text-foreground" />
                </div>
                <div>
                  <p className="font-display text-lg leading-none">{tool.name}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1.5">
                    {tool.tag}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============ WHAT INSPIRES ME — COLLAGE ============ */}
      <section className="container-editorial pb-28">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-4">{t.inspEye}</p>
            <h2 className="display-lg">
              {t.inspTitleA}
              <br />
              <span className="italic text-rose">{t.inspTitleB}</span>
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
              {t.inspLead}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {t.inspItems.map((item, i) => {
            const Icon = item.icon;
            const bg =
              i % 4 === 0
                ? "bg-secondary"
                : i % 4 === 1
                ? "bg-rose-soft"
                : i % 4 === 2
                ? "bg-paper"
                : "bg-card";
            return (
              <div
                key={i}
                className={`reveal ${bg} rounded-3xl p-6 md:p-8 aspect-square flex flex-col justify-between group cursor-default transition-transform duration-500 hover:-translate-y-1`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-background/70 backdrop-blur flex items-center justify-center transition-transform duration-500 group-hover:-rotate-6">
                  <Icon size={22} strokeWidth={1.5} className="text-foreground" />
                </div>
                <p className="font-display text-lg md:text-xl leading-tight mt-6">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============ BEHIND MY WORK ============ */}
      <section className="container-editorial pb-28">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-4">{t.btsEye}</p>
            <h2 className="display-lg">
              {t.btsTitleA}
              <br />
              <span className="italic text-rose">{t.btsTitleB}</span>
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
              {t.btsLead}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {t.bts.map((b, i) => {
            const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];
            const rotates = ["-1deg", "1.5deg", "-1.5deg", "1deg"];
            return (
              <figure
                key={i}
                className={`reveal col-span-12 ${spans[i]}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div
                  className="frame-soft aspect-[16/10]"
                  style={{ transform: `rotate(${rotates[i]})` }}
                >
                  <img src={b.image} alt={b.cap} loading="lazy" />
                </div>
                <figcaption className="mt-4 text-sm text-muted-foreground italic">
                  — {b.cap}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      {/* ============ PHILOSOPHY ============ */}
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
          <div className="col-span-12 md:col-span-4 mt-2 md:mt-8">
            <FloatingNote rotate={4}>
              {lang === "en" ? (
                <>
                  "Structured,
                  <br />
                  never stiff."
                </>
              ) : (
                <>
                  „Strukturiert,
                  <br />
                  nicht steif."
                </>
              )}
            </FloatingNote>
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

      {/* ============ METHOD ============ */}
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

      {/* ============ QUICK FACTS ============ */}
      <section className="container-editorial pb-28">
        <div className="card-soft p-8 md:p-14" style={{ background: "var(--gradient-soft)" }}>
          <div className="grid grid-cols-12 gap-6 mb-10">
            <div className="col-span-12 md:col-span-8">
              <p className="eyebrow mb-4">{t.quickEye}</p>
              <h2 className="display-lg">
                {t.quickTitleA}
                <br />
                <span className="italic text-rose">{t.quickTitleB}</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {t.quick.map((q, i) => {
              const Icon = q.icon;
              return (
                <div
                  key={i}
                  className="reveal card-soft group cursor-default bg-background/80 backdrop-blur"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="w-11 h-11 rounded-2xl bg-paper flex items-center justify-center mb-4 transition-transform duration-500 group-hover:-rotate-6">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg mb-1.5">{q.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {q.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ FUN FACTS ============ */}
      <section className="container-editorial pb-28">
        <div className="grid grid-cols-12 gap-6 mb-10">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-4">{t.funEye}</p>
            <h2 className="display-lg">
              {t.funTitleA}
              <br />
              <span className="italic text-rose">{t.funTitleB}</span>
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 md:gap-4">
          {t.fun.map((f, i) => (
            <div
              key={i}
              className="reveal glass-card px-5 py-3 flex items-center gap-3 cursor-default hover:-translate-y-1 transition-transform"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-2xl leading-none">{f.emoji}</span>
              <span className="font-display text-base md:text-lg">{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CTA ============ */}
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
