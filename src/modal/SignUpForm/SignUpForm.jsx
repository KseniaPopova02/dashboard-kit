import { Input, InputPassword, Button, Label, Error } from "../../components";
import { useFormik } from "formik";
import { StyledForm } from "./style";
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
        .max(40)
        .required(<Error>Name is required</Error>),
      surname: Yup.string()
        .matches(/^[A-Za-z ]*$/, "Please enter valid surname")
        .max(40)
        .required(<Error>Surname is required</Error>),
      password: Yup.string().required(<Error>Password is required</Error>),
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
      <Label>First name</Label>
      <Input
        placeholder="First name"
        type="text"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Label>Last name</Label>
      <Input
        placeholder="Last name"
        type="text"
        name="surname"
        value={formik.values.surname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Label>Password</Label>
      <InputPassword
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Label>confirm password</Label>
      <InputPassword
        name="password"
        value={formik.values.repeatPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Button type="submit">Register</Button>
    </StyledForm>
  );
};
