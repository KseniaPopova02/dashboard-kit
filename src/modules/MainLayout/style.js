import styled from "styled-components";

export const StyledPageContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 205px calc(100% - 205px);
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "sidebar topbar"
    "sidebar outlet";
  overflow: auto;

  @media (max-width: 800px) {
    grid-template-columns: 80px calc(100% - 80px);
  }
`;

export const StyledTopbarWrapper = styled.div`
  grid-area: topbar;
  padding: 30px;
`;

export const StyledSidebarWrapper = styled.div`
  grid-area: sidebar;
`;

export const StyledOutletWrapper = styled.div`
  grid-area: outlet;
  padding: 30px;
`;

export const StyledMainLayoutWrapper = styled.div`
  color: #252733;
  background: #fff;
  height: 100vh;
`;
