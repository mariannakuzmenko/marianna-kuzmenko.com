import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CircleDot } from "lucide-react";
import { useLang, pick } from "@/i18n/LanguageContext";

export const StickyCta = () => {
  const { lang, path } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = pick(
    lang,
    { desk: "Projekt starten", primary: "Projekt starten", secondary: "Schreib mir", avail: "Verfügbar für neue Projekte" },
    { desk: "Start a Project", primary: "Start a Project", secondary: "Email me", avail: "Available for new projects" },
  );

  const inquiry = path("inquiry");

  return (
    <>
      <Link
        to={inquiry}
        aria-label={t.desk}
        className="sticky-cta-desk"
        style={{
          opacity: show ? 1 : 0,
          pointerEvents: show ? "auto" : "none",
          transform: show ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <span className="dot"><CircleDot size={14} className="text-white" strokeWidth={1.8} /></span>
        <span className="hidden lg:inline text-[11px] font-mono uppercase tracking-[0.18em] opacity-80 mr-1">
          ● {t.avail}
        </span>
        {t.desk}
        <ArrowUpRight size={14} />
      </Link>

      <div className="mobile-cta-bar" role="navigation" aria-label="Quick actions">
        <Link to={inquiry} className="primary">{t.primary} <ArrowUpRight size={14} /></Link>
        <a href="mailto:mari1992.kuzmenko@gmail.com" className="secondary">{t.secondary}</a>
      </div>
    </>
  );
};
