import React from "react";
import { InputAnt } from "./style";

export const Input = ({
  type = "text",
  placeholder = "",
  name = "",
  value = "",
  onChange,
}) => (
  <InputAnt
    className="input"
    placeholder={placeholder}
    type={type}
    name={name}
    value={value}
    onChange={onChange}
  />
);
