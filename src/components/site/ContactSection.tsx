import { FormEvent, useState } from "react";
import { z } from "zod";
import { Send, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import portrait from "@/assets/portrait.jpg";

const schema = z.object({
  name: z.string().trim().min(1, "Bitte gib deinen Namen an").max(100),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255),
  message: z.string().trim().min(5, "Erzähl mir kurz mehr").max(1000),
});

export const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast({
        title: "Fast geschafft",
        description: parsed.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Danke, ist angekommen",
        description: "Ich melde mich innerhalb von 48 Stunden persönlich zurück.",
      });
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section id="kontakt" className="container-editorial py-28">
      <div className="grid grid-cols-12 gap-10 items-stretch">
        {/* Photo + intro */}
        <div className="col-span-12 lg:col-span-5">
          <p className="eyebrow mb-4">Kontakt</p>
          <h2 className="display-lg mb-6">
            Schreib mir<br />
            <span className="italic text-rose">direkt.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
            Kein Funnel, kein Bot. Eine kurze Nachricht reicht — ich antworte persönlich.
          </p>

          <div className="frame-soft aspect-[4/5] max-w-sm mb-8">
            <img src={portrait} alt="Marianna Kuzmenko, Webdesignerin und SEO-Spezialistin" loading="lazy" />
          </div>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-rose-soft flex items-center justify-center">
                <Mail size={14} strokeWidth={1.5} />
              </span>
              <a href="mailto:hello@mariannakuzmenko.de" className="underline-draw">
                hello@mariannakuzmenko.de
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-rose-soft flex items-center justify-center">
                <MapPin size={14} strokeWidth={1.5} />
              </span>
              <span className="text-muted-foreground">Deutschland · Remote weltweit</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-rose-soft flex items-center justify-center">
                <Clock size={14} strokeWidth={1.5} />
              </span>
              <span className="text-muted-foreground">Antwort innerhalb von 48 Stunden</span>
            </li>
          </ul>
        </div>

        {/* Form */}
        <div className="col-span-12 lg:col-span-7">
          <form onSubmit={onSubmit} className="panel-white space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                Name
              </label>
              <input id="name" name="name" type="text" maxLength={100} placeholder="Wie heißt du?" className="input-soft" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                Email
              </label>
              <input id="email" name="email" type="email" maxLength={255} placeholder="dein@beispiel.de" className="input-soft" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                maxLength={1000}
                placeholder="Worum geht's? Ein paar Sätze reichen."
                className="input-soft resize-none"
                required
              />
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button type="submit" disabled={loading} className="btn-pink disabled:opacity-60">
                {loading ? "Wird gesendet…" : "Anfrage senden"}
                <Send size={14} strokeWidth={1.6} />
              </button>
              <a href="mailto:hello@mariannakuzmenko.de" className="btn-pink-outline">
                Mehr erfahren
              </a>
            </div>
            <p className="text-xs text-muted-foreground/80 pt-2">
              Mit dem Absenden stimmst du zu, dass ich deine Nachricht zur Beantwortung speichere.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
