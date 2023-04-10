import React from "react";
import { StyledInput } from "./style";

export const InputPassword = ({ type = "text", placeholder = "" }) => (
  <StyledInput
    className="input__password"
    placeholder={placeholder}
    type={type}
  />
);
