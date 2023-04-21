import styled from "styled-components";

export const StyledPageContainer = styled.div`
  display: grid;
  grid-template-columns: 255px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "sidebar topbar"
    "sidebar outlet";
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