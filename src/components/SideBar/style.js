import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { BarsOutlined } from "@ant-design/icons";

export const StyledSidebar = styled.div`
  background: #363740;
  color: #a4a6b3;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  height: 100vh;
`;

export const StyledLink = styled(Link)`
  color: #a4a6b3;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  display: flex;
  padding: 20px 30px;
  align-items: center;
  transition: all 0.2s;
  opacity: 0.4;
  position: relative;
  &.active {
    background-color: rgba(159, 162, 180, 0.08);
    opacity: 1;
    color: #dde2ff;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      background-color: #dde2ff;
      width: 3px;
      height: 100%;
    }
  }
  /* &:hover {
    background-color: rgba(159, 162, 180, 0.08);
    opacity: 1;
    color: #dde2ff;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      background-color: #dde2ff;
      width: 3px;
      height: 100%;
    }
  } */
`;

export const StyledSvg = styled.svg`
  font-size: 16px;
  fill: #9fa2b4;
  &:hover {
    fill: #dde2ff;
    opacity: 1;
  }
`;

export const StyledLogoSvg = styled.svg`
  font-size: 32px;
`;

export const StyledTopWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 30px;
`;

export const StyledLogoText = styled.div`
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
`;

export const StyledBarsOutlined = styled(BarsOutlined)`
  font-size: 24px;
`;

export const StyledSvgWrapper = styled.div`
  line-height: 0;
  margin-right: 24px;
`;
