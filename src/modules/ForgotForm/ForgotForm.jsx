import { Button, FormWrapper, CustomInput } from "../../components";
import { Formik, Form } from "formik";
import { validationSchema } from "./schema";
import { initialValues } from "./initialValues";
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
      {() => (
        <Form>
          <FormWrapper>
            <CustomInput
              label="Email"
              name="email"
              type="text"
              placeholder="Email"
            />
            <Button type="submit">Send</Button>
          </FormWrapper>
        </Form>
      )}
    </Formik>
  );
};
