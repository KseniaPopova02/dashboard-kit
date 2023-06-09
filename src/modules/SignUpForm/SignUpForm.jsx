import { Formik } from "formik";
import { validationSchema, initialValues } from "./formConfig";
import { FormContent } from "./FormContent";
import { useNavigate } from "react-router-dom";

export const SignUpForm = () => {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(values);
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/dashboard");
    actions.setSubmitting(false);
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
