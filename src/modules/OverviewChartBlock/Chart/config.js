const isSmallScreen = window.innerWidth <= 650;

export const configChart = {
  xField: "x",
  yField: "y",
  seriesField: "category",
  padding: isSmallScreen ? [40, 30, 40, 10] : [80, 30, 40, 10],
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
    position: isSmallScreen ? "top" : "top-right",
    align: isSmallScreen ? "center" : null,
    offsetY: -7,
    itemName: {
      formatter: (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
      },
    },
  },

  smooth: true,
  tooltip: {
    position: "top",
  },
};
