import React from "react";
import {
  StyledPageContainer,
  StyledOutletWrapper,
  StyledSidebarWrapper,
  StyledTopbarWrapper,
  // StyledMainLayoutWrapper,
} from "./style";
import { TopBar, SideBar } from "../../components";
import { Outlet, Navigate } from "react-router-dom";

export const MainLayout = ({ loggedIn, handleLogout }) => {
  if (!loggedIn) {
    return <Navigate to="/" />;
  } else {
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
  }
};
