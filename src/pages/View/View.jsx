import React from "react";
import {
  OverviewInfo,
  OverviewTickets,
  OverviewTask,
  OverviewChart,
} from "../../modules";
import { StyledWrapper } from "./style";

export const View = () => (
  <>
    <OverviewInfo />
    <OverviewChart />
    <StyledWrapper>
      <OverviewTickets />
      <OverviewTask />
    </StyledWrapper>
  </>
);
