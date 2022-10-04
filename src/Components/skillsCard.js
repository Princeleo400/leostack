import React from "react";
import styled from "styled-components";

function SkillsCard({ image, title }) {
  return (
    <SkillsCardStyled>
      <div className="container my-skills">
        {image}
        <h6>{title}</h6>
      </div>
    </SkillsCardStyled>
  );
}

const SkillsCardStyled = styled.div`
  background-color: var(--background-dark-grey);
  border-left: 1px solid var(--border-color);
  border-top: 8px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  transition: all 0.4s ease-in-out;
  &:hover {
    border-top: 8px solid var(--primary-color);
    transform: translateY(3px);
  }

  .my-skills {
    display: flex;
    align-items: center;

    h6 {
      margin-left: 15px;
      padding: 0;
    }
  }
  .container {
    padding: 1.2rem;
    h4 {
      color: var(--white-color);
      font-size: 1.6rem;
      padding: 1rem 0;
      position: relative;
      &::after {
        content: "";
        width: 4rem;
        background-color: var(--border-color);
        height: 3px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 10px;
      }
    }

    p {
      padding: 0.8rem 0;
    }
  }
`;

export default SkillsCard;
