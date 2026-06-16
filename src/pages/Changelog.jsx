const ENTRIES = [
  {
    date: "2026-06-16",
    items: [
      { type: "Update", text: "About page portrait: photo placeholder replaced with real photo (me-with-wands.jpeg), full-bleed with cover fit and center-top crop." },
      { type: "Update", text: "Site-wide font size audit: body text minimum raised to 18px. All content text at 13px raised to 16px, 12px raised to 14px. Affected: CareCompass, HomeDepot, Wands case studies and index.css (About, Process, homepage sections)." },
    ],
  },
  {
    date: "2026-06-14",
    items: [
      { type: "Remove", text: "Page eyebrow chips removed from About and Process — navigation already communicates location." },
      { type: "Update", text: "Location updated from Saint Cloud, FL to Orlando, FL across About and Home." },
      { type: "Update", text: "Changelog tags restyled to match site chip design system: pill shape, border, box-shadow, and site color tokens." },
      { type: "Update", text: "Changelog page styling aligned with site: back button uses detail-back style, eyebrow uses page-eyebrow pill, timeline border softened to line-soft, padding and font weights normalised." },
      { type: "Update", text: "Portfolio launched entry moved into 2026-06 group — same month as the rest of the initial build." },
      { type: "Update", text: "Changelog page width expanded to match site grid (1280px). Changelog eyebrow chip removed." },
      { type: "Update", text: "Hero card testimonial: replaced stat widget with pull quote from Chris Neill (Staff Product Designer, Former Mentor) with LinkedIn attribution link." },
      { type: "Update", text: "Testimonial attribution anonymised — first name only, role generalised to Senior Designer, relationship updated to Former colleague." },
      { type: "Update", text: "Marquee banner updated: 'Design systems' and 'Healthcare UX' removed, replaced with 'Human-centered AI'; '0→1 & optimization' changed to '0→1 & ownership'." },
      { type: "Update", text: "CareCompass project card summary rewritten — leads with the patient problem, covers AI guardrails, usability testing, and frontend build." },
      { type: "Update", text: "CareCompass card headline updated: 'before the anxiety gets there first' → 'before the system loses them'." },
      { type: "Update", text: "CareCompass outcome metric updated to SUS 80.5 (usability score, round 1) — replaced 344K+ reviews analyzed." },
      { type: "Update", text: "Home Depot card tags updated: removed 'B2B', added 'Internal Tools'." },
      { type: "Update", text: "Home Depot card headline updated: 'made associates invisible' → 'set associates up to fail' → 'left associates in the dark'." },
      { type: "Update", text: "Wands 2.0 card headline updated: 'Making magic invisible — for 25 million guests' → 'Interaction design for a world that had to feel like Harry Potter'." },
      { type: "Update", text: "Wands 2.0 card summary rewritten — leads with the guest experience gap, covers wizarding identity, progression mechanics, and IP grounding." },
      { type: "Update", text: "About page portrait card: removed Email, jamieoviedo.com, and Résumé links — LinkedIn only. Photo container height increased (5:6 ratio) to maintain card size." },
      { type: "Update", text: "About page CV filled in: Experience (SportsEngine Nov 2024–Present, Universal Sept 2023–Apr 2024); Education (U of Michigan-Dearborn M.S. 2026, UCF B.S. 2024). Placeholder rows removed." },
      { type: "Update", text: "About page Outside of Work section fully rewritten: 7 new hobby cards (Gardening, Cross-stitching, Baking, Digital Humanities, Sports, Movie Quoting, Exploring Orlando). Old cards retired." },
      { type: "Update", text: "Site-wide copy pass: removed all em-dashes (replaced with commas, semicolons, colons, or full stops as appropriate). Removed AI-heavy patterns: 'deeply satisfying', 'thoughtful UX', 'decision-making material', 'guardrails', 'throughout the process'. Pass completed across About, Process, Home, projects.js, Wands, CareCompass, HomeDepot, and the Wordle/Break page." },
    ],
  },
  {
    date: "2026-06-12",
    items: [
      { type: "New",    text: "Wands 2.0 case study — fully written with Figma content, NDA scope box, 4-card design context grid, Opening Weekend story (Nocturn Alley, day two)." },
      { type: "Update", text: "Home Depot project framing corrected throughout — self-initiated while working as a store associate, not a final-round interview exercise." },
      { type: "Update", text: "Project card copy rewritten for all three projects: summaries tightened, tags aligned with case study pages, HD badge changed from 'Interview' to 'Self-initiated'." },
      { type: "Remove", text: "AI assistant feature removed from the portfolio pending a future implementation with proper context and design." },
    ],
  },
  {
    date: "2026-06",
    items: [
      { type: "New",    text: "CareCompass case study — full 0-to-1 case study, TL;DR modal with 5 persona tabs, stats callout, section-by-section deep dive." },
      { type: "New",    text: "Home Depot case study — system audit, persona grid, JTBD cards, stakeholder presentation framing, reflection + takeaways." },
      { type: "New",    text: "Wands 2.0 case study — first pass, placeholder content." },
      { type: "Update", text: "Portfolio design system: dark-mode color tokens, Bricolage Grotesque + JetBrains Mono type scale, cs-* CSS namespace for case study components." },
      { type: "New",    text: "Portfolio launched. Home, About, Process, and project routing built on Vite 5 + React 18." },
    ],
  },
];

const TYPE_COLOR = {
  New:    { bg: 'var(--coral)',   color: 'var(--ink)' },
  Update: { bg: 'var(--peri)',    color: 'var(--ink)' },
  Remove: { bg: 'var(--plum)',    color: 'var(--paper)' },
  Fix:    { bg: 'var(--mint)',    color: 'var(--ink)' },
};

export function Changelog({ onBack }) {
  return (
    <div style={{ maxWidth: 'var(--grid)', margin: '0 auto', padding: '56px 32px 96px' }}>

      <button className="detail-back" onClick={onBack}>← Back</button>

      <div style={{ marginBottom: 48 }}>
        <h1 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 400, letterSpacing: '-0.03em', color: 'var(--ink)', margin: '0 0 16px', lineHeight: 1.1 }}>
          What changed, and why.
        </h1>
        <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6, margin: 0, maxWidth: 520 }}>
          A running record of meaningful updates to this portfolio — content, framing, and structure. Not every commit, just the changes worth knowing about.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        {ENTRIES.map((group, gi) => (
          <div key={gi} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '0 28px', alignItems: 'start' }}>

            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 500, color: 'var(--ink-3)', paddingTop: 4, letterSpacing: '-0.01em' }}>
              {group.date}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, borderLeft: '2px solid var(--line-soft)', paddingLeft: 24 }}>
              {group.items.map((item, ii) => {
                const style = TYPE_COLOR[item.type] || TYPE_COLOR.Fix;
                return (
                  <div key={ii} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{
                      flexShrink: 0,
                      display: 'inline-block',
                      padding: '4px 10px',
                      borderRadius: 999,
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      background: style.bg,
                      color: style.color,
                      border: '1.5px solid var(--line)',
                      boxShadow: '2px 2px 0 var(--line)',
                      marginTop: 2,
                      whiteSpace: 'nowrap',
                    }}>
                      {item.type}
                    </span>
                    <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6, margin: 0 }}>
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        ))}
      </div>

      <div style={{ marginTop: 64, paddingTop: 28, borderTop: '1.5px solid var(--line-soft)', fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--ink-3)' }}>
        Built with Vite 5 · React 18 · No framework — just CSS custom properties and stubbornness.
      </div>

    </div>
  );
}
