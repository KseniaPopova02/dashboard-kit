import React from "react";
import {
  Logo,
  LogoTitle,
  LogoSubtitle,
  SignUpQuestion,
  Container,
} from "../../components";
import { ResetForm } from "../../modules";

export const Reset = () => (
  <Container>
    <Logo />
    <LogoTitle>Reset Password</LogoTitle>
    <LogoSubtitle>Enter new password</LogoSubtitle>
    <ResetForm />
    <SignUpQuestion />
  </Container>
);
