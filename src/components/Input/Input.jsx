import React from "react";
import { InputAnt } from "./style";

export const Input = ({
  className = "input",
  type = "text",
  placeholder = "",
  name = "",
  value = "",
  onChange,
  ...rest
}) => (
  <InputAnt
    className={className}
    placeholder={placeholder}
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    {...rest}
  />
);
