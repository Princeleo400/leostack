import { keyframes } from "styled-components";

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ─── Lightweight markdown parser — no external deps ───────────────────────────
export function parseMarkdown(raw) {
  if (!raw) return "";
  let html = raw
    // Fenced code blocks FIRST (before inline code)
    .replace(
      /```(\w*)\n?([\s\S]*?)```/g,
      (_, lang, code) =>
        `<pre class="md-pre"><code class="md-code ${lang ? `lang-${lang}` : ""}">${code
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .trim()}</code></pre>`,
    )
    // Headings
    .replace(/^#### (.+)$/gm, '<h4 class="md-h4">$1</h4>')
    .replace(/^### (.+)$/gm, '<h3 class="md-h3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="md-h2">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="md-h1">$1</h1>')
    // Horizontal rule
    .replace(/^---$/gm, '<hr class="md-hr" />')
    // Blockquote
    .replace(/^> (.+)$/gm, '<blockquote class="md-blockquote">$1</blockquote>')
    // Unordered lists
    .replace(/^[-*] (.+)$/gm, '<li class="md-li">$1</li>')
    // Ordered lists
    .replace(/^\d+\. (.+)$/gm, '<li class="md-li md-li--ordered">$1</li>')
    // Bold + italic
    .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong class="md-strong">$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em class="md-em">$1</em>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="md-inline-code">$1</code>')
    // Links
    .replace(
      /\[(.+?)\]\((.+?)\)/g,
      '<a class="md-link" href="$2" target="_blank" rel="noreferrer">$1</a>',
    )
    // Images
    .replace(
      /!\[(.+?)\]\((.+?)\)/g,
      '<img class="md-img" src="$2" alt="$1" />',
    );

  // Wrap consecutive <li> in <ul>
  html = html.replace(
    /(<li class="md-li">[\s\S]*?<\/li>\n?)+/g,
    (m) => `<ul class="md-ul">${m}</ul>`,
  );

  // Paragraphs — wrap lines that aren't already HTML tags
  html = html
    .split("\n")
    .map((line) => {
      const trimmed = line.trim();
      if (!trimmed) return "";
      if (/^<[a-zA-Z]/.test(trimmed)) return line;
      return `<p class="md-p">${line}</p>`;
    })
    .join("\n");

  return html;
}

// ─── Default markdown content ─────────────────────────────────────────────────
export const DEFAULT_MD = `# Hello, World! 👋

This is a **live** Markdown editor. Edit the text on the left and see it render *instantly* on the right.

---

## What I can parse

### Text formatting
- **Bold text** with double asterisks
- *Italic text* with single asterisks
- \`inline code\` with backticks
- ***Bold and italic*** together

### Code blocks

\`\`\`js
const greet = name => \`Hello, \${name}!\`;
console.log(greet('LeoStack'));
\`\`\`

### Links and blockquotes

> "Any sufficiently advanced technology is indistinguishable from magic." — Arthur C. Clarke

[Visit my portfolio](https://leostack.netlify.app)

### Lists
- React · Next.js · TypeScript
- Supabase · Firebase · Node.js
- Tailwind CSS · styled-components
`;

export const COMPONENT_TABS = ["Buttons", "Cards", "Inputs", "Badges"];
