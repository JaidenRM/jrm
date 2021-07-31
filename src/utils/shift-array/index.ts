export const shiftArray = <T>(arr: Array<T>, moveRight?: boolean): Array<T> => {
  const copiedArr = [...arr];

  if (moveRight) {
    const lastItem = copiedArr.pop();
    if (lastItem) copiedArr.unshift(lastItem);
  } else {
    const firstItem = copiedArr.shift();
    if (firstItem) copiedArr.push(firstItem);
  }

  return copiedArr;
};
