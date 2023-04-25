import { FormContent } from "./FormContent";
import { Formik } from "formik";
import { validationSchema, initialValues } from "./formConfig";
import { React } from "react";

export const ForgotForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <FormContent />}
    </Formik>
  );
};
