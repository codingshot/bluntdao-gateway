import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 2em;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 0.8rem;
  font-weight: 400;
  height: 3.5em;
  justify-content: center;
  max-width: 14em;
  padding: 0.9em 3em;
  text-align: center;
  transition: background 0.3s;
  width: 100%;
  &:hover {
    background: var(--main-dark);
  }
`;

export function Button(props) {
  return (
    <StyledButton
      className={props.className}
      onClick={props.onClick}
      title={props.title}
      disabled={props.disabled}
    >
      {props.children}
    </StyledButton>
  );
}
