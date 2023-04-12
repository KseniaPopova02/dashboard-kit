import { Input, InputPassword, Button, Label, Error } from "../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { StyledForm } from "./style";

export const LogInForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("submit", values);
    },
    validationSchema: Yup.object({
      email: Yup.string().required(<Error>Email is required</Error>),
      password: Yup.string().required(<Error>Password is required</Error>),
    }),
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <InputPassword
        placeholder="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.password &&
        formik.touched.password &&
        formik.errors.password}
      <InputPassword
        placeholder="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.password &&
        formik.touched.password &&
        formik.errors.password}
      <Button type="submit">Log In</Button>
    </StyledForm>
  );
};
