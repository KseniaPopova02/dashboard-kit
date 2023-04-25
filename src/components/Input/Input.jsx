import React from "react";
import { StyledInputAnt } from "./style";

export const Input = ({
  className = "input",
  type = "text",
  placeholder = "",
  name = "",
  value = "",
  onChange,
  ...rest
}) => (
  <StyledInputAnt
    className={className}
    placeholder={placeholder}
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    {...rest}
  />
);
