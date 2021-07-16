import React from "react";
import * as S from "./index.styled";

export const HeroSection: React.FC = () => {
  return (
    <S.HeroContainer id="hero">
      <S.HeroBg>Hi</S.HeroBg>
      <S.HeroContent>
        <S.HeroHeader>Welcome</S.HeroHeader>
        <S.HeroDescription>
          This is my website, thanks for coming to my TED Talk.
        </S.HeroDescription>
      </S.HeroContent>
    </S.HeroContainer>
  );
};
