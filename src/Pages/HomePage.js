import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import Particle from "../Components/Particle";
import { LinkedIn, Mail, WhatsApp } from "@material-ui/icons";
import "../app.scss";
import CV from "../data/CV_Chukwuemeka_Michael_Ohaga.pdf";
import logo from "../img/LEOPhotoRoom(2).png";

function HomePage() {
  return (
    <HomePageStyled>
      <img src={logo} alt="" style={{ width: 120, margin: 20 }}></img>

      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span className="leo-title">LEO </span>
        </h1>
        <h2>I develop scalable web based applications and softwares. </h2>
        <div className="icons">
          <a
            href="mailto: ohagamichael@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="icon i-mail"
          >
            <Mail />
          </a>
          <a
            href="https://facebook.com/michael.ohaga"
            target="_blank"
            rel="noreferrer"
            className="icon i-facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://github.com/Princeleo400"
            target="_blank"
            rel="noreferrer"
            className="icon i-github"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/chukwuemeka-ohaga-b3866a223"
            target="_blank"
            rel="noreferrer"
            className="icon i-linkedin"
          >
            <LinkedIn />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=2349033098293&text=Hello%20Leo"
            target="_blank"
            rel="noreferrer"
            className="icon i-whatsapp"
          >
            <WhatsApp />
          </a>
        </div>
        {/*  <Button variant="outlined">Outlined</Button> */}

        <a href={CV} className="link-btn" target="_blank" rel="noreferrer">
          Download CV <span></span> <span></span> <span></span> <span></span>
        </a>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .leo-title{
            font-family: 'Carter One', cursive;
        }

          .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            margin-bottom: 1rem;
            .icon{
               border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .6s ease-in-out;
                cursor: pointer;
                margin: 0 5px;
                &:hover{
                    // border: 2px solid var(--primary-color);
                    // color: var(--primary-color);
                    transform: translateY(-5px) scale(1.2) rotate(360deg);
                }
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-linkedin{
                &:hover{
                    border: 2px solid #0072b1;
                    color: #0072b1;
                }
            }
            .i-facebook{
                &:hover{
                    border: 2px solid #3b5998;
                    color: #3b5998;
                }
            }
            .i-mail{
                &:hover{
                    border: 2px solid #ea4335;
                    color: #ea4335;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
            .i-whatsapp{
                &:hover{
                    border: 2px solid #5FFC7B;
                    color: #5FFC7B;
                }
            }
        }
    }
`;

export default HomePage;
