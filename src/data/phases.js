export const PHASES = {
  "01": [
    {
      key: "problem",
      title: "Problem",
      question: "Why was 1:1 the only feature trending down?",
      persona: {
        name: "Sarah",
        role: "Eng Manager · 6 reports",
        state: "Skipping 1:1s when sprints heat up. Feels guilty about it.",
        need: "To show up prepared without spending Sunday night on it.",
      },
      body: [
        "NPS for 1:1s was sliding — the only surface in the suite trending down. Support tickets pointed at 'wasted time' and 'no follow-through.' Leadership wanted a redesign of the meeting view.",
        "But fourteen interviews told a quieter story. Managers weren't avoiding the meeting. They were avoiding the prep. The pain wasn't in the room — it was in the 23 hours before it.",
      ],
      artifact: {
        kind: "quote",
        text: "I love my reports. I just don't want to talk to them when I haven't thought about what to say.",
        cite: "Sarah, EM · interview 04 of 14",
      },
    },
    {
      key: "insight",
      title: "Insight",
      question: "Where in the week does the meeting actually live?",
      persona: {
        name: "Marcus",
        role: "Senior IC · reports to Sarah",
        state: "Walks in cold. Half the meeting is recapping the week.",
        need: "Shared context before the meeting, not during it.",
      },
      body: [
        "We instrumented prep behavior across 12k accounts and ran a 4-week diary study with 8 power users. Two patterns emerged.",
        "First: 71% of managers opened the 1:1 tool less than 10 minutes before the meeting. Second: the ICs who got the most out of 1:1s were the ones who wrote first — not the managers.",
      ],
      artifact: {
        kind: "data",
        stat: "71%",
        statLabel: "of managers opened 1:1 prep <10 min before meeting",
        chart: "prep-time",
        caption: "Behavioral data · 12,400 accounts · 8 weeks",
      },
    },
    {
      key: "decision",
      title: "Decision",
      question: "What if the meeting wasn't the product?",
      persona: {
        name: "Sarah & Marcus",
        role: "Together",
        state: "Both arrive at the meeting with the doc already half-written.",
        need: "Less ceremony. More signal.",
      },
      body: [
        "We inverted the surface. The shared prep doc became the home; the meeting became a viewport into it. Notes, talking points, and follow-ups now lived async-first, with the calendar event acting as a checkpoint, not a container.",
        "This broke the existing mental model for the 18% of power users who treated 1:1s as 'living agendas.' We knew it would. We shipped it anyway.",
      ],
      decision: {
        chose: "Async-first prep doc",
        over: "Meeting-first agenda builder",
        because: "Behavior already showed 71% of value was created outside the meeting. We followed the work, not the calendar invite.",
        tradeoff: "Lost some flexibility for power users who layered complex agendas. Mitigated with a 'classic view' toggle in week 6.",
      },
      artifact: {
        kind: "sketch",
        title: "Lo-fi v3 — async prep as the home",
        annotations: [
          { x: 28, y: 22, n: 1, text: "Prep doc is now the entry point — meeting is contextual." },
          { x: 72, y: 48, n: 2, text: "Both parties write first. Manager can't ship questions without prompts." },
          { x: 42, y: 78, n: 3, text: "Meeting button collapsed — emphasizes async work." },
        ],
      },
    },
    {
      key: "outcome",
      title: "Outcome",
      question: "Did changing the metaphor change the behavior?",
      persona: {
        name: "Sarah, 6 months later",
        role: "Same EM. Different week.",
        state: "Writes prep on Friday afternoons. Treats Monday 1:1s like reviewing a PR.",
        need: "Met. She's now an internal advocate for the redesign.",
      },
      body: [
        "Weekly active managers climbed 38% in the 90-day post-launch window and held through the next two quarters. Support volume for 1:1-related tickets dropped 28%. Most telling: the cohort that complained loudest pre-launch ran our internal NPS afterward.",
        "The async model became the template for two adjacent surfaces — Reviews and Goals — within the next year.",
      ],
      artifact: {
        kind: "ba",
        before: { label: "Before", metric: "—11% NPS", note: "Sliding 2 quarters" },
        after: { label: "After (90d)", metric: "+38% WAM", note: "Sustained 6 mo" },
        caption: "Headline metrics — Lattice 1:1, Q3 2024 → Q1 2025",
      },
    },
  ],

  "02": [
    {
      key: "problem",
      title: "Problem",
      question: "Why were so many people quitting therapy after one session?",
      persona: {
        name: "Alex",
        role: "First-time therapy seeker",
        state: "Opened the app three times. Closed it without booking.",
        need: "To feel less like they're applying for a job.",
      },
      body: [
        "Headspace's therapy onboarding had a 47% drop-off between intake and first session — concentrated in users with no prior therapy experience.",
        "The brief was 'shorten the intake.' But shorter intakes had been tried twice before and didn't move the needle. Something else was happening in those 6 minutes.",
      ],
      artifact: {
        kind: "quote",
        text: "It felt like a job interview where I had to convince them I was sad enough.",
        cite: "Participant 12 · pre-study intake",
      },
    },
    {
      key: "insight",
      title: "Insight",
      question: "What tone does a first-time user actually need?",
      persona: {
        name: "Alex",
        role: "Mid-intake",
        state: "Encountering clinical language for the first time. Bouncing.",
        need: "Permission, not assessment.",
      },
      body: [
        "We ran 47 mixed-methods interviews across two cohorts: people who completed onboarding and people who dropped. The completers had something the droppers didn't — a sense that the app was talking to them, not screening them.",
        "Clinical-feeling language was the strongest predictor of drop-off, ahead of length.",
      ],
      artifact: {
        kind: "data",
        stat: "3.2×",
        statLabel: "higher drop when intake used clinical phrasing",
        chart: "tone-impact",
        caption: "Mixed-methods study · n=47 · co-run with clinical team",
      },
    },
    {
      key: "decision",
      title: "Decision",
      question: "Can a form feel like a conversation?",
      persona: {
        name: "Alex",
        role: "Now in the new flow",
        state: "Reading a question. Pausing. Continuing.",
        need: "To be heard before being measured.",
      },
      body: [
        "We rebuilt intake as a sequenced, voice-led conversation that listens before it asks anything diagnostic. Clinical screeners stayed — but moved behind a relationship.",
        "This added two minutes to median intake time. We accepted that, because the data said completion mattered more than speed.",
      ],
      decision: {
        chose: "Conversational, listen-first intake",
        over: "A faster, shorter clinical form",
        because: "Speed wasn't the lever — tone was. The clinical content stays; the framing changes.",
        tradeoff: "+2 min median intake time. We bet that completion mattered more than duration, and the data agreed.",
      },
      artifact: {
        kind: "sketch",
        title: "Conversational intake — sequence sketch",
        annotations: [
          { x: 26, y: 18, n: 1, text: "Opens with reflection, not assessment." },
          { x: 70, y: 52, n: 2, text: "Clinical screeners live behind warmth." },
          { x: 38, y: 80, n: 3, text: "Always an exit. Never a dead end." },
        ],
      },
    },
    {
      key: "outcome",
      title: "Outcome",
      question: "Did people stay because the tone changed?",
      persona: {
        name: "Alex, 8 weeks later",
        role: "On their fourth session",
        state: "Booked the next two ahead of time.",
        need: "Met. They told a friend.",
      },
      body: [
        "First-session drop fell 47%. We held the result through 6 months and a cohort expansion. The clinical team co-authored the resulting case study and the pattern now informs Headspace's broader product copy.",
      ],
      artifact: {
        kind: "ba",
        before: { label: "Before", metric: "47% drop", note: "Intake → first session" },
        after: { label: "After (90d)", metric: "−47%", note: "Sustained 6 mo" },
        caption: "Drop-off · pre/post intake redesign",
      },
    },
  ],

  "03": [
    {
      key: "problem",
      title: "Problem",
      question: "Why was Notion AI confidently wrong so often?",
      persona: {
        name: "Devon",
        role: "PM at a 200-person SaaS",
        state: "Asks AI to 'summarize the launch doc.' Gets the wrong launch.",
        need: "An AI that admits when it doesn't know which thing I mean.",
      },
      body: [
        "Hallucination complaints were the top AI feedback theme — but classical 'reduce hallucination' levers (better retrieval, lower temp) didn't move the needle on user-perceived quality.",
        "The issue wasn't accuracy. It was confidence in the face of ambiguity.",
      ],
      artifact: {
        kind: "quote",
        text: "It just picks one and runs. I wish it would ask me which doc I meant.",
        cite: "User study · eval cohort 3",
      },
    },
    {
      key: "insight",
      title: "Insight",
      question: "What if asking one question is cheaper than five wrong answers?",
      persona: {
        name: "Devon",
        role: "Mid-prompt",
        state: "Typing a vague request. Holding three possible meanings in their head.",
        need: "A model that asks them which one — fast.",
      },
      body: [
        "I ran weekly eval reviews with the ML team for two months. We tagged every user prompt by ambiguity score and looked at what happened next.",
        "When the model guessed wrong on an ambiguous prompt, users either retried (cheap), abandoned (expensive), or accepted the wrong answer (catastrophic). A single clarifying question collapsed all three failure modes.",
      ],
      artifact: {
        kind: "data",
        stat: "2.4×",
        statLabel: "task completion when AI asked one clarifying question",
        chart: "ambiguity-resolution",
        caption: "Eval pipeline · 12 weeks · 9.4k prompts",
      },
    },
    {
      key: "decision",
      title: "Decision",
      question: "When does the model speak, and when does it ask?",
      persona: {
        name: "Devon",
        role: "Using it daily",
        state: "Gets asked maybe 1 in 5 prompts. Stops noticing.",
        need: "Less friction over time, not more.",
      },
      body: [
        "I designed a disambiguation layer that only triggers above a threshold ambiguity score, and only asks one question — never two. The model commits to an answer if no reply comes within 8 seconds.",
        "We rejected a more sophisticated multi-turn clarification design. Power users found it patronizing in early evals.",
      ],
      decision: {
        chose: "Single-question, one-shot clarification",
        over: "Multi-turn dialog clarification",
        because: "One question beat zero. Two questions felt like the model didn't trust the user.",
        tradeoff: "Some ambiguity slips through on edge cases. We accepted it — the cost of being asked twice was higher than the cost of one occasional wrong answer.",
      },
      artifact: {
        kind: "sketch",
        title: "Disambiguation layer — decision tree",
        annotations: [
          { x: 24, y: 22, n: 1, text: "Ambiguity scored at prompt time." },
          { x: 70, y: 46, n: 2, text: "Above threshold → ask. Below → commit." },
          { x: 40, y: 78, n: 3, text: "One question, max. Then resolve." },
        ],
      },
    },
    {
      key: "outcome",
      title: "Outcome",
      question: "Did asking make the model feel smarter?",
      persona: {
        name: "Devon, 3 months later",
        role: "Heavy user",
        state: "Uses Notion AI 4× more than at launch.",
        need: "Met. Refers it to their team.",
      },
      body: [
        "Hallucination complaints dropped 51% in the first 90 days. Task completion on ambiguous prompts went up 2.4×. The 'ask one question' pattern was adopted by two adjacent surfaces.",
      ],
      artifact: {
        kind: "ba",
        before: { label: "Before", metric: "Top complaint", note: "Hallucinations" },
        after: { label: "After", metric: "−51%", note: "Complaint volume · 90d" },
        caption: "Disambiguation layer · post-ship",
      },
    },
  ],

  "04": [
    {
      key: "problem",
      title: "Problem",
      question: "What do nurses actually do at 3am that no EHR captures?",
      persona: {
        name: "Jamie",
        role: "Night-shift RN · 14 years",
        state: "Charting on a workstation-on-wheels at the end of the hall.",
        need: "To finish before the next call light.",
      },
      body: [
        "There's a research gap in clinical informatics: most EHR studies happen on day shift, in well-lit rooms, with researchers present. Night-shift charting — where most documentation actually happens — is largely invisible to design teams.",
        "I self-funded a six-week study across three units to surface what the day shift can't see.",
      ],
      artifact: {
        kind: "quote",
        text: "I haven't seen the documentation screen in normal light in two years.",
        cite: "Jamie, RN · ride-along 02 · 2am",
      },
    },
    {
      key: "insight",
      title: "Insight",
      question: "What rituals replace the interface?",
      persona: {
        name: "Jamie",
        role: "Mid-shift",
        state: "Has 11 tabs open. Three are paper notes taped to the monitor.",
        need: "A system that meets her where she actually works.",
      },
      body: [
        "Across 47 hours of contextual inquiry, the same pattern recurred: nurses had built parallel paper systems to compensate for screen interfaces that didn't fit how shifts actually unfold.",
        "The most experienced nurses had the most paper. The interface wasn't getting worse — they were getting better at routing around it.",
      ],
      artifact: {
        kind: "data",
        stat: "9 of 12",
        statLabel: "nurses maintained a parallel paper system",
        chart: "ritual-mapping",
        caption: "Contextual inquiry · 3 units · 6 weeks",
      },
    },
    {
      key: "decision",
      title: "Decision",
      question: "What's the report's job — and what's the speculative shell for?",
      persona: {
        name: "Jamie's manager",
        role: "Reading the published report",
        state: "Sharing it with their informatics committee.",
        need: "Something concrete enough to argue for, abstract enough to apply.",
      },
      body: [
        "The output had two audiences: clinicians and informaticists. I published a plain-language report grounded in observations, plus a redesigned EHR shell concept as a 'what if' — concrete enough to argue with.",
        "I deliberately did not propose a feature set. The point was the ritual, not the screen.",
      ],
      decision: {
        chose: "Published report + speculative shell concept",
        over: "A specific feature proposal for one EHR vendor",
        because: "Generalizable rituals beat a vendor-specific feature list. The report can travel; a Cerner spec can't.",
        tradeoff: "Less immediate adoption. Wider influence — two design schools picked it up as a teaching case.",
      },
      artifact: {
        kind: "sketch",
        title: "Speculative EHR shell — ritual-first",
        annotations: [
          { x: 26, y: 22, n: 1, text: "Shift-aware home — different at 8am and 3am." },
          { x: 70, y: 46, n: 2, text: "Paper-equivalent quick-capture, by design." },
          { x: 38, y: 80, n: 3, text: "Handoff is the primary view, not an extra one." },
        ],
      },
    },
    {
      key: "outcome",
      title: "Outcome",
      question: "Did a self-funded study reach anyone?",
      persona: {
        name: "The next nurse-designer",
        role: "Reading the report in a coursepack",
        state: "Building on it.",
        need: "Met. The work compounds.",
      },
      body: [
        "The report has been used as a teaching case at two design schools and cited in three subsequent papers. Two health systems contacted me afterward; one became a paid follow-up engagement.",
      ],
      artifact: {
        kind: "ba",
        before: { label: "Before", metric: "Self-funded", note: "No client, no brief" },
        after: { label: "After", metric: "2 schools", note: "Adopted as teaching case" },
        caption: "Outcomes — public report · 18 months post-publication",
      },
    },
  ],

  "05": [
    {
      key: "problem",
      title: "Problem",
      question: "Why was Jira's component library at 23% adoption after two years?",
      persona: {
        name: "Priya",
        role: "Senior FE engineer · Jira platform",
        state: "Re-skinning a 2018 component because the new one doesn't fit her use case.",
        need: "A library that gets out of her way.",
      },
      body: [
        "The system existed. The components were good. Adoption was bad. The 'just use the system' mandate from leadership wasn't moving the number.",
        "We were treating engineers as a downstream audience. They weren't.",
      ],
      artifact: {
        kind: "quote",
        text: "The new components look great. They also can't do what I need.",
        cite: "Priya · platform engineer survey · n=84",
      },
    },
    {
      key: "insight",
      title: "Insight",
      question: "What's an engineer's actual job-to-be-done?",
      persona: {
        name: "Priya",
        role: "Shipping a feature",
        state: "Reaches for the system. Hits a missing case. Forks.",
        need: "Escape hatches that don't punish her.",
      },
      body: [
        "We surveyed 84 platform engineers and shadowed 12 across three weeks. The pattern: forks happened in the last 10% of any component — the slot the system didn't anticipate.",
        "Engineers weren't avoiding the system. They were getting blocked by it on the last mile.",
      ],
      artifact: {
        kind: "data",
        stat: "82%",
        statLabel: "of forks happened in the last 10% of component logic",
        chart: "fork-anatomy",
        caption: "Code analysis + interviews · 12 weeks · n=84",
      },
    },
    {
      key: "decision",
      title: "Decision",
      question: "Should the system be opinionated or composable?",
      persona: {
        name: "Priya",
        role: "Using the new tokens",
        state: "Composes a non-standard button in 4 lines using primitives.",
        need: "Met. She stops forking.",
      },
      body: [
        "We rebuilt the library around tokens and primitives, with composed components as a layer on top — not the only layer. Engineers could now reach into the system at any altitude.",
        "We knew this would feel less 'designed' to other designers. We made our peace with it.",
      ],
      decision: {
        chose: "Token-first, primitive-composable system",
        over: "A canonical set of pre-composed components",
        because: "Engineers needed escape hatches; designers needed defaults. A two-layer system gave both, instead of forcing a single answer.",
        tradeoff: "Some loss of visual consistency in edge cases. We added linting + a 'why we composed this' doc culture to bridge it.",
      },
      artifact: {
        kind: "sketch",
        title: "Two-layer system — tokens / primitives / patterns",
        annotations: [
          { x: 24, y: 22, n: 1, text: "Tokens — open to anyone." },
          { x: 70, y: 48, n: 2, text: "Primitives — composable, unopinionated." },
          { x: 40, y: 78, n: 3, text: "Patterns — defaults, but skippable." },
        ],
      },
    },
    {
      key: "outcome",
      title: "Outcome",
      question: "Did engineers adopt a system designed for them?",
      persona: {
        name: "Priya, a year later",
        role: "Now contributes back to the system",
        state: "Files a primitive proposal instead of a fork.",
        need: "Met. The system has compounded.",
      },
      body: [
        "Component adoption went from 23% to 91% in 14 months. More importantly, the contribution rate — engineers proposing additions — went from near-zero to weekly. The system became a shared object instead of a designer artifact.",
      ],
      artifact: {
        kind: "ba",
        before: { label: "Before", metric: "23%", note: "Component adoption" },
        after: { label: "After (14mo)", metric: "91%", note: "Sustained · contributions weekly" },
        caption: "Jira platform · token system migration",
      },
    },
  ],
};

