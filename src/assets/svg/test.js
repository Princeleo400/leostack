import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Particles from '../components/Particles';
import CurrentlyLearning from '../components/CurrentlyLearning';
import PerformanceWidget from '../components/PerformanceWidget';
import { btnPrimaryMixin, btnGhostMixin, fadeUpMixin } from '../styles/shared';

// ─── Icons ────────────────────────────────────────────────────────────────────
const EmailIcon    = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const GitHubIcon   = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>;
const LinkedInIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const XIcon        = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const ArrowIcon    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>;
const DownloadIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
const SparkIcon    = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/></svg>;

// ─── Styled components ────────────────────────────────────────────────────────
const HeroSection = styled.main`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 680px;
  gap: 0;
`;

const RoleTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: #7aabff;
  background: var(--blue-dim);
  border: 0.5px solid var(--blue-border);
  padding: 6px 18px;
  border-radius: 999px;
  ${fadeUpMixin('0.1s')}

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background: var(--blue);
    border-radius: 50%;
    flex-shrink: 0;
    animation: pulse 2.5s ease-in-out infinite;
  }
`;

const Headline = styled.h1`
  font-size: clamp(38px, 7vw, 68px);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.05;
  letter-spacing: -0.02em;
  ${fadeUpMixin('0.2s')}
`;

const NameAccent = styled.span`
  color: var(--blue);
  font-style: italic;
`;

const Subtitle = styled.p`
  font-size: clamp(15px, 2vw, 17px);
  color: var(--text-secondary);
  line-height: 1.7;
  ${fadeUpMixin('0.3s')}
`;

const SocialList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  ${fadeUpMixin('0.4s')}
`;

const SocialBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 0.5px solid var(--border-strong);
  color: var(--text-secondary);
  transition: all 0.25s ease;

  &:hover {
    color: var(--blue);
    border-color: var(--blue-border);
    background: var(--blue-dim);
    transform: translateY(-2px);
  }
`;

const CtaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  ${fadeUpMixin('0.5s')}

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: stretch;
    a, button { justify-content: center; }
  }
`;

const PrimaryBtn = styled(Link)`${btnPrimaryMixin}`;
const GhostAnchor = styled.a`${btnGhostMixin}`;

// ✅ Third CTA — playground link, distinct visual style
const PlaygroundBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 11px 20px;
  background: transparent;
  color: var(--text-secondary);
  border: 0.5px solid var(--border-strong);
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  font-family: var(--font);
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    color: var(--text-primary);
    border-color: var(--blue-border);
    background: var(--blue-dim);
    transform: translateY(-1px);
  }

  span.spark {
    display: inline-flex;
    color: var(--blue);
    animation: pulse 2s ease-in-out infinite;
  }
`;

// ✅ Currently learning widget — appears below CTAs
const LearningWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  ${fadeUpMixin('0.65s')}
`;

// ✅ Performance widget — appears at bottom of hero
const PerfWrap = styled.div`
  width: 100%;
  max-width: 520px;
  ${fadeUpMixin('0.75s')}
`;

// ─── Social links — no Facebook, no public WhatsApp ───────────────────────────
const socials = [
  { label: 'Email',    href: 'mailto:hello@leostack.dev',                  Icon: EmailIcon },
  { label: 'GitHub',   href: 'https://github.com/yourgithubhandle',         Icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourlinkedinhandle',  Icon: LinkedInIcon },
  { label: 'X',        href: 'https://x.com/yourtwitterhandle',            Icon: XIcon },
];

export default function Home() {
  return (
    <HeroSection>
      <Particles />

      <HeroInner className="px-6 py-24 gap-0">

        {/* Role tag */}
        <RoleTag className="mb-6">
          Frontend Engineer · React · TypeScript · Next.js
        </RoleTag>

        {/* Headline */}
        <Headline className="mb-5">
          Hi, I'm <NameAccent>LEO</NameAccent>
        </Headline>

        {/* Subtitle — ✅ no "softwares", no "saving the world" */}
        <Subtitle className="max-w-md mb-8">
          I design and build product-grade web applications for
          startups and digital platforms across Africa.
        </Subtitle>

        {/* Social links — ✅ no Facebook, no WhatsApp */}
        <SocialList className="mb-8">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <SocialBtn
                href={href}
                aria-label={label}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noreferrer noopener'}
              >
                <Icon />
              </SocialBtn>
            </li>
          ))}
        </SocialList>

        {/* ✅ Three CTAs — View Work (primary), Download CV (ghost), Playground (subtle) */}
        <CtaRow className="mb-7">
          <PrimaryBtn to="/portfolios">
            View my work <ArrowIcon />
          </PrimaryBtn>
          <GhostAnchor href="/Leo_Ohaga_CV.pdf" download>
            Download CV <DownloadIcon />
          </GhostAnchor>
          <PlaygroundBtn to="/playground">
            <span className="spark"><SparkIcon /></span>
            Try the playground
          </PlaygroundBtn>
        </CtaRow>

        {/* ✅ Currently learning card */}
        <LearningWrap className="mb-6">
          <CurrentlyLearning />
        </LearningWrap>

        {/* ✅ Live performance widget */}
        <PerfWrap>
          <PerformanceWidget />
        </PerfWrap>

      </HeroInner>
    </HeroSection>
  );
}