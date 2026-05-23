import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import logo from "@/assets/logo.jpeg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="YRVAAN GeoSystems logo" className="h-9 w-9 object-contain" />
          <span className="font-display text-lg font-extrabold tracking-tight text-primary">
            YRVAAN<span className="text-accent">.</span>
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground sm:inline">
            GeoSystems
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex h-10 items-center bg-accent px-5 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Request a Quote
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-foreground/80"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex h-11 items-center justify-center bg-accent px-5 text-sm font-semibold uppercase tracking-wider text-accent-foreground"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}

      <span className="sr-only">{site.legal}</span>
    </header>
  );
}