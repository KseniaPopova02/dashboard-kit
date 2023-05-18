import React, { useState, useEffect } from "react";
import { StyledLineWrapper } from "./style";
import { Header } from "../Header";
import { configChart } from "./config";
import chartData from "../../../Data/Chart.json";
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
    <div style={{ padding: "30px" }}>
      <Header />
      <StyledLineWrapper>
        <Line {...config} />
      </StyledLineWrapper>
    </div>
  );
};
