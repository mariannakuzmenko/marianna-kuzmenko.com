import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Start" },
  { to: "/ueber-mich", label: "Über mich" },
  { to: "/webentwicklung", label: "Web Development" },
  { to: "/seo", label: "SEO" },
  { to: "/projekte", label: "Projekte" },
  { to: "/blog", label: "Blog" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/60">
      <div className="container-editorial flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="group flex items-center py-2" aria-label="Marianna Kuzmenko — Web Design & Development">
          <img
            src={logo}
            alt="Marianna Kuzmenko"
            className="h-14 md:h-20 lg:h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            style={{ filter: "drop-shadow(0 4px 18px hsl(208 70% 50% / 0.35))" }}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `swap-link text-sm tracking-wide ${isActive ? "text-rose" : "text-foreground"}`
              }
            >
              <span>{l.label}</span>
              <span aria-hidden>{l.label}</span>
            </NavLink>
          ))}
        </nav>

        <Link to="/#kontakt" className="hidden lg:inline-flex btn-pink">
          Projekt starten →
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-full bg-secondary"
          aria-label="Menü"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-paper/95 backdrop-blur-xl animate-fade-in">
          <div className="container-editorial py-8 flex flex-col gap-3">
            {links.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-display text-3xl py-2 ${isActive ? "text-rose italic" : ""}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/#kontakt"
              onClick={() => setOpen(false)}
              className="btn-pink mt-4 self-start"
            >
              Projekt starten →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
