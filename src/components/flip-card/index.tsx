import { faFile } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { CSSTransition } from "react-transition-group";
import * as S from "./index.styled";

interface FlipCardProps {
  flippedClassName?: string;
  className?: string;
  isFlipped: boolean;
  onFlip?: () => void;
  hasInteractivity?: boolean;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  children,
  flippedClassName,
  className,
  isFlipped,
  onFlip,
  hasInteractivity = false,
}) => {
  const childArr = React.Children.toArray(children);

  if (childArr.length !== 2) return <h1>Expected 2 children</h1>;

  return (
    <S.CardWrapper
      className={`${`${className || ""} `}${
        isFlipped && flippedClassName ? flippedClassName : ""
      }`}
      onClick={!hasInteractivity && onFlip ? onFlip : undefined}
    >
      {!isFlipped && (
        <CSSTransition in={!isFlipped} timeout={300} classNames="front-card">
          <S.Card isFront>
            {hasInteractivity && (
              <S.ActionsWrapper>
                <S.FlipIconWrapper onClick={onFlip}>
                  <S.FlipIcon icon={faFile} />
                </S.FlipIconWrapper>
              </S.ActionsWrapper>
            )}
            <S.ChildWrapper>{childArr[0]}</S.ChildWrapper>
          </S.Card>
        </CSSTransition>
      )}
      {isFlipped && (
        <CSSTransition in={isFlipped} timeout={300} classNames="back-card">
          <S.Card isFront={false}>
            {hasInteractivity && (
              <S.ActionsWrapper>
                <S.FlipIconWrapper onClick={onFlip}>
                  <S.FlipIcon icon={faFile} />
                </S.FlipIconWrapper>
              </S.ActionsWrapper>
            )}
            <S.ChildWrapper>{childArr[1]}</S.ChildWrapper>
          </S.Card>
        </CSSTransition>
      )}
    </S.CardWrapper>
  );
};
