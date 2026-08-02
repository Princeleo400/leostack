import styled from "styled-components";
import { cardMixin, sectionTitleMixin } from "./shared";

// ─── Styled components ────
export const Page = styled.main`
  padding-bottom: calc(68px + 24px);
`;

export const SectionTitle = styled.h1`
  ${sectionTitleMixin}
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

export const FilterBtn = styled.button`
  padding: 7px 18px;
  border-radius: 999px;
  border: 0.5px solid
    ${({ $active }) => ($active ? "var(--blue)" : "var(--border-strong)")};
  background: ${({ $active }) => ($active ? "var(--blue)" : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "var(--text-secondary)")};
  font-size: 13px;
  font-weight: 500;
  font-family: var(--font);
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ $active }) => ($active ? "#5a8fff" : "var(--blue-dim)")};
    border-color: var(--blue);
    color: ${({ $active }) => ($active ? "#fff" : "var(--blue)")};
  }
`;

// Card
export const Card = styled.article`
  ${cardMixin}
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CardImgWrap = styled.div`
  position: relative;
  overflow: hidden;
  height: 180px;
  background: var(--bg-card-hover);
  flex-shrink: 0;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.04);
  }
`;

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(8, 14, 26, 0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.25s ease;
  backdrop-filter: blur(2px);

  ${Card}:hover & {
    opacity: 1;
  }
`;

export const OverlayBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.15s ease;
  border: 0.5px solid
    ${({ $primary }) => ($primary ? "var(--blue)" : "var(--border-strong)")};
  background: ${({ $primary }) =>
    $primary ? "var(--blue)" : "rgba(255,255,255,0.06)"};
  color: ${({ $primary }) => ($primary ? "#fff" : "var(--text-primary)")};

  &:hover {
    background: ${({ $primary }) =>
      $primary ? "#5a8fff" : "rgba(255,255,255,0.12)"};
  }
`;

export const LiveBadge = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: var(--green);
  background: var(--green-dim);
  border: 0.5px solid var(--green-border);
  padding: 2px 8px;
  border-radius: 999px;
  letter-spacing: 0.03em;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 5px;

  &::before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--green);
    animation: pulse 2.5s ease-in-out infinite;
  }
`;

export const TagChip = styled.span`
  font-size: 11px;
  color: var(--blue);
  background: var(--blue-dim);
  border: 0.5px solid var(--blue-border);
  padding: 2px 8px;
  border-radius: 999px;
  font-weight: 500;
`;

export const ActionBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.15s ease;
  border: 0.5px solid
    ${({ $primary }) => ($primary ? "var(--blue)" : "var(--border-strong)")};
  background: ${({ $primary }) => ($primary ? "var(--blue)" : "transparent")};
  color: ${({ $primary }) => ($primary ? "#fff" : "var(--text-secondary)")};

  &:hover {
    background: ${({ $primary }) => ($primary ? "#5a8fff" : "var(--blue-dim)")};
    border-color: var(--blue);
    color: ${({ $primary }) => ($primary ? "#fff" : "var(--blue)")};
  }
`;

export const OlderSection = styled.div`
  border-top: 0.5px solid var(--border);
  padding-top: 28px;
  animation: fadeIn 0.3s ease forwards;
`;

export const ToggleBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 22px;
  border-radius: 10px;
  border: 0.5px solid var(--border-strong);
  background: transparent;
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 500;
  font-family: var(--font);
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    color: var(--blue);
    border-color: var(--blue-border);
    background: var(--blue-dim);
  }
`;
