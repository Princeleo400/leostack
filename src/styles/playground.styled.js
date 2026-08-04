import styled, { css } from "styled-components";
import { fadeUp } from "../utils/utils";

export const Page = styled.main`
  padding-bottom: calc(68px + 24px);
`;

export const SectionTitle = styled.h1`
  font-size: clamp(22px, 3.5vw, 32px);
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--text-primary);
  text-transform: uppercase;
  line-height: 1;
  display: block;

  &::after {
    content: "";
    display: block;
    width: 36px;
    height: 3px;
    background: linear-gradient(90deg, var(--blue), rgba(69, 128, 255, 0.25));
    border-radius: 2px;
    margin-top: 10px;
    margin-bottom: 40px;
  }
`;

export const ToolCard = styled.div`
  background: var(--bg-card);
  border: 0.5px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  animation: ${fadeUp} 0.5s ease forwards;
  transition: border-color 0.25s ease;

  &:hover {
    border-color: var(--blue-border);
  }
`;

export const ToolHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  border-bottom: 0.5px solid var(--border);
  flex-wrap: wrap;
  gap: 10px;
`;

export const ToolTitle = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ToolBadge = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: var(--blue);
  background: var(--blue-dim);
  border: 0.5px solid var(--blue-border);
  padding: 2px 9px;
  border-radius: 999px;
`;

// Markdown editor
export const EditorPane = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 420px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const EditorTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  min-height: 380px;
  padding: 18px;
  background: var(--bg-primary);
  border: none;
  border-right: 0.5px solid var(--border);
  color: var(--text-primary);
  font-family: "Fira Code", "Cascadia Code", monospace;
  font-size: 13px;
  line-height: 1.7;
  resize: none;
  outline: none;
  transition: background 0.2s ease;

  &::placeholder {
    color: var(--text-dim);
  }
  &:focus {
    background: var(--bg-card-hover);
  }

  @media (max-width: 768px) {
    min-height: 200px;
    border-right: none;
    border-bottom: 0.5px solid var(--border);
  }
`;

export const PreviewPane = styled.div`
  padding: 18px;
  overflow-y: auto;
  max-height: 420px;
  background: var(--bg-card);

  /* Markdown rendered styles */
  .md-h1 {
    font-size: 22px;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 12px;
  }
  .md-h2 {
    font-size: 18px;
    font-weight: 600;
    color: var(--text-primary);
    margin: 16px 0 10px;
  }
  .md-h3 {
    font-size: 15px;
    font-weight: 600;
    color: var(--text-primary);
    margin: 14px 0 8px;
  }
  .md-h4 {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
    margin: 12px 0 6px;
  }
  .md-p {
    font-size: 13.5px;
    color: var(--text-secondary);
    line-height: 1.7;
    margin: 0 0 10px;
  }
  .md-strong {
    color: var(--text-primary);
    font-weight: 600;
  }
  .md-em {
    color: var(--text-secondary);
    font-style: italic;
  }
  .md-hr {
    border: none;
    border-top: 0.5px solid var(--border);
    margin: 16px 0;
  }
  .md-blockquote {
    border-left: 3px solid var(--blue);
    padding: 8px 14px;
    margin: 12px 0;
    background: var(--blue-dim);
    border-radius: 0 8px 8px 0;
    font-size: 13px;
    color: var(--text-secondary);
    font-style: italic;
  }
  .md-ul {
    padding-left: 20px;
    margin: 8px 0;
  }
  .md-li {
    font-size: 13px;
    color: var(--text-secondary);
    line-height: 1.7;
    list-style: disc;
    margin-bottom: 3px;
  }
  .md-inline-code {
    font-family: "Fira Code", monospace;
    font-size: 12px;
    color: var(--blue);
    background: var(--blue-dim);
    border: 0.5px solid var(--blue-border);
    padding: 1px 6px;
    border-radius: 4px;
  }
  .md-pre {
    background: var(--bg-primary);
    border: 0.5px solid var(--border);
    border-radius: 8px;
    padding: 14px;
    overflow-x: auto;
    margin: 12px 0;
  }
  .md-code {
    font-family: "Fira Code", monospace;
    font-size: 12px;
    color: #7aabff;
    line-height: 1.6;
  }
  .md-link {
    color: var(--blue);
    text-decoration: underline;
  }
  .md-link:hover {
    opacity: 0.8;
  }
  .md-img {
    max-width: 100%;
    border-radius: 8px;
    margin: 8px 0;
  }
`;

// Component switcher
export const CompTabRow = styled.div`
  display: flex;
  gap: 6px;
  padding: 14px 18px;
  border-bottom: 0.5px solid var(--border);
  flex-wrap: wrap;
