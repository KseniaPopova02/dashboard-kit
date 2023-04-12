import React from "react";
import {
  Logo,
  LogoTitle,
  LogoSubtitle,
  Question,
  Container,
} from "../../components";
import { ResetForm } from "../../modal";

export const Reset = () => (
  <Container>
    <Logo />
    <LogoTitle>Reset Password</LogoTitle>
    <LogoSubtitle>Enter new password</LogoSubtitle>
    <ResetForm />
    <Question />
  </Container>
);
