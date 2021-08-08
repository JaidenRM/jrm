import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import { FlipOverAnim } from "../shared/animations.styled";

const CardFlipCssAnimations = css`
  .front-card-enter {
    opacity: 0;
  }
  .front-card-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .front-card-exit {
    opacity: 1;
  }
  .front-card-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }

  .back-card-enter {
    opacity: 0;
  }
  .back-card-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .back-card-exit {
    opacity: 1;
  }
  .back-card-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

export const Card = styled.div<{ isFront: boolean }>`
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.body};
  height: 100%;
  box-sizing: border-box;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 ${({ theme }) => theme.colors.text};
  transition: 0.3s;

  ${({ isFront, theme }) =>
    isFront &&
    `
      &:hover {
        box-shadow: 0 8px 16px 0 ${theme.colors.primary.normal.bg},
          0 0 0 3px ${theme.colors.primary.normal.bg};
        transform: translateY(-1rem);
      }`}
`;

export const ActionsWrapper = styled.div`
  width: 100%;
  font-size: 2.5rem;
  text-align: end;
`;

export const FlipIconWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const FlipIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.primary.normal.bg};

  &:hover {
    animation: ${FlipOverAnim} 1.5s linear infinite;
  }
`;

export const ChildWrapper = styled.div`
  width: 100%;
`;

export const CardWrapper = styled.div`
  ${CardFlipCssAnimations}
`;
