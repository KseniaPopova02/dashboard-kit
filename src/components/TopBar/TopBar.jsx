import { React, useState } from "react";
import {
  StyledTopBarWrapper,
  StyledTitle,
  StyledToolsWrapper,
  StyledSvg,
  StyledLineSvg,
  StyledSvgWrapper,
  StyledName,
  StyledImgBorder,
  StyledImg,
  StyledInput,
} from "./style";
import { useLocation } from "react-router-dom";
import profilePhoto from "../../images/profile-photo.png";

export const TopBar = () => {
  const location = useLocation();
  const [isInputShown, setIsInputShown] = useState(false);

  const handleSearchClick = () => {
    setIsInputShown(!isInputShown);
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
        <StyledSvgWrapper>
          <StyledInput isInputShown={isInputShown} />
          <StyledSvg
            onClick={handleSearchClick}
            className="search"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_584_242)">
              <circle
                cx="6.5"
                cy="6.5"
                r="5.75"
                stroke="#C5C7CD"
                strokeWidth="1.5"
              />
              <path
                d="M11 11L15 15"
                stroke="#C5C7CD"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_584_242">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </StyledSvg>
          <StyledSvg
            className="bell"
            width="1em"
            height="1em"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.99999 16C8.10374 16 8.99905 15.1047 8.99905 14H5.00093C5.00093 15.1047 5.89624 16 6.99999 16ZM13.7309 11.3216C13.1272 10.6728 11.9975 9.69687 11.9975 6.5C11.9975 4.07188 10.295 2.12812 7.99937 1.65125V1C7.99937 0.447812 7.55187 0 6.99999 0C6.44812 0 6.00062 0.447812 6.00062 1V1.65125C3.70499 2.12812 2.00249 4.07188 2.00249 6.5C2.00249 9.69687 0.872804 10.6728 0.269054 11.3216C0.0815536 11.5231 -0.00157141 11.7641 -8.9117e-06 12C0.00342859 12.5125 0.405616 13 1.00312 13H12.9969C13.5944 13 13.9969 12.5125 14 12C14.0016 11.7641 13.9184 11.5228 13.7309 11.3216Z"
              fill="#C5C7CD"
            />
          </StyledSvg>
        </StyledSvgWrapper>

        <StyledLineSvg
          width="1em"
          height="1em"
          viewBox="0 0 2 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 0V32" stroke="#DFE0EB" />
        </StyledLineSvg>

        <StyledName>Jones Ferdinand</StyledName>
        <StyledImgBorder>
          <StyledImg src={profilePhoto} alt="profile" />
        </StyledImgBorder>
      </StyledToolsWrapper>
    </StyledTopBarWrapper>
  );
};
