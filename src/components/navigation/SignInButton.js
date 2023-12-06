import React from "react";
import { RedBorderButton } from "../common/buttons/RedBorderButton";

export function SignInButton(props) {
  return (
    <RedBorderButton className="nav-sign-in-btn" onClick={props.onSignIn}>
      Sign In
    </RedBorderButton>
  );
}
