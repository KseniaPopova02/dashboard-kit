import React from "react";
import { Form } from "formik";
import {
  Button,
  StyledFormWrapper,
  CustomInput,
  CustomPasswordInput,
} from "../../components";

export const FormContent = () => (
  <Form>
    <StyledFormWrapper>
      <CustomInput label="Email" name="email" type="text" placeholder="Email" />
      <CustomPasswordInput
        label="Password"
        name="password"
        type="text"
        placeholder="password"
      />
      <Button type="submit">Log In</Button>
    </StyledFormWrapper>
  </Form>
);
