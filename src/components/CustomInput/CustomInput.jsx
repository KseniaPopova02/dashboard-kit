import React from "react";
import { useField } from "formik";
import { StyledWrapper } from "./style";
import { Label } from "../Label";
import { Input } from "../Input";
import { Error } from "../Error";

export const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <StyledWrapper>
      <Label>{label}</Label>
      <Input {...field} {...props} />
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </StyledWrapper>
  );
};
