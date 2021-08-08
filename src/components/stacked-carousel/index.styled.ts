import styled, { css, keyframes } from "styled-components";
import { shakeAnim } from "../shared/animations.styled";

const stackedDistance = "0.75rem";
const carouselItemAnimCss = css`
  .carousel-item-enter {
    opacity: 0;
    transform: translate(40px, 40px);
  }
  .carousel-item-enter-active {
    opacity: 1;
    transform: translate(-40px, -40px);
    transition: all 750ms ease-in;
  }
  .carousel-item-exit {
    opacity: 1;
    transform: translate(100px, 100px);
  }
  .carousel-item-exit-active {
    opacity: 0;
    transform: translate(-150px, -150px);
    transition: all 400ms ease-out;
  }
`;

interface CarouselItemsWrapperProps {
  items: number;
}

interface CarouselItemProps {
  order: number;
  isShowing?: boolean;
}

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: row;

  ${({ theme }) => `
    @media screen and (max-width: ${theme.media.tablets}) {
      position: relative;
    }
  `}
`;

export const CarouselItemsWrapper = styled.div<CarouselItemsWrapperProps>`
  position: relative;
  margin: ${({ items }) =>
    `2rem calc(2rem + (${items} * ${stackedDistance})) calc(2rem + (${items} * ${stackedDistance})) 2rem`};
  height: 80vh;
  max-height: 500px;
  width: 100%;

  ${carouselItemAnimCss}

  ${({ theme, items }) => `
    @media screen and (max-width: ${theme.media.tablets}) {
      margin: 1rem calc(1rem + (${items} * ${stackedDistance})) calc(1rem + (${items} * ${stackedDistance})) 1rem;
    }
  `}
`;

export const CarouselItem = styled.div<CarouselItemProps>`
  height: 100%;
  width: 100%;
  padding: 10px;
  position: absolute;
  outline: 3px solid ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.body};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.body};
  margin: auto;
  top: calc(${({ order }) => order} * ${stackedDistance});
  left: calc(${({ order }) => order} * ${stackedDistance});
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme, order }) => theme.zindex.carousel.itemFirst - order};
  opacity: ${({ isShowing }) => (isShowing ? 1 : 0)};
  transition: all 0.5s ease-out;
`;

export const CarouselPrevious = styled.div`
  margin: auto;
  margin-right: 50px;
  font-size: 64px;
  z-index: ${({ theme }) => theme.zindex.carousel.itemFirst + 1};
  color: ${({ theme }) => theme.colors.text};

  ${({ theme }) => `
    @media screen and (max-width: ${theme.media.tablets}) {
      margin-right: 10px;
      font-size: 48px;
      position: absolute;
      left: -1.5rem;
      top: calc(50% - 24px);
    }
  `}

  &:hover {
    cursor: pointer;
  }
`;

export const CarouselNext = styled.div`
  margin: auto;
  margin-left: 50px;
  font-size: 64px;
  z-index: ${({ theme }) => theme.zindex.carousel.itemFirst + 1};
  color: ${({ theme }) => theme.colors.text};

  ${({ theme }) => `
    @media screen and (max-width: ${theme.media.tablets}) {
      margin-left: 10px;
      font-size: 48px;
      position: absolute;
      right: -1.5rem;
      top: calc(50% - 24px);
    }
  `}

  &:hover {
    cursor: pointer;
  }
`;

export const FullScreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${({ theme }) => theme.zindex.carousel.fullScreen};
`;

export const FullScreenChildWrapper = styled.div`
  max-width: 1100px;
  max-height: 621px;
  width: 100%;
  height: 100%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FullScreenCloseIcon = styled.div`
  position: fixed;
  display: flex;
  padding: 0.4rem 1rem;
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
