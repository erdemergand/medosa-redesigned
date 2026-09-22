/**
 * Gmail (connector gateway) üzerinden e-posta gönderen sunucu yardımcısı.
 * Yalnızca sunucu tarafında kullanılır.
 */
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

export const DEFAULT_TO = "info@medosa.com.tr";

export type MailAttachment = {
  filename: string;
  contentType: string;
  /** base64 (data: öneki olmadan) */
  data: string;
};

export type SendMailOptions = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string | undefined;
  attachment?: MailAttachment | undefined;
  listUnsubscribeUrl?: string | undefined;
};

export const b64 = (s: string) =>
  btoa(Array.from(new TextEncoder().encode(s), (c) => String.fromCharCode(c)).join(""));

export const mimeHeader = (v: string) =>
  /^[\x00-\x7F]*$/.test(v) ? v : `=?UTF-8?B?${b64(v)}?=`;

export const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Basit Medosa e-posta şablonu. */
export function wrapHtml(title: string, inner: string) {
  return `<div style="font-family:Arial,Helvetica,sans-serif;background:#f8fafc;padding:24px"><div style="max-width:680px;margin:0 auto;background:#fff;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden"><div style="background:#1d3f8f;color:#fff;padding:16px 20px;font-size:15px;font-weight:bold">${esc(
    title,
  )}</div><div style="padding:18px 20px">${inner}</div></div></div>`;
}

function buildRaw(o: SendMailOptions) {
  const headers = [
    `To: ${o.to}`,
    `Subject: ${mimeHeader(o.subject)}`,
    o.replyTo ? `Reply-To: ${o.replyTo}` : "",
    o.listUnsubscribeUrl ? `List-Unsubscribe: <${o.listUnsubscribeUrl}>` : "",
    "MIME-Version: 1.0",
  ].filter(Boolean);

  const htmlPart = b64(o.html).replace(/(.{76})/g, "$1\r\n");

  let message: string;
  if (o.attachment) {
    const boundary = `medosa_${Math.random().toString(36).slice(2)}`;
    message = [
      ...headers,
      `Content-Type: multipart/mixed; boundary="${boundary}"`,
      "",
      `--${boundary}`,
      'Content-Type: text/html; charset="UTF-8"',
      "Content-Transfer-Encoding: base64",
      "",
      htmlPart,
      `--${boundary}`,
      `Content-Type: ${o.attachment.contentType}; name="${o.attachment.filename}"`,
      "Content-Transfer-Encoding: base64",
      `Content-Disposition: attachment; filename="${o.attachment.filename}"`,
      "",
      o.attachment.data.replace(/\s+/g, "").replace(/(.{76})/g, "$1\r\n"),
      `--${boundary}--`,
      "",
    ].join("\r\n");
  } else {
    message = [
      ...headers,
      'Content-Type: text/html; charset="UTF-8"',
      "Content-Transfer-Encoding: base64",
      "",
      htmlPart,
      "",
    ].join("\r\n");
  }

  return b64(message).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export async function sendMail(options: SendMailOptions) {
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
    body: JSON.stringify({ raw: buildRaw(options) }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`Gmail gönderimi başarısız [${res.status}]: ${body}`);
    throw new Error(`Gmail gönderimi başarısız [${res.status}]`);
  }

  return (await res.json()) as { id?: string };
}
