import { Chart } from "./Chart";
import { Info } from "./Info";
import { StyledWrapper, StyledChartWrapper } from "./style";

export const OverviewChartBlock = ({ infoChart }) => (
  <StyledWrapper>
    <StyledChartWrapper>
      <Chart />
    </StyledChartWrapper>
    <Info infoChart={infoChart} />
  </StyledWrapper>
);
