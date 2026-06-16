import { useState, useEffect } from 'react';
import './CareCompass.css';
import './HomeDepot.css'; // tab modal styles
import affinityMap from '../assets/affinitymap.png';
import scout1 from '../assets/scout1.png';
import scout2 from '../assets/scout2.png';
import scout3 from '../assets/scout3.png';
import scout4 from '../assets/scout4.png';
import phScreenReplay from '../assets/ph-screenreplay.png';
import phMetrics from '../assets/ph-metrics.png';
import ccHome from '../assets/cc-home.png';
import ccAppointment from '../assets/cc-appointment.png';
import ccCost from '../assets/cc-cost.png';
import ccMeds from '../assets/cc-meds.png';

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
  recruiter: [
    { text: <><strong>What they did:</strong> Lead Designer &amp; Developer. Owned product design end-to-end across 46 screens: from IA and interaction design to a fully coded React prototype with live AI (Claude API) and real session analytics (PostHog). Graduate capstone, 9 months, 3-person team.</> },
    { text: <><strong>Methods &amp; tools:</strong> 344K+ app store reviews analyzed via custom Python NLP pipeline · 18 user interviews (11 patients, 7 nurses) · 35-source literature review · 2 rounds moderated usability testing · Figma · React · Claude API · Netlify · PostHog.</> },
    { text: <><strong>Seniority signals:</strong> Ran two rounds of moderated usability testing independently. Made IA prioritization calls between rounds based on data. Built and deployed the prototype without engineering support. Identified and fixed a PostHog instrumentation gap mid-study. Documented failures as clearly as wins.</> },
    { text: <><strong>Employment context:</strong> M.S. graduate capstone, not a class project. Live deployed product, peer-reviewed research under journal review, real user sessions tracked via PostHog. Total AI API cost across all QA, testing, and presentations: $0.04. Equivalent scope to a 0→1 professional engagement.</> },
  ],
  hiring: [
    { text: <><strong>What I owned:</strong> End-to-end product design across 46 screens and 60+ interaction states, plus the full coded prototype: React, Claude API integration, Netlify deployment, and PostHog instrumentation. Research was a team effort; the design and the build were mine.</> },
    { text: <><strong>Design rationale:</strong> Every feature maps to a specific research finding. Cost Finder, pre-visit prep, Scout AI, and the layered explanation model each trace directly to a named friction point from 344K reviews and 18 interviews. Nothing was added because it seemed useful.</> },
    { text: <><strong>Why I coded it:</strong> A Figma prototype couldn't test real AI latency, actual navigation failures, or how users behave when no moderator is watching. The coded prototype found failures that click-throughs hide: FAB blocking content, Cost Finder's mental model mismatch, Scout's discoverability gap. Total API cost across all testing: $0.04.</> },
    { text: <><strong>Measured outcomes:</strong> 76.7 avg SUS across two rounds · 91.7% avg Task 1 success · 83.4 avg Scout AI confidence. Round 1: 80.5 SUS. Round 2 dropped to 72.8, reflecting a deliberate demographic shift to older, less digitally fluent participants. Failures documented, iterated on, and honest about what round 3 would fix.</> },
  ],
  designer: [
    { text: <><strong>Craft decisions:</strong> Scout needed a face, not a chatbot bubble. Research showed anthropomorphized AI interfaces build trust with users who have lower health or digital literacy. The visual design of the character was as intentional as the interaction model and guardrails behind it.</> },
    { text: <><strong>AI guardrails as design:</strong> Scout's system prompt was engineered with the same rigor as the UI: explains, never diagnoses; one question at a time; always ends with a concrete next action; urgent keyword detection routes to 911 before anything else. Guardrail design is UX design.</> },
    { text: <><strong>What the demographic shift taught me:</strong> Round 2 skewed older and less digitally fluent. SUS dropped. But those same participants were the most visibly excited by Scout: people who had never used an AI chatbot, engaging with real-time answers to their actual health questions. Lower scores, genuine delight. Design for the full range from the start.</> },
    { text: <><strong>The unsolved problem:</strong> Cost Finder: 0/6 Round 1. Moved above the fold. Round 2: 2/6. The fix wasn't position; it was mental model. Users expected a search bar, not a section to navigate to. Round 3 would test a floating global search entry point on the home dashboard.</> },
  ],
  pm: [
    { text: <><strong>How scope was set:</strong> Ten features survived ideation. Five made the cut. The filter: does this map to a named research finding, and can we validate it in two rounds? I drove IA and interaction scope decisions; everything else was deferred, not abandoned.</> },
    { text: <><strong>Design as prioritization:</strong> Medical Records was originally a primary nav item. Usability data showed Medications was accessed 3× more. Swapped between rounds. IA was treated as a hypothesis, same as everything else. PostHog tracked the behavioral data that made the call defensible.</> },
    { text: <><strong>No PM, no eng, no QA:</strong> Designed and built in a grad team context with no dedicated support functions. Made calls on scope, sequencing, and tradeoffs that would normally involve 2–3 other roles. When PostHog wasn't capturing Round 1 data correctly, diagnosed it and implemented a reverse proxy before Round 2, with no sessions lost.</> },
    { text: <><strong>Roadmap I'd hand a PM:</strong> Cost Finder as floating global search. REALM-R recruitment for low health literacy cohort. Provider portal message volume as the supply-side outcome metric. These come directly from what two rounds of testing didn't resolve, not from brainstorming.</> },
  ],
  leadership: [
    { text: <><strong>The bet:</strong> Healthcare's navigation problem isn't a technology gap; it's a translation gap. I designed the layer that sits between clinical data and human understanding. Not a better portal. A system that makes comprehension the default instead of the exception.</> },
    { text: <><strong>What I built and what it cost:</strong> A fully deployed product (46 screens, live Claude API, real PostHog session tracking) validated across 12 usability sessions. Total AI API cost across all QA, testing, and presentations: $0.04. The infrastructure decisions that enable real validation don't have to be expensive. They have to be intentional.</> },
    { text: <><strong>What the data challenged:</strong> Round 2 skewed older. SUS dropped to 72.8. Those same participants were the most visibly engaged by Scout: people who had never used an AI assistant, asking real questions about their own health and getting real answers. Lower perceived usability, genuine enthusiasm. The design problem and the adoption problem aren't the same thing.</> },
    { text: <><strong>How I present hard results:</strong> 76.7 avg SUS across two rounds. Cost Finder still underperforms after two rounds. I'm not here to paper over that. I'm here to show what I do when the design doesn't work, and that I already know what round 3 needs to fix.</> },
  ],
};

function TldrModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('recruiter');
  const items = TAB_CONTENT[activeTab];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="cs-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="cs-modal" role="dialog" aria-modal="true" aria-labelledby="tldr-title">
        <button className="cs-modal-close" onClick={onClose} aria-label="Close">✕</button>
        <h2 id="tldr-title">TL;DR</h2>
        <p className="cs-modal-sub">CareCompass · M.S. Capstone · 2025–2026</p>

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

export function CareCompass({ onBack, onNext }) {
  const [tldrOpen, setTldrOpen] = useState(false);

  return (
    <>
      {tldrOpen && <TldrModal onClose={() => setTldrOpen(false)} />}

      {/* ══ HERO ══ */}
      <div className="cs-hero cc-hero cc-hero-flush">
        <div style={{ background: '#1A3040' }}>
          <div className="cs-hero-inner">
            <button className="detail-back" onClick={onBack}>← All work</button>

            <div className="cc-company-badge">CareCompass · M.S. Capstone · 2025–2026</div>

            <div className="cs-wordmark">Care<span>Compass</span></div>

            <div className="cs-stats">
              <div className="cs-stat-item">
                <div className="cs-stat-n">80.5</div>
                <div className="cs-stat-l">SUS Score · Round 1</div>
              </div>
              <div className="cs-stat-item">
                <div className="cs-stat-n">100%</div>
                <div className="cs-stat-l">Task 1 success rate</div>
              </div>
              <div className="cs-stat-item">
                <div className="cs-stat-n">344K+</div>
                <div className="cs-stat-l">Reviews analyzed</div>
              </div>
              <div className="cs-stat-item">
                <div className="cs-stat-n">84.2</div>
                <div className="cs-stat-l">Scout AI confidence · Round 1</div>
              </div>
            </div>

            <div className="cs-hero-tags">
              {["AI/ML", "Healthcare UX", "0→1", "Research-led"].map(t => (
                <span className="cs-hero-tag" key={t}>{t}</span>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, marginTop: 32 }}>
              <div className="cc-context-note">
                <span className="cc-context-icon">ⓘ</span>
                M.S. graduate capstone, not a class project. Live React app with real AI (Claude API), real session analytics (PostHog), and two rounds of moderated usability testing.
              </div>
              <button className="cs-tldr-btn" style={{ flexShrink: 0 }} onClick={() => setTldrOpen(true)}>
                Read the TL;DR
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ══ A. OVERVIEW ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">Overview</div>
          <h2 className="cs-headline">The problem with healthcare navigation isn't access; it's comprehension.</h2>

          <div className="cs-body-text">
            <p>
              When Lisa, a 42-year-old retail bookkeeper on a high-deductible health plan, logs into her patient portal to check her lab results, she encounters a wall of numbers, abbreviations, and red flags with no context, no explanation, and no indication of urgency. She does what most patients do: she Googles it. Two days of anxiety later, her doctor calls and says "Oh, it's fine." This is not a rare edge case. It is the default patient experience in the United States, and existing tools have made it worse, not better.
            </p>
            <p>
              Platforms like MyChart surface raw clinical data without interpretive scaffolding. WebMD and Ada Health provide generic health information but cannot speak to a patient's specific results or insurance context. None of them address the financial dimension, which, for anyone on a high-deductible plan, is inseparable from every care decision. The result is a system that is technically accessible but cognitively inaccessible to the people who need it most.
            </p>
            <p>
              CareCompass was designed as an AI-powered navigation layer that sits on top of existing EMR infrastructure via FHIR-compliant APIs. It does not replace the clinical record; it translates it. Plain-language summaries, real-time cost transparency, intelligent appointment preparation, and Scout, a persistent AI assistant, work together to restore the confidence patients lose every time the system treats them as a data recipient rather than a decision-maker. AI was the right tool here not because it was trending, but because the core problem (variable health literacy at scale) is exactly what language models are built to address.
            </p>
          </div>

          <div className="cs-stats-callout">
            <div className="cs-stats-callout-item">
              <strong>344K</strong>
              <span>App Reviews Analyzed<br />custom Python pipeline</span>
            </div>
            <div className="cs-stats-callout-sep" />
            <div className="cs-stats-callout-item">
              <strong>18</strong>
              <span>Research Participants<br />(11 patients · 7 nurses)</span>
            </div>
            <div className="cs-stats-callout-sep" />
            <div className="cs-stats-callout-item">
              <strong>12</strong>
              <span>Usability Sessions<br />(2 rounds · 6 each)</span>
            </div>
            <div className="cs-stats-callout-sep" />
            <div className="cs-stats-callout-item">
              <strong>4</strong>
              <span>Core Features Designed<br />tested &amp; iterated</span>
            </div>
          </div>

        </div>
      </section>

      {/* ══ B. RESEARCH & INSIGHTS ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">Research &amp; Insights</div>
          <h2 className="cs-headline">We didn't assume the problem. We found it.</h2>

          <div className="cs-body-text">
            <p>
              The research phase ran across three methods in parallel: a large-scale quantitative analysis of competitor app reviews, a qualitative interview study with patients and nurses, and a literature review grounding the design in established theory. Each was designed to answer a different question: what are patients asking for at scale, what are they actually experiencing in the room, and what does the research already know about health information comprehension.
            </p>
          </div>

          <div className="cs-method-card">
            <div className="cs-method-card-label">Method 01: Competitive Benchmarking</div>
            <p className="cs-method-card-body">
              Built a custom Python scraper and 10-step Jupyter analysis pipeline to collect and analyze 854,858 app store reviews across 10 platforms: 7 direct healthcare competitors (WebMD, Ada Health, Mayo Clinic, GoodRx, ZocDoc, MyChart, Apple Health) and 3 indirect comparators (Redfin, Credit Karma, Lose It). After two-stage quality filtering, 344,733 reviews remained. Sentiment scoring, feature gap analysis, and competitive heatmaps revealed which user needs were most underserved at market scale.
            </p>
            <p className="cs-method-card-finding">
              Key finding: Provider communication had the lowest sentiment score (0.16) across all apps. Insurance navigation had the highest sentiment gap, the most critical unmet need. GoodRx led in UX sentiment (0.45) and became our primary design reference for surfacing complex financial data accessibly.
            </p>
          </div>

          <div className="cs-method-card">
            <div className="cs-method-card-label">Method 02: Semi-Structured Interviews</div>
            <p className="cs-method-card-body">
              18 one-on-one interviews via Zoom: 11 patient participants and 7 nurses as subject matter experts. Thematic analysis following Braun &amp; Clarke's six-phase framework produced six friction points that structured the entire design direction.
            </p>
            <p className="cs-method-card-finding">
              Key finding: Nurses described spending substantial unscheduled time explaining portal results to anxious patients, a direct workload transfer generated by inadequate design. "We spend so much time on the phone just explaining that a 'high' result doesn't mean they're in danger… the system dumps the data on them and we have to clean up the pieces." Nurse Participant
            </p>
          </div>

          <div className="cs-method-card">
            <div className="cs-method-card-label">Method 03: Literature Review (35 Sources)</div>
            <p className="cs-method-card-body">
              35 peer-reviewed sources grounded the design in established theory. Key frame: Carayon et al.'s Socio-Technical Systems Analysis. Current portals are optimized for technical efficiency without adequate consideration of how patients process health information. UX simplification is not a convenience feature; it is a health equity intervention.
            </p>
          </div>

          <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, fontSize: 'clamp(18px, 2vw, 22px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: 40, marginBottom: 0 }}>
            The three insights that drove every major design decision
          </h3>

          <div className="cs-insight-callout">
            <div className="cs-insight-eyebrow">Insight 01: Financial Shock is the First Barrier</div>
            <p className="cs-insight-text">
              Patients on high-deductible plans make care decisions based on anticipated cost, but cost information is unavailable before scheduling.
            </p>
            <p className="cs-insight-action">
              → Because we learned this, we built the Insurance Cost Finder as a primary navigation feature, not a secondary utility.
            </p>
          </div>

          <div className="cs-insight-callout">
            <div className="cs-insight-eyebrow">Insight 02: "Forgot to Ask" is Structural, Not Personal</div>
            <p className="cs-insight-text">
              "I always forget. I get in there, they're in a hurry, I'm in a hurry, and then I'm driving home and I'm like, 'Darn it, I forgot to ask about that one thing.'"
            </p>
            <p className="cs-insight-action">
              → Because we learned this, we designed pre-visit preparation as a dedicated feature inside Appointments: auto-generating checklists, question builders, and symptom logs tied to each upcoming appointment.
            </p>
          </div>

          <div className="cs-insight-callout">
            <div className="cs-insight-eyebrow">Insight 03: Jargon is a Barrier, Not Just Friction</div>
            <p className="cs-insight-text">
              "A lot of the terminology: I don't know what that acronym is. Is that good? Is that bad? I have to look up every other word just to understand my own progress note."
            </p>
            <p className="cs-insight-action">
              → Because we learned this, Scout's Explain feature was designed as a persistent, contextual term translator on every screen, not a standalone help section users had to navigate to.
            </p>
          </div>

          <div className="hd-screen-img">
            <img src={affinityMap} alt="Affinity diagram from research synthesis: themes clustered from patient and nurse interviews" className="hd-screen-photo" />
          </div>
        </div>
      </section>

      {/* ══ C. DESIGN DECISIONS ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">Design Decisions</div>
          <h2 className="cs-headline">Five metaphors, one persona, every screen.</h2>

          <div className="cs-body-text">
            <p>
              With research findings synthesized into six friction points, the team entered a structured ideation phase. Each team member independently generated features mapped to pain point areas, then clustered and voted using a transparent three-tier prioritization system. Ten feasible ideas advanced. Every UI decision was grounded in one of five organizing design metaphors drawn directly from research insights.
            </p>
          </div>

          <div className="cs-feature-grid">
            <div className="cs-feature-card">
              <h3 className="cs-feature-name">Roadmap / Journey</h3>
              <p className="cs-feature-desc">
                Frames the patient's healthcare encounter as a structured progression with clear before/during/after stages. Leverages existing mental models of travel and navigation to reduce cognitive load.
              </p>
            </div>
            <div className="cs-feature-card">
              <h3 className="cs-feature-name">Translator</h3>
              <p className="cs-feature-desc">
                Positions CareCompass as converting "doctor speak" into plain language. Implemented through info bubble icons over complex medical terms and a layered depth model: Layer 1 (simple), Layer 2 (context), Layer 3 (clinical detail).
              </p>
            </div>
            <div className="cs-feature-card">
              <h3 className="cs-feature-name">Companion / Scout</h3>
              <p className="cs-feature-desc">
                Scout, the AI assistant, is a compass character persistent across every screen. A face was given because the subject matter is deeply personal; research shows anthropomorphized AI interfaces increase trust among users with lower health or digital literacy.
              </p>
            </div>
            <div className="cs-feature-card">
              <h3 className="cs-feature-name">Agenda / Datebook</h3>
              <p className="cs-feature-desc">
                Organizes information by appointment, condition, and provider, the way patients already think about their health journey. Reduces learning curve by mapping to familiar analog structure.
              </p>
            </div>
          </div>

          <div className="cs-feature-card" style={{ marginBottom: 24 }}>
            <h3 className="cs-feature-name">Dashboard / Control Center</h3>
            <p className="cs-feature-desc">
              Home screen displays fewer than six data points: deductible progress, upcoming appointments, medication reminders, Scout access. A deliberate rejection of information-overloaded modern dashboards. Enough for orientation, not so much as to overwhelm.
            </p>
          </div>

          <div className="cs-body-text">
            <p>
              Information architecture was organized task-first, not data-first. Rather than grouping by data type (labs, notes, bills), CareCompass organizes by user goal (preparing for an appointment, understanding a result, checking a cost). Five primary navigation sections:
            </p>
          </div>

          <div className="cs-method-tags" style={{ marginTop: 16 }}>
            {[
              "Home: Dashboard overview",
              "Insurance: Cost finder + benefits",
              "Appointments: Schedule + prep",
              "Medications: Rx tracking",
              "Scout: AI assistant (persistent)",
            ].map(t => (
              <span className="cs-method-tag" key={t}>{t}</span>
            ))}
          </div>

          <div className="cs-method-card" style={{ marginTop: 32 }}>
            <div className="cs-method-card-label">Scout AI: Design Rationale</div>
            <p className="cs-method-card-body">
              Scout is powered by the Anthropic Claude Haiku model and accessible from every screen. Response format follows the layered depth model: short answers first with expandable detail. For medical term questions, Scout provides a one-sentence plain-language definition followed by a "Tell me more" option. For cost questions, Scout draws from the user's insurance profile to provide personalized estimates rather than generic ranges.
            </p>
            <p className="cs-method-card-finding">
              The consistent visual presence of Scout across all screens (a named, recognizable compass character rather than a generic chatbot interface) was a deliberate trust-building decision rooted directly in research.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, margin: '28px 0' }}>
            <div className="hd-screen-img" style={{ margin: 0 }}>
              <img src={scout1} alt="Scout AI chat interface: Welcome back Lisa, with suggested prompt chips" className="hd-screen-photo" />
            </div>
            <div className="hd-screen-img" style={{ margin: 0 }}>
              <img src={scout2} alt="Scout AI: active referral to cardiologist Dr. Amanda Park with scheduling options" className="hd-screen-photo" />
            </div>
            <div className="hd-screen-img" style={{ margin: 0 }}>
              <img src={scout3} alt="Scout AI: insurance coverage answer showing Dr. Amanda Park is in-network with estimated $55 to $75 out-of-pocket cost" className="hd-screen-photo" />
            </div>
            <div className="hd-screen-img" style={{ margin: 0 }}>
              <img src={scout4} alt="Scout AI: medication refill summary showing Metformin and Lisinopril eligibility with refill recommendation" className="hd-screen-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ D. FROM FIGMA TO CODE ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">From Figma to Code</div>
          <h2 className="cs-headline">Most designers hand off. I shipped.</h2>

          <div className="cs-body-text">
            <p>
              The CareCompass prototype is not a Figma click-through. It is a fully coded React application deployed on Netlify, with PostHog analytics tracking real user behavior and the Anthropic Claude Haiku model powering Scout's live AI responses. This was a deliberate choice: a live application tests things a prototype cannot, including real AI latency, actual navigation failures, and genuine user behavior when no moderator is watching.
            </p>
          </div>

          <div className="cs-build-chain">
            {["Figma Prototype", "Claude Code", "React App", "Netlify Deploy", "PostHog Analytics"].map((step, i, arr) => (
              <>
                <span className="cs-build-step" key={step}>{step}</span>
                {i < arr.length - 1 && <span className="cs-build-arrow" key={`arr-${i}`}>→</span>}
              </>
            ))}
          </div>

          <div className="cs-body-text">
            <p>
              Claude Code was used to translate the Figma design system into the React codebase. The workflow was directive: I specified component behavior, interaction states, and accessibility requirements; Claude Code generated and iterated on the implementation. The 46-screen Figma prototype (60+ user-facing states) became a live, navigable application with real data flows. PostHog was integrated to track task completion, time on task, navigation paths, and error events during both rounds of usability testing.
            </p>
          </div>

          <div className="cs-method-card">
            <div className="cs-method-card-label">What the Coded Prototype Revealed That Figma Couldn't</div>
            <p className="cs-method-card-body">
              Building a live application instead of a click-through prototype changed what we could actually test. We integrated the real Claude Haiku model so participants interacted with a live AI answering their actual questions in real time, backed by saved dummy patient data in a JSON file, with no Wizard of Oz and no scripted responses. PostHog analytics tracked real session behavior across both rounds. Real insights, remarkably low cost: $0.04 in API usage across all QA, usability testing, and presentations. PostHog: free tier.
            </p>
          </div>

          <div className="hd-screen-img">
            <img src={phScreenReplay} alt="PostHog session replay showing a usability test participant navigating the CareCompass medication details screen" className="hd-screen-photo" />
          </div>

          <div className="cs-code-block">
            <div className="cs-code-header">
              <div className="cs-code-dot" style={{ background: '#FF5F57' }} />
              <div className="cs-code-dot" style={{ background: '#FEBC2E' }} />
              <div className="cs-code-dot" style={{ background: '#28C840' }} />
              <span className="cs-code-filename">ChatBottomSheet.jsx: Scout AI layer</span>
            </div>
            <pre>
              <code>
                <span className="cs-code-comment">{'/* Scout AI: prompt engineering & guardrails */'}</span>{'\n'}
                <span className="cs-code-keyword">const</span>{' SCOUT_SYSTEM_PROMPT = '}
                <span className="cs-code-string">{'`You are Scout, an AI health navigation \nassistant inside CareCompass. You help Lisa Williams, a 42-year-old \nwoman managing Type 2 Diabetes, understand her health information \nand navigate her care.\n\nYour role:\n- Explain health data, medications, labs, appointments, and bills\n  in plain, empathetic language\n- Guide Lisa to the right part of the app\n- You are NOT a doctor and cannot diagnose, prescribe, or replace \n  medical advice\n- For emergencies, always direct Lisa to call 911 first\n- Keep responses under 150 words (this is a mobile chat interface)`'}</span>{'\n\n'}
                <span className="cs-code-comment">{'// Safety layer: urgent keyword detection'}</span>{'\n'}
                <span className="cs-code-keyword">const</span>{' URGENT_KEYWORDS = [\n  '}
                <span className="cs-code-string">{"'chest pain'"}</span>{', '}
                <span className="cs-code-string">{"'shortness of breath'"}</span>{', '}
                <span className="cs-code-string">{"'heart attack'"}</span>{',\n  '}
                <span className="cs-code-string">{"'stroke'"}</span>{', '}
                <span className="cs-code-string">{"'unconscious'"}</span>{', '}
                <span className="cs-code-string">{"'severe pain'"}</span>{', '}
                <span className="cs-code-string">{"'emergency'"}</span>{',\n  '}
                <span className="cs-code-string">{"'overdose'"}</span>{', '}
                <span className="cs-code-string">{"'collapsed'"}</span>{', '}
                <span className="cs-code-string">{"'dying'"}</span>{'\n]\n\n'}
                <span className="cs-code-comment">{'// System prompt: explains in plain language, never diagnoses,'}</span>{'\n'}
                <span className="cs-code-comment">{'// always ends with a concrete next action the patient can take.'}</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* ══ E. FINAL DESIGN ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">Final Design</div>
          <h2 className="cs-headline">The direction we almost shipped, and the one we did.</h2>

          <div className="cs-peri-callout">
            <div className="cs-peri-eyebrow">What Failed First</div>
            <p className="cs-peri-text">
              Round 1 testing identified the Insurance Cost Finder as the most critical failure point; no participant recorded a full success on Task 3. The lowest SEQ score in the entire study (1/7) came from this task. The Cost Finder was buried in the Insurance section and users expected to find it there, but the path was not visible enough. Users who found it felt confident using it; navigation was the sole blocker. This directly drove the most significant IA change between rounds: elevating Cost Finder to a prominent position at the top of the Insurance screen and adding a shortcut from the home dashboard.
            </p>
          </div>

          <div className="cs-iteration-card">
            <div className="cs-iteration-label">Iteration 01: Between Rounds</div>
            <h4 className="cs-iteration-title">Simplified Explanation of Benefits (EOB) Format</h4>
            <p className="cs-iteration-body">
              The original EOB visualization was a static image asset, illegible and non-interactive. Transitioned to coded, structured data components maintaining the familiar tabular EOB format with high-contrast, scalable text. Supports easier scanning and information retrieval for users across the full literacy range.
            </p>
          </div>

          <div className="cs-iteration-card">
            <div className="cs-iteration-label">Iteration 02: Between Rounds</div>
            <h4 className="cs-iteration-title">Calendar Dates Now Open Scheduling Directly</h4>
            <p className="cs-iteration-body">
              Round 1 participants consistently tried to tap calendar dates to initiate scheduling, a mental model imported from standard calendar apps. Added a Schedule Appointment CTA integrated into calendar date-pickers. Where an appointment already exists, the system prioritizes a list view of that day's events.
            </p>
          </div>

          <div className="cs-iteration-card">
            <div className="cs-iteration-label">Iteration 03: Between Rounds</div>
            <h4 className="cs-iteration-title">Medications Elevated to Primary Navigation</h4>
            <p className="cs-iteration-body">
              Testing revealed Medical Records was lower-frequency than expected while Medications was accessed constantly. Restructured the IA: Medical Records moved to secondary side nav; Medications elevated to the primary bottom nav bar. This reflects observed user priority, not assumed priority.
            </p>
          </div>

          <div className="cs-iteration-card">
            <div className="cs-iteration-label">Iteration 04: Between Rounds</div>
            <h4 className="cs-iteration-title">Cost Finder Search Links to Existing Medication Details</h4>
            <p className="cs-iteration-body">
              Users searching for medications in the Cost Finder were routed to a generic details page even when the medication was already in their personal health profile. Updated navigation logic to route Cost Finder results to the user's personalized Medication Details page when recognized, creating a single source of truth and a cohesive user journey.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, margin: '28px 0' }}>
            <div className="hd-screen-img" style={{ margin: 0 }}>
              <img src={ccHome} alt="CareCompass home dashboard: medications due, upcoming appointments, and health overview" className="hd-screen-photo" />
            </div>
            <div className="hd-screen-img" style={{ margin: 0 }}>
              <img src={ccAppointment} alt="Schedule appointment screen: active referrals and provider selection" className="hd-screen-photo" />
            </div>
            <div className="hd-screen-img" style={{ margin: 0 }}>
              <img src={ccCost} alt="Insurance cost finder: coverage summary with deductible progress and lab cost search results" className="hd-screen-photo" />
            </div>
            <div className="hd-screen-img" style={{ margin: 0 }}>
              <img src={ccMeds} alt="Medications screen: prescription details and refill tracking" className="hd-screen-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ F. RESULTS & METRICS ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">Results &amp; Metrics</div>
          <h2 className="cs-headline">What actually happened when real people used it.</h2>

          <div className="cs-section-label" style={{ marginBottom: 16 }}>Averages across two rounds of usability testing</div>

          <div className="cs-metrics">
            <div className="cs-metric">
              <div className="cs-metric-n">76.7</div>
              <div className="cs-metric-l">Avg SUS Score</div>
            </div>
            <div className="cs-metric">
              <div className="cs-metric-n">91.7%</div>
              <div className="cs-metric-l">Task 1 success rate</div>
            </div>
            <div className="cs-metric">
              <div className="cs-metric-n">83.4</div>
              <div className="cs-metric-l">Scout AI confidence</div>
            </div>
          </div>

          <div className="cs-tradeoffs-grid">
            <div className="cs-tradeoff-col">
              <div className="cs-tradeoff-label">Round 1 Task Results</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  "Task 1 (Schedule): 6/6 · SEQ 6.2 · 0 help requests",
                  "Task 2 (Post-Visit Summary): 2/6 full · SEQ 5.3",
                  "Task 3 (Cost Finder): 0/6 full success · SEQ 4.6",
                  "Task 4 (Scout): 3/6 full · SEQ 5.2",
                  "SUS: 80.5 · AI Confidence: 84.2",
                ].map(l => <li key={l} style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.55 }}>{l}</li>)}
              </ul>
            </div>
            <div className="cs-tradeoff-col">
              <div className="cs-tradeoff-label">Round 2 Task Results (Post-Iteration)</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  "Task 1 (Schedule): 5/6 · SEQ 5.8",
                  "Task 2 (Post-Visit Summary): 3/6 full · SEQ 6.0 ↑",
                  "Task 3 (Cost Finder): 2/6 full · SEQ 4.3",
                  "Task 4 (Scout): 4/6 full · SEQ 5.2",
                  "SUS: 72.8 · AI Confidence: 82.5",
                ].map(l => <li key={l} style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.55 }}>{l}</li>)}
              </ul>
            </div>
          </div>

          <div className="cs-body-text" style={{ marginTop: 28 }}>
            <p>
              Round 2 SUS dropped to 72.8, reflecting a significant demographic shift: Round 2 participants skewed older and many had never used an AI assistant before. The less familiar interaction patterns, particularly around Scout AI, required more orientation and contributed to lower perceived usability scores. Despite this, Round 2 participants reported equal or greater satisfaction with the overall experience. Scout AI became an unexpected highlight, with participants who had never interacted with an AI chatbot visibly engaged and excited by real-time responses to their actual health questions.
            </p>
          </div>

          <div className="hd-screen-img">
            <img src={phMetrics} alt="PostHog analytics dashboard showing task completion duration metrics across all four usability tasks" className="hd-screen-photo" />
          </div>

          <div className="cs-quote-block" style={{ marginTop: 32 }}>
            <blockquote>
              "I didn't really know that the little stethoscope-star thing was Scout. I think because it was a clock at the beginning, and then it was something else."
            </blockquote>
            <div className="cs-quote-attr">Participant 15 · Round 2 · Task 4 (Use Scout AI)</div>
          </div>

          <div className="cs-quote-block">
            <blockquote>
              "If I could click on the medication on the home screen, it would take me to the medication, instead of having to go down and click on medication again."
            </blockquote>
            <div className="cs-quote-attr">Participant 74 · Round 2 · Navigation feedback</div>
          </div>

          <div className="cs-quote-block">
            <blockquote>
              "Provide the simplified, dumbed-down version in a very opening summary, but then build more deeper information."
            </blockquote>
            <div className="cs-quote-attr">Participant 36 · Round 2 · Post-session interview</div>
          </div>

        </div>
      </section>

      {/* ══ G. REFLECTION ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">Reflection</div>
          <h2 className="cs-headline">What I'd do differently.</h2>

          <div className="cs-body-text">
            <p>
              The demographic shift between rounds was the finding I didn't see coming. Round 1 skewed younger and digitally fluent; Round 2 skewed older. Task success dropped, time on task increased, and Scout required substantially more orientation from participants who had never used an AI assistant before. What I didn't expect: those same participants were the most visibly delighted by it. Lower SUS scores, genuine enthusiasm. If I ran this again I'd test both age groups against both iterations from the start, ensuring design decisions held across generations and technical literacy levels, not just within them.
            </p>
            <p>
              Round 1 also surfaced an instrumentation gap: PostHog wasn't capturing all session data as expected. The team manually collected metrics in parallel as a backup, which turned out to be the right call. For Round 2 I implemented a reverse proxy and every session was fully tracked.
            </p>
            <p>
              The lesson I'll carry into every future AI project: the interaction design around an AI feature matters more than the AI itself. Scout's model performed well; when participants found it, they trusted it. The failures were in discoverability and affordance. The AI was fine. The design around it needed another round.
            </p>
          </div>

          <div className="cs-peri-callout">
            <div className="cs-peri-eyebrow">Note on Team Contributions</div>
            <p className="cs-peri-text">
              CareCompass was a 3-person graduate team working under faculty advisor oversight. I was the lead designer and developer, responsible for end-to-end product design, the coded React prototype, Claude API integration, Netlify deployment, and PostHog analytics. I also contributed to the quantitative research pipeline. My teammates led qualitative research, literature review, storyboarding, and presentation. Design decisions were made collaboratively across the team.
            </p>
          </div>
        </div>
      </section>

      {/* ══ NEXT PROJECT ══ */}
      <div className="cs-inner" style={{ paddingBottom: 96 }}>
        <div className="next-project" style={{ cursor: 'pointer' }} onClick={onNext}>
          <div>
            <div className="label">Next project</div>
            <div className="title">Fixing the system that left associates in the dark.</div>
          </div>
          <div className="arrow">→</div>
        </div>
      </div>
    </>
  );
}
