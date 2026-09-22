import { createServerFn } from "@tanstack/react-start";

import { FALLBACK_NEWS, type NewsItem } from "./news-data";

/**
 * AACC portalındaki haber/duyuru akışını okur.
 * Portal uç noktası (AACC_NEWS_URL) tanımlı değilse veya cevap vermezse
 * yedek içerik döner; böylece site her durumda dolu görünür.
 */
export const getSectorNews = createServerFn({ method: "GET" }).handler(async (): Promise<NewsItem[]> => {
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
});
