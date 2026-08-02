import { css } from "styled-components";

/* ── Card ─────── */
export const cardMixin = css`
  background: var(--bg-card);
  border: 0.5px solid var(--border);
  border-radius: 14px;
  transition: all 0.25s ease;

  &:hover {
    border-color: var(--blue-border);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(69, 128, 255, 0.06);
  }
`;

/* ── Buttons ───── */
export const btnPrimaryMixin = css`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 26px;
  background: var(--blue);
  color: #fff;
  border: 1px solid var(--blue);
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  font-family: var(--font);
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
  white-space: nowrap;
  letter-spacing: 0.01em;

  &:hover {
    background: #5a8fff;
    border-color: #5a8fff;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(69, 128, 255, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const btnGhostMixin = css`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 26px;
  background: transparent;
  color: var(--blue);
  border: 1px solid var(--blue);
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  font-family: var(--font);
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
  white-space: nowrap;
  letter-spacing: 0.01em;

  &:hover {
    background: var(--blue-dim);
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

/* ── Section heading ─── */
export const sectionTitleMixin = css`
  font-size: clamp(22px, 3.5vw, 32px);
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--text-primary);
  text-transform: uppercase;
  line-height: 1;
`;

/* ── Entrance animations ── */
export const fadeUpMixin = (delay = "0s") => css`
  opacity: 0;
  animation: fadeUp 0.6s ease forwards ${delay};
`;

/* ── Form field base ──── */
export const inputMixin = css`
  width: 100%;
  padding: 11px 14px;
  background: var(--bg-input);
  border: 0.5px solid var(--border-strong);
  border-radius: 10px;
  color: var(--text-primary);
  font-size: 14px;
  font-family: var(--font);
  outline: none;
  transition: all 0.25s ease;
  appearance: none;

  &::placeholder {
    color: var(--text-dim);
  }

  &:focus {
    border-color: var(--blue-border);
    background: var(--blue-dim);
    box-shadow: 0 0 0 3px rgba(69, 128, 255, 0.08);
  }
`;
