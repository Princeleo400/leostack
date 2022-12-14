import React from "react";
import styled from "styled-components";

function ContactItem({ title, icon, cont1, cont2 }) {
  return (
    <ContactItemStyled>
      <div className="left-content">{icon}</div>
      <div className="right-content">
        <h6>{title}</h6>
        <p>{cont1}</p>
        <p>{cont2}</p>
      </div>
    </ContactItemStyled>
  );
}

const ContactItemStyled = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--background-dark-grey);
  display: flex;
  align-items: center;

  
  @media screen and (max-width: 440px) {
    padding: 10px;
}
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
  .left-content {
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    svg {
      font-size: 2.3rem;
    }

    @media screen and (max-width: 440px) {
        padding: 10px;
    }
  }

  .right-content {
    h6 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding-bottom: 0.6rem;
      @media screen and (max-width: 440px) {
        font-size: 18px !important;
    }
    }
    p {
      padding: 0.1rem 0;
      @media screen and (max-width: 440px) {
        font-size: 14px !important;
    }
    }
  }
`;

export default ContactItem;
