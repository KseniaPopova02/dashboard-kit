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
  StyledLogoutOutlined,
  StyledLogoutWrapper,
} from "./style";
import { menuItems } from "./menuItems";
import { SearchOutlined } from "@ant-design/icons";
import { ReactComponent as LogoSvg } from "../../assets/svg/logo.svg";

export const SideBar = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    event.stopPropagation();
    setIsOpen(false);
  };

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

        <StyledLogoutWrapper onClick={handleLogout}>
          <StyledLogoutOutlined />
          <StyledText isOpen={isOpen}>Log out</StyledText>
        </StyledLogoutWrapper>
        <StyledSearchBtn onClick={toggleSidebar} isOpen={isOpen} />
        <StyledInputWrapper isOpen={isOpen}>
          <StyledSearch placeholder="Search" enterButton={<SearchOutlined />} />
        </StyledInputWrapper>
      </StyledSidebar>
    </StyledSideBarContainer>
  );
};
