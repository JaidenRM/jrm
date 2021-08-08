import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { NAV_OPTIONS } from "../../utils/constants/nav";

const navOptsLen = Object.keys(NAV_OPTIONS).length;

export const TopbarContainer = styled.aside<{ isOpen: boolean }>`
  position: fixed;
  z-index: ${({ theme }) => theme.zindex.topbar};
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.body};
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  top: ${({ isOpen }) => (isOpen ? 0 : "-100%")};
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
`;
export const TopbarMenuWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(${navOptsLen}, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(${navOptsLen}, 60px);
  }
`;

export const TopbarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style-type: none;
  transition: 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.normal.bg};
    transition: 0.2s ease-in-out;
  }
`;
