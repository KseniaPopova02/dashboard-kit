import React from "react";
import {
  Logo,
  LogoTitle,
  LogoSubtitle,
  SignUpQuestion,
} from "../../components";
import { ForgotForm } from "../../modules";

export const Forgot = () => (
  <>
    <Logo />
    <LogoTitle>Forgot password?</LogoTitle>
    <LogoSubtitle>Enter your email from registered account</LogoSubtitle>
    <ForgotForm />
    <SignUpQuestion />
  </>
);
