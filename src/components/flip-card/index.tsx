import { faFile } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import * as S from "./index.styled";

interface FlipCardProps {
  flippedClassName?: string;
  className?: string;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  children,
  flippedClassName,
  className,
}) => {
  const childArr = React.Children.toArray(children);
  const [isFlipped, setIsFlipped] = useState(false);
  const toggleFlip = () => setIsFlipped(prev => !prev);

  if (childArr.length !== 2) return <h1>Expected 2 children</h1>;

  return (
    <S.CardWrapper
      className={`${`${className || ""} `}${
        isFlipped && flippedClassName ? flippedClassName : ""
      }`}
    >
      {!isFlipped && (
        <CSSTransition in={!isFlipped} timeout={300} classNames="front-card">
          <S.Card isFront>
            <S.ActionsWrapper>
              <S.ShakeIcon icon={faFile} onClick={toggleFlip} />
            </S.ActionsWrapper>
            <S.ChildWrapper>{childArr[0]}</S.ChildWrapper>
          </S.Card>
        </CSSTransition>
      )}
      {isFlipped && (
        <CSSTransition in={isFlipped} timeout={300} classNames="back-card">
          <S.Card isFront={false}>
            <S.ActionsWrapper>
              <S.ShakeIcon icon={faFile} onClick={toggleFlip} />
            </S.ActionsWrapper>
            <S.ChildWrapper>{childArr[1]}</S.ChildWrapper>
          </S.Card>
        </CSSTransition>
      )}
    </S.CardWrapper>
  );
};
