import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleDot,
  Loader2,
  Paperclip,
  X,
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { supabase } from "@/integrations/supabase/client";
import { CONTACT, whatsappLink } from "@/data/contact";
import { useLang, pick } from "@/i18n/LanguageContext";

type ProjectType = "website" | "website-seo" | "seo" | "unsure";

type Answers = Record<string, string | string[]>;

const MAX_FILE_MB = 10;
const MAX_FILES = 6;
const ACCEPT = ".jpg,.jpeg,.png,.webp,.pdf,.doc,.docx";
const ALLOWED = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

/* ---------- bilingual content ---------- */

type Pair = { de: string; en: string };
const P = (de: string, en: string): Pair => ({ de, en });

const TYPE_CARDS: { id: ProjectType; title: Pair; desc: Pair }[] = [
  {
    id: "website",
    title: P("Neue Website", "New website"),
    desc: P("Webdesign & Webentwicklung für Ihr Unternehmen", "Web design & development for your business"),
  },
  {
    id: "website-seo",
    title: P("Website + SEO", "Website + SEO"),
    desc: P(
      "Website, UX/UI, technische Umsetzung und Suchmaschinenoptimierung",
      "Website, UX/UI, technical build and search engine optimisation",
    ),
  },
  {
    id: "seo",
    title: P("SEO", "SEO"),
    desc: P("SEO-Optimierung für eine bestehende Website", "SEO for an existing website"),
  },
  {
    id: "unsure",
    title: P("Ich bin mir noch nicht sicher", "I'm not sure yet"),
    desc: P(
      "Wir finden gemeinsam heraus, was für Ihr Unternehmen sinnvoll ist.",
      "We'll figure out together what makes sense for your business.",
    ),
  },
];

const GOALS: Pair[] = [
  P("Mehr Kundenanfragen", "More client enquiries"),
  P("Mehr Vertrauen", "More trust"),
  P("Professioneller auftreten", "A more professional image"),
  P("Mehr Sichtbarkeit", "More visibility"),
  P("Mehr Verkäufe", "More sales"),
  P("Mehr Buchungen", "More bookings"),
  P("Neue Zielgruppen erreichen", "Reach new audiences"),
  P("Andere", "Other"),
];
const PAGES: Pair[] = [
  P("Startseite", "Home"),
  P("Über uns", "About"),
  P("Leistungen", "Services"),
  P("Produkte", "Products"),
  P("Projekte / Portfolio", "Projects / Portfolio"),
  P("Blog", "Blog"),
  P("Kontakt", "Contact"),
  P("FAQ", "FAQ"),
  P("Andere", "Other"),
];
const FEATURES: Pair[] = [
  P("Kontaktformular", "Contact form"),
  P("WhatsApp", "WhatsApp"),
  P("Terminbuchung", "Appointment booking"),
  P("Newsletter", "Newsletter"),
  P("Mehrsprachigkeit", "Multiple languages"),
  P("Online-Shop", "Online shop"),
  P("Buchungssystem", "Booking system"),
  P("Karten / Standort", "Maps / location"),
  P("Andere", "Other"),
];
const STYLES: Pair[] = [
  P("Minimalistisch", "Minimal"),
  P("Elegant", "Elegant"),
  P("Modern", "Modern"),
  P("Editorial", "Editorial"),
  P("Premium", "Premium"),
  P("Natürlich", "Natural"),
  P("Kreativ", "Creative"),
  P("Ich bin offen für Vorschläge", "Open to suggestions"),
];
const MATERIALS: Pair[] = [
  P("Logo", "Logo"),
  P("Texte", "Copy / texts"),
  P("Fotos", "Photos"),
  P("Videos", "Videos"),
  P("Brand Guidelines", "Brand guidelines"),
  P("Social Media", "Social media"),
  P("Noch nichts", "Nothing yet"),
];
const REGIONS: Pair[] = [
  P("Nürnberg", "Nuremberg"),
  P("Fürth", "Fürth"),
  P("Erlangen", "Erlangen"),
  P("München", "Munich"),
  P("Deutschland", "Germany"),
  P("Österreich", "Austria"),
  P("Schweiz", "Switzerland"),
  P("International", "International"),
  P("Andere", "Other"),
];
const SEO_GOALS: Pair[] = [
  P("Mehr Sichtbarkeit", "More visibility"),
  P("Mehr Anfragen", "More enquiries"),
  P("Mehr lokale Kunden", "More local customers"),
  P("Mehr Verkäufe", "More sales"),
  P("Bessere Google Rankings", "Better Google rankings"),
  P("Andere", "Other"),
];
const BUDGETS: Pair[] = [
  P("unter 1.000 €", "under €1,000"),
  P("1.000 – 2.500 €", "€1,000 – 2,500"),
  P("2.500 – 5.000 €", "€2,500 – 5,000"),
  P("5.000 – 10.000 €", "€5,000 – 10,000"),
  P("über 10.000 €", "over €10,000"),
  P("Noch nicht festgelegt", "Not defined yet"),
];
const TIMELINES: Pair[] = [
  P("So bald wie möglich", "As soon as possible"),
  P("In den nächsten 1–2 Monaten", "In the next 1–2 months"),
  P("In 3–6 Monaten", "In 3–6 months"),
  P("Später", "Later"),
  P("Noch nicht sicher", "Not sure yet"),
];
const YESNO: Pair[] = [P("Ja", "Yes"), P("Nein", "No"), P("Vielleicht", "Maybe")];
const YESNO_UNSURE: Pair[] = [P("Ja", "Yes"), P("Nein", "No"), P("Noch nicht sicher", "Not sure yet")];
const YESNO_DUNNO: Pair[] = [P("Ja", "Yes"), P("Nein", "No"), P("Weiß ich nicht", "I don't know")];
const CONTACT_WAYS: Pair[] = [P("E-Mail", "Email"), P("Telefon", "Phone"), P("WhatsApp", "WhatsApp")];

