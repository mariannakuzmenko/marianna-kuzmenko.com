import { useEffect, useState, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLang, pick } from "@/i18n/LanguageContext";

type T = { quote: string; name: string; role: string; date: string; rating: number };

const data_de: T[] = [
  { quote: "Marianna hat unsere Website komplett neu gedacht. Klares Design, durchdachte Struktur — und endlich Anfragen, die wirklich passen.", name: "Lena Hoffmann", role: "Gründerin, Atelier Norden", date: "März 2026", rating: 5 },
  { quote: "Sie versteht SEO nicht als Trick, sondern als Handwerk. Drei Monate später stehen wir auf Seite eins für unsere wichtigsten Begriffe.", name: "Jonas Berger", role: "Geschäftsführer, Kraft & Klarheit", date: "Januar 2026", rating: 5 },
  { quote: "Ruhig, klar, präzise. Das Ergebnis fühlt sich an wie wir — nur besser sortiert. Beste Zusammenarbeit seit Langem.", name: "Sophie Linde", role: "Founder, Studio Linde", date: "November 2025", rating: 5 },
];

const data_en: T[] = [
  { quote: "Marianna rethought our website from the ground up. Clear design, thoughtful structure — and finally inquiries that actually fit.", name: "Lena Hoffmann", role: "Founder, Atelier Norden", date: "March 2026", rating: 5 },
  { quote: "She treats SEO as craft, not as a trick. Three months later we rank on page one for our most important terms.", name: "Jonas Berger", role: "Managing Director, Kraft & Klarheit", date: "January 2026", rating: 5 },
  { quote: "Calm, clear, precise. The result feels like us — just better sorted. Best collaboration in a long time.", name: "Sophie Linde", role: "Founder, Studio Linde", date: "November 2025", rating: 5 },
];

export const Testimonials = () => {
  const { lang } = useLang();
  const data = lang === "en" ? data_en : data_de;
  const labels = pick(lang,
    { eyebrow: "Stimmen", titleA: "Was Kund:innen", titleB: "sagen.", prev: "Vorherige", next: "Nächste", dot: "Stimme" },
    { eyebrow: "Voices", titleA: "What clients", titleB: "say.", prev: "Previous", next: "Next", dot: "Quote" },
  );

  const [i, setI] = useState(0);
  const [animState, setAnimState] = useState<"in" | "out">("in");

  const transition = useCallback((next: number) => {
    setAnimState("out");
    setTimeout(() => {
      setI((next + data.length) % data.length);
      setAnimState("in");
    }, 400);
  }, [data.length]);

  useEffect(() => {
    const t = setInterval(() => transition(i + 1), 7000);
    return () => clearInterval(t);
  }, [i, transition]);

  const t = data[i];
  const openQuote = lang === "en" ? "“" : "„";
  const closeQuote = lang === "en" ? "”" : "“";

  return (
    <section className="container-editorial py-28">
      <div className="text-center mb-14 reveal-stagger">
        <p className="eyebrow mb-4 reveal-line">{labels.eyebrow}</p>
        <h2 className="display-lg reveal-line">
          {labels.titleA}<br />
          <span className="italic text-rose">{labels.titleB}</span>
        </h2>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div
          className={`panel-white text-center px-8 md:px-14 py-14 relative testimonial-card ${animState === "in" ? "testimonial-enter" : "testimonial-exit"}`}
        >
          <Quote className="absolute top-8 left-8 text-rose/20 testimonial-quote-icon" size={36} strokeWidth={1.2} />

          <div className="flex justify-center gap-1.5 mb-8">
            {Array.from({ length: t.rating }).map((_, idx) => (
              <Star key={`${i}-${idx}`} size={22} strokeWidth={1.4} className="star-pop fill-rose text-rose" style={{ animationDelay: `${idx * 130 + 200}ms` }} />
            ))}
          </div>

          <p className="font-display text-2xl md:text-3xl leading-snug text-foreground/90 mb-10">
            {t.quote.split(" ").map((w, idx) => (
              <span key={`${i}-${idx}`} className="inline-block opacity-0 animate-[fade-in_0.6s_ease-out_forwards]" style={{ animationDelay: `${idx * 35 + 200}ms`, marginRight: "0.25em" }}>
                {idx === 0 ? `${openQuote}${w}` : w}
              </span>
            ))}
            <span className="inline-block">{closeQuote}</span>
          </p>

          <div className="flex flex-col items-center gap-1">
            <p className="font-medium">{t.name}</p>
            <p className="text-sm text-muted-foreground">{t.role}</p>
            <p className="text-xs text-muted-foreground/70 font-mono uppercase tracking-widest mt-2">{t.date}</p>
          </div>
        </div>

        <button onClick={() => transition(i - 1)} aria-label={labels.prev} className="absolute -left-2 md:-left-16 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-soft flex items-center justify-center hover:bg-rose hover:text-white transition-all duration-300 hover:-translate-x-0.5 btn-press">
          <ChevronLeft size={18} strokeWidth={1.6} />
        </button>
        <button onClick={() => transition(i + 1)} aria-label={labels.next} className="absolute -right-2 md:-right-16 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-soft flex items-center justify-center hover:bg-rose hover:text-white transition-all duration-300 hover:translate-x-0.5 btn-press">
          <ChevronRight size={18} strokeWidth={1.6} />
        </button>

        <div className="flex justify-center gap-2.5 mt-10">
          {data.map((_, idx) => (
            <button key={idx} onClick={() => transition(idx)} aria-label={`${labels.dot} ${idx + 1}`} className={`h-2 rounded-full transition-all duration-500 ${idx === i ? "w-10 bg-rose" : "w-2 bg-rose/30 hover:bg-rose/50"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
