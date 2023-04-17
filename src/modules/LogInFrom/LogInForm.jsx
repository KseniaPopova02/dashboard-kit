import {
  Button,
  StyledFormWrapper,
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

export const LogInForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <StyledFormWrapper>
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
            <Button type="submit">Log In</Button>
          </StyledFormWrapper>
        </Form>
      )}
    </Formik>
  );
};
