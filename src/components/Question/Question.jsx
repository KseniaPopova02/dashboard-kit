import React from "react";
import { StyledLink, StyledText } from "./style";

export const Question = ({ href = "" }) => (
  <StyledText>
    Don’t have an account?
    <StyledLink href={href}>Sign up</StyledLink>
  </StyledText>
);
