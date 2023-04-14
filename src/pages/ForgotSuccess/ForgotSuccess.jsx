import React from "react";
import { Logo, LogoTitle, LogoSubtitle } from "../../components";
import { StyledLink } from "./style";

export const ForgotSuccess = () => (
  <>
    <Logo />
    <LogoTitle>Forgot password?</LogoTitle>
    <LogoSubtitle>
      Link to change your password has been sent to provided email if we have it
      inside our system
    </LogoSubtitle>
    <StyledLink to="/">Back</StyledLink>
  </>
);
