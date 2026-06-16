import { useState } from 'react';
import './CareCompass.css';  // shared base
import './HomeDepot.css';    // tab modal styles
import './NaturalDisaster.css';

function Placeholder({ hint }) {
  return <span className="cs-placeholder">[{hint}]</span>;
}

function PlaceholderBlock({ hint }) {
  return <span className="cs-placeholder-block">[{hint}]</span>;
}

const TABS = [
  { id: 'recruiter',  label: 'Recruiter' },
  { id: 'hiring',     label: 'Hiring Manager' },
  { id: 'designer',   label: 'Designer' },
  { id: 'pm',         label: 'Product Manager' },
  { id: 'leadership', label: 'Leadership' },
];

const TAB_CONTENT = {
  hiring: [
    { text: <><strong>Problem:</strong> <Placeholder hint="1-sentence framing of the crisis UX problem for a hiring manager — lead with human stakes and scope" /></> },
    { text: <><strong>Method:</strong> 6-method research suite (contextual inquiry through moderated usability testing with n=18), anchored by statistical validation.</> },
    { text: <><strong>Result:</strong> p&lt;0.001 statistical significance. <Placeholder hint="add the specific metric that was validated — task completion, error rate, time-on-task" /></> },
    { text: <><strong>Signal:</strong> <Placeholder hint="what this project demonstrates about your research rigor — the hiring manager subtext" /></> },
  ],
  recruiter: [
    { text: <><strong>Role:</strong> Lead UX Researcher &amp; Designer. Solo research project. Academic setting, published outcome.</> },
    { text: <><strong>Skills demonstrated:</strong> <Placeholder hint="5–6 skills — mixed methods research, statistical analysis, crisis UX, information architecture, usability testing, Python data analysis" /></> },
    { text: <><strong>Keywords:</strong> <Placeholder hint="screening-relevant terms — academic research, peer-reviewed, mixed methods, statistical significance, crisis design, usability testing" /></> },
    { text: <><strong>Publication status:</strong> <Placeholder hint="confirm publication venue and status for recruiter screening" /></> },
  ],
  designer: [
    { text: <><strong>The constraint:</strong> You can't observe a disaster. Every methodological choice in this project is an answer to that one epistemological problem.</> },
    { text: <><strong>Hardest decision:</strong> <Placeholder hint="the most difficult design tradeoff — what you optimized for under simulated stress conditions" /></> },
    { text: <><strong>Most surprising finding:</strong> <Placeholder hint="the research result that surprised you — what you thought would be a problem vs. what the data showed" /></> },
    { text: <><strong>What I'd do differently:</strong> <Placeholder hint="the methodological limitation you'd fix with real community access" /></> },
  ],
  pm: [
    { text: <><strong>Problem frame:</strong> <Placeholder hint="1-sentence problem statement a PM would use — what's broken, who's affected, what's the cost" /></> },
    { text: <><strong>Validated hypothesis:</strong> <Placeholder hint="the specific design hypothesis that p<0.001 confirmed" /></> },
    { text: <><strong>IA change:</strong> <Placeholder hint="what card sorting + tree testing changed about the information architecture — the structural decision with the most impact" /></> },
    { text: <><strong>What's next:</strong> <Placeholder hint="what v2 would test or build on" /></> },
  ],
  leadership: [
    { text: <><strong>Method 01 — Contextual inquiry:</strong> Hypothesis: <Placeholder hint="what you were testing" />. Finding: <Placeholder hint="what it revealed" />.</> },
    { text: <><strong>Method 02 — Competitive analysis:</strong> Hypothesis: <Placeholder hint="what you were evaluating" />. Finding: <Placeholder hint="what it revealed" />.</> },
    { text: <><strong>Method 03 — Heuristic evaluation:</strong> Hypothesis: <Placeholder hint="which heuristics were targeted" />. Finding: <Placeholder hint="severity ratings, pattern found" />.</> },
    { text: <><strong>Method 04 — Card sorting:</strong> Hypothesis: <Placeholder hint="what IA assumption you were testing" />. Finding: <Placeholder hint="what groupings emerged, what changed" />.</> },
    { text: <><strong>Method 05 — Tree testing:</strong> Hypothesis: <Placeholder hint="navigation hypothesis" />. Finding: <Placeholder hint="success rate, what failed" />.</> },
    { text: <><strong>Method 06 — Moderated usability testing (n=18):</strong> Hypothesis: <Placeholder hint="primary usability hypothesis" />. Statistical result: p&lt;0.001. <Placeholder hint="specific metric and what it measured" />.</> },
  ],
};

function NdTldrModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('recruiter');
  const items = TAB_CONTENT[activeTab];

  return (
    <div className="cs-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="cs-modal" role="dialog" aria-modal="true" aria-labelledby="nd-tldr-title">
        <button className="cs-modal-close" onClick={onClose} aria-label="Close">✕</button>
        <h2 id="nd-tldr-title">TL;DR</h2>
        <p className="cs-modal-sub">Natural Disaster Evacuation App · 2023–2024 · Published</p>

        <div className="hd-modal-tabs" role="tablist">
          {TABS.map(t => (
            <button
              key={t.id}
              role="tab"
              aria-selected={activeTab === t.id}
              className={`hd-modal-tab${activeTab === t.id ? ' active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="hd-modal-panel" role="tabpanel">
          {items.map((item, i) => (
            <div key={i} className="hd-modal-panel-item">
              <div className="hd-modal-panel-dot" />
              <p className="hd-modal-panel-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const METHODS = [
  {
    n: '01',
    name: 'Contextual Inquiry',
    gap: 'We needed to understand how people actually behave before and during disasters — not what they say they do.',
    finding: <Placeholder hint="What did contextual inquiry reveal about real crisis behavior or mental models that desk research couldn't?" />,
    stat: null,
  },
  {
    n: '02',
    name: 'Competitive Analysis',
    gap: 'We needed a baseline — what do existing disaster apps get right, and what do they consistently fail at?',
    finding: <Placeholder hint="Key finding from competitive analysis — the pattern across existing apps that informed your differentiation." />,
    stat: null,
  },
  {
    n: '03',
    name: 'Heuristic Evaluation',
    gap: 'We needed to systematically audit our early concepts against established usability principles before testing with users.',
    finding: <Placeholder hint="Most significant heuristic violation found — what severity rating, which heuristic, what it meant for the design." />,
    stat: null,
  },
  {
    n: '04',
    name: 'Card Sorting',
    gap: 'We needed to validate our IA assumptions without projecting our own mental models onto the structure.',
    finding: <Placeholder hint="What the card sorting revealed — what groupings emerged, what assumption was wrong, what changed in the architecture." />,
    stat: null,
  },
  {
    n: '05',
    name: 'Tree Testing',
    gap: 'We needed to test the revised IA in isolation — before adding visual design — to validate navigation logic.',
    finding: <Placeholder hint="Tree testing results — success rate on key tasks, what failed, what was restructured as a result." />,
    stat: null,
  },
  {
    n: '06',
    name: 'Moderated Usability Testing',
    gap: 'We needed to validate the complete design under simulated stress conditions with real participants.',
    finding: <Placeholder hint="What moderated testing revealed — the specific behaviors, errors, or moments that confirmed or challenged the design." />,
    stat: 'n=18 · p<0.001',
    featured: true,
  },
];

export function NaturalDisaster({ onBack, onNext }) {
  const [tldrOpen, setTldrOpen] = useState(false);

  return (
    <>
      {tldrOpen && <NdTldrModal onClose={() => setTldrOpen(false)} />}

      {/* ── Back nav ── */}
      <div style={{ maxWidth: 'var(--grid)', margin: '0 auto', padding: '32px 32px 0' }}>
        <button className="detail-back" onClick={onBack}>← All work</button>
      </div>

      {/* ── Film epigraph ── */}
      <div className="cs-epigraph">
        <blockquote>
          "When the storm arrives, the design either works or it doesn't."
        </blockquote>
      </div>

      {/* ══ HERO ══ */}
      <div className="cs-hero nd-hero">
        <div style={{ background: '#0A1828', marginTop: 24 }}>
          <div className="cs-hero-inner">
            <div className="cs-wordmark">
              Natural Disaster<br />
              <span>Evacuation App</span>
            </div>

            <p className="cs-tagline">
              Academic Research · 2023–2024 · Published
            </p>

            <button className="cs-tldr-btn" onClick={() => setTldrOpen(true)}>
              <span>⚡</span> TL;DR — read this in 60 seconds
            </button>

            <div className="cs-stats">
              <div className="cs-stat-item">
                <div className="cs-stat-n">p&lt;0.001</div>
                <div className="cs-stat-l">Statistical significance</div>
              </div>
              <div className="cs-stat-item">
                <div className="cs-stat-n">n=18</div>
                <div className="cs-stat-l">Usability participants</div>
              </div>
              <div className="cs-stat-item">
                <div className="cs-stat-n">6</div>
                <div className="cs-stat-l">Research methods</div>
              </div>
              <div className="cs-stat-item">
                <div className="cs-stat-n">Pub.</div>
                <div className="cs-stat-l">Research status</div>
              </div>
            </div>

            <div className="cs-hero-tags">
              {["Crisis UX", "Research-led", "0→1", "Academic Research"].map(t => (
                <span className="cs-hero-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══ A. PROBLEM ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">A. Problem</div>
          <h2 className="cs-headline">Crisis apps fail when people need them most — and nobody talks about why.</h2>
          <div className="cs-body-text">
            <p>
              <PlaceholderBlock hint="Describe the crisis scenario — what specific disaster context did you design for? What happens when someone reaches for their phone during an evacuation and the app fails them? Be concrete." />
            </p>
            <p>
              <PlaceholderBlock hint="Name the gap: current disaster apps are designed under what conditions, but used under what conditions? What's the mismatch between design context and use context?" />
            </p>
          </div>

          <div className="nd-stakes">
            <div className="nd-stakes-eyebrow">Human cost of bad crisis UX</div>
            <p className="nd-stakes-text">
              <Placeholder hint="A specific, concrete statement about what's at stake — not 'people might get confused' but the actual human outcome when a crisis app fails. Should be vivid enough that a reader feels it." />
            </p>
          </div>

          <div className="hd-scenario" style={{ marginTop: 24 }}>
            <div className="hd-scenario-eyebrow">Scenario — emergency in progress</div>
            <p className="hd-scenario-body">
              <Placeholder hint="The moment the app fails during an actual emergency. Specific enough that someone who's been in a disaster would nod. 2–3 sentences, present tense." />
            </p>
            <p className="hd-scenario-note">
              <Placeholder hint="Context — 'Drawn from contextual inquiry + [N] interviews with people who experienced [disaster type]'" />
            </p>
          </div>
        </div>
      </section>

      {/* ══ B. RESEARCH CHALLENGE ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">B. Research challenge</div>
          <h2 className="cs-headline">You can't observe a disaster. So we built a methodology around that constraint.</h2>
          <div className="cs-body-text">
            <p>
              <PlaceholderBlock hint="Why did this research problem require a full methodology suite rather than a single method? What's the epistemological challenge — what can you never directly observe, and what does that mean for how you gather evidence?" />
            </p>
            <p>
              <PlaceholderBlock hint="How did the 6-method sequence solve the constraint? How did the methods build on each other — what did early methods reveal that shaped later ones?" />
            </p>
          </div>

          <div className="nd-challenge">
            <div className="nd-challenge-eyebrow">Core research design problem</div>
            <p className="nd-challenge-text">
              <Placeholder hint="One sentence naming the central methodological constraint — the thing that made this research hard to do correctly." />
            </p>
          </div>
        </div>
      </section>

      {/* ══ C. METHODOLOGY ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">C. Methodology</div>
          <h2 className="cs-headline">Six methods. Each one filling a gap the others couldn't.</h2>
          <div className="cs-body-text">
            <p>
              <PlaceholderBlock hint="Brief framing of the sequence — how do the 6 methods form a coherent arc from 'understanding the problem space' through 'validating the solution'? 2–3 sentences." />
            </p>
          </div>

          <div className="nd-method-grid">
            {METHODS.map((m) => (
              <div key={m.n} className={`nd-method-card${m.featured ? ' featured' : ''}`}>
                <div className="nd-method-num">METHOD {m.n}</div>
                <h3 className="nd-method-name">{m.name}</h3>
                <p className="nd-method-gap">{m.gap}</p>
                <p className="nd-method-finding">{m.finding}</p>
                {m.stat && <div className="nd-method-stat">{m.stat}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ D. DESIGN ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">D. Design</div>
          <h2 className="cs-headline">Designing for fractured attention, not focused users.</h2>
          <div className="cs-body-text">
            <p>
              <PlaceholderBlock hint="What does 'designing for fractured attention' mean in practice? What specific design decisions came from that principle — what did you remove, simplify, or restructure because of it?" />
            </p>
            <p>
              <PlaceholderBlock hint="What's most different about this app compared to existing disaster apps? What did the research reveal that current apps consistently get wrong?" />
            </p>
          </div>

          <div className="cs-feature-grid" style={{ marginTop: 32 }}>
            <div className="cs-feature-card">
              <h3 className="cs-feature-name">
                <Placeholder hint="Design decision 1 name — a short label for the key design choice" />
              </h3>
              <p className="cs-feature-desc">
                <Placeholder hint="What is this decision? What does it mean for the user?" />
              </p>
              <div className="cs-feature-rationale">
                Research grounding: <Placeholder hint="which method surfaced the need for this decision?" />
              </div>
            </div>
            <div className="cs-feature-card">
              <h3 className="cs-feature-name">
                <Placeholder hint="Design decision 2 name" />
              </h3>
              <p className="cs-feature-desc">
                <Placeholder hint="What is this decision? What does it mean for the user?" />
              </p>
              <div className="cs-feature-rationale">
                Research grounding: <Placeholder hint="which method surfaced the need for this decision?" />
              </div>
            </div>
            <div className="cs-feature-card">
              <h3 className="cs-feature-name">IA restructure</h3>
              <p className="cs-feature-desc">
                <Placeholder hint="What changed in the information architecture as a result of card sorting and tree testing? Be specific — what was in the wrong place, and where did it move?" />
              </p>
              <div className="cs-feature-rationale">
                Research grounding: Card sorting (method 04) + tree testing (method 05). <Placeholder hint="success rate or specific finding" />
              </div>
            </div>
            <div className="cs-feature-card">
              <h3 className="cs-feature-name">
                <Placeholder hint="Design decision 4 name — optional, remove this card if you only have 3 key decisions" />
              </h3>
              <p className="cs-feature-desc">
                <Placeholder hint="What is this decision? What does it mean for the user?" />
              </p>
              <div className="cs-feature-rationale">
                Research grounding: <Placeholder hint="which method surfaced the need for this decision?" />
              </div>
            </div>
          </div>

          <div className="cs-figma-placeholder" style={{ marginTop: 40 }}>
            Figma screens / flows — add when ready
          </div>
        </div>
      </section>

      {/* ══ E. VALIDATION ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">E. Validation</div>
          <h2 className="cs-headline">p&lt;0.001. The design didn't just feel better. It was measurably better.</h2>

          <div className="nd-stat-hero">
            <div className="nd-stat-hero-n">p&lt;0.001</div>
            <div className="nd-stat-hero-label">Statistical significance · n=18</div>
            <p className="nd-stat-hero-body">
              <Placeholder hint="What was measured, how it was measured, and what the result means. Include the specific hypothesis that was confirmed (e.g., 'task completion time under simulated stress conditions was significantly lower with the redesigned navigation structure'). 2–3 sentences." />
            </p>
          </div>

          <div className="nd-metric-compare">
            <div className="nd-metric-col">
              <div className="nd-metric-label">Before</div>
              <div className="nd-metric-n"><Placeholder hint="baseline metric (e.g. 4:32)" /></div>
              <div className="nd-metric-desc"><Placeholder hint="what was measured" /></div>
            </div>
            <div className="nd-metric-arrow">→</div>
            <div className="nd-metric-col after">
              <div className="nd-metric-label after">After</div>
              <div className="nd-metric-n"><Placeholder hint="improved metric (e.g. 2:14)" /></div>
              <div className="nd-metric-desc"><Placeholder hint="same metric, redesigned app" /></div>
            </div>
          </div>

          <div className="cs-body-text" style={{ marginTop: 8 }}>
            <p>
              <PlaceholderBlock hint="Describe the statistical analysis method — what test was used (Wilcoxon, t-test, etc.), what was the test criterion, what data did Python process. This is the section that proves you know what p<0.001 actually means." />
            </p>
            <p>
              <PlaceholderBlock hint="What did the statistical result confirm about the design? What would a practitioner take away from p<0.001 in this specific context?" />
            </p>
          </div>
        </div>
      </section>

      {/* ══ F. TRADEOFFS ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">F. Tradeoffs</div>
          <h2 className="cs-headline">The app we wanted to build vs. the app people could actually use under stress.</h2>
          <div className="cs-body-text">
            <p>
              <PlaceholderBlock hint="Set up the tradeoff. What did you design that broke under simulated stress — what was the usability test moment that forced a simplification?" />
            </p>
          </div>

          <div style={{ marginTop: 28 }}>
            <div className="cs-tradeoff-badge">⚖ Tradeoff</div>
            <div className="cs-tradeoffs-grid">
              <div className="cs-tradeoff-col considered">
                <div className="cs-tradeoff-label">Designed first</div>
                <h4 className="cs-tradeoff-title">
                  <Placeholder hint="Name the approach that broke under stress" />
                </h4>
                <p className="cs-tradeoff-body">
                  <Placeholder hint="What did you design originally? Why did it seem like the right call? What happened during usability testing that showed it didn't hold up under simulated crisis conditions?" />
                </p>
              </div>
              <div className="cs-tradeoff-col shipped">
                <div className="cs-tradeoff-label shipped">What shipped</div>
                <h4 className="cs-tradeoff-title">
                  <Placeholder hint="Name the simplified version that held up" />
                </h4>
                <p className="cs-tradeoff-body">
                  <Placeholder hint="What replaced it? What did you give up, and why was that acceptable given the use context? What did simplifying gain you in terms of performance under stress?" />
                </p>
              </div>
            </div>
            <div className="cs-decision-rationale">
              <strong>Why the simpler pattern:</strong>{' '}
              <Placeholder hint="The specific usability testing finding that drove this — 'under simulated stress, [X% of participants] [did X], which showed us that [the more complex pattern] required [cognitive load] that wasn't available in a crisis context.'" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ G. OUTCOMES ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">G. Outcomes</div>
          <h2 className="cs-headline">What happened when real people used it — and where it went after.</h2>
          <div className="cs-body-text">
            <p>
              <PlaceholderBlock hint="Frame the results narrative — what did participants experience in testing? Any memorable moments from the moderated sessions that the quantitative data doesn't capture?" />
            </p>
          </div>

          <div className="cs-metrics">
            <div className="cs-metric">
              <div className="cs-metric-n"><Placeholder hint="metric" /></div>
              <div className="cs-metric-l"><Placeholder hint="what it measures" /></div>
            </div>
            <div className="cs-metric">
              <div className="cs-metric-n"><Placeholder hint="metric" /></div>
              <div className="cs-metric-l"><Placeholder hint="what it measures" /></div>
            </div>
            <div className="cs-metric">
              <div className="cs-metric-n">p&lt;0.001</div>
              <div className="cs-metric-l">Statistical significance<br />n=18 participants</div>
            </div>
          </div>

          <div className="cs-body-text" style={{ marginTop: 8 }}>
            <p>
              <PlaceholderBlock hint="What happened after the research was complete? What was the publication process, how did the work get submitted, who reviewed it?" />
            </p>
          </div>

          <div className="nd-publication">
            <div className="nd-publication-header">
              <span className="nd-publication-eyebrow">Research published</span>
              <span className="nd-publication-badge">Published</span>
            </div>
            <div className="nd-publication-body">
              <div className="nd-publication-item">
                <p className="nd-publication-item-text">
                  <Placeholder hint="Publication title or description — journal name, conference, or venue. Add year and link if available." />
                  <br /><em><Placeholder hint="Author(s) — your name + any co-authors, year" /></em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ H. REFLECTION ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">H. Reflection</div>
          <h2 className="cs-headline">What I'd do differently.</h2>
          <div className="cs-body-text">
            <p>
              <PlaceholderBlock hint="One honest paragraph. The specific methodological limitation you'd fix with real crisis community access — who would you have recruited, what scenario would you have been able to run, what assumption would you have been able to validate that you had to approximate instead? This is the paragraph that shows methodological self-awareness." />
            </p>
            <p>
              <PlaceholderBlock hint="Optional: what question does this project leave open? What would a follow-up study investigate?" />
            </p>
          </div>
        </div>
      </section>

      {/* ══ NEXT PROJECT ══ */}
      <div className="cs-inner" style={{ paddingBottom: 96 }}>
        <div className="next-project" style={{ cursor: 'pointer' }} onClick={onNext}>
          <div className="next-label">Next project</div>
          <div className="title">Making magic invisible — for 25 million guests</div>
          <div className="meta">Universal Destinations &amp; Experiences · 2023–2024 · Consumer · IoT · Shipped</div>
          <div className="arrow">→</div>
        </div>
      </div>
    </>
  );
}
