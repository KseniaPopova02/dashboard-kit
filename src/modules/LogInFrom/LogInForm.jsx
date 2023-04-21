import { FormContent } from "./FormContent";
import { Formik } from "formik";
import { initialValues, validationSchema } from "./formConfig";
import { useNavigate } from "react-router-dom";
import userData from "../../Data/userData.json";

export const LogInForm = () => {
  const navigate = useNavigate();
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const { userEmail, userPassword } = userData;

    if (values.email === userEmail && values.password === userPassword) {
      navigate("/dashboard");
    } else {
      actions.setFieldError("email", "Wrong email or password");
      actions.setFieldError("password", "Wrong email or password");
    }

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
