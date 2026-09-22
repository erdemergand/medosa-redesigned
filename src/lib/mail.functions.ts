import { createServerFn } from "@tanstack/react-start";

/** Form e-postalarının gideceği kutu. */
const TO_ADDRESS = "info@medosa.com.tr";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

type Attachment = {
  filename: string;
  contentType: string;
  /** base64 (data: öneki olmadan) */
  data: string;
};

type MailInput = {
  subject: string;
  /** Etiket / değer çiftleri; e-posta gövdesinde tablo olarak yazılır. */
  fields: { label: string; value: string }[];
  replyTo?: string | undefined;
  attachment?: Attachment | undefined;
};

const b64 = (s: string) =>
  btoa(Array.from(new TextEncoder().encode(s), (c) => String.fromCharCode(c)).join(""));

const header = (v: string) => (/^[\x00-\x7F]*$/.test(v) ? v : `=?UTF-8?B?${b64(v)}?=`);

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function buildHtml(fields: { label: string; value: string }[]) {
  const rows = fields
    .filter((f) => f.value.trim().length > 0)
    .map(
      (f) =>
        `<tr><td style="padding:8px 14px;border-bottom:1px solid #e5e7eb;color:#64748b;font-size:13px;white-space:nowrap">${esc(
          f.label,
        )}</td><td style="padding:8px 14px;border-bottom:1px solid #e5e7eb;color:#0f172a;font-size:14px">${esc(
          f.value,
        ).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");
  return `<div style="font-family:Arial,Helvetica,sans-serif;background:#f8fafc;padding:24px"><div style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden"><div style="background:#1d3f8f;color:#fff;padding:16px 20px;font-size:15px;font-weight:bold">Medosa web sitesi formu</div><table style="width:100%;border-collapse:collapse">${rows}</table></div></div>`;
}

function buildRaw(input: MailInput) {
  const html = buildHtml(input.fields);
  const headers = [
    `To: ${TO_ADDRESS}`,
    `Subject: ${header(input.subject)}`,
    input.replyTo ? `Reply-To: ${input.replyTo}` : "",
    "MIME-Version: 1.0",
  ].filter(Boolean);

  let message: string;
  if (input.attachment) {
    const boundary = `medosa_${Math.random().toString(36).slice(2)}`;
    message = [
      ...headers,
      `Content-Type: multipart/mixed; boundary="${boundary}"`,
      "",
      `--${boundary}`,
      'Content-Type: text/html; charset="UTF-8"',
      "Content-Transfer-Encoding: base64",
      "",
      b64(html).replace(/(.{76})/g, "$1\r\n"),
      `--${boundary}`,
      `Content-Type: ${input.attachment.contentType}; name="${input.attachment.filename}"`,
      "Content-Transfer-Encoding: base64",
      `Content-Disposition: attachment; filename="${input.attachment.filename}"`,
      "",
      input.attachment.data.replace(/\s+/g, "").replace(/(.{76})/g, "$1\r\n"),
      `--${boundary}--`,
      "",
    ].join("\r\n");
  } else {
    message = [
      ...headers,
      'Content-Type: text/html; charset="UTF-8"',
      "Content-Transfer-Encoding: base64",
      "",
      b64(html).replace(/(.{76})/g, "$1\r\n"),
      "",
    ].join("\r\n");
  }

  return b64(message).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function validate(input: MailInput): MailInput {
  if (!input || typeof input.subject !== "string" || !Array.isArray(input.fields)) {
    throw new Error("Geçersiz form verisi.");
  }
  if (input.subject.length > 200) throw new Error("Konu çok uzun.");
  if (input.fields.length > 30) throw new Error("Çok fazla alan.");
  for (const f of input.fields) {
    if (typeof f.label !== "string" || typeof f.value !== "string" || f.value.length > 4000) {
      throw new Error("Geçersiz form alanı.");
    }
  }
  if (input.replyTo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.replyTo)) {
    throw new Error("Geçersiz e-posta adresi.");
  }
  if (input.attachment) {
    const a = input.attachment;
    if (typeof a.data !== "string" || a.data.length > 9_000_000) {
      throw new Error("Dosya çok büyük (en fazla ~6 MB).");
    }
    if (!/^[\w .()\-]+\.(pdf|doc|docx)$/i.test(a.filename)) {
      throw new Error("Yalnızca PDF, DOC veya DOCX dosyası yükleyebilirsiniz.");
    }
  }
  return input;
}

export const sendFormMail = createServerFn({ method: "POST" })
  .inputValidator(validate)
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    const connKey = process.env["GOOGLE_MAIL_API_KEY_1"] ?? process.env["GOOGLE_MAIL_API_KEY"];
    if (!apiKey || !connKey) {
      console.error("Gmail bağlantı bilgileri eksik.");
      throw new Error("E-posta servisi şu anda kullanılamıyor.");
    }

    const res = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "X-Connection-Api-Key": connKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw: buildRaw(data) }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`Gmail gönderimi başarısız [${res.status}]: ${body}`);
      throw new Error("Mesaj gönderilemedi, lütfen daha sonra tekrar deneyin.");
    }

    return { ok: true as const };
  });
