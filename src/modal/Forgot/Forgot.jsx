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
import { Container } from "./style";

export const Forgot = () => (
  <Container>
    <Logo />
    <LogoTitle />
    <LogoSubtitle />
    <Label>email</Label>
    <Input>Email address</Input>
    <Label>password</Label>
    <InputPassword />
    <Button>Log in</Button>
    <Question />
  </Container>
);
