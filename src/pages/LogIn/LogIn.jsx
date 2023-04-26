import React from "react";
import {
  Logo,
  LogoTitle,
  LogoSubtitle,
  SignUpQuestion,
} from "../../components";
import { LogInForm } from "../../modules";
import { StyledPasswordQuestion } from "./style";

export const LogIn = ({ updateLoggedIn }) => (
  <>
    <Logo />
    <LogoTitle>Log In to Dashboard Kit</LogoTitle>
    <LogoSubtitle>Enter your email and password</LogoSubtitle>
    <LogInForm updateLoggedIn={updateLoggedIn} />
    <SignUpQuestion />
    <StyledPasswordQuestion to="/forgot">
      Forgot your password?
    </StyledPasswordQuestion>
  </>
);
