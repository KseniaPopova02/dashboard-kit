import React from "react";
import { useField } from "formik";
import { Error } from "../../components";

export const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input {...field} {...props} />
      {meta.error && <Error>{meta.error}</Error>}
    </>
  );
};
