import {
  Input,
  InputPassword,
  Button,
  Label,
  Error,
  StyledForm,
} from "../../components";
import { useFormik } from "formik";
import { validationSchema } from "./schema";

export const LogInForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("submit", values);
    },
    validationSchema: validationSchema,
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
      <Error>{formik.touched.email && formik.errors.email}</Error>
      <Label>Password</Label>
      <InputPassword
        placeholder="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Error>{formik.touched.password && formik.errors.password}</Error>
      <Button type="submit">Log In</Button>
    </StyledForm>
  );
};
