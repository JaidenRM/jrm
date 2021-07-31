import { ThemeSchema } from "../@types/theme";

export const LIGHT_THEME: ThemeSchema = {
  id: "T_002",
  name: "Light",
  colors: {
    body: "#FFFFFF",
    text: "#000000",
    link: "blue",
    primary: {
      fg: "#000000",
      bg: "#FFFFFF",
    },
    secondary: {
      fg: "lightgrey",
      bg: "#FFFFFF",
    },
  },
  font: {
    font: "Ubuntu",
  },
  media: {
    phones: "576px",
    tablets: "768px",
    laptops: "992px",
    xlarge: "1200px",
  },
  zindex: {
    nav: 100,
    topbar: 1000,
    carousel: {
      itemFirst: 30,
      fullScreen: 900,
    },
  },
};
