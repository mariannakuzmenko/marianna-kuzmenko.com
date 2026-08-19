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

const TYPE_CARDS: { id: ProjectType; title: string; desc: string }[] = [
  { id: "website", title: "Neue Website", desc: "Webdesign & Webentwicklung für Ihr Unternehmen" },
  {
    id: "website-seo",
    title: "Website + SEO",
    desc: "Website, UX/UI, technische Umsetzung und Suchmaschinenoptimierung",
  },
  { id: "seo", title: "SEO", desc: "SEO-Optimierung für eine bestehende Website" },
  {
    id: "unsure",
    title: "Ich bin mir noch nicht sicher",
    desc: "Wir finden gemeinsam heraus, was für Ihr Unternehmen sinnvoll ist.",
  },
];

const GOALS = [
  "Mehr Kundenanfragen",
  "Mehr Vertrauen",
  "Professioneller auftreten",
  "Mehr Sichtbarkeit",
  "Mehr Verkäufe",
  "Mehr Buchungen",
  "Neue Zielgruppen erreichen",
  "Andere",
];
const PAGES = [
  "Startseite",
  "Über uns",
  "Leistungen",
  "Produkte",
  "Projekte / Portfolio",
  "Blog",
  "Kontakt",
  "FAQ",
  "Andere",
];
const FEATURES = [
  "Kontaktformular",
  "WhatsApp",
  "Terminbuchung",
  "Newsletter",
  "Mehrsprachigkeit",
  "Online-Shop",
  "Buchungssystem",
  "Karten / Standort",
  "Andere",
];
const STYLES = [
  "Minimalistisch",
  "Elegant",
  "Modern",
  "Editorial",
  "Premium",
  "Natürlich",
  "Kreativ",
  "Ich bin offen für Vorschläge",
];
const MATERIALS = ["Logo", "Texte", "Fotos", "Videos", "Brand Guidelines", "Social Media", "Noch nichts"];
const REGIONS = [
  "Nürnberg",
  "Fürth",
  "Erlangen",
  "München",
  "Deutschland",
  "Österreich",
  "Schweiz",
  "International",
  "Andere",
];
const SEO_GOALS = [
  "Mehr Sichtbarkeit",
  "Mehr Anfragen",
  "Mehr lokale Kunden",
  "Mehr Verkäufe",
  "Bessere Google Rankings",
  "Andere",
];
const BUDGETS = [
  "unter 1.000 €",
  "1.000 – 2.500 €",
  "2.500 – 5.000 €",
  "5.000 – 10.000 €",
  "über 10.000 €",
  "Noch nicht festgelegt",
];
const TIMELINES = [
  "So bald wie möglich",
  "In den nächsten 1–2 Monaten",
  "In 3–6 Monaten",
  "Später",
  "Noch nicht sicher",
];
const YESNO = ["Ja", "Nein", "Vielleicht"];
const YESNO_UNSURE = ["Ja", "Nein", "Noch nicht sicher"];
const YESNO_DUNNO = ["Ja", "Nein", "Weiß ich nicht"];
const CONTACT_WAYS = ["E-Mail", "Telefon", "WhatsApp"];

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
    type: "Projekt",
    contact: "Kontakt",
    business: "Unternehmen & Ziele",
    design: "Design",
    content: "Inhalte",
    seo: "SEO",
    seoOnly: "SEO",
    general: "Ihr Vorhaben",
    project: "Budget & Abschluss",
  };

  const current = steps[step];
  const isLast = step === steps.length - 1;

  const scrollTop = () => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const validateStep = () => {
    const e: Record<string, string> = {};
    if (current === "type" && !type) e.type = "Bitte wählen Sie eine Option.";
    if (current === "contact") {
      if (!val("name").trim()) e.name = "Bitte geben Sie Ihren Namen an.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val("email").trim()))
        e.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
      if (!val("company").trim()) e.company = "Bitte geben Sie Ihr Unternehmen an.";
    }
    if (current === "seoOnly" && !val("currentUrl").trim())
      e.currentUrl = "Bitte geben Sie die URL Ihrer Website an.";
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
        setFileError(`"${f.name}" hat ein nicht unterstütztes Format.`);
        continue;
      }
      if (f.size > MAX_FILE_MB * 1024 * 1024) {
        setFileError(`"${f.name}" ist größer als ${MAX_FILE_MB} MB.`);
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
      setErrors({ consent: "Bitte stimmen Sie der Datenschutzerklärung zu." });
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
        body: { projectType: type, answers: a, files: uploaded },
      });
      if (error) throw error;
      setStatus("success");
      scrollTop();
    } catch (err) {
      console.error("briefing submit failed", err);
      setStatus("error");
    }
  };

  const seoTitle = "Projekt anfragen | Webdesign & SEO – Marianna Kuzmenko";
  const seoDesc =
    "Sie planen eine neue Website oder möchten Ihre bestehende Website mit professionellem SEO verbessern? Erzählen Sie mir von Ihrem Projekt und erhalten Sie eine individuelle Einschätzung.";

  /* ---------- success ---------- */
  if (status === "success") {
    return (
      <Layout>
        <Seo title={seoTitle} description={seoDesc} path="/briefing" />
        <section className="container-editorial py-24 md:py-32">
          <div className="panel-white max-w-2xl mx-auto text-center p-10 md:p-14">
            <div className="w-14 h-14 rounded-full bg-rose-soft flex items-center justify-center mx-auto mb-8">
              <Check size={22} strokeWidth={1.8} className="text-rose" />
            </div>
            <h1 className="display-lg mb-5">Vielen Dank für Ihre Anfrage!</h1>
            <p className="text-muted-foreground leading-relaxed mb-9">
              Ich habe Ihre Angaben erhalten und melde mich so bald wie möglich bei Ihnen.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to={path("home")} className="btn-cta">
                Zur Startseite <ArrowUpRight size={16} strokeWidth={1.8} />
              </Link>
              <WhatsAppButton lang={lang} label="WhatsApp schreiben" variant="compact" />
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
            <h2 className="font-display text-2xl md:text-3xl mb-3">Was möchten Sie anfragen?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Wählen Sie den Bereich, der am besten zu Ihrem Vorhaben passt — die weiteren Fragen passen sich
              automatisch an.
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
                      <span className="font-display text-xl md:text-2xl">{c.title}</span>
                      <span
                        aria-hidden
                        className={`mt-1 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          active ? "border-rose bg-rose" : "border-border"
                        }`}
                      >
                        {active && <Check size={12} strokeWidth={3} className="text-background" />}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
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
            <h2 className="font-display text-2xl md:text-3xl mb-3">Wie erreiche ich Sie?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Nur das Nötigste — damit ich mich persönlich bei Ihnen melden kann.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextField id="name" label="Vorname / Name" required value={val("name")} onChange={(v) => set("name", v)} error={errors.name} />
              <TextField id="email" label="E-Mail" type="email" required value={val("email")} onChange={(v) => set("email", v)} error={errors.email} />
              <TextField id="phone" label="Telefon" type="tel" value={val("phone")} onChange={(v) => set("phone", v)} />
              <TextField id="company" label="Unternehmen" required value={val("company")} onChange={(v) => set("company", v)} error={errors.company} />
              <TextField id="website" label="Website (optional)" value={val("website")} onChange={(v) => set("website", v)} placeholder="https://" />
              <TextField id="location" label="Standort" value={val("location")} onChange={(v) => set("location", v)} placeholder="z. B. Nürnberg" />
              <ChoiceGroup
                label="Bevorzugter Kontaktweg"
                options={CONTACT_WAYS}
                values={list("preferredContact")}
                onToggle={(v) => toggle("preferredContact", v)}
              />
            </div>
          </div>
        );

      case "business":
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl mb-3">Ihr Unternehmen & Ihre Ziele</h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Je konkreter, desto besser kann ich Konzept und Aufwand einschätzen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <AreaField id="businessDescription" label="Was macht Ihr Unternehmen?" rows={5} value={val("businessDescription")} onChange={(v) => set("businessDescription", v)} />
              <ChoiceGroup label="Was soll Ihre neue Website erreichen?" options={GOALS} values={list("goals")} onToggle={(v) => toggle("goals", v)} />
              <AreaField id="highlights" label="Welche Leistungen oder Produkte möchten Sie besonders hervorheben?" value={val("highlights")} onChange={(v) => set("highlights", v)} />
              <ChoiceGroup label="Welche Seiten benötigen Sie?" options={PAGES} values={list("pages")} onToggle={(v) => toggle("pages", v)} />
              <ChoiceGroup label="Welche Funktionen benötigen Sie?" options={FEATURES} values={list("features")} onToggle={(v) => toggle("features", v)} />
            </div>
          </div>
        );

      case "design":
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl mb-3">Ihr Gefühl für Design</h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Es gibt kein Richtig oder Falsch — ich möchte nur Ihren Geschmack verstehen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ChoiceGroup label="Welche Stilrichtung gefällt Ihnen?" options={STYLES} values={list("styles")} onToggle={(v) => toggle("styles", v)} />
              <TextField id="colorsWanted" label="Welche Farben möchten Sie verwenden?" value={val("colorsWanted")} onChange={(v) => set("colorsWanted", v)} />
              <TextField id="colorsAvoid" label="Welche Farben möchten Sie vermeiden?" value={val("colorsAvoid")} onChange={(v) => set("colorsAvoid", v)} />
              <AreaField id="referenceUrls" label="Haben Sie Websites, die Ihnen gefallen?" rows={3} placeholder="https://…" value={val("referenceUrls")} onChange={(v) => set("referenceUrls", v)} />
              <AreaField id="referenceLikes" label="Was gefällt Ihnen an diesen Websites?" rows={3} value={val("referenceLikes")} onChange={(v) => set("referenceLikes", v)} />
            </div>
          </div>
        );

      case "content":
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl mb-3">Inhalte & Materialien</h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Falls noch nichts vorhanden ist: kein Problem, wir bauen das gemeinsam auf.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ChoiceGroup label="Welche Materialien sind bereits vorhanden?" options={MATERIALS} values={list("materials")} onToggle={(v) => toggle("materials", v)} />
              <ChoiceGroup label="Benötigen Sie Unterstützung bei Texten?" options={YESNO} values={list("copySupport")} onToggle={(v) => toggle("copySupport", v, false)} multi={false} />
              <ChoiceGroup label="Benötigen Sie professionelle SEO-Texte?" options={YESNO_UNSURE} values={list("seoCopy")} onToggle={(v) => toggle("seoCopy", v, false)} multi={false} />
            </div>
          </div>
        );

      case "seo":
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl mb-3">Sichtbarkeit bei Google</h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Damit die Website von Anfang an auf Suchanfragen ausgerichtet ist.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ChoiceGroup label="In welchen Regionen möchten Sie gefunden werden?" options={REGIONS} values={list("regions")} onToggle={(v) => toggle("regions", v)} />
              <TextField id="regionsOther" label="Weitere Regionen" value={val("regionsOther")} onChange={(v) => set("regionsOther", v)} />
              <TextField id="seoVisibleServices" label="Welche Leistungen sollen bei Google sichtbar sein?" value={val("seoVisibleServices")} onChange={(v) => set("seoVisibleServices", v)} />
              <AreaField id="targetCustomers" label="Wer sind Ihre wichtigsten Kunden?" rows={3} value={val("targetCustomers")} onChange={(v) => set("targetCustomers", v)} />
              <AreaField id="competitors" label="Welche Unternehmen sehen Sie als Ihre wichtigsten Wettbewerber?" rows={3} value={val("competitors")} onChange={(v) => set("competitors", v)} />
              <AreaField id="keywords" label="Welche Suchbegriffe sind Ihnen bereits bekannt?" rows={3} value={val("keywords")} onChange={(v) => set("keywords", v)} />
              <ChoiceGroup label="Verfügen Sie bereits über ein Google Unternehmensprofil?" options={YESNO_DUNNO} values={list("googleBusiness")} onToggle={(v) => toggle("googleBusiness", v, false)} multi={false} />
              <ChoiceGroup label="Verwenden Sie Google Analytics?" options={YESNO_DUNNO} values={list("googleAnalytics")} onToggle={(v) => toggle("googleAnalytics", v, false)} multi={false} />
              <ChoiceGroup label="Verwenden Sie Google Search Console?" options={YESNO_DUNNO} values={list("searchConsole")} onToggle={(v) => toggle("searchConsole", v, false)} multi={false} />
            </div>
          </div>
        );

      case "seoOnly":
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl mb-3">Ihre bestehende Website</h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Ich schaue mir Ihre Seite vorab an, bevor wir sprechen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextField id="currentUrl" label="URL Ihrer aktuellen Website" required placeholder="https://" value={val("currentUrl")} onChange={(v) => set("currentUrl", v)} error={errors.currentUrl} />
              <TextField id="seoVisibleServices" label="Welche Leistungen / Produkte sollen besonders sichtbar werden?" value={val("seoVisibleServices")} onChange={(v) => set("seoVisibleServices", v)} />
              <ChoiceGroup label="Was möchten Sie mit SEO erreichen?" options={SEO_GOALS} values={list("seoGoals")} onToggle={(v) => toggle("seoGoals", v)} />
              <ChoiceGroup label="Welche Regionen möchten Sie erreichen?" options={REGIONS} values={list("regions")} onToggle={(v) => toggle("regions", v)} />
              <AreaField id="targetCustomers" label="Wer sind Ihre wichtigsten Zielgruppen?" rows={3} value={val("targetCustomers")} onChange={(v) => set("targetCustomers", v)} />
              <AreaField id="competitors" label="Wer sind Ihre wichtigsten Wettbewerber?" rows={3} value={val("competitors")} onChange={(v) => set("competitors", v)} />
              <AreaField id="keywords" label="Welche Keywords möchten Sie aktuell ranken?" rows={3} value={val("keywords")} onChange={(v) => set("keywords", v)} />
              <AreaField id="seoIssues" label="Was funktioniert auf Ihrer Website derzeit nicht so gut?" rows={3} value={val("seoIssues")} onChange={(v) => set("seoIssues", v)} />
            </div>
          </div>
        );

      case "general":
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl mb-3">Erzählen Sie mir kurz von Ihrem Vorhaben</h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Ein paar Sätze genügen — den Rest klären wir gemeinsam im Gespräch.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <AreaField id="businessDescription" label="Was macht Ihr Unternehmen?" rows={4} value={val("businessDescription")} onChange={(v) => set("businessDescription", v)} />
              <ChoiceGroup label="Was möchten Sie erreichen?" options={GOALS} values={list("goals")} onToggle={(v) => toggle("goals", v)} />
              <AreaField id="seoIssues" label="Was funktioniert aktuell nicht so gut?" rows={3} value={val("seoIssues")} onChange={(v) => set("seoIssues", v)} />
            </div>
          </div>
        );

      case "project":
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl mb-3">Budget, Zeitrahmen & Abschluss</h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Zum Schluss: ein realistischer Rahmen — und alles, was Sie mir noch mitgeben möchten.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ChoiceGroup
                label="Welches Budget haben Sie ungefähr für das Projekt eingeplant?"
                options={BUDGETS}
                values={list("budget")}
                onToggle={(v) => toggle("budget", v, false)}
                multi={false}
              />
              <p className="md:col-span-2 -mt-2 text-xs text-muted-foreground leading-relaxed">
                Die Angabe hilft mir, den Umfang des Projekts realistisch einzuschätzen. Sie ist keine verbindliche
                Preiszusage.
              </p>
              <ChoiceGroup
                label="Wann möchten Sie mit dem Projekt starten?"
                options={TIMELINES}
                values={list("timeline")}
                onToggle={(v) => toggle("timeline", v, false)}
                multi={false}
              />
              <div>
                <FieldLabel htmlFor="deadline">Gibt es einen festen Termin oder eine Deadline?</FieldLabel>
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
                label="Was sollte ich noch über Ihr Projekt wissen?"
                rows={5}
                placeholder="Erzählen Sie mir gerne alles, was Ihnen wichtig ist…"
                value={val("additional")}
                onChange={(v) => set("additional", v)}
              />

              {/* Files */}
              <div className="md:col-span-2">
                <FieldLabel>Dateien hochladen – optional</FieldLabel>
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
                  <span className="block text-sm">Logo, Brand Guidelines, Fotos oder Dokumente hinzufügen</span>
                  <span className="block text-xs text-muted-foreground mt-1">
                    JPG, PNG, WEBP, PDF, DOC, DOCX · max. {MAX_FILE_MB} MB pro Datei · bis zu {MAX_FILES} Dateien
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
                          aria-label={`${f.name} entfernen`}
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
                    Ich habe die{" "}
                    <Link to="/datenschutz" className="text-rose underline-offset-4 underline">
                      Datenschutzerklärung
                    </Link>{" "}
                    gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu.
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
                  <p className="font-display text-lg mb-2">Leider konnte Ihre Anfrage gerade nicht gesendet werden.</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Bitte versuchen Sie es erneut oder schreiben Sie mir direkt per E-Mail.
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
        path="/briefing"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Projekt-Briefing",
          description: seoDesc,
          url: "https://mariannakuzmenko.de/briefing",
        }}
      />

      {/* HERO */}
      <section ref={topRef} className="container-editorial pt-14 md:pt-20 pb-8 md:pb-12 scroll-mt-24">
        <p className="eyebrow mb-5">— Projekt-Briefing —</p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="display-lg mb-6">
              Erzählen Sie mir von <span className="italic text-rose">Ihrem Projekt.</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Je mehr ich über Ihr Unternehmen, Ihre Ziele und Ihre Wünsche weiß, desto besser kann ich Ihr Projekt
              einschätzen und Ihnen ein passendes Konzept vorschlagen.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap items-center gap-3 lg:justify-end">
            <span className="chip">ca. 5–7 Minuten</span>
            <WhatsAppButton lang={lang} variant="nav" iconOnly />
          </div>
        </div>
      </section>

      {/* PROGRESS */}
      <section className="container-editorial pb-6">
        <ol className="hidden md:flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Fortschritt">
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
          aria-label="Projekt-Briefing Formular"
        >
          {renderStep()}

          <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center gap-3 justify-between">
            <button
              type="button"
              onClick={back}
              disabled={step === 0}
              className="btn-cta-outline disabled:opacity-40 disabled:pointer-events-none"
            >
              <ArrowLeft size={16} strokeWidth={1.8} /> Zurück
            </button>

            {isLast ? (
              <button type="submit" disabled={status === "sending"} className="btn-cta disabled:opacity-60">
                {status === "sending" ? (
                  <>
                    Wird gesendet… <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Projektanfrage senden <ArrowRight size={16} strokeWidth={1.8} />
                  </>
                )}
              </button>
            ) : (
              <button type="submit" className="btn-cta">
                Weiter <ArrowRight size={16} strokeWidth={1.8} />
              </button>
            )}
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default Briefing;
