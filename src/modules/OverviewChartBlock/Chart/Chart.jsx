import React from "react";

import { StyledLine } from "./style";
export const Chart = () => {
  const dataArray = [];
  for (let x = 0; x <= 22; x++) {
    for (let y = 0; y <= 60; y += 10) {
      dataArray.push({ x, y });
    }
  }

  const config = {
    data: dataArray,
    height: 400,
    xField: "x",
    yField: "y",
    point: {
      style: {
        cursor: "pointer",
      },
      state: {
        hover: {
          visible: true,
        },
        active: {
          visible: false,
        },
        selected: {
          visible: true,
        },
      },
    },
    yAxis: {
      min: 0,
      max: 60,
      tickInterval: 10,
      position: "right",
    },
    xAxis: {
      min: 0,
      max: 22,
      tickInterval: 1,
    },
    tooltip: {
      formatter: (datum) => ({
        name: "Value",
        value: datum.value,
      }),
    },
    lineStyle: {
      stroke: "#3751FF",
      lineWidth: 2,
    },
  };

  return <StyledLine {...config} />;
};
