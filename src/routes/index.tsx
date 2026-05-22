import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, HardHat, Ruler, Clock } from "lucide-react";
import heroImg from "@/assets/hero-excavation.jpg";
import { services } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YRVAAN GeoSystems — Earth Retention & Substructure Specialists" },
      { name: "description", content: "Specialist contractors for soldier pile walls, diaphragm walls, shotcreting, and engineered retention systems. Request a quote today." },
      { property: "og:title", content: "YRVAAN GeoSystems — Earth Retention Specialists" },
      { property: "og:description", content: "Soldier pile, D-wall, shotcreting, and retention systems engineered for India's most demanding excavations." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const why = [
  { icon: Ruler, title: "Engineering precision", body: "Geotechnical analysis, instrumented monitoring, and design-led execution on every site." },
  { icon: ShieldCheck, title: "Safety first", body: "Zero-compromise HSE protocols across deep excavation, sprayed concrete, and anchoring works." },
  { icon: Clock, title: "On-time delivery", body: "Resource-planned crews and self-owned plant keep critical-path schedules intact." },
  { icon: HardHat, title: "Specialist crews", body: "Trained pile, shotcrete, and anchoring teams led by experienced geotechnical engineers." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroImg}
          alt="Soldier pile retention wall at a deep urban excavation"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/85 to-primary/30" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              <span className="h-px w-8 bg-accent" /> Geotechnical Substructure Specialists
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-6xl md:text-7xl">
              We hold back<br />the earth so you<br />can <span className="text-accent">build deeper.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
              YRVAAN GeoSystems Pvt Ltd designs and executes soldier pile walls, diaphragm
              walls, shotcreting, and retention systems for India's most demanding excavations.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="group inline-flex h-12 items-center gap-2 bg-accent px-7 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-transform hover:-translate-y-0.5">
                Request a Quote <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="inline-flex h-12 items-center border border-primary-foreground/30 px-7 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:border-accent hover:text-accent">
                View Services
              </Link>
            </div>
          </div>
        </div>

        <div className="relative border-t border-primary-foreground/10 bg-primary/80 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-primary-foreground/10 md:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services"
                hash={s.slug}
                className="group px-6 py-6 transition-colors hover:bg-accent/10"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">0{services.indexOf(s as never) + 1}</p>
                <p className="mt-2 font-display text-base font-bold leading-tight text-primary-foreground group-hover:text-accent">
                  {s.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Why YRVAAN</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-primary md:text-5xl">
              Specialist contractors,<br />not generalists.
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {why.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border-l-2 border-accent pl-5">
                <Icon className="text-accent" size={22} />
                <h3 className="mt-3 text-lg font-bold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES PREVIEW */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Capabilities</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold text-primary md:text-5xl">
                Four disciplines.<br />One delivery team.
              </h2>
            </div>
            <Link to="/services" className="hidden text-sm font-semibold uppercase tracking-wider text-primary hover:text-accent md:inline-flex">
              All services →
            </Link>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to="/services"
                hash={s.slug}
                className="group flex flex-col bg-background p-8 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{String(i + 1).padStart(2, "0")} / Service</p>
                <h3 className="mt-3 font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/80">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">
              Have an excavation that needs an expert?
            </h2>
            <p className="mt-3 text-primary-foreground/75">
              Share your drawings and we'll come back with a scope, methodology, and indicative budget.
            </p>
          </div>
          <Link to="/contact" className="inline-flex h-12 items-center gap-2 bg-accent px-7 text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:-translate-y-0.5">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
