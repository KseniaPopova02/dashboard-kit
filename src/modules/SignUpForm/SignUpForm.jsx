import { Formik } from "formik";
import { validationSchema, initialValues } from "./formConfig";
import { FormContent } from "./FormContent";
import { useNavigate } from "react-router-dom";
import userData from "../../Data/userData.json";

export const SignUpForm = () => {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
    const { mockedEmail, mockedName, mockedLastName, mockedPassword } =
      userData;

    if (
      values.email === mockedEmail &&
      values.name === mockedName &&
      values.surname === mockedLastName &&
      values.password === mockedPassword
    ) {
      navigate("/dashboard");
    } else {
      alert("Something went wrong, sorry");
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
