import meWithWands from '../assets/me-with-wands.jpeg';

export function About() {
  return (
    <div className="page">
      <h1>I make the complicated stuff feel <em>obvious</em>.</h1>

      <div className="about-grid">
        <div>
          <p className="about-lead">
            I'm Jamie, a Product Designer who builds software for people who can't afford for it to be confusing. Parents managing their kids' accounts. Patients figuring out what to do next. Associates navigating three systems on a busy shift.
          </p>
          <div className="about-prose">
            <p>
              The through-line is always the same: <strong>complicated things deserve to be simple</strong>. That means more research than mockups, more pruning than adding, and a stubborn insistence on finding the real problem before solving the surface one.
            </p>
            <p>
              I came to design through archaeology and anthropology; I've always been more interested in what's buried beneath the surface than what's sitting on top. Along the way I coached figure skating, refereed hockey, performed in a skating recital one evening and ended up in the ICU the next morning, went back to school full-time while working retail through a pandemic, and graduated with my master's in 2026. Somewhere in all of it I found that making complicated things feel simple is what I was already doing.
            </p>
            <p>
              I work best with teams that take research seriously and aren't precious about their first ideas. I've shipped consumer experiences at Universal, untangled identity systems at SportsEngine, and led a capstone now under review at a peer-reviewed journal. Currently in Orlando, FL. Open to remote.
            </p>
          </div>

          <div className="values">
            <div className="value">
              <div className="v-icon">◎</div>
              <h3>Research is a verb</h3>
              <p>It happens before, during, and after design, not as a phase. I pair every study with a recommendation and a plan to act on it.</p>
            </div>
            <div className="value">
              <div className="v-icon">✂</div>
              <h3>Less, but clearer</h3>
              <p>The best designs say one thing well. I'd rather cut a feature than ship a confusing one. Constraints clarify what actually matters.</p>
            </div>
            <div className="value">
              <div className="v-icon">⛏</div>
              <h3>Dig until it's real</h3>
              <p>The stated problem is rarely the real one. I keep asking why until I find something worth solving. Then I solve that instead.</p>
            </div>
          </div>
        </div>

        <aside className="about-portrait">
          <div className="photo" style={{ padding: 0, overflow: 'hidden' }}>
            <img src={meWithWands} alt="Jamie Oviedo" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
            <div className="label"><span>JAMIE · 2026</span><span>FL</span></div>
          </div>
          <div className="name">Jamie Oviedo</div>
          <div className="meta">she/her · Orlando, FL · EST</div>
          <div className="links">
            <a href="https://www.linkedin.com/in/jamie-oviedo/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><span>→</span></a>
          </div>
        </aside>
      </div>

      <section className="about-cv">
        <h2>What I've been <em>up to</em></h2>

        <div className="cv-group">
          <div className="cv-group-label">Experience</div>
          <div className="timeline">
            <div className="tl-row">
              <span className="yr">Nov 2024–Present</span>
              <span className="who">SportsEngine <em>Remote</em></span>
              <span className="what">UX/UI Designer</span>
            </div>
            <div className="tl-row">
              <span className="yr">Sept 2023–Apr 2024</span>
              <span className="who">Universal Destinations &amp; Experiences <em>Orlando, FL</em></span>
              <span className="what">UX Design Intern</span>
            </div>
          </div>
        </div>

        <div className="cv-group">
          <div className="cv-group-label">Education</div>
          <div className="timeline">
            <div className="tl-row">
              <span className="yr">Graduating Aug 2026</span>
              <span className="who">University of Michigan-Dearborn <em>Dearborn, MI</em></span>
              <span className="what">M.S. Human-Centered Design & Engineering · UX specialization</span>
            </div>
            <div className="tl-row">
              <span className="yr">Graduated Aug 2024</span>
              <span className="who">University of Central Florida <em>Orlando, FL</em></span>
              <span className="what">B.S. General Integrated Studies · curated around UX, psychology &amp; CS</span>
            </div>
          </div>
        </div>
      </section>

      <section className="outside">
        <div className="outside-head">
          <h2>Outside of <em>work</em></h2>
          <div className="quip">Things I love that have<br />nothing to do with shipping.</div>
        </div>

        <div className="hobbies">
          <div className="hobby h-garden">
            <div className="h-icon">◈</div>
            <div className="h-eyebrow">Growing Season</div>
            <h4>Backyard, but make it <em>intentional</em>.</h4>
            <p>Small vegetable and herb garden out back, currently restrained but aggressively planning the expansion. There's something satisfying about designing a system where the output is dinner.</p>
          </div>

          <div className="hobby h-stitch">
            <div className="h-icon">▦</div>
            <div className="h-eyebrow">One Square at a Time</div>
            <h4>Pixels, but make it <em>tactile</em>.</h4>
            <p>Cross-stitching is just low-res image rendering with thread. I love watching the picture load in one square at a time; it's the most analog version of watching something come to life I've found.</p>
          </div>

          <div className="hobby h-baking">
            <div className="h-icon">◎</div>
            <div className="h-eyebrow">Ongoing Negotiation</div>
            <h4>The sugar is <em>winning</em>.</h4>
            <p>I bake constantly and am locked in a losing battle with excess sugar. Healthy dessert recipes are genuinely welcome. No, really. Send them.</p>
          </div>

          <div className="hobby h-humanities">
            <div className="h-icon">❖</div>
            <div className="h-eyebrow">Still Digging</div>
            <h4>History never left, it just got a <em>UX problem</em>.</h4>
            <p>My love of archaeology didn't go away. It found a new angle. I read peer-reviewed journals on digital humanities and get genuinely excited about what good UX could do for how we store, access, and experience human history.</p>
          </div>

          <div className="hobby h-sports">
            <div className="h-icon">◉</div>
            <div className="h-eyebrow">House Divided</div>
            <h4>Loyal fans. <em>Analytical</em> about it.</h4>
            <p>My husband and I are committed sports watchers, sometimes on the same team and sometimes not. We host watch parties, break down plays after the game, and take the whole thing more seriously than is probably healthy.</p>
          </div>

          <div className="hobby h-movies">
            <div className="h-icon">▷</div>
            <div className="h-eyebrow">Comfort Genre</div>
            <h4>Slow <em>movies</em>, slow Sundays.</h4>
            <p>When I'm not watching sports I've got a favorite in the background while cross-stitching, and I will quote it like my life depends on it. It's not a problem. It's a skill.</p>
          </div>

          <div className="hobby h-orlando">
            <div className="h-icon">⊕</div>
            <div className="h-eyebrow">Local First</div>
            <h4>Orlando is more than the parks. <em>(The parks are also great.)</em></h4>
            <p>Every year new restaurants, spots, and neighborhoods open up and I make it my business to find them. Orlando gets underestimated constantly. That's fine. More reservations for me.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
