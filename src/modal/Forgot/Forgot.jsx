import React from "react";
import { Logo, LogoTitle, LogoSubtitle, Question } from "../../components";
import { ForgotForm } from "../ForgotForm";

export const Forgot = () => (
  <>
    <Logo />
    <LogoTitle>Forgot password?</LogoTitle>
    <LogoSubtitle>Enter your email from registered account</LogoSubtitle>
    <ForgotForm />
  </>
);
