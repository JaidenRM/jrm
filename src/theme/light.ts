import { ThemeSchema } from "../@types/theme";

export const LIGHT_THEME: ThemeSchema = {
  id: "T_002",
  name: "Light",
  colors: {
    body: "#FFFFFF",
    text: "#000000",
    link: "#1EB6A7",
    primary: {
      lighter: {
        fg: "#000000",
        bg: "#82EBE0",
      },
      normal: {
        fg: "#000000",
        bg: "#40E0D0",
      },
      darker: {
        fg: "#000000",
        bg: "#1EB6A7",
      },
    },
    secondary: {
      lighter: {
        fg: "#000000",
        bg: "#f7f7f7",
      },
      normal: {
        fg: "#000000",
        bg: "#f7f7f7",
      },
      darker: {
        fg: "#000000",
        bg: "#f7f7f7",
      },
    },
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
