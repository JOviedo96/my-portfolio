export function CoverArt({ kind }) {
  const stroke = "currentColor";
  const W = 180, H = 180;

  if (kind === "convo") return (
    <svg width={W} height={H} viewBox="0 0 180 180" fill="none">
      <rect x="20" y="36" width="98" height="46" rx="14" fill="rgba(255,253,246,0.95)" stroke={stroke} strokeWidth="2" />
      <circle cx="40" cy="59" r="3" fill="currentColor" />
      <circle cx="55" cy="59" r="3" fill="currentColor" />
      <circle cx="70" cy="59" r="3" fill="currentColor" />
      <rect x="62" y="92" width="98" height="46" rx="14" fill="#fdf6e9" stroke={stroke} strokeWidth="2" />
      <path d="M75 110 h60 M75 122 h40" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <path d="M30 86 q-4 6 -8 8" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M152 142 q4 6 8 8" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );

  if (kind === "leaf") return (
    <svg width={W} height={H} viewBox="0 0 180 180" fill="none">
      <path d="M90 24 C50 50 40 100 70 150 C120 130 138 80 90 24 Z" fill="rgba(255,253,246,0.9)" stroke={stroke} strokeWidth="2" />
      <path d="M82 50 C84 80 88 120 76 144" stroke={stroke} strokeWidth="2" fill="none" />
      <path d="M82 70 q12 4 18 12" stroke={stroke} strokeWidth="2" fill="none" />
      <path d="M80 92 q14 4 22 14" stroke={stroke} strokeWidth="2" fill="none" />
      <circle cx="130" cy="56" r="6" fill="rgba(255,253,246,0.7)" stroke={stroke} strokeWidth="2" />
      <circle cx="44" cy="120" r="4" fill="rgba(255,253,246,0.7)" stroke={stroke} strokeWidth="2" />
    </svg>
  );

  if (kind === "spark") return (
    <svg width={W} height={H} viewBox="0 0 180 180" fill="none">
      <path d="M90 28 L100 80 L152 90 L100 100 L90 152 L80 100 L28 90 L80 80 Z" fill="rgba(255,253,246,0.95)" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="40" cy="44" r="6" fill="rgba(255,253,246,0.7)" stroke={stroke} strokeWidth="2" />
      <circle cx="142" cy="142" r="8" fill="rgba(255,253,246,0.7)" stroke={stroke} strokeWidth="2" />
      <path d="M138 40 l4 8 l8 4 l-8 4 l-4 8 l-4 -8 l-8 -4 l8 -4 z" fill="rgba(255,253,246,0.85)" stroke={stroke} strokeWidth="1.5" />
    </svg>
  );

  if (kind === "moon") return (
    <svg width={W} height={H} viewBox="0 0 180 180" fill="none">
      <circle cx="90" cy="90" r="56" fill="rgba(26,24,20,0.18)" stroke={stroke} strokeWidth="2" />
      <path d="M104 50 a48 48 0 1 0 0 80 a32 32 0 1 1 0 -80 z" fill="rgba(255,253,246,0.95)" stroke={stroke} strokeWidth="2" />
      <circle cx="36" cy="40" r="2.5" fill="currentColor" />
      <circle cx="150" cy="56" r="2.5" fill="currentColor" />
      <circle cx="44" cy="148" r="2.5" fill="currentColor" />
      <circle cx="146" cy="138" r="2" fill="currentColor" />
    </svg>
  );

  if (kind === "grid") return (
    <svg width={W} height={H} viewBox="0 0 180 180" fill="none">
      <rect x="28" y="28" width="40" height="40" rx="8" fill="rgba(255,253,246,0.95)" stroke={stroke} strokeWidth="2" />
      <circle cx="112" cy="48" r="22" fill="rgba(255,253,246,0.95)" stroke={stroke} strokeWidth="2" />
      <path d="M28 112 L48 90 L88 130 H28 Z" fill="rgba(255,253,246,0.95)" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
      <rect x="100" y="92" width="48" height="48" rx="24" fill="rgba(255,253,246,0.95)" stroke={stroke} strokeWidth="2" />
      <path d="M112 116 h24 M124 104 v24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  return null;
}
