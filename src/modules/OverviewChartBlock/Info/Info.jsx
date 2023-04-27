import { React, useState, useEffect } from "react";
import data from "../../../Data/OverviewChart.json";

export const Info = () => {
  const [dataChart, setDataChart] = useState([]);
  useEffect(() => {
    setDataChart(data.overviewChart[0]);
  }, []);
  return (
    <div>
      {Object.entries(dataChart).map(([key, value]) => (
        <div key={key}>
          <div>{key}</div>
          <div>{value}</div>
        </div>
      ))}
    </div>
  );
};
