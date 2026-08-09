/* eslint-disable react/prop-types */
import { useState, useEffect, useRef, useMemo } from "react";
import {
  Home,
  FolderGit2,
  User,
  Mail,
  Lightbulb,
  Copy,
  Check,
  Terminal,
  MousePointerClick,
  FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Particle from "../Components/Particle";

export default function NotFound404({ theme }) {
  const navigate = useNavigate();

  const homePath = "/";
  const workPath = "/portfolios";
  const suggestedRoutes = [
    { label: "Home", path: "/", Icon: Home },
    { label: "Portfolios", path: "/portfolios", Icon: FolderGit2 },
    { label: "Resume", path: "/resume", Icon: FileText },
    { label: "About", path: "/about", Icon: User },
    { label: "Contact", path: "/contact", Icon: Mail },
  ];

  const [path] = useState(() =>
    typeof window !== "undefined" ? window.location.pathname : "/unknown-route",
  );

  const [fixesOpen, setFixesOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shakeTab, setShakeTab] = useState(null);
  const [tabMessage, setTabMessage] = useState("");
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      type: "output",
      text: 'Welcome. This terminal actually works. Type "help", or just tap a button below.',
    },
  ]);

  const termBodyRef = useRef(null);
  const timeouts = useRef([]);

  const runLater = (fn, ms) => {
    const id = window.setTimeout(fn, ms);
    timeouts.current.push(id);
  };
  useEffect(() => () => timeouts.current.forEach(clearTimeout), []);

  useEffect(() => {
    if (termBodyRef.current) {
      termBodyRef.current.scrollTop = termBodyRef.current.scrollHeight;
    }
  }, [history]);

  const HOME_COMMANDS = [
    "cd ~",
    "cd/",
    "cd /",
    "cd..",
    "cd ..",
    "home",
    "go home",
    "exit",
  ];

  function pushLines(lines) {
    setHistory((h) => [...h, ...lines]);
  }

  function runCommand(raw) {
    const cmd = raw.trim();
    if (!cmd) return;
    const lower = cmd.toLowerCase();
    const echo = { type: "input", text: cmd };

    if (lower === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    if (HOME_COMMANDS.includes(lower)) {
      pushLines([
        echo,
        { type: "output", text: `→ redirecting to ${homePath} ...` },
      ]);
      setInput("");
      runLater(() => navigate(homePath), 550);
      return;
    }

    if (lower === "help" || lower === "?") {
      pushLines([
        echo,
        { type: "output", text: "available commands:" },
        { type: "output", text: "  ls          list suggested routes" },
        { type: "output", text: "  cd ~        go home" },
        { type: "output", text: "  clear       clear this terminal" },
      ]);
      setInput("");
      return;
    }

    if (lower === "ls" || lower === "ls -la" || lower === "routes") {
      pushLines([
        echo,
        ...suggestedRoutes.map((r) => ({
          type: "output",
          text: `  ${r.path.padEnd(14, " ")} ${r.label}`,
        })),
      ]);
      setInput("");
      return;
    }

    pushLines([
      echo,
      { type: "output", text: `command not found: ${cmd}` },
      { type: "output", text: 'type "help", or tap a button below instead.' },
    ]);
    setInput("");
  }

  function handleFakeTab(name) {
    setShakeTab(name);
    setTabMessage(`"${name}" doesn't exist either 👀`);
    runLater(() => setShakeTab(null), 450);
    runLater(() => setTabMessage(""), 2200);
  }

  async function copyError() {
    const stack = [
      `TS404: Cannot find route "${path}".`,
      "    at Router.resolve (router.ts:42:11)",
      "    at App.render (App.tsx:18:5)",
    ].join("\n");
    try {
      await navigator.clipboard.writeText(stack);
      setCopied(true);
      runLater(() => setCopied(false), 1800);
    } catch {
      // Clipboard API can be blocked (insecure context, permissions) — fail quietly.
    }
  }

  return (
    <div className="nf404-root">
      <h1 className="sr-only">404 — Page not found</h1>
      <Particle theme={theme} />
      <div className="nf404-dots" aria-hidden="true">
        <span className="grid-line" style={{ left: "33%" }} />
        <span className="grid-line" style={{ left: "66%" }} />
      </div>

      <div className="editor-card">
        {/* Tab bar */}
        <div className="tab-bar">
          <div className="traffic-lights" aria-hidden="true">
            <span className="tdot red" />
            <span className="tdot amber" />
            <span className="tdot green" />
          </div>
          <div className="tabs">
            <button type="button" className="tab active" aria-current="page">
              404.tsx
            </button>
            <button
              type="button"
              className={`tab ${shakeTab === "App.tsx" ? "shake" : ""}`}
              onClick={() => handleFakeTab("App.tsx")}
            >
              App.tsx
            </button>
            <button
              type="button"
              className={`tab ${shakeTab === "Router.tsx" ? "shake" : ""}`}
              onClick={() => handleFakeTab("Router.tsx")}
            >
              Router.tsx
            </button>
          </div>
          <button
            type="button"
            className="copy-btn"
            onClick={copyError}
            aria-label="Copy error details"
          >
            {copied ? <Check size={13} /> : <Copy size={13} />}
            <span>{copied ? "Copied" : "Copy error"}</span>
          </button>
        </div>

        {tabMessage && (
          <div className="tab-toast" role="status">
            {tabMessage}
          </div>
        )}

        {/* Code area */}
        <div className="code-area">
          <pre className="code" aria-hidden="true">
            <span className="code-line" style={{ animationDelay: "0ms" }}>
              <span className="ln">1</span>
              <span className="kw">import</span>{" "}
              <span className="pn">{"{"}</span> routes{" "}
              <span className="pn">{"}"}</span> <span className="kw">from</span>{" "}
              <span className="str">&quot;./router&quot;</span>;
            </span>
            <span className="code-line" style={{ animationDelay: "70ms" }}>
              <span className="ln">2</span>
            </span>
            <span className="code-line" style={{ animationDelay: "140ms" }}>
              <span className="ln">3</span>
              <span className="kw">const</span> <span className="fn">page</span>{" "}
              = routes.find(r <span className="pn">{"=>"}</span> r.path ==={" "}
              <button
                type="button"
                className="route-trigger"
                onClick={() => setFixesOpen((v) => !v)}
                aria-expanded={fixesOpen}
                aria-controls="quick-fix-panel"
              >
                &quot;{path}&quot;
              </button>
              );
            </span>
            <span className="code-line" style={{ animationDelay: "210ms" }}>
              <span className="ln">4</span>
            </span>
            <span className="code-line" style={{ animationDelay: "280ms" }}>
              <span className="ln">5</span>
              console.<span className="fn">error</span>(page);{" "}
              <span className="cm">{"// undefined ❌"}</span>
            </span>
            <span className="code-line" style={{ animationDelay: "350ms" }}>
              <span className="ln">6</span>
            </span>
            <span className="code-line" style={{ animationDelay: "420ms" }}>
              <span className="ln">7</span>
              <span className="cm">{`// TS404: Cannot find route "${path}"`}</span>
            </span>
            <span
              className="code-line quickfix-line"
              style={{ animationDelay: "490ms" }}
            >
              <span className="ln">8</span>
              <button
                type="button"
                className="lightbulb-btn"
                onClick={() => setFixesOpen((v) => !v)}
                aria-expanded={fixesOpen}
                aria-controls="quick-fix-panel"
              >
                <Lightbulb size={14} />
                {suggestedRoutes.length} quick fixes available
              </button>
              <span className="cursor" aria-hidden="true">
                ▍
              </span>
            </span>
          </pre>
        </div>

        {/* Quick-fix panel */}
        <div
          className="quickfix-wrapper"
          style={{ gridTemplateRows: fixesOpen ? "1fr" : "0fr" }}
        >
          <div className="quickfix-inner">
            <div
              id="quick-fix-panel"
              className="quickfix-panel"
              role="region"
              aria-label="Suggested routes"
            >
              <p className="quickfix-title">Did you mean one of these?</p>
              <div className="chip-row">
                {suggestedRoutes.map((r) => {
                  const Icon = r.Icon;
                  return (
                    <button
                      key={r.path}
                      type="button"
                      className="chip"
                      onClick={() => navigate(r.path)}
                    >
                      {Icon ? <Icon size={14} /> : null}
                      {r.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Terminal */}
        <div className="terminal">
          <div className="terminal-header">
            <Terminal size={12} />
            <span>TERMINAL</span>
          </div>
          <div className="terminal-body" ref={termBodyRef}>
            {history.map((line, i) => (
              <div key={i} className={`term-line ${line.type}`}>
                {line.type === "input" ? (
                  <span className="term-prompt">➜ ~ </span>
                ) : null}
                {line.text}
              </div>
            ))}

            {/* Non-technical shortcut: same commands, zero typing required */}
            <div className="term-quick-actions">
              <span className="term-quick-label">
                <MousePointerClick size={12} /> never used a terminal? tap
                instead:
              </span>
              <div className="term-quick-chips">
                <button type="button" onClick={() => runCommand("cd ~")}>
                  Go home
                </button>
                <button type="button" onClick={() => runCommand("ls")}>
                  See routes
                </button>
                <button type="button" onClick={() => runCommand("help")}>
                  Help
                </button>
              </div>
            </div>

            <form
              className="term-input-row"
              onSubmit={(e) => {
                e.preventDefault();
                runCommand(input);
              }}
            >
              <span className="term-prompt">➜ ~</span>
              <input
                className="term-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type a command, or use the buttons above"
                aria-label="Terminal command input"
                autoComplete="off"
                spellCheck="false"
              />
            </form>
          </div>
        </div>
      </div>

      {/* Primary, unmissable way out — no terminal or clicking required */}
      <div className="cta-row">
        <button
          type="button"
          className="btn btn-solid"
          onClick={() => navigate(homePath)}
        >
          Take me home <Home size={16} />
        </button>
        <button
          type="button"
          className="btn btn-outline"
          onClick={() => navigate(workPath)}
        >
          View my work <FolderGit2 size={16} />
        </button>
      </div>
    </div>
  );
}
