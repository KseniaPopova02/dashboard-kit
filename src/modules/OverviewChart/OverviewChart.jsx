import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CustomDot } from "./CustomDot";

const data = [];

for (let i = 0; i <= 22; i++) {
  data.push({
    name: i.toString(),
    yesterday: Math.floor(Math.random() * 5000),
    today: Math.floor(Math.random() * 5000),
  });
}

export const OverviewChart = () => {
  return (
    <div style={{ maxWidth: "686px", height: "350px" }}>
      <ResponsiveContainer width="100%" height="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal="true" vertical="" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="yesterday"
            stroke="#3751FF"
            activeDot={<CustomDot />}
          />
          <Line type="monotone" dataKey="today" stroke="#DFE0EB" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
