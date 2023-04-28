import React from "react";
import {
  OverviewInfo,
  OverviewTickets,
  OverviewTask,
  OverviewChartBlock,
} from "../../modules";
import { StyledWrapper } from "./style";

export const View = () => (
  <>
    <OverviewInfo />

    <OverviewChartBlock />
    <StyledWrapper>
      <OverviewTickets />
      <OverviewTask />
    </StyledWrapper>
  </>
);
