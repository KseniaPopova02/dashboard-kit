import { FormContent } from "./FormContent";
import { Formik } from "formik";
import { validationSchema, initialValues } from "./configForm";

const onSubmit = async (values, actions) => {
  console.log("values:", values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

export const ResetForm = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {() => <FormContent />}
  </Formik>
);
