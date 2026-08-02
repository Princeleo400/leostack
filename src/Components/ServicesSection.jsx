/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import { RocketIcon, StackIcon, WebIcon } from "../assets/svg/icons";
import { cardMixin, fadeUpMixin } from "../styles/shared";

function ServicesSection() {
  const services = [
    {
      Icon: WebIcon,
      title: "Web Development",
      desc: "Responsive, high-performance websites and web applications built for startups, businesses, and digital platforms.",
    },
    {
      Icon: StackIcon,
      title: "Full-stack engineering",
      desc: "End-to-end application development with secure APIs, databases, authentication, and seamless integrations.",
    },
    {
      Icon: RocketIcon,
      title: "Product engineering",
      desc: "Building scalable SaaS products from idea to launch with a focus on reliability and user experience.",
    },
  ];
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"services"} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 md:mt-20">
          {services.map(({ Icon, title, desc }) => (
            <ServiceCard key={title}>
              <ServiceIcon className="mb-5">
                <Icon />
              </ServiceIcon>
              <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2 capitalize">
                {title}
              </h3>
              <ServiceDivider className="mb-3" />
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {desc}
              </p>
            </ServiceCard>
          ))}
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServiceCard = styled.article`
  ${cardMixin}
  padding: 28px 24px;
  ${fadeUpMixin("0.15s")}
`;

const ServicesSectionStyled = styled.section`
  padding-top: 2px;
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
      margin-top: 3rem;
    }
  }
`;

// Services

const ServiceIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: var(--blue-dim);
  border: 0.5px solid var(--blue-border);
  border-radius: 10px;
  color: var(--blue);
  transition: all 0.25s ease;

  ${ServiceCard}:hover & {
    background: var(--blue);
    color: #fff;
    border-color: var(--blue);
  }

  .rocket-body,
  .rocket-wing-left,
  .rocket-wing-right,
  .rocket-flame {
    transition: transform 0.4s ease;
    transform-origin: center;
  }

  ${ServiceCard}:hover & .rocket-body,
${ServiceCard}:hover & .rocket-wing-left,
${ServiceCard}:hover & .rocket-wing-right {
    transform: translate(-2px, -3px) rotate(-8deg);
  }

  ${ServiceCard}:hover & .rocket-flame {
    transform: scale(1.25);
  }

  @keyframes blinkCursor {
    0%,
    45% {
      opacity: 1;
    }
    46%,
    100% {
      opacity: 0.2;
    }
  }

  ${ServiceCard}:hover & .terminal-line {
    animation: blinkCursor 0.8s steps(1) infinite;
  }

  svg {
    overflow: visible;
  }

  .globe-meridian {
    transform-origin: center;
    transition: transform 0.6s ease;
  }

  ${ServiceCard}:hover & .globe-meridian {
    transform: rotateY(180deg);
  }
`;

const ServiceDivider = styled.div`
  width: 3.5rem;
  height: 3px;
  background: var(--blue);
  border-radius: 10px;
  transition: all 0.25s ease;

  ${ServiceCard}:hover & {
    width: 5rem;
  }
`;

export default ServicesSection;
