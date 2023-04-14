import React from "react";
import { useField } from "formik";
import { Label, InputPassword, Error } from "../../components";

export const CustomPasswordInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Label>{label}</Label>
      <InputPassword {...field} {...props} />
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </>
  );
};
