import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { StyledAuthFormLayoutWrapper } from "./style";
import { StyledContainer } from "../../modules";
import { ROUTES } from "../../routes";
import { useSelector } from "react-redux";

export const AuthFormLayout = () => {
  const currentUser = useSelector((state) => state.currentUser);

  if (currentUser) {
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
