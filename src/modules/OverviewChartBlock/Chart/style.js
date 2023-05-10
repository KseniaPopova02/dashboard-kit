import styled from "styled-components";
import { Line } from "@ant-design/charts";
// import { XAxis, YAxis } from "recharts";
// import { Tooltip } from "recharts";

export const StyledLine = styled(Line)`
  height: 300px !important;
  width: 100%;
  max-width: 686px;
  padding: 0 32px 32px 32px !important;
`;

export const StyledDot = styled.svg`
  font-size: 28px;
`;

// export const StyledTooltip = styled(Tooltip)`
//   width: 64px;
//   height: 30px;
//   padding: 7px 12px;
//   text-align: center;
//   position: relative;

//   &:before {
//     content: "";
//     position: absolute;
//     bottom: -6px;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 0;
//     height: 0;
//     border-left: 7px solid transparent;
//     border-right: 7px solid transparent;
//     border-top: 7px solid #888;
//   }

//   /* .recharts-tooltip-label {
//     display: none;
//   } */
// `;

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
