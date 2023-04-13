import { InputPassword, Button, Label, Error } from "../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { StyledForm } from "./style";

export const ResetForm = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      repeatPassword: "",
    },
    onSubmit: (values) => {
      console.log("submit", values);
    },
    validationSchema: Yup.object({
      password: Yup.string().required(<Error>Password is required</Error>),
      repeatPassword: Yup.string()
        .required(<Error>Password is required</Error>)
        .oneOf([Yup.ref("password")], <Error>Passwords must match</Error>),
    }),
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Label>new password</Label>
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
      <Label>confirm new password</Label>
      <InputPassword
        placeholder="password"
        name="repeatPassword"
        value={formik.values.repeatPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.repeatPassword &&
        formik.touched.repeatPassword &&
        formik.errors.repeatPassword}
      <Button type="submit">Log In</Button>
    </StyledForm>
  );
};
