import { StyledLineWrapper, StyledChartWrapper, StyledSpin } from "./style";
import { Header } from "../Header";
import { configChart } from "./config";
import { Line } from "@ant-design/charts";

export const Chart = ({ data }) => {
  if (!data || data.length === 0) {
    return <StyledSpin size="large" />;
  }

  const config = {
    data,
    ...configChart,
  };

  return (
    <StyledChartWrapper>
      <Header />
      <StyledLineWrapper>
        <Line {...config} />
      </StyledLineWrapper>
    </StyledChartWrapper>
  );
};
