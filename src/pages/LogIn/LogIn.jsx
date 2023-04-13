import React from "react";
import {
  Logo,
  LogoTitle,
  LogoSubtitle,
  SignUpQuestion,
  Container,
} from "../../components";
import { LogInForm } from "../../modules";

export const LogIn = () => (
  <Container>
    <Logo />
    <LogoTitle>Log In to Dashboard Kit</LogoTitle>
    <LogoSubtitle>Enter your email and password</LogoSubtitle>
    <LogInForm />
    <SignUpQuestion />
  </Container>
);
