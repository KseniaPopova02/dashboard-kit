import React from "react";
import {
  Logo,
  LogoTitle,
  LogoSubtitle,
  SignUpQuestion,
} from "../../components";
import { ResetForm } from "../../modules";

export const Reset = () => (
  <>
    <Logo />
    <LogoTitle>Reset Password</LogoTitle>
    <LogoSubtitle>Enter new password</LogoSubtitle>
    <ResetForm />
    <SignUpQuestion />
  </>
);
