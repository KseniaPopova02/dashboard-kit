import React from "react";
import { StyledBtn } from "./style";

export const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) => (
  <StyledBtn
    onClick={onClick}
    className={className}
    type={type}
    disabled={disabled}
  >
    {children}
  </StyledBtn>
);
