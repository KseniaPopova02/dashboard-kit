import styled, { css } from "styled-components";
import { Input } from "antd";

export const StyledTopBarWrapper = styled.div`
  color: #252733;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  @media (max-width: 360px) {
    font-size: 20px;
  }
`;

export const StyledToolsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSvgWrapper = styled.div`
  font-size: 16px;
  z-index: 100;
  &.search {
    cursor: pointer;
    @media (max-width: 650px) {
      display: none;
    }
  }

  &.bell {
    @media (max-width: 340px) {
      margin-left: 10px;
    }
  }
`;

const desktopStyles = css`
  width: 240px;
  padding: 8px 16px;
  border: 1px solid #d9d9d9;
  transition: width 0.3s ease-in-out, padding 0.3s ease-in-out;
  @media (max-width: 912px) {
    width: 200px;
  }
  @media (max-width: 871px) {
    width: 120px;
  }
  @media (max-width: 650px) {
    display: none;
  }
`;
const mobileStyles = css`
  width: 0px;
  border: none;
`;

export const StyledInput = styled(Input)`
  position: absolute;
  right: 35px;
  ${({ isInputDisplayed }) => (isInputDisplayed ? desktopStyles : mobileStyles)}
`;

export const StyledLineSvgWrapper = styled.div`
  font-size: 32px;
`;

export const StyledSvgHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  position: relative;
`;

export const StyledName = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin-right: 14px;
  @media (max-width: 480px) {
    display: none;
  }
`;

export const StyledImgBorder = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1.5px solid #dfe0eb;
  position: relative;
`;

export const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
