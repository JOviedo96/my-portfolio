export function Sparkle({ small }) {
  const s = small ? 12 : 14;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L13.5 9L20 10.5L13.5 12L12 19L10.5 12L4 10.5L10.5 9L12 2Z" fill="currentColor" />
    </svg>
  );
}

export function Star({ className }) {
  return (
    <svg className={className} width="0.85em" height="0.85em" viewBox="0 0 24 24" fill="none"
         style={{ display: "inline-block", verticalAlign: "0", margin: "0 0.05em 0 0.28em" }}>
      <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
            fill="#f0b952" stroke="#1a1814" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
