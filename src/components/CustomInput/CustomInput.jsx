import React from "react";
import { useField } from "formik";
import { Label, Password, Error } from "../../components";

export const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Label>{label}</Label>
      <Password {...field} {...props} />
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </>
  );
};
