import React, { useState, useEffect } from "react";
import { StyledLineWrapper, StyledChartWrapper } from "./style";
import { Header } from "../Header";
import { configChart } from "./config";
import chartData from "../../../MockedData/TodaysChart.json";
import { Line } from "@ant-design/charts";

export const Chart = () => {
  const [data, setData] = useState([]);

  const asyncFetch = () => {
    setData(chartData);
  };

  useEffect(() => {
    asyncFetch();
  }, []);

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
