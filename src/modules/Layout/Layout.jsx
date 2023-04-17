import React from "react";
import { Link, Outlet } from "react-router-dom";
import { StyledContainer } from "../../components";

export const Layout = () => (
  <StyledContainer>
    <Outlet />
  </StyledContainer>
);
