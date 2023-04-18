import { Form } from "formik";
import { Button, StyledFormWrapper, CustomInput } from "../../components";

export const FormContent = () => (
  <Form>
    <StyledFormWrapper>
      <CustomInput label="Email" name="email" type="text" placeholder="Email" />
      <Button type="submit">Send</Button>
    </StyledFormWrapper>
  </Form>
);
