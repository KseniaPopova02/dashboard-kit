import { React, useState } from "react";
import {
  StyledTopBarWrapper,
  StyledTitle,
  StyledToolsWrapper,
  StyledSvgHeaderWrapper,
  StyledLineSvgWrapper,
  StyledSvgWrapper,
  StyledName,
  StyledImgBorder,
  StyledImg,
  StyledInput,
} from "./style";
import { getTitle } from "./helpers";
import { useLocation } from "react-router-dom";
import profilePhoto from "../../assets/images/profile-photo.png";
import { ReactComponent as SearchSvg } from "../../assets/svg/search.svg";
import { ReactComponent as BellSvg } from "../../assets/svg/bell.svg";
import { ReactComponent as LineSvg } from "../../assets/svg/vertical.svg";
import { useSelector } from "react-redux";

export const TopBar = () => {
  const location = useLocation();
  const [isInputDisplayed, setIsInputDisplayed] = useState(false);
  const currentUser = useSelector((state) => state.currentUser);
  const { name, surname } = currentUser;

  const handleSearchClick = () => {
    setIsInputDisplayed(!isInputDisplayed);
  };

  return (
    <StyledTopBarWrapper>
      <StyledTitle>{getTitle(location.pathname)}</StyledTitle>
      <StyledToolsWrapper>
        <StyledSvgHeaderWrapper>
          <StyledInput isInputDisplayed={isInputDisplayed} />
          <StyledSvgWrapper onClick={handleSearchClick} className="search">
            <SearchSvg />
          </StyledSvgWrapper>
          <StyledSvgWrapper className="bell">
            <BellSvg />
          </StyledSvgWrapper>
        </StyledSvgHeaderWrapper>
        <StyledLineSvgWrapper>
          <LineSvg />
        </StyledLineSvgWrapper>
        <StyledName>
          {name} {surname}
        </StyledName>
        <StyledImgBorder>
          <StyledImg src={profilePhoto} alt="profile" />
        </StyledImgBorder>
      </StyledToolsWrapper>
    </StyledTopBarWrapper>
  );
};
