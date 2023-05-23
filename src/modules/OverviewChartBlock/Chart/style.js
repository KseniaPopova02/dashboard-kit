import styled from "styled-components";
import { ReactComponent as CircleChart } from "../../../assets/svg/circleChart.svg";

export const StyledLineWrapper = styled.div`
  height: 336px;
  width: 100%;
`;

export const StyledPoint = styled(CircleChart)`
  font-size: 28px;
`;

export const StyledChartWrapper = styled.div`
  padding: 30px;
`;

export const StyledTooltip = styled.div`
  position: relative;
  opacity: 1;
  color: #252733;
  padding: 7px 12px;
  text-align: center;

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
    border-top: 7px solid #fff;
  }
`;
