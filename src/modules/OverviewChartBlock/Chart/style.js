import styled from "styled-components";
import { ToolbarPanel } from "@ant-design/charts";
import { ReactComponent as CircleChart } from "../../../assets/svg/circleChart.svg";

export const StyledLineWrapper = styled.div`
  height: 336px;
  width: 100%;
`;

export const StyledCircleChart = styled(CircleChart)`
  font-size: 28px;
`;

export const StyledChartWrapper = styled.div`
  padding: 30px;
`;

export const StyledToolbar = styled(ToolbarPanel)`
  width: 64px;
  height: 30px;
  padding: 7px 12px;
  text-align: center;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #888;
  }

  /* .recharts-tooltip-label {
    display: none;
  } */
`;

// export const StyledXAxis = styled(XAxis)`
//   .recharts-cartesian-axis-tick {
//     display: block;
//     font-family: "Mulish" !important;
//     stroke: "#9FA2B4" !important;
//     font-size: 10 !important;
//   }
// `;

// export const StyledYAxis = styled(YAxis)`
//   .recharts-cartesian-axis-tick {
//     display: block;
//     font-family: "Mulish" !important;
//     stroke: "#9FA2B4" !important;
//     font-size: 10 !important;
//   }
// `;
