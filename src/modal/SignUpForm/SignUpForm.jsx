import { Input, InputPassword, Button, Label } from "../../components";
import { useFormik } from "formik";
import { StyledForm } from "./style";

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
