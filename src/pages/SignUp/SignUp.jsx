import React from "react";
import { Logo, LogoTitle, LogoSubtitle } from "../../components";
import { SignUpForm } from "../../modules";

export const SignUp = () => (
  <>
    <Logo />
    <LogoTitle>Sign Up</LogoTitle>
    <LogoSubtitle>Create a new account</LogoSubtitle>
    <SignUpForm />
  </>
);
