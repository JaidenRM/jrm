import styled, { css } from "styled-components";

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
