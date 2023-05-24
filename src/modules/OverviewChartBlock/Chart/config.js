import { StyledPoint, StyledTooltip } from "./style";
import { G2 } from "@ant-design/charts";
import ReactDOMServer from "react-dom/server";

const renderCustomTooltip = (name, data) => (
  <StyledTooltip>
    {data?.map((item) => (
      <div>
        <div>
          <div>{item?.value}</div>
        </div>
      </div>
    ))}
    <StyledPoint />
  </StyledTooltip>
);

G2.registerShape("point", "custom-point", {
  draw(cfg, container) {
    const point = {
      x: cfg.x,
      y: cfg.y,
    };
    const group = container.addGroup();
    const svgString = ReactDOMServer.renderToString(<StyledPoint />);
    const marker = group.addShape("html", {
      name: "custom-point",
      attrs: {
        html: svgString,
        x: point.x,
        y: point.y,
        width: 16, // Ширина маркера
        height: 16, // Высота маркера
        textAlign: "center",
        textBaseline: "middle",
        cursor: "pointer",
      },
    });
    return group;
  },
});

const renderCustomPoint = () => <StyledPoint />;

export const configChart = {
  xField: "x",
  yField: "y",
  seriesField: "category",
  // point: {
  //   size: 5,
  //   shape: "custom-point",
  //   style: {
  //     fill: "white",
  //     stroke: "#5B8FF9",
  //     lineWidth: 2,
  //   },
  // },
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
  interactions: [
    {
      type: "element-highlight",
      enable: true,
    },
  ],
};
