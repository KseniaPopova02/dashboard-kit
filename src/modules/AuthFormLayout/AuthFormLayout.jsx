import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { StyledAuthFormLayoutWrapper } from "./style";
import { StyledContainer } from "../../components";
import { ROUTES } from "../../Routes/routes";

export const AuthFormLayout = ({ loggedIn }) => {
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
