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

export const ResetForm = () => {
  return (
    <Formik
      initialValues={{ password: "", confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form>
          <FormWrapper>
            <CustomPasswordInput
              label="new password"
              name="password"
              type="text"
              placeholder="password"
            />
            <CustomPasswordInput
              label="confirm new password"
              name="confirmPassword"
              type="text"
              placeholder="password"
            />
            <Button type="submit">Send</Button>
          </FormWrapper>
        </Form>
      )}
    </Formik>
  );
};
