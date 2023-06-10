import { Formik } from "formik";
import { validationSchema, initialValues } from "./formConfig";
import { FormContent } from "./FormContent";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUserAsync } from "../../store";

export const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  console.log(user);

  const onSubmit = (values, actions) => {
    const user = {
      email: values.email,
      name: values.name,
      surname: values.surname,
      password: values.password,
    };
    dispatch(addUserAsync(user));
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
