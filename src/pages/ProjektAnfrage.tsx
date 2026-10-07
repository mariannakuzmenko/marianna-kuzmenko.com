import { useMemo, useState } from "react";
import { z } from "zod";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock,
  CircleDot,
  Send,
  Calculator,
  ShieldCheck,
  MailCheck,
  Calendar,
  FileText,
  Rocket,
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { useLang, pick, ROUTES } from "@/i18n/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { submitInquiry } from "@/lib/submit-inquiry";

type Step = {
  id: string;
  label: string;
};

const stepsDE: Step[] = [
  { id: "company", label: "Unternehmen" },
  { id: "project", label: "Projekt" },
  { id: "goals",   label: "Ziele" },
  { id: "scope",   label: "Umfang" },
  { id: "timing",  label: "Timing & Budget" },
  { id: "contact", label: "Kontakt" },
];
const stepsEN: Step[] = [
  { id: "company", label: "Company" },
  { id: "project", label: "Project" },
  { id: "goals",   label: "Goals" },
  { id: "scope",   label: "Scope" },
  { id: "timing",  label: "Timing & Budget" },
  { id: "contact", label: "Contact" },
];

const optionGrid =
  "grid grid-cols-1 sm:grid-cols-2 gap-3";

const ProjektAnfrage = () => {
  const { lang, path } = useLang();
  const { toast } = useToast();
  const steps = lang === "de" ? stepsDE : stepsEN;
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  const t = pick(
    lang,
    {
      seoTitle: "Projektanfrage — Marianna Kuzmenko · Webdesign & SEO",
      seoDesc:
        "Starte dein Projekt mit einer strukturierten Projektanfrage. In wenigen Minuten ausfüllen und ein individuelles Angebot mit Strategie-Call erhalten.",
      eyebrow: "Projektanfrage",
      h1A: "Dein Projekt",
      h1B: "beginnt hier.",
      lead:
        "Ein kurzer, strukturierter Brief — und du erhältst ein individuelles Angebot, einen ehrlichen Zeitplan und einen klaren nächsten Schritt. Kein Funnel, keine Verkaufsmaschine.",
      benefits: [
        { t: "Klares Angebot", d: "Du bekommst eine konkrete Empfehlung — keine generische Preisliste." },
        { t: "Ehrlicher Zeitplan", d: "Realistische Timeline statt unverbindlicher Versprechen." },
        { t: "Persönliche Antwort", d: "Innerhalb von 48 Stunden — direkt von mir, nicht aus einem Funnel." },
        { t: "DSGVO & Vertrauen", d: "Deine Daten werden vertraulich behandelt und nur zur Antwort genutzt." },
      ],
      estTitle: "Projekt-Schätzer",
      estLead:
        "Wähle die Eckdaten — ich zeige dir eine empfohlene Lösung, einen Zeitrahmen und eine Investitionsspanne. Endgültige Preise besprechen wir im Strategie-Call.",
      estTypeLabel: "Website-Typ",
      estTypes: ["Landing Page", "Business Website", "Portfolio", "Online-Shop", "Redesign"],
      estPagesLabel: "Seitenanzahl",
      estPages: ["1–3", "4–7", "8–15", "16+"],
      estSeoLabel: "SEO Umfang",
      estSeo: ["Kein SEO", "Basis", "Strategisch", "Premium"],
      estContentLabel: "Inhalte",
      estContent: ["Vorhanden", "Teilweise", "Komplett von mir"],
      estLangLabel: "Mehrsprachig",
      estLang: ["Nein", "2 Sprachen", "3+ Sprachen"],
      estResultEyebrow: "Empfohlene Richtung",
      estSolution: "Empfohlene Lösung",
      estTimeline: "Zeitrahmen",
      estInvest: "Investitionsspanne",
      estCta: "Detailliertes Angebot anfragen",
      estNote: "Endgültige Preise nach Strategie-Call.",
      stepEyebrow: "Schritt",
      next: "Weiter",
      back: "Zurück",
      submit: "Anfrage senden",
      whatNextEye: "So geht es weiter",
      whatNextA: "Was passiert",
      whatNextB: "nach der Anfrage?",
      whatNext: [
        { t: "Anfrage eingehen", d: "Du sendest dein Projektbrief — strukturiert und ohne Druck." },
        { t: "Projekt-Review", d: "Ich prüfe Anfrage, Ziele und Markt — in der Regel innerhalb von 48 Stunden." },
        { t: "Strategie-Call", d: "Ein kurzes Gespräch (30–45 Min) zu Zielen, Ablauf und Budget." },
        { t: "Individuelles Angebot", d: "Ein konkretes Angebot mit Leistungen, Zeitplan und Investition." },
        { t: "Projektstart", d: "Nach Freigabe: Kickoff, Briefing, Design — und Schritt für Schritt zum Launch." },
      ],
      thanksTitle: "Vielen Dank — deine Anfrage ist angekommen.",
      thanksDesc:
        "Ich melde mich persönlich innerhalb von 48 Stunden.",
      backHome: "Zurück zur Startseite",
      requiredErr: "Bitte fülle die erforderlichen Felder aus.",
      emailErr: "Bitte gib eine gültige E-Mail-Adresse an.",
      // Step content
      companyName: "Unternehmens­name",
      companyNamePh: "z. B. Studio Nord",
      siteUrl: "Bestehende Website (optional)",
      siteUrlPh: "https://…",
      projectType: "Projekt-Typ",
      projectTypes: ["Business Website", "Landing Page", "Portfolio", "Online-Shop", "Website-Redesign", "Andere"],
      mainGoal: "Hauptziel",
      mainGoals: ["Mehr Anfragen", "Mehr Umsatz", "Mehr Sichtbarkeit", "Mehr Buchungen", "Markenbekanntheit"],
      audience: "Zielgruppe",
      audiencePh: "Wen willst du erreichen?",
      offer: "Produkte / Leistungen",
      offerPh: "Was bietest du an?",
      references: "Beispiel-Websites (bis zu 3 URLs)",
      requiredPages: "Erforderliche Seiten",
      assets: "Vorhandene Assets",
      assetItems: ["Logo", "Texte", "Fotos", "Brand Guidelines"],
      addons: "Zusatzleistungen",
      addonItems: ["SEO", "Analytics", "Wartung", "Mehrsprachigkeit"],
      timeline: "Timeline",
      timelines: ["So schnell wie möglich", "1 Monat", "2–3 Monate", "Flexibel"],
      budget: "Budget",
      budgets: ["Unter 1.000 €", "1.000–3.000 €", "3.000–5.000 €", "5.000 € +"],
      notes: "Weitere Hinweise",
      notesPh: "Alles, was wichtig ist…",
      yourName: "Dein Name",
      yourEmail: "E-Mail",
      consent: "Mit dem Absenden stimme ich zu, dass meine Angaben zur Bearbeitung der Anfrage gespeichert werden.",
    },
    {
      seoTitle: "Project Inquiry — Marianna Kuzmenko · Web Design & SEO",
      seoDesc:
        "Start your project with a structured brief. Receive a tailored proposal, an honest timeline and a clear next step within 48 hours.",
      eyebrow: "Project Inquiry",
      h1A: "Your project",
      h1B: "starts here.",
      lead:
        "A short, structured brief — and you’ll receive a tailored proposal, an honest timeline and a clear next step. No funnel, no sales machine.",
      benefits: [
        { t: "Clear proposal", d: "A concrete recommendation — not a generic price list." },
        { t: "Honest timeline", d: "A realistic plan instead of vague promises." },
        { t: "Personal reply", d: "Within 48 hours — directly from me, not from a funnel." },
        { t: "GDPR & trust", d: "Your data is treated confidentially and used only to respond." },
      ],
      estTitle: "Project estimator",
      estLead:
        "Pick the basics — I’ll show a recommended direction, a timeframe and an investment range. Final pricing is discussed in the strategy call.",
      estTypeLabel: "Website type",
      estTypes: ["Landing Page", "Business Website", "Portfolio", "Online Shop", "Redesign"],
      estPagesLabel: "Number of pages",
      estPages: ["1–3", "4–7", "8–15", "16+"],
      estSeoLabel: "SEO scope",
      estSeo: ["No SEO", "Basic", "Strategic", "Premium"],
      estContentLabel: "Content",
      estContent: ["Provided", "Partial", "Created by me"],
      estLangLabel: "Multilingual",
      estLang: ["No", "2 languages", "3+ languages"],
      estResultEyebrow: "Recommended direction",
      estSolution: "Recommended Solution",
      estTimeline: "Estimated Timeline",
      estInvest: "Investment Range",
      estCta: "Request detailed proposal",
      estNote: "Final pricing after the strategy call.",
      stepEyebrow: "Step",
      next: "Next",
      back: "Back",
      submit: "Send inquiry",
      whatNextEye: "What happens next",
      whatNextA: "What happens",
      whatNextB: "after your inquiry?",
      whatNext: [
        { t: "Submit inquiry", d: "You send your brief — structured and without pressure." },
        { t: "Project review", d: "I review your brief, goals and market — usually within 48 hours." },
        { t: "Strategy call", d: "A short conversation (30–45 min) on goals, process and budget." },
        { t: "Custom proposal", d: "A clear offer with services, timeline and investment." },
        { t: "Project launch", d: "After approval: kickoff, briefing, design — and step by step to launch." },
      ],
      thanksTitle: "Thank you — your inquiry has been received.",
      thanksDesc:
        "I’ll get back to you personally within 48 hours.",
      backHome: "Back to homepage",
      requiredErr: "Please complete the required fields.",
      emailErr: "Please enter a valid email address.",
      companyName: "Company name",
      companyNamePh: "e.g. Studio Nord",
      siteUrl: "Existing website (optional)",
      siteUrlPh: "https://…",
      projectType: "Project type",
      projectTypes: ["Business Website", "Landing Page", "Portfolio", "Online Shop", "Website Redesign", "Other"],
      mainGoal: "Main goal",
      mainGoals: ["More Leads", "More Sales", "More Visibility", "More Bookings", "Brand Awareness"],
      audience: "Target audience",
      audiencePh: "Who do you want to reach?",
      offer: "Products / Services",
      offerPh: "What do you offer?",
      references: "Example websites (up to 3 URLs)",
      requiredPages: "Required pages",
      assets: "Existing assets",
      assetItems: ["Logo", "Text content", "Photos", "Brand Guidelines"],
      addons: "Additional services",
      addonItems: ["SEO", "Analytics", "Maintenance", "Multilingual"],
      timeline: "Timeline",
      timelines: ["ASAP", "1 month", "2–3 months", "Flexible"],
      budget: "Budget",
      budgets: ["Under €1,000", "€1,000–3,000", "€3,000–5,000", "€5,000+"],
      notes: "Additional notes",
      notesPh: "Anything important…",
      yourName: "Your name",
      yourEmail: "Email",
      consent: "By submitting, I agree my data may be stored to process this inquiry.",
    }
  );

  // ===== Multi-step form state =====
  const [form, setForm] = useState({
    companyName: "",
    siteUrl: "",
    projectType: "",
    mainGoal: "",
    audience: "",
    offer: "",
    references: ["", "", ""] as string[],
    requiredPages: "",
    assets: [] as string[],
    addons: [] as string[],
    timeline: "",
    budget: "",
    notes: "",
    name: "",
    email: "",
  });

  const update = (k: keyof typeof form, v: any) =>
    setForm((f) => ({ ...f, [k]: v }));

  const toggleArr = (k: "assets" | "addons", v: string) =>
    setForm((f) => ({
      ...f,
      [k]: f[k].includes(v) ? f[k].filter((x) => x !== v) : [...f[k], v],
    }));

  const stepValid = useMemo(() => {
    switch (step) {
      case 0: return form.companyName.trim().length > 1;
      case 1: return form.projectType.length > 0;
      case 2: return form.mainGoal.length > 0;
      case 3: return true;
      case 4: return form.timeline.length > 0 && form.budget.length > 0;
      case 5: return form.name.trim().length > 1 && /\S+@\S+\.\S+/.test(form.email);
      default: return true;
    }
  }, [step, form]);

  const onSubmit = async () => {
    if (sending || done) return;
    const schema = z.object({
      name: z.string().trim().min(2),
      email: z.string().trim().email(),
      companyName: z.string().trim().min(2),
    });
    const ok = schema.safeParse(form);
    if (!ok.success) {
      toast({ title: t.requiredErr, variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      await submitInquiry({ projectType: form.addons.includes("SEO") ? "website-seo" : "website", lang, answers: {
        ...form, company: form.companyName, website: form.siteUrl, goals: form.mainGoal,
        targetCustomers: form.audience, highlights: form.offer, referenceUrls: form.references,
        pages: form.requiredPages, materials: form.assets, additional: form.notes,
      } });
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      toast({ title: pick(lang, "Die Anfrage konnte nicht gesendet werden.", "Your inquiry could not be sent."), description: pick(lang, "Bitte erneut versuchen oder direkt per WhatsApp oder E-Mail schreiben.", "Please try again or contact me via WhatsApp or email."), variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  // ===== Estimator state =====
  const [est, setEst] = useState({
    type: t.estTypes[1],
    pages: t.estPages[1],
    seo: t.estSeo[1],
    content: t.estContent[0],
    lang: t.estLang[0],
  });

  const estimate = useMemo(() => {
    // crude scoring
    let weeks = 3;
    let low = 1500;
    let high = 3000;
    const idx = (arr: string[], v: string) => Math.max(arr.indexOf(v), 0);

    weeks += idx(t.estTypes, est.type);
    weeks += idx(t.estPages, est.pages);
    weeks += idx(t.estSeo, est.seo);
    weeks += idx(t.estContent, est.content);
    weeks += idx(t.estLang, est.lang);

    const factor = 1
      + idx(t.estTypes, est.type) * 0.35
      + idx(t.estPages, est.pages) * 0.45
      + idx(t.estSeo, est.seo) * 0.30
      + idx(t.estContent, est.content) * 0.25
      + idx(t.estLang, est.lang) * 0.25;

    low = Math.round((1200 * factor) / 100) * 100;
    high = Math.round((1200 * factor * 1.7) / 100) * 100;

    const solution =
      `${est.type}` +
      (est.seo !== t.estSeo[0] ? ` + ${est.seo} SEO` : "") +
      (est.lang !== t.estLang[0] ? ` · ${est.lang}` : "");

    const wmin = Math.max(2, Math.round(weeks * 0.7));
    const wmax = Math.max(wmin + 2, Math.round(weeks * 1.1));

    return {
      solution,
      timeline: pick(lang, `${wmin}–${wmax} Wochen`, `${wmin}–${wmax} weeks`),
      range: `€${low.toLocaleString("de-DE")}–€${high.toLocaleString("de-DE")}`,
    };
  }, [est, t, lang]);

  // ===================== Render =====================

  if (done) {
    return (
      <Layout>
        <Seo
          title={t.seoTitle}
          description={t.seoDesc}
          path={path("inquiry")}
          pathDe={ROUTES.inquiry.de}
          pathEn={ROUTES.inquiry.en}
        />
        <section className="container-editorial py-20 md:py-20 md:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6"
              style={{ background: "hsl(var(--rose-soft))" }}>
              <MailCheck size={26} className="text-rose" strokeWidth={1.6} />
            </div>
            <h1 className="display-md mb-4">{t.thanksTitle}</h1>
            <p className="text-muted-foreground leading-relaxed mb-8">{t.thanksDesc}</p>
            <Link to={path("home")} className="btn-cta-outline">
              {t.backHome} <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo
        title={t.seoTitle}
        description={t.seoDesc}
        path={path("inquiry")}
        pathDe={ROUTES.inquiry.de}
        pathEn={ROUTES.inquiry.en}
      />

      {/* HERO */}
      <section className="container-editorial pt-12 md:pt-20 pb-10 md:pb-14 relative">
        <p className="eyebrow mb-6">{t.eyebrow}</p>
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="display-xl">
              {t.h1A}<br />
              <span className="italic text-rose">{t.h1B}</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">{t.lead}</p>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="grid grid-cols-2 gap-3">
              {t.benefits.map((b, i) => (
                <div key={i} className="panel-white !p-5">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center mb-3"
                    style={{ background: "hsl(var(--rose-soft))" }}>
                    {[CircleDot, Clock, MailCheck, ShieldCheck][i % 4] &&
                      (i === 0 ? <CircleDot size={16} className="text-rose" strokeWidth={1.6}/>
                      : i === 1 ? <Clock size={16} className="text-rose" strokeWidth={1.6}/>
                      : i === 2 ? <MailCheck size={16} className="text-rose" strokeWidth={1.6}/>
                      : <ShieldCheck size={16} className="text-rose" strokeWidth={1.6}/>)
                    }
                  </div>
                  <p className="font-display text-sm mb-1">{b.t}</p>
                  <p className="text-[12px] text-muted-foreground leading-relaxed">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MULTI-STEP FORM */}
      <section className="container-editorial py-12 md:py-16">
        <div className="grid grid-cols-12 gap-8">
          {/* Stepper */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-4">{t.stepEyebrow} {step + 1} / {steps.length}</p>
              <ol className="space-y-2">
                {steps.map((s, i) => {
                  const active = i === step;
                  const completed = i < step;
                  return (
                    <li key={s.id}>
                      <button
                        type="button"
                        onClick={() => i <= step && setStep(i)}
                        className={`group w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-300 ${
                          active ? "bg-white shadow-[var(--shadow-card)] border border-border"
                          : completed ? "bg-rose-soft/40"
                          : "bg-transparent hover:bg-white/60"
                        }`}
                      >
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono shrink-0 ${
                          completed ? "bg-rose text-white" : active ? "bg-ink text-white" : "bg-secondary text-foreground/70"
                        }`}
                          style={{
                            background: completed ? "hsl(var(--rose))" : active ? "hsl(var(--ink))" : undefined,
                            color: completed || active ? "white" : undefined,
                          }}
                        >
                          {completed ? <Check size={14} strokeWidth={2.2} /> : i + 1}
                        </span>
                        <span className={`text-sm ${active ? "font-medium" : "text-muted-foreground"}`}>{s.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>

              {/* Progress bar */}
              <div className="mt-6 h-1 rounded-full bg-muted overflow-hidden">
                <div className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${((step + 1) / steps.length) * 100}%`,
                    background: "linear-gradient(90deg, hsl(var(--rose)), hsl(var(--rose-hover)))",
                  }} />
              </div>
            </div>
          </aside>

          {/* Form panel */}
          <div className="col-span-12 lg:col-span-9">
            <div className="panel-white">
              {step === 0 && (
                <FormStep title={steps[0].label}>
                  <Field label={t.companyName} required>
                    <input className="input-soft" value={form.companyName}
                      onChange={(e) => update("companyName", e.target.value)}
                      placeholder={t.companyNamePh} maxLength={120} />
                  </Field>
                  <Field label={t.siteUrl}>
                    <input className="input-soft" value={form.siteUrl}
                      onChange={(e) => update("siteUrl", e.target.value)}
                      placeholder={t.siteUrlPh} maxLength={200} />
                  </Field>
                </FormStep>
              )}

              {step === 1 && (
                <FormStep title={steps[1].label}>
                  <Field label={t.projectType} required>
                    <div className={optionGrid}>
                      {t.projectTypes.map((pt) => (
                        <OptionPill key={pt} active={form.projectType === pt} onClick={() => update("projectType", pt)}>{pt}</OptionPill>
                      ))}
                    </div>
                  </Field>
                  <Field label={t.references}>
                    <div className="space-y-2">
                      {[0, 1, 2].map((i) => (
                        <input key={i} className="input-soft" placeholder={`https://…`}
                          value={form.references[i]}
                          onChange={(e) => {
                            const r = [...form.references]; r[i] = e.target.value; update("references", r);
                          }}
                        />
                      ))}
                    </div>
                  </Field>
                </FormStep>
              )}

              {step === 2 && (
                <FormStep title={steps[2].label}>
                  <Field label={t.mainGoal} required>
                    <div className={optionGrid}>
                      {t.mainGoals.map((g) => (
                        <OptionPill key={g} active={form.mainGoal === g} onClick={() => update("mainGoal", g)}>{g}</OptionPill>
                      ))}
                    </div>
                  </Field>
                  <Field label={t.audience}>
                    <textarea rows={3} className="input-soft resize-none" maxLength={500}
                      value={form.audience} onChange={(e) => update("audience", e.target.value)}
                      placeholder={t.audiencePh}/>
                  </Field>
                  <Field label={t.offer}>
                    <textarea rows={3} className="input-soft resize-none" maxLength={500}
                      value={form.offer} onChange={(e) => update("offer", e.target.value)}
                      placeholder={t.offerPh}/>
                  </Field>
                </FormStep>
              )}

              {step === 3 && (
                <FormStep title={steps[3].label}>
                  <Field label={t.requiredPages}>
                    <textarea rows={3} className="input-soft resize-none" maxLength={500}
                      value={form.requiredPages} onChange={(e) => update("requiredPages", e.target.value)}
                      placeholder={pick(lang, "z. B. Start, Über mich, Leistungen, Kontakt", "e.g. Home, About, Services, Contact")}/>
                  </Field>
                  <Field label={t.assets}>
                    <div className={optionGrid}>
                      {t.assetItems.map((a) => (
                        <OptionPill key={a} active={form.assets.includes(a)} onClick={() => toggleArr("assets", a)}>{a}</OptionPill>
                      ))}
                    </div>
                  </Field>
                  <Field label={t.addons}>
                    <div className={optionGrid}>
                      {t.addonItems.map((a) => (
                        <OptionPill key={a} active={form.addons.includes(a)} onClick={() => toggleArr("addons", a)}>{a}</OptionPill>
                      ))}
                    </div>
                  </Field>
                </FormStep>
              )}

              {step === 4 && (
                <FormStep title={steps[4].label}>
                  <Field label={t.timeline} required>
                    <div className={optionGrid}>
                      {t.timelines.map((x) => (
                        <OptionPill key={x} active={form.timeline === x} onClick={() => update("timeline", x)}>{x}</OptionPill>
                      ))}
                    </div>
                  </Field>
                  <Field label={t.budget} required>
                    <div className={optionGrid}>
                      {t.budgets.map((x) => (
                        <OptionPill key={x} active={form.budget === x} onClick={() => update("budget", x)}>{x}</OptionPill>
                      ))}
                    </div>
                  </Field>
                  <Field label={t.notes}>
                    <textarea rows={4} className="input-soft resize-none" maxLength={1500}
                      value={form.notes} onChange={(e) => update("notes", e.target.value)}
                      placeholder={t.notesPh}/>
                  </Field>
                </FormStep>
              )}

              {step === 5 && (
                <FormStep title={steps[5].label}>
                  <Field label={t.yourName} required>
                    <input className="input-soft" value={form.name}
                      onChange={(e) => update("name", e.target.value)} maxLength={120}/>
                  </Field>
                  <Field label={t.yourEmail} required>
                    <input type="email" className="input-soft" value={form.email}
                      onChange={(e) => update("email", e.target.value)} maxLength={200}/>
                  </Field>
                  <p className="text-xs text-muted-foreground/80">{t.consent}</p>
                </FormStep>
              )}

              {/* Step navigation */}
              <div className="flex flex-wrap items-center justify-between gap-3 mt-8 pt-6 border-t border-border">
                <button
                  type="button"
                  disabled={step === 0}
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium bg-white border border-border hover:bg-secondary transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ArrowLeft size={16}/> {t.back}
                </button>
                {step < steps.length - 1 ? (
                  <button
                    type="button"
                    disabled={!stepValid}
                    onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
                    className="btn-cta disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {t.next} <ArrowRight size={16}/>
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={!stepValid || sending}
                    onClick={onSubmit}
                    className="btn-cta disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {sending ? pick(lang, "Wird gesendet…", "Sending…") : t.submit} <Send size={16}/>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESTIMATOR */}
      <section className="container-editorial py-16 md:py-24">
        <div className="cta-band">
          <div className="grid grid-cols-12 gap-8 relative z-10">
            <div className="col-span-12 lg:col-span-5">
              <p className="eyebrow mb-4 inline-flex items-center gap-2">
                <Calculator size={14}/> {t.estTitle}
              </p>
              <h2 className="display-md mb-5">
                {pick(lang, "Verschaff dir eine ", "Get a ")}
                <span className="italic text-rose">{pick(lang, "klare Richtung.", "clear direction.")}</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">{t.estLead}</p>
            </div>

            <div className="col-span-12 lg:col-span-7 space-y-5">
              <EstRow label={t.estTypeLabel} options={t.estTypes} value={est.type} onChange={(v)=>setEst(s=>({...s,type:v}))} />
              <EstRow label={t.estPagesLabel} options={t.estPages} value={est.pages} onChange={(v)=>setEst(s=>({...s,pages:v}))} />
              <EstRow label={t.estSeoLabel} options={t.estSeo} value={est.seo} onChange={(v)=>setEst(s=>({...s,seo:v}))} />
              <EstRow label={t.estContentLabel} options={t.estContent} value={est.content} onChange={(v)=>setEst(s=>({...s,content:v}))} />
              <EstRow label={t.estLangLabel} options={t.estLang} value={est.lang} onChange={(v)=>setEst(s=>({...s,lang:v}))} />

              <div className="rounded-3xl bg-white border border-border p-6 md:p-8 mt-2">
                <p className="eyebrow mb-4">{t.estResultEyebrow}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <ResultBlock label={t.estSolution} value={estimate.solution} />
                  <ResultBlock label={t.estTimeline} value={estimate.timeline} />
                  <ResultBlock label={t.estInvest} value={estimate.range} />
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs text-muted-foreground">{t.estNote}</p>
                  <button
                    type="button"
                    onClick={() => {
                      setStep(0);
                      document.querySelector('section.container-editorial:nth-of-type(2)')?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn-cta-outline"
                  >
                    {t.estCta} <ArrowUpRight size={16}/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="container-editorial py-16 md:py-24">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow mb-4">{t.whatNextEye}</p>
          <h2 className="display-lg">
            {t.whatNextA} <span className="italic text-rose">{t.whatNextB}</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {t.whatNext.map((w, i) => {
            const Icon = [Send, FileText, Calendar, ShieldCheck, Rocket][i];
            return (
              <div key={i} className="panel-white !p-6 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">0{i + 1}</span>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "hsl(var(--rose-soft))" }}>
                    <Icon size={16} className="text-rose" strokeWidth={1.6}/>
                  </div>
                </div>
                <h3 className="font-display text-lg mb-2">{w.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.d}</p>
                {i < t.whatNext.length - 1 && (
                  <div className="hidden md:flex absolute" aria-hidden />
                )}
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

// ============= Helper components =============

const FormStep = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-6">
    <h2 className="font-display text-2xl md:text-3xl">{title}</h2>
    <div className="space-y-6">{children}</div>
  </div>
);

const Field = ({
  label, required, children,
}: { label: string; required?: boolean; children: React.ReactNode }) => (
  <div>
    <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
      {label}{required && <span className="text-rose ml-1">*</span>}
    </label>
    {children}
  </div>
);

const OptionPill = ({
  active, onClick, children,
}: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
  <button
    type="button"
    onClick={onClick}
    className={`group relative text-left rounded-2xl border px-4 py-3 text-sm transition-all duration-300 ${
      active
        ? "border-rose bg-rose-soft text-foreground shadow-[0_8px_22px_-12px_hsl(var(--rose)/0.55)]"
        : "border-border bg-white hover:border-rose/50 hover:bg-rose-soft/40"
    }`}
  >
    <span className="flex items-center justify-between gap-2">
      <span>{children}</span>
      {active ? <Check size={14} className="text-rose shrink-0"/> : <ChevronRight size={14} className="opacity-30 group-hover:opacity-60 shrink-0"/>}
    </span>
  </button>
);

const EstRow = ({
  label, options, value, onChange,
}: { label: string; options: string[]; value: string; onChange: (v: string) => void }) => (
  <div className="rounded-2xl bg-white/80 backdrop-blur border border-border p-4 md:p-5">
    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">{label}</p>
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          className={`rounded-full px-3.5 py-1.5 text-xs md:text-sm border transition-all ${
            value === o
              ? "bg-ink text-white border-ink"
              : "bg-white text-foreground border-border hover:border-foreground/40"
          }`}
          style={value === o ? { background: "hsl(var(--ink))", borderColor: "hsl(var(--ink))" } : {}}
        >
          {o}
        </button>
      ))}
    </div>
  </div>
);

const ResultBlock = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-2xl border border-border bg-white/70 p-4">
    <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-1.5">{label}</p>
    <p className="font-display text-lg md:text-xl leading-tight">{value}</p>
  </div>
);

export default ProjektAnfrage;
