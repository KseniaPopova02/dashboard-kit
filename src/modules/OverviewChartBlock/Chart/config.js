import { StyledCircleChart, StyledToolbar } from "./style";

const CustomPoint = ({ x, y, category }) => {
  return <StyledCircleChart x={x} y={y} category={category} />;
};

export const configChart = {
  xField: "x",
  yField: "y",
  seriesField: "category",
  point: {
    visible: false,
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
    customContent: (name, data) =>
      `<div>${data?.map((item) => {
        return `<div class="tooltip-chart" >
              <span class="tooltip-item-name">${item?.name}</span>
              <span class="tooltip-item-value">${item?.value}</span>
            </div>`;
      })}</div>`,
  },
  interactions: [
    {
      type: "element-highlight",
      enable: true,
    },
  ],
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
