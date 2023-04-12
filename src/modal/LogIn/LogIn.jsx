import React from "react";
import {
  Logo,
  LogoTitle,
  LogoSubtitle,
  Label,
  Input,
  InputPassword,
  Button,
  Question,
} from "../../components";
import { Container } from "../Forgot/style";

export const LogIn = () => (
  <Container>
    <Logo />
    <LogoTitle>Log In to Dashboard Kit</LogoTitle>
    <LogoSubtitle>Enter your email and password</LogoSubtitle>
    <Label>email</Label>
    <Input>Email address</Input>
    <Label>password</Label>
    <InputPassword />
    <Button>Log in</Button>
    <Question />
  </Container>
);
