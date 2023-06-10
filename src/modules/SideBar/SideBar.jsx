import { useState, Suspense } from "react";
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
  StyledSidebarWrapper,
} from "./style";
import { menuItems } from "./menuItems";
import { Navigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { LogoSvgLazy } from "../../assets/LogoSvgLazy";
import { setLoggedIn } from "../../store";
import { useDispatch } from "react-redux";

export const SideBar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    dispatch(setLoggedIn(false));
    <Navigate to="/" />;
  };

  return (
    <StyledSideBarContainer
      id="sidebar"
      isOpen={isOpen}
      onClick={handleClickOutside}
    >
      <StyledSidebarWrapper isOpen={isOpen}>
        <StyledSidebar onClick={(event) => event.stopPropagation()}>
          <StyledTopWrapper>
            <StyledLogoSvgWrapper>
              <Suspense fallback={<div>Loading...</div>}>
                <LogoSvgLazy />
              </Suspense>
            </StyledLogoSvgWrapper>
            <StyledLogoText>DashBoard</StyledLogoText>
            <StyledBarsOutlined onClick={toggleSidebar} />
          </StyledTopWrapper>

          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <StyledLink to={item.path} key={item.id}>
                <StyledSvgWrapper>
                  <Suspense fallback="Loading...">
                    <Icon />
                  </Suspense>
                </StyledSvgWrapper>
                <StyledText isOpen={isOpen}>{item.name}</StyledText>
              </StyledLink>
            );
          })}

          <StyledLogoutWrapper onClick={handleLogout}>
            <StyledLogoutOutlined />
            <StyledText isOpen={isOpen}>Log out</StyledText>
          </StyledLogoutWrapper>

          <StyledSearchBtn onClick={toggleSidebar} isOpen={isOpen} />
          <StyledInputWrapper isOpen={isOpen}>
            <StyledSearch
              placeholder="Search"
              enterButton={<SearchOutlined />}
            />
          </StyledInputWrapper>
        </StyledSidebar>
      </StyledSidebarWrapper>
    </StyledSideBarContainer>
  );
};
