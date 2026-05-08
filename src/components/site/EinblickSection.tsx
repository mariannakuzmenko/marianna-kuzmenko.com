import portrait from "@/assets/portrait.jpg";
import workspace from "@/assets/workspace.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project4 from "@/assets/project-4.jpg";
import { LaptopMockup } from "./LaptopMockup";
import { Whisper } from "./Whisper";
import { useLang, pick } from "@/i18n/LanguageContext";

export const EinblickSection = () => {
  const { lang } = useLang();
  const t = pick(lang,
    { eyebrow: "07 — Einblick", titleA: "Einblick in", titleB: "meine Arbeit.", lead: "Werkstatt, Hände, Bildschirme. Ein paar Ausschnitte aus meinem Alltag — zwischen Skizze und Code.", portraitAlt: "Marianna Kuzmenko bei der Arbeit", deskAlt: "Mein Arbeitsplatz", mockupAlt: "Projektvorschau im Laptop", note: "„aus der Werkstatt"", whisper: "noch ein Moment …" },
    { eyebrow: "07 — Behind the scenes", titleA: "A glimpse into", titleB: "the work.", lead: "Studio, hands, screens. A few snapshots from the everyday — between sketch and code.", portraitAlt: "Marianna Kuzmenko at work", deskAlt: "My workspace", mockupAlt: "Project preview in laptop", note: "“from the studio”", whisper: "just a moment …" },
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
          <div className="frame-soft aspect-[4/5] rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
            <img src={portrait} alt={t.portraitAlt} loading="lazy" />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-5 md:-ml-16 md:-mt-10 reveal" style={{ transitionDelay: "150ms" }}>
          <LaptopMockup screens={[project1, project2, project4]} alt={t.mockupAlt} />
        </div>

        <div className="col-span-5 md:col-span-3 md:col-start-10 md:-mt-32 reveal" style={{ transitionDelay: "300ms" }}>
          <div className="frame-soft aspect-square rotate-[3deg] hover:rotate-0 transition-transform duration-700">
            <img src={workspace} alt={t.deskAlt} loading="lazy" />
          </div>
        </div>

        <div className="hidden md:block absolute left-[34%] bottom-4 sticky-note rotate-[-4deg]">
          {t.note}
        </div>
      </div>

      <Whisper className="mt-16">{t.whisper}</Whisper>
    </section>
  );
};
