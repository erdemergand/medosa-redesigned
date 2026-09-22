import { createServerFn } from "@tanstack/react-start";

import { FALLBACK_NEWS, type NewsItem } from "./news-data";

/**
 * Sektörel akış içeriği:
 * - Duyurular: veritabanındaki yayındaki kayıtlar (varsa) önce gelir.
 * - Haberler: AACC portal akışı (AACC_NEWS_URL) veya yedek içerik.
 */
export const getSectorNews = createServerFn({ method: "GET" }).handler(
  async (): Promise<NewsItem[]> => {
    const announcements = await readAnnouncements();
    const rest = await readPortalFeed();
    const merged = [...announcements, ...rest];
    return merged.length > 0 ? merged.slice(0, 24) : FALLBACK_NEWS;
  },
);

async function readAnnouncements(): Promise<NewsItem[]> {
  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data } = await supabaseAdmin
      .from("announcements")
      .select("id, title, summary, category, url, created_at")
      .eq("is_published", true)
      .order("created_at", { ascending: false })
      .limit(12);

    return (data ?? []).map((a) => ({
      id: a.id,
      title: a.title,
      summary: a.summary,
      category: a.category,
      kind: "duyuru" as const,
      date: a.created_at,
      ...(a.url ? { href: a.url } : {}),
    }));
  } catch {
    return [];
  }
}

async function readPortalFeed(): Promise<NewsItem[]> {
  const url = process.env["AACC_NEWS_URL"];
  if (!url) return FALLBACK_NEWS;

  try {
    const res = await fetch(url, { headers: { accept: "application/json" } });
    if (!res.ok) return FALLBACK_NEWS;
    const data = (await res.json()) as unknown;
    const list = Array.isArray(data) ? data : (data as { items?: unknown[] })?.items;
    if (!Array.isArray(list) || list.length === 0) return FALLBACK_NEWS;

    return list.slice(0, 12).map((raw, i) => {
      const item = raw as Record<string, unknown>;
      return {
        id: String(item["id"] ?? i),
        title: String(item["title"] ?? "Duyuru"),
        summary: String(item["summary"] ?? item["description"] ?? ""),
        category: String(item["category"] ?? "Duyuru"),
        kind: String(item["kind"] ?? item["type"] ?? "haber").toLowerCase().startsWith("duyuru")
          ? "duyuru"
          : "haber",
        date: String(item["date"] ?? item["publishedAt"] ?? new Date().toISOString()),
        href: typeof item["href"] === "string" ? (item["href"] as string) : undefined,
      } satisfies NewsItem;
    });
  } catch {
    return FALLBACK_NEWS;
  }
}
