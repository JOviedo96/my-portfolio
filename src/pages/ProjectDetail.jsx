import { PROJECTS } from '../data/projects.js';
import { PHASES } from '../data/phases.js';

function PhaseArtifact({ artifact, color }) {
  if (!artifact) return null;

  if (artifact.kind === "quote") {
    return (
      <figure className="art art-quote">
        <div className="art-mark">"</div>
        <blockquote>{artifact.text}</blockquote>
        <figcaption>— {artifact.cite}</figcaption>
      </figure>
    );
  }

  if (artifact.kind === "data") {
    return (
      <figure className="art art-data">
        <div className="art-data-left">
          <div className="art-stat">{artifact.stat}</div>
          <div className="art-stat-label">{artifact.statLabel}</div>
          <figcaption>{artifact.caption}</figcaption>
        </div>
        <div className="art-chart" aria-hidden="true">
          <svg viewBox="0 0 200 120" preserveAspectRatio="none">
            <defs>
              <pattern id={`grid-${artifact.chart}`} width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--line-soft)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="200" height="120" fill={`url(#grid-${artifact.chart})`} />
            <path d="M 0 110 L 20 95 L 40 88 L 60 70 L 80 50 L 100 35 L 120 28 L 140 35 L 160 50 L 180 70 L 200 95"
                  fill="none" stroke={`var(--${color})`} strokeWidth="2" strokeLinecap="round" />
            <path d="M 0 110 L 20 95 L 40 88 L 60 70 L 80 50 L 100 35 L 120 28 L 140 35 L 160 50 L 180 70 L 200 95 L 200 120 L 0 120 Z"
                  fill={`var(--${color})`} opacity="0.12" />
            <circle cx="100" cy="35" r="4" fill={`var(--${color})`} />
          </svg>
        </div>
      </figure>
    );
  }

  if (artifact.kind === "sketch") {
    return (
      <figure className="art art-sketch">
        <div className="art-sketch-canvas">
          <svg viewBox="0 0 360 220" className="sketch-svg" aria-hidden="true">
            <defs>
              <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.7" fill="var(--ink-3)" opacity="0.35" />
              </pattern>
            </defs>
            <rect width="360" height="220" fill="url(#dots)" />
            <rect x="20" y="20" width="320" height="180" rx="6" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.5" />
            <rect x="20" y="20" width="320" height="22" fill={`var(--${color})`} opacity="0.18" />
            <circle cx="32" cy="31" r="3" fill="var(--ink)" opacity="0.4" />
            <circle cx="42" cy="31" r="3" fill="var(--ink)" opacity="0.4" />
            <circle cx="52" cy="31" r="3" fill="var(--ink)" opacity="0.4" />
            <rect x="20" y="42" width="80" height="158" fill="var(--bg-2)" />
            <rect x="30" y="56" width="60" height="6" rx="2" fill="var(--ink)" opacity="0.25" />
            <rect x="30" y="70" width="50" height="6" rx="2" fill="var(--ink)" opacity="0.15" />
            <rect x="30" y="84" width="55" height="6" rx="2" fill="var(--ink)" opacity="0.15" />
            <rect x="110" y="52" width="220" height="14" rx="3" fill="var(--ink)" opacity="0.7" />
            <rect x="110" y="74" width="180" height="6" rx="2" fill="var(--ink)" opacity="0.25" />
            <rect x="110" y="86" width="200" height="6" rx="2" fill="var(--ink)" opacity="0.25" />
            <rect x="110" y="98" width="160" height="6" rx="2" fill="var(--ink)" opacity="0.25" />
            <rect x="110" y="120" width="100" height="60" rx="4" fill={`var(--${color})`} opacity="0.22" stroke={`var(--${color})`} strokeWidth="1" />
            <rect x="220" y="120" width="100" height="60" rx="4" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1" opacity="0.6" />
          </svg>
          {artifact.annotations.map((a) => (
            <div key={a.n} className="annot-pin" style={{ left: `${a.x}%`, top: `${a.y}%` }}>
              <span className="annot-dot" style={{ background: `var(--${color})` }}>{a.n}</span>
            </div>
          ))}
        </div>
        <figcaption className="sketch-caption">{artifact.title}</figcaption>
        <ol className="annot-list">
          {artifact.annotations.map((a) => (
            <li key={a.n}>
              <span className="annot-dot inline" style={{ background: `var(--${color})` }}>{a.n}</span>
              <span>{a.text}</span>
            </li>
          ))}
        </ol>
      </figure>
    );
  }

  if (artifact.kind === "ba") {
    return (
      <figure className="art art-ba">
        <div className="ba-tile ba-before">
          <div className="ba-label">{artifact.before.label}</div>
          <div className="ba-metric">{artifact.before.metric}</div>
          <div className="ba-note">{artifact.before.note}</div>
        </div>
        <div className="ba-arrow" aria-hidden="true">→</div>
        <div className="ba-tile ba-after" style={{ borderColor: `var(--${color})` }}>
          <div className="ba-label" style={{ color: `var(--${color})` }}>{artifact.after.label}</div>
          <div className="ba-metric">{artifact.after.metric}</div>
          <div className="ba-note">{artifact.after.note}</div>
        </div>
        <figcaption>{artifact.caption}</figcaption>
      </figure>
    );
  }

  return null;
}

