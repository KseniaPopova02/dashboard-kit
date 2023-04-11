import React from "react";
import { StyledLabel } from "./style";

export const Label = ({ children, htmlFor = "", className = "" }) => (
  <StyledLabel htmlFor={htmlFor} className={className}>
    {children}
  </StyledLabel>
);
