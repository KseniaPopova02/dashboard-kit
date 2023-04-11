import React from "react";
import { InputAnt } from "./style";

export const Input = ({ type = "text", placeholder = "" }) => (
  <InputAnt className="input" placeholder={placeholder} type={type} />
);
