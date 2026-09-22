import { createFileRoute } from "@tanstack/react-router";

function page(message: string) {
  return new Response(
    `<!doctype html><html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Medosa — Abonelik</title></head><body style="font-family:Arial,Helvetica,sans-serif;background:#f8fafc;margin:0;padding:48px"><div style="max-width:520px;margin:0 auto;background:#fff;border:1px solid #e2e8f0;border-radius:16px;padding:28px;text-align:center"><p style="font-size:15px;color:#0f172a;line-height:1.6">${message}</p><p><a href="/" style="color:#1d3f8f;font-size:14px">Medosa web sitesine dön</a></p></div></body></html>`,
    { headers: { "content-type": "text/html; charset=utf-8" } },
  );
}

export const Route = createFileRoute("/api/public/abonelik-iptal")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const token = new URL(request.url).searchParams.get("token") ?? "";
        if (!/^[0-9a-f-]{36}$/i.test(token)) {
          return page("Bağlantı geçersiz görünüyor.");
        }

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { error } = await supabaseAdmin
          .from("subscribers")
          .update({ is_active: false })
          .eq("unsubscribe_token", token);

        if (error) {
          console.error("Abonelik iptali başarısız:", error.message);
          return page("İşlem tamamlanamadı, lütfen daha sonra tekrar deneyin.");
        }

        return page("Duyuru bildirimlerinden çıkarıldınız. Dilediğiniz zaman yeniden abone olabilirsiniz.");
      },
    },
  },
});
