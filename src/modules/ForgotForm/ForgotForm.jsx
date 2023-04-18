import { FormContent } from "./FormContent";
import { Formik } from "formik";
import { validationSchema, initialValues } from "./formConfig";

import { useNavigate } from "react-router-dom";
import React from "react";

export const ForgotForm = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/forgotSuccess");
  };

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
