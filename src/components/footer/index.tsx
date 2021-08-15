import React from "react";
import { MyLinks } from "../my-links";
import * as S from "./index.styled";

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.MainContainer>
        <S.PlaygroundContainer />
        <S.LinksContainer>
          <MyLinks />
        </S.LinksContainer>
        <S.EndContainer>
          <S.SmallerSpan>
            © {new Date().getFullYear()}, Created by Jaiden Muscat
          </S.SmallerSpan>
        </S.EndContainer>
      </S.MainContainer>
    </S.Footer>
  );
};
