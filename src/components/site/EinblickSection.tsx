import portrait from "@/assets/portrait.jpg";
import workspace from "@/assets/workspace.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project4 from "@/assets/project-4.jpg";
import { LaptopMockup } from "./LaptopMockup";
import { Whisper } from "./Whisper";

/**
 * Personal visual block — overlapping photos, workspace, and a UI mockup.
 */
export const EinblickSection = () => {
  return (
    <section className="container-editorial py-28 relative">
      <div className="grid grid-cols-12 gap-6 mb-16 reveal-stagger">
        <div className="col-span-12 md:col-span-7">
          <p className="eyebrow mb-4 reveal-line">07 — Einblick</p>
          <h2 className="display-lg reveal-line">
            Einblick in<br />
            <span className="italic text-rose">meine Arbeit.</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 self-end reveal-line">
          <p className="text-muted-foreground leading-relaxed">
            Werkstatt, Hände, Bildschirme. Ein paar Ausschnitte aus meinem Alltag — zwischen Skizze und Code.
          </p>
        </div>
      </div>

      <div className="relative grid grid-cols-12 gap-4 md:gap-6 items-center min-h-[560px]">
        {/* Portrait */}
        <div className="col-span-7 md:col-span-4 reveal">
          <div className="frame-soft aspect-[4/5] rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
            <img src={portrait} alt="Marianna Kuzmenko bei der Arbeit" loading="lazy" />
          </div>
        </div>

        {/* Mockup overlapping */}
        <div className="col-span-12 md:col-span-6 md:col-start-5 md:-ml-16 md:-mt-10 reveal" style={{ transitionDelay: "150ms" }}>
          <LaptopMockup screens={[project1, project2, project4]} alt="Projektvorschau im Laptop" />
        </div>

        {/* Workspace small */}
        <div className="col-span-5 md:col-span-3 md:col-start-10 md:-mt-32 reveal" style={{ transitionDelay: "300ms" }}>
          <div className="frame-soft aspect-square rotate-[3deg] hover:rotate-0 transition-transform duration-700">
            <img src={workspace} alt="Mein Arbeitsplatz" loading="lazy" />
          </div>
        </div>

        {/* Floating tag */}
        <div className="hidden md:block absolute left-[34%] bottom-4 sticky-note rotate-[-4deg]">
          „aus der Werkstatt"
        </div>
      </div>

      <Whisper className="mt-16">noch ein Moment …</Whisper>
    </section>
  );
};
