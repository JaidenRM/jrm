import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const TopbarContainer = styled.aside<{ isOpen: boolean }>`
  position: fixed;
  z-index: ${({ theme }) => theme.zindex.topbar};
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  top: ${({ isOpen }) => (isOpen ? 0 : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const TopbarMenuWrapper = styled.div`
  color: #fff;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
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
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
