import React from "react";
import { Logo, LogoTitle, LogoSubtitle, Question } from "../../components";
import { LogInForm } from "../../modal";
import { Container } from "./style";

export const Reset = () => (
  <Container>
    <Logo />
    <LogoTitle>Reset Password</LogoTitle>
    <LogoSubtitle>Enter new password</LogoSubtitle>
    <LogInForm />
    <Question />
  </Container>
);
