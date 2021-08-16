import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

interface NavProps {
  isScrolling?: boolean;
  isVisible: boolean;
}

export const Nav = styled.nav<NavProps>`
  background: ${({ isScrolling, theme }) =>
    isScrolling ? theme.colors.secondary.normal.bg : "transparent"};
  border-bottom: ${({ isScrolling, theme }) =>
    isScrolling ? `1px solid ${theme.colors.text}` : "none"};
  height: 80px;
  transition: all 0.3s ease-in-out, visibility 1s, opacity 1s ease-in-out;
  display: flex;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zindex.nav};

  @media screen and (max-width: 960px) {
    transition: all 0.8s ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 2rem;
  max-width: 1100px;
`;

export const NavMobileWrapper = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};

  ${({ theme }) => `
    @media screen and (max-width: ${theme.media.tablets}) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `};
`;

export const NavLeftWrapper = styled.div`
  margin: auto 0;
  flex: 1 1;
`;

export const NavRightWrapper = styled.div`
  flex: 1 1;
`;

export const NavMenu = styled.ul`
  display: none;
  list-style: none;
  justify-content: center;
  margin: 0;
  padding: 0;
  height: 100%;
  flex: 1;

  ${({ theme }) => `
    @media screen and (min-width: ${theme.media.tablets}) {
      display: flex;
    }
  `};
`;

export const NavMenuItem = styled.li`
  height: 100%;
  margin: 0 1rem;
`;

export const NavLinks = styled(LinkScroll)`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.header};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: color 1s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.normal.bg};
  }

  &.active {
    border-bottom: 4px solid ${({ theme }) => theme.colors.primary.normal.bg};
  }
`;
