import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/site";
import soldier from "@/assets/service-soldier.jpg";
import dwall from "@/assets/service-dwall.jpg";
import shotcrete from "@/assets/service-shotcrete.jpg";
import retention from "@/assets/service-retention.jpg";

const images: Record<string, string> = {
  "soldier-pile": soldier,
  "d-wall": dwall,
  shotcreting: shotcrete,
  retention: retention,
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Soldier Pile, D-Wall, Shotcrete & Retention | YRVAAN" },
      { name: "description", content: "Specialist services from YRVAAN GeoSystems: soldier pile walls, diaphragm walls, shotcreting works, and engineered retention systems." },
      { property: "og:title", content: "Services — YRVAAN GeoSystems" },
      { property: "og:description", content: "Soldier pile, D-wall, shotcreting and retention systems — engineered and executed by YRVAAN GeoSystems." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Our Services</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-extrabold leading-[1.05] text-primary md:text-6xl">
            Substructure works,<br /><span className="text-accent">engineered end-to-end.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Four disciplines, one accountable team — from preliminary geotechnical inputs to
            commissioning and as-built handover.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-20">
        {services.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            className={`grid scroll-mt-24 gap-12 py-16 md:grid-cols-2 md:gap-16 ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            } ${i > 0 ? "border-t border-border" : ""}`}
          >
            <div className="aspect-[4/3] overflow-hidden bg-secondary">
              <img
                src={images[s.slug]}
                alt={s.title}
                width={1280}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Service / {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-display text-4xl font-extrabold text-primary">{s.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.long}</p>

              <ul className="mt-6 space-y-2">
                {s.use.map((u) => (
                  <li key={u} className="flex items-center gap-3 text-sm text-foreground">
                    <Check size={16} className="text-accent" />
                    {u}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="mt-8 inline-flex h-11 w-fit items-center gap-2 bg-primary px-6 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-accent hover:text-accent-foreground"
              >
                Request a Quote <ArrowRight size={14} />
              </Link>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}