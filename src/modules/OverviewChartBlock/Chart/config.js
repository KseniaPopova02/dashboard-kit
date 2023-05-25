import { StyledPoint, StyledTooltip } from "./style";

const renderCustomTooltip = (name, data) => (
  <StyledTooltip>
    {data?.map((item) => (
      <div>
        <div>
          <div>{item?.value}</div>
        </div>
      </div>
    ))}
  </StyledTooltip>
);

export const configChart = {
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
    offsetY: -10,
  },
  smooth: true,
  tooltip: {
    position: "top",
    customContent: renderCustomTooltip,
  },
};
