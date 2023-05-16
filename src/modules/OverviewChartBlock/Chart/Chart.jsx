import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
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
      // Добавьте остальные данные для "today" здесь
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
      // Добавьте остальные данные для "yesterday" здесь
    ];

    setData([...todayData, ...yesterdayData]);
  };

  const config = {
    data,
    xField: "x",
    yField: "y",
    seriesField: "category",
    xAxis: {
      tickCount: 23,
      type: "linear",
      tickInterval: 1,
    },
    yAxis: {
      position: "right",
      tickCount: 61,
      type: "linear",
      tickInterval: 10,
    },
    color: ["#3751FF", "#DFE0EB"],
    legend: {
      position: "top-right",
    },
  };

  return (
    <div style={{ padding: "30px" }}>
      <Header />
      <Line {...config} />
    </div>
  );
};
