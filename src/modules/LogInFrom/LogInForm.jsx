import { FormContent } from "./FormContent";
import { Formik } from "formik";
import { initialValues, validationSchema } from "./formConfig";

const onSubmit = async (actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

export const LogInForm = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {() => <FormContent />}
  </Formik>
);
