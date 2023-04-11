import React from "react";
import { StyledInput } from "./style";

export const InputPassword = ({ type = "text", placeholder = "" }) => (
  <StyledInput placeholder={placeholder} type={type} />
);
