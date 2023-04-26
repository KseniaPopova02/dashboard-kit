import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import React from "react";
import { StyledLineChart } from "./style";

export const OverviewChart = () => {
  const data = Array.from({ length: 23 }, (_, i) => ({
    id: i,
    uv: 4000,
    pv: i,
    amt: 2400,
  }));

  return (
    <StyledLineChart width={576} height={336} data={data}>
      <XAxis dataKey="id" interval={0} tickCount={23} domain={[0, 22]} />
      <YAxis
        dataKey="id"
        interval={10}
        tickCount={5}
        domain={[0, 50]}
        orientation="right"
      />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </StyledLineChart>
  );
};
