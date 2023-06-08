import styled from "styled-components";

export const StyledPageContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 215px calc(100vw - 215px);
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "sidebar topbar"
    "sidebar outlet";

  @media (max-width: 800px) {
    grid-template-columns: 80px calc(100vw - 80px);
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
