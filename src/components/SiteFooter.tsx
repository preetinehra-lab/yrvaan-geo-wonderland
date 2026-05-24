import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { site, services } from "@/lib/site";
import logo from "@/assets/logo.jpeg";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="YRVAAN GeoSystems logo" className="h-9 w-9 object-contain" />
            <span className="font-display text-xl font-extrabold tracking-tight">
              YRVAAN<span className="text-accent">.</span> GeoSystems
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
            {site.legal} — specialist contractors for soldier pile walls,
            diaphragm walls, shotcreting, and engineered retention systems.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services" hash={s.slug} className="hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
              <a href={`mailto:${site.email}`} className="hover:text-accent">{site.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-accent">{site.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {site.legal}. All rights reserved.</span>
          <span>{site.hours}</span>
        </div>
      </div>
    </footer>
  );
}