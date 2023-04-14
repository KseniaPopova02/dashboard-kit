import { Button, FormWrapper, CustomInput } from "../../components";
import { Formik, Form } from "formik";
import { validationSchema } from "./schema";

const onSubmit = async (values, actions) => {
  console.log("values:", values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

export const ForgotForm = () => (
  <Formik
    initialValues={{ email: "" }}
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
          <Button type="submit">Log In</Button>
        </FormWrapper>
      </Form>
    )}
  </Formik>
);
