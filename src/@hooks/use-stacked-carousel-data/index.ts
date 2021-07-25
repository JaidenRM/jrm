import React, { useCallback, useState, useEffect } from "react";
import { shiftArray } from "../../utils/shift-array";

interface StackedCarouselResults {
  orderedChildren: React.ReactNode[];
  currentIndex: number;
  onPreviousHandler: () => void;
  onNextHandler: () => void;
  setTimerPause: (isPaused: boolean) => void;
}

export const useStackedCarouselData = (
  children: React.ReactNode
): StackedCarouselResults => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pauseModal, setPauseModal] = useState(false);
  const [orderedChildren, setOrderedChildren] = useState(
    React.Children.toArray(children)
  );

  const onPreviousHandler = useCallback(() => {
    setOrderedChildren(prev => shiftArray(prev, false));
    setCurrentIndex(prev => {
      if (prev <= 0) return orderedChildren.length - 1;

      return prev - 1;
    });
  }, [orderedChildren]);

  const onNextHandler = useCallback(() => {
    setOrderedChildren(prev => shiftArray(prev, true));
    setCurrentIndex(prev => {
      if (prev >= orderedChildren.length - 1) return 0;

      return prev + 1;
    });
  }, [orderedChildren]);

  useEffect(() => {
    const interval = pauseModal
      ? undefined
      : setInterval(() => {
          onNextHandler();
        }, 7000);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [onNextHandler, pauseModal]);

  return {
    orderedChildren,
    currentIndex,
    onPreviousHandler,
    onNextHandler,
    setTimerPause: setPauseModal,
  };
};
