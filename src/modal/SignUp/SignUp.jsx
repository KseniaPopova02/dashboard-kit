import React from "react";
import { Logo, LogoTitle, LogoSubtitle, Container } from "../../components";
import { SignUpForm } from "../../modal";

export const SignUp = () => (
  <Container>
    <Logo />
    <LogoTitle>Sign Up</LogoTitle>
    <LogoSubtitle>Create a new account</LogoSubtitle>
    <SignUpForm />
  </Container>
);
