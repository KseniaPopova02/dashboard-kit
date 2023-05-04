import React from "react";
import { Outlet } from "react-router-dom";
import { StyledContainer } from "../../components";

export const AuthFormLayout = () => (
  <StyledContainer>
    <Outlet />
  </StyledContainer>
);
