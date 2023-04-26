import React from "react";
import { OverviewInfo, OverviewTickets, OverviewTask } from "../../modules";
import { StyledWrapper } from "./style";

export const View = () => (
  <>
    <OverviewInfo />
    <StyledWrapper>
      <OverviewTickets />
      <OverviewTask />
    </StyledWrapper>
  </>
);
