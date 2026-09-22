import { createFileRoute } from "@tanstack/react-router";

import { CITY_PAGES } from "@/lib/city-data";
import { SITE_URL } from "@/lib/seo";

const PAGES: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/hizmetler", priority: "0.9", changefreq: "monthly" },
  { path: "/hakkimizda", priority: "0.8", changefreq: "monthly" },
  { path: "/iletisim", priority: "0.8", changefreq: "monthly" },
  { path: "/e-takip", priority: "0.7", changefreq: "monthly" },
  { path: "/uygulamalar", priority: "0.7", changefreq: "monthly" },
  { path: "/sektorel-akis", priority: "0.7", changefreq: "daily" },
  { path: "/ik", priority: "0.5", changefreq: "monthly" },
  ...CITY_PAGES.map((c) => ({
    path: `/gumruk-musavirligi/${c.slug}`,
    priority: "0.9",
    changefreq: "monthly",
  })),
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const lastmod = new Date().toISOString().slice(0, 10);
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(
  (p) => `  <url>
    <loc>${SITE_URL}${p.path === "/" ? "/" : p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
).join("\n")}
</urlset>
`;
        return new Response(body, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
