import React from "react";
import { StyledInput } from "./style";

export const InputPassword = ({
  type = "text",
  placeholder = "",
  name = "",
  value = "",
  onChange,
  ...rest
}) => (
  <StyledInput
    placeholder={placeholder}
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    {...rest}
  />
);
