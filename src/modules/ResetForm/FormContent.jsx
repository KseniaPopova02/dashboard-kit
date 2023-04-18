import {
  Button,
  StyledFormWrapper,
  CustomPasswordInput,
} from "../../components";
import { Form } from "formik";

export const FormContent = () => (
  <Form>
    <StyledFormWrapper>
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
    </StyledFormWrapper>
  </Form>
);
