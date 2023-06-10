import { Formik } from "formik";
import { validationSchema, initialValues } from "./formConfig";
import { FormContent } from "./FormContent";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUserAsync } from "../../store";

export const SignUpForm = ({ updateLoggedIn }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userConsole = useSelector((state) => state.users);
  console.log(userConsole);

  const onSubmit = (values, actions) => {
    const user = {
      email: values.email,
      name: values.name,
      surname: values.surname,
      password: values.password,
    };
    console.log("this is values:", values);
    dispatch(addUserAsync(user));
    updateLoggedIn(true, values);
    navigate("/dashboard/Overview");
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
