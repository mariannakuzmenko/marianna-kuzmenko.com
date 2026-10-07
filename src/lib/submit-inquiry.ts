import { supabase } from "@/integrations/supabase/client";

export async function submitInquiry(body: {
  projectType: "website" | "website-seo" | "seo" | "unsure";
  answers: Record<string, unknown>;
  lang: "de" | "en";
  files?: { name: string; path: string; size: number }[];
}) {
  const { data, error } = await supabase.functions.invoke("send-briefing", { body });
  if (error || data?.ok !== true) throw new Error("Inquiry delivery failed");
}