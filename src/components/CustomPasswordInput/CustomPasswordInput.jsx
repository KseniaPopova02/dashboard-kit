import React from "react";
import { useField } from "formik";
import { StyledWrapper } from "./style";
import { Label, InputPassword, Error } from "..";

export const CustomPasswordInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <StyledWrapper>
      <Label>{label}</Label>
      <InputPassword {...field} {...props} />
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </StyledWrapper>
  );
};
