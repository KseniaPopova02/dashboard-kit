import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, FormWrapper } from "../../components";

export const Layout = () => (
  <Container>
    <FormWrapper>
      <Outlet />
    </FormWrapper>
  </Container>
);
