import { Formik } from "formik";
import { validationSchema, initialValues } from "./formConfig";
import { FormContent } from "./FormContent";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser, addNewUsers } from "../../store";

export const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values, actions) => {
    const user = {
      email: values.email,
      name: values.name,
      surname: values.surname,
      password: values.password,
    };

    try {
      await dispatch(addNewUsers(user));
      dispatch(setCurrentUser(user));
      navigate("/dashboard/Overview");
    } catch (error) {
      console.log(error);
    } finally {
      actions.setSubmitting(false);
    }
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
