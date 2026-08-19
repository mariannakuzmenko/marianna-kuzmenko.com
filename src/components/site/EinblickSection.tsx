import editorialPortraitAsset from "@/assets/portraits/marianna-office-desk.jpeg.asset.json";
import closePortraitAsset from "@/assets/portraits/marianna-coffee-street.jpeg.asset.json";
const editorialPortrait = { url: editorialPortraitAsset.url };
const closePortrait = { url: closePortraitAsset.url };
import dentalluxImg from "@/assets/projects/dentallux.png";
import lushBloomImage from "@/assets/projects/lush-bloom-mockup.jpeg";
const lushBloomAsset = { url: lushBloomImage };
import pfotenhausImg from "@/assets/projects/pfotenhaus.png";
const dentalluxMockup = { url: dentalluxImg };
const creditpathMockup = { url: lushBloomAsset.url };
const nuernbergGuideMockup = { url: pfotenhausImg };
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
    <section className="container-editorial py-16 md:py-20 relative">
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

      <div className="relative grid grid-cols-12 gap-4 md:gap-6 items-center min-h-[520px]">
        {/* Editorial portrait pair — one large, one smaller overlapping */}
        <div className="col-span-12 md:col-span-5 relative reveal">
          <div className="frame-soft aspect-[4/5] rotate-[-1.5deg] hover:rotate-0 transition-transform duration-700 glass-card p-2">
            <img src={editorialPortrait.url} alt={t.portraitAlt} loading="lazy" className="w-full h-full object-cover rounded-[1.25rem]" />
          </div>
          <div
            className="absolute -bottom-10 -right-4 md:-right-10 w-[42%] frame-soft rotate-[3deg] hover:rotate-0 transition-transform duration-700 glass-card p-2 shadow-xl"
            style={{ transitionDelay: "180ms" }}
          >
            <img src={closePortrait.url} alt={t.deskAlt} loading="lazy" className="w-full aspect-[3/4] object-cover rounded-[1rem]" />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-7 mt-16 md:mt-0 reveal" style={{ transitionDelay: "150ms" }}>
          <MockupShowcase screens={[dentalluxMockup.url, creditpathMockup.url, nuernbergGuideMockup.url]} alt={t.mockupAlt} />
        </div>

        <div className="hidden lg:block absolute left-[40%] bottom-2 sticky-note rotate-[-4deg]">
          {t.note}
        </div>
      </div>


      <Whisper className="mt-16">{t.whisper}</Whisper>
    </section>
  );
};
