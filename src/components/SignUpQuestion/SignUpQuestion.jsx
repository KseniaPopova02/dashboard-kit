import React from "react";
import { StyledLink, StyledText } from "./style";

export const SignUpQuestion = () => (
  <StyledText>
    Don’t have an account?
    <StyledLink to="/signUp">Sign up</StyledLink>
  </StyledText>
);
