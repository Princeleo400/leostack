import React from "react";
import styled from "styled-components";

function Button({ filter, setFilter, button }) {
  return (
    <ButtonsStyled>
      {button.map((but, i) => {
        return (
          <ButtonStyled
            key={i}
            $active={filter === but}
            onClick={() => setFilter(but)}
            role="tab"
            aria-selected={filter === but}
          >
            {but}
          </ButtonStyled>
        );
      })}
    </ButtonsStyled>
  );
}

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: var(--background-light-color-2);
  padding: 0.4rem 2rem;
  font-size: inherit;
  color: var(--white-color);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  margin-bottom: 0.6rem;
  &:active,
  &:focus {
    background-color: var(--primary-color);
  }
  &:hover {
    background-color: var(--primary-color);
  }

  &:not(:last-child) {
    margin-right: 0.6rem;
  }

  padding: 7px 18px;
  border-radius: 999px;
  border: 0.5px solid
    ${({ $active }) => ($active ? "var(--blue)" : "var(--border-strong)")};
  background: ${({ $active }) => ($active ? "var(--blue)" : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "var(--text-secondary)")};
  font-size: 13px;
  font-weight: 500;
  font-family: var(--font);
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ $active }) => ($active ? "#5a8fff" : "var(--blue-dim)")};
    border-color: var(--blue);
    color: ${({ $active }) => ($active ? "#fff" : "var(--blue)")};
  }
`;
const ButtonsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  margin: 2.4rem auto;
`;
export default Button;