function PhaseBlock({ phase, idx, color, total }) {
  return (
    <section className="phase-block" id={`phase-${phase.key}`} data-phase={phase.key}>
      <header className="phase-head">
        <div className="phase-num">
          <span className="phase-num-n">{String(idx + 1).padStart(2, "0")}</span>
          <span className="phase-num-of">/ {String(total).padStart(2, "0")}</span>
        </div>
        <div className="phase-head-right">
          <div className="phase-eyebrow">{phase.title}</div>
          <h2 className="phase-question">{phase.question}</h2>
        </div>
      </header>

      <div className="phase-body">
        <div className="phase-main">
          {phase.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          {phase.decision && (
            <div className="decision-callout" style={{ borderLeftColor: `var(--${color})` }}>
              <div className="dc-eyebrow">The decision</div>
              <p className="dc-line">
                We chose <strong>{phase.decision.chose}</strong> over <span className="dc-over">{phase.decision.over}</span>, because {phase.decision.because}
              </p>
              <div className="dc-tradeoff">
                <span className="dc-tradeoff-tag">Tradeoff</span>
                <span>{phase.decision.tradeoff}</span>
              </div>
            </div>
          )}

          <PhaseArtifact artifact={phase.artifact} color={color} />
        </div>

        <aside className="phase-aside">
          <div className="persona-card" style={{ "--accent": `var(--${color})` }}>
            <div className="persona-eyebrow">At this point</div>
            <div className="persona-id">
              <div className="persona-avatar" style={{ background: `var(--${color})` }}>
                {phase.persona.name[0]}
              </div>
              <div>
                <div className="persona-name">{phase.persona.name}</div>
                <div className="persona-role">{phase.persona.role}</div>
              </div>
            </div>
            <div className="persona-field">
              <div className="persona-field-label">Where they are</div>
              <p>{phase.persona.state}</p>
            </div>
            <div className="persona-field">
              <div className="persona-field-label">What they need</div>
              <p>{phase.persona.need}</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function ProjectDetail({ id, onBack, onNext }) {
  const p = PROJECTS.find((x) => x.n === id) || PROJECTS[0];
  const next = PROJECTS[(PROJECTS.findIndex((x) => x.n === p.n) + 1) % PROJECTS.length];
  const phases = PHASES[p.n] || [];

  return (
    <div className="detail-layout">
      <div className="detail-main">
        <a className="detail-back" onClick={onBack} style={{ cursor: "pointer" }}>← Back to all work</a>

        <div className="detail-hero" style={{ background: `var(--${p.color})`, color: p.color === "mustard" ? "var(--ink)" : "var(--paper)" }}>
          <div className="num-big">{p.n}</div>
          <div className="meta-row">
            <span className="pill">{p.company}</span>
            <span>{p.year}</span>
            <span>·</span>
            <span>{p.role}</span>
          </div>
          <h1>{p.title}</h1>
          <p className="lede">{p.summary}</p>
        </div>

        <div className="detail-stats">
          <div className="detail-stat"><div className="l">Outcome</div><div className="v"><em>{p.metric}</em></div><div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 4 }}>{p.metricLabel}</div></div>
          <div className="detail-stat"><div className="l">Timeline</div><div className="v">{p.timeline}</div></div>
          <div className="detail-stat"><div className="l">Team</div><div className="v" style={{ fontSize: 17 }}>{p.team}</div></div>
          <div className="detail-stat"><div className="l">My role</div><div className="v" style={{ fontSize: 17 }}>{p.role}</div></div>
        </div>

        <nav className="phase-rail" aria-label="Project phases">
          {phases.map((ph, i) => (
            <a key={ph.key} href={`#phase-${ph.key}`} className="phase-rail-item">
              <span className="phase-rail-n">{String(i + 1).padStart(2, "0")}</span>
              <span className="phase-rail-t">{ph.title}</span>
            </a>
          ))}
        </nav>

        <div className="phases">
          {phases.map((ph, i) => (
            <PhaseBlock key={ph.key} phase={ph} idx={i} total={phases.length} color={p.color} />
          ))}
        </div>

        <div className="next-project" onClick={() => onNext(next.n)} style={{ cursor: "pointer" }}>
          <div>
            <div className="label">Next project</div>
            <div className="title">{next.title}</div>
          </div>
          <div className="arrow">→</div>
        </div>
      </div>
    </div>
  );
}
