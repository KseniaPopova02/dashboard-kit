import React, { useState, useEffect, createContext } from "react";
import { StyledLine } from "./style";
import { Header } from "../Header";

export const LegendContext = createContext();

export const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    const todayData = [
      { x: 0, y: 10, category: "today" },
      { x: 1, y: 22, category: "today" },
      { x: 5, y: 28, category: "today" },
      { x: 8, y: 50, category: "today" },
      { x: 12, y: 19, category: "today" },
      { x: 17, y: 39, category: "today" },
    ];

    const yesterdayData = [
      { x: 0, y: 35, category: "yesterday" },
      { x: 5, y: 25, category: "yesterday" },
      { x: 8, y: 32, category: "yesterday" },
      { x: 13, y: 18, category: "yesterday" },
      { x: 16, y: 48, category: "yesterday" },
      { x: 19, y: 38, category: "yesterday" },
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
    smooth: true,
    tooltip: {
      position: "top",
    },
    series: [
      {
        type: "line",
        name: "today",
        areaStyle: {
          fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
        },
      },
    ],
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
