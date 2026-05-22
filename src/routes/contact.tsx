import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send, Check } from "lucide-react";
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
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const params = new URLSearchParams();
    data.forEach((v, k) => params.append(k, String(v)));
    // Fallback: open user's mail client with the message prefilled.
    const subject = `Quote request — ${data.get("service") ?? "General"}`;
    const body = `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nLocation: ${data.get("location")}\nService: ${data.get("service")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    form.reset();
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
            className="mt-8 inline-flex h-12 items-center gap-2 bg-accent px-7 text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:-translate-y-0.5"
          >
            {sent ? <><Check size={16} /> Opened in your mail app</> : <>Send request <Send size={16} /></>}
          </button>
          {sent && (
            <p className="mt-3 text-xs text-muted-foreground">
              Your default mail app should have opened with the message prefilled. If not, email{" "}
              <a href={`mailto:${site.email}`} className="text-accent">{site.email}</a> directly.
            </p>
          )}
        </form>

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