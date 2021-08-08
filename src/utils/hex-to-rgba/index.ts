import repeat from "lodash/repeat";

export const hexToRGBA = (hex: string, alpha: number): string => {
  if (hex.length !== 4 && hex.length !== 7) return "";

  const isShort = hex.length === 4;

  const r = parseInt(
    isShort ? repeat(hex.slice(1, 2), 2) : hex.slice(1, 3),
    16
  );
  const g = parseInt(
    isShort ? repeat(hex.slice(2, 3), 2) : hex.slice(3, 5),
    16
  );
  const b = parseInt(
    isShort ? repeat(hex.slice(3, 4), 2) : hex.slice(5, 7),
    16
  );

  const isValidAlpha = alpha >= 0 && alpha <= 1;

  return `rgba(${r}, ${g}, ${b}, ${isValidAlpha ? alpha : 1})`;
};
