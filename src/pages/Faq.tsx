import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Search, PencilRuler, Code2, LineChart, Rocket, ClipboardList, ArrowRight } from "lucide-react";
import { useLang, pick } from "@/i18n/LanguageContext";

const Faq = () => {
  const { lang, path } = useLang();

  const t = pick(lang,
    {
      title: "FAQ — Webdesign & SEO Nürnberg | Häufige Fragen",
      desc: "Antworten zu Ablauf, Preisen, Dauer und Wartung. Webdesign Nürnberg, Webdesigner Nürnberg, SEO Nürnberg, Webentwicklung Bayern — für Kunden in DACH.",
      eye: "FAQ",
      h1a: "Klare Antworten.",
      h1b: "Keine Floskeln.",
      lead: "Die häufigsten Fragen rund um Webdesign, Webentwicklung und SEO — für Kunden in Nürnberg, Bayern, Deutschland, Österreich und der Schweiz.",
      processTitle: "So läuft die Zusammenarbeit",
      processLead: "Sechs Schritte, klar strukturiert.",
      faqs: [
        { q: "Wie lange dauert die Erstellung einer Website?", a: "Die Dauer hängt vom Projektumfang, der Verfügbarkeit von Inhalten und den gewünschten Funktionen ab. Eine Onepage entsteht meist in 2–3 Wochen, eine Business-Website in 4–8 Wochen. Den genauen Zeitplan legen wir vor Projektstart gemeinsam fest." },
        { q: "Was kostet eine Website?", a: "Der Preis richtet sich nach Komplexität, Seitenanzahl und gewünschten Funktionen. Eine Übersicht der Pakete findest du auf der Preise-Seite — das individuelle Angebot folgt nach einem kurzen Gespräch." },
        { q: "Arbeite ich nur in Nürnberg?", a: "Nein. Ich arbeite remote mit Kunden in Nürnberg, Fürth, Erlangen, München, ganz Bayern, Deutschland, Österreich und der Schweiz. Persönliche Treffen sind im Großraum Nürnberg möglich, der Rest läuft entspannt über Video-Calls." },
        { q: "Ist SEO bei einer Website enthalten?", a: "Jede Website enthält ein technisches SEO-Fundament: saubere Struktur, Performance, semantisches HTML, Meta-Tags und mobile Optimierung. Zusätzliche SEO-Pakete für Keyword-Strategie, Content und laufende Optimierung sind separat buchbar." },
        { q: "Kann eine bestehende Website überarbeitet werden?", a: "Ja. Ich biete Redesign, Modernisierung, technische Optimierung und SEO-Audits für bestehende Websites an — egal ob WordPress, Webflow, Wix oder individuell programmiert." },
        { q: "Werden die Websites für Mobilgeräte optimiert?", a: "Selbstverständlich. Alle Websites sind vollständig responsive und werden auf Smartphones, Tablets und Desktops sorgfältig getestet — Mobile-First ist Standard." },
        { q: "Kann ich meine Website später selbst bearbeiten?", a: "Ja. Je nach Projektsetup (z. B. mit einem CMS wie Sanity, Storyblok oder einer einfachen Editor-Lösung) kannst du Inhalte selbst pflegen. Eine kurze Einweisung ist immer inklusive." },
        { q: "Unterstütze ich auch nach dem Launch?", a: "Ja. Auf Wunsch übernehme ich Wartung, Updates, kleine Erweiterungen oder begleite die laufende Weiterentwicklung deiner Website — monatlich oder bei Bedarf." },
        { q: "Welche Branchen betreue ich?", a: "Unter anderem: Restaurants, Beauty- und Wellnessstudios, Tierärzte und Tierhotels, Interior Design Studios, Handwerksbetriebe, lokale Dienstleister, Beratungen und andere Selbstständige." },
      ],
      process: [
        { icon: Search, t: "Analyse", d: "Verstehen: Marke, Zielgruppe, Ziele." },
        { icon: ClipboardList, t: "Strategie", d: "Struktur, Inhalte, SEO-Konzept." },
        { icon: PencilRuler, t: "Design", d: "UX/UI in Figma — soft, klar, premium." },
        { icon: Code2, t: "Entwicklung", d: "Sauberer Code, schnelle Ladezeiten." },
        { icon: LineChart, t: "SEO", d: "Technik, On-Page, Performance." },
        { icon: Rocket, t: "Launch", d: "Online gehen — und weiter wachsen." },
      ],
      moreEye: "Noch Fragen?",
      moreTitle: "Schreib mir direkt.",
      moreLead: "Ich antworte persönlich innerhalb von 48 Stunden.",
      moreCta: "Anfrage senden",
    },
    {
      title: "FAQ — Web Design & SEO Nuremberg | Common Questions",
      desc: "Answers about process, pricing, timing and maintenance. Web design Nuremberg, SEO Nuremberg, web development Bavaria — for clients across DACH.",
      eye: "FAQ",
      h1a: "Clear answers.",
      h1b: "No fluff.",
      lead: "The most common questions around web design, development and SEO — for clients in Nuremberg, Bavaria, Germany, Austria and Switzerland.",
      processTitle: "How we work together",
      processLead: "Six clear steps.",
      faqs: [
        { q: "How long does it take to build a website?", a: "It depends on scope, content availability and required features. A onepage usually takes 2–3 weeks, a business website 4–8 weeks. The exact timeline is defined together before kickoff." },
        { q: "How much does a website cost?", a: "Pricing depends on complexity, number of pages and required features. You can find an overview of packages on the pricing page — the personal quote follows a short call." },
        { q: "Do I only work in Nuremberg?", a: "No. I work remotely with clients in Nuremberg, Fürth, Erlangen, Munich, all of Bavaria, Germany, Austria and Switzerland. In-person meetings are possible around Nuremberg, the rest runs smoothly via video calls." },
        { q: "Is SEO included with a website?", a: "Every website includes a technical SEO foundation: clean structure, performance, semantic HTML, meta tags and mobile optimization. Additional SEO packages for keyword strategy, content and ongoing optimization are available separately." },
        { q: "Can an existing website be reworked?", a: "Yes. I offer redesigns, modernization, technical optimization and SEO audits for existing websites — WordPress, Webflow, Wix or custom code." },
        { q: "Are the websites optimized for mobile?", a: "Absolutely. All websites are fully responsive and carefully tested on smartphones, tablets and desktops — mobile-first is the standard." },
        { q: "Can I edit my website later on my own?", a: "Yes. Depending on the project setup (e.g. a CMS like Sanity, Storyblok or a simple editor), you can update content yourself. A short onboarding is always included." },
        { q: "Do I provide support after launch?", a: "Yes. On request, I take care of maintenance, updates, small extensions or accompany the ongoing evolution of your website — monthly or on demand." },
        { q: "Which industries do I work with?", a: "Among others: restaurants, beauty and wellness studios, vet clinics and pet hotels, interior design studios, craftsmen, local service providers, consultants and other freelancers." },
      ],
      process: [
        { icon: Search, t: "Analysis", d: "Understand: brand, audience, goals." },
        { icon: ClipboardList, t: "Strategy", d: "Structure, content, SEO concept." },
        { icon: PencilRuler, t: "Design", d: "UX/UI in Figma — soft, clear, premium." },
        { icon: Code2, t: "Development", d: "Clean code, fast load times." },
        { icon: LineChart, t: "SEO", d: "Technical, on-page, performance." },
        { icon: Rocket, t: "Launch", d: "Go live — and keep growing." },
      ],
      moreEye: "Still have questions?",
      moreTitle: "Write me directly.",
      moreLead: "I reply personally within 48 hours.",
      moreCta: "Send inquiry",
    }
  );

  return (
    <Layout>
      <Seo title={t.title} description={t.desc} path={lang === "en" ? "/en/faq" : "/faq"} />

      <section className="container-editorial pt-12 pb-16">
        <p className="eyebrow mb-6">{t.eye}</p>
        <h1 className="display-xl mb-6 max-w-4xl">
          {t.h1a} <span className="italic text-rose">{t.h1b}</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{t.lead}</p>
      </section>

      <section className="container-editorial pb-20">
        <div className="panel-white p-6 md:p-10">
          <Accordion type="single" collapsible className="w-full">
            {t.faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
                <AccordionTrigger className="text-left font-display text-lg md:text-xl hover:text-rose transition-colors">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="container-editorial pb-20">
        <p className="eyebrow mb-4">{t.processTitle}</p>
        <h2 className="display-md mb-10">{t.processLead}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.process.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={p.t} className="panel-white p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-rose-soft flex items-center justify-center">
                    <Icon size={16} className="text-rose" strokeWidth={1.6} />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="font-display text-xl mb-1">{p.t}</h3>
                <p className="text-sm text-muted-foreground">{p.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container-editorial pb-28">
        <div className="panel-white p-10 md:p-14 text-center">
          <p className="eyebrow mb-4">{t.moreEye}</p>
          <h2 className="display-md mb-4">{t.moreTitle}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">{t.moreLead}</p>
          <Link to={path("inquiry")} className="btn-pink inline-flex">
            {t.moreCta} <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Faq;
