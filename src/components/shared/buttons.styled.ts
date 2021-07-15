import styled from "styled-components"
import { Link as LinkScroll } from "react-scroll"

interface PrimaryBtnProps {
  isPrimary?: boolean
  isBig?: boolean
  isDark?: boolean
  isFontBig?: boolean
}

export const PrimaryButton = styled(LinkScroll)<PrimaryBtnProps>`
  border-radius: 50px;
  background: ${({ isPrimary }) => (isPrimary ? "#01BF71" : "#010606")};
  white-space: nowrap;
  padding: ${({ isBig }) => (isBig ? "14px 48px" : "12px 30px")};
  color: ${({ isDark }) => (isDark ? "#010606" : "#01BF71")};
  font-size: ${({ isFontBig }) => (isFontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ isPrimary }) => (isPrimary ? "#fff" : "#01BF71 ")};
  }
`
