import { ThemeSchema } from "../@types/theme";

export const DARK_THEME: ThemeSchema = {
  id: "T_001",
  name: "Dark",
  colors: {
    body: "#000000",
    text: "#FFFFFF",
    primary: {
      lighter: {
        fg: "#FFFFFF",
        bg: "#82ebe0",
      },
      normal: {
        fg: "#FFFFFF",
        bg: "#40e0d0",
      },
      darker: {
        fg: "#FFFFFF",
        bg: "#1EB6A7",
      },
    },
    secondary: {
      lighter: {
        fg: "#FFFFFF",
        bg: "#121212",
      },
      normal: {
        fg: "#FFFFFF",
        bg: "#121212",
      },
      darker: {
        fg: "#FFFFFF",
        bg: "#121212",
      },
    },
    link: "#40e0d0",
  },
  font: {
    body: "'Montserrat','Merriweather Sans',  sans-serif",
    header: "'Merriweather Sans', 'Montserrat', sans-serif",
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
