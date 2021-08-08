import React from "react";
import * as S from "./index.styled";

interface HeroProps {
  id: string;
}

export const HeroSection: React.FC<HeroProps> = ({ id }) => {
  const currentJob = (
    <a href="https://compass.education" target="_blank" rel="noreferrer">
      Compass Education
    </a>
  );
  return (
    <S.StyledBgSection id={id}>
      <S.HeroContainer>
        <S.HeroContent>
          <S.BigHeroHeader>Hey,</S.BigHeroHeader>
          <S.SmallHeroHeader>I&apos;m Jaiden Muscat</S.SmallHeroHeader>
          <S.HeroDescription>
            I enjoy dabbling in new technologies and tinkering about. Currently
            I&apos;m working at {currentJob} as a software engineer.
          </S.HeroDescription>
        </S.HeroContent>
      </S.HeroContainer>
    </S.StyledBgSection>
  );
};
