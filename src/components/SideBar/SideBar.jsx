import { useState, useEffect } from "react";
import {
  StyledText,
  StyledSidebar,
  StyledLink,
  StyledTopWrapper,
  StyledLogoSvgWrapper,
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
import { ReactComponent as LogoSvg } from "../../assets/svg/logo.svg";

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
          <StyledLogoSvgWrapper>
            <LogoSvg />
          </StyledLogoSvgWrapper>
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
