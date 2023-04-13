import {
  Input,
  InputPassword,
  Button,
  Label,
  Error,
  StyledForm,
} from "../../components";
import { useFormik } from "formik";
import * as Yup from "yup";

export const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      surname: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: (values) => {
      console.log("submit", values);
    },
    validationSchema: Yup.object({
      email: Yup.string().required(<Error>Email is required</Error>),
      name: Yup.string()
        .matches(/^[A-Za-z ]*$/, "Please enter valid name")
        .min(3)
        .required(<Error>Name is required</Error>),
      surname: Yup.string()
        .matches(/^[A-Za-z ]*$/, "Please enter valid surname")
        .min(3)
        .required(<Error>Surname is required</Error>),
      password: Yup.string().required(<Error>Password is required</Error>),
      repeatPassword: Yup.string()
        .required(<Error>Password is required</Error>)
        .oneOf([Yup.ref("password")], <Error>Passwords must match</Error>),
    }),
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
      <Label>First name</Label>
      <Input
        placeholder="First name"
        type="text"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.name && formik.touched.name && formik.errors.name}
      <Label>Last name</Label>
      <Input
        placeholder="Last name"
        type="text"
        name="surname"
        value={formik.values.surname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.surname && formik.touched.surname && formik.errors.surname}
      <Label>Password</Label>
      <InputPassword
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.password &&
        formik.touched.password &&
        formik.errors.password}
      <Label>confirm password</Label>
      <InputPassword
        name="repeatPassword"
        value={formik.values.repeatPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.repeatPassword &&
        formik.touched.repeatPassword &&
        formik.errors.repeatPassword}
      <Button type="submit">Register</Button>
    </StyledForm>
  );
};
