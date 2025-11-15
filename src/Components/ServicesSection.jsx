import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
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
              "I create beautiful, responsive, and scalable web applications and websites for clients, businesses, and startups, ensuring optimal performance, user experience, and modern design."
            }
          />

          <div className="mid-card">
            <ServiceCard
              image={intelligence}
              title={"Android Development"}
              paragraph={`I develop innovative, high-performing, and user-friendly Android applications, 
                fully optimized for Google Play Store and tailored to meet business or project-specific requirements.
               `}
            />
          </div>
          <ServiceCard
            image={gamedev}
            title={"Digital Marketing"}
            paragraph={`With wide variety of marketing strategies and technologies, 
            I promote products and services through digital channels, 
            such as social media, SEO, social media, email campaigns, and mobile app promotion, to increase online visibility, 
            engagement, and conversions for products and services.`}
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

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

export default ServicesSection;
