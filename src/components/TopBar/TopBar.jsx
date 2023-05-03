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
import { useLocation } from "react-router-dom";
import profilePhoto from "../../assets/images/profile-photo.png";
import { ReactComponent as SearchSvg } from "../../assets/svg/search.svg";
import { ReactComponent as BellSvg } from "../../assets/svg/bell.svg";
import { ReactComponent as LineSvg } from "../../assets/svg/vertical.svg";

export const TopBar = () => {
  const location = useLocation();
  const [isInputDisplayed, setIsInputDisplayed] = useState(false);

  const handleSearchClick = () => {
    setIsInputDisplayed(!isInputDisplayed);
  };

  const getTitle = () => {
    switch (location.pathname) {
      case "/dashboard/Overview":
        return "Overview";
      case "/dashboard/Tickets":
        return "Tickets";
      case "/dashboard/Ideas":
        return "Ideas";
      case "/dashboard/Contacts":
        return "Contacts";
      case "/dashboard/Agents":
        return "Agents";
      case "/dashboard/Articles":
        return "Articles";
      case "/dashboard/Settings":
        return "Settings";
      case "/dashboard/Subscription":
        return "Subscription";
      default:
        return "Error";
    }
  };
  return (
    <StyledTopBarWrapper>
      <StyledTitle>{getTitle()}</StyledTitle>
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
        <StyledName>Jones Ferdinand</StyledName>
        <StyledImgBorder>
          <StyledImg src={profilePhoto} alt="profile" />
        </StyledImgBorder>
      </StyledToolsWrapper>
    </StyledTopBarWrapper>
  );
};
