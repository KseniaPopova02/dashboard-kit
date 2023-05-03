import { useState, useEffect } from "react";
import {
  StyledText,
  StyledSidebar,
  StyledLink,
  StyledTopWrapper,
  StyledLogoSvg,
  StyledLogoText,
  StyledBarsOutlined,
  StyledSvgWrapper,
  StyledSideBarContainer,
  StyledInputWrapper,
  StyledSearch,
  StyledSearchBtn,
} from "./style";
import { menuItems } from "./menuItems";
import { SearchOutlined } from "@ant-design/icons";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (!event.target.closest("#sidebar")) {
      event.stopPropagation();
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <StyledSideBarContainer
      id="sidebar"
      isOpen={isOpen}
      onClick={handleClickOutside}
    >
      <StyledSidebar>
        <StyledTopWrapper>
          <StyledLogoSvg
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#3751FF" />
            <path
              d="M11 10C11 9.44772 11.4477 9 12 9H15.9905C18.2127 9 19.9333 9.60955 21.1524 10.8287C22.3841 12.0478 23 13.765 23 15.9803C23 18.2088 22.3841 19.9391 21.1524 21.1713C19.9333 22.3904 18.2127 23 15.9905 23H12C11.4477 23 11 22.5523 11 22V10Z"
              fill="url(#paint0_linear_584_285)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_584_285"
                x1="11"
                y1="9"
                x2="23"
                y2="23"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0.7" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
            </defs>
          </StyledLogoSvg>
          <StyledLogoText>DashBoard</StyledLogoText>
          <StyledBarsOutlined onClick={toggleSidebar} />
        </StyledTopWrapper>

        {menuItems.map((item, index) => (
          <StyledLink to={item.path} key={index}>
            <StyledSvgWrapper>{item.icon}</StyledSvgWrapper>
            <StyledText isOpen={isOpen}>{item.name}</StyledText>
          </StyledLink>
        ))}
        <StyledSearchBtn onClick={toggleSidebar} isOpen={isOpen} />
        <StyledInputWrapper isOpen={isOpen}>
          <StyledSearch placeholder="Search" enterButton={<SearchOutlined />} />
        </StyledInputWrapper>
      </StyledSidebar>
    </StyledSideBarContainer>
  );
};
