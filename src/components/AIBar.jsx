import { useRef, useEffect } from 'react';
import { PROJECTS } from '../data/projects.js';
import { Sparkle } from './icons.jsx';

export function AIBar({ ai, variant = "hero" }) {
  const { query, setQuery, answer, loading, activeChip, askChip, submit, collapsed, setCollapsed, pageCtx } = ai;
  const isSidebar = variant === "sidebar";
  const taRef = useRef(null);

  useEffect(() => {
    const ta = taRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 160) + "px";
  }, [query]);

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  const ctx = pageCtx || { scope: "home", label: "", placeholder: "", chips: [] };
  const chips = ctx.chips || [];

  if (isSidebar && collapsed) {
    return (
      <div className="ai-rail" onClick={() => setCollapsed(false)} title="Expand AI assistant">
        <div className="rail-expand">→</div>
        <div className="rail-label">Ask the <em>assistant</em></div>
        <div className="rail-hint">Click to expand</div>
      </div>
    );
  }

  const scopePill = ctx.scope !== "home" && (
    <div className="ai-scope">
      <span className="ai-scope-dot"></span>
      <span>Scoped to <em>{ctx.scope === "project" ? "this case study" : ctx.scope === "about" ? "about page" : "process page"}</em></span>
    </div>
  );

  return (
    <div className="ai" style={{ padding: "18px" }}>
      {isSidebar && (
        <button
          className="ai-toggle"
          onClick={() => setCollapsed(true)}
          title="Minimize"
          aria-label="Minimize AI assistant"
        >
          ←
        </button>
      )}

      {!isSidebar && <div className="ai-tag"><Sparkle small />Ask anything</div>}

      {isSidebar && (
        <div className="sidebar-header">
          <span>AI Assistant</span>
        </div>
      )}

      <div className="ai-label">
        <span className="left">{isSidebar ? "Keep asking while you read." : ctx.label}</span>
      </div>

      {scopePill}

      <div className={isSidebar ? "ai-scroll" : ""}>
        {(loading || answer) && (
          <div className="ai-answer">
            <div className="meta">
              {loading ? (
                <><span className="badge">●</span>Thinking</>
              ) : (
                <><span className="badge">{answer.source === "live" ? "LIVE" : answer.source === "error" ? "OOPS" : "QUICK"}</span>Answer</>
              )}
            </div>
            <div className="ai-answer-body">
              {loading
                ? <>Reading the {ctx.scope === "project" ? "case study" : ctx.scope === "about" ? "about page" : ctx.scope === "process" ? "process page" : "projects"}<span className="typing"></span></>
                : answer.text}
            </div>
            {!loading && answer.citations && answer.citations.length > 0 && (
              <div className="citations">
                <span style={{ fontSize: 11, color: "var(--ink-2)", letterSpacing: "0.06em", textTransform: "uppercase", marginRight: 4, fontWeight: 600 }}>
                  {isSidebar ? "Open →" : "References →"}
                </span>
                {answer.citations.map((c) => {
                  const proj = PROJECTS.find((p) => p.n === c);
                  if (!proj) return null;
                  return (
                    <button key={c} className="cite" data-project={c} style={{ cursor: "pointer", font: "inherit" }}>
                      [{c}] {proj.company}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {chips.length > 0 && (
        <div className="chips">
          {chips.map((c) => (
            <button
              key={c.q}
              className="chip"
              onClick={() => askChip(c.q)}
              style={activeChip === c.q ? { background: "var(--mustard)" } : {}}
            >
              <span className="chip-icon">{c.icon}</span>
              {isSidebar
                ? c.q.replace("What's their ", "").replace("Show me ", "").replace("Have they ", "").replace("How do they ", "")
                : c.q}
            </button>
          ))}
        </div>
      )}

      <div className="ai-input-row">
        <textarea
          ref={taRef}
          className="ai-input"
          placeholder={isSidebar ? "Ask another question…" : ctx.placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          disabled={loading}
          rows={1}
        />
        <button className="ai-send" onClick={() => submit()} disabled={loading || !query.trim()}>
          {loading ? "…" : <>Ask <span>→</span></>}
        </button>
      </div>
      <div className="ai-input-hint">
        <span className="mono">⏎ to send</span>
        <span className="hint-sep">·</span>
        <span>Shift+⏎ for new line</span>
      </div>
    </div>
  );
}
