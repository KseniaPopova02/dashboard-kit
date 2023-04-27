import { Chart } from "./Chart";
import { Header } from "./Header";
import { Info } from "./Info";
import { StyledWrapper, StyledChartWrapper } from "./style";

export const OverviewChartBlock = () => (
  <StyledWrapper>
    <StyledChartWrapper>
      <Header />
      <Chart />
    </StyledChartWrapper>
    <Info />
  </StyledWrapper>
);
