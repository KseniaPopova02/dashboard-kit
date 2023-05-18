import React, { useState, useEffect } from "react";
import { StyledLine } from "./style";
import { Header } from "../Header";
import { CustomDot } from "./CustomDot";
import chartData from "../../../Data/Chart.json";

export const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    setData(chartData);
  };

  const config = {
    data,
    xField: "x",
    yField: "y",
    seriesField: "category",
    point: {
      visible: false,
      shape: {
        customContent: (title, items) => {
          return (
            <div>
              {title && <div>{title}</div>}
              {items.map((item, index) => (
                <CustomDot
                  key={index}
                  x={item.x}
                  y={item.y}
                  category={item.category}
                />
              ))}
            </div>
          );
        },
      },
    },
    xAxis: {
      lines: false,
      type: "linear",
      tickInterval: 1,
      min: 0,
      max: 22,
      tickLine: null,
      line: {
        style: {
          stroke: "#EBEDF0",
        },
      },
      label: {
        style: {
          fill: "#9FA2B4",
        },
      },
    },
    yAxis: {
      position: "right",
      type: "linear",
      tickInterval: 10,
      min: 0,
      max: 60,
      label: {
        style: {
          fill: "#9FA2B4",
        },
      },
      grid: {
        line: {
          style: {
            stroke: "#EBEDF0",
          },
        },
      },
    },
    color: ["#3751FF", "#DFE0EB"],
    legend: {
      position: "top-right",
    },
    smooth: true,
    tooltip: {
      position: "top",
    },
    // series: [
    //   {
    //     type: "line",
    //     name: "today",
    //     areaStyle: {
    //       fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
    //     },
    //   },
    // ],
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
