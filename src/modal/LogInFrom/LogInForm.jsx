import { Input, InputPassword, Button, Label, Error } from "../../components";
import { Formik, Form, Field, useFormik } from "formik";
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
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = <Error>Email is required</Error>;
      }
      if (!values.password) {
        errors.password = <Error>Password is required</Error>;
      }
      return errors;
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Label>Email</Label>
      <Input
        placeholder="email"
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.email && formik.touched.email && formik.errors.email}
      <Label>Password</Label>
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
