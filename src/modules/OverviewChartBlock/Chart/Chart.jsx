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

import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";

export const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    xField: "year",
    yField: "value",
    seriesField: "category",
    xAxis: {
      type: "time",
    },
    yAxis: {
      label: {
        formatter: (v) =>
          `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
  };

  return <Line {...config} />;
};
