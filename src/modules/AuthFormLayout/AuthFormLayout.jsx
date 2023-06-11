import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { StyledAuthFormLayoutWrapper } from "./style";
import { StyledContainer } from "../../modules";
import { ROUTES } from "../../routes";
import { useSelector } from "react-redux";

export const AuthFormLayout = () => {
  const loggedIn = useSelector((state) => state.loggedIn);

  if (loggedIn) {
    return <Navigate to={`${ROUTES.DASHBOARD}${ROUTES.OVERVIEW}`} />;
  } else {
    return (
      <StyledAuthFormLayoutWrapper>
        <StyledContainer>
          <Outlet />
        </StyledContainer>
      </StyledAuthFormLayoutWrapper>
    );
  }
};
