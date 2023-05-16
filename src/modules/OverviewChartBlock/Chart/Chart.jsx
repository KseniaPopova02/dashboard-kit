import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
import chartData from "../../../Data/Chart.json";

export const Chart = () => {
  return <>chart</>;
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   asyncFetch();
  // }, []);

  // const asyncFetch = () => {
  //   setData(chartData);
  // };

  // const config = {
  //   data,
  //   xField: "x",
  //   yField: "y",
  //   seriesField: "category",
  //   xAxis: {
  //     type: "time",
  //   },
  //   yAxis: {
  //     label: {
  //       formatter: (v) =>
  //         `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
  //     },
  //   },
  // };

  // return <Line {...config} />;
};

// import React from "react";

// import { StyledLine } from "./style";
// export const Chart = () => {
//   const data = [
//     { x: 0, y: 13 },
//     { x: 3, y: 31 },
//     { x: 5, y: 29 },
//     { x: 8, y: 51 },
//     { x: 12, y: 18 },
//     { x: 16, y: 48 },
//     { x: 19, y: 39 },
//   ];
//   // const dataArray = [];
//   // for (let x = 0; x <= 22; x++) {
//   //   for (let y = 0; y <= 70; y += 10) {
//   //     dataArray.push({ x, y });
//   //   }
//   // }

//   const config = {
//     data: data,
//     height: 400,
//     xField: "x",
//     yField: "y",
//     point: {
//       style: {
//         cursor: "pointer",
//       },
//       state: {
//         hover: {
//           visible: true,
//         },
//         active: {
//           visible: false,
//         },
//         selected: {
//           visible: true,
//         },
//       },
//     },
//     yAxis: {
//       min: 0,
//       max: 60,
//       tickInterval: 10,
//       position: "right",
//     },
//     xAxis: {
//       min: 0,
//       max: 22,
//       tickInterval: 1,
//     },
//     tooltip: {
//       formatter: (datum) => ({
//         name: "Value",
//         value: datum.value,
//       }),
//     },
//     lineStyle: {
//       stroke: "#3751FF",
//       lineWidth: 2,
//     },
//   };

//   return <StyledLine {...config} />;
// };
