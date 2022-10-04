import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ServiceCard from "../Components/ServiceCard";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"services"} />
        <div className="services">
          <ServiceCard
            image={design}
            title={"Web Development"}
            paragraph={
              "I build beautiful, responsive, scalable web application and websites for clients, businesses, and startups." }
          />

          <div className="mid-card">
            <ServiceCard
              image={intelligence}
              title={"Android Development"}
              paragraph={`Expertise in developing user friendly, innovative and high-functioning Android-based applications
               ready for Google play store publishing. 
               `}
            />
          </div>
          <ServiceCard
            image={gamedev}
            title={"Digital Marketing"}
            paragraph={`With wide variety of marketing strategies and technologies, 
            I promote products and services through digital channels, 
            such as social media, SEO, email, and mobile apps, to reach consumers online.`}
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
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
    }
  }
`;

export default ServicesSection;
