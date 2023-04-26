import React from "react";
import { Outlet } from "react-router-dom";
import { StyledContainer } from "../../components";

export const FormLayout = () => (
  <StyledContainer>
    <Outlet />
  </StyledContainer>
);
