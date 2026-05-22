import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — YRVAAN GeoSystems" },
      { name: "description", content: "YRVAAN GeoSystems Pvt Ltd is a specialist geotechnical contractor focused on earth retention and substructure works." },
      { property: "og:title", content: "About YRVAAN GeoSystems" },
      { property: "og:description", content: "Specialist geotechnical contractor focused on safe, precise, on-time substructure delivery." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { title: "Safety", body: "Every method statement, lift plan, and crew briefing starts from a single principle — everyone goes home safe." },
  { title: "Engineering precision", body: "We back every wall, anchor, and spray with calculation, instrumentation, and verifiable QA." },
  { title: "Reliability", body: "Mobilization commitments, programme dates, and handovers we actually keep." },
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">About YRVAAN</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-extrabold leading-[1.05] text-primary md:text-6xl">
            A specialist contractor built around <span className="text-accent">earth retention.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            YRVAAN GeoSystems Pvt Ltd executes the substructure works most general contractors
            subcontract — soldier pile walls, diaphragm walls, shotcreting, and engineered
            retention systems — under one roof, with the geotechnical depth to design as well as build.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-[2fr_3fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Our mission</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-primary md:text-4xl">
            Make deep excavations safer, faster, and more predictable.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            We started YRVAAN to bring genuinely specialist geotechnical capability to projects
            where shortcuts cost more than they save. From a single retention wall to a full
            basement substructure package, we own the design intent, the means and methods, and
            the result.
          </p>
          <p>
            Our team brings together design engineers, site engineers, and skilled crews trained
            specifically on soldier pile, diaphragm wall, shotcrete, and anchoring works — the
            disciplines we build our entire business around.
          </p>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">What we stand for</p>
          <div className="mt-10 grid gap-px bg-primary-foreground/10 md:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.title} className="bg-primary p-8">
                <p className="font-display text-5xl font-extrabold text-accent">0{i + 1}</p>
                <h3 className="mt-4 font-display text-xl font-bold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-6 border-l-2 border-accent pl-6 md:flex-row md:items-center md:pl-10">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-primary md:text-4xl">
              Ready to work with us?
            </h2>
            <p className="mt-2 text-muted-foreground">Send your project brief and we'll respond within one working day.</p>
          </div>
          <Link to="/contact" className="inline-flex h-12 items-center gap-2 bg-accent px-7 text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:-translate-y-0.5">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}