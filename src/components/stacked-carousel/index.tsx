import React from "react";
import map from "lodash/map";
import filter from "lodash/filter";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./index.styled";
import { useStackedCarouselData } from "../../@hooks/use-stacked-carousel-data";
import { useModalContext } from "../../providers/modal";

interface StackedCarouselProps {
  visibleItems: number;
}

const getFullScreenContainer = (
  child: React.ReactNode,
  onClose: () => void
) => (
  <S.FullScreenContainer>
    <S.FullScreenCloseIcon onClick={onClose}>
      <FontAwesomeIcon icon={faTimes} />
    </S.FullScreenCloseIcon>
    <S.FullScreenChildWrapper>{child}</S.FullScreenChildWrapper>
  </S.FullScreenContainer>
);

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
  const [, { setChild, setDisplay }] = useModalContext();
  const onClose = () => {
    setDisplay(false);
    setTimerPause(false);
  };

  if (orderedChildren.length > 0)
    return (
      <S.CarouselWrapper>
        <S.CarouselPrevious onClick={onPreviousHandler}>
          <FontAwesomeIcon icon={faChevronLeft} />
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
                      if (idx === 0) {
                        setChild(getFullScreenContainer(child, onClose), true);
                        setTimerPause(true);
                      }
                    }}
                  >
                    {child}
                  </S.CarouselItem>
                </CSSTransition>
              )
            )}
          </TransitionGroup>
        </S.CarouselItemsWrapper>
        <S.CarouselNext onClick={onNextHandler}>
          <FontAwesomeIcon icon={faChevronRight} />
        </S.CarouselNext>
      </S.CarouselWrapper>
    );

  return <h1>No slides</h1>;
};
