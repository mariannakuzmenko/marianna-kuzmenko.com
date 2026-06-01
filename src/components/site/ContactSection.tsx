import { FormEvent, useState } from "react";
import { z } from "zod";
import { Send, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import editorialPortrait from "@/assets/uploads/marianna-portrait-editorial.jpeg.asset.json";
import { useLang, pick } from "@/i18n/LanguageContext";

export const ContactSection = () => {
  const { lang } = useLang();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const t = pick(lang,
    {
      eyebrow: "Kontakt",
      titleA: "Schreib mir",
      titleB: "direkt.",
      lead: "Kein Funnel, kein Bot. Eine kurze Nachricht reicht — ich antworte persönlich.",
      portraitAlt: "Marianna Kuzmenko, Webdesignerin und SEO-Spezialistin",
      location: "Deutschland · Remote weltweit",
      replyTime: "Antwort innerhalb von 48 Stunden",
      name: "Name",
      namePh: "Wie heißt du?",
      email: "Email",
      emailPh: "dein@beispiel.de",
      message: "Nachricht",
      messagePh: "Worum geht's? Ein paar Sätze reichen.",
      submitting: "Wird gesendet…",
      submit: "Anfrage senden",
      more: "Mehr erfahren",
      consent: "Mit dem Absenden stimmst du zu, dass ich deine Nachricht zur Beantwortung speichere.",
      errName: "Bitte gib deinen Namen an",
      errEmail: "Ungültige E-Mail-Adresse",
      errMsg: "Erzähl mir kurz mehr",
      almost: "Fast geschafft",
      thanksTitle: "Danke, ist angekommen",
      thanksDesc: "Ich melde mich innerhalb von 48 Stunden persönlich zurück.",
    },
    {
      eyebrow: "Contact",
      titleA: "Write me",
      titleB: "directly.",
      lead: "No funnel, no bot. A short note is enough — I’ll reply personally.",
      portraitAlt: "Marianna Kuzmenko, web designer and SEO specialist",
      location: "Germany · Remote worldwide",
      replyTime: "Reply within 48 hours",
      name: "Name",
      namePh: "What’s your name?",
      email: "Email",
      emailPh: "you@example.com",
      message: "Message",
      messagePh: "What’s it about? A few sentences are enough.",
      submitting: "Sending…",
      submit: "Send message",
      more: "Learn more",
      consent: "By submitting you agree I may store your message to reply.",
      errName: "Please enter your name",
      errEmail: "Invalid email address",
      errMsg: "Tell me a bit more",
      almost: "Almost there",
      thanksTitle: "Thanks — it’s in",
      thanksDesc: "I’ll get back to you personally within 48 hours.",
    },
  );

  const schema = z.object({
    name: z.string().trim().min(1, t.errName).max(100),
    email: z.string().trim().email(t.errEmail).max(255),
    message: z.string().trim().min(5, t.errMsg).max(1000),
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast({ title: t.almost, description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: t.thanksTitle, description: t.thanksDesc });
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section id="kontakt" className="container-editorial py-28">
      <div className="grid grid-cols-12 gap-10 items-stretch">
        <div className="col-span-12 lg:col-span-5">
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="display-lg mb-6">
            {t.titleA}<br />
            <span className="italic text-rose">{t.titleB}</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">{t.lead}</p>

          <div className="frame-soft aspect-[4/5] max-w-sm mb-8">
            <img src={editorialPortrait.url} alt={t.portraitAlt} loading="lazy" />
          </div>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-rose-soft flex items-center justify-center"><Mail size={14} strokeWidth={1.5} /></span>
              <a href="mailto:hello@mariannakuzmenko.de" className="underline-draw">hello@mariannakuzmenko.de</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-rose-soft flex items-center justify-center"><MapPin size={14} strokeWidth={1.5} /></span>
              <span className="text-muted-foreground">{t.location}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-rose-soft flex items-center justify-center"><Clock size={14} strokeWidth={1.5} /></span>
              <span className="text-muted-foreground">{t.replyTime}</span>
            </li>
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <form onSubmit={onSubmit} className="panel-white space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">{t.name}</label>
              <input id="name" name="name" type="text" maxLength={100} placeholder={t.namePh} className="input-soft" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">{t.email}</label>
              <input id="email" name="email" type="email" maxLength={255} placeholder={t.emailPh} className="input-soft" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">{t.message}</label>
              <textarea id="message" name="message" rows={6} maxLength={1000} placeholder={t.messagePh} className="input-soft resize-none" required />
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button type="submit" disabled={loading} className="btn-pink disabled:opacity-60">
                {loading ? t.submitting : t.submit}
                <Send size={14} strokeWidth={1.6} />
              </button>
              <a href="mailto:hello@mariannakuzmenko.de" className="btn-pink-outline">{t.more}</a>
            </div>
            <p className="text-xs text-muted-foreground/80 pt-2">{t.consent}</p>
          </form>
        </div>
      </div>
    </section>
  );
};
