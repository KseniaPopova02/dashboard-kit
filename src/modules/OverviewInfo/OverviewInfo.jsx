import { React, useState, useEffect } from "react";
import {
  StyledBtn,
  StyledContainer,
  StyledBtnText,
  StyledBtnNum,
} from "./style";
import data from "../../Data/OverviewInfo.json";

export const OverviewInfo = () => {
  const [overviewData, setOverviewData] = useState([]);
  useEffect(() => {
    setOverviewData(data.overviewInfoData[0]);
  }, []);
  return (
    <StyledContainer>
      {Object.entries(overviewData).map(([key, value]) => (
        <StyledBtn key={key}>
          <StyledBtnText>{key}</StyledBtnText>
          <StyledBtnNum>{value}</StyledBtnNum>
        </StyledBtn>
      ))}
    </StyledContainer>
  );
};
