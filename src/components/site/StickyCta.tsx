import { useEffect, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useLang, pick } from "@/i18n/LanguageContext";

export const StickyCta = () => {
  const { lang } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = pick(
    lang,
    { desk: "Projekt starten", primary: "Projekt starten", secondary: "Beratung buchen" },
    { desk: "Start a Project", primary: "Start a Project", secondary: "Book a Call" },
  );

  return (
    <>
      <a
        href="#kontakt"
        aria-label={t.desk}
        className="sticky-cta-desk"
        style={{
          opacity: show ? 1 : 0,
          pointerEvents: show ? "auto" : "none",
          transform: show ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <span className="dot"><Sparkles size={14} className="text-white" strokeWidth={1.8} /></span>
        {t.desk}
        <ArrowUpRight size={14} />
      </a>

      <div className="mobile-cta-bar" role="navigation" aria-label="Quick actions">
        <a href="#kontakt" className="primary">{t.primary} <ArrowUpRight size={14} /></a>
        <a href="mailto:hello@mariannakuzmenko.de" className="secondary">{t.secondary}</a>
      </div>
    </>
  );
};