/* ---------- small field primitives ---------- */

const FieldLabel = ({ htmlFor, children, required }: { htmlFor?: string; children: React.ReactNode; required?: boolean }) => (
  <label
    htmlFor={htmlFor}
    className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2"
  >
    {children}
    {required && <span className="text-rose"> *</span>}
  </label>
);

const TextField = ({
  id,
  label,
  value,
  onChange,
  required,
  type = "text",
  placeholder,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
  error?: string;
}) => (
  <div>
    <FieldLabel htmlFor={id} required={required}>
      {label}
    </FieldLabel>
    <input
      id={id}
      type={type}
      value={value}
      required={required}
      placeholder={placeholder}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      onChange={(e) => onChange(e.target.value)}
      className="input-soft w-full"
    />
    {error && (
      <p id={`${id}-error`} role="alert" className="text-xs text-rose mt-2">
        {error}
      </p>
    )}
  </div>
);

const AreaField = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
  required,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  error?: string;
}) => (
  <div className="md:col-span-2">
    <FieldLabel htmlFor={id} required={required}>
      {label}
    </FieldLabel>
    <textarea
      id={id}
      rows={rows}
      value={value}
      placeholder={placeholder}
      aria-invalid={!!error}
      onChange={(e) => onChange(e.target.value)}
      className="input-soft w-full resize-none"
    />
    {error && (
      <p role="alert" className="text-xs text-rose mt-2">
        {error}
      </p>
    )}
  </div>
);

