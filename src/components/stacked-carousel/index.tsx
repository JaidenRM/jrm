import React from "react";
import map from "lodash/map";
import filter from "lodash/filter";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./index.styled";
import { useStackedCarouselData } from "../../@hooks/use-stacked-carousel-data";
import { useModalContext } from "../../providers/modal";
import { FullScreenModal } from "../full-screen-modal";
import { Icon } from "../icon";

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
  const [, { setChild, setDisplay }] = useModalContext();
  const onClose = () => {
    setDisplay(false);
    setTimerPause(false);
  };

  if (orderedChildren.length > 0)
    return (
      <S.CarouselWrapper>
        <S.CarouselPrevious onClick={onPreviousHandler}>
          <Icon icon={faChevronLeft} />
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
                        setChild(
                          <FullScreenModal onClose={onClose}>
                            {child}
                          </FullScreenModal>,
                          true
                        );
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
          <Icon icon={faChevronRight} />
        </S.CarouselNext>
      </S.CarouselWrapper>
    );

  return <h1>No slides</h1>;
};
