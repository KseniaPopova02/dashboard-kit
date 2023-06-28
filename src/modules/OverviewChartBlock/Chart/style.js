import styled from "styled-components";
import { ReactComponent as CircleChart } from "../../../assets/svg/circleChart.svg";
import { Spin } from "antd";

export const StyledSpin = styled(Spin)`
  margin: auto;
`;

export const StyledLineWrapper = styled.div`
  height: 336px;
  width: 100%;
  margin-top: -50px;
  @media (max-width: 650px) {
    margin-top: 30px;
  }
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
