import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";

const RECIPIENT = "mari1992.kuzmenko@gmail.com";


type FileRef = { name: string; path: string; size?: number };

const esc = (v: unknown) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const LABELS: Record<string, string> = {
  projectType: "Projekttyp",
  name: "Name",
  email: "E-Mail",
  phone: "Telefon",
  company: "Unternehmen",
  website: "Website",
  location: "Standort",
  preferredContact: "Bevorzugter Kontaktweg",
  businessDescription: "Was macht das Unternehmen?",
  goals: "Ziele der Website",
  highlights: "Leistungen / Produkte hervorheben",
  pages: "Benötigte Seiten",
  features: "Benötigte Funktionen",
  styles: "Stilrichtung",
  colorsWanted: "Gewünschte Farben",
  colorsAvoid: "Zu vermeidende Farben",
  referenceUrls: "Referenz-Websites",
  referenceLikes: "Was gefällt an diesen Websites?",
  materials: "Vorhandene Materialien",
  copySupport: "Unterstützung bei Texten",
  seoCopy: "Professionelle SEO-Texte",
  regions: "Zielregionen",
  seoVisibleServices: "Bei Google sichtbare Leistungen",
  targetCustomers: "Wichtigste Kunden / Zielgruppen",
  competitors: "Wettbewerber",
  keywords: "Bekannte Suchbegriffe / Keywords",
  googleBusiness: "Google Unternehmensprofil",
  googleAnalytics: "Google Analytics",
  searchConsole: "Google Search Console",
  currentUrl: "URL der aktuellen Website",
  seoGoals: "SEO-Ziele",
  seoIssues: "Was funktioniert derzeit nicht gut?",
  budget: "Budget",
  timeline: "Startzeitpunkt",
  deadline: "Deadline",
  additional: "Weitere Informationen",
};

const PROJECT_TYPE_LABELS: Record<string, string> = {
  website: "Neue Website",
  "website-seo": "Website + SEO",
  seo: "SEO",
  unsure: "Ich bin mir noch nicht sicher",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const body = await req.json();
    const answers = (body?.answers ?? {}) as Record<string, unknown>;
    const files = (Array.isArray(body?.files) ? body.files : []) as FileRef[];
    const projectType = String(body?.projectType ?? "");
    const lang = body?.lang === "en" ? "en" : "de";
    const name = String(answers.name ?? "").trim();
    const email = String(answers.email ?? "").trim();
    const company = String(answers.company ?? "").trim();

    if (!PROJECT_TYPE_LABELS[projectType] || name.length < 1 || name.length > 120) {
      return new Response(JSON.stringify({ error: "invalid_input" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      return new Response(JSON.stringify({ error: "invalid_email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: row, error: dbError } = await supabase
      .from("briefings")
      .insert({
        project_type: projectType,
        name,
        email,
        phone: String(answers.phone ?? "") || null,
        company: company || null,
        website: String(answers.website ?? "") || null,
        location: String(answers.location ?? "") || null,
        payload: answers,
        files,
      })
      .select("id")
      .single();

    if (dbError) console.error("briefing insert failed", dbError.message);

    // Signed links for uploaded files (7 days)
    const fileLinks: { name: string; url: string | null }[] = [];
    for (const f of files.slice(0, 20)) {
      if (typeof f?.path !== "string") continue;
      const { data } = await supabase.storage
        .from("briefing-uploads")
        .createSignedUrl(f.path, 60 * 60 * 24 * 7);
      fileLinks.push({ name: String(f.name ?? f.path), url: data?.signedUrl ?? null });
    }

    const rows = Object.keys(LABELS)
      .filter((k) => k !== "projectType")
      .map((key) => {
        const raw = answers[key];
        const value = Array.isArray(raw) ? raw.join(", ") : raw;
        if (value === undefined || value === null || String(value).trim() === "") return "";
        return `<tr><td style="padding:10px 14px;border-bottom:1px solid #eee;color:#7a7480;font-size:12px;text-transform:uppercase;letter-spacing:.08em;width:38%;vertical-align:top">${esc(
          LABELS[key],
        )}</td><td style="padding:10px 14px;border-bottom:1px solid #eee;color:#24242A;font-size:14px;white-space:pre-wrap">${esc(
          value,
        )}</td></tr>`;
      })
      .join("");

    const filesHtml = fileLinks.length
      ? `<h3 style="font-size:14px;color:#24242A;margin:24px 0 8px">Dateien</h3><ul style="padding-left:18px;color:#24242A;font-size:14px">${fileLinks
          .map(
            (f) =>
              `<li>${
                f.url
                  ? `<a href="${esc(f.url)}" style="color:#C8758A">${esc(f.name)}</a> (Link 7 Tage gültig)`
                  : esc(f.name)
              }</li>`,
          )
          .join("")}</ul>`
      : "";

    const subject = `${lang === "en" ? "New project enquiry (EN)" : "Neue Projektanfrage"} – ${PROJECT_TYPE_LABELS[projectType]} – ${company || name}`;
    const html = `<div style="font-family:Helvetica,Arial,sans-serif;background:#ffffff;padding:24px">
      <p style="font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#C8758A;margin:0 0 6px">Projekt-Briefing</p>
      <h2 style="margin:0 0 4px;color:#24242A;font-size:22px">${esc(PROJECT_TYPE_LABELS[projectType])}</h2>
      <p style="margin:0 0 20px;color:#7a7480;font-size:13px">${lang === "en" ? "🇬🇧 English submission · " : ""}${esc(company || "—")} · ${esc(name)} · ${esc(email)}</p>
      <table style="width:100%;border-collapse:collapse;border:1px solid #eee">${rows}</table>
      ${filesHtml}
      <p style="margin-top:24px;color:#a09aa6;font-size:11px">Gesendet über mariannakuzmenko.de${
        row?.id ? ` · Ref ${esc(row.id)}` : ""
      }</p>
    </div>`;

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: "email_not_configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Projekt-Briefing <onboarding@resend.dev>",
        to: [RECIPIENT],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const details = await res.text();
      console.error(`Resend failed [${res.status}]: ${details}`);
      return new Response(JSON.stringify({ error: "email_failed", status: res.status, details }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (row?.id) await supabase.from("briefings").update({ email_sent: true }).eq("id", row.id);

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("send-briefing error", e);
    return new Response(JSON.stringify({ error: "unexpected" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
