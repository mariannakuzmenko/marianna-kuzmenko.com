import editorialPortraitSrc from "@/assets/portraits/marianna-portrait-window.jpeg";
import closePortraitSrc from "@/assets/portraits/marianna-portrait-pampas.jpeg";
const editorialPortrait = { url: editorialPortraitSrc };
const closePortrait = { url: closePortraitSrc };
import dentalluxImg from "@/assets/projects/dentallux.png";
import lushImg from "@/assets/projects/lush-bloom.png";
import pfotenhausImg from "@/assets/projects/pfotenhaus.png";
import raumformImg from "@/assets/projects/raumform.png";
const dentalluxMockup = { url: dentalluxImg };
const creditpathMockup = { url: lushImg };
const nuernbergGuideMockup = { url: pfotenhausImg };
const holzwerkMockup = { url: raumformImg };
import { MockupShowcase } from "./MockupShowcase";
import { Whisper } from "./Whisper";
import { useLang, pick } from "@/i18n/LanguageContext";

export const EinblickSection = () => {
  const { lang } = useLang();
  const t = pick(lang,
    { eyebrow: "07 — Einblick", titleA: "Einblick in", titleB: "meine Arbeit.", lead: "Persönliche Präsenz, echte Projekte, hochwertige Screens. Ein paar Ausschnitte aus meiner Arbeit zwischen Markenstrategie, Design und Code.", portraitAlt: "Marianna Kuzmenko bei der Arbeit", deskAlt: "Nahes Portrait von Marianna Kuzmenko", mockupAlt: "Projektvorschau im Laptop", note: "„echte Arbeit, klar gezeigt“", whisper: "noch ein Moment …" },
    { eyebrow: "07 — Behind the scenes", titleA: "A glimpse into", titleB: "the work.", lead: "Personal presence, real projects, refined screens. A few moments from the work between brand strategy, design and code.", portraitAlt: "Marianna Kuzmenko at work", deskAlt: "Close portrait of Marianna Kuzmenko", mockupAlt: "Project preview in laptop", note: "“real work, clearly shown”", whisper: "just a moment …" },
  );

  return (
    <section className="container-editorial py-28 relative">
      <div className="grid grid-cols-12 gap-6 mb-16 reveal-stagger">
        <div className="col-span-12 md:col-span-7">
          <p className="eyebrow mb-4 reveal-line">{t.eyebrow}</p>
          <h2 className="display-lg reveal-line">
            {t.titleA}<br />
            <span className="italic text-rose">{t.titleB}</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 self-end reveal-line">
          <p className="text-muted-foreground leading-relaxed">{t.lead}</p>
        </div>
      </div>

      <div className="relative grid grid-cols-12 gap-4 md:gap-6 items-center min-h-[560px]">
        <div className="col-span-7 md:col-span-4 reveal">
          <div className="frame-soft aspect-[4/5] rotate-[-2deg] hover:rotate-0 transition-transform duration-700 glass-card p-2">
            <img src={editorialPortrait.url} alt={t.portraitAlt} loading="lazy" className="rounded-[1.25rem]" />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-5 md:-ml-16 md:-mt-10 reveal" style={{ transitionDelay: "150ms" }}>
          <MockupShowcase screens={[dentalluxMockup.url, creditpathMockup.url, nuernbergGuideMockup.url]} alt={t.mockupAlt} />
        </div>

        <div className="col-span-5 md:col-span-3 md:col-start-10 md:-mt-32 reveal" style={{ transitionDelay: "300ms" }}>
          <div className="frame-soft aspect-square rotate-[3deg] hover:rotate-0 transition-transform duration-700 glass-card p-2">
            <img src={closePortrait.url} alt={t.deskAlt} loading="lazy" className="rounded-[1.25rem]" />
          </div>
        </div>

        <div className="hidden md:block absolute left-[34%] bottom-4 sticky-note rotate-[-4deg]">
          {t.note}
        </div>

        <div className="hidden lg:block absolute right-[8%] bottom-[2%] w-[22%] frame-soft glass-card p-2 reveal" style={{ transitionDelay: "420ms" }}>
          <img src={holzwerkMockup.url} alt="Holzwerk Nürnberg mockup" loading="lazy" className="rounded-[1.25rem]" />
        </div>
      </div>

      <Whisper className="mt-16">{t.whisper}</Whisper>
    </section>
  );
};
