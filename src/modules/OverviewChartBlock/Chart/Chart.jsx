import React, { useState, useEffect, useRef } from "react";
import { StyledLineWrapper, StyledChartWrapper } from "./style";
import { Header } from "../Header";
import { configChart } from "./config";
import { Line } from "@ant-design/charts";
import chartData from "../../../mockedData/todaysChart.json";

export const Chart = () => {
  const chartRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(chartData);
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.on("element:click", (ev) => {
        const dataIndex = ev.data.index;
        console.log("Index:", dataIndex);
      });
    }
  }, [chartRef]);

  const config = {
    data,
    ...configChart,
  };

  return (
    <StyledChartWrapper>
      <Header />
      <StyledLineWrapper>
        {/* Передаем ref объекту графика */}
        <Line {...config} chartRef={chartRef} />
      </StyledLineWrapper>
    </StyledChartWrapper>
  );
};
