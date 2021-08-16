import styled, { css } from "styled-components";
import { GatsbyBackgroundImage } from "./gatsby-bg-image";

const HeroTextAnimations = css`
  .heroo-text-enter,
  .heroo-text-appear {
    transform: translateX(-100%);
    opacity: 0;
  }
  .heroo-text-enter-active,
  .heroo-text-appear-active {
    opacity: 1;
    transform: translateX(0%);
    transition: all 1250ms ease-in-out;
  }
  .heroo-text-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  .heroo-text-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 1000ms ease-in;
  }
`;

export const StyledBgSection = styled(GatsbyBackgroundImage)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  border-radius: 2.5rem;
  overflow: hidden;

  &:after {
    opacity: ${({ theme }) => (theme.name === "Light" ? 0.25 : 0.5)} !important;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;
  border-radius: 2.5rem;

  ${HeroTextAnimations}
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
`;

export const HeroTextItem = styled.div``;

export const BigHeroHeader = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 64px;
  margin: 0.5rem 0;

  ${({ theme }) => `
    @media screen and (max-width: ${theme.media.tablets}) {
      font-size: 56px;
    }
  
    @media screen and (max-width: ${theme.media.phones}) {
      font-size: 48px;
    }
  `}
`;

export const SmallHeroHeader = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 48px;
  margin: 0.5rem 0 0.5rem 2.5rem;

  ${({ theme }) => `
    @media screen and (max-width: ${theme.media.tablets}) {
      font-size: 40px;
      margin-left: 1.5rem;
    }
  
    @media screen and (max-width: ${theme.media.phones}) {
      font-size: 32px;
      margin-left: 0;
    }
  `}
`;

export const HeroDescription = styled.h6`
  font-weight: normal;
  margin: 1rem 0 1rem 5rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 22px;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    margin-left: 3rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    margin-left: 0;
  }
`;
