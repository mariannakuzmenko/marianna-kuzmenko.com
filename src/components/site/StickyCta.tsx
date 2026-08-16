import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CircleDot } from "lucide-react";
import { useLang, pick } from "@/i18n/LanguageContext";
import { whatsappLink, WHATSAPP_DEFAULT_MESSAGE_DE, WHATSAPP_DEFAULT_MESSAGE_EN } from "@/data/contact";

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
    { desk: "Projekt starten", primary: "Projekt starten", secondary: "WhatsApp", avail: "Verfügbar für neue Projekte" },
    { desk: "Start a Project", primary: "Start a Project", secondary: "WhatsApp", avail: "Available for new projects" },
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
        <a
          href={whatsappLink(lang === "en" ? WHATSAPP_DEFAULT_MESSAGE_EN : WHATSAPP_DEFAULT_MESSAGE_DE)}
          target="_blank"
          rel="noopener noreferrer"
          className="secondary whatsapp"
          aria-label={lang === "en" ? "Chat on WhatsApp" : "WhatsApp schreiben"}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.86.5 3.6 1.36 5.1L2 22l5.2-1.52a9.8 9.8 0 0 0 4.84 1.26h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.48 2 12.04 2Zm4.49 11.79c-.25-.13-1.46-.72-1.68-.8-.23-.08-.39-.13-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.7-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.74 2.65 4.2 3.72.59.25 1.05.4 1.4.51.59.19 1.13.16 1.55.1.48-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
          </svg>
          {t.secondary}
        </a>
      </div>
    </>
  );
};
