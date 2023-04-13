import {
  Input,
  InputPassword,
  Button,
  Label,
  Error,
  FormWrapper,
} from "../../components";
import { useFormik, Formik, Form, Field } from "formik";
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
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
    >
      <Form>
        <Field placeholder="email" type="text" name="email" />
        <FormWrapper>
          <Label>Email</Label>
          <Input
            placeholder="email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <Error>{formik.errors.email}</Error>
          ) : (
            ""
          )}
          <Label>Password</Label>
          <InputPassword
            placeholder="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <Error>{formik.errors.password}</Error>
          ) : (
            ""
          )}

          <Button disabled={formik.isSubmitting} type="submit">
            Log In
          </Button>
        </FormWrapper>
      </Form>
    </Formik>
  );
};
