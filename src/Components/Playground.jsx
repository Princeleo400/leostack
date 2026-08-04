import { useState, useCallback } from "react";
import { COMPONENT_TABS, DEFAULT_MD, parseMarkdown } from "../utils/utils";
import {
  CompCode,
  CompPreview,
  CompTab,
  CompTabRow,
  EditorPane,
  EditorTextarea,
  Page,
  PreviewPane,
  SectionTitle,
  ShowBadge,
  ShowBtn,
  ShowCard,
  ShowInput,
  ToolBadge,
  ToolCard,
  ToolHeader,
  ToolTitle,
} from "../styles/playground.styled";
import Title from "./Title";

const COMP_CONTENT = {
  Buttons: {
    preview: (
      <>
        <ShowBtn $variant="primary">Primary button</ShowBtn>
        <ShowBtn $variant="ghost">Ghost button</ShowBtn>
        <ShowBtn $variant="success">✓ Success</ShowBtn>
        <ShowBtn $variant="danger">✕ Danger</ShowBtn>
        <ShowBtn $variant="neutral">Neutral</ShowBtn>
      </>
    ),
    code: `<Button variant="primary">Primary button</Button>
<Button variant="ghost">Ghost button</Button>
<Button variant="success">✓ Success</Button>
<Button variant="danger">✕ Danger</Button>
<Button variant="neutral">Neutral</Button>`,
  },
  Cards: {
    preview: (
      <>
        <ShowCard $w="170px">
          <p
            style={{
              fontSize: 11,
              color: "var(--text-dim)",
              marginBottom: 6,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            Default card
          </p>
          <p
            style={{
              fontSize: 13,
              color: "var(--text-primary)",
              fontWeight: 500,
            }}
          >
            Hover to lift
          </p>
          <p
            style={{
              fontSize: 12,
              color: "var(--text-secondary)",
              marginTop: 4,
            }}
          >
            Subtle border glow on hover.
          </p>
        </ShowCard>
        <ShowCard $w="170px" $variant="blue">
          <p
            style={{
              fontSize: 11,
              color: "var(--blue)",
              marginBottom: 6,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            Accent card
          </p>
          <p
            style={{
              fontSize: 13,
              color: "var(--text-primary)",
              fontWeight: 500,
            }}
          >
            Blue tinted
          </p>
          <p
            style={{
              fontSize: 12,
              color: "var(--text-secondary)",
              marginTop: 4,
            }}
          >
            Used for highlighted content.
          </p>
        </ShowCard>
      </>
    ),
    code: `<Card>Default card with hover lift</Card>
<Card variant="blue">Accent card — blue tinted</Card>`,
  },
  Inputs: {
    preview: (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <ShowInput placeholder="Default input" />
        <ShowInput placeholder="Focused state" autoFocus />
        <ShowInput
          placeholder="Error state"
          $error
          style={{ borderColor: "rgba(239,68,68,0.5)" }}
        />
        <ShowInput
          placeholder="Disabled"
          disabled
          style={{ opacity: 0.5, cursor: "not-allowed" }}
        />
      </div>
    ),
    code: `<Input placeholder="Default input" />
<Input placeholder="Focus state" autoFocus />
<Input placeholder="Error state" error />
<Input placeholder="Disabled" disabled />`,
  },
  Badges: {
    preview: (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        <ShowBadge $variant="blue" $pulse>
          Live
        </ShowBadge>
        <ShowBadge $variant="green" $pulse>
          Available
        </ShowBadge>
        <ShowBadge $variant="amber">In progress</ShowBadge>
        <ShowBadge $variant="red">Unavailable</ShowBadge>
        <ShowBadge $variant="outline">Next.js</ShowBadge>
        <ShowBadge $variant="outline">TypeScript</ShowBadge>
        <ShowBadge $variant="outline">React</ShowBadge>
        <ShowBadge $variant="blue">Featured</ShowBadge>
      </div>
    ),
    code: `<Badge variant="blue" pulse>Live</Badge>
<Badge variant="green" pulse>Available</Badge>
<Badge variant="amber">In progress</Badge>
<Badge variant="red">Unavailable</Badge>
<Badge variant="outline">Next.js</Badge>`,
  },
};

const Playground = () => {
  const [markdown, setMarkdown] = useState(DEFAULT_MD);
  const [compTab, setCompTab] = useState("Buttons");
  const [charCount, setCharCount] = useState(DEFAULT_MD.length);

  const handleMarkdownChange = useCallback((e) => {
    setMarkdown(e.target.value);
    setCharCount(e.target.value.length);
  }, []);

  const handleClear = () => {
    setMarkdown("");
    setCharCount(0);
  };
  const handleReset = () => {
    setMarkdown(DEFAULT_MD);
    setCharCount(DEFAULT_MD.length);
  };

  const renderedHtml = parseMarkdown(markdown);
  const comp = COMP_CONTENT[compTab];

  return (
    <Page>
      <div className="max-w-container mx-auto px-6">
        <section className="pt-[72px] pb-10">
          <Title title={"Playground"} span={"Playground"} />
          <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mb-10 mt-[80px] max-w-xl">
            Two interactive tools built directly into this portfolio — a live
            Markdown editor and a UI component switcher showing the design
            system powering this site.
          </p>

          {/* ── Tool 1: Markdown editor ───────────────────────────────── */}
          <ToolCard className="mb-8">
            <ToolHeader>
              <ToolTitle>
                📝 Live Markdown editor
                <ToolBadge>No dependencies</ToolBadge>
              </ToolTitle>
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-[var(--text-dim)]">
                  {charCount.toLocaleString()} chars
                </span>
                <button
                  onClick={handleClear}
                  className="text-[11px] text-[var(--text-secondary)] hover:text-[var(--red)] transition-colors"
                >
                  Clear
                </button>
                <button
                  onClick={handleReset}
                  className="text-[11px] text-[var(--blue)] hover:opacity-75 transition-opacity"
                >
                  Reset
                </button>
              </div>
            </ToolHeader>

            <EditorPane>
              {/* Left: editor */}
              <div>
                <div className="px-4 py-2 border-b border-[var(--border)] text-[10px] font-semibold text-[var(--text-dim)] uppercase tracking-widest">
                  Markdown input
                </div>
                <EditorTextarea
                  value={markdown}
                  onChange={handleMarkdownChange}
                  placeholder="Type your Markdown here…"
                  spellCheck={false}
                  aria-label="Markdown editor"
                />
              </div>

              {/* Right: preview */}
              <div>
                <div className="px-4 py-2 border-b border-[var(--border)] text-[10px] font-semibold text-[var(--text-dim)] uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse-dot" />
                  Live preview
                </div>
                <PreviewPane
                  dangerouslySetInnerHTML={{
                    __html:
                      renderedHtml ||
                      '<p class="md-p" style="color:var(--text-dim);font-style:italic">Start typing to see the preview…</p>',
                  }}
                />
              </div>
            </EditorPane>
          </ToolCard>

          {/* ── Tool 2: Component switcher ───────────────────────────── */}
          <ToolCard>
            <ToolHeader>
              <ToolTitle>
                🎨 UI component showcase
                <ToolBadge>Design system</ToolBadge>
              </ToolTitle>
              <span className="text-[11px] text-[var(--text-dim)]">
                Components powering this portfolio
              </span>
            </ToolHeader>

            <CompTabRow>
              {COMPONENT_TABS.map((tab) => (
                <CompTab
                  key={tab}
                  $active={compTab === tab}
                  onClick={() => setCompTab(tab)}
                >
                  {tab}
                </CompTab>
              ))}
            </CompTabRow>

            <CompPreview>{comp.preview}</CompPreview>

            <CompCode>{comp.code}</CompCode>
          </ToolCard>
        </section>
      </div>
    </Page>
  );
};

export default Playground;
