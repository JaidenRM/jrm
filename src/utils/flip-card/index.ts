import reduce from "lodash/reduce";

type FlipCardStateDict = { [index: number]: boolean };

export const setInitialStateForAllFlipCards = <T>(
  arr: T[]
): FlipCardStateDict =>
  reduce(
    arr,
    (acc, _, idx) => {
      return {
        ...acc,
        [idx]: false,
      };
    },
    {}
  );
