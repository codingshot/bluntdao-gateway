import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavigationButton = styled.div`
  a {
    color: white;
    font-size: 16px;
    padding: 10px;
    border-bottom: 1px solid transparent;
    transition: all 300ms;
    font-weight: var(--font-weight-bold);
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover,
    &.active {
      text-decoration: none;
      border-color: rgb(235, 234, 234);
    }
  }
  &.disabled {
    opacity: 0.5;
  }
`;

export function NavigationButton(props) {
  return (
    <StyledNavigationButton className={props.disabled ? "disabled" : ""}>
      {props.route ? (
        <NavLink
          onClick={(e) => {
            if (props.disabled) {
              e.preventDefault();
            }
          }}
          to={props.route}
          exact={true}
        >
          {props.children}
        </NavLink>
      ) : (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          {props.children}
        </a>
      )}
    </StyledNavigationButton>
  );
}
