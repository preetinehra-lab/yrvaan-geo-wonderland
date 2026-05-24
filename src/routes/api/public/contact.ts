import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(5).max(40),
  location: z.string().trim().max(160).optional().or(z.literal("")),
  service: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(4000),
});

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }

        const parsed = ContactSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { error: "Invalid input", details: parsed.error.flatten() },
            { status: 400 },
          );
        }

        const data = parsed.data;
        const userAgent = request.headers.get("user-agent")?.slice(0, 500) ?? null;

        const { error } = await supabaseAdmin
          .from("contact_submissions")
          .insert({
            name: data.name,
            company: data.company || null,
            email: data.email,
            phone: data.phone,
            location: data.location || null,
            service: data.service || null,
            message: data.message,
            user_agent: userAgent,
          });

        if (error) {
          console.error("contact insert failed", error);
          return Response.json({ error: "Failed to save request" }, { status: 500 });
        }

        return Response.json({ ok: true });
      },
    },
  },
});