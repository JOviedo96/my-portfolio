import { PROJECTS } from '../data/projects.js';
import { CoverArt } from '../components/CoverArt.jsx';
import { Marquee } from '../components/Marquee.jsx';
import { Star } from '../components/icons.jsx';
import ccCover from '../assets/cc-cover.png';
import hdCover from '../assets/hd-cover.png';
import wandsCover from '../assets/wands-cover.png';

const COVER_IMAGES = {
  "01": ccCover,
  "02": hdCover,
  "04": wandsCover,
};

function HeroCard() {
  return (
    <div className="hero-card">
      <div className="hero-card-row">
        <div className="hero-card-avatar">J</div>
        <div>
          <h3>Jamie Oviedo</h3>
          <div className="role">Product Designer</div>
        </div>
      </div>
      <div className="hero-testimonial">
        <blockquote className="hero-testimonial-quote">
          She combines strategic thinking with strong execution and consistently elevates the work around her.
        </blockquote>
        <div className="hero-testimonial-attr">
          <span>Chris · Senior Designer · Former colleague</span>
          <a href="https://www.linkedin.com/in/jamie-oviedo/" target="_blank" rel="noopener noreferrer" className="hero-testimonial-link">via LinkedIn ↗</a>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project: p }) {
  const coverImg = COVER_IMAGES[p.n];
  const coverStyle = p.coverBg
    ? { background: p.coverBg, color: 'var(--paper)' }
    : undefined;

  return (
    <a id={`project-${p.n}`} className="card" data-c={p.color || ""} data-project={p.n} style={{ cursor: "pointer" }}>
      <div
        className={p.coverBg ? "card-cover" : `card-cover cover-${p.color}`}
        role={coverImg ? "img" : undefined}
        aria-label={coverImg ? p.title : undefined}
        style={coverImg
          ? { backgroundImage: `url(${coverImg})`, backgroundSize: 'cover', backgroundPosition: 'center top' }
          : coverStyle}
      >
        {coverImg ? null : <CoverArt kind={p.cover} />}
      </div>
      <div className="card-body">
        <div className="card-meta">
          <span className="company">{p.company}</span>
          {p.year && <span>{p.year}</span>}
          <span>{p.role}</span>
        </div>
        <h3 className="card-title">{p.title}</h3>
        <div className="card-summary">{p.summary}</div>
      </div>
      <div className="card-stats">
        <div className="stat">
          <span className="stat-label">{p.outcomeLabel}</span>
          <span className="stat-value metric"><em>{p.metric}</em></span>
          <span style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 2 }}>{p.metricLabel}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Timeline · Team</span>
          <span className="stat-value" style={{ fontSize: 13 }}>{p.timeline} · {p.team}</span>
        </div>
      </div>
      <div className="card-tags">
        <div className="card-arrow">→</div>
        <div className="tags-row">
          {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>
      </div>
    </a>
  );
}

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div>
            <h1>
              Hi. I design products that <span className="star--mobile"><Star className="star" /></span>make <span className="ital">complicated</span>
              <span className="star--desktop"><Star className="star" /></span>
              <br />
              things feel simple.
            </h1>
            <p className="hero-sub">
              Research that drives decisions. Human-centered AI that earns trust. Just enough code to be dangerous.
            </p>
          </div>

          <HeroCard />
        </div>
      </section>

      <Marquee />

      <section className="work">
        <div className="work-head">
          <h2>Three projects, <em>written for skimmers.</em></h2>
        </div>
        <div className="cards">
          {PROJECTS.map((p) => <ProjectCard key={p.n} project={p} />)}
        </div>
      </section>
    </>
  );
}
