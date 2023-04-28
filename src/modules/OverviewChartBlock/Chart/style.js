import styled from "styled-components";
import { Tooltip } from "recharts";

export const StyledContainer = styled.div`
  max-height: 350px;
  height: 100%;
  max-width: 100%;
  padding: 0 0 32px 32px;
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
