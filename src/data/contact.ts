/** Single source of truth for all contact details across the site. */
export const CONTACT = {
  name: "Marianna Kuzmenko",
  status: "Freiberuflerin",
  email: "mari1992.kuzmenko@gmail.com",
  whatsappNumber: "491791111607",
  street: "Lorenz-Hagen-Str. 21",
  zipCity: "90461 Nürnberg",
  country: "Deutschland",
} as const;

export const mailtoLink = (subject?: string) =>
  `mailto:${CONTACT.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

/** Direct chat URL: never display the account number as a contact option. */
export const whatsappLink = (_message?: string) =>
  `https://wa.me/${CONTACT.whatsappNumber}`;

export const WHATSAPP_DEFAULT_MESSAGE_DE =
  "Hallo Marianna, ich interessiere mich für eine Website und hätte gern ein kurzes Erstgespräch.";
export const WHATSAPP_DEFAULT_MESSAGE_EN =
  "Hi Marianna, I'm interested in a website and would love a short intro call.";
