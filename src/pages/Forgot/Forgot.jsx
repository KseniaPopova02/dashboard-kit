import { React, useState } from "react";
import {
  Logo,
  LogoTitle,
  LogoSubtitle,
  SignUpQuestion,
} from "../../components";
import { ForgotForm, ForgotSuccess } from "../../modules";

export const Forgot = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const handleSubmit = () => {
    setShowSuccessMessage(true);
  };
  return (
    <>
      {showSuccessMessage ? (
        <ForgotSuccess />
      ) : (
        <>
          <Logo />
          <LogoTitle>Forgot password?</LogoTitle>
          <LogoSubtitle>Enter your email from registered account</LogoSubtitle>
          <ForgotForm onSubmit={handleSubmit} />
          <SignUpQuestion />
        </>
      )}
    </>
  );
};
