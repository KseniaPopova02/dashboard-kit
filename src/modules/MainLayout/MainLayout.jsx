import React from "react";
import {
  StyledPageContainer,
  StyledOutletWrapper,
  StyledSidebarWrapper,
  StyledTopbarWrapper,
} from "./style";
import { TopBar, SideBar } from "../../components";
import { Outlet, Navigate } from "react-router-dom";

export const MainLayout = ({ loggedIn, handleLogout, language }) => {
  if (!loggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <StyledPageContainer>
      <StyledTopbarWrapper>
        <TopBar />
      </StyledTopbarWrapper>
      <StyledSidebarWrapper>
        <SideBar handleLogout={handleLogout} />
      </StyledSidebarWrapper>
      <StyledOutletWrapper>
        <Outlet />
      </StyledOutletWrapper>
    </StyledPageContainer>
  );
};
