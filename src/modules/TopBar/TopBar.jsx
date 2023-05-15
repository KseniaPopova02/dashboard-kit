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

const getValueFromLocalStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    if (data !== null) {
      const parsedData = JSON.parse(data);
      if (Array.isArray(parsedData) && parsedData.length > 0) {
        const lastItem = parsedData[parsedData.length - 1];
        return lastItem[key];
      }
    }
  } catch (error) {
    console.log("Error retrieving value from localStorage:", error);
  }
  return undefined;
};

const name = getValueFromLocalStorage("name");
console.log(localStorage.getItem("name"));

export const TopBar = () => {
  const location = useLocation();
  const [isInputDisplayed, setIsInputDisplayed] = useState(false);

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
        <StyledName>{name}</StyledName>
        <StyledImgBorder>
          <StyledImg src={profilePhoto} alt="profile" />
        </StyledImgBorder>
      </StyledToolsWrapper>
    </StyledTopBarWrapper>
  );
};
