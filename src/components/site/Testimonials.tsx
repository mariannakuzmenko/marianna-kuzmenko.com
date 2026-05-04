import { useEffect, useState, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

type T = { quote: string; name: string; role: string; date: string; rating: number };

const data: T[] = [
  {
    quote:
      "Marianna hat unsere Website komplett neu gedacht. Klares Design, durchdachte Struktur — und endlich Anfragen, die wirklich passen.",
    name: "Lena Hoffmann",
    role: "Gründerin, Atelier Norden",
    date: "März 2026",
    rating: 5,
  },
  {
    quote:
      "Sie versteht SEO nicht als Trick, sondern als Handwerk. Drei Monate später stehen wir auf Seite eins für unsere wichtigsten Begriffe.",
    name: "Jonas Berger",
    role: "Geschäftsführer, Kraft & Klarheit",
    date: "Januar 2026",
    rating: 5,
  },
  {
    quote:
      "Ruhig, klar, präzise. Das Ergebnis fühlt sich an wie wir — nur besser sortiert. Beste Zusammenarbeit seit Langem.",
    name: "Sophie Linde",
    role: "Founder, Studio Linde",
    date: "November 2025",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const [animState, setAnimState] = useState<"in" | "out">("in");

  const transition = useCallback((next: number) => {
    setAnimState("out");
    setTimeout(() => {
      setI((next + data.length) % data.length);
      setAnimState("in");
    }, 400);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      transition(i + 1);
    }, 7000);
    return () => clearInterval(t);
  }, [i, transition]);

  const t = data[i];

  return (
    <section className="container-editorial py-28">
      <div className="text-center mb-14 reveal-stagger">
        <p className="eyebrow mb-4 reveal-line">Stimmen</p>
        <h2 className="display-lg reveal-line">
          Was Kund:innen<br />
          <span className="italic text-rose">sagen.</span>
        </h2>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div
          className={`panel-white text-center px-8 md:px-14 py-14 relative testimonial-card ${
            animState === "in" ? "testimonial-enter" : "testimonial-exit"
          }`}
        >
          <Quote
            className="absolute top-8 left-8 text-rose/20 testimonial-quote-icon"
            size={36}
            strokeWidth={1.2}
          />

          <div className="flex justify-center gap-1.5 mb-8">
            {Array.from({ length: t.rating }).map((_, idx) => (
              <Star
                key={`${i}-${idx}`}
                size={22}
                strokeWidth={1.4}
                className="star-pop fill-rose text-rose"
                style={{ animationDelay: `${idx * 130 + 200}ms` }}
              />
            ))}
          </div>

          <p className="font-display text-2xl md:text-3xl leading-snug text-foreground/90 mb-10">
            {t.quote.split(" ").map((w, idx) => (
              <span
                key={`${i}-${idx}`}
                className="inline-block opacity-0 animate-[fade-in_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${idx * 35 + 200}ms`, marginRight: "0.25em" }}
              >
                {idx === 0 ? `„${w}` : w}
              </span>
            ))}
            <span className="inline-block">"</span>
          </p>

          <div className="flex flex-col items-center gap-1">
            <p className="font-medium">{t.name}</p>
            <p className="text-sm text-muted-foreground">{t.role}</p>
            <p className="text-xs text-muted-foreground/70 font-mono uppercase tracking-widest mt-2">
              {t.date}
            </p>
          </div>
        </div>

        <button
          onClick={() => transition(i - 1)}
          aria-label="Vorherige"
          className="absolute -left-2 md:-left-16 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-soft flex items-center justify-center hover:bg-rose hover:text-white transition-all duration-300 hover:-translate-x-0.5 btn-press"
        >
          <ChevronLeft size={18} strokeWidth={1.6} />
        </button>
        <button
          onClick={() => transition(i + 1)}
          aria-label="Nächste"
          className="absolute -right-2 md:-right-16 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-soft flex items-center justify-center hover:bg-rose hover:text-white transition-all duration-300 hover:translate-x-0.5 btn-press"
        >
          <ChevronRight size={18} strokeWidth={1.6} />
        </button>

        <div className="flex justify-center gap-2.5 mt-10">
          {data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => transition(idx)}
              aria-label={`Stimme ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                idx === i ? "w-10 bg-rose" : "w-2 bg-rose/30 hover:bg-rose/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
