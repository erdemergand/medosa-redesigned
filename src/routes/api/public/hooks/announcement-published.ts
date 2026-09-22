import { createFileRoute } from "@tanstack/react-router";

import { DEFAULT_TO, esc, sendMail, wrapHtml } from "@/lib/mailer.server";

const MAX_RECIPIENTS = 500;

function unauthorized(request: Request) {
  const secret = process.env["HOOKS_SECRET"];
  if (!secret) return new Response("Server configuration error", { status: 500 });
  const provided = request.headers.get("x-hook-secret") ?? "";
  if (provided.length !== secret.length || provided !== secret) {
    return new Response("Unauthorized", { status: 401 });
  }
  return null;
}

export const Route = createFileRoute("/api/public/hooks/announcement-published")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const denied = unauthorized(request);
        if (denied) return denied;

        const origin = new URL(request.url).origin;
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

        // Bildirimi gönderilmemiş yayındaki duyurular (en fazla 5 tanesi).
        const { data: items, error } = await supabaseAdmin
          .from("announcements")
          .select("*")
          .eq("is_published", true)
          .is("notified_at", null)
          .order("created_at", { ascending: true })
          .limit(5);

        if (error) {
          console.error("Duyurular okunamadı:", error.message);
          return Response.json({ ok: false, error: error.message }, { status: 500 });
        }
        if (!items || items.length === 0) return Response.json({ ok: true, sent: 0 });

        const { data: subs } = await supabaseAdmin
          .from("subscribers")
          .select("email, unsubscribe_token")
          .eq("is_active", true)
          .limit(MAX_RECIPIENTS);

        let sent = 0;
        for (const item of items) {
          const body = `<p style="margin:0 0 6px;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:.08em">${esc(
            item.category,
          )}</p>
<h2 style="margin:0 0 10px;font-size:18px;color:#0f172a">${esc(item.title)}</h2>
<p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:#334155">${esc(item.summary)}</p>
${
  item.url
    ? `<p style="margin:0 0 16px"><a href="${esc(
        item.url,
      )}" style="display:inline-block;background:#1d3f8f;color:#fff;padding:10px 18px;border-radius:999px;text-decoration:none;font-size:13px">Duyuruyu görüntüle</a></p>`
    : ""
}`;

          for (const sub of subs ?? []) {
            const unsubscribe = `${origin}/api/public/abonelik-iptal?token=${sub.unsubscribe_token}`;
            const footer = `<p style="margin:18px 0 0;font-size:11px;color:#94a3b8">Bu e-postayı Medosa duyuru bildirimlerine abone olduğunuz için aldınız. <a href="${esc(
              unsubscribe,
            )}" style="color:#94a3b8">Abonelikten çıkın</a>.</p>`;
            try {
              await sendMail({
                to: sub.email,
                subject: `Medosa duyuru: ${item.title}`,
                html: wrapHtml("Medosa duyuru", body + footer),
                listUnsubscribeUrl: unsubscribe,
              });
              sent += 1;
            } catch (err) {
              console.error(`Duyuru gönderilemedi (${sub.email}):`, err);
            }
          }

          await supabaseAdmin
            .from("announcements")
            .update({ notified_at: new Date().toISOString() })
            .eq("id", item.id);
        }

        if ((subs ?? []).length === 0) {
          console.warn("Aktif abone yok, duyuru bildirimi gönderilmedi.");
        } else {
          await sendMail({
            to: DEFAULT_TO,
            subject: `Duyuru bildirimi gönderildi — ${sent} abone`,
            html: wrapHtml(
              "Duyuru bildirimi",
              `<p style="font-size:14px;color:#0f172a">${items
                .map((i) => esc(i.title))
                .join(", ")} duyurusu ${sent} aboneye iletildi.</p>`,
            ),
          }).catch(() => undefined);
        }

        return Response.json({ ok: true, sent });
      },
    },
  },
});
