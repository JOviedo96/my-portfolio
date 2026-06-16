export function Nav({ route, onNavigate }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="brand" onClick={(e) => { e.preventDefault(); onNavigate("home"); }}>
          <span className="brand-mark">J</span>
          <span>Jamie Oviedo</span>
        </a>
        <div className="nav-links">
          {[
            { route: "home", label: "Work" },
            { route: "about", label: "About" },
            { route: "process", label: "Process" },
            { route: "break", label: "Need a Break?" },
          ].map(({ route: r, label }) => (
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
      </div>
    </nav>
  );
}
