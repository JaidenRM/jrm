import React, { useState } from "react";
import map from "lodash/map";
import filter from "lodash/filter";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FcPrevious, FcNext } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import * as S from "./index.styled";
import { useStackedCarouselData } from "../../@hooks/use-stacked-carousel-data";

interface StackedCarouselProps {
  visibleItems: number;
}

export const StackedCarousel: React.FC<StackedCarouselProps> = ({
  children,
  visibleItems = 3,
}) => {
  const {
    orderedChildren,
    currentIndex,
    onPreviousHandler,
    onNextHandler,
    setTimerPause,
  } = useStackedCarouselData(children);
  const [modalImage, setModalImage] = useState<React.ReactNode>();

  if (modalImage)
    return (
      <S.FullScreenContainer>
        <S.FullScreenCloseIcon
          onClick={() => {
            setModalImage(undefined);
            setTimerPause(false);
          }}
        >
          <GrClose />
        </S.FullScreenCloseIcon>
        <S.FullScreenChildWrapper>{modalImage}</S.FullScreenChildWrapper>
      </S.FullScreenContainer>
    );

  if (orderedChildren.length > 0)
    return (
      <S.CarouselWrapper>
        <S.CarouselPrevious>
          <FcPrevious onClick={onPreviousHandler} />
        </S.CarouselPrevious>
        <S.CarouselItemsWrapper items={visibleItems}>
          <TransitionGroup>
            {map(
              filter(orderedChildren, (_, idx) => idx <= visibleItems),
              (child, idx) => (
                <CSSTransition
                  key={(currentIndex + idx) % orderedChildren.length}
                  timeout={500}
                  classNames="carousel-item"
                >
                  <S.CarouselItem
                    key={(currentIndex + idx) % orderedChildren.length}
                    order={idx}
                    isShowing={idx < visibleItems}
                    onClick={() => {
                      setModalImage(child);
                      setTimerPause(true);
                    }}
                  >
                    {child}
                  </S.CarouselItem>
                </CSSTransition>
              )
            )}
          </TransitionGroup>
        </S.CarouselItemsWrapper>
        <S.CarouselNext>
          <FcNext onClick={onNextHandler} />
        </S.CarouselNext>
      </S.CarouselWrapper>
    );

  return <h1>No slides</h1>;
};
