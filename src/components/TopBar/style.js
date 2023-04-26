import styled from "styled-components";

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

export const StyledSvg = styled.svg`
  font-size: 16px;
  &.search {
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

export const StyledLineSvg = styled.svg`
  font-size: 32px;
`;

export const StyledSvgWrapper = styled.div`
  display: flex;
  gap: 28px;
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
  /* @media (max-width: 650px) {
    display: none;
  } */
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
