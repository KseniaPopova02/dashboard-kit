import React from "react";
import { StyledBtn } from "./styled";

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
