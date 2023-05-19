import { StyledCircleChart } from "./style";

const customContent = (title, items) => {
  return (
    <div>
      {title && <div>{title}</div>}
      {items.map((item, index) => (
        <StyledCircleChart
          key={index}
          x={item.x}
          y={item.y}
          category={item.category}
        />
      ))}
    </div>
  );
};

export const configChart = {
  xField: "x",
  yField: "y",
  seriesField: "category",
  point: {
    visible: false,
    shape: {
      customContent: customContent,
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
