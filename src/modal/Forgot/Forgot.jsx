import React from "react";
import { Logo, LogoTitle, LogoSubtitle, Question } from "../../components";
import { ForgotForm } from "../ForgotForm";
import { Container } from "../../components";

export const Forgot = () => (
  <Container>
    <Logo />
    <LogoTitle>Forgot password?</LogoTitle>
    <LogoSubtitle>Enter your email from registered account</LogoSubtitle>
    <ForgotForm />
    <Question />
  </Container>
);
