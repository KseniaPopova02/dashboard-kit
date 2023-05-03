import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { BarsOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Search } = Input;

export const StyledSidebar = styled.div`
  background: #363740;
  color: #a4a6b3;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  min-height: 100%;
  height: 100vh;
`;

export const StyledSideBarContainer = styled.div`
  @media (max-width: 800px) {
    transition: width 0.3s ease;
    top: 0;
    left: 0;
    position: absolute;
    width: ${(props) => (props.isOpen ? "255px" : "80px")};
  }
`;
export const StyledText = styled.div`
  @media (max-width: 800px) {
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    transition: opacity 0.3s ease;
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  }
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
`;

export const StyledSvg = styled.svg`
  font-size: 16px;
  fill: #9fa2b4;

  &:hover {
    fill: #dde2ff;
    opacity: 1;
  }

  @media (max-width: 800px) {
    font-size: 30px;
  }
`;

export const StyledLogoSvgWrapper = styled.div`
  font-size: 32px;
  line-height: 0;

  @media (max-width: 800px) {
    display: none;
  }
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

  @media (max-width: 800px) {
    display: none;
  }
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
`;

export const StyledBarsOutlined = styled(BarsOutlined)`
  font-size: 24px;
  display: none;

  @media (max-width: 800px) {
    font-size: 30px;
    display: block;
  }
`;

export const StyledSvgWrapper = styled.div`
  line-height: 0;
  margin-right: 24px;
`;

export const StyledInputWrapper = styled.div`
  padding: 20px 15px;
  display: none;

  @media (max-width: 650px) {
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    display: ${(props) => (props.isOpen ? "block" : "none")};
  }
`;

export const StyledSearch = styled(Search)`
  && {
    box-sizing: border-box;
    background-color: transparent;
    .ant-btn-primary {
      background-color: transparent;
      border-color: #fff;
      box-shadow: none;
    }

    .ant-input-search-button {
      height: 31px;
    }
  }
`;

export const StyledSearchBtn = styled(SearchOutlined)`
  transition: all 0.2s;
  color: #a4a6b3;
  opacity: 0.4;
  display: none;
  padding: 20px 30px;
  position: relative;

  &:hover {
    opacity: 1;
    color: #dde2ff;
  }

  @media (max-width: 650px) {
    font-size: 30px;
    display: ${(props) => (props.isOpen ? "none" : "block")};
  }
`;
