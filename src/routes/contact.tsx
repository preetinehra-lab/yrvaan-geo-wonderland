import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send, Check, Loader2 } from "lucide-react";
import { site, services } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Request a Quote — YRVAAN GeoSystems" },
      { name: "description", content: "Request a quote from YRVAAN GeoSystems Pvt Ltd for soldier pile, diaphragm wall, shotcreting, and retention works." },
      { property: "og:title", content: "Contact YRVAAN GeoSystems" },
      { property: "og:description", content: "Get in touch for soldier pile, D-wall, shotcreting and retention works." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      location: String(fd.get("location") ?? "").trim(),
      service: String(fd.get("service") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    setStatus("submitting");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Submission failed");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Contact</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-extrabold leading-[1.05] text-primary md:text-6xl">
            Tell us about <span className="text-accent">your excavation.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Share a brief, drawings, or a site address — we'll come back within one working day with
            scope, methodology and an indicative budget.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[3fr_2fr]">
        {/* FORM */}
        {status === "success" ? (
          <div className="border border-border bg-background p-8 md:p-10">
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Check size={20} />
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold text-primary">Request submitted</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thanks for reaching out. Our team has received your request and will respond within
                  one working day at the email and phone number you provided.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 inline-flex h-11 items-center gap-2 border border-border px-5 text-xs font-semibold uppercase tracking-wider text-primary hover:bg-secondary"
                >
                  Send another request
                </button>
              </div>
            </div>
          </div>
        ) : (
        <form onSubmit={onSubmit} className="border border-border bg-background p-8 md:p-10">
          <h2 className="font-display text-2xl font-bold text-primary">Request a Quote</h2>
          <p className="mt-1 text-sm text-muted-foreground">All fields marked * are required.</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field label="Full name *" name="name" required />
            <Field label="Company" name="company" />
            <Field label="Email *" name="email" type="email" required />
            <Field label="Phone *" name="phone" type="tel" required />
            <Field label="Project location" name="location" placeholder="City / state" />
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-primary">
                Service required
              </label>
              <select
                name="service"
                className="mt-2 h-11 w-full border border-input bg-background px-3 text-sm focus:border-accent focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>Select a service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>{s.title}</option>
                ))}
                <option value="Multiple / Not sure">Multiple / Not sure</option>
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-primary">
              Project brief *
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Excavation depth, soil conditions, timeline, drawings available…"
              className="mt-2 w-full border border-input bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-8 inline-flex h-12 items-center gap-2 bg-accent px-7 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {status === "submitting" ? (
              <><Loader2 size={16} className="animate-spin" /> Sending…</>
            ) : (
              <>Send request <Send size={16} /></>
            )}
          </button>
          {status === "error" && (
            <p className="mt-3 text-xs text-destructive">
              {errorMsg ?? "Something went wrong."} Please try again or email{" "}
              <a href={`mailto:${site.email}`} className="text-accent">{site.email}</a> directly.
            </p>
          )}
        </form>
        )}

        {/* INFO */}
        <aside className="space-y-6">
          <div className="bg-primary p-8 text-primary-foreground">
            <h3 className="font-display text-lg font-bold">Reach us directly</h3>
            <ul className="mt-6 space-y-5 text-sm">
              <InfoRow icon={<Mail size={18} />} label="Email" value={site.email} href={`mailto:${site.email}`} />
              <InfoRow icon={<Phone size={18} />} label="Phone" value={site.phone} href={`tel:${site.phone.replace(/\s/g, "")}`} />
              <InfoRow icon={<MapPin size={18} />} label="Office" value={site.address} />
              <InfoRow icon={<Clock size={18} />} label="Hours" value={site.hours} />
            </ul>
          </div>

          <div className="border border-border p-8">
            <h3 className="font-display text-lg font-bold text-primary">For tender enquiries</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Please attach BOQ, geotechnical investigation reports, and structural drawings with
              your request to help us respond accurately.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-primary">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 h-11 w-full border border-input bg-background px-3 text-sm focus:border-accent focus:outline-none"
      />
    </div>
  );
}

function InfoRow({
  icon, label, value, href,
}: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-accent">{icon}</span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">{label}</p>
        <p className="mt-1 text-primary-foreground/90">{value}</p>
      </div>
    </div>
  );
  return href ? <li><a href={href} className="hover:text-accent">{content}</a></li> : <li>{content}</li>;
}