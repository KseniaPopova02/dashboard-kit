import { useState, useEffect, Suspense } from "react";
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
import { LogoSvgLazy } from "../../assets/LogoSvgLazy";

export const SideBar = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    setIsOpen(false);
    event.stopPropagation();
    // if (!event.target.closest("#sidebar")) {
    //   event.stopPropagation();
    //   setIsOpen(false);
    // }
  };

  // useEffect(() => {
  //   document.addEventListener("click", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // });

  return (
    <StyledSideBarContainer
      id="sidebar"
      isOpen={isOpen}
      onClick={handleClickOutside}
    >
      <StyledSidebar>
        <StyledTopWrapper>
          <StyledLogoSvgWrapper>
            <Suspense fallback={<div>Loading...</div>}>
              <LogoSvgLazy />
            </Suspense>
          </StyledLogoSvgWrapper>
          <StyledLogoText>DashBoard</StyledLogoText>
          <StyledBarsOutlined onClick={toggleSidebar} />
        </StyledTopWrapper>

        {menuItems.map((item) => (
          <StyledLink to={item.path} key={item.id}>
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
