import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Container } from "../../components";

export const Layout = () => (
  <Container>
    <Outlet />
  </Container>
);
