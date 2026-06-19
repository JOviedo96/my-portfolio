import { useState } from "react";

export function Nav({ route, onNavigate }) {
  const [open, setOpen] = useState(false);

  const links = [
    { route: "home", label: "Work" },
    { route: "about", label: "About" },
    { route: "process", label: "Process" },
    { route: "break", label: "Need a Break?" },
  ];

  function handleNav(r) {
    onNavigate(r);
    setOpen(false);
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="brand" onClick={(e) => { e.preventDefault(); handleNav("home"); }}>
          <span className="brand-mark">J</span>
          <span>Jamie Oviedo</span>
        </a>
        <div className="nav-links">
          {links.map(({ route: r, label }) => (
            <a
              key={r}
              className={route === r ? "active" : ""}
              onClick={(e) => { e.preventDefault(); onNavigate(r); }}
              style={{ cursor: "pointer" }}
            >
              {label}
            </a>
          ))}
        </div>
        <a href="mailto:jamie.oviedo96@gmail.com" className="nav-cta">Get in touch →</a>
        <button
          className={`nav-hamburger${open ? " is-open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>
      {open && (
        <div className="nav-mobile-menu">
          {links.map(({ route: r, label }) => (
            <a
              key={r}
              className={route === r ? "active" : ""}
              onClick={(e) => { e.preventDefault(); handleNav(r); }}
            >
              {label}
            </a>
          ))}
          <a href="mailto:jamie.oviedo96@gmail.com" className="nav-mobile-cta">Get in touch →</a>
        </div>
      )}
    </nav>
  );
}
