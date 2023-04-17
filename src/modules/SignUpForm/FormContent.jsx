import {
  Button,
  StyledFormWrapper,
  CustomInput,
  CustomPasswordInput,
} from "../../components";
import { Form } from "formik";

export const FormContent = () => (
  <Form>
    <StyledFormWrapper>
      <CustomInput label="Email" name="email" type="text" placeholder="Email" />
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
    </StyledFormWrapper>
  </Form>
);
