import { Lightbulb, Compass, PenTool, Code2, Search, Rocket } from "lucide-react";
import { useLang, pick } from "@/i18n/LanguageContext";

export const DigitalJourney = () => {
  const { lang } = useLang();
  const t = pick(
    lang,
    {
      eyebrow: "Digital Journey",
      titleA: "Von der ersten Idee",
      titleB: "bis zum Launch.",
      lead:
        "Ein ruhiger, strukturierter Prozess, der Strategie, Design, Entwicklung und SEO als ein einziges Vorhaben denkt — nicht als getrennte Schritte.",
      steps: [
        { title: "Idee", desc: "Erstgespräch, Ziele, Positionierung." },
        { title: "Strategie", desc: "Zielgruppe, Suchintention, Content-Struktur." },
        { title: "UX/UI", desc: "Nutzerführung, Hierarchie, ruhige Ästhetik." },
        { title: "Entwicklung", desc: "Sauberes Frontend, Performance, Systematik." },
        { title: "SEO", desc: "Technische Basis, Content, lokale Sichtbarkeit." },
        { title: "Launch", desc: "Feinschliff, Messung, nächste Schritte." },
      ],
    },
    {
      eyebrow: "Digital Journey",
      titleA: "From the first idea",
      titleB: "to launch.",
      lead:
        "A calm, structured process that treats strategy, design, development and SEO as one continuous project — not disconnected steps.",
      steps: [
        { title: "Idea", desc: "Intro call, goals, positioning." },
        { title: "Strategy", desc: "Audience, search intent, content structure." },
        { title: "UX/UI", desc: "User flow, hierarchy, quiet aesthetics." },
        { title: "Development", desc: "Clean frontend, performance, systems." },
        { title: "SEO", desc: "Technical foundation, content, local visibility." },
        { title: "Launch", desc: "Refinement, measurement, next steps." },
      ],
    }
  );

  const icons = [Lightbulb, Compass, PenTool, Code2, Search, Rocket];

  return (
    <section className="container-editorial py-24 md:py-16 md:py-20">
      <div className="grid grid-cols-12 gap-8 items-end mb-16 reveal-stagger">
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

      <div className="relative">
        {/* Connecting line (desktop) */}
        <div
          className="hidden lg:block absolute left-0 right-0 top-[46px] h-px pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, hsl(var(--rose) / 0.35) 8%, hsl(var(--sky-deep) / 0.35) 50%, hsl(var(--rose) / 0.35) 92%, transparent 100%)",
          }}
        />

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4 relative">
          {t.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <li
                key={step.title}
                className="reveal text-center lg:text-left relative"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex lg:block items-center gap-4">
                  <div className="relative shrink-0 mx-auto lg:mx-0">
                    <div className="w-[92px] h-[92px] rounded-full glass-panel flex items-center justify-center relative z-10">
                      <Icon size={26} strokeWidth={1.4} className="text-rose" />
                    </div>
                    <span className="absolute -top-1 -right-1 z-20 w-7 h-7 rounded-full bg-rose text-white text-[11px] font-mono flex items-center justify-center shadow-soft">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="mt-5 lg:mt-6 text-left lg:text-left">
                    <h3 className="font-display text-xl leading-tight">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
