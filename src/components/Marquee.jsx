import { useState } from 'react';

export function Marquee() {
  const [paused, setPaused] = useState(false);

  const items = [
    "Research-led product design",
    "Identity & account systems",
    "AI-native design",
    "Consumer products at scale",
    "0→1 & ownership",
    "Human-centered AI",
    "Just enough code",
  ];

  const doubled = [...items, ...items];

  return (
    <div className="marquee-wrap">
      <div className="marquee" data-paused={paused}>
        <div className="marquee-track">
          {doubled.map((t, i) => (
            <span className="marquee-item" key={i}>
              <span>{t}</span>
              <span className="dot"></span>
            </span>
          ))}
        </div>
      </div>
      <div className="marquee-controls">
        <button
          className="marquee-toggle"
          onClick={() => setPaused(p => !p)}
          aria-label={paused ? "Resume skills ticker" : "Pause skills ticker"}
          aria-pressed={paused}
        >
          {paused ? "▶" : "⏸"}
        </button>
      </div>
    </div>
  );
}
