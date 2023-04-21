import React from "react";
import {
  StyledBtn,
  StyledContainer,
  StyledBtnText,
  StyledBtnNum,
} from "./style";

export const OverviewData = () => (
  <StyledContainer>
    <StyledBtn>
      <StyledBtnText>Unresolved</StyledBtnText>
      <StyledBtnNum>60</StyledBtnNum>
    </StyledBtn>
    <StyledBtn>
      <StyledBtnText>Overdue</StyledBtnText>
      <StyledBtnNum>16</StyledBtnNum>
    </StyledBtn>
    <StyledBtn>
      <StyledBtnText>Open</StyledBtnText>
      <StyledBtnNum>40</StyledBtnNum>
    </StyledBtn>
    <StyledBtn>
      <StyledBtnText>On hold</StyledBtnText>
      <StyledBtnNum>64</StyledBtnNum>
    </StyledBtn>
  </StyledContainer>
);
