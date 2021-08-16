import styled from "styled-components";
import { Icon } from "../icon";
import { shakeAnim } from "../shared/animations.styled";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${({ theme }) => theme.zindex.carousel.fullScreen};
`;

export const ChildWrapper = styled.div`
  max-width: 1100px;
  max-height: 621px;
  width: 100%;
  height: 100%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseIconWrapper = styled.div`
  position: fixed;
  display: flex;
  border-radius: 50%;
  right: 1rem;
  top: 1rem;
  font-size: 4rem;
  z-index: ${({ theme }) => theme.zindex.carousel.fullScreen + 1};
  background: ${({ theme }) => theme.colors.body};

  &:hover {
    animation: ${shakeAnim} 3.5s ease-in-out infinite;
    cursor: pointer;
  }
`;

export const CloseIcon = styled(Icon)`
  display: flex;
  padding: 0.5rem;
`;

export const StackedElementContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: 1rem;
  z-index: ${({ theme }) => theme.zindex.carousel.fullScreen + 1};
  background: ${({ theme }) => theme.colors.body};
  border: 1px solid ${({ theme }) => theme.colors.text};
  text-align: center;
  left: 50%;
  max-width: 80%;
  transform: translateX(-50%);
`;

export const StackedElement = styled.div`
  padding: 0.5rem 4rem;
  flex: 1;
`;

export const StackedElementHeader = styled.h2`
  font-size: 22px;
  margin: 0;
`;

export const StackedElementActions = styled.div`
  flex: 1;
  align-self: flex-end;
  padding-right: 1.5rem;
`;

export const IconWrapper = styled.div``;

export const HoveredIcon = styled(Icon)`
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary.normal.bg};
    transition: color 0.5s ease-in-out;
  }
`;
