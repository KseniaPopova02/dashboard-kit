import { Input, Button, Label, Error, StyledForm } from "../../components";
import { useFormik } from "formik";
import * as Yup from "yup";

export const ForgotForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log("submit", values);
    },
    validationSchema: Yup.object({
      email: Yup.string().required(<Error>Email is required</Error>),
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
      <Button type="submit">Send</Button>
    </StyledForm>
  );
};
