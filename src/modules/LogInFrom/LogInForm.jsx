import {
  Button,
  FormWrapper,
  CustomInput,
  CustomPasswordInput,
} from "../../components";
import { Formik, Form } from "formik";
import { validationSchema } from "./schema";

const onSubmit = async (values, actions) => {
  console.log("values:", values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

export const LogInForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(isSubmitting) => (
        <Form>
          <FormWrapper>
            <CustomInput
              label="Email"
              name="email"
              type="text"
              placeholder="Email"
            />
            <CustomPasswordInput
              label="Password"
              name="password"
              type="text"
              placeholder="password"
            />
            <Button disabled={isSubmitting} type="submit">
              Log In
            </Button>
          </FormWrapper>
        </Form>
      )}
    </Formik>
  );
};