`;

export const CompTab = styled.button`
  padding: 5px 14px;
  border-radius: 999px;
  border: 0.5px solid
    ${({ $active }) => ($active ? "var(--blue)" : "var(--border-strong)")};
  background: ${({ $active }) => ($active ? "var(--blue-dim)" : "transparent")};
  color: ${({ $active }) =>
    $active ? "var(--blue)" : "var(--text-secondary)"};
  font-size: 12px;
  font-weight: 500;
  font-family: var(--font);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--blue-border);
    color: var(--blue);
    background: var(--blue-dim);
  }
`;

export const CompPreview = styled.div`
  padding: 24px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: flex-start;
  min-height: 180px;
  background: var(--bg-primary);
`;

export const CompCode = styled.pre`
  background: var(--bg-card);
  border-top: 0.5px solid var(--border);
  padding: 14px 18px;
  font-family: "Fira Code", monospace;
  font-size: 11.5px;
  color: var(--text-secondary);
  overflow-x: auto;
  white-space: pre;
  line-height: 1.6;
  margin: 0;
`;

export const ShowBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 22px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 500;
  font-family: var(--font);
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return css`
          background: var(--blue);
          color: #fff;
          border: 1px solid var(--blue);
          &:hover {
            background: #5a8fff;
            transform: translateY(-1px);
            box-shadow: 0 4px 16px rgba(69, 128, 255, 0.35);
          }
        `;
      case "ghost":
        return css`
          background: transparent;
          color: var(--blue);
          border: 1px solid var(--blue);
          &:hover {
            background: var(--blue-dim);
            transform: translateY(-1px);
          }
        `;
      case "danger":
        return css`
          background: transparent;
          color: var(--red);
          border: 1px solid rgba(239, 68, 68, 0.4);
          &:hover {
            background: rgba(239, 68, 68, 0.08);
          }
        `;
      case "success":
        return css`
          background: var(--green);
          color: #fff;
          border: 1px solid var(--green);
          &:hover {
            background: #16a34a;
            transform: translateY(-1px);
          }
        `;
      default:
        return css`
          background: var(--bg-card);
          color: var(--text-secondary);
          border: 0.5px solid var(--border);
          &:hover {
            border-color: var(--blue-border);
            color: var(--blue);
          }
        `;
    }
  }}
`;

export const ShowCard = styled.div`
  background: var(--bg-card);
  border: 0.5px solid var(--border);
  border-radius: 12px;
  padding: 16px;
  width: ${({ $w }) => $w || "160px"};
  transition: all 0.25s ease;

  ${({ $variant }) =>
    $variant === "blue" &&
    css`
      border-color: var(--blue-border);
      background: var(--blue-dim);
    `}

  &:hover {
    border-color: var(--blue-border);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(69, 128, 255, 0.08);
  }
`;

export const ShowInput = styled.input`
  width: 100%;
  padding: 9px 13px;
  background: var(--bg-input);
  border: 0.5px solid
    ${({ $error }) => ($error ? "rgba(239,68,68,0.5)" : "var(--border-strong)")};
  border-radius: 10px;
  color: var(--text-primary);
  font-size: 13px;
  font-family: var(--font);
  outline: none;
  transition: all 0.2s ease;
  max-width: 200px;

  &::placeholder {
    color: var(--text-dim);
  }
  &:focus {
    border-color: var(--blue-border);
    background: var(--blue-dim);
    box-shadow: 0 0 0 3px rgba(69, 128, 255, 0.08);
  }
`;

export const ShowBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 500;

  ${({ $variant }) => {
    switch ($variant) {
      case "blue":
        return css`
          background: var(--blue-dim);
          color: var(--blue);
          border: 0.5px solid var(--blue-border);
        `;
      case "green":
        return css`
          background: var(--green-dim);
          color: var(--green);
          border: 0.5px solid var(--green-border);
        `;
      case "red":
        return css`
          background: rgba(239, 68, 68, 0.1);
          color: var(--red);
          border: 0.5px solid rgba(239, 68, 68, 0.3);
        `;
      case "amber":
        return css`
          background: rgba(245, 158, 11, 0.1);
          color: var(--amber);
          border: 0.5px solid rgba(245, 158, 11, 0.3);
        `;
      case "outline":
        return css`
          background: transparent;
          color: var(--text-secondary);
          border: 0.5px solid var(--border-strong);
        `;
      default:
        return css`
          background: var(--bg-card);
          color: var(--text-secondary);
          border: 0.5px solid var(--border);
        `;
    }
  }}

  ${({ $pulse }) =>
    $pulse &&
    css`
      &::before {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: currentColor;
        animation: pulse 2.5s ease-in-out infinite;
      }
    `}
`;

