export const setToLS = <T>(key: string, value: T): void => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLS = (key: string): string | undefined => {
  const item = window.localStorage.getItem(key);

  if (item) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsedItem = JSON.parse(item);
    if (typeof parsedItem === "string") return parsedItem;
  }

  return undefined;
};
