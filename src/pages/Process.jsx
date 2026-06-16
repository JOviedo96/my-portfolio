const steps = [
  {
    title: "Frame",
    blurb: "Before anything else, I make sure we're solving the right problem, not the stated one. That means talking to whoever requested the work, asking what would prove us wrong, and rewriting the brief until everyone agrees on what success actually looks like in users' words, not features.",
    methods: ["Stakeholder interviews", "JTBD mapping", "Problem statement", "Assumption mapping", "Success metrics"],
    quote: "The reframe is usually more valuable than the redesign.",
  },
  {
    title: "Dig",
    blurb: "Generative research with the people we're designing for. Mixed methods by default: qualitative for the why, quantitative for the scale. I run thin, frequent studies rather than big quarterly ones. When the dataset is large enough I use Python to find patterns across thousands of data points before I interview a single person.",
    methods: ["User interviews", "Contextual inquiry", "Survey design", "App review analysis", "Python NLP pipeline", "Behavioral analytics"],
    quote: "Talk to real people before opening Figma. It's a 30% time discount.",
  },
  {
    title: "Synthesize",
    blurb: "Making sense of what the research actually found. This is where I go from data to something the team can act on: affinity mapping, JTBD frameworks, journey maps, personas. The goal is a synthesis everyone can use, not just a deck with themes nobody remembers two weeks later.",
    methods: ["Affinity mapping", "JTBD frameworks", "User personas", "Journey mapping", "Statistical analysis"],
    quote: "Data without synthesis is just expensive noise.",
  },
  {
    title: "Build",
    blurb: "Hi-fi prototypes that engineers can actually read. I work in the same Figma file as the team, write specs as we go, and pair on edge cases instead of throwing things over the wall. When Figma can't simulate what I need to test (particularly AI interactions), I build a coded prototype instead.",
    methods: ["Hi-fi prototypes", "Tokens & specs", "Pair-design with eng", "Coded prototypes (React)", "Claude API testing"],
    quote: "Design that ships looks different from design that wins awards. I'm here for the first one.",
  },
  {
    title: "Measure",
    blurb: "Every project gets a \"what would prove us wrong?\" moment before launch. Then I instrument it with PostHog, Maze, or whatever fits the question, watch the leading indicators, and decide what to keep, kill, or rework. Research doesn't end at ship. That's where it gets interesting.",
    methods: ["PostHog analytics", "Usability testing", "A/B testing", "Post-launch interviews", "Maze", "Iteration plan"],
    quote: "If you can't say what would change your mind, you don't have a hypothesis.",
  },
];

export function Process() {
  return (
    <div className="page">

      <h1>A <em>process</em>, not a recipe.</h1>
      <p className="process-intro">
        I treat process as a starting position, not a script. Every project bends it differently. But across all of them, the same five moves keep showing up.
      </p>

      <div className="steps">
        {steps.map((s, i) => (
          <div className="step" key={s.title}>
            <div className="num">{String(i + 1).padStart(2, "0")}</div>
            <div className="step-body">
              <h3>{s.title}.</h3>
              <p>{s.blurb}</p>
            </div>
            <div className="step-side">
              <div>
                <div className="label">Typical methods</div>
                <div className="methods">
                  {s.methods.map((m) => <span className="method" key={m}>{m}</span>)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: 64 }}>Six things I <em>actually believe</em>.</h2>
      <div className="principles">
        <div className="principle"><div className="p-num">01</div><div><h4>Specificity beats novelty.</h4><p>The best ideas are usually obvious in hindsight. I'll innovate when the problem genuinely needs it, but I won't invent something new just to avoid borrowing something that works.</p></div></div>
        <div className="principle"><div className="p-num">02</div><div><h4>Constraints are coordinates.</h4><p>Tight scope forces clarity. I push for the smallest version that actually solves the problem, not the smallest version, period.</p></div></div>
        <div className="principle"><div className="p-num">03</div><div><h4>Research is a verb.</h4><p>It's not a phase. It happens before, during, and after design; the whole team should be doing it together.</p></div></div>
        <div className="principle"><div className="p-num">04</div><div><h4>The stated problem is rarely the real one.</h4><p>I keep asking why until I understand what's actually broken. The stated problem is usually a symptom. I'd rather fix the cause.</p></div></div>
        <div className="principle"><div className="p-num">05</div><div><h4>AI accelerates. Judgment decides.</h4><p>I use AI tools for synthesis, exploration, and testing. But I'm always the one deciding what's good.</p></div></div>
        <div className="principle"><div className="p-num">06</div><div><h4>Ship, then learn.</h4><p>A B+ product in production often teaches you more than an A in Figma. But some problems are too consequential to learn from after the fact. I match the testing strategy to the stakes.</p></div></div>
      </div>
    </div>
  );
}
