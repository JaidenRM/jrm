import React, { useEffect, useState } from "react";
import map from "lodash/map";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as S from "./index.styled";

interface HeroProps {
  id: string;
}

const currentJob = (
  <a href="https://compass.education" target="_blank" rel="noreferrer">
    Compass Education
  </a>
);

const heroTextElements = [
  <S.BigHeroHeader>Hey,</S.BigHeroHeader>,
  <S.SmallHeroHeader>I&apos;m Jaiden Muscat</S.SmallHeroHeader>,
  <S.HeroDescription>
    I enjoy dabbling in new technologies and tinkering about. Currently I&apos;m
    working at {currentJob} as a software engineer.
  </S.HeroDescription>,
];

export const HeroSection: React.FC<HeroProps> = ({ id }) => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => setIsPageLoaded(true), []);

  return (
    <S.StyledBgSection id={id}>
      <S.HeroContainer>
        <S.HeroContent>
          <TransitionGroup>
            {isPageLoaded &&
              map(heroTextElements, (textElement, idx) => {
                const delay = idx * 750;

                return (
                  <CSSTransition
                    key={idx}
                    in={isPageLoaded}
                    classNames="hero-text"
                    timeout={delay + 1500}
                  >
                    <S.HeroTextItem delayMs={delay}>
                      {textElement}
                    </S.HeroTextItem>
                  </CSSTransition>
                );
              })}
          </TransitionGroup>
        </S.HeroContent>
      </S.HeroContainer>
    </S.StyledBgSection>
  );
};
