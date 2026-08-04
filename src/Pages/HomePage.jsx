import styled from "styled-components";
import GithubIcon from "@mui/icons-material/GitHub";
import { LinkedIn, Mail, WhatsApp } from "@mui/icons-material";
import "../app.scss";
import CV from "../data/Chukwuemeka-Michael-Ohaga-Resume-CV.pdf";
import logo from "../img/LEOPhotoRoom(2).png";
import Particle from "../Components/Particle";
import { btnPrimaryMixin, btnGhostMixin, fadeUpMixin } from "../styles/shared";
import { Link } from "react-router-dom";
import { ArrowIcon, DownloadIcon, SparkIcon } from "../assets/svg/icons";

const HomePage = () => {
  return (
    <HomePageStyled>
      <img src={logo} alt="" style={{ width: 120, margin: 20 }}></img>

      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <RoleTag className="mb-6">
          Frontend Engineer · React · TypeScript · Next.js
          {/* · 4+ years */}
        </RoleTag>
        <Headline className="mb-5">
          Hi, I'm <NameAccent>LEO</NameAccent>
        </Headline>
        <Subtitle className="max-w-md mb-8">
          I design and build product-grade web applications for startups and
          digital platforms.
          {/* <br /> Building product-grade web apps for Startups{" "} */}
        </Subtitle>
        <div className="icons">
          {/* <a
            href="https://facebook.com/michael.ohaga"
            target="_blank"
            rel="noreferrer"
            className="icon i-facebook"
          >
            <Facebook />
          </a> */}
          <a
            href="https://github.com/Princeleo400"
            aria-label="Github"
            target="_blank"
            rel="noreferrer noopener"
            className="icon i-github"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/chukwuemeka-ohaga-b3866a223"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
            className="icon i-linkedin"
          >
            <LinkedIn />
          </a>
          <a
            href="mailto:ohagamichael@gmail.com"
            aria-label="Email"
            target="_blank"
            rel="noreferrer noopener"
            className="icon i-mail"
          >
            <Mail />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=2349033098293&text=Hello%20Leo"
            aria-label="Whatsapp"
            target="_blank"
            rel="noreferrer noopener"
            className="icon i-whatsapp"
          >
            <WhatsApp />
          </a>
        </div>
        <CtaRow>
          <PrimaryBtn to="/portfolios">
            View my work <ArrowIcon />
          </PrimaryBtn>
          <GhostAnchor
            className="link-btn"
            href={CV}
            target="_blank"
            rel="noreferrer"
            download
          >
            Download CV <span></span> <span></span> <span></span> <span></span>{" "}
            <DownloadIcon />
          </GhostAnchor>
          <PlaygroundBtn to="/playground">
            <span className="spark">
              <SparkIcon />
            </span>
            Try the playground
          </PlaygroundBtn>
        </CtaRow>
      </div>
    </HomePageStyled>
  );
};

const PrimaryBtn = styled(Link)`
  ${btnPrimaryMixin}
`;
const GhostAnchor = styled.a`
  ${btnGhostMixin}
`;
const HomePageStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  .roleTitle {
    font-size: 14px;
    font-weight: 500;
    margin: 8px 0;
    text-align: center;
  }

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .leo-title {
      font-family: "Carter One", cursive;
    }

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      margin-bottom: 1rem;
      ${fadeUpMixin("0.4s")}
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.6s ease-in-out;
        cursor: pointer;
        margin: 0 5px;
        &:hover {
          // border: 2px solid var(--primary-color);
          // color: var(--primary-color);
          transform: translateY(-5px) scale(1.2) rotate(360deg);
        }
      }
      &:not(:last-child) {
        margin-right: 1rem;
      }
      svg {
        margin: 0.5rem;
      }
    }

    .i-linkedin {
      &:hover {
        border: 2px solid #0072b1;
        color: #0072b1;
      }
    }
    .i-facebook {
      &:hover {
        border: 2px solid #3b5998;
        color: #3b5998;
      }
    }
    .i-mail {
      &:hover {
        border: 2px solid #ea4335;
        color: #ea4335;
      }
    }
    .i-github {
      &:hover {
        border: 2px solid #5f4687;
        color: #5f4687;
      }
    }
    .i-whatsapp {
      &:hover {
        border: 2px solid #5ffc7b;
        color: #5ffc7b;
      }
    }
  }
`;

const Headline = styled.h1`
  font-size: clamp(38px, 7vw, 68px);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.05;
  letter-spacing: -0.02em;
  ${fadeUpMixin("0.2s")}
`;

const NameAccent = styled.span`
  color: var(--blue);
  font-style: italic;
`;

const Subtitle = styled.p`
  font-size: clamp(15px, 2vw, 17px);
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0 auto;
  ${fadeUpMixin("0.3s")}
`;

const RoleTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--blue);
  background: var(--blue-dim);
  border: 0.5px solid var(--blue-border);
  padding: 6px 18px;
  border-radius: 999px;
  ${fadeUpMixin("0.1s")}/* 
  &::before {
    content: "";
    width: 6px;
    height: 6px;
    background: var(--blue);
    border-radius: 50%;
    flex-shrink: 0;
    animation: pulse 2.5s ease-in-out infinite;
  } */
`;

const CtaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  ${fadeUpMixin("0.5s")}

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    a {
      justify-content: center;
    }
  }
`;

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
export default HomePage;
