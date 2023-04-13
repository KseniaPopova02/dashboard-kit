import {
  Button,
  FormWrapper,
  CustomInput,
  CustomPasswordInput,
} from "../../components";
import { Formik, Form } from "formik";
import { validationSchema } from "./schema";

export const LogInForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
    >
      {(props) => (
        <Form>
          <FormWrapper>
            <CustomInput
              label="Email"
              name="email"
              type="text"
              placeholder="Email"
            />

            <Button type="submit">Log In</Button>
          </FormWrapper>
        </Form>
      )}
    </Formik>
  );
};
