import { Formik } from "formik";
import { validationSchema, initialValues } from "./formConfig";
import { FormContent } from "./FormContent";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser, getUser } from "../../store";

export const LogInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values, actions) => {
    dispatch(getUser(values));
    const user = await dispatch(getUser(values));

    if (user) {
      dispatch(setCurrentUser(user));
      navigate("/dashboard/Overview");
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
