import React from "react";
import { Button } from "./Button";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: var(--main-color);
  border-color: var(--main-dark);
  color: white;
`;

export function RedBorderButton(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}
