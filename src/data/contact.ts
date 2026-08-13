/** Single source of truth for all contact details across the site. */
export const CONTACT = {
  name: "Marianna Kuzmenko",
  status: "Freiberuflerin",
  email: "mari1992.kuzmenko@gmail.com",
  phoneDisplay: "+49 179 1111607",
  /** E.164 without spaces — used for tel: and WhatsApp links */
  phoneRaw: "+491791111607",
  whatsappNumber: "491791111607",
  street: "Lorenz-Hagen-Str. 21",
  zipCity: "90461 Nürnberg",
  country: "Deutschland",
} as const;

export const mailtoLink = (subject?: string) =>
  `mailto:${CONTACT.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

export const telLink = `tel:${CONTACT.phoneRaw}`;

/** Builds a proper WhatsApp deep link with an optional pre-filled message. */
export const whatsappLink = (message?: string) =>
  `https://wa.me/${CONTACT.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const WHATSAPP_DEFAULT_MESSAGE_DE =
  "Hallo Marianna, ich interessiere mich für eine Website und hätte gern ein kurzes Erstgespräch.";
export const WHATSAPP_DEFAULT_MESSAGE_EN =
  "Hi Marianna, I'm interested in a website and would love a short intro call.";
