import { Chart } from "./Chart";
import { Info } from "./Info";
import { StyledWrapper, StyledChartWrapper } from "./style";

export const OverviewChartBlock = ({ infoChart, axis }) => (
  <StyledWrapper>
    <StyledChartWrapper>
      <Chart data={axis} />
    </StyledChartWrapper>
    <Info infoChart={infoChart} />
  </StyledWrapper>
);
