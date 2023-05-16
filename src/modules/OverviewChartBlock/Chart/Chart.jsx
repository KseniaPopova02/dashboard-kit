import React, { useState, useEffect } from "react";
import { StyledLine } from "./style";
import { Header } from "../Header";

export const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    const todayData = [
      {
        x: "1850",
        y: 0,
        category: "today",
      },
      {
        x: "1850",
        y: 54,
        category: "today",
      },
    ];

    const yesterdayData = [
      {
        x: "1850",
        y: 0,
        category: "yesterday",
      },
      {
        x: "1850",
        y: 32,
        category: "yesterday",
      },
    ];

    setData([...todayData, ...yesterdayData]);
  };

  const config = {
    data,
    xField: "x",
    yField: "y",
    seriesField: "category",
    xAxis: {
      lines: false,
      type: "linear",
      tickInterval: 1,
      min: 0,
      max: 22,
      tickLine: null,
      margin: {
        bottom: 12,
      },
    },
    yAxis: {
      position: "right",
      type: "linear",
      tickInterval: 10,
      min: 0,
      max: 60,
    },
    color: ["#3751FF", "#DFE0EB"],
    legend: {
      position: "top-right",
    },
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
