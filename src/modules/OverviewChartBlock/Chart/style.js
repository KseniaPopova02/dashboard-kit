import styled from "styled-components";
import { LineChart } from "recharts";
import { Tooltip } from "recharts";

export const StyledLineChart = styled(LineChart)`
  .stroke-dasharray {
    display: none;
  }
`;

export const StyledDot = styled.svg`
  font-size: 28px;
`;

export const StyledTooltip = styled(Tooltip)`
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

  .recharts-tooltip-label {
    display: none;
  }
`;