const ChoiceGroup = ({
  label,
  options,
  values,
  onToggle,
  multi = true,
  required,
}: {
  label: string;
  options: string[];
  values: string[];
  onToggle: (v: string) => void;
  multi?: boolean;
  required?: boolean;
}) => (
  <fieldset className="md:col-span-2">
    <legend className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
      {label}
      {required && <span className="text-rose"> *</span>}
    </legend>
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = values.includes(o);
        return (
          <button
            key={o}
            type="button"
            role={multi ? "checkbox" : "radio"}
            aria-checked={active}
            onClick={() => onToggle(o)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose/60 ${
              active
                ? "border-rose bg-rose-soft text-foreground"
                : "border-border bg-background/70 text-muted-foreground hover:border-rose/50 hover:text-foreground"
            }`}
          >
            {active ? <Check size={13} strokeWidth={2.2} className="text-rose" /> : <CircleDot size={13} strokeWidth={1.4} />}
            {o}
          </button>
        );
      })}
    </div>
  </fieldset>
);

/* ---------- page ---------- */

const Briefing = () => {
  const { lang, path } = useLang();
  const t = (de: string, en: string) => pick(lang, de, en);
  const opts = (arr: Pair[]) => arr.map((o) => pick(lang, o.de, o.en));

  const [type, setType] = useState<ProjectType | null>(null);
  const [step, setStep] = useState(0);
  const [a, setA] = useState<Answers>({});
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const fileInput = useRef<HTMLInputElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const set = (k: string, v: string | string[]) => setA((p) => ({ ...p, [k]: v }));
  const val = (k: string) => (a[k] as string) ?? "";
  const list = (k: string) => (Array.isArray(a[k]) ? (a[k] as string[]) : []);
  const toggle = (k: string, v: string, multi = true) =>
    setA((p) => {
      const cur = Array.isArray(p[k]) ? (p[k] as string[]) : [];
      if (!multi) return { ...p, [k]: cur.includes(v) ? [] : [v] };
      return { ...p, [k]: cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v] };
    });

  const steps = useMemo(() => {
    const base = ["type", "contact"];
    if (type === "website") return [...base, "business", "design", "content", "project"];
    if (type === "website-seo") return [...base, "business", "design", "content", "seo", "project"];
    if (type === "seo") return [...base, "seoOnly", "project"];
    return [...base, "general", "project"];
  }, [type]);

  const stepTitles: Record<string, string> = {
    type: t("Projekt", "Project"),
    contact: t("Kontakt", "Contact"),
    business: t("Unternehmen & Ziele", "Business & goals"),
    design: t("Design", "Design"),
    seo: t("SEO", "SEO"),
    seoOnly: t("SEO", "SEO"),
    content: t("Inhalte", "Content"),
    general: t("Ihr Vorhaben", "Your idea"),
    project: t("Budget & Abschluss", "Budget & finish"),
  };

  const current = steps[step];
  const isLast = step === steps.length - 1;

  const scrollTop = () => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const validateStep = () => {
    const e: Record<string, string> = {};
    if (current === "type" && !type) e.type = t("Bitte wählen Sie eine Option.", "Please select an option.");
    if (current === "contact") {
      if (!val("name").trim()) e.name = t("Bitte geben Sie Ihren Namen an.", "Please enter your name.");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val("email").trim()))
        e.email = t("Bitte geben Sie eine gültige E-Mail-Adresse an.", "Please enter a valid email address.");
      if (!val("company").trim())
        e.company = t("Bitte geben Sie Ihr Unternehmen an.", "Please enter your company name.");
    }
    if (current === "seoOnly" && !val("currentUrl").trim())
      e.currentUrl = t("Bitte geben Sie die URL Ihrer Website an.", "Please enter your website URL.");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, steps.length - 1));
    scrollTop();
  };
  const back = () => {
    setErrors({});
    setStep((s) => Math.max(s - 1, 0));
    scrollTop();
  };

  const addFiles = (incoming: FileList | null) => {
    if (!incoming) return;
    setFileError("");
    const accepted: File[] = [];
    for (const f of Array.from(incoming)) {
      if (!ALLOWED.includes(f.type)) {
        setFileError(
          t(`"${f.name}" hat ein nicht unterstütztes Format.`, `"${f.name}" has an unsupported format.`),
        );
        continue;
      }
      if (f.size > MAX_FILE_MB * 1024 * 1024) {
        setFileError(
          t(`"${f.name}" ist größer als ${MAX_FILE_MB} MB.`, `"${f.name}" is larger than ${MAX_FILE_MB} MB.`),
        );
        continue;
      }
      accepted.push(f);
    }
    setFiles((p) => [...p, ...accepted].slice(0, MAX_FILES));
  };

  const submit = async () => {
    if (status === "sending") return;
    if (!validateStep()) return;
    if (!consent) {
      setErrors({
        consent: t(
          "Bitte stimmen Sie der Datenschutzerklärung zu.",
          "Please accept the privacy policy to continue.",
        ),
      });
      return;
    }
    setStatus("sending");
    setErrors({});
    try {
      const folder = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
      const uploaded: { name: string; path: string; size: number }[] = [];
      for (const f of files) {
        const safe = f.name.replace(/[^a-zA-Z0-9._-]/g, "_");
        const objPath = `${folder}/${safe}`;
        const { error } = await supabase.storage.from("briefing-uploads").upload(objPath, f, {
          contentType: f.type,
          upsert: false,
        });
        if (error) throw error;
        uploaded.push({ name: f.name, path: objPath, size: f.size });
      }

      const { error } = await supabase.functions.invoke("send-briefing", {
        body: { projectType: type, answers: a, files: uploaded, lang },
      });
      if (error) throw error;
      setStatus("success");
      scrollTop();
    } catch (err) {
      console.error("briefing submit failed", err);
      setStatus("error");
    }
  };

  const seoTitle = t(
    "Projekt anfragen | Webdesign & SEO – Marianna Kuzmenko",
    "Start a project | Web design & SEO – Marianna Kuzmenko",
  );
  const seoDesc = t(
    "Sie planen eine neue Website oder möchten Ihre bestehende Website mit professionellem SEO verbessern? Erzählen Sie mir von Ihrem Projekt und erhalten Sie eine individuelle Einschätzung.",
    "Planning a new website or want to improve your existing one with professional SEO? Tell me about your project and get an individual assessment.",
  );
  const seoPath = pick(lang, "/briefing", "/en/briefing");

  /* ---------- success ---------- */
  if (status === "success") {
    return (
      <Layout>
        <Seo title={seoTitle} description={seoDesc} path={seoPath} pathDe="/briefing" pathEn="/en/briefing" />
        <section className="container-editorial py-24 md:py-32">
          <div className="panel-white max-w-2xl mx-auto text-center p-10 md:p-14">
            <div className="w-14 h-14 rounded-full bg-rose-soft flex items-center justify-center mx-auto mb-8">
              <Check size={22} strokeWidth={1.8} className="text-rose" />
            </div>
            <h1 className="display-lg mb-5">{t("Vielen Dank für Ihre Anfrage!", "Thank you for your enquiry!")}</h1>
            <p className="text-muted-foreground leading-relaxed mb-9">
              {t(
                "Ich habe Ihre Angaben erhalten und melde mich so bald wie möglich bei Ihnen.",
                "I've received your details and will get back to you as soon as possible.",
              )}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to={path("home")} className="btn-cta">
                {t("Zur Startseite", "Back to home")} <ArrowUpRight size={16} strokeWidth={1.8} />
              </Link>
              <WhatsAppButton lang={lang} label={t("WhatsApp schreiben", "Message on WhatsApp")} variant="compact" />
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  /* ---------- steps ---------- */
  const renderStep = () => {
    switch (current) {
      case "type":
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl mb-3">
              {t("Was möchten Sie anfragen?", "What would you like to enquire about?")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              {t(
                "Wählen Sie den Bereich, der am besten zu Ihrem Vorhaben passt — die weiteren Fragen passen sich automatisch an.",
                "Choose what fits your plans best — the following questions adapt automatically.",
              )}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TYPE_CARDS.map((c) => {
                const active = type === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => {
                      setType(c.id);
                      setErrors({});
                    }}
                    className={`text-left rounded-3xl border p-6 md:p-7 transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose/60 ${
                      active
                        ? "border-rose bg-rose-soft shadow-[0_18px_50px_-32px_hsl(345_43%_50%/0.5)]"
                        : "border-border bg-background/70 backdrop-blur hover:border-rose/40"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <span className="font-display text-xl md:text-2xl">{pick(lang, c.title.de, c.title.en)}</span>
                      <span
                        aria-hidden
                        className={`mt-1 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          active ? "border-rose bg-rose" : "border-border"
                        }`}
                      >
                        {active && <Check size={12} strokeWidth={3} className="text-background" />}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pick(lang, c.desc.de, c.desc.en)}
                    </p>
                  </button>
                );
              })}
            </div>
            {errors.type && (
              <p role="alert" className="text-xs text-rose mt-4">
                {errors.type}
              </p>
            )}
          </div>
        );

      case "contact":
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl mb-3">
              {t("Wie erreiche ich Sie?", "How can I reach you?")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              {t(
                "Nur das Nötigste — damit ich mich persönlich bei Ihnen melden kann.",
                "Just the essentials — so I can get back to you personally.",
              )}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextField id="name" label={t("Vorname / Name", "First name / name")} required value={val("name")} onChange={(v) => set("name", v)} error={errors.name} />
              <TextField id="email" label={t("E-Mail", "Email")} type="email" required value={val("email")} onChange={(v) => set("email", v)} error={errors.email} />
              <TextField id="phone" label={t("Telefon", "Phone")} type="tel" value={val("phone")} onChange={(v) => set("phone", v)} />
              <TextField id="company" label={t("Unternehmen", "Company")} required value={val("company")} onChange={(v) => set("company", v)} error={errors.company} />
              <TextField id="website" label={t("Website (optional)", "Website (optional)")} value={val("website")} onChange={(v) => set("website", v)} placeholder="https://" />
              <TextField id="location" label={t("Standort", "Location")} value={val("location")} onChange={(v) => set("location", v)} placeholder={t("z. B. Nürnberg", "e.g. Nuremberg")} />
              <ChoiceGroup
                label={t("Bevorzugter Kontaktweg", "Preferred contact method")}
                options={opts(CONTACT_WAYS)}
                values={list("preferredContact")}
                onToggle={(v) => toggle("preferredContact", v)}
              />
            </div>
          </div>
        );

      case "business":
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl mb-3">
              {t("Ihr Unternehmen & Ihre Ziele", "Your business & your goals")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              {t(
                "Je konkreter, desto besser kann ich Konzept und Aufwand einschätzen.",
                "The more specific, the better I can estimate concept and scope.",
              )}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <AreaField id="businessDescription" label={t("Was macht Ihr Unternehmen?", "What does your business do?")} rows={5} value={val("businessDescription")} onChange={(v) => set("businessDescription", v)} />
              <ChoiceGroup label={t("Was soll Ihre neue Website erreichen?", "What should your new website achieve?")} options={opts(GOALS)} values={list("goals")} onToggle={(v) => toggle("goals", v)} />
              <AreaField id="highlights" label={t("Welche Leistungen oder Produkte möchten Sie besonders hervorheben?", "Which services or products should stand out?")} value={val("highlights")} onChange={(v) => set("highlights", v)} />
              <ChoiceGroup label={t("Welche Seiten benötigen Sie?", "Which pages do you need?")} options={opts(PAGES)} values={list("pages")} onToggle={(v) => toggle("pages", v)} />
              <ChoiceGroup label={t("Welche Funktionen benötigen Sie?", "Which features do you need?")} options={opts(FEATURES)} values={list("features")} onToggle={(v) => toggle("features", v)} />
            </div>
          </div>
        );

      case "design":
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl mb-3">
              {t("Ihr Gefühl für Design", "Your sense of design")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              {t(
                "Es gibt kein Richtig oder Falsch — ich möchte nur Ihren Geschmack verstehen.",
                "There's no right or wrong — I just want to understand your taste.",
              )}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ChoiceGroup label={t("Welche Stilrichtung gefällt Ihnen?", "Which style appeals to you?")} options={opts(STYLES)} values={list("styles")} onToggle={(v) => toggle("styles", v)} />
              <TextField id="colorsWanted" label={t("Welche Farben möchten Sie verwenden?", "Which colours would you like to use?")} value={val("colorsWanted")} onChange={(v) => set("colorsWanted", v)} />
              <TextField id="colorsAvoid" label={t("Welche Farben möchten Sie vermeiden?", "Which colours should be avoided?")} value={val("colorsAvoid")} onChange={(v) => set("colorsAvoid", v)} />
              <AreaField id="referenceUrls" label={t("Haben Sie Websites, die Ihnen gefallen?", "Are there websites you like?")} rows={3} placeholder="https://…" value={val("referenceUrls")} onChange={(v) => set("referenceUrls", v)} />
              <AreaField id="referenceLikes" label={t("Was gefällt Ihnen an diesen Websites?", "What do you like about those websites?")} rows={3} value={val("referenceLikes")} onChange={(v) => set("referenceLikes", v)} />
            </div>
          </div>
        );

      case "content":
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl mb-3">
              {t("Inhalte & Materialien", "Content & materials")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              {t(
                "Falls noch nichts vorhanden ist: kein Problem, wir bauen das gemeinsam auf.",
                "If nothing exists yet: no problem, we'll build it together.",
              )}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ChoiceGroup label={t("Welche Materialien sind bereits vorhanden?", "Which materials do you already have?")} options={opts(MATERIALS)} values={list("materials")} onToggle={(v) => toggle("materials", v)} />
              <ChoiceGroup label={t("Benötigen Sie Unterstützung bei Texten?", "Do you need support with copywriting?")} options={opts(YESNO)} values={list("copySupport")} onToggle={(v) => toggle("copySupport", v, false)} multi={false} />
              <ChoiceGroup label={t("Benötigen Sie professionelle SEO-Texte?", "Do you need professional SEO copy?")} options={opts(YESNO_UNSURE)} values={list("seoCopy")} onToggle={(v) => toggle("seoCopy", v, false)} multi={false} />
            </div>
          </div>
        );

      case "seo":
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl mb-3">
              {t("Sichtbarkeit bei Google", "Visibility on Google")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              {t(
                "Damit die Website von Anfang an auf Suchanfragen ausgerichtet ist.",
                "So the website is built around real search demand from day one.",
              )}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ChoiceGroup label={t("In welchen Regionen möchten Sie gefunden werden?", "In which regions do you want to be found?")} options={opts(REGIONS)} values={list("regions")} onToggle={(v) => toggle("regions", v)} />
              <TextField id="regionsOther" label={t("Weitere Regionen", "Other regions")} value={val("regionsOther")} onChange={(v) => set("regionsOther", v)} />
              <TextField id="seoVisibleServices" label={t("Welche Leistungen sollen bei Google sichtbar sein?", "Which services should be visible on Google?")} value={val("seoVisibleServices")} onChange={(v) => set("seoVisibleServices", v)} />
              <AreaField id="targetCustomers" label={t("Wer sind Ihre wichtigsten Kunden?", "Who are your most important customers?")} rows={3} value={val("targetCustomers")} onChange={(v) => set("targetCustomers", v)} />
              <AreaField id="competitors" label={t("Welche Unternehmen sehen Sie als Ihre wichtigsten Wettbewerber?", "Who are your main competitors?")} rows={3} value={val("competitors")} onChange={(v) => set("competitors", v)} />
              <AreaField id="keywords" label={t("Welche Suchbegriffe sind Ihnen bereits bekannt?", "Which search terms do you already know of?")} rows={3} value={val("keywords")} onChange={(v) => set("keywords", v)} />
              <ChoiceGroup label={t("Verfügen Sie bereits über ein Google Unternehmensprofil?", "Do you already have a Google Business Profile?")} options={opts(YESNO_DUNNO)} values={list("googleBusiness")} onToggle={(v) => toggle("googleBusiness", v, false)} multi={false} />
              <ChoiceGroup label={t("Verwenden Sie Google Analytics?", "Do you use Google Analytics?")} options={opts(YESNO_DUNNO)} values={list("googleAnalytics")} onToggle={(v) => toggle("googleAnalytics", v, false)} multi={false} />
              <ChoiceGroup label={t("Verwenden Sie Google Search Console?", "Do you use Google Search Console?")} options={opts(YESNO_DUNNO)} values={list("searchConsole")} onToggle={(v) => toggle("searchConsole", v, false)} multi={false} />
            </div>
          </div>
        );

      case "seoOnly":
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl mb-3">
              {t("Ihre bestehende Website", "Your existing website")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              {t(
                "Ich schaue mir Ihre Seite vorab an, bevor wir sprechen.",
                "I'll review your site before we talk.",
              )}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextField id="currentUrl" label={t("URL Ihrer aktuellen Website", "URL of your current website")} required placeholder="https://" value={val("currentUrl")} onChange={(v) => set("currentUrl", v)} error={errors.currentUrl} />
              <TextField id="seoVisibleServices" label={t("Welche Leistungen / Produkte sollen besonders sichtbar werden?", "Which services / products should become most visible?")} value={val("seoVisibleServices")} onChange={(v) => set("seoVisibleServices", v)} />
              <ChoiceGroup label={t("Was möchten Sie mit SEO erreichen?", "What do you want to achieve with SEO?")} options={opts(SEO_GOALS)} values={list("seoGoals")} onToggle={(v) => toggle("seoGoals", v)} />
              <ChoiceGroup label={t("Welche Regionen möchten Sie erreichen?", "Which regions do you want to reach?")} options={opts(REGIONS)} values={list("regions")} onToggle={(v) => toggle("regions", v)} />
              <AreaField id="targetCustomers" label={t("Wer sind Ihre wichtigsten Zielgruppen?", "Who are your key target audiences?")} rows={3} value={val("targetCustomers")} onChange={(v) => set("targetCustomers", v)} />
              <AreaField id="competitors" label={t("Wer sind Ihre wichtigsten Wettbewerber?", "Who are your main competitors?")} rows={3} value={val("competitors")} onChange={(v) => set("competitors", v)} />
              <AreaField id="keywords" label={t("Welche Keywords möchten Sie aktuell ranken?", "Which keywords do you want to rank for?")} rows={3} value={val("keywords")} onChange={(v) => set("keywords", v)} />
              <AreaField id="seoIssues" label={t("Was funktioniert auf Ihrer Website derzeit nicht so gut?", "What isn't working well on your website right now?")} rows={3} value={val("seoIssues")} onChange={(v) => set("seoIssues", v)} />
            </div>
          </div>
        );

      case "general":
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl mb-3">
              {t("Erzählen Sie mir kurz von Ihrem Vorhaben", "Tell me briefly about your plans")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              {t(
                "Ein paar Sätze genügen — den Rest klären wir gemeinsam im Gespräch.",
                "A few sentences are enough — we'll clarify the rest in conversation.",
              )}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <AreaField id="businessDescription" label={t("Was macht Ihr Unternehmen?", "What does your business do?")} rows={4} value={val("businessDescription")} onChange={(v) => set("businessDescription", v)} />
              <ChoiceGroup label={t("Was möchten Sie erreichen?", "What would you like to achieve?")} options={opts(GOALS)} values={list("goals")} onToggle={(v) => toggle("goals", v)} />
              <AreaField id="seoIssues" label={t("Was funktioniert aktuell nicht so gut?", "What isn't working well at the moment?")} rows={3} value={val("seoIssues")} onChange={(v) => set("seoIssues", v)} />
            </div>
          </div>
        );

      case "project":
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl mb-3">
              {t("Budget, Zeitrahmen & Abschluss", "Budget, timeline & final details")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              {t(
                "Zum Schluss: ein realistischer Rahmen — und alles, was Sie mir noch mitgeben möchten.",
                "Finally: a realistic frame — and anything else you'd like to share.",
              )}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ChoiceGroup
                label={t(
                  "Welches Budget haben Sie ungefähr für das Projekt eingeplant?",
                  "Roughly which budget have you planned for the project?",
                )}
                options={opts(BUDGETS)}
                values={list("budget")}
                onToggle={(v) => toggle("budget", v, false)}
                multi={false}
              />
              <p className="md:col-span-2 -mt-2 text-xs text-muted-foreground leading-relaxed">
                {t(
                  "Die Angabe hilft mir, den Umfang des Projekts realistisch einzuschätzen. Sie ist keine verbindliche Preiszusage.",
                  "This helps me estimate the scope realistically. It is not a binding price commitment.",
                )}
              </p>
              <ChoiceGroup
                label={t("Wann möchten Sie mit dem Projekt starten?", "When would you like to start the project?")}
                options={opts(TIMELINES)}
                values={list("timeline")}
                onToggle={(v) => toggle("timeline", v, false)}
                multi={false}
              />
              <div>
                <FieldLabel htmlFor="deadline">
                  {t("Gibt es einen festen Termin oder eine Deadline?", "Is there a fixed date or deadline?")}
                </FieldLabel>
                <input
                  id="deadline"
                  type="date"
                  value={val("deadline")}
                  onChange={(e) => set("deadline", e.target.value)}
                  className="input-soft w-full"
                />
              </div>
              <AreaField
                id="additional"
                label={t("Was sollte ich noch über Ihr Projekt wissen?", "What else should I know about your project?")}
                rows={5}
                placeholder={t(
                  "Erzählen Sie mir gerne alles, was Ihnen wichtig ist…",
                  "Feel free to tell me anything that matters to you…",
                )}
                value={val("additional")}
                onChange={(v) => set("additional", v)}
              />

              {/* Files */}
              <div className="md:col-span-2">
                <FieldLabel>{t("Dateien hochladen – optional", "Upload files – optional")}</FieldLabel>
                <input
                  ref={fileInput}
                  id="files"
                  type="file"
                  multiple
                  accept={ACCEPT}
                  className="sr-only"
                  onChange={(e) => addFiles(e.target.files)}
                />
                <button
                  type="button"
                  onClick={() => fileInput.current?.click()}
                  className="w-full rounded-3xl border border-dashed border-border bg-background/60 px-6 py-8 text-center transition-colors hover:border-rose/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose/60"
                >
                  <Paperclip size={18} strokeWidth={1.5} className="mx-auto mb-3 text-rose" />
                  <span className="block text-sm">
                    {t(
                      "Logo, Brand Guidelines, Fotos oder Dokumente hinzufügen",
                      "Add logo, brand guidelines, photos or documents",
                    )}
                  </span>
                  <span className="block text-xs text-muted-foreground mt-1">
                    {t(
                      `JPG, PNG, WEBP, PDF, DOC, DOCX · max. ${MAX_FILE_MB} MB pro Datei · bis zu ${MAX_FILES} Dateien`,
                      `JPG, PNG, WEBP, PDF, DOC, DOCX · max. ${MAX_FILE_MB} MB per file · up to ${MAX_FILES} files`,
                    )}
                  </span>
                </button>
                {fileError && (
                  <p role="alert" className="text-xs text-rose mt-2">
                    {fileError}
                  </p>
                )}
                {files.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {files.map((f, i) => (
                      <li
                        key={`${f.name}-${i}`}
                        className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm"
                      >
                        <span className="truncate">{f.name}</span>
                        <button
                          type="button"
                          onClick={() => setFiles((p) => p.filter((_, idx) => idx !== i))}
                          aria-label={t(`${f.name} entfernen`, `Remove ${f.name}`)}
                          className="text-muted-foreground hover:text-rose transition-colors"
                        >
                          <X size={16} strokeWidth={1.8} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Consent */}
              <div className="md:col-span-2">
                <label htmlFor="consent" className="flex items-start gap-3 text-sm leading-relaxed cursor-pointer">
                  <input
                    id="consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-1 h-4 w-4 rounded border-border accent-[hsl(var(--rose))]"
                  />
                  <span className="text-muted-foreground">
                    {lang === "en" ? (
                      <>
                        I have read the{" "}
                        <Link to="/datenschutz" className="text-rose underline-offset-4 underline">
                          privacy policy
                        </Link>{" "}
                        and consent to my data being processed to handle my enquiry.
                      </>
                    ) : (
                      <>
                        Ich habe die{" "}
                        <Link to="/datenschutz" className="text-rose underline-offset-4 underline">
                          Datenschutzerklärung
                        </Link>{" "}
                        gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu.
                      </>
                    )}
                  </span>
                </label>
                {errors.consent && (
                  <p role="alert" className="text-xs text-rose mt-2">
                    {errors.consent}
                  </p>
                )}
              </div>

              {status === "error" && (
                <div role="alert" className="md:col-span-2 rounded-3xl border border-rose/40 bg-rose-soft p-6">
                  <p className="font-display text-lg mb-2">
                    {t(
                      "Leider konnte Ihre Anfrage gerade nicht gesendet werden.",
                      "Unfortunately your enquiry could not be sent right now.",
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t(
                      "Bitte versuchen Sie es erneut oder schreiben Sie mir direkt per E-Mail.",
                      "Please try again or email me directly.",
                    )}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href={`mailto:${CONTACT.email}`} className="btn-cta-outline">
                      {CONTACT.email}
                    </a>
                    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-cta-outline">
                      WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout>
      <Seo
        title={seoTitle}
        description={seoDesc}
        path={seoPath}
        pathDe="/briefing"
        pathEn="/en/briefing"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: t("Projekt-Briefing", "Project briefing"),
          description: seoDesc,
          url: `https://www.marianna-kuzmenko.com${seoPath}`,
        }}
      />

      {/* HERO */}
      <section ref={topRef} className="container-editorial pt-14 md:pt-20 pb-8 md:pb-12 scroll-mt-24">
        <p className="eyebrow mb-5">— {t("Projekt-Briefing", "Project briefing")} —</p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="display-lg mb-6">
              {lang === "en" ? (
                <>
                  Tell me about <span className="italic text-rose">your project.</span>
                </>
              ) : (
                <>
                  Erzählen Sie mir von <span className="italic text-rose">Ihrem Projekt.</span>
                </>
              )}
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              {t(
                "Je mehr ich über Ihr Unternehmen, Ihre Ziele und Ihre Wünsche weiß, desto besser kann ich Ihr Projekt einschätzen und Ihnen ein passendes Konzept vorschlagen.",
                "The more I know about your business, your goals and your wishes, the better I can assess your project and propose a fitting concept.",
              )}
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap items-center gap-3 lg:justify-end">
            <span className="chip">{t("ca. 5–7 Minuten", "approx. 5–7 minutes")}</span>
            <WhatsAppButton lang={lang} variant="nav" iconOnly />
          </div>
        </div>
      </section>

      {/* PROGRESS */}
      <section className="container-editorial pb-6">
        <ol className="hidden md:flex flex-wrap items-center gap-x-6 gap-y-2" aria-label={t("Fortschritt", "Progress")}>
          {steps.map((s, i) => (
            <li key={s} className="flex items-center gap-2">
              <span
                className={`font-mono text-[11px] tracking-[0.2em] ${
                  i === step ? "text-rose" : i < step ? "text-foreground" : "text-muted-foreground/60"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`text-sm ${
                  i === step ? "text-foreground" : i < step ? "text-muted-foreground" : "text-muted-foreground/60"
                }`}
                aria-current={i === step ? "step" : undefined}
              >
                {stepTitles[s]}
              </span>
            </li>
          ))}
        </ol>
        <div className="md:hidden">
          <div className="flex items-center justify-between mb-2 text-sm">
            <span className="font-mono text-[11px] tracking-[0.2em] text-rose">
              {String(step + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
            </span>
            <span className="text-muted-foreground">{stepTitles[current]}</span>
          </div>
          <div className="h-1 w-full rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full bg-rose transition-all duration-500"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="container-editorial pb-24">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            isLast ? submit() : next();
          }}
          noValidate
          className="panel-white p-6 md:p-10"
          aria-label={t("Projekt-Briefing Formular", "Project briefing form")}
        >
          {renderStep()}

          <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center gap-3 justify-between">
            <button
              type="button"
              onClick={back}
              disabled={step === 0}
              className="btn-cta-outline disabled:opacity-40 disabled:pointer-events-none"
            >
              <ArrowLeft size={16} strokeWidth={1.8} /> {t("Zurück", "Back")}
            </button>

            {isLast ? (
              <button type="submit" disabled={status === "sending"} className="btn-cta disabled:opacity-60">
                {status === "sending" ? (
                  <>
                    {t("Wird gesendet…", "Sending…")} <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    {t("Projektanfrage senden", "Send project enquiry")} <ArrowRight size={16} strokeWidth={1.8} />
                  </>
                )}
              </button>
            ) : (
              <button type="submit" className="btn-cta">
                {t("Weiter", "Continue")} <ArrowRight size={16} strokeWidth={1.8} />
              </button>
            )}
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default Briefing;
