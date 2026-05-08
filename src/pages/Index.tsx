import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { Marquee } from "@/components/site/Marquee";
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
} from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import logo from "@/assets/logo.png";

/* Special moment: headline morph on scroll */
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
  const morphed = useHeadlineMorph();
  const blobRef1 = useParallax(0.08);
  const blobRef2 = useParallax(-0.06);

  return (
    <Layout>
      <Seo
        title="Webdesigner & Webentwicklung in Deutschland — Marianna Kuzmenko"
        description="Moderne Websites, UX/UI Design und SEO Optimierung in Deutschland. Webdesigner & SEO Freelancer mit klarer Strategie statt Templates."
        path="/"
      />

      {/* HERO — cinematic scene */}
      <section className="container-editorial pt-12 md:pt-20 pb-24 relative overflow-hidden">
        {/* Layered floating shapes */}
        <div ref={blobRef1} className="blob blob-pink animate-float-slow" style={{ width: 460, height: 460, top: "-100px", right: "-120px" }} />
        <div ref={blobRef2} className="blob blob-blue animate-float-slower" style={{ width: 380, height: 380, top: "200px", left: "-150px" }} />
        <div className="hero-shape hero-shape-ring" style={{ width: 220, height: 220, top: "8%", left: "42%" }} />
        <div className="hero-shape hero-shape-dot" style={{ width: 14, height: 14, top: "30%", right: "12%" }} />
        <div className="hero-shape hero-shape-square" style={{ width: 90, height: 90, bottom: "8%", left: "38%" }} />

        <div className="grid grid-cols-12 gap-6 items-end relative">
          <div className="col-span-12 md:col-span-7 reveal-stagger">
            <div className="chip mb-8 reveal-line">
              <span className="w-2 h-2 rounded-full bg-rose animate-pulse" />
              Verfügbar für neue Projekte · Q3 2026
            </div>
            <img
              src={logo}
              alt="Marianna Kuzmenko — Web Design & Development"
              className="w-full max-w-[560px] h-auto mb-8 reveal-line"
              style={{ filter: "drop-shadow(0 6px 24px hsl(var(--sky-deep) / 0.35))" }}
            />
            <h1 className="display-xl reveal-line">
              <span className={`inline-block transition-all duration-1000 ${morphed ? "opacity-90" : "opacity-100"}`}>
                Webdesign,
              </span>
              <br />
              <span className="italic font-light reveal-line">das sich</span><br />
              <span className="text-rose marker reveal-line">leise </span>
              <span className="italic reveal-line">
                {morphed ? "durchsetzt." : "behauptet."}
              </span>
            </h1>
          </div>

          {/* Portrait + Mockup composition */}
          <div className="col-span-12 md:col-span-5 hidden md:block relative">
            <div className="frame-soft aspect-[3/4] max-w-[260px] ml-auto reveal" style={{ transitionDelay: "200ms" }}>
              <img src={portrait} alt="Marianna Kuzmenko, Webdesignerin in Deutschland" loading="eager" />
            </div>
            <div className="absolute -bottom-10 -left-6 w-[68%] reveal" style={{ transitionDelay: "500ms" }}>
              <LaptopMockup screens={[project1, project2, project3]} alt="Beispielprojekt im Browser" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-20 md:mt-28 relative">
          <div className="col-span-12 md:col-span-6 reveal" style={{ transitionDelay: "200ms" }}>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/85">
              Ich bin <span className="hover-accent">Webdesignerin und Entwicklerin</span> in Deutschland. Ich baue moderne Websites mit klarer Struktur, ruhigem Design und nachhaltiger <span className="hover-accent">SEO Optimierung</span> — für Menschen, die mehr wollen als ein Template.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
            <FloatingNote rotate={-4}>
              „Schön ist gut. <br />Verständlich ist besser."
            </FloatingNote>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-4 relative reveal" style={{ transitionDelay: "400ms" }}>
          <Link to="/projekte" className="btn-pink btn-press group">
            Ein kleiner Einblick
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45 duration-500" />
          </Link>
          <a href="#kontakt" className="btn-ghost-soft btn-press">
            Schreib mir
          </a>
        </div>

        <Whisper className="mt-12">ein kleiner Einblick ↓</Whisper>
      </section>

      <Marquee items={["Webdesign", "UX / UI", "SEO Optimierung", "Webentwicklung", "Strategie"]} />

      <WaveDivider />

      {/* DAS BIN ICH NICHT */}
      <section className="container-editorial py-28">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-5 reveal-stagger">
            <p className="eyebrow mb-4 reveal-line">02 — Was ich nicht bin</p>
            <h2 className="display-lg reveal-line">
              Das bin ich<br />
              <span className="italic text-rose">nicht.</span>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-md reveal-line">
              Manchmal sagt es mehr, was man <em>nicht</em> macht. Drei Dinge, die du bei mir nicht bekommst.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 space-y-5">
            {[
              ["Keine Templates", "von der Stange.", "Jede Website beginnt mit deiner Geschichte — nicht mit einem Layout."],
              ["Kein Design", "ohne Strategie.", "Ästhetik ist wichtig. Aber sie kommt nach dem Verstehen."],
              ["Keine SEO", "ohne Ergebnis.", "Sichtbarkeit, die bleibt. Keine Tricks, keine kurzfristigen Hacks."],
            ].map(([a, b, c], i) => (
              <div
                key={i}
                className="reveal card-soft group flex flex-col md:flex-row md:items-center gap-6"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
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
        <Whisper className="mt-16 text-center">noch ein bisschen scrollen …</Whisper>
      </section>

      <WaveDivider flip />

      {/* SERVICES */}
      <section className="container-editorial py-28">
        <div className="grid grid-cols-12 gap-6 mb-16 reveal-stagger">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4 reveal-line">03 — Leistungen</p>
            <h2 className="display-lg reveal-line">
              Website erstellen lassen<br />
              <span className="italic text-rose">— aber richtig.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end reveal-line">
            <p className="text-muted-foreground leading-relaxed">
              Vier Bereiche, die zusammengehören. Eine Website, die wirkt.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <IconCard icon={Palette} title="Individuelles Webdesign" desc="Visuelle Identität, die zu dir passt — keine Vorlagen, kein Bauchgefühl." index={0} />
          <IconCard icon={Layers} title="UX/UI mit klarer Struktur" desc="Nutzerführung, Hierarchie und Microinteractions, die Conversions bringen." variant="blue" index={1} />
          <IconCard icon={Code2} title="Technische Webentwicklung" desc="Schnell, sauber gebaut, wartbar. React, Performance, Accessibility." variant="pink" index={2} />
          <IconCard icon={Search} title="SEO Optimierung von Anfang an" desc="Sichtbarkeit ist kein Nachgedanke. SEO-Strategie ist im Design eingebaut." index={3} />
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link to="/webentwicklung" className="btn-ghost-soft btn-press">
            Mehr zu Web Development <ArrowRight size={14} />
          </Link>
          <Link to="/seo" className="btn-ghost-soft btn-press">
            Mehr zu SEO <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <WaveDivider />

      {/* PROJEKTE */}
      <section className="container-editorial py-28 relative">
        <div className="grid grid-cols-12 gap-6 mb-16 reveal-stagger">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4 reveal-line">04 — Werk</p>
            <h2 className="display-lg reveal-line">
              Ausgewählte<br />
              <span className="italic">Projekte.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end reveal-line">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Ein paar Projekte, die zeigen, wie Strategie, Design und Entwicklung zusammenkommen.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Atelier Norden", category: "Webdesign · Webentwicklung", img: project1, desc: "Markenwebsite für ein skandinavisches Designstudio. Klare Hierarchie, ruhige Typografie, +180% organische Reichweite." },
            { name: "Kraft & Klarheit", category: "UX/UI · SEO", img: project2, desc: "Coaching-Plattform mit klarem Funnel. UX-Redesign, neue Inhaltsstruktur, sauberes technisches SEO." },
            { name: "Studio Linde", category: "Branding · Webdev", img: project3, desc: "Atelierauftritt mit eigenem Designsystem. Editorial Layout, sanfte Microinteractions, schnelle Performance." },
          ].map((p, i) => (
            <Link
              to="/projekte"
              key={i}
              className="reveal group block"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="project-card frame-soft aspect-[4/5] mb-5">
                <img src={p.img} alt={`${p.name} — Projekt von Marianna Kuzmenko`} loading="lazy" />
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
          <Link to="/projekte" className="btn-pink btn-press">
            Alle Projekte ansehen <ArrowUpRight size={16} />
          </Link>
        </div>
        <Whisper className="mt-10">fast geschafft …</Whisper>
      </section>

      <WaveDivider flip />

      {/* SO LÄUFT EIN PROJEKT */}
      <section className="container-editorial py-28">
        <div className="grid grid-cols-12 gap-6 mb-16 reveal-stagger">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4 reveal-line">05 — Ablauf</p>
            <h2 className="display-lg reveal-line">
              So läuft ein<br />
              <span className="italic text-rose">Projekt.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end reveal-line">
            <p className="text-muted-foreground leading-relaxed">
              Ein klarer Weg vom ersten Gespräch bis zum Launch — ohne Überraschungen, mit viel Sorgfalt.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Compass, step: "01", title: "Verstehen", desc: "Ich höre zu. Ziele, Zielgruppe, Markt — bevor irgendein Pixel entsteht." },
            { icon: PenTool, step: "02", title: "Gestalten", desc: "Struktur und Design entstehen gemeinsam. Du bekommst klare Entwürfe statt 30 Versionen." },
            { icon: Code2, step: "03", title: "Bauen", desc: "Saubere Entwicklung mit React, Performance und SEO direkt eingebaut." },
            { icon: Rocket, step: "04", title: "Launchen", desc: "Wir gehen live. Danach: Pflege, Optimierung, weiterdenken." },
          ].map((p, i) => (
            <div
              key={i}
              className="reveal glass-panel p-7"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-rose-soft flex items-center justify-center">
                  <p.icon size={20} strokeWidth={1.5} className="text-rose" />
                </div>
                <span className="font-mono text-xs text-muted-foreground tracking-widest">{p.step}</span>
              </div>
              <h3 className="font-display text-2xl mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <WaveDivider />

      {/* WARUM MIT MIR */}
      <section className="container-editorial py-28">
        <div className="grid grid-cols-12 gap-6 mb-16 reveal-stagger">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4 reveal-line">06 — Warum</p>
            <h2 className="display-lg reveal-line">
              Warum mit<br />
              <span className="italic text-rose">mir arbeiten.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end reveal-line">
            <p className="text-muted-foreground leading-relaxed">
              Nicht für jede Person das Richtige — und genau das ist gut so.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Sparkles, title: "Design mit Substanz", desc: "Schön ist nicht genug. Jede Entscheidung hat einen Grund — und einen messbaren Effekt." },
            { icon: LineChart, title: "SEO von Anfang an", desc: "Sichtbarkeit beginnt in der Struktur. Keine Add-ons, keine teuren Nachbesserungen." },
            { icon: ShieldCheck, title: "Technisch sauber", desc: "Wartbare Codebasis, schnelle Ladezeiten, Accessibility — Standard, kein Aufpreis." },
            { icon: Heart, title: "Menschlich & klar", desc: "Klare Kommunikation, ehrliche Antworten. Keine Buzzwords, keine Schwammigkeit." },
            { icon: Clock, title: "Pünktlich & verlässlich", desc: "Du weißt jederzeit, wo wir stehen. Termine sind Zusagen, keine Wünsche." },
            { icon: PenTool, title: "Sorgfalt im Detail", desc: "Spacing, Mikrocopy, Animation — die kleinen Dinge machen den Unterschied." },
          ].map((p, i) => (
            <div
              key={i}
              className="reveal card-soft"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center mb-5">
                <p.icon size={20} strokeWidth={1.5} className="text-foreground" />
              </div>
              <h3 className="font-display text-xl md:text-2xl mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <WaveDivider flip />

      <EinblickSection />

      <WaveDivider />

      <Testimonials />

      <WaveDivider />

      {/* ENDING MOMENT — calm final scene before contact */}
      <section className="ending-scene scene-fade">
        <div className="container-editorial relative">
          <p className="eyebrow mb-6 reveal-line">— Anfang —</p>
          <h2 className="ending-headline">
            Vielleicht ist das<br />
            der <span className="italic text-rose marker">Anfang.</span>
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-muted-foreground leading-relaxed">
            Wenn dich etwas davon berührt hat, ist das schon mehr als die meisten Websites schaffen.
            Schreib mir — auch wenn du noch nicht genau weißt, wohin es gehen soll.
          </p>
          <div className="mt-10 flex justify-center">
            <a href="#kontakt" className="btn-pink btn-press">
              Lass uns reden <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default Index;
