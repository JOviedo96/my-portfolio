import { PROJECTS, CHIPS } from '../data/projects.js';
import { PHASES } from '../data/phases.js';

export function getPageContext(route, projectId) {
  const allProjects = PROJECTS.map((p) =>
    `[${p.n}] ${p.company} — ${p.title} (${p.year}). Role: ${p.role}. Outcome: ${p.metric} ${p.metricLabel}. Tags: ${p.tags.join(", ")}. ${p.summary}`
  ).join("\n");

  if (route === "detail" && projectId) {
    const p = PROJECTS.find((x) => x.n === projectId);
    if (p) {
      const ph = PHASES[p.n] || [];
      const phaseSummary = ph.map((x) => {
        const decision = x.decision
          ? `Decision: chose "${x.decision.chose}" over "${x.decision.over}" because ${x.decision.because}. Tradeoff: ${x.decision.tradeoff}.`
          : "";
        const persona = x.persona ? `Persona: ${x.persona.name} (${x.persona.role}) — state: ${x.persona.state} need: ${x.persona.need}` : "";
        return `## ${x.title} — ${x.question}\n${x.body.join(" ")}\n${persona}\n${decision}`.trim();
      }).join("\n\n");

      return {
        scope: "project",
        label: `Ask about this case study.`,
        placeholder: `Ask about ${p.company} — tradeoffs, decisions, outcomes…`,
        chips: [
          { q: `What was the key tradeoff?`, icon: "⚖" },
          { q: `How was this decision validated?`, icon: "◆" },
          { q: `Why this approach over alternatives?`, icon: "✺" },
          { q: `What would you do differently?`, icon: "◐" },
          { q: `Who is the user, exactly?`, icon: "◍" },
          { q: `How does this generalize?`, icon: "★" },
        ],
        systemContext: `You are answering questions about ONE specific case study on Jamie Oviedo's portfolio. Stay tightly scoped to THIS project. If asked about something unrelated, briefly redirect to relevant case studies.

PROJECT METADATA
[${p.n}] ${p.company} — ${p.title}
Year: ${p.year} · Role: ${p.role} · Timeline: ${p.timeline} · Team: ${p.team}
Summary: ${p.summary}
Outcome: ${p.metric} ${p.metricLabel}
Tags: ${p.tags.join(", ")}

PROJECT PHASES (Problem → Insight → Decision → Outcome)
${phaseSummary}`,
      };
    }
  }

  if (route === "about") {
    return {
      scope: "about",
      label: `Ask about Jamie.`,
      placeholder: `Ask about background, working style, location…`,
      chips: [
        { q: `What are her strengths?`, icon: "★" },
        { q: `What teams does she work best with?`, icon: "◆" },
        { q: `Where is she based?`, icon: "◐" },
        { q: `Leadership experience?`, icon: "❍" },
        { q: `What's her approach to research?`, icon: "✺" },
      ],
      systemContext: `You are answering questions about Jamie Oviedo herself — her background, working style, values, and location. Stay scoped to the About page content.

ABOUT MAYA
Senior Product Designer, 8 years experience.
Based in Orlando, FL. Open to remote, hybrid, or relocation.
Through-line: users have no time to learn. Job is to make the right thing the obvious thing.
Works best with small teams that take research seriously.
Led design at Lattice and Atlassian. Embedded with ML teams at Notion. Runs her own field studies.

VALUES
- Research that ships: insights are only valuable if they change a decision. Findings written as recommendations.
- Less, but louder: best designs say one clear thing. Rather cut a feature than ship a fuzzy one.
- Engineers as users: tokens, docs, migration paths matter. Engineers are a primary audience for systems work.

CAREER (recent → older)
2024 — Now: Lattice · Lead Product Designer. Performance, 1:1s, manager tools.
2023: Headspace Health · Senior Designer & Researcher. Therapy onboarding redesign.
2022 — 2023: Notion · Product Designer, AI. Disambiguation layer for Notion AI.
2020 — 2022: Atlassian · Designer, Design Systems. Jira component library migration.
Earlier: various roles, self-funded research projects.

OUTSIDE WORK
Competitive sourdough baker. Mediocre cellist. Reads HCI papers on planes.

PROJECTS (for cross-reference, cite by [NN])
${allProjects}`,
    };
  }

  if (route === "process") {
    return {
      scope: "process",
      label: `Ask about how she works.`,
      placeholder: `Ask about her process, methods, or principles…`,
      chips: [
        { q: `What research methods does she use?`, icon: "◆" },
        { q: `How does she handle ambiguity?`, icon: "◍" },
        { q: `How does she work with engineers?`, icon: "✺" },
        { q: `When does she ship vs. iterate?`, icon: "▲" },
        { q: `What does she do about edge cases?`, icon: "★" },
      ],
      systemContext: `You are answering questions about Jamie Oviedo's design process and principles. Stay scoped to her working approach.

PROCESS
She treats process as a starting position, not a script. Five moves show up across her projects:
1. Frame — reframing the problem. Three weeks of interviews + data audit before opening Figma.
2. Research — mixed methods. Generative interviews, behavioral data, diary studies.
3. Design — wide before deep. Six lo-fi directions, narrowed to two, then one. Pair-design with eng.
4. Build — hi-fi prototypes engineers can read. Tokens & specs. Pair on edge cases.
5. Measure — instrument leading indicators. "What would prove us wrong?" before launch.

PRINCIPLES
- The brief is rarely the problem. Reframing is more valuable than solving.
- Constraints are coordinates. Tight scope forces clarity.
- Research is a verb, not a phase. Happens before, during, after.
- Edges are where craft lives. Empty states, error states, the 4-character truncation.
- Words come first. Draft copy before layout.
- Ship, then learn. A B+ product in production teaches more than an A in Figma.

PROJECTS (for cross-reference, cite by [NN])
${allProjects}`,
    };
  }

  return {
    scope: "home",
    label: `Grounded in the 5 projects below — answers in seconds.`,
    placeholder: `e.g. 'Has she shipped AI features?' or 'How does she handle ambiguity?'`,
    chips: CHIPS,
    systemContext: `You are an AI assistant on Jamie Oviedo's portfolio site. A hiring manager or recruiter just asked a question. Answer grounded in the project data below. Cite projects by their number in brackets like [01].

PROJECTS:
${allProjects}`,
  };
}
