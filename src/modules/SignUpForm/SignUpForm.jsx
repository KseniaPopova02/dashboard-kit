import {
  Button,
  FormWrapper,
  CustomInput,
  CustomPasswordInput,
} from "../../components";
import { Formik, Form } from "formik";
import { validationSchema } from "./schema";
import { initialValues } from "./initialValues";

const onSubmit = async (values, actions) => {
  console.log("values:", values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

export const SignUpForm = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
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
          <CustomInput
            label="First name"
            name="name"
            type="text"
            placeholder="First name"
          />
          <CustomInput
            label="Last name"
            name="surname"
            type="text"
            placeholder="Last name"
          />
          <CustomPasswordInput
            label="Password"
            name="password"
            type="text"
            placeholder="password"
          />
          <CustomPasswordInput
            label="confirm password"
            name="confirmPassword"
            type="text"
            placeholder="password"
          />
          <Button type="submit">Register</Button>
        </FormWrapper>
      </Form>
    )}
  </Formik>
);
