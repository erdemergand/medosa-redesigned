import { createServerFn } from "@tanstack/react-start";

export type ApplicationInput = {
  kind: "is" | "staj";
  fullName: string;
  email: string;
  phone?: string;
  location?: string;
  position?: string;
  internshipType?: string;
  school?: string;
  subject?: string;
  message?: string;
  cv?: { filename: string; contentType: string; data: string } | undefined;
};

const text = (v: unknown, max = 400) => {
  const s = typeof v === "string" ? v.trim() : "";
  if (s.length > max) throw new Error("Girilen bilgi çok uzun.");
  return s;
};

function validate(input: ApplicationInput): ApplicationInput {
  if (!input || (input.kind !== "is" && input.kind !== "staj")) {
    throw new Error("Geçersiz başvuru.");
  }
  const fullName = text(input.fullName);
  const email = text(input.email, 200);
  if (!fullName) throw new Error("Ad soyad zorunludur.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Geçersiz e-posta adresi.");

  if (input.cv) {
    if (typeof input.cv.data !== "string" || input.cv.data.length > 9_000_000) {
      throw new Error("CV dosyası çok büyük (en fazla ~6 MB).");
    }
    if (!/^[\w .()\-]+\.(pdf|doc|docx)$/i.test(input.cv.filename)) {
      throw new Error("Yalnızca PDF, DOC veya DOCX dosyası yükleyebilirsiniz.");
    }
  }

  return {
    kind: input.kind,
    fullName,
    email,
    phone: text(input.phone, 60),
    location: text(input.location),
    position: text(input.position),
    internshipType: text(input.internshipType),
    school: text(input.school),
    subject: text(input.subject),
    message: text(input.message, 4000),
    cv: input.cv,
  };
}

function base64ToBytes(b64: string) {
  const clean = b64.replace(/\s+/g, "");
  const bin = atob(clean);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i += 1) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

/**
 * Başvuruyu kaydeder. CV özel depoya yüklenir.
 * E-posta gönderilmez; başvurular pazartesi 09:00'daki toplu özetle iletilir.
 */
export const submitApplication = createServerFn({ method: "POST" })
  .inputValidator(validate)
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    let cvPath: string | null = null;
    if (data.cv) {
      const safeName = data.cv.filename.replace(/[^\w.\-]+/g, "_");
      const path = `${new Date().getFullYear()}/${crypto.randomUUID()}-${safeName}`;
      const { error } = await supabaseAdmin.storage
        .from("cv-uploads")
        .upload(path, base64ToBytes(data.cv.data), {
          contentType: data.cv.contentType || "application/octet-stream",
          upsert: false,
        });
      if (error) {
        console.error("CV yüklenemedi:", error.message);
        throw new Error("CV dosyası yüklenemedi, lütfen tekrar deneyin.");
      }
      cvPath = path;
    }

    const { error } = await supabaseAdmin.from("applications").insert({
      kind: data.kind,
      full_name: data.fullName,
      email: data.email,
      phone: data.phone || null,
      location: data.location || null,
      position: data.position || null,
      internship_type: data.internshipType || null,
      school: data.school || null,
      subject: data.subject || null,
      message: data.message || null,
      cv_path: cvPath,
      cv_filename: data.cv?.filename ?? null,
    });

    if (error) {
      console.error("Başvuru kaydedilemedi:", error.message);
      throw new Error("Başvuru kaydedilemedi, lütfen tekrar deneyin.");
    }

    return { ok: true as const };
  });
