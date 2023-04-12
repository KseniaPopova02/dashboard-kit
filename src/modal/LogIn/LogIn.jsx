import React from "react";
import { Logo, LogoTitle, LogoSubtitle, Question } from "../../components";
import { LogInForm } from "../../modal";
import { Container } from "../Forgot/style";

export const LogIn = () => (
  <Container>
    <Logo />
    <LogoTitle>Log In to Dashboard Kit</LogoTitle>
    <LogoSubtitle>Enter your email and password</LogoSubtitle>
    <LogInForm />
    <Question />
  </Container>
);
