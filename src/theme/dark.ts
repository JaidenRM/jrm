import { ThemeSchema } from "../@types/theme";

export const DARK_THEME: ThemeSchema = {
  id: "T_001",
  name: "Dark",
  colors: {
    body: "#000000",
    text: "#FFFFFF",
    primary: {
      fg: "#FFFFFF",
      bg: "#000000",
    },
    secondary: {
      fg: "#FFFFFF",
      bg: "lightgrey",
    },
    link: "blue",
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
