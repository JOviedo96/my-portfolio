import { useState } from 'react';
import './CareCompass.css';
import './HomeDepot.css';
import hdHero from '../assets/hd-hero.png';
import hdFlow from '../assets/hd-flow.png';
import hdRandDis from '../assets/hd-rranddis.png';
import hdSketch from '../assets/hd-sketch.png';
import hdLofi from '../assets/hd-lofi.png';
import hdServiceModal from '../assets/hd-service-modal.png';
import hdSc from '../assets/hd-sc.png';
import hdSlide1 from '../assets/hd-slide1.png';
import hdSlide2 from '../assets/hd-slide2.png';

const TABS = [
  { id: 'recruiter',  label: 'Recruiter' },
  { id: 'hiring',     label: 'Hiring Manager' },
  { id: 'designer',   label: 'Designer' },
  { id: 'pm',         label: 'Product Manager' },
  { id: 'leadership', label: 'Leadership' },
];

const TAB_CONTENT = {
  recruiter: [
    { text: <><strong>What they did:</strong> Self-initiated UX research and design project completed while working as a Home Depot store associate. Diagnosed a 27.8% service lead capture gap from the inside: lived the problem, researched it, and designed the fix. Solo, 2 months.</> },
    { text: <><strong>Methods &amp; tools:</strong> Business analytics · associate interviews (4 roles) · journey mapping · systems mapping · Figma · enterprise UX research.</> },
    { text: <><strong>Seniority signals:</strong> Independently identified a business problem without being asked, grounded it in real operational data, ran primary research with colleagues, and designed a technically feasible API integration, all as a side project, not a job requirement.</> },
    { text: <><strong>Why it matters:</strong> This wasn't an assignment. It was curiosity turned into craft. Demonstrates initiative, business awareness, and the ability to find and frame problems, not just solve ones handed to you.</> },
  ],
  hiring: [
    { text: <><strong>Business problem:</strong> 27.8% of service leads at Home Depot were being captured in-store; the other 72.2% were captured by third-party vendors. Associates weren't failing customers. The software was failing the associates. I knew this firsthand.</> },
    { text: <><strong>Research:</strong> Business analytics anchored the gap in real numbers (594 store-generated vs. 1,541 vendor-generated leads, store 6869, FY2022). Interviews with 4 associate roles confirmed what I already suspected from working the floor: the friction was systemic, not motivational.</> },
    { text: <><strong>Design output:</strong> Recommended Services widget embedded in Order Up via API: surfaces relevant services automatically when a qualifying product enters the cart, with an embedded Service Connect lead-capture modal. No system switch. No retraining.</> },
    { text: <><strong>What this demonstrates:</strong> The ability to move from lived experience → business diagnosis → research validation → designed solution. No prompt, no brief, no deadline. Just a problem worth solving.</> },
  ],
  designer: [
    { text: <><strong>The reframe:</strong> The surface problem was "associates don't capture enough leads." The real problem was that associates were asked to sell a complete solution across two platforms that were never designed to work together. The fix wasn't a better workflow; it was closing the gap between existing ones.</> },
    { text: <><strong>What failed first:</strong> My first instinct was a dedicated Services tab inside Order Up, cleaner to design, but wrong in practice. It still required the associate to remember to navigate there, which was the same failure mode as switching to Service Connect. The fix wasn't a tab. It was making services unavoidable at the right moment.</> },
    { text: <><strong>Hardest call:</strong> Automatic surfacing vs. associate control. I chose automatic for V1; services appear when a qualifying product hits the cart. In some workflows that's noise. The smarter version gives associates contextual control. That's V2.</> },
    { text: <><strong>What I'd change:</strong> Test the automatic trigger threshold with associates in a live store. "Qualifying product" is a product logic question I couldn't validate without internal data; getting that threshold wrong creates friction, not value.</> },
  ],
  pm: [
    { text: <><strong>Business framing:</strong> Only 27.8% of service leads were being captured by store associates; the other 72.2% were captured by third-party vendors. At the highest-trust point in the customer journey, when an associate is already present, the tooling wasn't set up to capture that lead in the moment. That's not a marketing problem. It's a systems problem.</> },
    { text: <><strong>Root cause:</strong> Product sale (Order Up) and service lead capture (Service Connect) are separate systems with no integration. Associates have to mentally bridge them during every qualifying customer interaction, and the gap kills the moment.</> },
    { text: <><strong>V1 recommendation:</strong> API integration scoped to: Recommended Services widget auto-surfacing in the Order Up cart for qualifying products, embedded Service Connect modal for lead capture, no system switch, no retraining required.</> },
    { text: <><strong>Roadmap:</strong> V2: multiple services, credit card integration using same API-modal pattern. V3: push recommended services logic to HomeDepot.com checkout. One integration unlocks the template for the next.</> },
  ],
  leadership: [
    { text: <><strong>The strategic frame:</strong> The 27.8% capture gap isn't a training issue or a motivation issue; it's a data model issue. Order Up and Service Connect are owned by different teams, built on different stacks, and the associate is asked to be the integration layer. Fix the system; the behavior follows.</> },
    { text: <><strong>The leverage point:</strong> The qualifying product cart moment. The associate is already in conversation with the customer. Services need to be in that moment, not after it ends in a separate platform. That's where the lead is lost and where the integration has to live.</> },
    { text: <><strong>What opens up:</strong> The same API-modal pattern solves Home Depot card applications, customer history surfacing, and checkout on HomeDepot.com. One integration creates the template for the entire associate-facing platform ecosystem.</> },
    { text: <><strong>The question I'd bring internal:</strong> What's the unit economics of a service lead conversion? That number changes how aggressively you instrument the recommendation trigger and how much associate interruption is worth tolerating in high-volume workflows.</> },
  ],
};

function HdTldrModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('recruiter');
  const items = TAB_CONTENT[activeTab];

  return (
    <div className="cs-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="cs-modal" role="dialog" aria-modal="true" aria-labelledby="hd-tldr-title">
        <button className="cs-modal-close" onClick={onClose} aria-label="Close">✕</button>
        <h2 id="hd-tldr-title">TL;DR</h2>
        <p className="cs-modal-sub">Home Depot · Associate Software · 2024</p>

        <div className="hd-modal-tabs" role="tablist">
          {TABS.map(t => (
            <button
              key={t.id}
              role="tab"
              aria-selected={activeTab === t.id}
              className={`hd-modal-tab${activeTab === t.id ? ' active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >{t.label}</button>
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

export function HomeDepot({ onBack, onNext }) {
  const [tldrOpen, setTldrOpen] = useState(false);

  return (
    <>
      {tldrOpen && <HdTldrModal onClose={() => setTldrOpen(false)} />}

      {/* ══ HERO ══ */}
      <div className="cs-hero hd-hero hd-hero-flush">
        <div style={{ background: '#000000' }}>
          <div className="cs-hero-inner">
            <button className="detail-back" onClick={onBack}>← All work</button>

            <div className="hd-company-badge">
              The Home Depot · Store Associate · 2023
            </div>

            <div className="cs-wordmark hd-wordmark">
              Home Depot<br />
              <span>Associate Software</span>
            </div>

            <div className="cs-stats">
              <div className="cs-stat-item">
                <div className="cs-stat-n">27.8%</div>
                <div className="cs-stat-l">Service leads captured in-store</div>
              </div>
              <div className="cs-stat-item">
                <div className="cs-stat-n">72.2%</div>
                <div className="cs-stat-l">Captured by vendors</div>
              </div>
              <div className="cs-stat-item">
                <div className="cs-stat-n">2</div>
                <div className="cs-stat-l">Disconnected systems</div>
              </div>
              <div className="cs-stat-item">
                <div className="cs-stat-n">4</div>
                <div className="cs-stat-l">Associate roles interviewed</div>
              </div>
            </div>

            <div className="cs-hero-tags">
              {["Enterprise UX", "Systems Thinking", "Self-initiated", "Internal Tools"].map(t => (
                <span className="cs-hero-tag" key={t}>{t}</span>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, marginTop: 32 }}>
              <div className="hd-context-note">
                <span className="hd-context-icon">ⓘ</span>
                This was a self-directed project, not an assignment. I was a store associate when I started asking why the lead capture numbers were so low, and kept going until I had an answer and a design.
              </div>
              <button className="cs-tldr-btn" style={{ flexShrink: 0 }} onClick={() => setTldrOpen(true)}>
                Read the TL;DR
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ══ OVERVIEW ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">Overview</div>
          <h2 className="cs-headline">Enterprise software has a people problem, not a technology problem.</h2>

          <div className="cs-body-text">
            <p>
              Home Depot Sales Specialists are tracked on a gauntlet of performance metrics every week, month, quarter, and year: sales in USD, protection plan attachment rates, measures, service leads, and credit card applications, all simultaneously, all weighted, all reviewed. The expectation is that a single associate manages all of it during a customer interaction, often with minimal training, across multiple disconnected systems.
            </p>
            <p>
              The problem isn't that associates don't want to do their jobs. The problem is that the systems they're required to use were never designed to work together, and every gap between them costs an associate a metric, a customer a service, and the store a sale.
            </p>
            <p>
              In 2022, store 6869 generated just 594 service leads internally, while 1,541 were submitted by customers through the website or third-party vendors. I saw this gap while working the floor. The software was failing the associates. I decided to find out how bad it actually was and what it would take to fix it.
            </p>
          </div>

          <div className="hd-screen-img">
            <img src={hdHero} alt="Order Up interface showing the Recommended Services widget with Home Depot Home Services and Pro Connect options" className="hd-screen-photo" />
          </div>
        </div>
      </section>

      {/* ══ SYSTEM CONTEXT ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">System Context</div>
          <h2 className="cs-headline">Before you can simplify a system, you have to map it.</h2>

          <div className="cs-body-text">
            <p>
              Two platforms, one broken workflow. Order Up (replacing the legacy ESVS system) is used by Sales Specialists, Service Desk Associates, and Pro Associates to sell products. Service Connect is a separate platform used by any associate to submit a service lead to Home Depot Home Services or ProConnect. Both systems serve the same customer interaction, and neither one talks to the other.
            </p>
          </div>

          <div className="hd-platform-audit">
            <div className="hd-platform-col">
              <div className="hd-platform-name">Order Up</div>
              <p className="hd-platform-desc">
                The primary point-of-sale platform. Used by Sales Specialists, Service Desk Associates, and Pro Associates to sell products, process transactions, and manage the customer cart. Replacing the legacy ESVS system.
              </p>
            </div>
            <div className="hd-platform-gap">
              <div className="hd-platform-gap-label">The Gap</div>
            </div>
            <div className="hd-platform-col gap-col">
              <div className="hd-platform-name" style={{ color: 'var(--coral)' }}>What falls through</div>
              <p className="hd-platform-desc">
                Service lead capture. When an associate finishes a product transaction in Order Up, there's no path to service recommendations. They have to leave the workflow, open Service Connect, and re-enter customer context manually, by which point the moment is usually lost.
              </p>
            </div>
            <div className="hd-platform-gap">
              <div className="hd-platform-gap-label">The Gap</div>
            </div>
            <div className="hd-platform-col">
              <div className="hd-platform-name">Service Connect</div>
              <p className="hd-platform-desc">
                The service lead submission platform. Used by any associate to submit a lead to Home Depot Home Services or ProConnect. Entirely separate from Order Up: different interface, different login, different workflow context.
              </p>
            </div>
          </div>

          <div className="hd-system-flow">
            <div className="hd-system-row">
              <span className="hd-system-row-label">Current</span>
              {["Order Up", "Context switch", "Service Connect", "Lead lost / forgotten"].map((n, i, arr) => (
                <>
                  <span className={`hd-system-node current`} key={n}>{n}</span>
                  {i < arr.length - 1 && <span className="hd-system-arrow" key={`a${i}`}>→</span>}
                </>
              ))}
            </div>
            <div className="hd-system-row">
              <span className="hd-system-row-label">Proposed</span>
              {["Order Up", "Recommended Services widget", "Embedded Service Connect flow", "Lead captured in-session"].map((n, i, arr) => (
                <>
                  <span className={`hd-system-node proposed`} key={n}>{n}</span>
                  {i < arr.length - 1 && <span className="hd-system-arrow" key={`a${i}`}>→</span>}
                </>
              ))}
            </div>
          </div>

          <div className="cs-body-text">
            <p>
              The integration gap was clear: product data existed in Order Up, service data lived in Service Connect, and associates had to mentally bridge them during every qualifying customer interaction. The proposed solution pulls Service Connect functionality into Order Up via API, surfacing relevant services at the moment a qualifying product is added to cart, without requiring the associate to leave the workflow they're already in.
            </p>
          </div>

          <div className="hd-screen-img">
            <img src={hdFlow} alt="Flow chart showing the full associate workflow through Order Up and Service Connect with the proposed integration" className="hd-screen-photo" />
          </div>
        </div>
      </section>

      {/* ══ RESEARCH ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">Research &amp; Discovery</div>
          <h2 className="cs-headline">Understanding the problem fast, without cutting corners.</h2>

          <div className="cs-body-text">
            <p>
              There was no dedicated research timeline for this project. I was a store associate, so the research happened during lull periods on the floor, on breaks, and in the margins of shifts. That constraint shaped the methods: I needed the highest signal in the shortest time, so I prioritized business analytics to anchor the problem in real numbers, user interviews to surface the human cost, and persona synthesis to translate individual voices into design targets.
            </p>
          </div>

          <div className="hd-stat-row">
            <div className="hd-stat-card">
              <div className="hd-stat-card-n">594</div>
              <div className="hd-stat-card-l">Store-generated leads<br />in 2022 (store 6869)</div>
            </div>
            <div className="hd-stat-card">
              <div className="hd-stat-card-n">1,541</div>
              <div className="hd-stat-card-l">Vendor-generated leads<br />same period</div>
            </div>
            <div className="hd-stat-card">
              <div className="hd-stat-card-n">4</div>
              <div className="hd-stat-card-l">Associate roles<br />interviewed</div>
            </div>
          </div>

          <div className="cs-body-text">
            <p>
              The business analytics finding was the anchor insight: only 27.8% of total service leads originated from store associates. The question that drove everything after was: why is that number so low?
            </p>
            <p>
              The interviews answered it and surfaced something the data alone couldn't show. Associates weren't just frustrated by having to re-enter customer information manually every time they switched from Order Up to Service Connect. They also didn't know which services to offer. Home Depot carries a wide range of service programs, and in the middle of a transaction, especially during high-volume build sale periods, associates had no quick way to know which services were relevant to what was in the customer's cart, or how to answer the questions customers asked about them.
            </p>
            <p>
              Two distinct failure points emerged: a workflow problem and a knowledge problem. Fixing one without the other would only close part of the gap.
            </p>
          </div>

          <div className="hd-persona-grid">
            <div className="hd-persona-card">
              <div className="hd-persona-role">Sales Specialist, Appliances</div>
              <p className="hd-persona-quote">"Having a way to learn the different service programs but through less systems would make my job easier."</p>
            </div>
            <div className="hd-persona-card">
              <div className="hd-persona-role">Service Desk Associate</div>
              <p className="hd-persona-quote">"I find joy in helping customers, but need to do it efficiently to avoid a line at the Service Desk."</p>
            </div>
            <div className="hd-persona-card">
              <div className="hd-persona-role">Specialty Department Supervisor</div>
              <p className="hd-persona-quote">"It's important for me to train my associates well enough to feel comfortable and confident in doing their job."</p>
            </div>
            <div className="hd-persona-card">
              <div className="hd-persona-role">Specialty Assistant Store Manager</div>
              <p className="hd-persona-quote">"I want to help the customer as much as I can with what little time I have to give from my own duties."</p>
            </div>
          </div>

          <div className="hd-screen-img">
            <img src={hdRandDis} alt="Business analytics slide showing Service Connect lead breakdown: 27.8% store generated vs 72.2% other generated for store 6869 in 2022" className="hd-screen-photo" />
          </div>
        </div>
      </section>

      {/* ══ PROBLEM FRAMING ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">Problem Framing</div>
          <h2 className="cs-headline">Companies don't hire designers to solve problems handed to them. They hire designers who find the right problem.</h2>

          <div className="cs-body-text">
            <p>
              The surface problem was: associates don't capture enough service leads. The real problems were two layers deeper.
            </p>
            <p>
              The first was workflow: associates are asked to sell a complete solution across systems that were never designed to work together. Every context switch between Order Up and Service Connect was a moment the customer's attention could, and did, move on.
            </p>
            <p>
              The second was knowledge: associates were expected to confidently recommend and explain service programs they had little training on, with no in-context information to reference during a live transaction. When a customer asked a follow-up question about a service, there was nowhere to look.
            </p>
            <p>
              Fixing the number meant fixing both. More training alone wouldn't solve a workflow problem. A better workflow alone wouldn't solve a knowledge gap. The solution had to address both at the point of sale.
            </p>
          </div>

          <p className="cs-section-label" style={{ marginBottom: 12 }}>Jobs to be done</p>
          <div className="hd-jtbd-grid">
            <div className="hd-jtbd-card">
              <div className="hd-jtbd-role">Store Associate</div>
              <p className="hd-jtbd-desc">Complete a full customer transaction without losing the customer to a system switch or getting stuck on a service question they weren't equipped to answer.</p>
            </div>
            <div className="hd-jtbd-card">
              <div className="hd-jtbd-role">Store Manager</div>
              <p className="hd-jtbd-desc">Increase store-generated service lead conversion without adding training overhead or new process steps for already-stretched teams.</p>
            </div>
            <div className="hd-jtbd-card">
              <div className="hd-jtbd-role">IT / Systems</div>
              <p className="hd-jtbd-desc">Enable the integration via API without requiring a rebuild of either platform; Service Connect data should be surfaceable inside Order Up without a full system migration.</p>
            </div>
            <div className="hd-jtbd-card">
              <div className="hd-jtbd-role">Home Depot Business</div>
              <p className="hd-jtbd-desc">Increase the share of service leads captured by store associates at the point of product sale, where associate relationships already exist and the moment is highest-intent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DESIGN PROCESS ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">Design Process</div>
          <h2 className="cs-headline">The direction I almost went with, and why it didn't survive.</h2>

          <div className="hd-fail-callout">
            <div className="hd-fail-eyebrow">What failed</div>
            <p className="hd-fail-text">
              My first instinct was to design a dedicated "Services" tab within Order Up, a separate section I could navigate to when a customer asked about services. It was cleaner to design but wrong in practice: it still required me to remember to go there, which was the same failure mode as switching to Service Connect. The fix wasn't a new tab. It was making services unavoidable at the right moment.
            </p>
          </div>

          <div className="cs-body-text">
            <p>
              The design process moved through three phases: rough sketching to explore layout options without committing to Order Up's existing patterns, low-fidelity wireframes to pressure-test the integration within the real interface structure, and high-fidelity mockups to validate the final approach at the fidelity needed to make the solution credible to leadership.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 16, margin: '28px 0' }}>
            <div className="hd-screen-img" style={{ flex: 1, margin: 0, height: 420, overflow: 'hidden' }}>
              <img src={hdSketch} alt="Early layout sketches exploring service surface options within Order Up" className="hd-screen-photo" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            <div className="hd-screen-img" style={{ flex: 1, margin: 0, height: 420, overflow: 'hidden' }}>
              <img src={hdLofi} alt="Low-fidelity wireframes showing service integration within the Order Up interface structure" className="hd-screen-photo" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
          </div>

          <div className="cs-body-text" style={{ marginTop: 8 }}>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, fontSize: '1.05em', marginBottom: 12 }}>The pivot that stuck</h3>
            <p>
              Instead of routing associates to services, bring services to the associate. When a service-eligible product is added to the Order Up cart, a Recommended Services widget surfaces automatically, pulling the top relevant services based on what's in the cart. But surfacing the right service wasn't enough on its own.
            </p>
            <p>
              The second problem from research was the knowledge gap: associates didn't know which services to recommend or how to answer customer questions about them. The widget addresses this by pulling product-matched service recommendations using the item's SEO keywords and product details already present in Order Up, so the services that surface aren't generic, they're contextually relevant to exactly what the customer is buying. Associates don't need to know every service program by heart. The system narrows it for them at the moment it matters.
            </p>
            <p>
              The Service Connect lead-capture flow then embeds directly in a modal. No tab-switching. No context loss. No re-entering customer information. The workflow stays intact and the associate stays in the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* ══ FINAL DESIGN ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">Final Design</div>
          <h2 className="cs-headline">Enterprise doesn't have to mean boring.</h2>

          <div className="cs-body-text">
            <p>
              The integration strategy centered on four key design decisions: a Recommended Services widget that auto-populates when qualifying products enter the cart, surfacing contextually relevant services pulled from the product's SEO keywords and item details so recommendations match what the customer is actually buying; an embedded Service Connect flow inside a modal so associates never leave Order Up; single-point data capture that eliminates manual re-entry between systems; and a unified customer view that surfaces relevant history from both platforms in one interface.
            </p>
          </div>

          <div className="hd-screen-img">
            <img src={hdHero} alt="Unified Order Up cart with Recommended Services widget: services surface automatically when qualifying products enter the cart" className="hd-screen-photo" />
          </div>

          <div className="cs-screens-grid">
            <div className="hd-screen-img" style={{ margin: 0 }}>
              <img src={hdServiceModal} alt="Service Connect modal embedded in Order Up: associate clicks Add Service and service information populates without leaving the app" className="hd-screen-photo" />
            </div>
            <div className="hd-screen-img" style={{ margin: 0 }}>
              <img src={hdSc} alt="Service Connect flow embedded in Order Up: customer data pre-populated, associate completes service lead capture without switching platforms" className="hd-screen-photo" />
            </div>
          </div>

          <div className="cs-body-text">
            <p>
              One deliberate constraint: the Recommended Services widget adheres to the existing Order Up design system, or as close to it as possible without having direct access to the component library. The integration should feel native, not bolted on. An associate who's used Order Up for two years shouldn't need to relearn anything.
            </p>
          </div>
        </div>
      </section>

      {/* ══ THE CASE FOR CHANGE ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">The Case for Change</div>
          <h2 className="cs-headline">Designing the work is one thing. Knowing how to make it land is another.</h2>

          <div className="hd-credential">
            <div className="hd-credential-eyebrow">What makes this different</div>
            <p className="hd-credential-text">
              Most portfolio case studies start with a brief. This one started with a shift. I was already inside the system; I knew where the friction was, I'd felt it myself, and I had enough context to ask the right questions. That inside-out perspective shaped every research and design decision, from which associates to interview to which failure mode to prioritize in the solution.
            </p>
          </div>

          <div className="hd-pres-box">
            <div className="hd-pres-box-header">
              <span className="hd-pres-box-title">How I brought this to corporate design leadership</span>
            </div>
            <div className="hd-pres-divider" />
            <div className="hd-pres-bullet">
              The presentation opened with the 27.8% data point before a single design screen. Leadership needs to feel the gap before they can appreciate the fix.
            </div>
            <div className="hd-pres-bullet">
              Corporate leadership may have never worked a shift on the floor. Before anything else, I established what Order Up and Service Connect actually are: what each platform does, how associates use them day-to-day, and where the handoff between them breaks down.
            </div>
            <div className="hd-pres-bullet">
              I presented the personas of everyone affected by corporate's decisions: the store associate capturing the lead and the service representative following up. Grounding the solution in real people made it harder to treat as an abstract systems problem.
            </div>
            <div className="hd-pres-bullet">
              The associate workflow told its own story: the system switch, the exact moment the lead is lost, the complexity of the current state making the solution feel inevitable rather than prescribed.
            </div>
            <div className="hd-pres-bullet">
              The limitations came before the close: automatic surfacing can be noise in already-qualified transactions. Naming it built trust. Framing it as a V2 configuration question kept things moving.
            </div>
            <div className="hd-pres-bullet">
              The roadmap closed it: multiple services, credit card integration, non-related service search, HomeDepot.com checkout. One integration unlocks the template for the next.
            </div>
          </div>

          <div style={{ display: 'flex', gap: 16, margin: '28px 0' }}>
            <div className="hd-screen-img" style={{ flex: 1, margin: 0 }}>
              <img src={hdSlide1} alt="Project deck slide: business analytics data showing service lead capture gap" className="hd-screen-photo" />
            </div>
            <div className="hd-screen-img" style={{ flex: 1, margin: 0 }}>
              <img src={hdSlide2} alt="Project deck slide: associate workflow comparison showing current vs. integrated state" className="hd-screen-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ REFLECTION ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">Reflection</div>
          <h2 className="cs-headline">What enterprise UX taught me about designing for people who have no choice.</h2>

          <div className="cs-body-text">
            <p>
              Working inside the system changed how I approached the research. The friction wasn't hypothetical; I'd lived it. But that familiarity also introduced a bias risk: when you know the problem intimately, you can over-index on your own experience. The interviews were partly a check on my own assumptions, not just a source of new information.
            </p>
            <p>
              After completing the designs, I had specialty associates and store managers walk through the proposed solution. They responded immediately to the reduction in repetitive data entry, and felt the contextual service recommendations would increase their confidence pitching a service lead mid-transaction, something the current system gave them no support for.
            </p>
            <p>
              The question I'd still want to answer: how much of the 72.2% gap is recoverable through better tooling vs. structural factors, like customers who simply prefer to book online? That split is the first thing I'd investigate with internal data access.
            </p>
          </div>

          <p className="cs-section-label" style={{ marginBottom: 12 }}>Key takeaways</p>

          <div className="hd-takeaway">
            <div className="hd-takeaway-n">01</div>
            <div>
              <p className="hd-takeaway-title">Design System Adherence Without Access</p>
              <p className="hd-takeaway-body">Trying to match a design system without access to it is its own design system challenge. It forced a deeper look at existing UI patterns and component behaviors, and gave a genuine appreciation for what a well-documented system enables.</p>
            </div>
          </div>
          <div className="hd-takeaway">
            <div className="hd-takeaway-n">02</div>
            <div>
              <p className="hd-takeaway-title">Insider Knowledge Is a Research Asset and a Bias Risk</p>
              <p className="hd-takeaway-body">Being inside the system meant understanding the problem at a level no brief could provide. It also meant actively checking assumptions against other associates' experiences to avoid designing only for my own friction points.</p>
            </div>
          </div>
          <div className="hd-takeaway">
            <div className="hd-takeaway-n">03</div>
            <div>
              <p className="hd-takeaway-title">API Logic Is a Design Constraint</p>
              <p className="hd-takeaway-body">Understanding how the Service Connect API would surface data inside Order Up, including what would be available and latency in a store environment, changed specific interaction decisions. Designers who understand technical integration make better product decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FUTURE ITERATIONS ══ */}
      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-section-label">Future Iterations</div>
          <h2 className="cs-headline">One integration unlocks the template for the next.</h2>

          <div className="cs-feature-grid">
            <div className="cs-feature-card">
              <h3 className="cs-feature-name">Adding Multiple Services</h3>
              <p className="cs-feature-desc">The modal pattern handles one service lead cleanly. What happens when a customer wants two? Service stacking needs to feel like a natural extension of the workflow, not a new interaction to learn mid-transaction.</p>
            </div>
            <div className="cs-feature-card">
              <h3 className="cs-feature-name">Home Depot Credit Card Integration</h3>
              <p className="cs-feature-desc">The same API-modal pattern that surfaces Service Connect inside Order Up could apply to new HD card applications. Same integration logic, different data source; one template, multiple problems solved.</p>
            </div>
            <div className="cs-feature-card">
              <h3 className="cs-feature-name">Search for Non-Related Services</h3>
              <p className="cs-feature-desc">The widget surfaces services tied to what's in the cart. But customers don't always buy before they ask. A Service Connect search bar would cover unrelated service requests without rebuilding anything that already works.</p>
            </div>
            <div className="cs-feature-card">
              <h3 className="cs-feature-name">Pushing the Flow to HomeDepot.com</h3>
              <p className="cs-feature-desc">The in-store and online experiences currently have no relationship to each other. Surfacing relevant services at the digital checkout would mirror what the associate does in person, closing the loop between channels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ NEXT PROJECT ══ */}
      <div className="cs-inner" style={{ paddingBottom: 96 }}>
        <div className="next-project" style={{ cursor: 'pointer' }} onClick={onNext}>
          <div>
            <div className="label">Next project</div>
            <div className="title">Interaction design for a world that had to feel like Harry Potter.</div>
          </div>
          <div className="arrow">→</div>
        </div>
      </div>
    </>
  );
}
