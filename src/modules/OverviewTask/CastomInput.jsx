import React from "react";
import { useField } from "formik";
import { Error } from "../../components";
import { StyledInput } from "./style";

export const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <StyledInput {...field} {...props} />
      {meta.error && <Error>{meta.error}</Error>}
    </>
  );
};
