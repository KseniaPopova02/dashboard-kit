import React from "react";
import { InputAnt } from "./style";

export const Input2 = ({ type = "text", placeholder = "" }) => (
  <InputAnt className="input" placeholder={placeholder} type={type} />
);
