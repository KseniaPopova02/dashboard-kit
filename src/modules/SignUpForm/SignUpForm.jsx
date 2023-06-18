import { Formik } from "formik";
import { validationSchema, initialValues } from "./formConfig";
import { FormContent } from "./FormContent";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../store";
import { setCurrentUser } from "./redux";
import { Api, USERS } from "../../API";

export const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    const user = {
      email: values.email,
      name: values.name,
      surname: values.surname,
      password: values.password,
    };
    Api.post(USERS, user)
      .then(() => {
        dispatch(setCurrentUser(values));
        dispatch(setLoggedIn(true));
        navigate("/dashboard/Overview");
      })
      .catch((error) => console.log(error))
      .finally(() => {
        actions.setSubmitting(false);
      });
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
