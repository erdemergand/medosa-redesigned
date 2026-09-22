import { createServerFn } from "@tanstack/react-start";

function validate(input: { email: string }) {
  const email = typeof input?.email === "string" ? input.email.trim().toLowerCase() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    throw new Error("Geçerli bir e-posta adresi giriniz.");
  }
  return { email };
}

/** Duyuru bildirimleri için abonelik kaydı. */
export const subscribeToAnnouncements = createServerFn({ method: "POST" })
  .inputValidator(validate)
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin
      .from("subscribers")
      .upsert({ email: data.email, is_active: true }, { onConflict: "email" });

    if (error) {
      console.error("Abonelik kaydedilemedi:", error.message);
      throw new Error("Abonelik kaydedilemedi, lütfen tekrar deneyin.");
    }

    return { ok: true as const };
  });
