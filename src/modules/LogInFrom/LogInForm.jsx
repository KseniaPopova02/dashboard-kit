import { FormContent } from "./FormContent";
import { Formik } from "formik";
import { initialValues, validationSchema } from "./formConfig";
import { useNavigate } from "react-router-dom";
import userData from "../../Data/userData.json";

export const LogInForm = ({ updateLoggedIn }) => {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

<<<<<<< HEAD
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (user) => user.email === values.email && user.password === values.password
    );

    if (user) {
      updateLoggedIn(true);
      navigate("/dashboard/Overview");
=======
    const { userEmail, userPassword } = userData;

    if (values.email === userEmail && values.password === userPassword) {
      navigate("/dashboard");
>>>>>>> 32e26ed (remove: mocked data into different file)
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
