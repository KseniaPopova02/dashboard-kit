import React, { useState, useEffect } from "react";
import { StyledLine } from "./style";
import { Header } from "../Header";
import { configChart } from "./config";
import chartData from "../../../Data/Chart.json";

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
      <div style={{ maxHeight: "336px" }}>
        <StyledLine {...config} />
      </div>
    </div>
  );
};
