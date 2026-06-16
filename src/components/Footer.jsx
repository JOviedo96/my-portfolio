export function Footer({ onChangelog }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>© 2026 Jamie Oviedo — Designed & built with <span className="heart">♥</span> in Orlando.</div>
        <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          Last updated {__BUILD_DATE__}
          <span style={{ color: 'var(--line)', userSelect: 'none' }}>·</span>
          <button
            onClick={onChangelog}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              font: 'inherit',
              fontSize: 'inherit',
              color: 'var(--ink-3)',
              cursor: 'pointer',
              textDecoration: 'underline',
              textDecorationStyle: 'dotted',
              textUnderlineOffset: 3,
              transition: 'color .15s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--ink)'}
            onMouseLeave={e => e.target.style.color = 'var(--ink-3)'}
          >
            changelog
          </button>
        </div>
      </div>
    </footer>
  );
}
