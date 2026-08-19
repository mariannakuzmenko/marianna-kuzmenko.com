import {
  whatsappLink,
  WHATSAPP_DEFAULT_MESSAGE_DE,
  WHATSAPP_DEFAULT_MESSAGE_EN,
} from "@/data/contact";

interface WhatsAppButtonProps {
  lang?: "de" | "en";
  label?: string;
  message?: string;
  /** "solid" = WhatsApp green pill (default). "compact" = smaller green pill. */
  variant?: "solid" | "compact";
  /** Renders only the icon (round button) — for tight navigation space. */
  iconOnly?: boolean;
  className?: string;
}

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.86.5 3.6 1.36 5.1L2 22l5.2-1.52a9.8 9.8 0 0 0 4.84 1.26h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.48 2 12.04 2Zm0 17.9h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.09.9.83-3-.2-.31a8.13 8.13 0 0 1-1.25-4.33c0-4.5 3.67-8.16 8.18-8.16 2.19 0 4.24.85 5.78 2.4a8.1 8.1 0 0 1 2.4 5.77c0 4.5-3.67 8.16-8.18 8.16Zm4.49-6.11c-.25-.13-1.46-.72-1.68-.8-.23-.08-.39-.13-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.7-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.74 2.65 4.2 3.72.59.25 1.05.4 1.4.51.59.19 1.13.16 1.55.1.48-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
  </svg>
);

/** WhatsApp contact button — green (#25D366), white icon and label. */
export const WhatsAppButton = ({
  lang = "de",
  label,
  message,
  variant = "solid",
  iconOnly = false,
  className = "",
}: WhatsAppButtonProps) => {
  const text =
    label ?? (lang === "en" ? "Chat on WhatsApp" : "WhatsApp schreiben");
  const msg =
    message ?? (lang === "en" ? WHATSAPP_DEFAULT_MESSAGE_EN : WHATSAPP_DEFAULT_MESSAGE_DE);

  const compact = variant === "compact" ? "!px-5 !py-3 !text-sm" : "";
  const iconCls = iconOnly ? "!p-0 !w-10 !h-10 !rounded-full justify-center" : "";

  return (
    <a
      href={whatsappLink(msg)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${compact} ${iconCls} ${className}`}
      aria-label={text}
    >
      <WhatsAppIcon size={variant === "compact" ? 16 : 18} />
      {!iconOnly && text}
    </a>
  );
};

export default WhatsAppButton;
