import { Chart } from "./Chart";
import { Info } from "./Info";
import { StyledWrapper, StyledChartWrapper } from "./style";

export const OverviewChartBlock = () => (
  <StyledWrapper>
    <StyledChartWrapper>
      <Chart />
    </StyledChartWrapper>
    <Info />
  </StyledWrapper>
);