export const WORDS = [
  { w: "AUDIT", pos: "n.", meaning: "A systematic review of an interface, content, or flow against criteria — heuristic, accessibility, content audits." },
  { w: "FRAME", pos: "v.", meaning: "How a problem is described determines what solutions get considered. Reframing is often more valuable than solving." },
  { w: "FLOWS", pos: "n.", meaning: "The sequence of screens and decisions a user moves through to complete a task. The skeleton of any product." },
  { w: "USERS", pos: "n.", meaning: "The people on the other side of your work. Don Norman wishes we'd call them 'people.'" },
  { w: "EMPTY", pos: "adj.", meaning: "The empty state — what users see before they have data. Often the most important screen and the most neglected." },
  { w: "FIGMA", pos: "prop. n.", meaning: "Collaborative design tool. Verb form: 'I'll figma it real quick.' Use sparingly in interviews." },
  { w: "AGILE", pos: "adj.", meaning: "An iterative way of working. Often invoked, rarely practiced. Designers tend to negotiate the discovery space inside it." },
  { w: "GRIND", pos: "n.", meaning: "The unglamorous middle of a project — naming things, fixing edges, writing copy. Where good designers are made." },
  { w: "PROBE", pos: "n.", meaning: "A small artifact (diary, kit, prompt) given to participants to surface behavior you can't observe directly." },
  { w: "CRAFT", pos: "n.", meaning: "The standard by which a designer is ultimately judged. Hard to define, easy to spot." },
  { w: "SOLVE", pos: "v.", meaning: "What designers are sometimes asked to do. Usually the better word is 'understand,' then 'propose.'" },
  { w: "CHURN", pos: "n.", meaning: "Users leaving. The metric most worth designing against, and the hardest to attribute cleanly." },
  { w: "SCOPE", pos: "n.", meaning: "The line between what's in and out of a project. Negotiating it is half of design leadership." },
  { w: "BRIEF", pos: "n.", meaning: "A short document defining the problem, audience, and constraints. Good ones are rare. Write your own when needed." },
];
