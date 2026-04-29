import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Start", index: "01" },
  { to: "/ueber-mich", label: "Über mich", index: "02" },
  { to: "/webentwicklung", label: "Web Development", index: "03" },
  { to: "/seo", label: "SEO", index: "04" },
  { to: "/projekte", label: "Projekte", index: "05" },
  { to: "/blog", label: "Blog", index: "06" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10">
      <div className="container-editorial flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="group flex items-center gap-2 font-display text-xl md:text-2xl">
          <span className="inline-block w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform duration-500" />
          <span>Marianna<span className="text-accent">.</span>K</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `swap-link text-sm tracking-wide ${isActive ? "text-accent" : "text-foreground"}`
              }
            >
              <span>{l.label}</span>
              <span aria-hidden>{l.label}</span>
            </NavLink>
          ))}
        </nav>

        <Link
          to="/#kontakt"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm hover:bg-accent transition-colors duration-300"
        >
          Projekt starten
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2"
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-foreground/10 bg-background animate-fade-in">
          <div className="container-editorial py-6 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-baseline gap-4 font-display text-3xl ${isActive ? "text-accent" : ""}`
                }
              >
                <span className="font-mono text-xs text-muted-foreground">{l.index}</span>
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
