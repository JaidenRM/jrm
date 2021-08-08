import styled, { css } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

interface PrimaryBtnProps {
  isBig?: boolean;
  isFontBig?: boolean;
}

const PrimaryButtonCss = css<PrimaryBtnProps>`
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.primary.normal.bg};
  color: ${({ theme }) => theme.colors.primary.normal.fg};
  white-space: nowrap;
  padding: ${({ isBig }) => (isBig ? "14px 48px" : "12px 30px")};
  font-size: ${({ isFontBig }) => (isFontBig ? "20px" : "16px")};
  font-family: ${({ theme }) => theme.font.header};
  border: 3px solid ${({ theme }) => theme.colors.primary.darker.bg};
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: ${({ theme }) => theme.colors.primary.darker.bg};
    border-color: ${({ theme }) => theme.colors.primary.normal.bg};
  }
`;

export const PrimaryLinkScrollButton = styled(LinkScroll)<PrimaryBtnProps>`
  ${PrimaryButtonCss}
`;

export const PrimaryButton = styled.button<PrimaryBtnProps>`
  ${PrimaryButtonCss}
`;
