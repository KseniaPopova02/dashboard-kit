import React from "react";
import {
  StyledPageContainer,
  StyledOutletWrapper,
  StyledSidebarWrapper,
  StyledTopbarWrapper,
  // StyledMainLayoutWrapper,
} from "./style";
import { TopBar, SideBar } from "../../components";
import { Outlet } from "react-router-dom";

export const MainLayout = () => (
  <StyledPageContainer>
    <StyledTopbarWrapper>
      <TopBar />
    </StyledTopbarWrapper>
    <StyledSidebarWrapper>
      <SideBar />
    </StyledSidebarWrapper>
    <StyledOutletWrapper>
      <Outlet />
    </StyledOutletWrapper>
  </StyledPageContainer>
);
