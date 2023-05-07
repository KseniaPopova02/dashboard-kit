import React from "react";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
} from "recharts";
import { CustomDot } from "./CustomDot";
import { CustomTooltip } from "./CustomTooltip";
import { StyledContainer, StyledXAxis, StyledYAxis } from "./style";

const data = [];

for (let i = 0; i <= 22; i++) {
  data.push({
    name: i.toString(),
    yesterday: Math.floor(Math.random() * 5000),
    today: Math.floor(Math.random() * 5000),
  });
}

export const Chart = () => {
  return (
    <StyledContainer>
      <ResponsiveContainer minWidth={300} minHeight={300}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal="true" vertical="" />
          <XAxis
            tickLine={false}
            dataKey="name"
            // tick={<StyledXAxis />}
            tick={{ fill: "#9FA2B4", fontFamily: "Mulish", fontSize: 10 }}
            stroke="#DFE0EB"
          />
          <YAxis
            orientation="right"
            // tick={<StyledYAxis />}
            tick={{ fill: "#9FA2B4", fontFamily: "Mulish", fontSize: 10 }}
            stroke="#DFE0EB"
            axisLine={{ strokeWidth: 0 }}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />

          <Line type="monotone" dataKey="today" stroke="#3751FF" dot={false} />
          <Line
            dot={false}
            type="monotone"
            dataKey="yesterday"
            stroke="#DFE0EB"
            activeDot={<CustomDot />}
          />
        </LineChart>
      </ResponsiveContainer>
    </StyledContainer>
  );
};
