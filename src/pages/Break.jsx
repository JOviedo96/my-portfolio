import React from 'react';
import { WORDS } from '../data/phases.js';

function pickWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

export function Break({ onNavigate }) {
  const [target, setTarget] = React.useState(() => pickWord());
  const [guesses, setGuesses] = React.useState([]);
  const [current, setCurrent] = React.useState("");
  const [status, setStatus] = React.useState("playing");
  const [shake, setShake] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [revealedRow, setRevealedRow] = React.useState(-1);

  const MAX = 6;

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 1400);
  };

  const submitGuess = React.useCallback(() => {
    if (status !== "playing") return;
    if (current.length !== 5) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
      showToast("Need 5 letters");
      return;
    }
    const upper = current.toUpperCase();
    const newGuesses = [...guesses, upper];
    setGuesses(newGuesses);
    setCurrent("");
    setRevealedRow(newGuesses.length - 1);

    setTimeout(() => {
      if (upper === target.w) {
        setStatus("won");
      } else if (newGuesses.length >= MAX) {
        setStatus("lost");
      }
    }, 1500);
  }, [current, guesses, status, target]);

  React.useEffect(() => {
    const handler = (e) => {
      if (status !== "playing") return;
      if (e.key === "Enter") {
        submitGuess();
      } else if (e.key === "Backspace") {
        setCurrent((c) => c.slice(0, -1));
      } else if (/^[a-zA-Z]$/.test(e.key) && current.length < 5) {
        setCurrent((c) => c + e.key.toUpperCase());
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, status, submitGuess]);

  const reset = () => {
    setTarget(pickWord());
    setGuesses([]);
    setCurrent("");
    setStatus("playing");
    setRevealedRow(-1);
  };

  const scoreGuess = (guess) => {
    const result = Array(5).fill("absent");
    const targetArr = target.w.split("");
    const guessArr = guess.split("");
    const used = Array(5).fill(false);
    for (let i = 0; i < 5; i++) {
      if (guessArr[i] === targetArr[i]) {
        result[i] = "correct";
        used[i] = true;
      }
    }
    for (let i = 0; i < 5; i++) {
      if (result[i] === "correct") continue;
      const idx = targetArr.findIndex((c, j) => !used[j] && c === guessArr[i]);
      if (idx !== -1) {
        result[i] = "present";
        used[idx] = true;
      }
    }
    return result;
  };

  const keyStatus = {};
  guesses.forEach((g, gi) => {
    if (gi > revealedRow) return;
    const score = scoreGuess(g);
    for (let i = 0; i < 5; i++) {
      const ch = g[i];
      const s = score[i];
      const cur = keyStatus[ch];
      if (s === "correct") keyStatus[ch] = "correct";
      else if (s === "present" && cur !== "correct") keyStatus[ch] = "present";
      else if (s === "absent" && !cur) keyStatus[ch] = "absent";
    }
  });

  const onKey = (k) => {
    if (status !== "playing") return;
    if (k === "ENTER") submitGuess();
    else if (k === "DEL") setCurrent((c) => c.slice(0, -1));
    else if (current.length < 5) setCurrent((c) => c + k);
  };

  const ROWS = [
    "QWERTYUIOP".split(""),
    "ASDFGHJKL".split(""),
    ["ENTER", ..."ZXCVBNM".split(""), "DEL"],
  ];

  return (
    <div className="wordle-page">
      <div className="wordle-eyebrow">○ ○ ○ &nbsp; A short break, on the house</div>
      <h1>UX <em>Wordle</em>.</h1>
      <p className="sub">
        Five letters. Six guesses. Words from the trade: research methods, design moves, the occasional opinion.
        You earned this break.
      </p>

      <div className="wordle-play">
        <aside className="wordle-legend" aria-label="Tile color guide">
          <div className="side-title">Legend</div>
          <span className="legend-item">
            <span className="legend-tile correct">A</span>
            <span className="legend-label">Right letter,<br />right spot</span>
          </span>
          <span className="legend-item">
            <span className="legend-tile present">B</span>
            <span className="legend-label">In the word,<br />wrong spot</span>
          </span>
          <span className="legend-item">
            <span className="legend-tile absent">C</span>
            <span className="legend-label">Not in<br />the word</span>
          </span>
        </aside>

        <div className="board" style={shake ? { animation: "shake .35s" } : {}}>
          {Array.from({ length: MAX }).map((_, rowIdx) => {
            const guess = guesses[rowIdx];
            const isCurrent = rowIdx === guesses.length;
            const score = guess && rowIdx <= revealedRow ? scoreGuess(guess) : null;
            return (
              <div className="row" key={rowIdx}>
                {Array.from({ length: 5 }).map((_, i) => {
                  let letter = "";
                  let cls = "tile";
                  if (guess) {
                    letter = guess[i];
                    if (score) {
                      const isRevealed = rowIdx < revealedRow || rowIdx === revealedRow;
                      if (isRevealed) cls += " " + score[i];
                    }
                  } else if (isCurrent) {
                    letter = current[i] || "";
                    if (letter) cls += " filled";
                  }
                  const delay = score ? `${i * 0.25}s` : "0s";
                  return (
                    <div
                      key={i}
                      className={cls}
                      style={score ? { animation: `revealTile .5s ease ${delay} both` } : undefined}
                    >
                      {letter}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        <aside className="word-bank" aria-label="Previous guesses">
          <div className="side-title">Tried so far</div>
          {guesses.length === 0 ? (
            <div className="word-bank-empty">No guesses yet.</div>
          ) : (
            <ul className="word-bank-list">
              {guesses.map((g, gi) => {
                const score = gi <= revealedRow ? scoreGuess(g) : null;
                return (
                  <li key={gi} className="word-bank-item">
                    <span className="word-bank-idx">{gi + 1}</span>
                    <span className="word-bank-tiles">
                      {g.split("").map((ch, i) => (
                        <span key={i} className={`mini-tile ${score ? score[i] : ""}`}>{ch}</span>
                      ))}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </aside>
      </div>

      {status === "playing" && (
        <div className="wordle-status">
          {guesses.length === 0 ? "Type to begin." : `${MAX - guesses.length} guesses left.`}
        </div>
      )}
      {status === "won" && (
        <>
          <div className="wordle-status win">
            Nicely done. {guesses.length} {guesses.length === 1 ? "guess" : "guesses"}.
          </div>
          <div className="def-card">
            <div className="term">{target.w.toLowerCase()}<span className="pos">{target.pos}</span></div>
            <div className="meaning">{target.meaning}</div>
          </div>
          <div className="wordle-cta">
            <button className="btn-primary" onClick={reset}>Another →</button>
            <button className="btn-ghost" onClick={() => onNavigate("home")}>Back to work</button>
          </div>
        </>
      )}
      {status === "lost" && (
        <>
          <div className="wordle-status lose">
            The word was <strong>{target.w}</strong>.
          </div>
          <div className="def-card">
            <div className="term">{target.w.toLowerCase()}<span className="pos">{target.pos}</span></div>
            <div className="meaning">{target.meaning}</div>
          </div>
          <div className="wordle-cta">
            <button className="btn-primary" onClick={reset}>Try again →</button>
          </div>
        </>
      )}

      <div className="kbd">
        {ROWS.map((row, i) => (
          <div className="kbd-row" key={i}>
            {row.map((k) => (
              <button
                key={k}
                className={`key ${k.length > 1 ? "wide" : ""} ${keyStatus[k] || ""}`}
                onClick={() => onKey(k)}
              >
                {k === "DEL" ? "⌫" : k}
              </button>
            ))}
          </div>
        ))}
      </div>

      {toast && <div className="toast">{toast}</div>}

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-6px); }
          75% { transform: translateX(6px); }
        }
        @keyframes revealTile {
          0% { transform: rotateX(0deg); }
          50% { transform: rotateX(90deg); }
          100% { transform: rotateX(0deg); }
        }
      `}</style>
    </div>
  );
}
