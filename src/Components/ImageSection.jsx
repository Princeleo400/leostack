import React from "react";
import styled from "styled-components";
import Leo from "../img/Leo.jpg";
import PrimaryButton from "./PrimaryButton";
import "../app.scss";
import CV from "../data/CV_Chukwuemeka_Michael_Ohaga.pdf";
import { btnGhostMixin, fadeUpMixin } from "../styles/shared";
import { DownloadIcon } from "../assets/svg/icons";
// import Skeleton from 'react-loading-skeleton'

function ImageSection() {
  const infoRows = [
    { label: "Full name", value: "Chukwuemeka Michael Ohaga" },
    {
      label: "Email",
      value: "getintouch.leo@gmail.com",
      isLink: true,
      href: "mailto:getintouch.leo@gmail.com",
    },
    { label: "Location", value: "Port Harcourt, Nigeria" },
    {
      label: "Availability",
      value: "Available · Open to remote",
      isAvailable: true,
    },
    { label: "Languages", value: "English" },
  ];

  return (
    <ImageSectionStyled>
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-14 items-start">
        <PhotoWrap className="flex justify-center lg:justify-start">
          <PhotoFrame>
            <Photo
              src={Leo}
              alt="Chukwuemeka Michael Ohaga — Frontend Engineer"
              loading="lazy"
            />
          </PhotoFrame>
        </PhotoWrap>

        <BioWrap className="flex flex-col gap-4">
          <BioLead>
            I'm <span>Leo</span>
          </BioLead>

          <BioText>
            Senior Frontend Engineer with 4+ years of experience designing and
            building responsive, high-performance web applications for startups,
            digital marketplaces, edtech platforms, and AI-powered solutions.
          </BioText>
          <BioText>
            Skilled in React, Next.js, TypeScript, Tailwind CSS, and modern UI
            frameworks, with hands-on experience in API integration, performance
            optimisation, accessibility, and SEO.
          </BioText>
          <BioText>
            Passionate about creating user-focused products and globally
            impactful digital solutions that deliver real value for businesses.
          </BioText>

          <InfoTable className="p-5 flex flex-col gap-[10px]">
            {infoRows.map(({ label, value, isLink, href, isAvailable }) => (
              <InfoRow key={label}>
                <InfoLabel>{label}</InfoLabel>
                <InfoValue $available={isAvailable}>
                  {isLink ? <a href={href}>{value}</a> : value}
                </InfoValue>
              </InfoRow>
            ))}
          </InfoTable>

          <GhostBtn
            href={CV}
            target="_blank"
            rel="noreferrer"
            className="self-start link-btn"
            download
          >
            Download CV <span></span> <span></span> <span></span> <span></span>{" "}
            <DownloadIcon />
          </GhostBtn>
        </BioWrap>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.section`
  margin-top: 5rem;
  @media screen and (max-width: 1000px) {
    /* flex-direction: column;
    grid-template-columns: 100%;
    gap: 1%; */
  }
  .left-content {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 2rem;
    background: linear-gradient(
      45deg,
      transparent,
      var(--primary-color),
      transparent
    );
    display: grid;
    place-items: center;
    @media screen and (max-width: 1000px) {
      margin-bottom: 2rem;
      width: 93%;
      transform: scale(0.6);
    }

    .image__content {
      width: 101%;
      height: 100%;
      border-radius: 2rem;
      overflow: hidden;
      transform: rotate(10deg);
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &:hover {
        transform: rotate(0);
      }
    }
  }
  .right-content {
    width: 100%;

    @media screen and (max-width: 1000px) {
      margin-bottom: 2.5rem;
    }
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
      line-height: 26px;
      @media screen and (max-width: 1000px) {
        font-size: 1rem;
      }
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
          @media screen and (min-width: 320px) and (max-width: 800px) {
            font-size: 14px;
          }
        }
      }
      .info-title {
        @media screen and (min-width: 800px) and (max-width: 1000px) {
          width: 90%;
        }
        @media screen and (min-width: 320px) and (max-width: 800px) {
          width: 32%;
          padding-right: 3px;
        }
      }
    }
  }
`;

const PhotoWrap = styled.div`
  ${fadeUpMixin("0.1s")}
`;

const PhotoFrame = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  border-radius: 20px;
  overflow: visible;

  &::before {
    content: "";
    position: absolute;
    inset: -8px;
    border-radius: 20px;
    background: linear-gradient(135deg, var(--blue) 0%, transparent 55%);
    z-index: 0;
    opacity: 0.35;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    right: -8px;
    width: 55%;
    height: 55%;
    background: var(--blue-dim);
    border: 1px solid var(--blue-border);
    border-radius: 14px;
    z-index: 0;
  }
`;

const Photo = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 14px;
  border: 0.5px solid var(--border-strong);
  transform: rotate(-2deg);
  transition: all 0.4s ease;

  &:hover {
    transform: rotate(0deg) scale(1.01);
  }
`;

// Bio
const BioWrap = styled.div`
  ${fadeUpMixin("0.2s")}
`;

const BioLead = styled.p`
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 700;
  color: var(--text-primary);

  span {
    color: var(--blue);
    font-style: italic;
    font-size: clamp(24px, 3vw, 32px);
  }
`;

const BioText = styled.p`
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.75;
`;

// Info table
const InfoTable = styled.dl`
  background: var(--bg-card);
  border: 0.5px solid var(--border);
  border-radius: 14px;
`;

const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 8px;
  align-items: baseline;

  @media (max-width: 480px) {
    grid-template-columns: 100px 1fr;
  }
`;

const InfoLabel = styled.dt`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-dim);
`;

const InfoValue = styled.dd`
  font-size: 13.5px;
  color: ${({ $available }) =>
    $available ? "var(--green)" : "var(--text-primary)"};
  font-weight: ${({ $available }) => ($available ? "500" : "400")};

  a {
    color: var(--blue);
    transition: all 0.15s ease;
    &:hover {
      opacity: 0.8;
    }
  }

  ${({ $available }) =>
    $available &&
    `
    display: flex;
    align-items: center;
    gap: 7px;

    &::before {
      content: '';
      width: 7px;
      height: 7px;
      background: var(--green);
      border-radius: 50%;
      flex-shrink: 0;
      animation: pulse 2.5s ease-in-out infinite;
    }
  `}
`;

const GhostBtn = styled.a`
  ${btnGhostMixin}
`;

export default ImageSection;
