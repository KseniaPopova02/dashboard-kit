import React from "react";
import {
  Logo,
  LogoTitle,
  LogoSubtitle,
  SignUpQuestion,
  Container,
} from "../../components";
import { ForgotForm } from "../../modules";

export const Forgot = () => (
  <Container>
    <Logo />
    <LogoTitle>Forgot password?</LogoTitle>
    <LogoSubtitle>Enter your email from registered account</LogoSubtitle>
    <ForgotForm />
    <SignUpQuestion />
  </Container>
);
