import React from "react";
import { Outlet } from "react-router-dom";
// import { StyledAuthFormLayoutWrapper } from "./style";
import { StyledContainer } from "../../components";

export const AuthFormLayout = () => (
  <StyledContainer>
    <Outlet />
  </StyledContainer>
);
