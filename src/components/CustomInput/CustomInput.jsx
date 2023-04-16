import React from "react";
import { useField } from "formik";
import { Label, Input, Error } from "../../components";

export const CustomInput = ({ label, ...props }) => {
  console.log("Props before:", props);
  const [field, meta] = useField(props);
  console.log("Props after:", useField(props));
  console.log("field:", field);
  console.log("meta:", meta);

  return (
    <>
      <Label>{label}</Label>
      <Input {...field} {...props} />
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </>
  );
};
