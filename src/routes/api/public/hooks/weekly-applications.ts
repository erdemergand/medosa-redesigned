import { createFileRoute } from "@tanstack/react-router";

import { DEFAULT_TO, esc, sendMail, wrapHtml } from "@/lib/mailer.server";

const JOB_NAME = "weekly-applications";
const BATCH = 200;
/** İndirme bağlantısı geçerlilik süresi: 30 gün. */
const SIGNED_URL_TTL = 60 * 60 * 24 * 30;

function unauthorized(request: Request) {
  const secret = process.env["HOOKS_SECRET"];
  if (!secret) return new Response("Server configuration error", { status: 500 });
  const provided = request.headers.get("x-hook-secret") ?? "";
  if (provided.length !== secret.length || provided !== secret) {
    return new Response("Unauthorized", { status: 401 });
  }
  return null;
}

const trFormat = (iso: string) =>
  new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Europe/Istanbul",
  }).format(new Date(iso));

export const Route = createFileRoute("/api/public/hooks/weekly-applications")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const denied = unauthorized(request);
        if (denied) return denied;

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

        // Tek uçuş kilidi: eşzamanlı ikinci çalıştırma işi tekrarlamaz.
        const now = new Date();
        const lockUntil = new Date(now.getTime() + 10 * 60 * 1000).toISOString();
        const { data: lock } = await supabaseAdmin
          .from("job_locks")
          .select("locked_until")
          .eq("job_name", JOB_NAME)
          .maybeSingle();

        if (lock && new Date(lock.locked_until) > now) {
          return Response.json({ ok: true, skipped: "locked" });
        }
        await supabaseAdmin
          .from("job_locks")
          .upsert({ job_name: JOB_NAME, locked_until: lockUntil }, { onConflict: "job_name" });

        const { data: rows, error } = await supabaseAdmin
          .from("applications")
          .select("*")
          .is("digest_sent_at", null)
          .order("created_at", { ascending: true })
          .limit(BATCH);

        if (error) {
          console.error("Başvurular okunamadı:", error.message);
          return Response.json({ ok: false, error: error.message }, { status: 500 });
        }

        if (!rows || rows.length === 0) {
          await supabaseAdmin
            .from("job_locks")
            .upsert(
              { job_name: JOB_NAME, locked_until: new Date().toISOString() },
              { onConflict: "job_name" },
            );
          return Response.json({ ok: true, count: 0 });
        }

        const blocks: string[] = [];
        for (const r of rows) {
          let cvLink = "—";
          if (r.cv_path) {
            const { data: signed } = await supabaseAdmin.storage
              .from("cv-uploads")
              .createSignedUrl(r.cv_path, SIGNED_URL_TTL);
            if (signed?.signedUrl) {
              cvLink = `<a href="${esc(signed.signedUrl)}" style="color:#1d3f8f">${esc(
                r.cv_filename ?? "CV indir",
              )}</a> <span style="color:#94a3b8">(30 gün geçerli)</span>`;
            }
          }

          const line = (label: string, value: string | null) =>
            value
              ? `<tr><td style="padding:5px 12px;color:#64748b;font-size:12px;white-space:nowrap">${esc(
                  label,
                )}</td><td style="padding:5px 12px;color:#0f172a;font-size:13px">${esc(value).replace(
                  /\n/g,
                  "<br>",
                )}</td></tr>`
              : "";

          blocks.push(
            `<div style="border:1px solid #e2e8f0;border-radius:12px;margin-bottom:14px;overflow:hidden">
<div style="background:#f1f5f9;padding:8px 12px;font-size:13px;font-weight:bold;color:#0f172a">${esc(
              r.kind === "is" ? "İş Başvurusu" : "Staj Başvurusu",
            )} — ${esc(r.full_name)} <span style="font-weight:normal;color:#64748b">(${esc(
              trFormat(r.created_at),
            )})</span></div>
<table style="width:100%;border-collapse:collapse">
${line("E-Posta", r.email)}
${line("Telefon", r.phone)}
${line("Başvuru Yeri", r.location)}
${line("Pozisyon", r.position)}
${line("Staj Türü", r.internship_type)}
${line("Okul", r.school)}
${line("Konu", r.subject)}
${line("Mesaj", r.message)}
<tr><td style="padding:5px 12px;color:#64748b;font-size:12px">CV</td><td style="padding:5px 12px;font-size:13px">${cvLink}</td></tr>
</table></div>`,
          );
        }

        const jobCount = rows.filter((r) => r.kind === "is").length;
        const internCount = rows.length - jobCount;
        const intro = `<p style="margin:0 0 14px;font-size:14px;color:#0f172a">Geçen haftadan bu yana <b>${rows.length}</b> başvuru alındı (${jobCount} iş, ${internCount} staj).</p>`;

        await sendMail({
          to: DEFAULT_TO,
          subject: `Haftalık başvuru özeti — ${rows.length} başvuru`,
          html: wrapHtml("Medosa haftalık başvuru özeti", intro + blocks.join("")),
        });

        const ids = rows.map((r) => r.id);
        await supabaseAdmin
          .from("applications")
          .update({ digest_sent_at: new Date().toISOString() })
          .in("id", ids);

        await supabaseAdmin
          .from("job_locks")
          .upsert(
            { job_name: JOB_NAME, locked_until: new Date().toISOString() },
            { onConflict: "job_name" },
          );

        return Response.json({ ok: true, count: rows.length });
      },
    },
  },
});
