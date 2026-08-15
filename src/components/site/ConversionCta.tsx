import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "./WhatsAppButton";
import { useLang } from "@/i18n/LanguageContext";

interface ConversionCtaProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  align?: "left" | "center";
  /** Show the WhatsApp fast-contact button (default: true). */
  whatsapp?: boolean;
}

const CtaLink = ({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) =>
  href.startsWith("/") ? (
    <Link to={href} className={className}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  );

export const ConversionCta = ({
  eyebrow,
  title,
  lead,
  primary,
  secondary,
  align = "center",
  whatsapp = true,
}: ConversionCtaProps) => {
  const { lang } = useLang();
  const isCenter = align === "center";
  return (
    <section className="container-editorial py-8 md:py-12">
      <div className={`cta-band reveal ${isCenter ? "text-center" : ""}`}>
        <div className={`relative z-10 ${isCenter ? "max-w-3xl mx-auto" : "max-w-3xl"}`}>
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h3 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">{title}</h3>
          {lead && <p className={`mt-5 text-muted-foreground leading-relaxed ${isCenter ? "max-w-2xl mx-auto" : ""}`}>{lead}</p>}
          <div className={`mt-8 flex flex-wrap gap-3 md:gap-4 ${isCenter ? "justify-center" : ""}`}>
            <CtaLink href={primary.href} className="btn-cta">
              {primary.label} <ArrowUpRight size={18} strokeWidth={2} />
            </CtaLink>
            {whatsapp && <WhatsAppButton lang={lang} />}
            {secondary && (
              <CtaLink href={secondary.href} className="btn-cta-outline">
                {secondary.label} <ArrowUpRight size={16} strokeWidth={2} />
              </CtaLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
