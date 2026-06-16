import { useState } from 'react';
import './CareCompass.css';
import './HomeDepot.css';
import './Wands.css';
import meWithWands from '../assets/me-with-wands.jpeg';
import meInPark from '../assets/me-in-park.png';
import mapScreen from '../assets/interactive-spell-adventure-map.png';
import spellLocationScreen from '../assets/spell-location-details.png';
import adventureDetailsScreen from '../assets/adventure-details.png';
import collectionsScreen from '../assets/collections-display.png';
import settingsScreen from '../assets/settings.png';

const TABS = [
  { id: 'recruiter',  label: 'Recruiter' },
  { id: 'hiring',     label: 'Hiring Manager' },
  { id: 'designer',   label: 'Designer' },
  { id: 'pm',         label: 'Product Manager' },
  { id: 'leadership', label: 'Leadership' },
];

const TAB_CONTENT = {
  recruiter: [
    { text: <><strong>Role:</strong> UX Design Intern · Universal Destinations &amp; Experiences · Aug 2023–Apr 2024. Contributed interaction design and information architecture to Interactive Wands 2.0 within the Universal Play product team.</> },
    { text: <><strong>Skills demonstrated:</strong> Consumer UX · Interaction design · Information architecture · Physical-digital (IoT) design · Usability testing · IP-constrained design · Figma production specs · Cross-functional collaboration (engineering, brand, PM, IP stakeholders)</> },
    { text: <><strong>Scale &amp; status:</strong> Live shipped product serving 25–30M annual park guests across Wizarding World and Epic Universe. National news coverage at launch. Shipped March 2025.</> },
    { text: <><strong>Note:</strong> Internal design artifacts are NDA-protected. The live product (observable in the Universal Orlando Resort app) is the primary artifact. Happy to walk through design thinking in a conversation.</> },
  ],
  hiring: [
    { text: <><strong>What I built:</strong> Interaction design and information architecture for Universal Play: spell-casting mechanics at in-park locations, map navigation and wayfinding, achievement display and collections architecture, and IP-aligned UI and iconography across the experience.</> },
    { text: <><strong>The real design challenge:</strong> Every interaction had to feel native to the Wizarding World before it was usable. If it doesn't feel like magic, it doesn't ship. Designing for emotional resonance and functional clarity simultaneously, in a physical context, with non-negotiable IP constraints.</> },
    { text: <><strong>Context of use:</strong> Florida sun, crowds of thousands, a phone in one hand and a wand in the other. Guests spanning 7-year-olds to grandparents to adult HP superfans. No onboarding. No second chances on the first spell.</> },
    { text: <><strong>Status:</strong> Live in parks across Epic Universe and Wizarding World, March 2025. The accessibility configuration I'm most proud of is observable in the live product today.</> },
  ],
  designer: [
    { text: <><strong>The constraint that shaped everything:</strong> Every interaction had to pass the Wizarding World test before the usability test. If it doesn't feel like it belongs in the world J.K. Rowling built, it doesn't ship, regardless of how clean the UX is.</> },
    { text: <><strong>Hardest design problem:</strong> Designing for simultaneous users with radically different profiles: a 7-year-old, their grandparent, an adult HP superfan, an international visitor. Same product, same session, Florida sun, one free hand. No adaptive onboarding. No tutorials.</> },
    { text: <><strong>What I'm most proud of shipping:</strong> Accessibility configuration for reduced gesture accuracy, not a compromise, the correct answer. Every guest should be able to cast their first spell regardless of age, motor ability, or wand-holding technique. It's in the live product and it works.</> },
    { text: <><strong>What this taught:</strong> Success in entertainment UX is a memory, not a task completion. The metric isn't error rate or time-on-task; it's whether the child's face changes when the wand lights up. Designing for emotion vs. efficiency requires completely different intuitions.</> },
  ],
  pm: [
    { text: <><strong>The problem:</strong> Gen 1 wands had no progression. Cast all the spells, and the wand became a souvenir. No persistent identity, no reason to return, no through-line across multiple visits or parks.</> },
    { text: <><strong>What Gen 2 introduced:</strong> Wizarding Profile (house · Patronus · avatar), achievement unlocks, cross-park leaderboard, multi-location storylines, transforming a one-time purchase into an ongoing guest engagement mechanic across the entire resort.</> },
    { text: <><strong>Accessibility scope:</strong> Reduced gesture accuracy setting, ensuring the experience was available to guests regardless of age, motor ability, or physical context. Shipped as a first-party settings feature, not an afterthought.</> },
    { text: <><strong>Outcome:</strong> Live in parks, Epic Universe and Wizarding World, March 2025. National press coverage at launch. Shipped alongside the Epic Universe opening, the largest Universal park launch in decades.</> },
  ],
  leadership: [
    { text: <><strong>The product:</strong> Universal Play within the Universal Orlando Resort app, the digital companion connecting physical Gen 2 wands to a persistent magical journey. Wizarding Profile, spell-casting mechanics, achievements, and cross-park storylines.</> },
    { text: <><strong>Scale:</strong> 25–30M annual park visitors across Wizarding World and the new Epic Universe. Physical-digital IoT at consumer entertainment scale. Shipped March 2025 alongside the Epic Universe launch.</> },
    { text: <><strong>Business differentiation:</strong> Gen 2 transforms a one-time souvenir purchase into an ongoing engagement mechanic across the resort. Persistent identity, progression, and cross-park rewards give guests a reason to return and a story to continue with every visit.</> },
    { text: <><strong>Reach:</strong> National news coverage at launch. Live product observable in the Universal Orlando Resort app. Accessibility configuration ensures the experience is available to guests across the full range of ages and abilities.</> },
  ],
};

function WandsTldrModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('recruiter');
  const items = TAB_CONTENT[activeTab];

  return (
    <div className="cs-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="cs-modal" role="dialog" aria-modal="true" aria-labelledby="wands-tldr-title">
        <button className="cs-modal-close" onClick={onClose} aria-label="Close">✕</button>
        <h2 id="wands-tldr-title">TL;DR</h2>
        <p className="cs-modal-sub">Wands 2.0 · Universal Destinations &amp; Experiences · Shipped March 2025</p>

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

const CONTEXT_CARDS = [
  {
    icon: '◈',
    title: 'IP Constraint',
    body: "Every interaction has to pass the Wizarding World test before the usability test. If it doesn't feel like it belongs in the world J.K. Rowling built, it doesn't ship, regardless of how clean the UX is.",
  },
  {
    icon: '◉',
    title: 'The Environment',
    body: 'Florida sun. Crowds of thousands. Noise, excitement, kids on shoulders. Phone in one hand, wand in the other. No room to onboard. No second chances on the first spell.',
  },
  {
    icon: '✦',
    title: 'The Audience',
    body: "A 7-year-old first-time visitor. Their grandparent. An adult HP superfan. An international family. All using the same product, at the same time, in the same place, simultaneously.",
  },
  {
    icon: '★',
    title: 'The Emotional Stakes',
    body: "For some guests, this is a pilgrimage. They've been planning for years. The first spell isn't a UX moment; it's a memory. Getting it wrong is felt.",
  },
];

const PROBLEM_CARDS = [
  {
    eyebrow: '01',
    title: 'Depth Problem',
    body: "Gen 1 wands were a one-time experience. Cast all the spells and the wand became a souvenir. No progression, no persistent identity, no reason to come back.",
  },
  {
    eyebrow: '02',
    title: 'Connection Problem',
    body: "No persistent guest identity across visits. Every experience started from zero. The wand didn't know you: your house, your Patronus, your history in the Wizarding World.",
  },
  {
    eyebrow: '03',
    title: 'Physical Gap',
    body: "A digital product operating in a physical context with variable connectivity. Spell-casting happens at specific locations. Guests are moving. The session is ambient, not explicit.",
  },
];

const SCREENS = [
  { n: '01', title: 'Interactive Spell & Adventure Map', img: mapScreen },
  { n: '02', title: 'Spell Location Details', img: spellLocationScreen },
  { n: '03', title: 'Adventure Details', img: adventureDetailsScreen },
  { n: '04', title: 'Collections Display', img: collectionsScreen },
  { n: '05', title: 'Accessibility Settings', img: settingsScreen },
];

export function Wands({ onBack }) {
  const [tldrOpen, setTldrOpen] = useState(false);

  return (
    <>
      {tldrOpen && <WandsTldrModal onClose={() => setTldrOpen(false)} />}

      {/* ══ HERO ══ */}
      <div className="cs-hero wands-hero wands-hero-flush">
        <div style={{ background: '#141830' }}>
          <div className="cs-hero-inner">
            <button className="detail-back" onClick={onBack}>← All work</button>

            <div className="wands-company-badge">
              Universal Destinations &amp; Experiences · UX Design Intern · 2023–2024
            </div>

            <div className="cs-wordmark">
              Wands 2.0 / <span>Extending the Magic</span>
            </div>

            <p className="cs-hero-sub">
              Designing the digital layer that connects physical Gen 2 wands to a persistent wizarding journey across three parks, for 25 million guests per year.
            </p>

            <div className="cs-stats">
              <div className="cs-stat-item">
                <div className="cs-stat-n">Live</div>
                <div className="cs-stat-l">Shipped Mar 2025</div>
              </div>
              <div className="cs-stat-item">
                <div className="cs-stat-n">25–30M</div>
                <div className="cs-stat-l">Est. annual park guests</div>
              </div>
              <div className="cs-stat-item">
                <div className="cs-stat-n">3 Parks</div>
                <div className="cs-stat-l">Wizarding World + Epic Universe</div>
              </div>
              <div className="cs-stat-item">
                <div className="cs-stat-n">Gen 2</div>
                <div className="cs-stat-l">Haptics · lights · app integration</div>
              </div>
            </div>

            <div className="cs-hero-tags">
              {['Consumer UX', 'Interaction Design', 'Gamification', 'Information Architecture'].map(t => (
                <span className="cs-hero-tag" key={t}>{t}</span>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, marginTop: 32 }}>
              <div className="wands-nda">
                <span className="wands-nda-badge">NDA</span>
                <p className="wands-nda-text">
                  Internal design artifacts are protected by NDA. What I can share: the live shipped product, my specific contributions, and the design thinking behind them. The experience is the artifact.
                </p>
              </div>
              <button className="cs-tldr-btn" style={{ flexShrink: 0 }} onClick={() => setTldrOpen(true)}>
                Read the TL;DR
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ══ 01 — OVERVIEW ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="wands-reflection-row">
            <div className="wands-reflection-left">
              <div className="cs-section-label">Overview</div>
              <h2 className="cs-headline">The wand got guests in the door once. The app had to bring them back.</h2>
              <div className="cs-body-text">
                <p>
                  Interactive Wands at Universal Studios started as a one-time experience. You bought the wand, you cast the spells, and when you'd cast them all the magic was done, until your next visit, which started from scratch. Gen 2 changed the premise: haptic feedback, wand illumination, and deep app integration that could turn a single purchase into an ongoing journey through the Wizarding World across three parks.
                </p>
                <p>
                  I joined the Universal Play team as a UX Design Intern in August 2023 and contributed interaction design and information architecture to the digital layer connecting physical wands to the app: spell-casting mechanics at in-park locations, navigation and wayfinding within the map experience, achievement display and collections architecture, and IP-aligned UI and iconography throughout.
                </p>
              </div>
            </div>
            <div className="wands-reflection-photo">
              <img src={meInPark} alt="Jamie casting a spell with a wand at Universal Studios" className="wands-reflection-img" />
            </div>
          </div>

          <div className="wands-nda-box">
            <div className="wands-nda-box-title">NDA scope: what this case study can and can't show</div>
            <div className="wands-nda-box-cols">
              <div>
                <div className="wands-nda-col-head can">Can share</div>
                {[
                  'Live shipped product (observable in the Universal Orlando Resort app)',
                  'My specific design contributions and the thinking behind them',
                  'Design process, decisions, and tradeoffs (available in conversation)',
                  'Press coverage and public product information',
                ].map((item, i) => (
                  <div key={i} className="wands-nda-col-item">
                    <span className="mark yes">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="wands-nda-col-head cannot">Cannot share</div>
                {[
                  'Internal wireframes, prototypes, or design files',
                  'Unreleased features or product roadmap',
                  'Internal stakeholder presentations or feedback',
                  'Engineering implementation details or architecture',
                ].map((item, i) => (
                  <div key={i} className="wands-nda-col-item">
                    <span className="mark no">✗</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══ 02 — DESIGN CONTEXT ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">Design Context</div>
          <h2 className="cs-headline">Designing for a world with rules already written.</h2>
          <div className="cs-body-text">
            <p>
              The Wizarding World is one of the most IP-controlled environments in consumer entertainment. Every word, color, typeface, and interaction pattern is subject to brand approval. Designing within it means holding two success criteria simultaneously: does it feel like magic, and does it actually work?
            </p>
          </div>

          <div className="wands-context-grid">
            {CONTEXT_CARDS.map(c => (
              <div key={c.title} className="wands-context-card">
                <div className="wands-context-card-icon">{c.icon}</div>
                <h3 className="wands-context-card-title">{c.title}</h3>
                <p className="wands-context-card-body">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="wands-tension">
            <div className="wands-tension-eyebrow">Core tension</div>
            <p className="wands-tension-text">
              The product had to satisfy two masters with different success criteria: Wizarding World brand standards (feel like magic) and consumer UX standards (no friction). When they conflicted, magic had to win, but magic had to work.
            </p>
          </div>
        </div>
      </section>

      {/* ══ 03 — THE PROBLEM ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">The Problem</div>
          <h2 className="cs-headline">Extending magic beyond the first visit.</h2>
          <div className="cs-body-text">
            <p>
              Gen 1 wands were technically impressive and emotionally resonant, but the experience ended. The app had no memory of you. Your wand had no story. The second visit started exactly like the first, and the third, and every visit after. Gen 2 was the opportunity to change that.
            </p>
          </div>

          <div className="wands-problem-grid">
            {PROBLEM_CARDS.map(c => (
              <div key={c.title} className="wands-problem-card">
                <div className="wands-problem-eyebrow">{c.eyebrow}</div>
                <h3 className="wands-problem-title">{c.title}</h3>
                <p className="wands-problem-body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 04 — MY CONTRIBUTION ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">My Contribution</div>
          <h2 className="cs-headline">What I designed. And what I'm most proud of shipping.</h2>
          <div className="cs-body-text">
            <p>
              I contributed interaction design and information architecture to the Universal Play experience: spell-casting mechanics at in-park locations, map navigation and wayfinding, achievement display and collections architecture, and IP-aligned UI and iconography. The work was done within tight IP constraints, in close collaboration with engineering, product, and Wizarding World brand stakeholders.
            </p>
          </div>

          <div className="wands-contrib-list">
            <div className="wands-contrib-item">
              <div className="wands-contrib-icon">◇</div>
              <div className="wands-contrib-content">
                <h3 className="wands-contrib-title">Interaction design within IP</h3>
                <p className="wands-contrib-body">Spell-casting interactions at in-park locations designed to feel native to the Wizarding World. Every pattern approved against brand standards before it was tested against usability standards. IP-aligned UI and iconography throughout.</p>
              </div>
            </div>
            <div className="wands-contrib-item">
              <div className="wands-contrib-icon">◇</div>
              <div className="wands-contrib-content">
                <h3 className="wands-contrib-title">Information architecture</h3>
                <p className="wands-contrib-body">Navigation and wayfinding within the map experience, making it clear which direction to go, what spells or adventures to complete, and how to orient within a park. Achievement display and collections architecture designed for quick scanning and easy progression tracking.</p>
              </div>
            </div>
            <div className="wands-contrib-item">
              <div className="wands-contrib-icon">◇</div>
              <div className="wands-contrib-content">
                <h3 className="wands-contrib-title">Usability testing</h3>
                <p className="wands-contrib-body">Contributed to usability testing across the experience, validating that interactions worked in the context of actual park conditions, not just on screen.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══ 05 — THE LIVE PRODUCT ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">The Live Product</div>
          <h2 className="cs-headline">The app is the artifact. Here's what the shipped product reveals.</h2>
          <div className="cs-body-text">
            <p>
              Internal design files are NDA-protected, but the product is live. The five screens below are from the Universal Orlando Resort app, the shipped experience, observable today. Download the UOR app or visit a Wizarding World location to see the full experience.
            </p>
          </div>

          <div className="wands-screen-grid">
            {SCREENS.map(s => (
              <div key={s.n} className={`wands-screen-slot${s.img ? ' has-image' : ''}`}>
                <div className="wands-screen-slot-img">
                  {s.img
                    ? <img src={s.img} alt={s.title} className="wands-screen-slot-photo" />
                    : <><div className="wands-screen-slot-num">{s.n}</div><div className="wands-screen-slot-title">{s.title}</div></>
                  }
                </div>
                {s.note && <div className="wands-screen-slot-note">{s.note}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 06 — REFLECTION ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="wands-reflection-row">
            <div className="wands-reflection-left">
              <div className="cs-section-label">Reflection</div>
              <h2 className="cs-headline">What shipping to millions of guests in a park teaches you that a screen never could.</h2>
              <div className="cs-body-text">
                <p>
                  I went into this project thinking I understood context of use. Florida sun, crowds, a phone in one hand and a wand in the other. I'd read about designing for physical-digital environments. Designing in one is different. The park doesn't care about your information hierarchy. A seven-year-old who can't find the right spell location isn't thinking about navigation patterns. They're just disappointed.
                </p>
                <p>
                  What shifted most was my definition of 'working.' A flow that's technically correct but emotionally flat isn't working, not here. The standard isn't task completion rate. It's whether the first spell feels like magic. That's genuinely harder to design toward, and I didn't fully understand that until I was standing in Diagon Alley on day two watching it either land or not.
                </p>
              </div>
            </div>
            <div className="wands-reflection-photo">
              <img src={meWithWands} alt="Jamie at Universal holding a wand and showing the app on her phone" className="wands-reflection-img" />
            </div>
          </div>

          <div className="wands-story-box">
            <div className="wands-story-eyebrow">Nocturn Alley · Day Two · March 2025</div>
            <p className="wands-story-paragraph">
              The second day the experience was live. The park was packed from launch crowds: lines at every wand spot, guests racing to unlock house points and new storylines. I was in Nocturn Alley waiting in line at one of the spell locations when I noticed a mother and her young child ahead of me. The child was trying to cast one of the three spells at that spot, over and over, but couldn't hit the formation shape precisely enough for the spell to register. There was a team member nearby, but he was already stretched thin helping other guests pair their wands to the app.
            </p>
            <p className="wands-story-paragraph">
              My husband held my spot in line while I quietly walked up to the mother and showed her how to change the gesture accuracy configuration in the app settings. One of the features I'm most proud of the team for shipping: reduced accuracy mode, built specifically for young children and guests with motion impairments. Her child cast the spell on the next try.
            </p>
            <p className="wands-story-paragraph">
              After I finished my three spells at that location, the team member came over and asked how I already knew the experience so well on only day two. We stepped to the side into Nocturn Alley and I mentioned I was one of the designers who built the app portion of the experience. His face lit up. We spent the next thirty minutes talking: how much he and the rest of the team members loved the experience, how beautifully the app had come together, how much guests were responding to the new wand interactions.
            </p>
            <p className="wands-story-paragraph">
              That conversation, a team member who'd been on his feet for two days at launch telling me the thing we built felt right, is what I'll carry from this project. Not the press coverage. That.
            </p>
          </div>

        </div>
      </section>

      {/* ══ PORTFOLIO CLOSE ══ */}
      <div className="cs-inner">
        <div className="wands-portfolio-close">
          <p className="wands-close-text">
            That's the work. Let's talk about what's next.
          </p>
          <div className="wands-close-actions">
            <button className="wands-close-btn secondary" onClick={onBack}>
              ← Back to all work
            </button>
            <a
              href="mailto:jamie.oviedo96@gmail.com"
              className="wands-close-btn primary"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
