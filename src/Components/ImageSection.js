import React from "react";
import styled from "styled-components";
import Leo from "../img/Leo.jpg";
import PrimaryButton from "./PrimaryButton";
import "../app.scss";
import CV from "../data/CV_Chukwuemeka_Ohaga.pdf";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <div className="image__content">
            <img src={Leo} alt="Leo" />
        </div>
      </div>
      <div className="right-content">
        <h4>
          I'm <span> Leo</span>
        </h4>
        <p className="paragraph">
          An experienced software developer, with web and android aplications.
          Skilled in ReactJs, Javascript, bootstrap, HTML and CSS 
          for building front-end web applications. PHP, MySQL, NodeJs for server side applications.
          I have great desire for innovation, I have good communication skills and collaboration among team members.
          I also manage small team of developers and designers who come together to build digital solutions for businesses.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location</p>
            <p>Job/Freelance</p>
          </div>
          <div className="info">
            <p>: Chukwuemeka Michael Ohaga</p>
            <p>: Nigerian </p>
            <p>: English </p>
            <p>: Owerri, Nigeria </p>
            <p>: Available </p>
          </div>
        </div>
        <a href={CV} download className="link-btn">
          Download CV <span></span> <span></span> <span></span> <span></span>
        </a>{" "}
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 40% 50%;
  gap: 10%;
 @media screen and (max-width: 1000px) {
    flex-direction: column;
    grid-template-columns: 100%;
   
  }
  .left-content {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius:  2rem;
    background: linear-gradient(45deg, transparent, var(--primary-color), transparent);
    display: grid;
    place-items: center;
    @media screen and (max-width: 1000px) {
      margin-bottom: 2rem;
      width: 93%;


    }
    
    .image__content{
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
      &:hover{
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
        }
      }
      .info-title{
        @media screen and (max-width: 1000px) {
          width: 90%;
        }
      }
    }
  }
`;
export default ImageSection;
